/**
 * 智元粒子宇宙 LOGO 粒子系统
 * 用于入场动画和品牌展示
 */

import * as THREE from 'three';
import { gsap } from 'gsap';

export interface LogoParticle {
  position: THREE.Vector3;
  targetPosition: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
  size: number;
  alpha: number;
}

export class LogoParticleSystem {
  private scene: THREE.Scene;
  // private camera: THREE.Camera; // 暂时注释未使用
  // private renderer: THREE.WebGLRenderer; // 暂时注释未使用
  
  private particles: LogoParticle[] = [];
  private geometry!: THREE.BufferGeometry;
  private material!: THREE.ShaderMaterial;
  private points!: THREE.Points;
  
  private animationState: 'forming' | 'stable' | 'dispersing' | 'hidden' = 'hidden';
  private animationProgress: number = 0;
  
  constructor(scene: THREE.Scene, _camera: THREE.Camera, _renderer: THREE.WebGLRenderer) {
    this.scene = scene;
    // this.camera = _camera; // 暂时注释未使用
    // this.renderer = _renderer; // 暂时注释未使用
    
    this.initializeParticles();
    this.createGeometry();
    this.createMaterial();
    this.createPoints();
  }

  /**
   * 初始化粒子数据
   */
  private initializeParticles(): void {
    // 生成"智元粒子宇宙"文字的粒子点位
    const logoText = this.generateLogoPositions();
    
    logoText.forEach((position) => {
      const particle: LogoParticle = {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 400,
          (Math.random() - 0.5) * 400,
          (Math.random() - 0.5) * 400
        ),
        targetPosition: position.clone(),
        velocity: new THREE.Vector3(0, 0, 0),
        life: Math.random(),
        size: 1 + Math.random() * 2,
        alpha: 0
      };
      this.particles.push(particle);
    });
  }

  /**
   * 生成LOGO文字的粒子位置
   */
  private generateLogoPositions(): THREE.Vector3[] {
    const positions: THREE.Vector3[] = [];
    
    // 创建文字形状的粒子分布
    // 这里简化为几何形状，实际可以用字体解析器
    
    // "智" 字形状 (简化为方形结构)
    for (let i = 0; i < 300; i++) {
      const x = -120 + (i % 20) * 6;
      const y = 20 - Math.floor(i / 20) * 4;
      const z = (Math.random() - 0.5) * 5;
      positions.push(new THREE.Vector3(x, y, z));
    }
    
    // "元" 字形状
    for (let i = 0; i < 250; i++) {
      const x = -60 + (i % 15) * 4;
      const y = 20 - Math.floor(i / 15) * 4;
      const z = (Math.random() - 0.5) * 5;
      positions.push(new THREE.Vector3(x, y, z));
    }
    
    // "粒子宇宙" 简化为点阵
    for (let i = 0; i < 800; i++) {
      const x = 0 + (i % 40) * 3;
      const y = 0 - Math.floor(i / 40) * 4;
      const z = (Math.random() - 0.5) * 5;
      positions.push(new THREE.Vector3(x, y, z));
    }
    
    return positions;
  }

  /**
   * 创建几何体
   */
  private createGeometry(): void {
    this.geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(this.particles.length * 3);
    const sizes = new Float32Array(this.particles.length);
    const alphas = new Float32Array(this.particles.length);
    const lifetimes = new Float32Array(this.particles.length);
    
    this.particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;
      
      sizes[i] = particle.size;
      alphas[i] = particle.alpha;
      lifetimes[i] = particle.life;
    });
    
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    this.geometry.setAttribute('lifetime', new THREE.BufferAttribute(lifetimes, 1));
  }

  /**
   * 创建材质
   */
  private createMaterial(): void {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        attribute float size;
        attribute float alpha;
        attribute float lifetime;
        uniform float uTime;
        uniform float uProgress;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vLifetime;
        
        void main() {
          vAlpha = alpha;
          vLifetime = lifetime;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // 动态大小计算
          float dynamicSize = size * (0.5 + sin(uTime * 2.0 + lifetime * 10.0) * 0.3);
          gl_PointSize = dynamicSize * (300.0 / -mvPosition.z) * uPixelRatio;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uProgress;
        varying float vAlpha;
        varying float vLifetime;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // 创建星形效果
          float star = 1.0 - smoothstep(0.0, 0.5, distance);
          
          // 动态颜色
          vec3 color1 = vec3(0.0, 1.0, 1.0); // 青色
          vec3 color2 = vec3(1.0, 0.0, 1.0); // 洋红
          vec3 color3 = vec3(1.0, 1.0, 0.0); // 黄色
          
          float colorMix = sin(uTime * 0.5 + vLifetime * 5.0) * 0.5 + 0.5;
          vec3 finalColor = mix(mix(color1, color2, colorMix), color3, sin(uTime * 0.3) * 0.5 + 0.5);
          
          // 闪烁效果
          float twinkle = sin(uTime * 3.0 + vLifetime * 15.0) * 0.3 + 0.7;
          
          gl_FragColor = vec4(finalColor * star * twinkle, vAlpha * star);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  }

  /**
   * 创建粒子点对象
   */
  private createPoints(): void {
    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);
  }

  /**
   * 播放聚合动画
   */
  playFormingAnimation(): Promise<void> {
    return new Promise((resolve) => {
      this.animationState = 'forming';
      
      // 设置初始透明度
      this.particles.forEach(particle => {
        particle.alpha = 0;
      });
      
      // 粒子移动到目标位置的动画
      this.particles.forEach((particle, index) => {
        gsap.to(particle.position, {
          x: particle.targetPosition.x,
          y: particle.targetPosition.y,
          z: particle.targetPosition.z,
          duration: 2 + Math.random() * 1,
          delay: index * 0.002,
          ease: "power2.out"
        });
        
        gsap.to(particle, {
          alpha: 1,
          duration: 1,
          delay: index * 0.002,
          ease: "power2.out"
        });
      });
      
      // 2.5秒后进入稳定状态
      setTimeout(() => {
        this.animationState = 'stable';
        resolve();
      }, 3000);
    });
  }

  /**
   * 播放消散动画
   */
  playDispersingAnimation(): Promise<void> {
    return new Promise((resolve) => {
      this.animationState = 'dispersing';
      
      this.particles.forEach((particle, index) => {
        const randomDirection = new THREE.Vector3(
          (Math.random() - 0.5) * 600,
          (Math.random() - 0.5) * 600,
          (Math.random() - 0.5) * 600
        );
        
        gsap.to(particle.position, {
          x: randomDirection.x,
          y: randomDirection.y,
          z: randomDirection.z,
          duration: 1.5,
          delay: index * 0.001,
          ease: "power2.in"
        });
        
        gsap.to(particle, {
          alpha: 0,
          duration: 1,
          delay: index * 0.001,
          ease: "power2.in"
        });
      });
      
      setTimeout(() => {
        this.animationState = 'hidden';
        this.scene.remove(this.points);
        resolve();
      }, 2000);
    });
  }

  /**
   * 更新系统
   */
  update(deltaTime: number): void {
    if (this.animationState === 'hidden') return;
    
    this.material.uniforms.uTime.value += deltaTime;
    this.material.uniforms.uProgress.value = this.animationProgress;
    
    // 更新粒子位置属性
    const positions = this.geometry.attributes.position.array as Float32Array;
    const alphas = this.geometry.attributes.alpha.array as Float32Array;
    
    this.particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;
      alphas[i] = particle.alpha;
    });
    
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.alpha.needsUpdate = true;
  }

  /**
   * 清理资源
   */
  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    if (this.points.parent) {
      this.scene.remove(this.points);
    }
  }
} 