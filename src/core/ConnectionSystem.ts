/**
 * 粒子连接系统
 * 负责渲染粒子间的动态连接线和数据传输效果
 */

import * as THREE from 'three';
import { MorphType } from '../data/config';

interface Connection {
  from: number;
  to: number;
  strength: number;
  age: number;
  type: 'data' | 'energy' | 'quantum' | 'neural';
}

export class ConnectionSystem {
  private scene: THREE.Scene;
  private connections: Connection[] = [];
  private connectionGeometry!: THREE.BufferGeometry;
  private connectionMaterial!: THREE.ShaderMaterial;
  private connectionLines!: THREE.LineSegments;
  
  private maxConnections: number = 200;
  private connectionDistance: number = 50;
  private currentMorph: MorphType = MorphType.NEBULA;
  private transitionIntensity: number = 0;
  
  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.initConnectionSystem();
  }

  /**
   * 初始化连接系统
   */
  private initConnectionSystem(): void {
    this.createConnectionGeometry();
    this.createConnectionMaterial();
    this.createConnectionLines();
  }

  /**
   * 创建连接几何体
   */
  private createConnectionGeometry(): void {
    this.connectionGeometry = new THREE.BufferGeometry();
    
    // 为最大连接数预分配空间
    const positions = new Float32Array(this.maxConnections * 6);
    const colors = new Float32Array(this.maxConnections * 6);
    const strengths = new Float32Array(this.maxConnections * 2);
    const ages = new Float32Array(this.maxConnections * 2);
    
    this.connectionGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.connectionGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.connectionGeometry.setAttribute('strength', new THREE.BufferAttribute(strengths, 1));
    this.connectionGeometry.setAttribute('age', new THREE.BufferAttribute(ages, 1));
  }

  /**
   * 创建连接材质
   */
  private createConnectionMaterial(): void {
    this.connectionMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uMorphType: { value: 0 },
        uConnectionIntensity: { value: 1.0 },
        uDataFlowSpeed: { value: 2.0 }
      },
      vertexShader: `
        attribute float strength;
        attribute float age;
        
        uniform float uTime;
        uniform int uMorphType;
        uniform float uConnectionIntensity;
        uniform float uDataFlowSpeed;
        
        varying vec3 vColor;
        varying float vStrength;
        varying float vAge;
        varying float vDataFlow;
        
        void main() {
          vColor = color;
          vStrength = strength;
          vAge = age;
          
          // 数据流动效果
          float flowPhase = uTime * uDataFlowSpeed + position.x * 0.01 + position.z * 0.01;
          vDataFlow = sin(flowPhase) * 0.5 + 0.5;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform int uMorphType;
        uniform float uConnectionIntensity;
        
        varying vec3 vColor;
        varying float vStrength;
        varying float vAge;
        varying float vDataFlow;
        
        void main() {
          // 基础透明度计算
          float alpha = vStrength * uConnectionIntensity * (1.0 - vAge * 0.8);
          
          // 形态特定效果
          vec3 finalColor = vColor;
          float effectMultiplier = 1.0;
          
          if (uMorphType == 0) {
            // 星云形态 - 能量流
            effectMultiplier = 0.4 + sin(uTime * 2.0 + vAge * 10.0) * 0.2;
            finalColor *= vec3(1.2, 1.1, 1.6);
            
          } else if (uMorphType == 1) {
            // WEB3网络 - 数据传输
            float dataStrobe = step(0.7, vDataFlow) * 1.5 + 0.3;
            effectMultiplier = dataStrobe;
            finalColor *= vec3(1.0, 1.4, 1.2);
            
          } else if (uMorphType == 2) {
            // DNA生物 - 生命脉络
            float heartbeat = sin(uTime * 1.5) * 0.2 + 0.5;
            effectMultiplier = heartbeat * (1.0 + vDataFlow * 0.3);
            finalColor *= vec3(1.4, 1.0, 1.2);
            
          } else if (uMorphType == 3) {
            // 量子计算 - 纠缠连接
            float quantumFlicker = sin(uTime * 8.0 + vAge * 20.0);
            effectMultiplier = abs(quantumFlicker) * 0.4 + 0.2;
            finalColor *= vec3(1.5, 1.0, 1.6);
            
          } else {
            // 数据流 - 神经连接
            float synapseFlash = step(0.9, sin(uTime * 6.0 + vAge * 15.0));
            effectMultiplier = 0.3 + synapseFlash * 0.8 + vDataFlow * 0.2;
            finalColor *= vec3(1.2, 1.1, 1.4);
          }
          
          alpha *= effectMultiplier;
          
          gl_FragColor = vec4(finalColor, alpha * 0.6);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });
  }

  /**
   * 创建连接线对象
   */
  private createConnectionLines(): void {
    this.connectionLines = new THREE.LineSegments(this.connectionGeometry, this.connectionMaterial);
    this.scene.add(this.connectionLines);
  }

  /**
   * 更新连接系统
   */
  update(particles: { positions: Float32Array; colors: Float32Array }, morphType: MorphType, time: number, transitionIntensity: number = 0): void {
    this.currentMorph = morphType;
    this.transitionIntensity = transitionIntensity;
    
    // 过渡期间增加连接活跃度
    const dynamicMaxConnections = Math.floor(this.maxConnections * (1 + transitionIntensity * 0.8));
    const dynamicDistance = this.connectionDistance * (1 + transitionIntensity * 0.3);
    
    // 更新现有连接
    this.updateExistingConnections(time);
    
    // 根据形态和过渡状态生成新连接
    this.generateConnections(particles, dynamicMaxConnections, dynamicDistance);
    
    // 更新几何体
    this.updateGeometry(particles);
    
    // 更新着色器uniform
    this.updateUniforms(time);
  }

  /**
   * 更新现有连接
   */
  private updateExistingConnections(time: number): void {
    for (let i = this.connections.length - 1; i >= 0; i--) {
      const connection = this.connections[i];
      connection.age += 0.016; // 假设60fps
      
      // 移除过老的连接
      if (connection.age > this.getConnectionLifetime(connection.type)) {
        this.connections.splice(i, 1);
      } else {
        // 更新连接强度
        connection.strength = this.calculateConnectionStrength(connection, time);
      }
    }
  }

  /**
   * 生成新连接
   */
  private generateConnections(particles: { positions: Float32Array; colors: Float32Array }, maxConnections: number = this.maxConnections, connectionDistance: number = this.connectionDistance): void {
    const particleCount = particles.positions.length / 3;
    const connectionsToAdd = Math.min(
      this.getMaxNewConnectionsPerFrame() * (1 + this.transitionIntensity),
      maxConnections - this.connections.length
    );
    
    for (let added = 0; added < connectionsToAdd; added++) {
      const from = Math.floor(Math.random() * particleCount);
      const to = this.findNearestParticle(from, particles, connectionDistance);
      
      if (to !== -1 && !this.connectionExists(from, to)) {
        const connection: Connection = {
          from,
          to,
          strength: 0.6 + Math.random() * 0.4 + this.transitionIntensity * 0.3,
          age: 0,
          type: this.getConnectionType()
        };
        
        this.connections.push(connection);
      }
    }
  }

  /**
   * 寻找最近的粒子
   */
  private findNearestParticle(fromIndex: number, particles: { positions: Float32Array }, maxDistance: number = this.connectionDistance): number {
    const fromPos = new THREE.Vector3(
      particles.positions[fromIndex * 3],
      particles.positions[fromIndex * 3 + 1],
      particles.positions[fromIndex * 3 + 2]
    );
    
    let nearestIndex = -1;
    let nearestDistance = maxDistance;
    
    for (let i = 0; i < particles.positions.length / 3; i++) {
      if (i === fromIndex) continue;
      
      const toPos = new THREE.Vector3(
        particles.positions[i * 3],
        particles.positions[i * 3 + 1],
        particles.positions[i * 3 + 2]
      );
      
      const distance = fromPos.distanceTo(toPos);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = i;
      }
    }
    
    return nearestIndex;
  }

  /**
   * 检查连接是否已存在
   */
  private connectionExists(from: number, to: number): boolean {
    return this.connections.some(conn => 
      (conn.from === from && conn.to === to) || 
      (conn.from === to && conn.to === from)
    );
  }

  /**
   * 更新几何体
   */
  private updateGeometry(particles: { positions: Float32Array; colors: Float32Array }): void {
    const positions = this.connectionGeometry.attributes.position.array as Float32Array;
    const colors = this.connectionGeometry.attributes.color.array as Float32Array;
    const strengths = this.connectionGeometry.attributes.strength.array as Float32Array;
    const ages = this.connectionGeometry.attributes.age.array as Float32Array;
    
    // 清空数组
    positions.fill(0);
    colors.fill(0);
    strengths.fill(0);
    ages.fill(0);
    
    // 填充连接数据
    this.connections.forEach((connection, i) => {
      if (i >= this.maxConnections) return;
      
      const idx = i * 6;
      const strengthIdx = i * 2;
      
      // From粒子位置
      positions[idx] = particles.positions[connection.from * 3];
      positions[idx + 1] = particles.positions[connection.from * 3 + 1];
      positions[idx + 2] = particles.positions[connection.from * 3 + 2];
      
      // To粒子位置
      positions[idx + 3] = particles.positions[connection.to * 3];
      positions[idx + 4] = particles.positions[connection.to * 3 + 1];
      positions[idx + 5] = particles.positions[connection.to * 3 + 2];
      
      // 颜色插值
      colors[idx] = particles.colors[connection.from * 3] * 0.8;
      colors[idx + 1] = particles.colors[connection.from * 3 + 1] * 0.8;
      colors[idx + 2] = particles.colors[connection.from * 3 + 2] * 0.8;
      
      colors[idx + 3] = particles.colors[connection.to * 3] * 0.8;
      colors[idx + 4] = particles.colors[connection.to * 3 + 1] * 0.8;
      colors[idx + 5] = particles.colors[connection.to * 3 + 2] * 0.8;
      
      // 强度
      strengths[strengthIdx] = connection.strength;
      strengths[strengthIdx + 1] = connection.strength;
      
      // 年龄
      ages[strengthIdx] = connection.age;
      ages[strengthIdx + 1] = connection.age;
    });
    
    // 设置实际绘制范围
    this.connectionGeometry.setDrawRange(0, this.connections.length * 2);
    
    // 标记需要更新
    this.connectionGeometry.attributes.position.needsUpdate = true;
    this.connectionGeometry.attributes.color.needsUpdate = true;
    this.connectionGeometry.attributes.strength.needsUpdate = true;
    this.connectionGeometry.attributes.age.needsUpdate = true;
  }

  /**
   * 更新着色器uniform
   */
  private updateUniforms(time: number): void {
    this.connectionMaterial.uniforms.uTime.value = time;
    this.connectionMaterial.uniforms.uMorphType.value = this.getMorphIndex(this.currentMorph);
    
    // 根据形态调整连接强度
    const intensityMap = {
      [MorphType.NEBULA]: 0.3,
      [MorphType.WEB3]: 0.8,
      [MorphType.BIOLOGY]: 0.5,
      [MorphType.COMPUTATION]: 0.6,
      [MorphType.DATA]: 1.0
    };
    this.connectionMaterial.uniforms.uConnectionIntensity.value = intensityMap[this.currentMorph] || 0.5;
    
    // 数据流速度
    const speedMap = {
      [MorphType.NEBULA]: 1.0,
      [MorphType.WEB3]: 3.0,
      [MorphType.BIOLOGY]: 1.5,
      [MorphType.COMPUTATION]: 4.0,
      [MorphType.DATA]: 2.5
    };
    this.connectionMaterial.uniforms.uDataFlowSpeed.value = speedMap[this.currentMorph] || 2.0;
  }

  /**
   * 获取形态索引
   */
  private getMorphIndex(morphType: MorphType): number {
    const morphMap = {
      [MorphType.NEBULA]: 0,
      [MorphType.WEB3]: 1,
      [MorphType.BIOLOGY]: 2,
      [MorphType.COMPUTATION]: 3,
      [MorphType.DATA]: 4
    };
    return morphMap[morphType] || 0;
  }

  /**
   * 获取连接类型
   */
  private getConnectionType(): Connection['type'] {
    const typeMap: Record<MorphType, Connection['type']> = {
      [MorphType.NEBULA]: 'energy',
      [MorphType.WEB3]: 'data',
      [MorphType.BIOLOGY]: 'energy',
      [MorphType.COMPUTATION]: 'quantum',
      [MorphType.DATA]: 'neural'
    };
    return typeMap[this.currentMorph] || 'data';
  }

  /**
   * 获取连接生命周期
   */
  private getConnectionLifetime(type: Connection['type']): number {
    const lifetimeMap = {
      'data': 1.5,
      'energy': 2.5,
      'quantum': 1.0,
      'neural': 2.0
    };
    return lifetimeMap[type] || 1.5;
  }

  /**
   * 获取每帧最大新连接数
   */
  private getMaxNewConnectionsPerFrame(): number {
    const countMap = {
      [MorphType.NEBULA]: 1,
      [MorphType.WEB3]: 2,
      [MorphType.BIOLOGY]: 1,
      [MorphType.COMPUTATION]: 1,
      [MorphType.DATA]: 3
    };
    return countMap[this.currentMorph] || 1;
  }

  /**
   * 计算连接强度
   */
  private calculateConnectionStrength(connection: Connection, time: number): number {
    const baseStrength = 0.6;
    const ageEffect = 1.0 - (connection.age / this.getConnectionLifetime(connection.type));
    
    // 根据连接类型添加动态效果
    let dynamicEffect = 1.0;
    
    switch (connection.type) {
      case 'data':
        dynamicEffect = 0.7 + Math.sin(time * 4.0 + connection.age * 10.0) * 0.3;
        break;
      case 'energy':
        dynamicEffect = 0.8 + Math.sin(time * 2.0) * 0.2;
        break;
      case 'quantum':
        dynamicEffect = Math.abs(Math.sin(time * 8.0 + connection.age * 20.0)) * 0.6 + 0.4;
        break;
      case 'neural':
        dynamicEffect = 0.6 + Math.sin(time * 6.0) * 0.4;
        break;
    }
    
    return baseStrength * ageEffect * dynamicEffect;
  }

  /**
   * 清理资源
   */
  dispose(): void {
    this.connectionGeometry.dispose();
    this.connectionMaterial.dispose();
    this.scene.remove(this.connectionLines);
  }
} 