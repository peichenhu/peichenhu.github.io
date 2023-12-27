import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.03c6a765.js";const F=JSON.parse('{"title":"tree","description":"","frontmatter":{},"headers":[],"relativePath":"38-tool-docs/tree.md","filePath":"38-tool-docs/tree.md","lastUpdated":1703663478000}'),o={name:"38-tool-docs/tree.md"},p=l(`<h1 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-label="Permalink to &quot;tree&quot;">​</a></h1><p>以树状方式显示当前目录及其子目录的内容</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><blockquote><p>brew install tree</p></blockquote><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>在终端直接执行 tree 命令，展示当前文件夹下所有的目录树结构（包含文件和文件夹以及子文件夹）</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看帮助</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-L</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#指定层级</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;src&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#显示目录名称而非内容</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-I</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;node_modules&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#不显示符合范本样式的文件或目录名称</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-I</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;node_modules|tests&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#不显示符合范本样式的文件或目录名称</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-I</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;node_modules|test\\*|LICENSE|README.en.md&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-L</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#写入指定文件，如果文件不存在自动创建，如果存在则覆盖内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">### 生成目录树结构</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-I</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;node_modules|test*|LICENSE|README.en.md&quot;-L</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看帮助</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-L</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#指定层级</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;src&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#显示目录名称而非内容</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-I</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#不显示符合范本样式的文件或目录名称</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-I</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules|tests&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#不显示符合范本样式的文件或目录名称</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-I</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules|test\\*|LICENSE|README.en.md&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-L</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#写入指定文件，如果文件不存在自动创建，如果存在则覆盖内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">### 生成目录树结构</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-I</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules|test*|LICENSE|README.en.md&quot;-L</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,7),e=[p];function t(r,c,E,y,i,d){return a(),n("div",null,e)}const C=s(o,[["render",t]]);export{F as __pageData,C as default};
