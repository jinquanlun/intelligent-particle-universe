/**
 * 形态目标数据生成器
 * 为5种核心形态生成高质量的粒子分布数据
 */

// import { MorphType } from './config'; // 暂时注释掉未使用的导入

export interface MorphTargetData {
  positions: Float32Array;
  colors: Float32Array;
  sizes: Float32Array;
  velocities: Float32Array;
  lifetimes: Float32Array;
  randomSeeds: Float32Array;
}

/**
 * 形态数据生成器类
 */
export class MorphTargetGenerator {
  private fastRandom: () => number;

  constructor(seed: number = 42) {
    this.fastRandom = this.createFastRandom(seed);
  }

  private createFastRandom(seed: number): () => number {
    let state = seed || 1;
    return function() {
      state = (state * 1664525 + 1013904223) % 0x100000000;
      return state / 0x100000000;
    };
  }

  /**
   * 生成抽象星云形态数据 - 涡旋结构
   */
  generateNebulaData(count: number): MorphTargetData {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count);
    const randomSeeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // 创建多臂涡旋星云结构
      const armNumber = Math.floor(this.fastRandom() * 4); // 4条螺旋臂
      const armAngle = (armNumber * Math.PI * 2 / 4) + this.fastRandom() * 0.5;
      const radius = Math.pow(this.fastRandom(), 0.4) * 120;
      const spiralTightness = 2.5;
      const height = (this.fastRandom() - 0.5) * 40;
      
      // 螺旋角度
      const theta = armAngle + (radius / 30) * spiralTightness;
      
      // 添加密度变化和云团聚集
      const cloudDensity = Math.pow(this.fastRandom(), 2); // 非线性密度
      const finalRadius = radius * (0.7 + cloudDensity * 0.3);
      
      positions[i3] = finalRadius * Math.cos(theta) + (this.fastRandom() - 0.5) * 15;
      positions[i3 + 1] = height + (this.fastRandom() - 0.5) * 10;
      positions[i3 + 2] = finalRadius * Math.sin(theta) + (this.fastRandom() - 0.5) * 15;

      // 蓝色系颜色 - 星云特有的深蓝到亮蓝渐变
      colors[i3] = 0.05 + this.fastRandom() * 0.3; // 深蓝到浅蓝
      colors[i3 + 1] = 0.2 + this.fastRandom() * 0.5; // 中等蓝绿
      colors[i3 + 2] = 0.8 + this.fastRandom() * 0.2; // 强蓝色

      sizes[i] = 0.5 + this.fastRandom() * 1.5;
      
      velocities[i3] = (this.fastRandom() - 0.5) * 0.1;
      velocities[i3 + 1] = (this.fastRandom() - 0.5) * 0.1;
      velocities[i3 + 2] = (this.fastRandom() - 0.5) * 0.1;

