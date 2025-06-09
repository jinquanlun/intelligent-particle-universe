/**
 * 智元粒子宇宙核心引擎
 * 高性能粒子系统管理器
 */

import * as THREE from 'three';
import { gsap } from 'gsap';
import { CONFIG, MorphType } from '../data/config';
import { morphTargetGenerator, MorphTargetData } from '../data/morphTargets';
import { TransitionController } from './TransitionController';
import { ConnectionSystem } from './ConnectionSystem';

/**
 * 粒子引擎类
 */
export class ParticleEngine {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private geometry!: THREE.BufferGeometry;
  private material!: THREE.ShaderMaterial;
  private points!: THREE.Points;
  
  // 粒子数据
  private particleCount: number;
  private positions!: THREE.BufferAttribute;
  private colors!: THREE.BufferAttribute;
  private sizes!: THREE.BufferAttribute;
  private velocities!: THREE.BufferAttribute;
  
  // 形态数据缓存
  private morphData: Map<MorphType, MorphTargetData>;
  private currentMorph: MorphType;
  private targetMorph: MorphType | null;
  
  // 性能监控
  private frameCount: number;
  private lastTime: number;
  private fps: number;
  private performanceLevel: 'low' | 'medium' | 'high' | 'ultra';
  private lastPerformanceCheck: number;
  private fpsHistory: number[];
  
  // 鼠标交互
  private mouse: THREE.Vector2;
  private mouseInfluence: THREE.Vector3;
  
  // 自动过渡控制
  private autoTransition: boolean = true;
  private autoTransitionInterval: number = 12000; // 12秒切换一次 - 更从容
  private autoTransitionTimer: NodeJS.Timeout | null = null;
  private currentMorphIndex: number = 0;
  private morphSequence: MorphType[] = [
    MorphType.NEBULA,
    MorphType.WEB3,
    MorphType.BIOLOGY,
    MorphType.COMPUTATION,
    MorphType.DATA
  ];
  
  // 背景效果
  private backgroundSphere!: THREE.Mesh;
  private starField!: THREE.Points;
  
  // 高级过渡控制器
  private transitionController!: TransitionController;
  private isAdvancedTransitioning: boolean = false;
  
  // 连接系统
  private connectionSystem!: ConnectionSystem;
  
  constructor(canvas: HTMLCanvasElement) {
    // 初始化基本属性
    this.particleCount = CONFIG.particles.count;
    this.morphData = new Map();
    this.currentMorph = MorphType.NEBULA;
    this.targetMorph = null;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.fps = 60;
    this.performanceLevel = 'high';
    this.lastPerformanceCheck = performance.now();
    this.fpsHistory = [];
    this.mouse = new THREE.Vector2();
    this.mouseInfluence = new THREE.Vector3();
    
    // 初始化Three.js组件
    this.initScene();
    this.initCamera();
    this.initRenderer(canvas);
    this.initGeometry();
    this.initMaterial();
    this.initParticleSystem();
    this.initEventListeners();
    
    // 生成初始形态数据
    this.generateMorphData();
    
    // 初始化过渡控制器
    this.initTransitionController();
    
    // 初始化连接系统
    this.connectionSystem = new ConnectionSystem(this.scene);
    
    // 启动自动过渡
    this.startAutoTransition();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    
    // 创建动态渐变背景
    this.createDynamicBackground();
    
    // 添加星空背景
    this.createStarField();
    
    // 动态雾效
    this.scene.fog = new THREE.FogExp2(0x000033, 0.0005);
  }

  private initCamera(): void {
    this.camera = new THREE.PerspectiveCamera(
      CONFIG.camera.fov,
      window.innerWidth / window.innerHeight,
      CONFIG.camera.near,
      CONFIG.camera.far
    );
    this.camera.position.set(0, 0, 200);
  }

