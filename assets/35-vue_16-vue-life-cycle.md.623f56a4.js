import{_ as e,c as s,o as a,Q as n}from"./chunks/framework.03c6a765.js";const g=JSON.parse('{"title":"Vue 生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"35-vue/16-vue-life-cycle.md","filePath":"35-vue/16-vue-life-cycle.md","lastUpdated":1703663478000}'),l={name:"35-vue/16-vue-life-cycle.md"},p=n(`<h1 id="vue-生命周期" tabindex="-1">Vue 生命周期 <a class="header-anchor" href="#vue-生命周期" aria-label="Permalink to &quot;Vue 生命周期&quot;">​</a></h1><p>生命周期就是一个 Vue 实例 <code>创建</code>、<code>挂载</code>、<code>更新</code>、<code>销毁</code> 的过程，开发者可以在对应的阶段执行业务逻辑。</p><p><img src="https://cn.vuejs.org/assets/lifecycle.16e4c08e.png" alt="lifecycle"></p><ul><li><code>加载渲染过程：</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">父 beforeCreate =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">父 created =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">父 beforeMount =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 beforeCreate =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 created =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 beforeMount =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 mounted =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">父 mounted</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">父 beforeCreate =&gt;</span></span>
<span class="line"><span style="color:#24292e;">父 created =&gt;</span></span>
<span class="line"><span style="color:#24292e;">父 beforeMount =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 beforeCreate =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 created =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 beforeMount =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 mounted =&gt;</span></span>
<span class="line"><span style="color:#24292e;">父 mounted</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>子组件更新过程：</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">父 beforeUpdate =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 beforeUpdate =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 updated =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">父 updated</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">父 beforeUpdate =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 beforeUpdate =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 updated =&gt;</span></span>
<span class="line"><span style="color:#24292e;">父 updated</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code>销毁过程：</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">父 beforeDestroy =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 beforeDestroy =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    子 destroyed =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">父 destroyed</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">父 beforeDestroy =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 beforeDestroy =&gt;</span></span>
<span class="line"><span style="color:#24292e;">    子 destroyed =&gt;</span></span>
<span class="line"><span style="color:#24292e;">父 destroyed</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,9),o=[p];function c(t,r,i,d,u,b){return a(),s("div",null,o)}const m=e(l,[["render",c]]);export{g as __pageData,m as default};
