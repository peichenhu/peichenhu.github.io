import{_ as s,c as n,o as a,Q as o}from"./chunks/framework.03c6a765.js";const h=JSON.parse('{"title":"githooks","description":"","frontmatter":{},"headers":[],"relativePath":"38-tool-docs/git-hooks.md","filePath":"38-tool-docs/git-hooks.md","lastUpdated":1703663478000}'),p={name:"38-tool-docs/git-hooks.md"},l=o(`<h1 id="githooks" tabindex="-1">githooks <a class="header-anchor" href="#githooks" aria-label="Permalink to &quot;githooks&quot;">​</a></h1><blockquote><p><a href="https://git-scm.com/docs/githooks" target="_blank" rel="noreferrer">git docs</a></p></blockquote><p>原生的 <code>git hooks</code> 有一个比较大的问题是 <code>.git</code> 文件夹下的内容不会被 Git 追踪。 <br> 这就表示，无法保证让一个仓库中所有的成员都使用同样的 <code>git hooks</code>，<br> 除非仓库的所有成员都手动同步同一份 <code>git hooks</code>，但这显然不是个好办法。</p><h2 id="客户端-githook" tabindex="-1">客户端 GitHook <a class="header-anchor" href="#客户端-githook" aria-label="Permalink to &quot;客户端 GitHook&quot;">​</a></h2><table><thead><tr><th>客户端 GitHook</th><th>调用时机</th><th>说明</th></tr></thead><tbody><tr><td><code>pre-commit</code></td><td>在执行<code>git commit</code>命令生成提交对象之前被触发 (错误则中断)。</td><td>常用来检查即将提交的快照，比如运行<code>lint</code>工具检查代码格式。</td></tr><tr><td><code>prepare-commit-msg</code></td><td>在提交信息编辑器显示之前，提交对象创建完毕之后被触发。</td><td>常用于给提交信息编辑器提供默认的提交信息，如修复<code>bug</code>时引用<code>bug</code>号等。</td></tr><tr><td><code>commit-msgcommit-msg</code></td><td>在提交信息编辑器关闭后、提交对象生成之前被触发(错误则中断)。</td><td>常用于检查提交信息是否符合格式要求。</td></tr><tr><td><code>post-commitpost-commit</code></td><td>在整个提交过程完成后被触发。</td><td>常用于通知其他工具提交已经完成。此钩子不能影响提交过程的结果。</td></tr><tr><td><code>pre-rebasepre-rebase</code></td><td>在<code>git rebase</code>命令执行前被触发 (错误则中断)。</td><td>常用于阻止对已经推送的提交进行<code>rebase</code>操作。</td></tr><tr><td><code>post-checkoutpost-checkout</code></td><td>在<code>git checkout</code>或<code>git switch</code>成功运行后被触发。</td><td>常用于提醒用户工作目录已经改变。</td></tr><tr><td><code>post-mergepost-merge</code></td><td>在<code>git merge</code>成功运行后被触发。</td><td>常用于通知用户有文件被合并。</td></tr><tr><td><code>pre-pushpre-push</code></td><td>在<code>git push</code>命令发送数据到远程仓库之前被触发 (错误则中断)。</td><td>常用于确保不会推送错误的提交到远程仓库。</td></tr></tbody></table><h2 id="服务端-githook" tabindex="-1">服务端 GitHook <a class="header-anchor" href="#服务端-githook" aria-label="Permalink to &quot;服务端 GitHook&quot;">​</a></h2><table><thead><tr><th>服务端 GitHook</th><th>调用时机</th><th>说明</th></tr></thead><tbody><tr><td><code>pre-receivepre-receive</code></td><td>在远程仓库接收到<code>git push</code>数据并开始更新处理之前被触发。</td><td>常用于实现权限控制和引用（branch、tag等）的规则检查。</td></tr><tr><td><code>updateupdate</code></td><td>在远程仓库接收到<code>git push</code>数据，每个引用更新前被触发。与<code>pre-receive</code>类似。</td><td>常用于实现权限控制和引用的规则检查。</td></tr><tr><td><code>post-receivepost-receive</code></td><td>在远程仓库接收到<code>git push</code>数据并完成所有更新后被触发。</td><td>常用于触发持续集成、部署等后续任务，或者向外部系统发送有关新提交的通知。</td></tr></tbody></table><h2 id="husky" tabindex="-1">husky <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;husky&quot;">​</a></h2><p><a href="https://typicode.github.io/husky/#/" target="_blank" rel="noreferrer">husky</a> 是一个支持所有客户端 GitHooks 的工具，在提交或推送时使用它来整理提交消息、运行测试、整理代码等。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span></span>
<span class="line"><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#6A737D;"># 安装后自动启用Git挂钩</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scripts.prepare=&quot;husky install&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置 pre-commit 挂钩</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.husky/pre-commit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lint-staged&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#################################################</span></span>
<span class="line"><span style="color:#6A737D;"># 搭配 commitizen cz-conventional-changelog 使用 #</span></span>
<span class="line"><span style="color:#6A737D;">#################################################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitizen</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cz-conventional-changelog</span></span>
<span class="line"><span style="color:#6A737D;"># 手动配置 package.json 文件</span></span>
<span class="line"><span style="color:#6A737D;"># &quot;config&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#   &quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;path&quot;: &quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#   }</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span>
<span class="line"><span style="color:#6A737D;"># 配置 prepare-commit-msg 挂钩</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.husky/prepare-commit-msg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;exec &lt; /dev/tty &amp;&amp; node_modules/.bin/cz --hook || true&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 测试</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span></span>
<span class="line"><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6A737D;"># 安装后自动启用Git挂钩</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scripts.prepare=&quot;husky install&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置 pre-commit 挂钩</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.husky/pre-commit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lint-staged&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#################################################</span></span>
<span class="line"><span style="color:#6A737D;"># 搭配 commitizen cz-conventional-changelog 使用 #</span></span>
<span class="line"><span style="color:#6A737D;">#################################################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitizen</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cz-conventional-changelog</span></span>
<span class="line"><span style="color:#6A737D;"># 手动配置 package.json 文件</span></span>
<span class="line"><span style="color:#6A737D;"># &quot;config&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#   &quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;path&quot;: &quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#   }</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span>
<span class="line"><span style="color:#6A737D;"># 配置 prepare-commit-msg 挂钩</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.husky/prepare-commit-msg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;exec &lt; /dev/tty &amp;&amp; node_modules/.bin/cz --hook || true&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 测试</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,10),e=[l];function t(c,r,i,d,y,u){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};