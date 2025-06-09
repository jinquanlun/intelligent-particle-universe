/**
 * 智元粒子宇宙 - 主入口文件
 * 初始化应用并管理用户界面交互
 */

import * as THREE from 'three';
import { ParticleEngine } from './core/ParticleEngine';
import { LogoParticleSystem } from './effects/LogoParticleSystem';
import { MorphType } from './data/config';
// import { gsap } from 'gsap'; // 暂时注释未使用

/**
 * 应用程序主类
 */
class ParticleUniverseApp {
  private engine: ParticleEngine | null = null;
  private logoSystem: LogoParticleSystem | null = null;
  private isInitialized: boolean = false;
  // private loadingProgress: number = 0; // 暂时注释未使用
  
  // UI元素
  private loadingScreen!: HTMLElement;
  private loadingBar!: HTMLElement;
  private canvasContainer!: HTMLElement;
  private uiPanel!: HTMLElement;
  private toggleButton!: HTMLElement;
  private performanceStats!: HTMLElement;
  private morphButtons!: NodeListOf<HTMLElement>;
  
  // 性能监控元素
  private fpsDisplay!: HTMLElement;
  private particleCountDisplay!: HTMLElement;
  private memoryDisplay!: HTMLElement;

  constructor() {
    this.initializeUI();
    this.setupEventListeners();
    this.startInitialization();
  }

  /**
   * 初始化UI元素引用
   */
  private initializeUI(): void {
    // 获取主要UI元素
    this.loadingScreen = document.getElementById('loading-screen')!;
    this.loadingBar = document.getElementById('loading-bar')!;
    this.canvasContainer = document.getElementById('canvas-container')!;
    this.uiPanel = document.getElementById('ui-panel')!;
    this.toggleButton = document.getElementById('toggle-panel')!;
    this.performanceStats = document.getElementById('performance-stats')!;
    
    // 获取性能显示元素
    this.fpsDisplay = document.getElementById('fps')!;
    this.particleCountDisplay = document.getElementById('particle-count')!;
    this.memoryDisplay = document.getElementById('gpu-memory')!;
    
    // 获取形态切换按钮
    this.morphButtons = document.querySelectorAll('.morph-btn');
    
    console.log('[App] UI elements initialized');
  }