      lifetimes[i] = this.fastRandom();
      randomSeeds[i] = this.fastRandom();
    }

    return { positions, colors, sizes, velocities, lifetimes, randomSeeds };
  }

  /**
   * 生成WEB3网络形态数据 - 有机网络拓扑
   */
  generateWeb3Data(count: number): MorphTargetData {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count);
    const randomSeeds = new Float32Array(count);

    // 创建多层次网络结构
    const networkLayers = 8;
    const nodesPerLayer = Math.floor(count / networkLayers);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const layerIndex = Math.floor(i / nodesPerLayer);
      const nodeInLayer = i % nodesPerLayer;
      
      if (this.fastRandom() < 0.3) {
        // 30% 核心节点 - 大型聚合体
        const coreRadius = 15 + this.fastRandom() * 25;
        const coreAngle = (nodeInLayer / nodesPerLayer) * Math.PI * 2;
        const coreHeight = (layerIndex / networkLayers - 0.5) * 120;
        
        positions[i3] = Math.cos(coreAngle) * coreRadius + (this.fastRandom() - 0.5) * 10;
        positions[i3 + 1] = coreHeight + (this.fastRandom() - 0.5) * 15;
        positions[i3 + 2] = Math.sin(coreAngle) * coreRadius + (this.fastRandom() - 0.5) * 10;
      } else {
        // 70% 分布式节点 - 有机连接
        const networkRadius = 60 + this.fastRandom() * 80;
        const theta = this.fastRandom() * Math.PI * 2;
        const phi = Math.acos(2 * this.fastRandom() - 1);
        const height = (layerIndex / networkLayers - 0.5) * 150;
        
        positions[i3] = networkRadius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = height + networkRadius * Math.cos(phi) * 0.3;
        positions[i3 + 2] = networkRadius * Math.sin(phi) * Math.sin(theta);
      }

      // 绿色系颜色 - WEB3特有的亮绿色网络色彩
      colors[i3] = 0.05 + this.fastRandom() * 0.25; // 极低红色
      colors[i3 + 1] = 0.7 + this.fastRandom() * 0.3; // 强绿色
      colors[i3 + 2] = 0.1 + this.fastRandom() * 0.3; // 低蓝色

      sizes[i] = 0.8 + this.fastRandom() * 0.4;
      
      velocities[i3] = 0;
      velocities[i3 + 1] = 0;
      velocities[i3 + 2] = 0;

      lifetimes[i] = this.fastRandom();
      randomSeeds[i] = this.fastRandom();
    }

    return { positions, colors, sizes, velocities, lifetimes, randomSeeds };
  }

  /**
   * 生成生物DNA形态数据 - 多层双螺旋+碱基对+大沟小沟
   */
  generateBiologyData(count: number): MorphTargetData {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count);
    const randomSeeds = new Float32Array(count);

    const helixRadius = 28; // 稍微增大螺旋半径
    const helixHeight = 200; // 增加高度
    const turns = 15; // 更多螺旋圈数，更密集
    // const basePairSpacing = 3.4; // 真实的碱基对间距 - 暂时注释未使用
    // const majorGrooveWidth = 22; // 大沟宽度 - 暂时注释未使用  
    // const minorGrooveWidth = 12; // 小沟宽度 - 暂时注释未使用
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const t = (i / count);
      const height = (t - 0.5) * helixHeight;
      const angle = t * Math.PI * 2 * turns;
      
      // 添加黄金比例的螺旋变化
      const goldenRatio = 1.618;
      const spiralVariation = Math.sin(angle / goldenRatio) * 0.1;
      const currentRadius = helixRadius * (1 + spiralVariation);
      
      // 增加更精细的结构选择
      const structureType = this.fastRandom();
      
      if (structureType < 0.45) {
        // 45% 主双螺旋骨架 - 更精细的结构
        const strandType = Math.floor(this.fastRandom() * 2);
        const strandAngle = angle + (strandType * Math.PI);
        
        // 添加大沟小沟的几何表现
        const groovePhase = angle * 2; // 沟槽相位
        const grooveDepth = strandType === 0 ? 
          Math.sin(groovePhase) * 2 : // 大沟
          Math.sin(groovePhase + Math.PI) * 1; // 小沟
        
        const finalRadius = currentRadius + grooveDepth;
        
        positions[i3] = Math.cos(strandAngle) * finalRadius;
        positions[i3 + 1] = height;
        positions[i3 + 2] = Math.sin(strandAngle) * finalRadius;
        
        // 骨架粒子 - 使用深蓝色和金色交替
        const backboneType = Math.floor(angle * 4) % 2;
        if (backboneType === 0) {
          colors[i3] = 0.2; // 深蓝
          colors[i3 + 1] = 0.4;
          colors[i3 + 2] = 0.9;
        } else {
          colors[i3] = 0.9; // 金色
          colors[i3 + 1] = 0.7;
          colors[i3 + 2] = 0.1;
        }
        
      } else if (structureType < 0.75) {
        // 30% 碱基对连接 - 使用科学的A-T G-C配对
        const basePairAngle = angle;
        const connectionProgress = this.fastRandom();
        
        // 模拟4种碱基类型
        const baseType = Math.floor(this.fastRandom() * 4);
        let connectionRadius = currentRadius * (0.3 + connectionProgress * 0.7);
        
        // A-T对（较短）和G-C对（较长）
        if (baseType < 2) {
          // A-T 配对 - 2个氢键，较短
          connectionRadius *= 0.85;
          colors[i3] = 1.0; // 红色系 - 腺嘌呤/胸腺嘧啶
          colors[i3 + 1] = 0.3;
          colors[i3 + 2] = 0.2;
        } else {
          // G-C 配对 - 3个氢键，较长
          connectionRadius *= 1.0;
          colors[i3] = 0.2; // 绿色系 - 鸟嘌呤/胞嘧啶
          colors[i3 + 1] = 0.8;
          colors[i3 + 2] = 0.4;
        }
        
        positions[i3] = Math.cos(basePairAngle) * connectionRadius;
        positions[i3 + 1] = height;
        positions[i3 + 2] = Math.sin(basePairAngle) * connectionRadius;
        
      } else if (structureType < 0.9) {
        // 15% 组蛋白和染色质结构
        const histoneRadius = currentRadius * (1.8 + this.fastRandom() * 0.6);
        const histoneAngle = this.fastRandom() * Math.PI * 2;
        const histoneHeight = height + (this.fastRandom() - 0.5) * 15;
        
        // 创建染色质的核小体结构
        const nucleosomePhase = this.fastRandom() * Math.PI * 2;
        const nucleosomeOffset = Math.sin(nucleosomePhase) * 5;
        
        positions[i3] = Math.cos(histoneAngle) * histoneRadius + nucleosomeOffset;
        positions[i3 + 1] = histoneHeight;
        positions[i3 + 2] = Math.sin(histoneAngle) * histoneRadius + nucleosomeOffset;
        
        // 组蛋白 - 紫色系
        colors[i3] = 0.7 + this.fastRandom() * 0.3;
        colors[i3 + 1] = 0.3 + this.fastRandom() * 0.4;
        colors[i3 + 2] = 0.9 + this.fastRandom() * 0.1;
        
      } else {
        // 10% 超螺旋结构和能量场
        const superhelixRadius = currentRadius * (2.2 + this.fastRandom() * 0.8);
        const superhelixAngle = angle * 0.1 + this.fastRandom() * Math.PI * 2;
        const energyPhase = this.fastRandom() * Math.PI * 2;
        
        positions[i3] = Math.cos(superhelixAngle) * superhelixRadius;
        positions[i3 + 1] = height + Math.sin(energyPhase * 3) * 8;
        positions[i3 + 2] = Math.sin(superhelixAngle) * superhelixRadius;
        
        // 能量场 - 彩虹色
        const rainbow = (angle / (Math.PI * 2)) % 1;
        colors[i3] = 0.5 + Math.sin(rainbow * Math.PI * 2) * 0.5;
        colors[i3 + 1] = 0.5 + Math.sin(rainbow * Math.PI * 2 + 2.0944) * 0.5; // 120度相位差
        colors[i3 + 2] = 0.5 + Math.sin(rainbow * Math.PI * 2 + 4.1888) * 0.5; // 240度相位差
      }

      // 根据结构类型设置粒子大小
      if (structureType < 0.45) {
        sizes[i] = 0.8 + this.fastRandom() * 0.6; // 骨架较大
      } else if (structureType < 0.75) {
        sizes[i] = 0.5 + this.fastRandom() * 0.4; // 碱基对中等
      } else if (structureType < 0.9) {
        sizes[i] = 1.0 + this.fastRandom() * 0.8; // 组蛋白最大
      } else {
        sizes[i] = 0.3 + this.fastRandom() * 0.3; // 能量场最小
      }
      
      // 增强的螺旋运动模式
      const rotationSpeed = 0.08;
      const breathingAmplitude = 0.03;
      
      velocities[i3] = -Math.sin(angle) * rotationSpeed + Math.cos(angle * 2) * breathingAmplitude;
      velocities[i3 + 1] = 0.015 + Math.sin(angle * 0.5) * 0.01; // 轻微上升运动
      velocities[i3 + 2] = Math.cos(angle) * rotationSpeed + Math.sin(angle * 2) * breathingAmplitude;

      lifetimes[i] = this.fastRandom();
      randomSeeds[i] = this.fastRandom();
    }

    return { positions, colors, sizes, velocities, lifetimes, randomSeeds };
  }

  /**
   * 生成量子电路形态数据 - 量子纠缠和概率云
   */
  generateComputationData(count: number): MorphTargetData {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count);
    const randomSeeds = new Float32Array(count);

    const quantumLayers = 12;
    const layerHeight = 15;
    const quantumFieldRadius = 100;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const quantumState = this.fastRandom();
      
      if (quantumState < 0.4) {
        // 40% 量子位网格
        const layer = Math.floor((i / count) * quantumLayers);
        const nodesPerLayer = Math.ceil(count / quantumLayers);
        const nodeIndex = i % nodesPerLayer;
        const gridSize = Math.sqrt(nodesPerLayer);
        
        const x = (nodeIndex % gridSize) - gridSize / 2;
        const z = Math.floor(nodeIndex / gridSize) - gridSize / 2;
        const y = (layer - quantumLayers / 2) * layerHeight;
        
        positions[i3] = x * 12 + (this.fastRandom() - 0.5) * 5;
        positions[i3 + 1] = y + (this.fastRandom() - 0.5) * 8;
        positions[i3 + 2] = z * 12 + (this.fastRandom() - 0.5) * 5;
      } else if (quantumState < 0.7) {
        // 30% 纠缠对云
        const pairRadius = 20 + this.fastRandom() * 40;
        const pairAngle = this.fastRandom() * Math.PI * 2;
        const pairHeight = (this.fastRandom() - 0.5) * 100;
        const orbitalPhase = this.fastRandom() * Math.PI * 2;
        
        positions[i3] = Math.cos(pairAngle) * pairRadius + Math.cos(orbitalPhase) * 8;
        positions[i3 + 1] = pairHeight + Math.sin(orbitalPhase) * 5;
        positions[i3 + 2] = Math.sin(pairAngle) * pairRadius + Math.sin(orbitalPhase * 1.6) * 8;
      } else {
        // 30% 概率云分布
        const cloudRadius = Math.pow(this.fastRandom(), 0.3) * quantumFieldRadius;
        const theta = this.fastRandom() * Math.PI * 2;
        const phi = Math.acos(2 * this.fastRandom() - 1);
        
        positions[i3] = cloudRadius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = cloudRadius * Math.cos(phi) * 0.5;
        positions[i3 + 2] = cloudRadius * Math.sin(phi) * Math.sin(theta);
      }

      // 紫色系颜色 - 量子计算特有的高饱和度紫色
      colors[i3] = 0.8 + this.fastRandom() * 0.2; // 高红色
      colors[i3 + 1] = 0.1 + this.fastRandom() * 0.2; // 极低绿色
      colors[i3 + 2] = 0.9 + this.fastRandom() * 0.1; // 极高蓝色

      sizes[i] = 0.5 + this.fastRandom() * 0.5;
      
      velocities[i3] = (this.fastRandom() - 0.5) * 0.2;
      velocities[i3 + 1] = (this.fastRandom() - 0.5) * 0.1;
      velocities[i3 + 2] = (this.fastRandom() - 0.5) * 0.3;

      lifetimes[i] = this.fastRandom();
      randomSeeds[i] = this.fastRandom();
    }

    return { positions, colors, sizes, velocities, lifetimes, randomSeeds };
  }

  /**
   * 生成数据图谱形态数据 - 神经网络脉冲传播
   */
  generateDataData(count: number): MorphTargetData {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count);
    const randomSeeds = new Float32Array(count);

    const neuralLayers = 8;
    const layerSpacing = 25;
    const brainRadius = 100;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const neuronType = this.fastRandom();
      
      if (neuronType < 0.5) {
        // 50% 主神经元网络
        const layer = Math.floor((i / count) * neuralLayers);
        const neuronsInLayer = Math.floor(count / neuralLayers);
        const neuronIndex = i % neuronsInLayer;
        
        // 创建分层的神经元网络
        const layerY = (layer - neuralLayers / 2) * layerSpacing;
        const layerRadius = brainRadius * (0.4 + 0.6 * Math.sin(layer * Math.PI / neuralLayers));
        
        const angle = (neuronIndex / neuronsInLayer) * Math.PI * 2;
        const radiusVariation = 1 + Math.sin(angle * 3) * 0.3;
        
        positions[i3] = Math.cos(angle) * layerRadius * radiusVariation;
        positions[i3 + 1] = layerY + (this.fastRandom() - 0.5) * 10;
        positions[i3 + 2] = Math.sin(angle) * layerRadius * radiusVariation;
      } else if (neuronType < 0.8) {
        // 30% 连接纤维
        const startLayer = Math.floor(this.fastRandom() * (neuralLayers - 1));
        const connectionProgress = this.fastRandom();
        
        const startY = (startLayer - neuralLayers / 2) * layerSpacing;
        const endY = (startLayer + 1 - neuralLayers / 2) * layerSpacing;
        const currentY = startY + (endY - startY) * connectionProgress;
        
        const connectionRadius = brainRadius * (0.5 + 0.3 * connectionProgress);
        const theta = this.fastRandom() * Math.PI * 2;
        
        positions[i3] = Math.cos(theta) * connectionRadius;
        positions[i3 + 1] = currentY;
        positions[i3 + 2] = Math.sin(theta) * connectionRadius;
      } else {
        // 20% 数据脉冲粒子
        const pulseRadius = 30 + this.fastRandom() * 70;
        const pulseAngle = this.fastRandom() * Math.PI * 2;
        const pulseHeight = (this.fastRandom() - 0.5) * 180;
        const pulsePhase = this.fastRandom() * Math.PI * 2;
        
        positions[i3] = Math.cos(pulseAngle) * pulseRadius + Math.cos(pulsePhase) * 5;
        positions[i3 + 1] = pulseHeight + Math.sin(pulsePhase * 2) * 8;
        positions[i3 + 2] = Math.sin(pulseAngle) * pulseRadius + Math.sin(pulsePhase * 1.3) * 5;
      }

      // 粉红色系颜色 - 数据图谱特有的亮粉色
      colors[i3] = 0.9 + this.fastRandom() * 0.1; // 极高红色
      colors[i3 + 1] = 0.2 + this.fastRandom() * 0.3; // 中低绿色  
      colors[i3 + 2] = 0.6 + this.fastRandom() * 0.3; // 中高蓝色

      sizes[i] = 0.4 + this.fastRandom() * 0.8;
      
      velocities[i3] = (this.fastRandom() - 0.5) * 0.15;
      velocities[i3 + 1] = (this.fastRandom() - 0.5) * 0.1;
      velocities[i3 + 2] = (this.fastRandom() - 0.5) * 0.15;

      lifetimes[i] = this.fastRandom();
      randomSeeds[i] = this.fastRandom();
    }

    return { positions, colors, sizes, velocities, lifetimes, randomSeeds };
  }
}

/**
 * 全局形态数据生成器实例
 */
export const morphTargetGenerator = new MorphTargetGenerator(); 