import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.03c6a765.js";const d=JSON.parse('{"title":"迭代","description":"","frontmatter":{},"headers":[],"relativePath":"10-js/30-迭代.md","filePath":"10-js/30-迭代.md","lastUpdated":1703663478000}'),p={name:"10-js/30-迭代.md"},o=l(`<h1 id="迭代" tabindex="-1">迭代 <a class="header-anchor" href="#迭代" aria-label="Permalink to &quot;迭代&quot;">​</a></h1><h2 id="do-while" tabindex="-1">do...while <a class="header-anchor" href="#do-while" aria-label="Permalink to &quot;do...while&quot;">​</a></h2><p>do...while 语句创建一个执行指定语句的循环，直到 condition 值为 false。 在执行 statement 后检测 condition，所以指定的 statement 至少执行一次。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(arr[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">	i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">do</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(arr[i]);</span></span>
<span class="line"><span style="color:#24292E;">	i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="for" tabindex="-1">for <a class="header-anchor" href="#for" aria-label="Permalink to &quot;for&quot;">​</a></h2><p>for 语句用于创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中， 使用分号分隔，后跟一个用于在循环中执行的语句（通常是一个块语句）。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(arr[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(arr[i]);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="for-in-可枚举对象" tabindex="-1">for...in 可枚举对象 <a class="header-anchor" href="#for-in-可枚举对象" aria-label="Permalink to &quot;for...in 可枚举对象&quot;">​</a></h2><p>for...in 语句以任意顺序迭代一个对象的除 Symbol 以外的可枚举属性，包括继承的可枚举属性。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">)]: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">getPrototypeOf</span><span style="color:#E1E4E8;">(obj).c </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">getPrototypeOf</span><span style="color:#E1E4E8;">(obj)[</span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;d&quot;</span><span style="color:#E1E4E8;">)] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> key </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (obj.</span><span style="color:#B392F0;">hasOwnProperty</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`自身属性名称：{\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">obj</span><span style="color:#9ECBFF;">[</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`继承属性名称：{\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">obj</span><span style="color:#9ECBFF;">[</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keys&#39;</span><span style="color:#E1E4E8;">, Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(obj));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;getOwnPropertySymbols&#39;</span><span style="color:#E1E4E8;">, Object.</span><span style="color:#B392F0;">getOwnPropertySymbols</span><span style="color:#E1E4E8;">(obj));</span></span>
<span class="line"><span style="color:#6A737D;">// 自身属性名称：{a: 1}</span></span>
<span class="line"><span style="color:#6A737D;">// 继承属性名称：{c: 3}</span></span>
<span class="line"><span style="color:#6A737D;">// keys [ &#39;a&#39; ]</span></span>
<span class="line"><span style="color:#6A737D;">// getOwnPropertySymbols [ Symbol(b) ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">)]: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">getPrototypeOf</span><span style="color:#24292E;">(obj).c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">getPrototypeOf</span><span style="color:#24292E;">(obj)[</span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;d&quot;</span><span style="color:#24292E;">)] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> obj) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (obj.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(key)) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`自身属性名称：{\${</span><span style="color:#24292E;">key</span><span style="color:#032F62;">}: \${</span><span style="color:#24292E;">obj</span><span style="color:#032F62;">[</span><span style="color:#24292E;">key</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`继承属性名称：{\${</span><span style="color:#24292E;">key</span><span style="color:#032F62;">}: \${</span><span style="color:#24292E;">obj</span><span style="color:#032F62;">[</span><span style="color:#24292E;">key</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;keys&#39;</span><span style="color:#24292E;">, Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(obj));</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;getOwnPropertySymbols&#39;</span><span style="color:#24292E;">, Object.</span><span style="color:#6F42C1;">getOwnPropertySymbols</span><span style="color:#24292E;">(obj));</span></span>
<span class="line"><span style="color:#6A737D;">// 自身属性名称：{a: 1}</span></span>
<span class="line"><span style="color:#6A737D;">// 继承属性名称：{c: 3}</span></span>
<span class="line"><span style="color:#6A737D;">// keys [ &#39;a&#39; ]</span></span>
<span class="line"><span style="color:#6A737D;">// getOwnPropertySymbols [ Symbol(b) ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="for-of-可迭代对象" tabindex="-1">for...of 可迭代对象 <a class="header-anchor" href="#for-of-可迭代对象" aria-label="Permalink to &quot;for...of 可迭代对象&quot;">​</a></h2><p>for...of 语句在可迭代对象上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 可迭代对象包括 Array，Map，Set，String，TypedArray，arguments 对象等等</span></span>
<span class="line"><span style="color:#6A737D;">// 实现了可迭代协议 *.prototype[@@iterator]()</span></span>
<span class="line"><span style="color:#6A737D;">// 支持 [...target]和 for...of 循环</span></span>
<span class="line"><span style="color:#6A737D;">// 以插入顺序返回 value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> arr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value); </span><span style="color:#6A737D;">// &#39;a&#39;, &#39;b&#39;, &#39;c&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 可迭代对象包括 Array，Map，Set，String，TypedArray，arguments 对象等等</span></span>
<span class="line"><span style="color:#6A737D;">// 实现了可迭代协议 *.prototype[@@iterator]()</span></span>
<span class="line"><span style="color:#6A737D;">// 支持 [...target]和 for...of 循环</span></span>
<span class="line"><span style="color:#6A737D;">// 以插入顺序返回 value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> arr) {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value); </span><span style="color:#6A737D;">// &#39;a&#39;, &#39;b&#39;, &#39;c&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="while" tabindex="-1">while <a class="header-anchor" href="#while" aria-label="Permalink to &quot;while&quot;">​</a></h2><p>while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码， 直到那个表达式不为真时结束循环。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	n</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 0 1 2</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (n </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	n</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 0 1 2</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="foreach" tabindex="-1">forEach <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;forEach&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((element, index, array), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Map</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((element, index, map), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Set</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((element, index, set), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">NodeList</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((element, index, nodeList), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">URLSearchParams</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((element, index, nodeList), thisArg);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((element, index, array), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Map</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((element, index, map), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Set</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((element, index, set), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">NodeList</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((element, index, nodeList), thisArg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">URLSearchParams</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((element, index, nodeList), thisArg);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="递归" tabindex="-1">递归 <a class="header-anchor" href="#递归" aria-label="Permalink to &quot;递归&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loop</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(n); </span><span style="color:#6A737D;">// 0 1 2</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">loop</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">})(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loop</span><span style="color:#24292E;">(</span><span style="color:#E36209;">n</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (n </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(n); </span><span style="color:#6A737D;">// 0 1 2</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">loop</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">})(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="拓展知识" tabindex="-1">拓展知识 <a class="header-anchor" href="#拓展知识" aria-label="Permalink to &quot;拓展知识&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams" target="_blank" rel="noreferrer">URLSearchParams</a></li></ul>`,22),e=[o];function r(c,t,y,E,i,b){return a(),n("div",null,e)}const h=s(p,[["render",r]]);export{d as __pageData,h as default};
