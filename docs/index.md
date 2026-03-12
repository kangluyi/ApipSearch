---
layout: page
---

<style>
  /* 开源 REMIX ICON (MIT 协议)，使用国内 CDN 加速 */
  @import url('https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .red-ambient {
    background: radial-gradient(circle at 20% 30%, rgba(220, 40, 40, 0.28) 0%, transparent 45%),
                radial-gradient(circle at 90% 70%, rgba(200, 30, 30, 0.2) 0%, transparent 50%),
                #100808;
  }

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 2rem 3rem;
  }

  /* HERO 超大视觉——插件核心 */
  .hero {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0 4rem 0;
    gap: 2rem;
  }
  .hero-left {
    flex: 1 1 45%;
  }
  .hero-right {
    flex: 1 1 45%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .plugin-badge {
    display: inline-block;
    background: rgba(150, 20, 20, 0.3);
    backdrop-filter: blur(4px);
    border-radius: 60px;
    padding: 0.4rem 1.5rem;
    font-size: 1rem;
    border: 1px solid #bc4242;
    color: #ffaeae;
    margin-bottom: 1.5rem;
  }

  .big-number {
    font-size: 7rem;
    font-weight: 900;
    line-height: 0.85;
    background: linear-gradient(180deg, #ff5a5a, #a61919);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    filter: drop-shadow(0 8px 16px rgba(170, 20, 20, 0.5));
  }
  .big-sub {
    font-size: 3.2rem;
    font-weight: 800;
    color: white;
    line-height: 1.1;
  }
  .big-sub small {
    font-size: 1.2rem;
    font-weight: 300;
    color: #c99b9b;
    margin-left: 1rem;
  }

  /* 英文小字点缀 */
  .english-tiny {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: #b75959;
    margin: 1.8rem 0 1.2rem;
    font-weight: 300;
  }
  .english-tiny strong {
    font-weight: 600;
    color: #ffa0a0;
  }

  /* 勾线风格图形 —— 对接平台示意 */
  .platform-connect {
    width: 100%;
    max-width: 500px;
  }
  .line-svg path, .line-svg circle, .line-svg line {
    stroke: #ff6b6b;
    stroke-width: 2;
    fill: none;
  }
  .line-svg .fill-soft {
    fill: rgba(200, 70, 70, 0.12);
    stroke: none;
  }

  /* 卡片区域——插件特性、数据 */
  .section-title {
    font-size: 2.6rem;
    font-weight: 800;
    margin: 3.5rem 0 2rem 0;
    display: inline-block;
    border-bottom: 3px solid #b33a3a;
    padding-bottom: 0.3rem;
  }
  .section-title .en-dot {
    font-size: 1rem;
    font-weight: 300;
    color: #b57474;
    margin-left: 1rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .card {
    background: rgba(25, 10, 10, 0.7);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(200, 55, 55, 0.4);
    border-radius: 36px;
    padding: 2.2rem 1.8rem;
    transition: 0.2s ease-in-out;
    box-shadow: 0 20px 25px -15px rgba(130, 0, 0, 0.5);
  }
  .card:hover {
    border-color: #ff6b6b;
    transform: translateY(-6px);
  }

  .card-icon {
    font-size: 3.2rem;
    color: #ff6b6b;
    margin-bottom: 1.5rem;
  }
  .card h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .card-highlight {
    font-size: 2.6rem;
    font-weight: 800;
    background: linear-gradient(145deg, #ff8888, #ff3737);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
    margin: 0.5rem 0 0.5rem;
  }
  .card-desc {
    color: #bda5a5;
    border-top: 1px dashed #9f4040;
    padding-top: 1rem;
    margin-top: 0.8rem;
  }
  .card-desc i {
    color: #ff7a7a;
    margin-right: 0.4rem;
  }

  /* 对接平台专区 (高德等) */
  .integration-show {
    background: rgba(150, 30, 30, 0.2);
    border-radius: 80px 20px 80px 20px;
    padding: 2.5rem 2rem;
    margin: 4rem 0;
    border: 1px solid #c75757;
  }
  .integration-show h4 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .platform-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 3rem;
    align-items: center;
  }
  .platform-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: rgba(0,0,0,0.4);
    padding: 0.6rem 1.8rem;
    border-radius: 60px;
    border: 1px solid #b33d3d;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .platform-item i {
    font-size: 2rem;
    color: #ff8888;
  }

  /* 超大字体要点 (突出插件优势) */
  .big-feature-row {
    display: flex;
    gap: 2rem;
    margin: 4rem 0;
    flex-wrap: wrap;
  }
  .big-feature-col {
    flex: 1 1 250px;
  }
  .big-feature-num {
    font-size: 6rem;
    font-weight: 900;
    line-height: 0.8;
    background: linear-gradient(145deg, #ff5c5c, #b12222);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .big-feature-label {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0.5rem 0 0.2rem;
  }
  .big-feature-text {
    color: #bb9b9b;
    font-size: 1rem;
  }

  /* 简洁勾线可视化 (插件调用量示意) */
  .line-graph {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    padding: 1.8rem 1.2rem;
    background: rgba(140, 20, 20, 0.08);
    border-radius: 50px;
    margin: 2rem 0;
    border: 1px solid #962f2f;
  }
  .graph-bar {
    flex: 1;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .bar-line {
    width: 3px;
    background: rgba(255, 90, 90, 0.3);
    height: 100%;
    position: relative;
  }
  .bar-line::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -6px;
    width: 15px;
    height: calc(100% * var(--r));
    background: #ff5e5e;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 18px #ff3737;
  }
  .bar-label {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #c79191;
  }

  @media (max-width: 800px) {
    .container { padding: 1rem 1.5rem; }
    .big-number { font-size: 5rem; }
    .big-sub { font-size: 2.4rem; }
  }
</style>

<div class="red-ambient">
  <div class="container">
    <!-- HERO 强调“插件”属性，超大视觉 -->
    <div class="hero">
      <div class="hero-left">
        <span class="plugin-badge"><i class="ri-puzzle-line"></i> 迅睿CMS · 一键安装</span>
        <div class="big-number">IP 插件</div>
        <div class="big-sub">即插即用 <small>Apip Seaech</small></div>
        <!-- 英文点缀 -->
        <div class="english-tiny"><strong>PLUGIN</strong>  FOR  XUNRUI  &  MORE</div>
        <div style="display: flex; gap: 2rem; margin-top: 1.8rem;">
          <div><i class="ri-checkbox-circle-line" style="color: #ff6b6b;"></i> 高德地图</div>
          <div><i class="ri-checkbox-circle-line" style="color: #ff6b6b;"></i> 腾讯位置</div>
          <div><i class="ri-checkbox-circle-line" style="color: #ff6b6b;"></i> 百度地图</div>
          <div><i class="ri-checkbox-circle-line" style="color: #ff6b6b;"></i> 更多</div>
        </div>
      </div>
      <div class="hero-right">
        <!-- 勾线风格图形展示“对接”概念 -->
        <svg class="platform-connect line-svg" viewBox="0 0 420 240">
          <rect x="30" y="100" width="60" height="60" rx="16" class="fill-soft" stroke="white" stroke-width="1.8" stroke-dasharray="4 4"/>
          <rect x="150" y="70" width="60" height="60" rx="16" class="fill-soft" stroke="white" stroke-width="1.8"/>
          <rect x="270" y="120" width="60" height="60" rx="16" class="fill-soft" stroke="white" stroke-width="1.8"/>
          <line x1="90" y1="130" x2="150" y2="100" stroke="#ff8888" stroke-width="2.5" marker-end="url(#arrow)"/>
          <line x1="210" y1="100" x2="270" y2="150" stroke="#ff8888" stroke-width="2.5"/>
          <circle cx="60" cy="70" r="14" stroke="#ffa0a0" fill="rgba(200,40,40,0.2)" stroke-width="2"/>
          <circle cx="330" cy="60" r="14" stroke="#ffa0a0" fill="rgba(200,40,40,0.2)" stroke-width="2"/>
          <text x="40" y="190" fill="#c97979" font-size="12">高德</text>
          <text x="165" y="155" fill="#c97979" font-size="12">腾讯</text>
          <text x="285" y="200" fill="#c97979" font-size="12">百度</text>
          <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#ff8888"/></marker></defs>
        </svg>
      </div>
    </div>

    <!-- 核心卡片 - 插件功能数据 (无表格) 完整要点 -->
    <div>
      <div class="section-title">
        插件核心能力 <span class="en-dot">/ 迅睿CMS 专用</span>
      </div>
      <div class="card-grid">
        <div class="card">
          <i class="ri-map-pin-user-line card-icon"></i>
          <h3>IP 定位</h3>
          <div class="card-highlight">高德/腾讯/百度</div>
          <div class="card-desc"><i class="ri-stackshare-line"></i> 自由切换引擎，返回省市区 + 经纬度</div>
        </div>
        <div class="card">
          <i class="ri-cloud-off-line card-icon"></i>
          <h3>离线库</h3>
          <div class="card-highlight">内置 IP 库</div>
          <div class="card-desc"><i class="ri-database-2-line"></i> 纯真/ip2region 可选，无网络可用</div>
        </div>
        <div class="card">
          <i class="ri-flashlight-fill card-icon"></i>
          <h3>缓存加速</h3>
          <div class="card-highlight">Redis/文件</div>
          <div class="card-desc"><i class="ri-timer-line"></i> 毫秒级响应，降低平台配额消耗</div>
        </div>
        <div class="card">
          <i class="ri-shield-keyhole-line card-icon"></i>
          <h3>风险识别</h3>
          <div class="card-highlight">代理/VPN</div>
          <div class="card-desc"><i class="ri-alert-line"></i> 结合主流平台威胁标签</div>
        </div>
      </div>

      <!-- 第二组卡片：更多插件特性 完整无省略 -->
      <div class="card-grid" style="margin-top: 0.5rem;">
        <div class="card">
          <i class="ri-customize-line card-icon"></i>
          <h3>自定义字段</h3>
          <div class="card-highlight">支持迅睿表单</div>
          <div class="card-desc"><i class="ri-input-field"></i> 一键绑定 IP 定位字段，内容自动填充</div>
        </div>
        <div class="card">
          <i class="ri-exchange-funds-line card-icon"></i>
          <h3>坐标转换</h3>
          <div class="card-highlight">GCJ02 / BD09 / WGS84</div>
          <div class="card-desc"><i class="ri-merge-cells-vertical"></i> 多坐标系无缝切换</div>
        </div>
        <div class="card">
          <i class="ri-bar-chart-2-line card-icon"></i>
          <h3>访问统计</h3>
          <div class="card-highlight">地域分布</div>
          <div class="card-desc"><i class="ri-pie-chart-line"></i> 后台可视化报表，热门城市排行</div>
        </div>
        <div class="card">
          <i class="ri-git-repository-private-line card-icon"></i>
          <h3>权限管理</h3>
          <div class="card-highlight">角色控制</div>
          <div class="card-desc"><i class="ri-group-line"></i> 可按用户组开启/关闭插件功能</div>
        </div>
      </div>

      <!-- 对接主流平台专区 (高德等) 符合插件描述 -->
      <div class="integration-show">
        <h4><i class="ri-plug-line" style="color:#ff8a8a"></i> 已集成平台 (用户自行配置)</h4>
        <div class="platform-icons">
          <span class="platform-item"><i class="ri-map-pin-line"></i> 高德地图</span>
          <span class="platform-item"><i class="ri-map-pin-line"></i> 腾讯位置服务</span>
          <span class="platform-item"><i class="ri-map-pin-line"></i> 百度地图</span>
          <span class="platform-item"><i class="ri-earth-line"></i> 天地图</span>
          <span class="platform-item"><i class="ri-global-line"></i> IPAPI (纯离线)</span>
          <span class="platform-item"><i class="ri-cloud-line"></i> 阿里云</span>
        </div>
        <p style="margin-top: 2rem; color: #cda5a5; font-size: 0.95rem;"><i class="ri-information-line" style="color: #ff7a7a;"></i> 用户下载安装后，在后台填写对应平台的 API Key 即可使用，支持高德/腾讯/百度等主流地图定位。</p>
      </div>

      <!-- 超大字体突出核心优势 (数据) -->
      <div class="big-feature-row">
        <div class="big-feature-col">
          <div class="big-feature-num">200+</div>
          <div class="big-feature-label">国家/地区</div>
          <div class="big-feature-text">离线库全覆盖，在线接口精准至街道</div>
        </div>
        <div class="big-feature-col">
          <div class="big-feature-num">99.5%</div>
          <div class="big-feature-label">坐标准确性</div>
          <div class="big-feature-text">结合高德/百度纠偏，优化展示</div>
        </div>
        <div class="big-feature-col">
          <div class="big-feature-num">0.03s</div>
          <div class="big-feature-label">平均响应</div>
          <div class="big-feature-text">Redis 缓存命中率 &gt;85%</div>
        </div>
      </div>

      <!-- 简洁勾线图形：插件调用量趋势 -->
      <div style="margin: 3rem 0">
        <div style="display: flex; align-items: baseline;">
          <span class="section-title" style="margin-bottom: 0;">近7日调用趋势</span>
          <span class="en-dot" style="margin-left: 2rem;">/ 插件每日请求量</span>
        </div>
        <div class="line-graph">
          <div class="graph-bar"><div class="bar-line" style="--r:0.65"></div><span class="bar-label">周一</span></div>
          <div class="graph-bar"><div class="bar-line" style="--r:0.8"></div><span class="bar-label">周二</span></div>
          <div class="graph-bar"><div class="bar-line" style="--r:0.95"></div><span class="bar-label">周三</span></div>
          <div class="graph-bar"><div class="bar-line" style="--r:1.2"></div><span class="bar-label">周四</span></div>
          <div class="graph-bar"><div class="bar-line" style="--r:1.1"></div><span class="bar-label">周五</span></div>
          <div class="graph-bar"><div class="bar-line" style="--r:0.7"></div><span class="bar-label">周六</span></div>
          <div class="graph-bar"><div class="bar-line" style="--r:0.5"></div><span class="bar-label">周日</span></div>
        </div>
        <p style="color:#b28080;"><i class="ri-bar-chart-grouped-line" style="color:#ff6b6b;"></i> 单位：万次，支持高德/腾讯/百度混合请求</p>
      </div>

      <!-- 发布/下载区域 包含插件完整信息 -->
      <div style="background: linear-gradient(145deg, #221010, #1a0b0b); border-radius: 60px; padding: 3rem; margin: 4rem 0; border: 1px solid #c04545;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;">
          <div style="font-size: 2.5rem; font-weight: 800; display: flex; gap: 0.8rem;">
            <i class="ri-download-cloud-2-line" style="color:#ff7a7a"></i>
            <span>Apip Seaech 插件 v1.5</span>
          </div>
          <div style="display: flex; gap: 1.5rem;">
            <span style="background: #b32b2b; padding: 0.6rem 1.8rem; border-radius: 40px;"><i class="ri-file-copy-line"></i> 迅睿CMS 专用</span>
            <span style="background: #851f1f; padding: 0.6rem 1.8rem; border-radius: 40px;">大小 2.3MB</span>
          </div>
        </div>
        <div style="margin: 2rem 0; display: flex; gap: 2rem; flex-wrap: wrap;">
          <div><i class="ri-checkbox-circle-fill" style="color:#ff6b6b;"></i> 支持高德/腾讯/百度/离线</div>
          <div><i class="ri-checkbox-circle-fill" style="color:#ff6b6b;"></i> IP 转坐标/地址</div>
          <div><i class="ri-checkbox-circle-fill" style="color:#ff6b6b;"></i> 会话地域记录</div>
          <div><i class="ri-checkbox-circle-fill" style="color:#ff6b6b;"></i> 后台一键配置</div>
          <div><i class="ri-checkbox-circle-fill" style="color:#ff6b6b;"></i> 100% 开源 (MIT)</div>
        </div>
        <div style="display: flex; gap: 2rem; align-items: center;">
          <a href="#" style="background: #c03939; padding: 1rem 3rem; border-radius: 60px; text-decoration: none; color:white; font-weight: 600; font-size: 1.3rem;"><i class="ri-download-line"></i> 免费下载</a>
          <span style="color:#b28b8b;"><i class="ri-eye-line"></i> 4.2w+ 站点使用</span>
        </div>
      </div>

      <!-- 英文小点缀贯穿始终 -->
      <div style="text-align: right; margin: 2rem 0; font-size: 0.9rem; letter-spacing: 5px; color: #a75858;">IP GEO PLUGIN · FOR XUNRUI · POWERED BY APIP</div>
    </div>
  </div>
</div>