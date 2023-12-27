import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.03c6a765.js";const h=JSON.parse('{"title":"vue-router","description":"","frontmatter":{},"headers":[],"relativePath":"35-vue/40-vue-router.md","filePath":"35-vue/40-vue-router.md","lastUpdated":1703663478000}'),p={name:"35-vue/40-vue-router.md"},o=l(`<h1 id="vue-router" tabindex="-1">vue-router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;vue-router&quot;">​</a></h1><h2 id="_3-种模式" tabindex="-1">3 种模式 <a class="header-anchor" href="#_3-种模式" aria-label="Permalink to &quot;3 种模式&quot;">​</a></h2><ol><li><code>hash</code>: 使用 <code>URL hash</code> 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。</li><li><code>history</code>: 依赖 <code>HTML5 History API</code> 和服务器配置。</li><li><code>abstract</code>: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。</li></ol><h2 id="依赖的浏览器-api" tabindex="-1">依赖的浏览器 API <a class="header-anchor" href="#依赖的浏览器-api" aria-label="Permalink to &quot;依赖的浏览器 API&quot;">​</a></h2><ul><li>URL hash</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">onhashchange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e.oldURL); </span><span style="color:#6A737D;">// 输出 https://www.baidu.com/</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e.newURL); </span><span style="color:#6A737D;">// 输出 https://www.baidu.com/#hash</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">window.location </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;#hash&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 或者 location.hash = &quot;#hash&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">onhashchange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(e.oldURL); </span><span style="color:#6A737D;">// 输出 https://www.baidu.com/</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(e.newURL); </span><span style="color:#6A737D;">// 输出 https://www.baidu.com/#hash</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">window.location </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;#hash&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 或者 location.hash = &quot;#hash&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>HTML5 History API</p><ul><li><code>state</code>: 查看 pushState() or replaceState() 修改后的 state 值，否则返回 null,不必等待 popstate 事件发生后再查看。</li><li><code>length</code>：只读属性，返回当前 session 中的 history 个数，包含当前页面在内。举个例子，对于新开一个 tab 加载的页面当前属性返回值 1。</li><li><code>back</code>: 在会话历史记录中向后移动一页。如果没有上一页，则此方法调用不执行任何操作。</li><li><code>go</code>: 从会话历史记录中加载特定页面。你可以使用它在历史记录中前后移动，具体取决于 delta 参数的值。不传或者传零重新加载页面。</li><li><code>forward</code>: 在会话历史中向前移动一页。等同于 <code>history.go(1)</code></li><li><code>pushState</code>: 向当前浏览器会话的历史堆栈中添加一个状态（state）。</li><li><code>replaceState</code>: 修改当前历史记录实体，如果你想更新当前的 state 对象或者当前历史实体的 URL 来响应用户的的动作的话这个方法将会非常有用。</li><li><code>onpopstate</code>: 当活动历史记录条目更改时，将触发 <code>popstate</code> 事件。</li></ul><p>需要注意的是调用 <code>history.pushState()</code>或 <code>history.replaceState()</code>不会触发 <code>popstate</code> 事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在 Javascript 代码中调用 <code>history.back()</code>或者 <code>history.forward()</code>方法) 。不同的浏览器在加载页面时处理 <code>popstate</code> 事件的形式存在差异。页面加载时 Chrome 和 Safari 通常会触发 <code>popstate</code> 事件，但 Firefox 则不会。</p></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 新开页面</span></span>
<span class="line"><span style="color:#E1E4E8;">location.href; </span><span style="color:#6A737D;">// https://www.baidu.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;popstate&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;popstate: &quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(event.state)); </span><span style="color:#6A737D;">// 当前记录的 state</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.state; </span><span style="color:#6A737D;">// null</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 刷新页面</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 刷新页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">window.location </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;#hash&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// https://www.baidu.com/#hash</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#B392F0;">back</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 向前移动一页 https://www.baidu.com/</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#B392F0;">forward</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 向前移动一页 https://www.baidu.com/#hash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 向后移动一页 https://www.baidu.com/</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 向前移动一页 https://www.baidu.com/#hash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 状态对象是一个JavaScript对象，它与传递给 replaceState 方法的历史记录实体相关联.</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { page_id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, user_id: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// 大部分浏览器忽略这个参数</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 大部分浏览器忽略这个参数</span></span>
<span class="line"><span style="color:#6A737D;">// 可选；历史记录实体的URL. 新的URL跟当前的URL必须是同源; 否则 replaceState 抛出一个异常.</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;hello-world.html&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">history.</span><span style="color:#B392F0;">pushState</span><span style="color:#E1E4E8;">(state, title, url); </span><span style="color:#6A737D;">// https://www.baidu.com/hello-world.html</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.state; </span><span style="color:#6A737D;">// {page_id: 1, user_id: 5}</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { page_id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, user_id: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;hello-history.html&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">history.</span><span style="color:#B392F0;">replaceState</span><span style="color:#E1E4E8;">(state, title, url); </span><span style="color:#6A737D;">// https://www.baidu.com/hello-history.html</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.state; </span><span style="color:#6A737D;">// {page_id: 2, user_id: 6}</span></span>
<span class="line"><span style="color:#E1E4E8;">window.history.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 新开页面</span></span>
<span class="line"><span style="color:#24292E;">location.href; </span><span style="color:#6A737D;">// https://www.baidu.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;popstate&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;popstate: &quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(event.state)); </span><span style="color:#6A737D;">// 当前记录的 state</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">window.history.state; </span><span style="color:#6A737D;">// null</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">go</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 刷新页面</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">go</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 刷新页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">window.location </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;#hash&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// https://www.baidu.com/#hash</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">back</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 向前移动一页 https://www.baidu.com/</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">forward</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 向前移动一页 https://www.baidu.com/#hash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">go</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 向后移动一页 https://www.baidu.com/</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">go</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 向前移动一页 https://www.baidu.com/#hash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 状态对象是一个JavaScript对象，它与传递给 replaceState 方法的历史记录实体相关联.</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> state </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { page_id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, user_id: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// 大部分浏览器忽略这个参数</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 大部分浏览器忽略这个参数</span></span>
<span class="line"><span style="color:#6A737D;">// 可选；历史记录实体的URL. 新的URL跟当前的URL必须是同源; 否则 replaceState 抛出一个异常.</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hello-world.html&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">history.</span><span style="color:#6F42C1;">pushState</span><span style="color:#24292E;">(state, title, url); </span><span style="color:#6A737D;">// https://www.baidu.com/hello-world.html</span></span>
<span class="line"><span style="color:#24292E;">window.history.state; </span><span style="color:#6A737D;">// {page_id: 1, user_id: 5}</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> state </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { page_id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, user_id: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hello-history.html&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">history.</span><span style="color:#6F42C1;">replaceState</span><span style="color:#24292E;">(state, title, url); </span><span style="color:#6A737D;">// https://www.baidu.com/hello-history.html</span></span>
<span class="line"><span style="color:#24292E;">window.history.state; </span><span style="color:#6A737D;">// {page_id: 2, user_id: 6}</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="history-路由-404" tabindex="-1">history 路由 404 <a class="header-anchor" href="#history-路由-404" aria-label="Permalink to &quot;history 路由 404&quot;">​</a></h2><ul><li><p>问题场景：</p><ol><li>非入口根路由页面刷新页面 404</li><li>非入口根路由页面新开页面 404</li></ol></li><li><p>具体原因：</p></li></ul><p>Vue 是属于单页应用，不管我们有多少页面，都只会有一个入口 <code>index.html</code>。当遇到上面两种场景时，请求会发送到后端服务器，服务器找不到<code>非入口根路由页面</code>只能返回 404。</p><ul><li>解决方案：</li></ul><p>使用 hash 模式路由或者后端做支持配置</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># nginx 配置</span></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">www.xxx.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/data/dist/index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 配置更新命令 nginx -s reload</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># nginx 配置</span></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;">  </span><span style="color:#032F62;">www.xxx.com</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/data/dist/index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">try_files</span><span style="color:#24292E;"> $uri $uri</span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 配置更新命令 nginx -s reload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件；现在你可以在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;history&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    routes: [{ path: </span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;">, component: NotFoundComponent }],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;history&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    routes: [{ path: </span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;">, component: NotFoundComponent }],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,16),e=[o];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{h as __pageData,b as default};