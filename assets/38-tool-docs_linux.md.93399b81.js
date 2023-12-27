import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.03c6a765.js";const b=JSON.parse('{"title":"linux centos","description":"","frontmatter":{},"headers":[],"relativePath":"38-tool-docs/linux.md","filePath":"38-tool-docs/linux.md","lastUpdated":1703663478000}'),p={name:"38-tool-docs/linux.md"},o=l(`<h1 id="linux-centos" tabindex="-1">linux centos <a class="header-anchor" href="#linux-centos" aria-label="Permalink to &quot;linux centos&quot;">​</a></h1><h2 id="静态博客搭建一条龙服务" tabindex="-1">静态博客搭建一条龙服务 <a class="header-anchor" href="#静态博客搭建一条龙服务" aria-label="Permalink to &quot;静态博客搭建一条龙服务&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 清理 SSH 链接记录，避免密钥变更导致的问题</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">120.48</span><span style="color:#9ECBFF;">.97.59</span></span>
<span class="line"><span style="color:#6A737D;"># 安装系统软件</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">udpate</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodejs</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsync</span></span>
<span class="line"><span style="color:#6A737D;"># 安装 node 插件</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nrm</span></span>
<span class="line"><span style="color:#6A737D;"># 升级 nodejs</span></span>
<span class="line"><span style="color:#B392F0;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lts</span></span>
<span class="line"><span style="color:#6A737D;"># 切换 npm 包安装来源</span></span>
<span class="line"><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">taobao</span></span>
<span class="line"><span style="color:#6A737D;"># 启动 nginx 服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#6A737D;"># 进入工作目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home</span></span>
<span class="line"><span style="color:#6A737D;"># 创建 GIT 仓库密钥</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span></span>
<span class="line"><span style="color:#6A737D;"># 复制密钥并设置 Github 密钥</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/.ssh/id_rsa.pub</span></span>
<span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-T</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com</span></span>
<span class="line"><span style="color:#6A737D;"># 克隆仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com:peichenhu/blog.git</span></span>
<span class="line"><span style="color:#6A737D;"># 修改nginx 默认配置</span></span>
<span class="line"><span style="color:#6A737D;"># location /blog {</span></span>
<span class="line"><span style="color:#6A737D;">#     alias /home/blog/docs;</span></span>
<span class="line"><span style="color:#6A737D;">#     # try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#6A737D;">#     index index.html;</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 清理 SSH 链接记录，避免密钥变更导致的问题</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">120.48</span><span style="color:#032F62;">.97.59</span></span>
<span class="line"><span style="color:#6A737D;"># 安装系统软件</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">udpate</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodejs</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsync</span></span>
<span class="line"><span style="color:#6A737D;"># 安装 node 插件</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span></span>
<span class="line"><span style="color:#6A737D;"># 升级 nodejs</span></span>
<span class="line"><span style="color:#6F42C1;">n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lts</span></span>
<span class="line"><span style="color:#6A737D;"># 切换 npm 包安装来源</span></span>
<span class="line"><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">taobao</span></span>
<span class="line"><span style="color:#6A737D;"># 启动 nginx 服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#6A737D;"># 进入工作目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home</span></span>
<span class="line"><span style="color:#6A737D;"># 创建 GIT 仓库密钥</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span></span>
<span class="line"><span style="color:#6A737D;"># 复制密钥并设置 Github 密钥</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/.ssh/id_rsa.pub</span></span>
<span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-T</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com</span></span>
<span class="line"><span style="color:#6A737D;"># 克隆仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:peichenhu/blog.git</span></span>
<span class="line"><span style="color:#6A737D;"># 修改nginx 默认配置</span></span>
<span class="line"><span style="color:#6A737D;"># location /blog {</span></span>
<span class="line"><span style="color:#6A737D;">#     alias /home/blog/docs;</span></span>
<span class="line"><span style="color:#6A737D;">#     # try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#6A737D;">#     index index.html;</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 进入Nginx默认配置文件目录。该目录为手动编译安装Nginx时的默认目录，</span></span>
<span class="line"><span style="color:#6A737D;"># 如果您修改过默认安装目录或使用其他方式安装，请根据实际配置调整。</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx/conf</span></span>
<span class="line"><span style="color:#6A737D;">#创建证书目录，命名为cert。</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cert</span></span>
<span class="line"><span style="color:#6A737D;"># 使用 scp 上传文件（过程需要输入密码）</span></span>
<span class="line"><span style="color:#B392F0;">scp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/Users/pch/Documents/ssl/peichenhu.cn.key</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">root@120.48.97.59:/etc/nginx</span></span>
<span class="line"><span style="color:#B392F0;">scp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/Users/pch/Documents/ssl/peichenhu.cn.pem</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">root@120.48.97.59:/etc/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载远程 nginx 配置文件并修改</span></span>
<span class="line"><span style="color:#B392F0;">scp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root@120.48.97.59:/etc/nginx/nginx.conf</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">/Users/pch/Documents/ssl/</span></span>
<span class="line"><span style="color:#6A737D;"># 上传修改的nginx 配置文件文件到远程</span></span>
<span class="line"><span style="color:#B392F0;">scp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/Users/pch/Documents/ssl/nginx.conf</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">root@120.48.97.59:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#6A737D;"># 重载</span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 进入Nginx默认配置文件目录。该目录为手动编译安装Nginx时的默认目录，</span></span>
<span class="line"><span style="color:#6A737D;"># 如果您修改过默认安装目录或使用其他方式安装，请根据实际配置调整。</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx/conf</span></span>
<span class="line"><span style="color:#6A737D;">#创建证书目录，命名为cert。</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cert</span></span>
<span class="line"><span style="color:#6A737D;"># 使用 scp 上传文件（过程需要输入密码）</span></span>
<span class="line"><span style="color:#6F42C1;">scp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/Users/pch/Documents/ssl/peichenhu.cn.key</span><span style="color:#24292E;">  </span><span style="color:#032F62;">root@120.48.97.59:/etc/nginx</span></span>
<span class="line"><span style="color:#6F42C1;">scp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/Users/pch/Documents/ssl/peichenhu.cn.pem</span><span style="color:#24292E;">  </span><span style="color:#032F62;">root@120.48.97.59:/etc/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载远程 nginx 配置文件并修改</span></span>
<span class="line"><span style="color:#6F42C1;">scp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root@120.48.97.59:/etc/nginx/nginx.conf</span><span style="color:#24292E;">   </span><span style="color:#032F62;">/Users/pch/Documents/ssl/</span></span>
<span class="line"><span style="color:#6A737D;"># 上传修改的nginx 配置文件文件到远程</span></span>
<span class="line"><span style="color:#6F42C1;">scp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/Users/pch/Documents/ssl/nginx.conf</span><span style="color:#24292E;">    </span><span style="color:#032F62;">root@120.48.97.59:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#6A737D;"># 重载</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="报错" tabindex="-1">报错 <a class="header-anchor" href="#报错" aria-label="Permalink to &quot;报错&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Failed to set locale, defaulting to C.UTF-8</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export LC_ALL=en_US.UTF-8&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">~/.bashrc</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.bashrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Error: Failed to download metadata for repo &#39;appstream&#39;: Cannot prepare internal mirrorlist: No URLs in mirrorlist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入yum.repos.d 目录下</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/</span></span>
<span class="line"><span style="color:#6A737D;"># 修改源链接</span></span>
<span class="line"><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;s/mirrorlist/#mirrorlist/g&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/CentOS-</span><span style="color:#79B8FF;">*</span></span>
<span class="line"><span style="color:#6A737D;"># 要将之前的mirror.centos.org 改成 vault.centos.org</span></span>
<span class="line"><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/CentOS-</span><span style="color:#79B8FF;">*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Failed to set locale, defaulting to C.UTF-8</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export LC_ALL=en_US.UTF-8&quot;</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;">  </span><span style="color:#032F62;">~/.bashrc</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.bashrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Error: Failed to download metadata for repo &#39;appstream&#39;: Cannot prepare internal mirrorlist: No URLs in mirrorlist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入yum.repos.d 目录下</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/</span></span>
<span class="line"><span style="color:#6A737D;"># 修改源链接</span></span>
<span class="line"><span style="color:#6F42C1;">sed</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;s/mirrorlist/#mirrorlist/g&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/CentOS-</span><span style="color:#005CC5;">*</span></span>
<span class="line"><span style="color:#6A737D;"># 要将之前的mirror.centos.org 改成 vault.centos.org</span></span>
<span class="line"><span style="color:#6F42C1;">sed</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/CentOS-</span><span style="color:#005CC5;">*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7294079777711226919?searchId=2023111422280133FD871572983D2055FD" target="_blank" rel="noreferrer">解决 Failed to download metadata for repo ‘AppStream’</a></li><li><a href="https://help.aliyun.com/zh/ecs/use-cases/run-scp-commands-to-transfer-files-to-or-from-a-linux-instance?spm=a2c4g.11186623.0.i0" target="_blank" rel="noreferrer">使用 SCP 命令上传文件到 Linux 云服务器</a></li><li><a href="https://help.aliyun.com/zh/ssl-certificate/user-guide/install-ssl-certificates-on-nginx-servers-or-tengine-servers" target="_blank" rel="noreferrer">在 Nginx 服务器安装证书</a></li></ul>`,9),e=[o];function c(r,t,y,i,E,F){return a(),n("div",null,e)}const m=s(p,[["render",c]]);export{b as __pageData,m as default};