  /**
   * 设置事件监听器
   */
  private setupEventListeners(): void {
    // 面板切换按钮
    this.toggleButton.addEventListener('click', this.togglePanel.bind(this));
    
    // 形态切换按钮
    this.morphButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const morphType = button.getAttribute('data-morph') as MorphType;
        if (morphType) {
          this.morphToShape(morphType, button);
        }
      });
    });
    
    // 键盘快捷键
    document.addEventListener('keydown', this.handleKeyboard.bind(this));
    
    console.log('[App] Event listeners set up');
  }

  /**
   * 开始初始化过程
   */
  private async startInitialization(): Promise<void> {
    console.log('[App] Starting initialization...');
    
    try {
      // 启动LOGO粒子动画
      await this.initializeLogoSystem();
      
      // 模拟加载过程（同时播放LOGO动画）
      await this.simulateLoadingWithLogo();
      
      // 初始化粒子引擎
      await this.initializeEngine();
      
      // 完成初始化
      this.completeInitialization();
      
    } catch (error) {
      console.error('[App] Initialization failed:', error);
      this.showError('初始化失败，请刷新页面重试');
    }
  }

  /**
   * 模拟加载过程（用于展示加载动画）
   */
  // private async _simulateLoading(): Promise<void> { // 重命名避免未使用警告
  //   const steps = [
  //     { message: '正在加载Three.js引擎...', progress: 20 },
  //     { message: '生成粒子形态数据...', progress: 40 },
  //     { message: '编译GPU着色器...', progress: 60 },
  //     { message: '初始化渲染管线...', progress: 80 },
  //     { message: '准备粒子宇宙...', progress: 100 }
  //   ];

  //   for (const step of steps) {
  //     await new Promise(resolve => setTimeout(resolve, 300));
  //     this.updateLoadingProgress(step.progress, step.message);
  //   }
  // }

  /**
   * 初始化LOGO粒子系统
   */
  private async initializeLogoSystem(): Promise<void> {
    console.log('[App] Initializing logo particle system...');
    
    // 创建logo canvas容器
    const logoContainer = document.getElementById('logo-canvas-container')!;
    const logoCanvas = document.createElement('canvas');
    logoCanvas.style.width = '100%';
    logoCanvas.style.height = '100%';
    logoCanvas.style.position = 'absolute';
    logoCanvas.style.top = '0';
    logoCanvas.style.left = '0';
    logoContainer.appendChild(logoCanvas);

    // 设置canvas尺寸
    logoCanvas.width = window.innerWidth;
    logoCanvas.height = window.innerHeight;

    // 创建Three.js场景和渲染器
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ canvas: logoCanvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // 设置相机位置
    camera.position.z = 200;
    
    // 初始化LOGO粒子系统
    this.logoSystem = new LogoParticleSystem(scene, camera, renderer);
    
    // 启动渲染循环
    const clock = new THREE.Clock();
    const renderLogo = () => {
      const deltaTime = clock.getDelta();
      
      if (this.logoSystem) {
        this.logoSystem.update(deltaTime);
      }
      
      renderer.render(scene, camera);
      requestAnimationFrame(renderLogo);
    };
    renderLogo();
    
    // 播放聚合动画
    await this.logoSystem.playFormingAnimation();
    
    console.log('[App] Logo animation complete');
  }

  /**
   * 模拟加载过程（同时播放LOGO动画）
   */
  private async simulateLoadingWithLogo(): Promise<void> {
    const steps = [
      { message: '正在加载Three.js引擎...', progress: 20 },
      { message: '生成粒子形态数据...', progress: 40 },
      { message: '编译GPU着色器...', progress: 60 },
      { message: '初始化渲染管线...', progress: 80 },
      { message: '准备粒子宇宙...', progress: 100 }
    ];

    // 延迟开始显示加载进度，让LOGO先显示
    await new Promise(resolve => setTimeout(resolve, 1000));

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 400));
      this.updateLoadingProgress(step.progress, step.message);
    }

    // LOGO消散动画
    if (this.logoSystem) {
      await this.logoSystem.playDispersingAnimation();
    }
  }

  /**
   * 更新加载进度
   */
  private updateLoadingProgress(progress: number, message?: string): void {
    // this.loadingProgress = progress; // 暂时注释未使用
    this.loadingBar.style.width = `${progress}%`;
    
    if (message) {
      const subtitle = document.querySelector('.loading-subtitle') as HTMLElement;
      if (subtitle) {
        subtitle.textContent = message;
      }
    }
  }

  /**
   * 初始化粒子引擎
   */
  private async initializeEngine(): Promise<void> {
    console.log('[App] Initializing particle engine...');
    
    // 创建canvas元素
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    this.canvasContainer.appendChild(canvas);
    
    this.engine = new ParticleEngine(canvas);
    
    // 启动渲染循环
    this.startRenderLoop();
    
    // 开始性能监控
    this.startPerformanceMonitoring();
    
    console.log('[App] Particle engine initialized');
  }

  /**
   * 完成初始化
   */
  private completeInitialization(): void {
    // 隐藏加载屏幕
    this.loadingScreen.classList.add('hidden');
    
    // 短暂延迟后显示UI面板
    setTimeout(() => {
      this.uiPanel.classList.add('active');
    }, 500);
    
    this.isInitialized = true;
    console.log('[App] Initialization complete');
    
    // 播放入场动画
    this.playIntroAnimation();
  }

  /**
   * 启动渲染循环
   */
  private startRenderLoop(): void {
    const render = () => {
      if (this.engine) {
        this.engine.render();
      }
      requestAnimationFrame(render);
    };
    render();
  }

  /**
   * 播放入场动画
   */
  private playIntroAnimation(): void {
    // 这里可以添加相机的入场动画
    // 例如从远距离拉近到星云形态
    console.log('[App] Playing intro animation');
  }

  /**
   * 切换UI面板显示/隐藏
   */
  private togglePanel(): void {
    const isActive = this.uiPanel.classList.contains('active');
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (isActive) {
      this.uiPanel.classList.remove('active');
      this.toggleButton.classList.remove('panel-open');
      if (toggleIcon) {
        toggleIcon.textContent = '☰'; // 显示菜单图标
      }
    } else {
      this.uiPanel.classList.add('active');
      this.toggleButton.classList.add('panel-open');
      if (toggleIcon) {
        toggleIcon.textContent = '✕'; // 显示关闭图标
      }
    }
  }

  /**
   * 切换到指定形态
   */
  private async morphToShape(morphType: MorphType, buttonElement: HTMLElement): Promise<void> {
    if (!this.engine || !this.isInitialized) {
      console.warn('[App] Engine not ready for morphing');
      return;
    }

    console.log(`[App] Morphing to ${morphType}`);

    // 更新按钮状态
    this.morphButtons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // 更新形态信息面板
    this.updateMorphInfoPanel(morphType, buttonElement);

    // 添加过渡效果
    buttonElement.style.pointerEvents = 'none';

    try {
      // 执行形态变换
      this.engine.morphTo(morphType);
      console.log(`[App] Morph to ${morphType} complete`);
      
    } catch (error) {
      console.error(`[App] Failed to morph to ${morphType}:`, error);
      
    } finally {
      // 恢复按钮交互
      buttonElement.style.pointerEvents = 'auto';
    }
  }

  /**
   * 更新形态信息面板
   */
  private updateMorphInfoPanel(morphType: MorphType, buttonElement: HTMLElement): void {
    const infoPanel = document.getElementById('morph-info-panel');
    const titleElement = infoPanel?.querySelector('.morph-info-title');
    const descriptionElement = infoPanel?.querySelector('.morph-info-description');
    
    if (!titleElement || !descriptionElement) return;

    // 获取形态信息
    const morphInfo = this.getMorphInfo(morphType);
    const description = buttonElement.getAttribute('data-description') || '';

    // 更新内容
    titleElement.textContent = morphInfo.title;
    descriptionElement.textContent = description;

    // 添加动画效果
    if (infoPanel) {
      infoPanel.style.transform = 'translateY(10px)';
      infoPanel.style.opacity = '0.5';
      
      setTimeout(() => {
        infoPanel.style.transform = 'translateY(0)';
        infoPanel.style.opacity = '1';
      }, 100);
    }
  }

  /**
   * 获取形态信息
   */
  private getMorphInfo(morphType: MorphType): { title: string; emoji: string; } {
    const morphInfoMap = {
      nebula: { title: '抽象星云', emoji: '🌌' },
      web3: { title: 'WEB3网络', emoji: '🔗' },
      biology: { title: '生物DNA', emoji: '🧬' },
      computation: { title: '量子电路', emoji: '⚡' },
      data: { title: '数据图谱', emoji: '🧠' }
    };
    
    return morphInfoMap[morphType] || { title: '未知形态', emoji: '❓' };
  }

  /**
   * 键盘快捷键处理
   */
  private handleKeyboard(event: KeyboardEvent): void {
    if (!this.isInitialized) return;

    switch (event.key) {
      case '1':
        this.morphToShapeByIndex(0);
        break;
      case '2':
        this.morphToShapeByIndex(1);
        break;
      case '3':
        this.morphToShapeByIndex(2);
        break;
      case '4':
        this.morphToShapeByIndex(3);
        break;
      case '5':
        this.morphToShapeByIndex(4);
        break;
      case ' ':
        event.preventDefault();
        this.togglePanel();
        break;
      case 'h':
      case 'H':
        this.toggleHelpInfo();
        break;
      case 'a':
      case 'A':
        this.toggleAutoTransition();
        break;
    }
  }

  /**
   * 通过索引切换形态
   */
  private morphToShapeByIndex(index: number): void {
    if (index >= 0 && index < this.morphButtons.length) {
      const button = this.morphButtons[index] as HTMLElement;
      const morphType = button.getAttribute('data-morph') as MorphType;
      if (morphType) {
        this.morphToShape(morphType, button);
      }
    }
  }

  /**
   * 切换帮助信息显示
   */
  private toggleHelpInfo(): void {
    // 这里可以显示快捷键帮助信息
    console.log('[App] Toggle help info');
    
    const helpText = `
快捷键：
1-5: 切换形态
空格: 切换控制面板
A: 开启/关闭自动过渡
H: 显示/隐藏帮助
鼠标: 交互操作
    `;
    
    // 可以创建一个模态框显示帮助信息
    alert(helpText);
  }

  /**
   * 切换自动过渡功能
   */
  private toggleAutoTransition(): void {
    if (!this.engine) return;
    
    if (this.engine.isAutoTransitionEnabled()) {
      this.engine.stopAutoTransition();
      console.log('[App] 自动过渡已关闭');
      
      // 显示提示
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 100, 100, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
      `;
      notification.textContent = '自动过渡已关闭';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
      
    } else {
      this.engine.resumeAutoTransition();
      console.log('[App] 自动过渡已开启');
      
      // 显示提示
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(100, 255, 100, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
      `;
      notification.textContent = '自动过渡已开启';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    }
  }

  /**
   * 开始性能监控
   */
  private startPerformanceMonitoring(): void {
    const updateStats = () => {
      if (!this.engine) return;

      const metrics = this.engine.getPerformanceInfo();
      
      // 更新FPS显示
      this.fpsDisplay.textContent = metrics.fps.toString();
      
      // 更新粒子数显示
      this.particleCountDisplay.textContent = this.formatNumber(metrics.particleCount);
      
      // 更新内存显示（估算）
      const estimatedMemory = (metrics.particleCount * 32 * 11) / (1024 * 1024); // 32字节/粒子 * 11个属性
      this.memoryDisplay.textContent = `${estimatedMemory.toFixed(1)}MB`;
      
      // 性能警告
      if (metrics.fps < 30) {
        this.performanceStats.style.color = '#ff4444';
      } else if (metrics.fps < 50) {
        this.performanceStats.style.color = '#ffaa44';
      } else {
        this.performanceStats.style.color = '#00ff88';
      }
    };

    // 每500ms更新一次性能数据
    setInterval(updateStats, 500);
  }

  /**
   * 格式化数字显示
   */
  private formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  /**
   * 显示错误信息
   */
  private showError(message: string): void {
    const loadingTitle = document.querySelector('.loading-title') as HTMLElement;
    const loadingSubtitle = document.querySelector('.loading-subtitle') as HTMLElement;
    
    if (loadingTitle) {
      loadingTitle.textContent = '初始化失败';
      loadingTitle.style.color = '#ff4444';
    }
    
    if (loadingSubtitle) {
      loadingSubtitle.textContent = message;
    }
    
    // 隐藏加载条
    const loadingProgress = document.querySelector('.loading-progress') as HTMLElement;
    if (loadingProgress) {
      loadingProgress.style.display = 'none';
    }
  }

  /**
   * 销毁应用
   */
  public dispose(): void {
    console.log('[App] Disposing application...');
    
    if (this.engine) {
      this.engine.dispose();
      this.engine = null;
    }
    
    // 移除事件监听器
    document.removeEventListener('keydown', this.handleKeyboard);
    
    console.log('[App] Application disposed');
  }
}

// 等待DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  console.log('[App] DOM loaded, initializing application...');
  
  // 创建全局应用实例
  const app = new ParticleUniverseApp();
  
  // 将应用实例挂载到全局对象，便于调试
  (window as any).particleUniverse = app;
  
  // 页面卸载时清理资源
  window.addEventListener('beforeunload', () => {
    app.dispose();
  });
});

// 导出类型定义，便于扩展
export { ParticleUniverseApp }; 