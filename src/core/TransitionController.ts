/**
 * 粒子形态过渡控制器
 * 负责管理粒子在不同形态间的平滑过渡动画
 */

import * as THREE from 'three';
import { gsap } from 'gsap';
import { MorphType } from '../data/config';

export interface TransitionConfig {
  duration: {
    scatter: number;    // 散发阶段时长
    travel: number;     // 移动阶段时长  
    gather: number;     // 聚合阶段时长
    settle: number;     // 稳定阶段时长
  };
  easing: {
    scatter: string;
    travel: string;
    gather: string;
    settle: string;
  };
  effects: {
    waveSpeed: number;        // 波浪传播速度
    spiralStrength: number;   // 螺旋运动强度
    elasticity: number;       // 弹性系数
    cameraMovement: boolean;  // 是否启用相机动画
    backgroundTransition: boolean; // 是否过渡背景
    curveIntensity: number;   // 贝塞尔曲线强度
    springStiffness: number;  // 弹簧刚度
    springDamping: number;    // 弹簧阻尼
    propagationDelay: number; // 传播延迟强度
  };
}

export interface TransitionState {
  phase: 'scatter' | 'travel' | 'gather' | 'settle' | 'complete';
  progress: number;           // 当前阶段进度 0-1
  overallProgress: number;    // 整体进度 0-1
  waveCenter: THREE.Vector3;  // 波浪传播中心
  particleStates: Float32Array; // 每个粒子的状态
}

export class TransitionController {
  private config: TransitionConfig;
  private state: TransitionState;
  private onUpdate?: (state: TransitionState) => void;
  private onComplete?: () => void;
  private timeline?: gsap.core.Timeline;

  constructor(config: Partial<TransitionConfig> = {}) {
    this.config = {
      duration: {
        scatter: 0.8,
        travel: 2.8,   // 增加移动阶段时间
        gather: 1.5,   // 增加聚合时间
        settle: 1.0
      },
      easing: {
        scatter: 'power2.out',
        travel: 'power1.inOut',
        gather: 'back.out(1.2)',  // 使用更自然的back缓动
        settle: 'elastic.out(1, 0.5)'
      },
      effects: {
        waveSpeed: 2.0,
        spiralStrength: 0.8,
        elasticity: 0.25,
        cameraMovement: true,
        backgroundTransition: true,
        curveIntensity: 1.2,
        springStiffness: 0.15,
        springDamping: 0.85,
        propagationDelay: 0.6
      },
      ...config
    };

    this.state = {
      phase: 'complete',
      progress: 1,
      overallProgress: 1,
      waveCenter: new THREE.Vector3(),
      particleStates: new Float32Array(0)
    };
  }

  /**
   * 开始形态过渡
   */
  startTransition(
    particleCount: number,
    _fromMorph: MorphType,
    _toMorph: MorphType,
    onUpdate: (state: TransitionState) => void,
    onComplete: () => void
  ): void {
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;
    
    // 初始化粒子状态
    this.state.particleStates = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      this.state.particleStates[i] = Math.random() * 0.5 + 0.25; // 0.25-0.75的随机延迟
    }
    
    // 设置波浪中心
    this.state.waveCenter.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
    
