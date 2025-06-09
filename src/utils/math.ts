/**
 * 高性能数学工具库
 * 包含噪声生成、插值算法和3D数学计算
 */

import * as THREE from 'three';

/**
 * 简化的3D Perlin噪声实现
 * 针对粒子系统优化，提供连续的3D噪声值
 */
export class SimplexNoise3D {
  private permutation: number[];
  // private grad3: number[][]; // 暂时注释未使用

  constructor(seed: number = 0) {
    this.permutation = [];
                // this.grad3 = [ // 暂时注释未使用
      //   [1,1,0], [-1,1,0], [1,-1,0], [-1,-1,0],
      //   [1,0,1], [-1,0,1], [1,0,-1], [-1,0,-1],
      //   [0,1,1], [0,-1,1], [0,1,-1], [0,-1,-1]
      // ];

    // 基于种子生成置换表
    const random = this.seedRandom(seed);
    for (let i = 0; i < 256; i++) {
      this.permutation[i] = Math.floor(random() * 256);
    }
    
    // 扩展置换表
    for (let i = 0; i < 256; i++) {
      this.permutation[256 + i] = this.permutation[i];
    }
  }

  private seedRandom(seed: number) {
    return function() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(a: number, b: number, t: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  /**
   * 获取3D噪声值
   * @param x X坐标
   * @param y Y坐标  
   * @param z Z坐标
   * @returns -1到1之间的噪声值
   */
  noise(x: number, y: number, z: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.permutation[X] + Y;
    const AA = this.permutation[A] + Z;
    const AB = this.permutation[A + 1] + Z;
    const B = this.permutation[X + 1] + Y;
    const BA = this.permutation[B] + Z;
    const BB = this.permutation[B + 1] + Z;

    return this.lerp(
      this.lerp(
        this.lerp(
          this.grad(this.permutation[AA], x, y, z),
          this.grad(this.permutation[BA], x - 1, y, z),
          u
        ),
        this.lerp(
          this.grad(this.permutation[AB], x, y - 1, z),
          this.grad(this.permutation[BB], x - 1, y - 1, z),
          u
        ),
        v
      ),
      this.lerp(
        this.lerp(
          this.grad(this.permutation[AA + 1], x, y, z - 1),
          this.grad(this.permutation[BA + 1], x - 1, y, z - 1),
          u
        ),
        this.lerp(
          this.grad(this.permutation[AB + 1], x, y - 1, z - 1),
          this.grad(this.permutation[BB + 1], x - 1, y - 1, z - 1),
          u
        ),
        v
      ),
      w
    );
  }

  /**
   * 分形布朗运动（FBM）噪声
   * 多层噪声叠加产生更复杂的细节
   */
  fbm(x: number, y: number, z: number, octaves: number = 4, persistence: number = 0.5): number {
    let value = 0;
    let amplitude = 1;
    let frequency = 1;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      value += this.noise(x * frequency, y * frequency, z * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= 2;
    }

    return value / maxValue;
  }
}

/**
 * 高级插值函数集合
 */
export class Interpolation {
  /**
   * 平滑步进插值
   * 提供S曲线过渡，在边界处速度为0
   */
  static smoothstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  /**
   * 更平滑的步进插值
   * 5阶多项式，提供更自然的加速和减速
   */
  static smootherstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  /**
   * 弹性插值
   * 创建弹簧效果，超调后回弹
   */
  static elastic(t: number, amplitude: number = 1, period: number = 0.3): number {
    if (t === 0 || t === 1) return t;
    const s = period / 4;
    return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / period) + 1;
  }

  /**
   * 指数衰减插值
   * 快速开始，指数衰减到目标值
   */
  static exponentialDecay(t: number, decay: number = 5): number {
    return 1 - Math.exp(-decay * t);
  }

  /**
   * 三次贝塞尔曲线插值
   * 提供精确的缓动控制
   */
  static cubicBezier(t: number, _p1x: number, p1y: number, _p2x: number, p2y: number): number {
    // 简化的三次贝塞尔实现，适用于0,0到1,1的控制点
    // const cx = 3.0 * p1x; // 暂时注释未使用
    // const bx = 3.0 * (p2x - p1x) - cx; // 暂时注释未使用
    // const ax = 1.0 - cx - bx; // 暂时注释未使用
    
    const cy = 3.0 * p1y;
    const by = 3.0 * (p2y - p1y) - cy;
    const ay = 1.0 - cy - by;

    return ((ay * t + by) * t + cy) * t;
  }
}

/**
 * 3D空间几何计算工具
 */
export class Geometry3D {
  /**
   * 生成球面均匀分布点
   * 使用Marsaglia方法确保真正的球面均匀分布
   */
  static generateSpherePoints(count: number, radius: number = 1): Float32Array {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      let x, y, z;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
      } while (x * x + y * y + z * z > 1);