  private initRenderer(canvas: HTMLCanvasElement): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: CONFIG.rendering.antialias,
      alpha: CONFIG.rendering.alpha,
      powerPreference: CONFIG.rendering.powerPreference
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(CONFIG.rendering.pixelRatio);
    this.renderer.outputColorSpace = CONFIG.rendering.outputColorSpace as any;
  }

  private initGeometry(): void {
    this.geometry = new THREE.BufferGeometry();
    
    // 创建缓冲区属性
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const velocities = new Float32Array(this.particleCount * 3);
    
    this.positions = new THREE.BufferAttribute(positions, 3);
    this.colors = new THREE.BufferAttribute(colors, 3);
    this.sizes = new THREE.BufferAttribute(sizes, 1);
    this.velocities = new THREE.BufferAttribute(velocities, 3);
    
    this.geometry.setAttribute('position', this.positions);
    this.geometry.setAttribute('color', this.colors);
    this.geometry.setAttribute('size', this.sizes);
    this.geometry.setAttribute('velocity', this.velocities);
  }

  private initMaterial(): void {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uMouse: { value: new THREE.Vector2() },
        uMouseInfluence: { value: CONFIG.interaction.mouseInfluence.strength },
        uMorphProgress: { value: 0.0 },
        uPixelRatio: { value: CONFIG.rendering.pixelRatio },
        uCurrentMorph: { value: 0 }, // 0=星云, 1=WEB3, 2=DNA, 3=量子, 4=数据
        uTransitionPhase: { value: 0.0 }, // 过渡阶段 0-1
        uWaveCenter: { value: new THREE.Vector3() }, // 波浪中心
        uGlowIntensity: { value: 1.0 }, // 发光强度
        // 新增：优雅动画控制参数
        uFlowStrength: { value: 1.0 }, // 流动强度
        uGravityCenter: { value: new THREE.Vector3() }, // 引力中心
        uTurbulence: { value: 0.5 }, // 湍流强度
        uAnimationSpeed: { value: 1.0 }, // 动画速度倍数
        // 轨迹追踪参数
        uTrailLength: { value: 0.8 }, // 轨迹长度
        uTrailDecay: { value: 0.95 }, // 轨迹衰减
        uDepthFade: { value: 1.0 } // 景深衰减
      },
      vertexShader: this.getVertexShader(),
      fragmentShader: this.getFragmentShader(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });
  }

  private getVertexShader(): string {
    return `
      attribute float size;
      attribute vec3 velocity;
      
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMouseInfluence;
      uniform float uMorphProgress;
      uniform float uPixelRatio;
      uniform float uTransitionPhase;
      uniform vec3 uWaveCenter;
      uniform float uGlowIntensity;
      uniform float uFlowStrength;
      uniform vec3 uGravityCenter;
      uniform float uTurbulence;
      uniform float uAnimationSpeed;
      uniform int uCurrentMorph;
      
      varying vec3 vColor;
      varying float vLifetime;
      varying vec3 vPosition;
      varying float vDistanceFromCenter;
      varying float vTransitionEffect;
      
      // 优雅的噪声函数
      float noise(vec3 p) {
        return sin(p.x * 1.1) * sin(p.y * 1.3) * sin(p.z * 1.7);
      }
      
      // 3D旋转矩阵
      mat3 rotateY(float angle) {
        float c = cos(angle);
        float s = sin(angle);
        return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
      }
      
      void main() {
        vColor = color;
        vPosition = position;
        
        vec3 pos = position;
        float time = uTime * uAnimationSpeed;
        
        // 计算到各种中心的距离
        vDistanceFromCenter = distance(pos, uWaveCenter);
        float gravityDistance = distance(pos, uGravityCenter);
        
        // 过渡效果计算
        float waveEffect = sin(vDistanceFromCenter * 0.02 - time * 3.0) * 0.5 + 0.5;
        vTransitionEffect = waveEffect * uTransitionPhase;
        
        // === 形态特定的优雅运动 ===
        vec3 morphMotion = vec3(0.0);
        
        if (uCurrentMorph == 0) {
          // 星云形态 - 涡旋湍流
          float spiralAngle = time * 0.3 + length(pos.xz) * 0.02;
          vec3 spiralAxis = normalize(vec3(0.0, 1.0, 0.2));
          float spiralRadius = length(pos.xz);
          
          // 涡旋运动
          morphMotion.x += cos(spiralAngle) * sin(time * 0.8 + pos.y * 0.01) * 2.0;
          morphMotion.z += sin(spiralAngle) * sin(time * 0.8 + pos.y * 0.01) * 2.0;
          morphMotion.y += sin(time * 0.6 + spiralRadius * 0.03) * 1.5;
          
          // 湍流叠加
          vec3 turbulence = vec3(
            noise(pos * 0.02 + time * 0.1),
            noise(pos * 0.015 + time * 0.12),
            noise(pos * 0.025 + time * 0.08)
          ) * uTurbulence * 3.0;
          morphMotion += turbulence;
          
        } else if (uCurrentMorph == 1) {
          // WEB3网络 - 数据流动
          vec3 flowDirection = normalize(vec3(1.0, 0.3, 0.8));
          float flowWave = sin(time * 2.0 + dot(pos, flowDirection) * 0.05);
          
          // 主流动
          morphMotion += flowDirection * flowWave * 1.5;
          
          // 网络节点振动
          float nodeVibration = sin(time * 4.0 + length(pos) * 0.1) * 0.8;
          morphMotion += normalize(pos) * nodeVibration;
          
          // 数据包传输脉冲
          float packetPulse = step(0.7, sin(time * 6.0 + pos.x * 0.1));
          morphMotion.y += packetPulse * 2.0;
          
        } else if (uCurrentMorph == 2) {
          // DNA生物 - 螺旋旋转与呼吸
          float helixAngle = time * 1.2 + pos.y * 0.1;
          float helixRadius = 25.0 + sin(time * 0.8 + pos.y * 0.05) * 3.0; // 呼吸效果
          
          // 双螺旋旋转
          morphMotion.x += cos(helixAngle) * sin(time * 0.6) * 1.2;
          morphMotion.z += sin(helixAngle) * sin(time * 0.6) * 1.2;
          
          // 垂直波动 - 碱基对舞蹈
          morphMotion.y += sin(time * 2.5 + pos.x * 0.1 + pos.z * 0.1) * 0.8;
          
          // 解旋-缠绕动画
          float unwindMotion = sin(time * 0.4 + pos.y * 0.08) * 1.5;
          morphMotion.x += unwindMotion * 0.5;
          morphMotion.z += unwindMotion * 0.3;
          
        } else if (uCurrentMorph == 3) {
          // 量子计算 - 量子叠加与纠缠
          float quantumPhase = time * 2.0 + length(pos) * 0.05;
          
          // 量子叠加态 - 多位置概率
          vec3 superposition1 = pos + vec3(
            sin(quantumPhase) * 2.0,
            cos(quantumPhase * 1.3) * 1.5,
            sin(quantumPhase * 0.7) * 2.5
          );
          vec3 superposition2 = pos + vec3(
            cos(quantumPhase * 1.1) * 2.2,
            sin(quantumPhase * 0.9) * 1.8,
            cos(quantumPhase * 1.4) * 2.0
          );
          
          float probability = sin(time * 3.0 + pos.x * 0.1) * 0.5 + 0.5;
          morphMotion = mix(superposition1, superposition2, probability) - pos;
          morphMotion *= 0.3; // 缩放到合适强度
          
          // 纠缠波动
          float entanglement = sin(time * 1.8 + gravityDistance * 0.02);
          morphMotion += normalize(uGravityCenter - pos) * entanglement * 1.0;
          
        } else {
          // 数据流 - 神经网络脉冲
          vec3 neuralDirection = normalize(vec3(sin(time * 0.5), 1.0, cos(time * 0.3)));
          
          // 神经脉冲传播
          float pulseWave = sin(time * 4.0 + dot(pos, neuralDirection) * 0.08);
          morphMotion += neuralDirection * pulseWave * 1.2;
          
          // 突触跳跃
          float synapseJump = step(0.8, sin(time * 8.0 + length(pos.xz) * 0.1));
          morphMotion.y += synapseJump * 3.0;
          
          // 网络共振
          float resonance = sin(time * 1.5 + pos.x * 0.05) * sin(time * 1.7 + pos.z * 0.05);
          morphMotion += vec3(resonance * 0.8, 0.0, resonance * 0.6);
        }
        
        // 应用形态运动
        pos += morphMotion * uFlowStrength;
        
        // 鼠标交互 - 增强响应
        vec2 mousePos2D = vec2(pos.x, pos.y);
        float mouseDistance = distance(mousePos2D, uMouse);
        float mouseEffect = smoothstep(100.0, 0.0, mouseDistance) * uMouseInfluence;
        vec2 mouseDirection2D = normalize(mousePos2D - uMouse);
        pos.xy += mouseDirection2D * mouseEffect * 0.5 * (1.0 + uTransitionPhase);
        
        // 基础动画 - 过渡期间增强
        pos += velocity * time * 0.1 * (1.0 + uTransitionPhase * 0.5);
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // 粒子大小 - 根据形态和深度动态调整
        float depthFactor = 300.0 / -mvPosition.z;
        float morphSizeMultiplier = 1.0;
        
        if (uCurrentMorph == 0) {
          // 星云 - 距离越远越大，模拟星云密度
          morphSizeMultiplier = 0.8 + (-mvPosition.z / 500.0) * 0.4;
        } else if (uCurrentMorph == 1) {
          // WEB3 - 数据节点大小变化
          morphSizeMultiplier = 0.9 + sin(time * 3.0 + length(pos) * 0.05) * 0.3;
        } else if (uCurrentMorph == 2) {
          // DNA - 螺旋结构中心更大
          float helixCore = 1.0 - abs(length(pos.xz) - 25.0) / 15.0;
          morphSizeMultiplier = 0.7 + clamp(helixCore, 0.0, 1.0) * 0.5;
        } else if (uCurrentMorph == 3) {
          // 量子 - 叠加态大小闪烁
          morphSizeMultiplier = 0.6 + abs(sin(time * 6.0 + length(pos) * 0.1)) * 0.6;
        } else {
          // 神经网络 - 激活强度控制大小
          float activation = sin(time * 4.0 + pos.x * 0.1) * 0.5 + 0.5;
          morphSizeMultiplier = 0.5 + activation * 0.7;
        }
        
        // 景深效果 - 远处粒子更小更模糊
        float depthFade = smoothstep(200.0, 800.0, -mvPosition.z);
        morphSizeMultiplier *= (1.0 - depthFade * 0.4);
        
        float finalSize = size * depthFactor * uPixelRatio * morphSizeMultiplier;
        gl_PointSize = max(finalSize, 0.5);
        
        // 增强生命周期计算
        vLifetime = sin(time * 0.3 + position.x * 0.02 + position.z * 0.01) * 0.5 + 0.5;
        vLifetime *= (1.0 + uTransitionPhase * 0.3); // 过渡期间更活跃
        
        // 过渡轨迹效果
        vTransitionEffect = uTransitionPhase * (1.0 + sin(time * 4.0 + length(position) * 0.1) * 0.3);
      }
    `;
  }

  private getFragmentShader(): string {
    return `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMorphProgress;
      uniform int uCurrentMorph;
      uniform float uTransitionPhase;
      uniform float uGlowIntensity;
      varying vec3 vColor;
      varying float vLifetime;
      varying vec3 vPosition;
      varying float vDistanceFromCenter;
      varying float vTransitionEffect;
      
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float distance = length(center);
        
        if (distance > 0.5) discard;
        
        // 基础光晕效果
        float glow = 1.0 - smoothstep(0.0, 0.5, distance);
        float innerGlow = 1.0 - smoothstep(0.0, 0.2, distance);
        
        // 形态特有的动画效果
        float morphEffect = 1.0;
        vec3 morphColor = vColor;
        
        if (uCurrentMorph == 0) {
          // 星云形态 - 深度涡旋湍流
          float angle = atan(center.y, center.x);
          float radius = distance;
          
          // 多层螺旋
          float spiral1 = sin(angle * 3.0 + uTime * 2.0 + radius * 8.0) * 0.5 + 0.5;
          float spiral2 = sin(angle * 5.0 - uTime * 1.5 + radius * 12.0) * 0.3 + 0.7;
          float spiral3 = sin(angle * 7.0 + uTime * 0.8 + radius * 15.0) * 0.2 + 0.8;
          
          // 径向脉动
          float radialPulse = sin(radius * 20.0 - uTime * 3.0) * 0.4 + 0.6;
          float depthPulse = sin(uTime * 1.5 + vLifetime * 5.0 + vPosition.z * 0.1) * 0.3 + 0.7;
          
          // 湍流涡旋
          float turbulence = sin(vPosition.x * 0.05 + uTime * 1.2) * 
                           cos(vPosition.y * 0.03 + uTime * 0.9) * 
                           sin(vPosition.z * 0.04 + uTime * 1.6) * 0.3 + 0.7;
          
          morphEffect = spiral1 * spiral2 * spiral3 * radialPulse * depthPulse * turbulence;
          
          // 星际色彩变化
          float colorShift = sin(uTime * 0.8 + length(vPosition) * 0.01) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.0, 1.2, 1.6), // 冷蓝色
            vec3(1.4, 1.1, 1.8), // 温紫色
            colorShift
          );
          
        } else if (uCurrentMorph == 1) {
          // WEB3网络 - 高级数据流动
          vec3 flowDirection = normalize(vec3(1.0, 0.3, 0.8));
          float flowDistance = dot(vPosition, flowDirection);
          
          // 数据包传输波
          float dataPacket = sin(flowDistance * 0.05 - uTime * 4.0) * 0.5 + 0.5;
          float packetTrail = exp(-mod(flowDistance - uTime * 50.0, 100.0) / 10.0);
          
          // 网络连接脉冲
          float connectionPulse = sin(uTime * 2.5 + vLifetime * 8.0 + length(vPosition.xz) * 0.1) * 0.3 + 0.7;
          float networkHeartbeat = sin(uTime * 1.2) * 0.2 + 0.8;
          
          // 节点同步闪烁
          float nodeSync = step(0.7, sin(uTime * 6.0 + vPosition.x * 0.08 + vPosition.z * 0.12));
          float syncIntensity = nodeSync * (sin(uTime * 12.0) * 0.5 + 0.5);
          
          // 去中心化波动
          float decentralization = sin(length(vPosition) * 0.02 + uTime * 1.8) * 
                                 cos(vPosition.y * 0.05 + uTime * 2.2) * 0.4 + 0.6;
          
          morphEffect = dataPacket * packetTrail * connectionPulse * networkHeartbeat * decentralization + syncIntensity;
          
          // 数字绿到青色渐变
          float techShift = sin(uTime * 1.5 + flowDistance * 0.03) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.0, 1.4, 1.2), // 明绿色
            vec3(1.2, 1.3, 1.6), // 青蓝色
            techShift
          );
          
        } else if (uCurrentMorph == 2) {
          // DNA生物 - 增强螺旋动态效果
          
          // 螺旋解旋动画
          float helixUnwind = sin(vPosition.y * 0.15 + uTime * 2.2) * 0.6 + 0.4;
          
          // 碱基对呼吸效应
          float breathing = sin(uTime * 3.5 + vPosition.x * 0.1 + vPosition.z * 0.1) * 0.3 + 0.7;
          
          // 生命能量脉冲
          float energyPulse = sin(uTime * 4.0 + vLifetime * 12.0) * 0.4 + 0.6;
          float energyWave = sin(vPosition.y * 0.08 + uTime * 2.8) * 0.3 + 0.7;
          
          // 大沟小沟光影效果
          float grooveEffect = sin(vPosition.x * 0.2 + vPosition.z * 0.2 + uTime * 1.5) * 0.2 + 0.8;
          
          // 复制叉动画（特殊区域的强烈闪烁）
          float replicationFork = step(0.9, sin(uTime * 8.0 + vLifetime * 25.0)) * 
                                 step(0.8, sin(vPosition.y * 0.05 + uTime * 1.2));
          
          morphEffect = helixUnwind * breathing * energyPulse * energyWave * grooveEffect + replicationFork * 0.8;
          
          // 根据颜色判断粒子类型并应用不同效果
          if (vColor.r > 0.8 && vColor.b < 0.4) {
            // 红色系 - A-T碱基对
            morphColor *= vec3(1.4, 1.0, 0.8) * (1.0 + energyPulse * 0.3);
          } else if (vColor.g > 0.7) {
            // 绿色系 - G-C碱基对  
            morphColor *= vec3(0.8, 1.4, 1.1) * (1.0 + breathing * 0.4);
          } else if (vColor.b > 0.8) {
            // 蓝色/紫色系 - 骨架或组蛋白
            morphColor *= vec3(1.2, 1.1, 1.5) * (1.0 + grooveEffect * 0.3);
          } else {
            // 彩虹色 - 能量场
            float rainbow = sin(uTime * 5.0 + vLifetime * 10.0);
            morphColor *= vec3(1.3, 1.3, 1.3) * (1.0 + rainbow * 0.5);
          }
          
        } else if (uCurrentMorph == 3) {
          // 量子计算 - 深度量子效应
          float quantumPhase = uTime * 2.0 + length(vPosition) * 0.05;
          
          // 量子叠加态闪烁
          float superposition1 = sin(quantumPhase * 1.3 + vPosition.x * 0.1) * 0.5 + 0.5;
          float superposition2 = sin(quantumPhase * 0.7 + vPosition.z * 0.15) * 0.5 + 0.5;
          float quantumInterference = superposition1 * superposition2;
          
          // 量子纠缠波
          float entanglementWave = sin(uTime * 1.8 + distance * 15.0) * 
                                 cos(uTime * 2.4 + vLifetime * 12.0) * 0.4 + 0.6;
          
          // 量子门操作
          float gateOperation = step(0.8, sin(uTime * 5.0 + vPosition.y * 0.08)) * 
                              (sin(uTime * 10.0) * 0.5 + 0.5);
          
          // 测量塌缩效应
          float measurement = sin(uTime * 0.6 + length(vPosition) * 0.02) * 0.5 + 0.5;
          float collapse = smoothstep(0.3, 0.7, measurement);
          
          // 量子隧道效应
          float tunneling = exp(-distance * 8.0) * sin(uTime * 8.0 + vLifetime * 15.0) * 0.5 + 0.5;
          
          morphEffect = quantumInterference * entanglementWave * collapse + gateOperation + tunneling;
          
          // 量子紫色光谱
          float spectralShift = sin(uTime * 1.2 + quantumPhase) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.5, 0.8, 1.6), // 深紫色
            vec3(1.2, 1.3, 1.8), // 量子蓝
            spectralShift
          );
          
        } else {
          // 数据流 - 高级神经网络
          vec3 neuralDirection = normalize(vec3(sin(uTime * 0.5), 1.0, cos(uTime * 0.3)));
          float neuralDistance = dot(vPosition, neuralDirection);
          
          // 神经脉冲传播
          float actionPotential = sin(neuralDistance * 0.08 - uTime * 6.0) * 0.5 + 0.5;
          float myelinBoost = step(0.6, sin(neuralDistance * 0.2)) * 2.0 + 1.0; // 髓鞘加速
          
          // 突触传递
          float synapseActivation = step(0.85, sin(uTime * 8.0 + vLifetime * 20.0));
          float neurotransmitter = sin(uTime * 12.0 + length(vPosition.xz) * 0.15) * 0.3 + 0.7;
          
          // 神经网络层级激活
          float layerActivation = sin(vPosition.y * 0.05 + uTime * 2.0) * 
                                cos(length(vPosition.xz) * 0.03 + uTime * 1.5) * 0.4 + 0.6;
          
          // 学习权重调整
          float weightAdjustment = sin(uTime * 0.8 + vPosition.x * 0.02) * 0.2 + 0.8;
          
          // 反向传播波
          float backpropagation = sin(-neuralDistance * 0.06 + uTime * 4.0) * 0.3 + 0.7;
          
          morphEffect = actionPotential * myelinBoost * neurotransmitter * layerActivation * 
                       weightAdjustment * backpropagation + synapseActivation;
          
          // 神经色彩梯度
          float neuralShift = sin(uTime * 1.8 + neuralDistance * 0.04) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.3, 1.0, 1.4), // 神经粉
            vec3(1.1, 1.4, 1.2), // 活跃绿
            neuralShift
          );
        }
        
        // 过渡效果增强
        float transitionBoost = 1.0 + vTransitionEffect * 0.5;
        float glowBoost = uGlowIntensity * (1.0 + uTransitionPhase * 0.3);
        
        // 景深效果计算
        float depthDistance = length(vPosition);
        float depthFade = smoothstep(150.0, 600.0, depthDistance);
        
        // 轨迹效果 - 基于粒子移动创建拖尾
        float trailEffect = 1.0;
        if (distance < 0.3) {
          // 中心区域更亮，边缘有轨迹衰减
          float centerIntensity = 1.0 - smoothstep(0.0, 0.3, distance);
          float edgeTrail = smoothstep(0.3, 0.5, distance) * 0.6;
          trailEffect = centerIntensity + edgeTrail;
        }
        
        // 多层发光效果增强
        float finalGlow = (glow + innerGlow * 0.8) * morphEffect * transitionBoost * glowBoost * trailEffect;
        
        // 透明度计算 - 考虑景深和轨迹
        float baseAlpha = (glow * glow + innerGlow * 0.5) * vLifetime * (1.0 + uTransitionPhase * 0.2);
        float depthAlpha = baseAlpha * (1.0 - depthFade * 0.6); // 远处更透明
        float alpha = depthAlpha * trailEffect;
        
        // 过渡期间的增强效果
        vec3 transitionGlow = vec3(0.0);
        if (uTransitionPhase > 0.1) {
          // 能量流动轨迹
          float energyFlow = sin(uTime * 6.0 + vTransitionEffect * 8.0) * 0.5 + 0.5;
          float trailGlow = vTransitionEffect * energyFlow;
          
          // 增强辉光
          transitionGlow = trailGlow * vec3(0.3, 0.5, 0.8);
          alpha += trailGlow * 0.4;
          
          // 过渡波动
          float transitionPulse = sin(uTime * 3.0 + length(vPosition) * 0.02) * uTransitionPhase;
          finalGlow *= (1.0 + transitionPulse * 0.3);
        }
        
        // 颜色增强 - 更亮更饱和，过渡期间额外发光
        vec3 enhancedColor = morphColor * (1.2 + finalGlow * 0.8 + uTransitionPhase * 0.4) + transitionGlow;
        
        // 景深颜色调整 - 远处偏蓝
        if (depthFade > 0.3) {
          float blueShift = (depthFade - 0.3) * 0.8;
          enhancedColor = mix(enhancedColor, enhancedColor * vec3(0.8, 0.9, 1.2), blueShift);
        }
        
        gl_FragColor = vec4(enhancedColor * finalGlow, alpha);
      }
    `;
  }

  private initParticleSystem(): void {
    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);
  }
  
  /**
   * 初始化高级过渡控制器
   */
  private initTransitionController(): void {
    this.transitionController = new TransitionController({
      duration: {
        scatter: 0.8,
        travel: 2.5,
        gather: 1.2,
        settle: 0.8
      },
      effects: {
        waveSpeed: 2.5,
        spiralStrength: 0.4,
        elasticity: 0.3,
        cameraMovement: true,
        backgroundTransition: true,
        curveIntensity: 1.2,
        springStiffness: 0.15,
        springDamping: 0.85,
        propagationDelay: 0.6
      }
    });
  }

  private createDynamicBackground(): void {
    // 创建大球体作为背景
    const sphereGeometry = new THREE.SphereGeometry(1000, 32, 32);
    const sphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uColorTop: { value: new THREE.Color(0x000033) },
        uColorBottom: { value: new THREE.Color(0x000011) },
        uMorphInfluence: { value: 0.0 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorTop;
        uniform vec3 uColorBottom;
        uniform float uMorphInfluence;
        varying vec3 vWorldPosition;
        
        void main() {
          float gradient = (vWorldPosition.y + 1000.0) / 2000.0;
          gradient = smoothstep(0.0, 1.0, gradient);
          
          // 添加动态噪声
          float noise = sin(vWorldPosition.x * 0.001 + uTime * 0.2) * 
                       cos(vWorldPosition.z * 0.001 + uTime * 0.15) * 0.1;
          gradient += noise;
          
          vec3 color = mix(uColorBottom, uColorTop, gradient);
          
          // 根据形态变化调整颜色
          color += vec3(sin(uTime * 0.3) * 0.02, sin(uTime * 0.4) * 0.02, sin(uTime * 0.5) * 0.02);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide
    });
    
    this.backgroundSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(this.backgroundSphere);
  }

  private createStarField(): void {
    // 创建丰富星空粒子系统
    const starCount = 8000; // 大幅增加星星数量
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      
      // 创建银河系螺旋臂结构
      const galaxyType = Math.random();
      let radius, theta, phi;
      
      if (galaxyType < 0.4) {
        // 40% 银河螺旋臂
        const armAngle = Math.random() * Math.PI * 2;
        const armRadius = 600 + Math.random() * 600;
        const spiralTightness = 3;
        const armOffset = Math.random() * 100 - 50;
        
        radius = armRadius;
        theta = armAngle + (armRadius / 200) * spiralTightness;
        phi = Math.PI / 2 + armOffset * 0.01;
      } else if (galaxyType < 0.7) {
        // 30% 星团聚集
        const clusterCenter = {
          x: (Math.random() - 0.5) * 1000,
          y: (Math.random() - 0.5) * 300,
          z: (Math.random() - 0.5) * 1000
        };
        const clusterRadius = 50 + Math.random() * 100;
        const localTheta = Math.random() * Math.PI * 2;
        const localPhi = Math.acos(2 * Math.random() - 1);
        
        starPositions[i3] = clusterCenter.x + clusterRadius * Math.sin(localPhi) * Math.cos(localTheta);
        starPositions[i3 + 1] = clusterCenter.y + clusterRadius * Math.sin(localPhi) * Math.sin(localTheta);
        starPositions[i3 + 2] = clusterCenter.z + clusterRadius * Math.cos(localPhi);
        
        // 跳过常规计算
        radius = 0;
        theta = 0;
        phi = 0;
      } else {
        // 30% 随机分布
        radius = 700 + Math.random() * 600;
        theta = Math.random() * Math.PI * 2;
        phi = Math.acos(2 * Math.random() - 1);
      }
      
      // 应用常规球面坐标（如果不是星团）
      if (galaxyType >= 0.7 || galaxyType < 0.4) {
        starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i3 + 2] = radius * Math.cos(phi);
      }
      
      // 星星颜色 - 模拟不同温度的恒星
      const temp = Math.random();
      if (temp < 0.3) {
        // 蓝色巨星
        starColors[i3] = 0.7 + Math.random() * 0.3;
        starColors[i3 + 1] = 0.8 + Math.random() * 0.2;
        starColors[i3 + 2] = 1.0;
      } else if (temp < 0.7) {
        // 白色恒星
        starColors[i3] = 0.9 + Math.random() * 0.1;
        starColors[i3 + 1] = 0.9 + Math.random() * 0.1;
        starColors[i3 + 2] = 0.8 + Math.random() * 0.2;
      } else {
        // 红色恒星
        starColors[i3] = 1.0;
        starColors[i3 + 1] = 0.6 + Math.random() * 0.3;
        starColors[i3 + 2] = 0.3 + Math.random() * 0.3;
      }
      
      starSizes[i] = 0.5 + Math.random() * 1.5;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    
    const starMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uPixelRatio: { value: CONFIG.rendering.pixelRatio }
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        uniform float uPixelRatio;
        varying vec3 vColor;
        varying float vTwinkle;
        
        void main() {
          vColor = color;
          
          // 闪烁效果
          float twinkleSpeed = 2.0 + sin(position.x * 0.01) * 2.0;
          vTwinkle = sin(uTime * twinkleSpeed) * 0.5 + 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          gl_PointSize = size * (300.0 / -mvPosition.z) * uPixelRatio * (0.5 + vTwinkle * 0.5);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vTwinkle;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          float glow = 1.0 - smoothstep(0.0, 0.5, distance);
          float alpha = glow * vTwinkle * 0.8;
          
          gl_FragColor = vec4(vColor * glow, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });
    
    this.starField = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(this.starField);
  }

  private initEventListeners(): void {
    // 鼠标事件
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    
    // 窗口大小调整
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onMouseMove(event: MouseEvent): void {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // 将屏幕坐标转换为世界坐标
    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const direction = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / direction.z;
    this.mouseInfluence.copy(this.camera.position).add(direction.multiplyScalar(distance));
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private generateMorphData(): void {
    console.log('[ParticleEngine] Generating morph data...');
    
    // 生成所有形态数据
    this.morphData.set(MorphType.NEBULA, morphTargetGenerator.generateNebulaData(this.particleCount));
    this.morphData.set(MorphType.WEB3, morphTargetGenerator.generateWeb3Data(this.particleCount));
    this.morphData.set(MorphType.BIOLOGY, morphTargetGenerator.generateBiologyData(this.particleCount));
    this.morphData.set(MorphType.COMPUTATION, morphTargetGenerator.generateComputationData(this.particleCount));
    this.morphData.set(MorphType.DATA, morphTargetGenerator.generateDataData(this.particleCount));
    
    // 设置初始形态
    this.setMorphData(MorphType.NEBULA);
    
    console.log('[ParticleEngine] Morph data generation completed');
  }

  private setMorphData(morphType: MorphType): void {
    const data = this.morphData.get(morphType);
    if (!data) return;
    
    this.positions.array = data.positions;
    this.colors.array = data.colors;
    this.sizes.array = data.sizes;
    this.velocities.array = data.velocities;
    
    this.positions.needsUpdate = true;
    this.colors.needsUpdate = true;
    this.sizes.needsUpdate = true;
    this.velocities.needsUpdate = true;
    
    // 更新着色器uniform来指示当前形态
    const morphIndex = this.getMorphIndex(morphType);
    this.material.uniforms.uCurrentMorph.value = morphIndex;
    
    console.log(`[ParticleEngine] Set morph data for ${morphType} (index: ${morphIndex})`);
  }

  private getMorphIndex(morphType: MorphType): number {
    const morphIndices = {
      [MorphType.NEBULA]: 0,
      [MorphType.WEB3]: 1,
      [MorphType.BIOLOGY]: 2,
      [MorphType.COMPUTATION]: 3,
      [MorphType.DATA]: 4
    };
    return morphIndices[morphType] || 0;
  }

  /**
   * 启动自动过渡
   */
  private startAutoTransition(): void {
    if (!this.autoTransition) return;
    
    this.autoTransitionTimer = setInterval(() => {
      this.nextMorph();
    }, this.autoTransitionInterval);
    
    console.log('[ParticleEngine] Auto transition started');
  }
  
  /**
   * 停止自动过渡
   */
  stopAutoTransition(): void {
    this.autoTransition = false;
    if (this.autoTransitionTimer) {
      clearInterval(this.autoTransitionTimer);
      this.autoTransitionTimer = null;
    }
    console.log('[ParticleEngine] Auto transition stopped');
  }
  
  /**
   * 重新启动自动过渡
   */
  resumeAutoTransition(): void {
    this.autoTransition = true;
    this.startAutoTransition();
  }
  
  /**
   * 切换到下一个形态
   */
  private nextMorph(): void {
    this.currentMorphIndex = (this.currentMorphIndex + 1) % this.morphSequence.length;
    const nextMorph = this.morphSequence[this.currentMorphIndex];
    this.morphTo(nextMorph);
  }

  /**
   * 切换到新的形态 - 使用增强的平滑过渡
   */
  morphTo(targetMorph: MorphType): void {
    if (this.targetMorph === targetMorph || this.currentMorph === targetMorph) {
      console.log(`[ParticleEngine] Already at ${targetMorph}, skipping morph`);
      return;
    }
    
    // 如果正在进行过渡，先停止
    if (this.isAdvancedTransitioning) {
      this.transitionController.stop();
      this.isAdvancedTransitioning = false;
    }
    
    console.log(`[ParticleEngine] Starting enhanced transition from ${this.currentMorph} to ${targetMorph}`);
    
    // 立即更新形态uniform，确保即时反馈
    const targetMorphIndex = this.getMorphIndex(targetMorph);
    this.material.uniforms.uCurrentMorph.value = targetMorphIndex;
    
    // 更新当前索引（用于自动过渡同步）
    const targetIndex = this.morphSequence.indexOf(targetMorph);
    if (targetIndex !== -1) {
      this.currentMorphIndex = targetIndex;
    }
    
    this.targetMorph = targetMorph;
    this.isAdvancedTransitioning = true;
    
    // 启动相机过渡动画
    this.startCameraTransition(targetMorph);
    
    // 启动背景过渡动画
    this.startBackgroundTransition(targetMorph);
    
    // 使用简化但增强的GSAP过渡
    this.startEnhancedTransition(targetMorph);
  }

  /**
   * 启动相机过渡动画
   */
  private startCameraTransition(targetMorph: MorphType): void {
    // 计算目标相机位置 - 基于形态特征
    const cameraTargets = {
      [MorphType.NEBULA]: { x: 0, y: 30, z: 180 },
      [MorphType.WEB3]: { x: 20, y: 0, z: 200 },
      [MorphType.BIOLOGY]: { x: -15, y: 25, z: 160 },
      [MorphType.COMPUTATION]: { x: 10, y: -20, z: 220 },
      [MorphType.DATA]: { x: -25, y: 15, z: 190 }
    };

    const target = cameraTargets[targetMorph];
    
    // 平滑移动相机
    gsap.to(this.camera.position, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 4.5,
      ease: 'power2.inOut'
    });

    // 轻微旋转相机
    gsap.to(this.camera.rotation, {
      x: (Math.random() - 0.5) * 0.1,
      y: (Math.random() - 0.5) * 0.1,
      z: (Math.random() - 0.5) * 0.05,
      duration: 4.5,
      ease: 'power2.inOut'
    });
  }

  /**
   * 启动背景过渡动画
   */
  private startBackgroundTransition(targetMorph: MorphType): void {
    const morphColors = this.getMorphBackgroundColors(targetMorph);
    if (!morphColors) return;

    // 过渡到新的背景颜色
    const backgroundMaterial = this.backgroundSphere.material as THREE.ShaderMaterial;
    
    gsap.to(backgroundMaterial.uniforms.uColorTop.value, {
      r: morphColors.top.r,
      g: morphColors.top.g,
      b: morphColors.top.b,
      duration: 3.0,
      ease: 'power1.inOut'
    });

    gsap.to(backgroundMaterial.uniforms.uColorBottom.value, {
      r: morphColors.bottom.r,
      g: morphColors.bottom.g,
      b: morphColors.bottom.b,
      duration: 3.0,
      ease: 'power1.inOut'
    });
  }

  /**
   * 平滑过渡进度函数
   */
  private smoothTransitionProgress(t: number): number {
    // 使用平滑步进函数获得更自然的过渡
    return t * t * (3 - 2 * t);
  }

  /**
   * 启动增强的粒子过渡动画
   */
  private startEnhancedTransition(targetMorph: MorphType): void {
    const currentData = this.morphData.get(this.currentMorph);
    const targetData = this.morphData.get(targetMorph);
    
    if (!currentData || !targetData) {
      console.warn('Morph data not found, completing transition immediately');
      this.completeEnhancedTransition();
      return;
    }

    // 创建过渡对象
    const transitionState = { progress: 0 };

    // 使用增强的GSAP动画，包含多个阶段的缓动
    const timeline = gsap.timeline();

    // 第一阶段：散发效果 (0.8秒)
    timeline.to(transitionState, {
      progress: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        this.updateEnhancedTransition(transitionState.progress, 'scatter', currentData, targetData);
      }
    });

    // 第二阶段：主要移动 (2.5秒)
    timeline.to(transitionState, {
      progress: 0.8,
      duration: 2.5,
      ease: 'power1.inOut',
      onUpdate: () => {
        this.updateEnhancedTransition(transitionState.progress, 'travel', currentData, targetData);
      }
    });

    // 第三阶段：聚合和稳定 (1.2秒)
    timeline.to(transitionState, {
      progress: 1.0,
      duration: 1.2,
      ease: 'back.out(1.7)',
      onUpdate: () => {
        this.updateEnhancedTransition(transitionState.progress, 'settle', currentData, targetData);
      },
      onComplete: () => {
        this.completeEnhancedTransition();
      }
    });
  }

  /**
   * 更新增强过渡状态
   */
  private updateEnhancedTransition(
    progress: number, 
    phase: string, 
    currentData: MorphTargetData, 
    targetData: MorphTargetData
  ): void {
    // 应用不同阶段的效果
    let effectMultiplier = 1.0;
    let smoothProgress = progress;

    if (phase === 'scatter') {
      // 散发阶段：轻微向外扩散
      effectMultiplier = 1.0 + (progress / 0.2) * 0.1; // 10%扩散
      smoothProgress = this.smoothTransitionProgress(progress / 0.2);
    } else if (phase === 'travel') {
      // 主要移动阶段：平滑过渡
      smoothProgress = this.smoothTransitionProgress((progress - 0.2) / 0.6);
    } else if (phase === 'settle') {
      // 稳定阶段：弹性效果
      const settleProgress = (progress - 0.8) / 0.2;
      smoothProgress = 0.8 + settleProgress * 0.2;
      effectMultiplier = 1.0 - settleProgress * 0.05; // 轻微收缩
    }

    // 更新粒子位置、颜色和大小
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      
      // 位置插值
      for (let j = 0; j < 3; j++) {
        const current = currentData.positions[i3 + j];
        const target = targetData.positions[i3 + j];
        this.positions.array[i3 + j] = current + (target - current) * smoothProgress * effectMultiplier;
      }

      // 颜色插值
      for (let j = 0; j < 3; j++) {
        const current = currentData.colors[i3 + j];
        const target = targetData.colors[i3 + j];
        this.colors.array[i3 + j] = current + (target - current) * smoothProgress;
      }

      // 大小插值
      const currentSize = currentData.sizes[i];
      const targetSize = targetData.sizes[i];
      this.sizes.array[i] = currentSize + (targetSize - currentSize) * smoothProgress;
    }

    // 标记需要更新
    this.positions.needsUpdate = true;
    this.colors.needsUpdate = true;
    this.sizes.needsUpdate = true;

    // 更新着色器uniform
    this.material.uniforms.uMorphProgress.value = progress;
    this.material.uniforms.uTransitionPhase.value = progress;
    
    // 动态发光效果
    const glowIntensity = 1.0 + Math.sin(progress * Math.PI) * 0.3;
    this.material.uniforms.uGlowIntensity.value = glowIntensity;
  }

  /**
   * 完成增强过渡
   */
  private completeEnhancedTransition(): void {
    this.currentMorph = this.targetMorph!;
    this.targetMorph = null;
    this.isAdvancedTransitioning = false;
    
    // 重置uniform
    this.material.uniforms.uMorphProgress.value = 0;
    this.material.uniforms.uTransitionPhase.value = 0;
    this.material.uniforms.uGlowIntensity.value = 1.0;
    
    console.log(`[ParticleEngine] Enhanced transition complete to ${this.currentMorph}`);
  }

  /**
   * 获取指定形态对应的背景颜色
   */
  private getMorphBackgroundColors(morphType?: MorphType): { top: THREE.Color; bottom: THREE.Color } | null {
    const targetMorph = morphType || this.targetMorph || this.currentMorph;
    
    const morphColors = {
      [MorphType.NEBULA]: {
        top: new THREE.Color(0x001155),
        bottom: new THREE.Color(0x000022)
      },
      [MorphType.WEB3]: {
        top: new THREE.Color(0x002244),
        bottom: new THREE.Color(0x001122)
      },
      [MorphType.BIOLOGY]: {
        top: new THREE.Color(0x332200),
        bottom: new THREE.Color(0x110800)
      },
      [MorphType.COMPUTATION]: {
        top: new THREE.Color(0x220044),
        bottom: new THREE.Color(0x110022)
      },
      [MorphType.DATA]: {
        top: new THREE.Color(0x441122),
        bottom: new THREE.Color(0x220011)
      }
    };
    
    return morphColors[targetMorph] || null;
  }

  /**
   * 更新性能统计
   */
  private updatePerformanceStats(): void {
    this.frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= this.lastTime + 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      this.frameCount = 0;
      this.lastTime = currentTime;
      
      // 添加到FPS历史记录
      this.fpsHistory.push(this.fps);
      if (this.fpsHistory.length > 10) {
        this.fpsHistory.shift(); // 只保留最近10个FPS值
      }
      
      // 自适应性能调整
      this.adaptPerformance();
      
      // 更新性能显示
      const statsElement = document.getElementById('fps-counter');
      if (statsElement) {
        statsElement.textContent = `FPS: ${this.fps} | 粒子数: ${this.particleCount.toLocaleString()} | 质量: ${this.performanceLevel.toUpperCase()}`;
      }
    }
  }

  /**
   * 自适应性能调整
   */
  private adaptPerformance(): void {
    const currentTime = performance.now();
    
    // 检查是否需要调整性能
    if (currentTime - this.lastPerformanceCheck < (CONFIG.performance as any).adaptiveInterval) {
      return;
    }
    
    this.lastPerformanceCheck = currentTime;
    
    // 计算平均FPS
    if (this.fpsHistory.length < 3) return;
    
    const avgFPS = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
    
    // 根据FPS调整性能级别
    if (avgFPS < (CONFIG.performance as any).fpsThresholds.downgrade) {
      // 降级
      if (this.performanceLevel === 'ultra') {
        this.setPerformanceLevel('high');
      } else if (this.performanceLevel === 'high') {
        this.setPerformanceLevel('medium');
      } else if (this.performanceLevel === 'medium') {
        this.setPerformanceLevel('low');
      }
    } else if (avgFPS > (CONFIG.performance as any).fpsThresholds.upgrade) {
      // 升级
      if (this.performanceLevel === 'low') {
        this.setPerformanceLevel('medium');
      } else if (this.performanceLevel === 'medium') {
        this.setPerformanceLevel('high');
      } else if (this.performanceLevel === 'high') {
        this.setPerformanceLevel('ultra');
      }
    }
  }

  /**
   * 设置性能级别
   */
  private setPerformanceLevel(level: 'low' | 'medium' | 'high' | 'ultra'): void {
    if (this.performanceLevel === level) return;
    
    this.performanceLevel = level;
    const config = CONFIG.performance.qualityLevels[level];
    
    // 调整粒子数量
    if (config.particleCount !== this.particleCount) {
      this.updateParticleCount(config.particleCount);
    }
    
    console.log(`🎯 性能级别调整为: ${level.toUpperCase()}, 粒子数: ${config.particleCount}`);
  }

  /**
   * 更新粒子数量
   */
  private updateParticleCount(newCount: number): void {
    if (newCount === this.particleCount) return;
    
    this.particleCount = Math.min(newCount, CONFIG.particles.maxCount);
    
    // 重新初始化几何体
    this.initGeometry();
    this.initParticleSystem();
    this.generateMorphData();
    this.setMorphData(this.currentMorph);
  }

  /**
   * 渲染循环
   */
  render(): void {
    const time = performance.now() * 0.001;
    
    // 更新着色器uniforms
    this.material.uniforms.uTime.value = time;
    this.material.uniforms.uMouse.value.set(this.mouseInfluence.x, this.mouseInfluence.y);
    this.material.uniforms.uCurrentMorph.value = this.getMorphIndex(this.currentMorph);
    
    // 动态发光强度 - 根据时间变化
    const glowVariation = Math.sin(time * 0.8) * 0.2 + 1.0;
    this.material.uniforms.uGlowIntensity.value = glowVariation;
    
    // 新增：优雅动画参数更新
    // 流动强度 - 根据当前形态调整
    const flowStrengthMap = {
      [MorphType.NEBULA]: 0.8,
      [MorphType.WEB3]: 1.2,
      [MorphType.BIOLOGY]: 1.0,
      [MorphType.COMPUTATION]: 0.6,
      [MorphType.DATA]: 1.1
    };
    this.material.uniforms.uFlowStrength.value = flowStrengthMap[this.currentMorph] || 1.0;
    
    // 引力中心 - 动态移动
    const gravityCenter = new THREE.Vector3(
      Math.sin(time * 0.3) * 20,
      Math.cos(time * 0.25) * 15,
      Math.sin(time * 0.2) * 25
    );
    this.material.uniforms.uGravityCenter.value.copy(gravityCenter);
    
    // 湍流强度 - 时间变化
    this.material.uniforms.uTurbulence.value = 0.3 + Math.sin(time * 0.6) * 0.2;
    
    // 动画速度 - 根据形态调整
    const speedMap = {
      [MorphType.NEBULA]: 0.8,
      [MorphType.WEB3]: 1.3,
      [MorphType.BIOLOGY]: 1.0,
      [MorphType.COMPUTATION]: 1.5,
      [MorphType.DATA]: 1.2
    };
    this.material.uniforms.uAnimationSpeed.value = speedMap[this.currentMorph] || 1.0;
    
    // 轨迹和景深参数更新
    this.material.uniforms.uTrailLength.value = 0.6 + Math.sin(time * 0.8) * 0.2;
    this.material.uniforms.uTrailDecay.value = 0.92 + Math.sin(time * 1.2) * 0.05;
    this.material.uniforms.uDepthFade.value = 0.8 + Math.sin(time * 0.5) * 0.3;
    
    // 更新背景效果
    if (this.backgroundSphere && this.backgroundSphere.material) {
      (this.backgroundSphere.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
      
      // 根据当前形态调整背景颜色
      const morphColors = this.getMorphBackgroundColors();
      if (morphColors) {
        (this.backgroundSphere.material as THREE.ShaderMaterial).uniforms.uColorTop.value.lerp(morphColors.top, 0.005);
        (this.backgroundSphere.material as THREE.ShaderMaterial).uniforms.uColorBottom.value.lerp(morphColors.bottom, 0.005);
      }
    }
    
    // 更新星空
    if (this.starField && this.starField.material) {
      (this.starField.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
    }
    
          // 更新连接系统
      if (this.connectionSystem) {
        // 计算过渡强度
        const transitionIntensity = this.isAdvancedTransitioning ? 1.0 : 0.0;
        
        this.connectionSystem.update({
          positions: this.positions.array as Float32Array,
          colors: this.colors.array as Float32Array
        }, this.currentMorph, time, transitionIntensity);
      }
    
    // 自动旋转（如果启用）
    if (CONFIG.camera.autoRotate) {
      this.points.rotation.y += CONFIG.camera.rotationSpeed;
    }
    
    // 更新性能统计
    this.updatePerformanceStats();
    
    // 渲染场景
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * 获取性能信息
   */
  getPerformanceInfo(): { fps: number; particleCount: number; memoryUsage?: number } {
    return {
      fps: this.fps,
      particleCount: this.particleCount,
      memoryUsage: (performance as any).memory?.usedJSHeapSize
    };
  }

  /**
   * 检查自动过渡状态
   */
  isAutoTransitionEnabled(): boolean {
    return this.autoTransition;
  }

  /**
   * 清理资源
   */
  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
    
    // 移除事件监听器
    document.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onWindowResize);
  }
}