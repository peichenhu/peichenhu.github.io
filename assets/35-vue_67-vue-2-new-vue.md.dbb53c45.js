import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.03c6a765.js";const m=JSON.parse('{"title":"Vue2 的 new Vue() 做了什么？","description":"","frontmatter":{},"headers":[],"relativePath":"35-vue/67-vue-2-new-vue.md","filePath":"35-vue/67-vue-2-new-vue.md","lastUpdated":1703663478000}'),l={name:"35-vue/67-vue-2-new-vue.md"},e=p(`<h1 id="vue2-的-new-vue-做了什么" tabindex="-1">Vue2 的 new Vue() 做了什么？ <a class="header-anchor" href="#vue2-的-new-vue-做了什么" aria-label="Permalink to &quot;Vue2 的 new Vue() 做了什么？&quot;">​</a></h1><h2 id="new-vue-之前做了什么" tabindex="-1">new Vue() 之前做了什么？ <a class="header-anchor" href="#new-vue-之前做了什么" aria-label="Permalink to &quot;new Vue() 之前做了什么？&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vue-2.5.16/src/core/instance/init.js</span></span>
<span class="line"><span style="color:#6A737D;">// 创建全局对象</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_init</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 创建全局对象的属性方法</span></span>
<span class="line"><span style="color:#6A737D;">// initMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue._init = *</span></span>
<span class="line"><span style="color:#6A737D;">// stateMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$set = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$delete = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$data = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$props = *</span></span>
<span class="line"><span style="color:#6A737D;">// eventsMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$on = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$once = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$off = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$emit = *</span></span>
<span class="line"><span style="color:#6A737D;">// lifecycleMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype._update = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$forceUpdate = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$destroy = *</span></span>
<span class="line"><span style="color:#6A737D;">// renderMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    installRenderHelpers(Vue.prototype)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$nextTick = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype._render = *</span></span>
<span class="line"><span style="color:#6A737D;">// initGlobalAPI(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.util = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.set = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.delete = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.nextTick = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.use = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.mixin = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.extend = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options = Object.create(null)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options[&#39;components&#39;] = Object.create(null)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options[&#39;directivs&#39;] = Object.create(null)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options[&#39;filtes&#39;] = Object.create(null)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vue-2.5.16/src/core/instance/init.js</span></span>
<span class="line"><span style="color:#6A737D;">// 创建全局对象</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">_init</span><span style="color:#24292E;">(options);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 创建全局对象的属性方法</span></span>
<span class="line"><span style="color:#6A737D;">// initMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue._init = *</span></span>
<span class="line"><span style="color:#6A737D;">// stateMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$set = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$delete = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$data = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$props = *</span></span>
<span class="line"><span style="color:#6A737D;">// eventsMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$on = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$once = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$off = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$emit = *</span></span>
<span class="line"><span style="color:#6A737D;">// lifecycleMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype._update = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$forceUpdate = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$destroy = *</span></span>
<span class="line"><span style="color:#6A737D;">// renderMixin(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    installRenderHelpers(Vue.prototype)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype.$nextTick = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.prototype._render = *</span></span>
<span class="line"><span style="color:#6A737D;">// initGlobalAPI(Vue)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.util = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.set = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.delete = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.nextTick = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.use = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.mixin = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.extend = *</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options = Object.create(null)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options[&#39;components&#39;] = Object.create(null)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options[&#39;directivs&#39;] = Object.create(null)</span></span>
<span class="line"><span style="color:#6A737D;">//    Vue.options[&#39;filtes&#39;] = Object.create(null)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="new-vue-app-or-做了什么" tabindex="-1">new Vue(App or {}) 做了什么？ <a class="header-anchor" href="#new-vue-app-or-做了什么" aria-label="Permalink to &quot;new Vue(App or {}) 做了什么？&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vue-2.5.16/src/core/instance/init.js</span></span>
<span class="line"><span style="color:#6A737D;">// 执行 new Vue 会调用方法 this._init(options);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> uid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_init</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (options </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> options._isComponent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 内部组件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">initInternalComponent</span><span style="color:#E1E4E8;">(vm, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">	} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 配置项</span></span>
<span class="line"><span style="color:#E1E4E8;">		vm.$options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeOptions</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">resolveConstructorOptions</span><span style="color:#E1E4E8;">(vm.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">), options </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {}, vm);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	vm._uid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> uid</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	vm._isVue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	vm._self </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm; </span><span style="color:#6A737D;">// 暴露真实自我</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">initLifecycle</span><span style="color:#E1E4E8;">(vm); </span><span style="color:#6A737D;">// 初始化生命周期</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">initEvents</span><span style="color:#E1E4E8;">(vm); </span><span style="color:#6A737D;">// 初始化事件</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">initRender</span><span style="color:#E1E4E8;">(vm); </span><span style="color:#6A737D;">// 初始化渲染</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;beforeCreate&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 调用生命周期钩子函数</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">initInjections</span><span style="color:#E1E4E8;">(vm); </span><span style="color:#6A737D;">//初始化 injections</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">initState</span><span style="color:#E1E4E8;">(vm); </span><span style="color:#6A737D;">// 初始化 props, methods, data, computed, watch</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">initProvide</span><span style="color:#E1E4E8;">(vm); </span><span style="color:#6A737D;">// 初始化 provide</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;created&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 调用生命周期钩子函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vm.$options.el) vm.</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">(vm.$options.el); </span><span style="color:#6A737D;">// 尝试挂载真实 DOM</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vue-2.5.16/src/core/instance/init.js</span></span>
<span class="line"><span style="color:#6A737D;">// 执行 new Vue 会调用方法 this._init(options);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> uid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">_init</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vm</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (options </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> options._isComponent) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 内部组件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">initInternalComponent</span><span style="color:#24292E;">(vm, options);</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 配置项</span></span>
<span class="line"><span style="color:#24292E;">		vm.$options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mergeOptions</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">resolveConstructorOptions</span><span style="color:#24292E;">(vm.</span><span style="color:#005CC5;">constructor</span><span style="color:#24292E;">), options </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> {}, vm);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	vm._uid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> uid</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	vm._isVue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	vm._self </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm; </span><span style="color:#6A737D;">// 暴露真实自我</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">initLifecycle</span><span style="color:#24292E;">(vm); </span><span style="color:#6A737D;">// 初始化生命周期</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">initEvents</span><span style="color:#24292E;">(vm); </span><span style="color:#6A737D;">// 初始化事件</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">initRender</span><span style="color:#24292E;">(vm); </span><span style="color:#6A737D;">// 初始化渲染</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;beforeCreate&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 调用生命周期钩子函数</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">initInjections</span><span style="color:#24292E;">(vm); </span><span style="color:#6A737D;">//初始化 injections</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">initState</span><span style="color:#24292E;">(vm); </span><span style="color:#6A737D;">// 初始化 props, methods, data, computed, watch</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">initProvide</span><span style="color:#24292E;">(vm); </span><span style="color:#6A737D;">// 初始化 provide</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;created&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 调用生命周期钩子函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (vm.$options.el) vm.</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">(vm.$options.el); </span><span style="color:#6A737D;">// 尝试挂载真实 DOM</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,5),o=[e];function t(c,r,i,y,E,u){return a(),n("div",null,o)}const A=s(l,[["render",t]]);export{m as __pageData,A as default};