      const length = Math.sqrt(x * x + y * y + z * z);
      const scale = radius * Math.cbrt(Math.random()); // 立方根确保体积均匀分布

      positions[i * 3] = (x / length) * scale;
      positions[i * 3 + 1] = (y / length) * scale;
      positions[i * 3 + 2] = (z / length) * scale;
    }

    return positions;
  }

  /**
   * 生成DNA双螺旋结构 - 增强版
   */
  static generateDNAHelix(count: number, radius: number = 30, height: number = 200, turns: number = 5): Float32Array {
    const positions = new Float32Array(count * 3);
    const pointsPerTurn = count / (turns * 2); // 两条螺旋链

    for (let i = 0; i < count; i++) {
      const t = (i % (pointsPerTurn * 2)) / (pointsPerTurn * 2);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;
      
      // 添加黄金比例的优雅变化
      const goldenRatio = 1.618;
      const elegantVariation = Math.sin(angle / goldenRatio) * 0.15;
      const dynamicRadius = radius * (1 + elegantVariation);
      
      // 大沟小沟效果
      const groovePhase = angle * 2;
      const grooveDepth = Math.sin(groovePhase) * 3;
      
      // 第一条螺旋链
      if (i < count / 2) {
        positions[i * 3] = Math.cos(angle) * (dynamicRadius + grooveDepth);
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = Math.sin(angle) * (dynamicRadius + grooveDepth);
      } 
      // 第二条螺旋链（相位差π）
      else {
        // const idx = i - count / 2; // 暂时注释未使用
        positions[i * 3] = Math.cos(angle + Math.PI) * (dynamicRadius - grooveDepth);
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = Math.sin(angle + Math.PI) * (dynamicRadius - grooveDepth);
      }
    }

    return positions;
  }

  /**
   * 生成DNA碱基对连接动画
   */
  static generateDNABasePairs(count: number, radius: number = 30, height: number = 200, time: number = 0): Float32Array {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 2 * 15; // 15圈螺旋
      const y = (t - 0.5) * height;
      
      // 呼吸动画
      const breathingPhase = Math.sin(time * 2 + angle * 0.5) * 0.2 + 0.8;
      const connectionRadius = radius * 0.6 * breathingPhase;
      
      // 碱基对类型（A-T较短，G-C较长）
      const baseType = Math.floor((angle / (Math.PI * 2)) * 4) % 2;
      const pairLength = baseType === 0 ? 0.85 : 1.0; // A-T vs G-C
      
      positions[i * 3] = Math.cos(angle) * connectionRadius * pairLength;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * connectionRadius * pairLength;
    }
    
    return positions;
  }

  /**
   * 生成立方体网格结构
   */
  static generateCubicGrid(count: number, gridSize: number = 50, _spacing: number = 10): Float32Array {
    const positions = new Float32Array(count * 3);
    const cubesPerSide = Math.cbrt(count);
    const actualSpacing = gridSize / cubesPerSide;

    for (let i = 0; i < count; i++) {
      const x = (i % cubesPerSide) - cubesPerSide / 2;
      const y = Math.floor((i / cubesPerSide) % cubesPerSide) - cubesPerSide / 2;
      const z = Math.floor(i / (cubesPerSide * cubesPerSide)) - cubesPerSide / 2;

      positions[i * 3] = x * actualSpacing + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = y * actualSpacing + (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = z * actualSpacing + (Math.random() - 0.5) * 2;
    }

    return positions;
  }

  /**
   * 生成神经网络拓扑结构
   * 模拟大脑皮层的连接模式
   */
  static generateNeuralNetwork(count: number, layers: number = 5, spread: number = 50): Float32Array {
    const positions = new Float32Array(count * 3);
    const nodesPerLayer = count / layers;

    for (let i = 0; i < count; i++) {
      const layer = Math.floor(i / nodesPerLayer);
      const nodeInLayer = i % nodesPerLayer;
      
      // 每层形成一个略微弯曲的面
      const angle = (nodeInLayer / nodesPerLayer) * Math.PI * 2;
      const radius = spread * (0.5 + Math.random() * 0.5);
      const layerY = (layer - layers / 2) * (spread / layers);
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = layerY + (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return positions;
  }

  /**
   * 生成量子电路模式
   * 创建逻辑门网络的抽象表示
   */
  static generateQuantumCircuit(count: number, circuitWidth: number = 100, circuitHeight: number = 60): Float32Array {
    const positions = new Float32Array(count * 3);
    const gatesPerRow = Math.sqrt(count);
    const rowCount = count / gatesPerRow;

    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / gatesPerRow);
      const col = i % gatesPerRow;
      
      const x = ((col / gatesPerRow) - 0.5) * circuitWidth;
      const y = ((row / rowCount) - 0.5) * circuitHeight;
      const z = (Math.random() - 0.5) * 20; // 轻微的Z轴变化

      positions[i * 3] = x + (Math.random() - 0.5) * 5;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = z;
    }

    return positions;
  }
}

