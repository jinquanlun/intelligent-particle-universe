# 🌌 智能粒子宇宙 (Intelligent Particle Universe)

一个基于Three.js的高性能3D粒子动画系统，具备五种科学主题的形态变换和丝滑过渡效果。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?logo=three.js&logoColor=white)

## ✨ 特性

### 🎨 五种科学形态
- **🌌 星云 (NEBULA)**: 深度涡旋湍流，多层螺旋效果
- **🔗 WEB3网络**: 高级数据流动，节点同步闪烁
- **🧬 DNA生物**: 螺旋解旋动画，碱基对呼吸效应
- **⚛️ 量子计算**: 量子叠加态，纠缠波动效果
- **🧠 神经网络**: 脉冲传播，突触跳跃动画

### 🚀 高级过渡系统
- **贝塞尔曲线路径**: 粒子沿优雅曲线移动
- **物理弹簧系统**: 真实的惯性和阻尼效果
- **传播延迟机制**: 波浪式群体运动
- **四阶段过渡**: 散发→移动→聚合→稳定

### 🎯 视觉增强
- **动态连接系统**: 200个实时粒子连接
- **深度视觉效果**: 距离感和层次感
- **形态预告系统**: 过渡前的微弱预示
- **能量流动可视化**: 过渡期间的轨迹辉光

### ⚡ 性能优化
- **自适应性能**: 根据FPS自动调整粒子数量
- **四级性能模式**: low/medium/high/ultra
- **智能内存管理**: 动态资源分配
- **60FPS稳定运行**: 8000粒子+8000星星

## 🛠️ 技术栈

- **TypeScript**: 类型安全的开发体验
- **Three.js**: 3D图形渲染引擎
- **GSAP**: 高性能动画库
- **Vite**: 现代化构建工具
- **WebGL Shaders**: 自定义着色器效果

## 🚀 快速开始

### 环境要求
- Node.js 16+ 
- npm 或 yarn
- 现代浏览器（支持WebGL 2.0）

### 安装和运行

```bash
# 克隆项目
git clone https://github.com/YOUR_USERNAME/intelligent-particle-universe.git
cd intelligent-particle-universe

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🎮 使用方法

### 键盘控制
- **数字键 1-5**: 手动切换形态
  - `1` - 星云形态
  - `2` - WEB3网络
  - `3` - DNA生物
  - `4` - 量子计算
  - `5` - 神经网络

### 鼠标交互
- **鼠标移动**: 粒子会被鼠标吸引或排斥
- **自动过渡**: 每12秒自动切换到下一个形态

## 📁 项目结构

```
src/
├── core/                   # 核心引擎
│   ├── ParticleEngine.ts   # 主粒子引擎
│   ├── TransitionController.ts # 过渡控制器
│   └── ConnectionSystem.ts # 连接系统
├── data/                   # 数据和配置
│   ├── config.ts          # 全局配置
│   └── morphTargets.ts    # 形态目标数据
├── effects/               # 特效系统
├── shaders/              # 着色器文件
└── main.ts               # 应用入口
```

## 🎨 核心算法

### 贝塞尔曲线过渡
```typescript
// 三次贝塞尔插值实现丝滑路径
const bezierPath = from.clone()
  .multiplyScalar(oneMinusTSquared * oneMinusT)
  .add(control1.clone().multiplyScalar(3 * oneMinusTSquared * t))
  .add(control2.clone().multiplyScalar(3 * oneMinusT * tSquared))
  .add(to.clone().multiplyScalar(tSquared * t));
```

### 物理弹簧系统
```typescript
// 基于物理的弹簧阻尼效果
const springForce = displacement.multiplyScalar(springStiffness);
const dampingFactor = Math.pow(springDamping, progress);
return springForce.multiplyScalar(Math.sin(progress * Math.PI) * dampingFactor);
```

## 🎯 性能特性

- **粒子数量**: 8000个主粒子 + 8000个星空粒子
- **连接系统**: 最多200个动态连接
- **渲染性能**: 稳定60FPS
- **内存占用**: < 100MB
- **启动时间**: < 2秒

## 🌟 高级特性

### 科学精确性
- 星云形态基于真实天体物理学
- DNA螺旋遵循生物学结构
- 量子效果模拟真实量子力学
- 神经网络反映真实神经科学

### 视觉算法
- HDR色彩空间支持
- 距离雾化效果
- 粒子大小动态缩放
- 多层次光晕系统

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 这个项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Three.js](https://threejs.org/) - 强大的3D图形库
- [GSAP](https://greensock.com/gsap/) - 专业动画库
- [Vite](https://vitejs.dev/) - 极速构建工具

## 📞 联系方式

- 项目链接: [https://github.com/YOUR_USERNAME/intelligent-particle-universe](https://github.com/YOUR_USERNAME/intelligent-particle-universe)
- 演示地址: [https://your-demo-url.com](https://your-demo-url.com)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！ 