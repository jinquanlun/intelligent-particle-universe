/**
 * 智元粒子宇宙全局配置
 * 核心参数和性能优化设置
 */

export interface ParticleConfig {
  count: number;
  maxCount: number;
  size: {
    min: number;
    max: number;
    default: number;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  performance: {
    targetFPS: number;
    adaptiveQuality: boolean;
    maxDrawCalls: number;
  };
}

export interface MorphConfig {
  transitionDuration: number;
  easingFunction: string;
  blendMode: 'smooth' | 'sharp' | 'organic';
  simultaneousTargets: number;
}

export interface CameraConfig {
  fov: number;
  near: number;
  far: number;
  autoRotate: boolean;
  rotationSpeed: number;
  zoomLimits: {
    min: number;
    max: number;
  };
}

export interface InteractionConfig {
  mouseInfluence: {
    radius: number;
    strength: number;
    falloff: number;
  };
  touchSupport: boolean;
  gestureRecognition: boolean;
}

/**
 * 全局配置对象
 */
export const CONFIG = {
  // 粒子系统配置 - 性能优化
  particles: {
    count: 75000, // 降低到7.5万粒子，提升流畅性
    maxCount: 500000, // 最大50万粒子
    size: {
      min: 0.5,
      max: 3.0,
      default: 1.0
    },
    colors: {
      primary: '#00ffff',
      secondary: '#ff00ff', 
      accent: '#ffff00'
    },
    performance: {
      targetFPS: 60,
      adaptiveQuality: true,
      maxDrawCalls: 60,
      frustumCulling: true, // 启用视锥剔除
      adaptiveParticleCount: true // 动态粒子数量调整
    }
  } as ParticleConfig,

  // 形态变换配置
  morphing: {
    transitionDuration: 3.5, // 3.5秒过渡时间 - 更优雅
    easingFunction: 'power3.inOut', // 更平滑的缓动
    blendMode: 'smooth',
    simultaneousTargets: 2 // 允许同时向2个目标形态变换
  } as MorphConfig,

  // 相机配置
  camera: {
    fov: 60,
    near: 0.1,
    far: 2000,
    autoRotate: false,
    rotationSpeed: 0.1,
    zoomLimits: {
      min: 10,
      max: 500
    }
  } as CameraConfig,

  // 交互配置
  interaction: {
    mouseInfluence: {
      radius: 100,
      strength: 50,
      falloff: 2.0
    },
    touchSupport: true,
    gestureRecognition: false // 暂时禁用，未来版本支持
  } as InteractionConfig,

  // 渲染配置
  rendering: {
    antialias: true,
    powerPreference: 'high-performance' as WebGLPowerPreference,
    alpha: false,
    preserveDrawingBuffer: false,
    stencil: false,
    depth: true,
    logarithmicDepthBuffer: false,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    shadowMap: {
      enabled: false, // 粒子系统通常不需要阴影
      type: 'PCFSoftShadowMap' as const
    },
    toneMapping: 'ACESFilmicToneMapping' as const,
    toneMappingExposure: 1.0,
    outputColorSpace: 'srgb' as const
  },

  // 性能监控配置 - 智能适配
  performance: {
    monitorFPS: true,
    monitorMemory: true,
    adaptiveQuality: true,
    qualityLevels: {
      low: { particleCount: 25000, effectsEnabled: false },
      medium: { particleCount: 50000, effectsEnabled: true },
      high: { particleCount: 75000, effectsEnabled: true },
      ultra: { particleCount: 150000, effectsEnabled: true }
    },
    fpsThresholds: {
      downgrade: 45, // 低于45FPS降级
      upgrade: 55    // 高于55FPS升级
    },
    adaptiveInterval: 2000 // 每2秒检查一次性能
  },

  // 调试配置
  debug: {
    showStats: true,
    showAxes: false,
    showWireframe: false,
    logPerformance: true,
    enableGUI: false // dat.GUI暂时禁用
  }
} as const;

/**
 * 形态类型定义
 */
export enum MorphType {
  NEBULA = 'nebula',
  WEB3 = 'web3',
  BIOLOGY = 'biology',
  COMPUTATION = 'computation',
  DATA = 'data'
}

/**
 * 形态特定配置
 */
export const MORPH_CONFIGS = {
  [MorphType.NEBULA]: {
    name: '抽象星云',
    description: '宇宙尘埃的聚合与流动',
    colors: ['#001155', '#0066ff', '#00aaff', '#ffffff'],
    animationSpeed: 0.5,
    noiseScale: 0.003,
    flowStrength: 2.0
  },
  [MorphType.WEB3]: {
    name: 'WEB3网络',
    description: '去中心化的数字连接网络',
    colors: ['#00ff00', '#00ff88', '#88ff00', '#ffffff'],
    animationSpeed: 1.0,
    gridSize: 50,
    connectionProbability: 0.3
  },
  [MorphType.BIOLOGY]: {
    name: '生物DNA',
    description: '生命密码的双螺旋结构与碱基对舞蹈',
    colors: ['#ff2244', '#22ff44', '#4422ff', '#ffaa22', '#aa22ff', '#22aaff'],
    animationSpeed: 0.9,
    helixRadius: 28,
    helixHeight: 200,
    basePairColors: {
      'A-T': ['#ff3355', '#ff6677'], // 腺嘌呤-胸腺嘧啶
      'G-C': ['#33ff55', '#66ff77'], // 鸟嘌呤-胞嘧啶
      'backbone': ['#2255ff', '#ffaa22'], // 骨架
      'histone': ['#aa33ff', '#cc66ff'], // 组蛋白
      'energy': 'rainbow' // 能量场
    }
  },
  [MorphType.COMPUTATION]: {
    name: '量子电路',
    description: '量子计算的逻辑门网络',
    colors: ['#8800ff', '#aa00ff', '#cc44ff', '#ffffff'],
    animationSpeed: 1.2,
    circuitComplexity: 0.7,
    quantumEffects: true
  },
  [MorphType.DATA]: {
    name: '数据图谱',
    description: '信息网络的神经连接',
    colors: ['#ff0088', '#ff44aa', '#ff88cc', '#ffffff'],
    animationSpeed: 0.9,
    networkDensity: 0.6,
    pulseFrequency: 2.0
  }
} as const;