/**
 * 颜色空间转换和操作
 */
export class ColorUtils {
  /**
   * HSV到RGB转换
   */
  static hsvToRgb(h: number, s: number, v: number): [number, number, number] {
    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;

    let r, g, b;
    if (h >= 0 && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }

    return [r + m, g + m, b + m];
  }

  /**
   * 生成渐变色彩数组
   */
  static generateGradient(colors: string[], steps: number): Float32Array {
    const result = new Float32Array(steps * 3);
    const segmentSize = steps / (colors.length - 1);

    for (let i = 0; i < steps; i++) {
      const segment = Math.floor(i / segmentSize);
      const t = (i % segmentSize) / segmentSize;
      
      const color1 = new THREE.Color(colors[Math.min(segment, colors.length - 1)]);
      const color2 = new THREE.Color(colors[Math.min(segment + 1, colors.length - 1)]);
      
      const blended = color1.clone().lerp(color2, t);
      
      result[i * 3] = blended.r;
      result[i * 3 + 1] = blended.g;
      result[i * 3 + 2] = blended.b;
    }

    return result;
  }

  /**
   * 根据位置生成动态颜色
   */
  static positionBasedColor(x: number, y: number, z: number, time: number = 0): [number, number, number] {
    const distance = Math.sqrt(x * x + y * y + z * z);
    const hue = (Math.atan2(z, x) / Math.PI * 180 + 180 + time * 10) % 360;
    const saturation = Math.min(1, distance / 100);
    const value = 0.5 + 0.5 * Math.sin(distance * 0.1 - time);
    
    return this.hsvToRgb(hue, saturation, value);
  }
}

/**
 * 性能优化的工具函数
 */
export class PerformanceUtils {
  /**
   * 快速随机数生成器
   * 比Math.random()更快，用于大量粒子生成
   */
  static fastRandom(seed: number): () => number {
    let state = seed || 1;
    return function() {
      state = (state * 1664525 + 1013904223) % 0x100000000;
      return state / 0x100000000;
    };
  }

  /**
   * 批量向量操作
   * 优化的3D向量运算，避免创建临时对象
   */
  static batchVectorOperation(
    positions: Float32Array, 
    operation: (x: number, y: number, z: number, index: number) => [number, number, number]
  ): void {
    for (let i = 0; i < positions.length; i += 3) {
      const [newX, newY, newZ] = operation(
        positions[i], 
        positions[i + 1], 
        positions[i + 2], 
        i / 3
      );
      positions[i] = newX;
      positions[i + 1] = newY;
      positions[i + 2] = newZ;
    }
  }

  /**
   * 距离场计算优化
   * 避免昂贵的开方运算
   */
  static distanceSquared(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dz = z2 - z1;
    return dx * dx + dy * dy + dz * dz;
  }
} 