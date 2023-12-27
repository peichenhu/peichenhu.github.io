import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.03c6a765.js";const u=JSON.parse('{"title":"ssh-keygen","description":"","frontmatter":{},"headers":[],"relativePath":"38-tool-docs/ssh-keygen.md","filePath":"38-tool-docs/ssh-keygen.md","lastUpdated":1703663478000}'),p={name:"38-tool-docs/ssh-keygen.md"},e=l(`<h1 id="ssh-keygen" tabindex="-1">ssh-keygen <a class="header-anchor" href="#ssh-keygen" aria-label="Permalink to &quot;ssh-keygen&quot;">​</a></h1><ul><li><code>id_rsa</code> 私有密钥</li><li><code>id_rsa.pub</code> 公共密钥</li><li><code>known_hosts</code> 存储用户之前连接过的远程主机的公钥信息，如果公钥不匹配或者在 known_hosts 文件中没有与远程主机相关的条目，SSH 会显示警告或错误信息，以提醒你可能存在安全问题。</li><li><code>config</code> 是 SSH（Secure Shell）客户端的配置文件，它允许你定义和自定义 SSH 连接的各种参数和选项。通过修改 ssh config 文件，你可以配置 SSH 客户端的行为，以适应你的需求和偏好。</li></ul><h2 id="检查-ssh" tabindex="-1">检查 SSH <a class="header-anchor" href="#检查-ssh" aria-label="Permalink to &quot;检查 SSH&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 进入 SSH 目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh</span></span>
<span class="line"><span style="color:#6A737D;"># 如果路径不存在的话，键入下述命令创建ssh文件夹</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh</span></span>
<span class="line"><span style="color:#6A737D;"># 查看文件列表</span></span>
<span class="line"><span style="color:#B392F0;">ls</span></span>
<span class="line"><span style="color:#6A737D;"># 查看文件列表(包含 .* 文件)</span></span>
<span class="line"><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"><span style="color:#6A737D;"># 查看</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/id_rsa.pub</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/id_rsa</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 进入 SSH 目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh</span></span>
<span class="line"><span style="color:#6A737D;"># 如果路径不存在的话，键入下述命令创建ssh文件夹</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh</span></span>
<span class="line"><span style="color:#6A737D;"># 查看文件列表</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span></span>
<span class="line"><span style="color:#6A737D;"># 查看文件列表(包含 .* 文件)</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"><span style="color:#6A737D;"># 查看</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/id_rsa.pub</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/id_rsa</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="生产-key" tabindex="-1">生产 KEY <a class="header-anchor" href="#生产-key" aria-label="Permalink to &quot;生产 KEY&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 进入 SSH 目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成默认配置的公钥和私钥</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 键入下述命令生成自定义 ssh-key 的公钥和私钥</span></span>
<span class="line"><span style="color:#6A737D;"># 会让你依次输入文件名，密码，密码，结束后默认生成id_rsa和id_rsa.pub</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsa</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;xxx@xxx.cn&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 你还可以写得简短点直接把名字写在命令后</span></span>
<span class="line"><span style="color:#6A737D;"># 这个命令会生成 id_rsa_xx 和id_rsa_xx.pub 的私钥和公钥</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsa</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;xxx@xxx.cn&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/id_rsa_xx</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsa</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pch1024@outlook.com&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/id_rsa_blog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># -t：密钥类型，一般为dsa，ecdsa，ed25519和rsa这几种，默认为rsa，可省略；</span></span>
<span class="line"><span style="color:#6A737D;"># -b：密钥的位数；</span></span>
<span class="line"><span style="color:#6A737D;"># -C：注释文字，比如邮箱。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 进入 SSH 目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成默认配置的公钥和私钥</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 键入下述命令生成自定义 ssh-key 的公钥和私钥</span></span>
<span class="line"><span style="color:#6A737D;"># 会让你依次输入文件名，密码，密码，结束后默认生成id_rsa和id_rsa.pub</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsa</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;xxx@xxx.cn&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 你还可以写得简短点直接把名字写在命令后</span></span>
<span class="line"><span style="color:#6A737D;"># 这个命令会生成 id_rsa_xx 和id_rsa_xx.pub 的私钥和公钥</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsa</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;xxx@xxx.cn&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/id_rsa_xx</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsa</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pch1024@outlook.com&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/id_rsa_blog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># -t：密钥类型，一般为dsa，ecdsa，ed25519和rsa这几种，默认为rsa，可省略；</span></span>
<span class="line"><span style="color:#6A737D;"># -b：密钥的位数；</span></span>
<span class="line"><span style="color:#6A737D;"># -C：注释文字，比如邮箱。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="known-hosts-报错处理" tabindex="-1">known_hosts 报错处理 <a class="header-anchor" href="#known-hosts-报错处理" aria-label="Permalink to &quot;known_hosts 报错处理&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 删除错误的IP或者域名</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">120.48</span><span style="color:#9ECBFF;">.97.59</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 删除错误的IP或者域名</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">120.48</span><span style="color:#032F62;">.97.59</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="ssh-config" tabindex="-1">ssh-config <a class="header-anchor" href="#ssh-config" aria-label="Permalink to &quot;ssh-config&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/config</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 新建</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/config</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 编辑</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件参数</span></span>
<span class="line"><span style="color:#6A737D;"># Host: 指定主机名称或模式，用于匹配要应用配置的远程主机。</span></span>
<span class="line"><span style="color:#6A737D;"># HostName: 指定远程主机的名称或 IP 地址。</span></span>
<span class="line"><span style="color:#6A737D;"># User: 指定要用于 SSH 连接的用户名。</span></span>
<span class="line"><span style="color:#6A737D;"># Port: 指定 SSH 连接的端口号。</span></span>
<span class="line"><span style="color:#6A737D;"># IdentityFile: 指定用于身份验证的私钥文件的路径。</span></span>
<span class="line"><span style="color:#6A737D;"># ProxyCommand: 指定用于连接到远程主机的代理命令。</span></span>
<span class="line"><span style="color:#6A737D;"># ForwardAgent: 指示是否进行 SSH 代理转发。</span></span>
<span class="line"><span style="color:#6A737D;"># Compression: 指定是否启用连接的压缩。</span></span>
<span class="line"><span style="color:#6A737D;"># ServerAliveInterval: 指定发送保持活动消息的时间间隔，以保持 SSH 连接的活动状态。</span></span>
<span class="line"><span style="color:#6A737D;"># PreferredAuthentications: 设置登录方式，publickey 公钥，改成 password 则要输密码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 工作</span></span>
<span class="line"><span style="color:#B392F0;">Host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gitee</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">HostName</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gitee.com</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">PreferredAuthentications</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publickey</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">IdentityFile</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/id_rsa_work</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span></span>
<span class="line"><span style="color:#6A737D;"># 生活</span></span>
<span class="line"><span style="color:#B392F0;">Host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">HostName</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">PreferredAuthentications</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publickey</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">IdentityFile</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.ssh/id_rsa_my</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/config</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 新建</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/config</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 编辑</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件参数</span></span>
<span class="line"><span style="color:#6A737D;"># Host: 指定主机名称或模式，用于匹配要应用配置的远程主机。</span></span>
<span class="line"><span style="color:#6A737D;"># HostName: 指定远程主机的名称或 IP 地址。</span></span>
<span class="line"><span style="color:#6A737D;"># User: 指定要用于 SSH 连接的用户名。</span></span>
<span class="line"><span style="color:#6A737D;"># Port: 指定 SSH 连接的端口号。</span></span>
<span class="line"><span style="color:#6A737D;"># IdentityFile: 指定用于身份验证的私钥文件的路径。</span></span>
<span class="line"><span style="color:#6A737D;"># ProxyCommand: 指定用于连接到远程主机的代理命令。</span></span>
<span class="line"><span style="color:#6A737D;"># ForwardAgent: 指示是否进行 SSH 代理转发。</span></span>
<span class="line"><span style="color:#6A737D;"># Compression: 指定是否启用连接的压缩。</span></span>
<span class="line"><span style="color:#6A737D;"># ServerAliveInterval: 指定发送保持活动消息的时间间隔，以保持 SSH 连接的活动状态。</span></span>
<span class="line"><span style="color:#6A737D;"># PreferredAuthentications: 设置登录方式，publickey 公钥，改成 password 则要输密码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 工作</span></span>
<span class="line"><span style="color:#6F42C1;">Host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gitee</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">HostName</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gitee.com</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">PreferredAuthentications</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publickey</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">IdentityFile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/id_rsa_work</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span></span>
<span class="line"><span style="color:#6A737D;"># 生活</span></span>
<span class="line"><span style="color:#6F42C1;">Host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">HostName</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">PreferredAuthentications</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publickey</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">IdentityFile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.ssh/id_rsa_my</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="ssh-配合-git" tabindex="-1">SSH 配合 Git <a class="header-anchor" href="#ssh-配合-git" aria-label="Permalink to &quot;SSH 配合 Git&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 链接测试</span></span>
<span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-T</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在你的项目目录下先使用git remote -v查看远程地址</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  https://github.com/peichenhu/learn-github-actions.git (fetch)</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  https://github.com/peichenhu/learn-github-actions.git (push)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用命令将 https 协议改成SSH协议进行访问:</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set-url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com:peichenhu/learn-github-actions.git</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  git@github.com:peichenhu/learn-github-actions.git (fetch)</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  git@github.com:peichenhu/learn-github-actions.git (push)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 链接测试</span></span>
<span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-T</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在你的项目目录下先使用git remote -v查看远程地址</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  https://github.com/peichenhu/learn-github-actions.git (fetch)</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  https://github.com/peichenhu/learn-github-actions.git (push)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用命令将 https 协议改成SSH协议进行访问:</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set-url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:peichenhu/learn-github-actions.git</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  git@github.com:peichenhu/learn-github-actions.git (fetch)</span></span>
<span class="line"><span style="color:#6A737D;"># 输出  origin  git@github.com:peichenhu/learn-github-actions.git (push)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="github-的-https-和-ssh-区别" tabindex="-1">Github 的 HTTPS 和 SSH 区别 <a class="header-anchor" href="#github-的-https-和-ssh-区别" aria-label="Permalink to &quot;Github 的 HTTPS 和 SSH 区别&quot;">​</a></h2><blockquote><p>SSH 在国内访问 Github 比 HTTPS 快</p></blockquote><p>https 可以随意克隆 github 上的项目，而不管是谁的； 而 SSH 则是你必须是你要克隆的项目的拥有者或管理员，且需要先添加 SSH key，否则无法克隆。</p><p>https url 在 push 的时候是需要验证用户名和密码的； 而 SSH 在 push 的时候，是不需要输入用户名的， 如果配置 SSH key 的时候设置了密码，则需要输入密码的，否则直接是不需要输入密码的。</p>`,16),o=[e];function c(r,t,i,y,E,h){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