    this.createTransitionTimeline();
  }

  /**
   * 创建过渡时间轴
   */
  private createTransitionTimeline(): void {
    this.timeline?.kill();
    this.timeline = gsap.timeline();
    
    const totalDuration = this.config.duration.scatter + 
                         this.config.duration.travel + 
                         this.config.duration.gather + 
                         this.config.duration.settle;

    // 阶段1: 散发 - 粒子向外扩散
    this.timeline.to(this.state, {
      progress: 1,
      duration: this.config.duration.scatter,
      ease: this.config.easing.scatter,
      onStart: () => {
        this.state.phase = 'scatter';
        this.state.progress = 0;
      },
      onUpdate: () => {
        this.state.overallProgress = this.state.progress * (this.config.duration.scatter / totalDuration);
        this.onUpdate?.(this.state);
      }
    });

    // 阶段2: 移动 - 贝塞尔曲线路径移动到新位置  
    this.timeline.to(this.state, {
      progress: 1,
      duration: this.config.duration.travel,
      ease: this.config.easing.travel,
      onStart: () => {
        this.state.phase = 'travel';
        this.state.progress = 0;
      },
      onUpdate: () => {
        const phaseStart = this.config.duration.scatter / totalDuration;
        const phaseProgress = this.state.progress * (this.config.duration.travel / totalDuration);
        this.state.overallProgress = phaseStart + phaseProgress;
        this.onUpdate?.(this.state);
      }
    });

    // 阶段3: 聚合 - 弹性收缩到目标形态
    this.timeline.to(this.state, {
      progress: 1,
      duration: this.config.duration.gather,
      ease: this.config.easing.gather,
      onStart: () => {
        this.state.phase = 'gather';
        this.state.progress = 0;
      },
      onUpdate: () => {
        const phaseStart = (this.config.duration.scatter + this.config.duration.travel) / totalDuration;
        const phaseProgress = this.state.progress * (this.config.duration.gather / totalDuration);
        this.state.overallProgress = phaseStart + phaseProgress;
        this.onUpdate?.(this.state);
      }
    });

    // 阶段4: 稳定 - 多层次振动逐渐消失
    this.timeline.to(this.state, {
      progress: 1,
      duration: this.config.duration.settle,
      ease: this.config.easing.settle,
      onStart: () => {
        this.state.phase = 'settle';
        this.state.progress = 0;
      },
      onUpdate: () => {
        const phaseStart = (this.config.duration.scatter + this.config.duration.travel + this.config.duration.gather) / totalDuration;
        const phaseProgress = this.state.progress * (this.config.duration.settle / totalDuration);
        this.state.overallProgress = phaseStart + phaseProgress;
        this.onUpdate?.(this.state);
      },
      onComplete: () => {
        this.state.phase = 'complete';
        this.state.overallProgress = 1;
        this.onComplete?.();
      }
    });
  }

  /**
   * 计算粒子的过渡位置
   */
  calculateParticlePosition(
    particleIndex: number,
    currentPos: THREE.Vector3,
    targetPos: THREE.Vector3,
    particleCount: number
  ): THREE.Vector3 {
    const result = new THREE.Vector3();
    const randomDelay = this.state.particleStates[particleIndex];
    
    // 计算传播延迟效应
    const propagationFactor = this.calculatePropagationDelay(particleIndex, particleCount);

    switch (this.state.phase) {
      case 'scatter': {
        // 散发阶段：波动式向外扩散
        const scatterProgress = this.applySmoothstep(this.state.progress * propagationFactor);
        result.copy(currentPos);
        
        if (currentPos.length() > 0.1) {
          const scatterVector = currentPos.clone().normalize();
          const scatterDistance = scatterProgress * 18 * (randomDelay + 0.2);
          
          // 添加垂直波动
          const verticalWave = Math.sin(particleIndex * 0.01 + this.state.progress * 6) * 3;
          scatterVector.y += verticalWave * 0.3;
          
          result.add(scatterVector.multiplyScalar(scatterDistance));
        }
        break;
      }

      case 'travel': {
        // 移动阶段：贝塞尔曲线路径 + 物理弹簧系统
        const travelProgress = this.applySmoothstep(this.state.progress * propagationFactor);
        
        // 计算散发后的起始位置
        let startPos = currentPos.clone();
        if (currentPos.length() > 0.1) {
          const scatterVector = currentPos.clone().normalize();
          const maxScatterDistance = 18 * (randomDelay + 0.2);
          const verticalWave = Math.sin(particleIndex * 0.01 + 1 * 6) * 3;
          scatterVector.y += verticalWave * 0.3;
          startPos.add(scatterVector.multiplyScalar(maxScatterDistance));
        }
        
        // 贝塞尔曲线路径计算
        const bezierPath = this.calculateBezierPath(startPos, targetPos, travelProgress, particleIndex);
        
        // 物理弹簧系统
        const springEffect = this.calculateSpringEffect(bezierPath, targetPos, travelProgress);
        
        result.copy(bezierPath).add(springEffect);
        break;
      }

      case 'gather': {
        // 聚合阶段：增强的弹性收缩
        const gatherProgress = this.applyAdvancedElasticEasing(this.state.progress * propagationFactor);
        
        // 群体智能效应
        const swarmEffect = this.calculateSwarmEffect(currentPos, targetPos, particleIndex, gatherProgress);
        
        result.lerpVectors(currentPos, targetPos, Math.min(1, gatherProgress + 0.6));
        result.add(swarmEffect);
        break;
      }

      case 'settle': {
        // 稳定阶段：多层次振动消散
        const settleProgress = this.state.progress * propagationFactor;
        const multiLayerVibration = this.calculateMultiLayerVibration(particleIndex, settleProgress);
        
        result.copy(targetPos).add(multiLayerVibration.multiplyScalar(1 - settleProgress));
        break;
      }

      default:
        result.copy(targetPos);
    }

    return result;
  }

  /**
   * 计算贝塞尔曲线路径
   */
  private calculateBezierPath(
    from: THREE.Vector3,
    to: THREE.Vector3,
    progress: number,
    particleIndex: number
  ): THREE.Vector3 {
    // 计算控制点
    const direction = to.clone().sub(from);
    const distance = direction.length();
    
    // 第一个控制点：向上弯曲
    const control1 = from.clone().lerp(to, 0.33);
    control1.y += distance * this.config.effects.curveIntensity * 0.4;
    
    // 第二个控制点：螺旋偏移
    const control2 = from.clone().lerp(to, 0.67);
    const spiralAngle = particleIndex * 0.02 + progress * Math.PI * 2;
    const spiralRadius = distance * this.config.effects.curveIntensity * 0.2;
    control2.x += Math.cos(spiralAngle) * spiralRadius;
    control2.z += Math.sin(spiralAngle) * spiralRadius;
    
    // 三次贝塞尔插值
    const t = progress;
    const oneMinusT = 1 - t;
    const oneMinusTSquared = oneMinusT * oneMinusT;
    const tSquared = t * t;
    
    return from.clone()
      .multiplyScalar(oneMinusTSquared * oneMinusT)
      .add(control1.clone().multiplyScalar(3 * oneMinusTSquared * t))
      .add(control2.clone().multiplyScalar(3 * oneMinusT * tSquared))
      .add(to.clone().multiplyScalar(tSquared * t));
  }

  /**
   * 计算物理弹簧效果
   */
  private calculateSpringEffect(
    currentPos: THREE.Vector3,
    targetPos: THREE.Vector3,
    progress: number
  ): THREE.Vector3 {
    const displacement = targetPos.clone().sub(currentPos);
    const springForce = displacement.multiplyScalar(this.config.effects.springStiffness);
    
    // 阻尼效应
    const dampingFactor = Math.pow(this.config.effects.springDamping, progress);
    
    return springForce.multiplyScalar(Math.sin(progress * Math.PI) * dampingFactor);
  }

  /**
   * 计算传播延迟
   */
  private calculatePropagationDelay(particleIndex: number, particleCount: number): number {
    const normalizedIndex = particleIndex / particleCount;
    const wave = Math.sin(normalizedIndex * Math.PI * 2 + this.state.progress * Math.PI * 4);
    return Math.max(0.3, 1 + wave * this.config.effects.propagationDelay);
  }

  /**
   * 计算群体智能效应
   */
  private calculateSwarmEffect(
    currentPos: THREE.Vector3,
    targetPos: THREE.Vector3,
    particleIndex: number,
    progress: number
  ): THREE.Vector3 {
    const swarmCenter = currentPos.clone().lerp(targetPos, 0.5);
    const toCenter = swarmCenter.sub(currentPos).normalize();
    
    const swarmStrength = Math.sin(progress * Math.PI) * 2;
    const individualVariation = Math.sin(particleIndex * 0.01) * 0.5;
    
    return toCenter.multiplyScalar(swarmStrength * individualVariation);
  }

  /**
   * 高级弹性缓动
   */
  private applyAdvancedElasticEasing(t: number): number {
    t = Math.max(0, Math.min(1, t));
    if (t === 0 || t === 1) return t;
    
    const elasticity = this.config.effects.elasticity;
    const amplitude = 1;
    const period = elasticity;
    
    return amplitude * Math.pow(2, -12 * t) * 
           Math.sin((t - period / 4) * (2 * Math.PI) / period) + 1;
  }

  /**
   * 计算多层次振动
   */
  private calculateMultiLayerVibration(particleIndex: number, progress: number): THREE.Vector3 {
    const time = Date.now() * 0.001;
    const amplitude = (1 - progress) * 1.5;
    
    // 主振动
    const mainFreq = 6 + particleIndex * 0.008;
    const mainVibration = new THREE.Vector3(
      Math.sin(time * mainFreq + particleIndex * 0.1) * amplitude,
      Math.cos(time * mainFreq * 0.8 + particleIndex * 0.15) * amplitude * 0.6,
      Math.sin(time * mainFreq * 1.2 + particleIndex * 0.12) * amplitude
    );
    
    // 高频微振动
    const microFreq = 25 + particleIndex * 0.02;
    const microAmplitude = amplitude * 0.2;
    const microVibration = new THREE.Vector3(
      Math.sin(time * microFreq) * microAmplitude,
      Math.cos(time * microFreq * 1.1) * microAmplitude,
      Math.sin(time * microFreq * 0.9) * microAmplitude
    );
    
    return mainVibration.add(microVibration);
  }

  /**
   * 应用平滑步进函数
   */
  private applySmoothstep(t: number): number {
    t = Math.max(0, Math.min(1, t));
    return t * t * (3 - 2 * t);
  }

  /**
   * 停止当前过渡
   */
  stop(): void {
    this.timeline?.kill();
    this.state.phase = 'complete';
  }

  /**
   * 获取当前状态
   */
  getState(): TransitionState {
    return { ...this.state };
  }

  /**
   * 是否正在过渡中
   */
  isTransitioning(): boolean {
    return this.state.phase !== 'complete';
  }
} 