import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.03c6a765.js";const m=JSON.parse('{"title":"前端开发规范","description":"","frontmatter":{},"headers":[],"relativePath":"25-build/20-前端开发规范.md","filePath":"25-build/20-前端开发规范.md","lastUpdated":1703663478000}'),p={name:"25-build/20-前端开发规范.md"},e=l(`<h1 id="前端开发规范" tabindex="-1">前端开发规范 <a class="header-anchor" href="#前端开发规范" aria-label="Permalink to &quot;前端开发规范&quot;">​</a></h1><blockquote><p>PNPM + ESLint + Prettier + Husky + lint-staged + Commitizen</p></blockquote><ul><li><code>ESLint</code> JS 代码检测工具，检测并提示错误或警告信息。</li><li><code>Prettier</code> 代码自动化格式化工具，更好的代码风格效果。</li><li><code>Husky</code> 一个支持所有客户端 GitHooks 的工具，在提交或推送时使用它来整理提交消息、运行测试、整理代码等。</li><li><code>lint-staged</code> 是一个前端文件过滤工具, 它仅过滤 Git 代码暂存区文件。当 git commit 时, pre-commit 钩子会启动, 执行 lint-staged 命令。</li><li><code>Commitizen</code> 使用一组标准化的规则流程来编写提交，使提交更易于阅读。</li></ul><h2 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h2><blockquote><p>使用 prettier 进行格式化，使用 linters 来捕捉 bug！</p></blockquote><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装代码检测和格式化工具</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-config-prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-prettier</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选安装</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@typescript-eslint/eslint-plugin</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@typescript-eslint/parser</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-react</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-react-hooks</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># eslint 初始化配置，根据提示进行选择和配置，生成 .eslintrc.yaml</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装代码检测和格式化工具</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prettier</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-config-prettier</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-prettier</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选安装</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@typescript-eslint/eslint-plugin</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@typescript-eslint/parser</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-react</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-react-hooks</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># eslint 初始化配置，根据提示进行选择和配置，生成 .eslintrc.yaml</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>配置文件</li></ul><details class="details custom-block"><summary>查看 .eslintrc.yaml 配置文件</summary><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置参考文档 https://eslint.org/docs/latest/use/getting-started</span></span>
<span class="line"><span style="color:#6A737D;"># 配置运行环境</span></span>
<span class="line"><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">browser</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">es2021</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#6A737D;"># FIX Warning: React version not specified in eslint-plugin-react settings.</span></span>
<span class="line"><span style="color:#85E89D;">settings</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">react</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;18.2.0&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置规则继承</span></span>
<span class="line"><span style="color:#85E89D;">extends</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">eslint:recommended</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">plugin:@typescript-eslint/recommended</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">plugin:react/recommended</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">plugin:react/jsx-runtime</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">plugin:react-hooks/recommended</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">plugin:vue/vue3-essential</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 关闭所有不必要或可能与 Prettier 冲突的规则。确保把它放在最后，这样它就有机会覆盖其他配置</span></span>
<span class="line"><span style="color:#6A737D;"># 配置解析器</span></span>
<span class="line"><span style="color:#85E89D;">parserOptions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ecmaVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">parser</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/parser&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">sourceType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">module</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ecmaFeatures</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">jsx</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#6A737D;"># 配置插件</span></span>
<span class="line"><span style="color:#85E89D;">plugins</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&#39;@typescript-eslint&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">react</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">react-hooks</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">prettier</span></span>
<span class="line"><span style="color:#6A737D;"># 配置忽略</span></span>
<span class="line"><span style="color:#85E89D;">ignorePatterns</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">.eslintrc.cjs</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">.eslintrc.yml</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">node_modules</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">dist</span></span>
<span class="line"><span style="color:#6A737D;"># 配置详细规则</span></span>
<span class="line"><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">react/jsx-uses-react</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">error</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">react/jsx-uses-vars</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">error</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">react-hooks/rules-of-hooks</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">error</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">react-hooks/exhaustive-deps</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">warn</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">indent</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">error</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">tab</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">linebreak-style</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">error</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">unix</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">quotes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">error</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">single</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">semi</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">error</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">always</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置参考文档 https://eslint.org/docs/latest/use/getting-started</span></span>
<span class="line"><span style="color:#6A737D;"># 配置运行环境</span></span>
<span class="line"><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">browser</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">es2021</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6A737D;"># FIX Warning: React version not specified in eslint-plugin-react settings.</span></span>
<span class="line"><span style="color:#22863A;">settings</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">react</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;18.2.0&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置规则继承</span></span>
<span class="line"><span style="color:#22863A;">extends</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">eslint:recommended</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">plugin:@typescript-eslint/recommended</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">plugin:react/recommended</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">plugin:react/jsx-runtime</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">plugin:react-hooks/recommended</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">plugin:vue/vue3-essential</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">prettier</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 关闭所有不必要或可能与 Prettier 冲突的规则。确保把它放在最后，这样它就有机会覆盖其他配置</span></span>
<span class="line"><span style="color:#6A737D;"># 配置解析器</span></span>
<span class="line"><span style="color:#22863A;">parserOptions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ecmaVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">parser</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;@typescript-eslint/parser&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">sourceType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">module</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ecmaFeatures</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">jsx</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6A737D;"># 配置插件</span></span>
<span class="line"><span style="color:#22863A;">plugins</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&#39;@typescript-eslint&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">vue</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">react</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">react-hooks</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">prettier</span></span>
<span class="line"><span style="color:#6A737D;"># 配置忽略</span></span>
<span class="line"><span style="color:#22863A;">ignorePatterns</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">.eslintrc.cjs</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">.eslintrc.yml</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">node_modules</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">dist</span></span>
<span class="line"><span style="color:#6A737D;"># 配置详细规则</span></span>
<span class="line"><span style="color:#22863A;">rules</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">react/jsx-uses-react</span><span style="color:#24292E;">: </span><span style="color:#032F62;">error</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">react/jsx-uses-vars</span><span style="color:#24292E;">: </span><span style="color:#032F62;">error</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">react-hooks/rules-of-hooks</span><span style="color:#24292E;">: </span><span style="color:#032F62;">error</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">react-hooks/exhaustive-deps</span><span style="color:#24292E;">: </span><span style="color:#032F62;">warn</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">indent</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">error</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">tab</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">linebreak-style</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">error</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">unix</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">quotes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">error</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">single</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">semi</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">error</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">always</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div></details><details class="details custom-block"><summary>查看 .prettierignore 配置文件</summary><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置参考 https://www.prettier.cn/docs/ignore.html</span></span>
<span class="line"><span style="color:#6A737D;"># 独立使用 prettier-ignore</span></span>
<span class="line"><span style="color:#6A737D;"># 全局配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.log</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.DS_Store</span></span>
<span class="line"><span style="color:#B392F0;">.idea</span></span>
<span class="line"><span style="color:#B392F0;">.temp</span></span>
<span class="line"><span style="color:#B392F0;">.vite_opt_cache</span></span>
<span class="line"><span style="color:#B392F0;">.vscode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">dist</span></span>
<span class="line"><span style="color:#B392F0;">cache</span></span>
<span class="line"><span style="color:#B392F0;">temp</span></span>
<span class="line"><span style="color:#B392F0;">node_modules</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置参考 https://www.prettier.cn/docs/ignore.html</span></span>
<span class="line"><span style="color:#6A737D;"># 独立使用 prettier-ignore</span></span>
<span class="line"><span style="color:#6A737D;"># 全局配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.log</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.DS_Store</span></span>
<span class="line"><span style="color:#6F42C1;">.idea</span></span>
<span class="line"><span style="color:#6F42C1;">.temp</span></span>
<span class="line"><span style="color:#6F42C1;">.vite_opt_cache</span></span>
<span class="line"><span style="color:#6F42C1;">.vscode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">dist</span></span>
<span class="line"><span style="color:#6F42C1;">cache</span></span>
<span class="line"><span style="color:#6F42C1;">temp</span></span>
<span class="line"><span style="color:#6F42C1;">node_modules</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details><details class="details custom-block"><summary>查看 .prettierrc.yaml 配置文件</summary><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置参考文档 https://prettier.io/docs/en/configuration.html</span></span>
<span class="line"><span style="color:#6A737D;"># 使用 prettier 进行格式化，使用 linters 来捕捉 bug！</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">useTabs</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 采用 tab 缩进还是空白缩进</span></span>
<span class="line"><span style="color:#85E89D;">tabWidth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># tab 键宽度</span></span>
<span class="line"><span style="color:#85E89D;">printWidth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 使用较大的打印宽度，因为 Prettier 的换行设置似乎是针对没有注释的 JavaScript.</span></span>
<span class="line"><span style="color:#85E89D;">singleQuote</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 字符串是否使用单引号</span></span>
<span class="line"><span style="color:#85E89D;">semi</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 行位是否使用分号</span></span>
<span class="line"><span style="color:#85E89D;">trailingComma</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 对于 ES5 而言, 尾逗号不能用于函数参数，因此使用它们只能用于数组</span></span>
<span class="line"><span style="color:#85E89D;">bracketSpacing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 是否保留括号中的空格 默认true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置参考文档 https://prettier.io/docs/en/configuration.html</span></span>
<span class="line"><span style="color:#6A737D;"># 使用 prettier 进行格式化，使用 linters 来捕捉 bug！</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">useTabs</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 采用 tab 缩进还是空白缩进</span></span>
<span class="line"><span style="color:#22863A;">tabWidth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># tab 键宽度</span></span>
<span class="line"><span style="color:#22863A;">printWidth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">120</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 使用较大的打印宽度，因为 Prettier 的换行设置似乎是针对没有注释的 JavaScript.</span></span>
<span class="line"><span style="color:#22863A;">singleQuote</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 字符串是否使用单引号</span></span>
<span class="line"><span style="color:#22863A;">semi</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 行位是否使用分号</span></span>
<span class="line"><span style="color:#22863A;">trailingComma</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;none&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 对于 ES5 而言, 尾逗号不能用于函数参数，因此使用它们只能用于数组</span></span>
<span class="line"><span style="color:#22863A;">bracketSpacing</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 是否保留括号中的空格 默认true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details><h2 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-label="Permalink to &quot;提交规范&quot;">​</a></h2><ul><li>使用 <code>lint-staged</code> 组织 <code>eslint</code> 和 <code>prettier</code> 两个任务</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装 lint-staged</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint-staged</span></span>
<span class="line"><span style="color:#6A737D;"># package.json 添加 lint-staged 配置项</span></span>
<span class="line"><span style="color:#6A737D;"># &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;*.{js,vue,jsx,ts,tsx,cjs}&quot;: &quot;eslint --fix&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;*.{js,vue,jsx,ts,tsx,cjs,css,less,html,md,json}&quot;: &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装 lint-staged</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint-staged</span></span>
<span class="line"><span style="color:#6A737D;"># package.json 添加 lint-staged 配置项</span></span>
<span class="line"><span style="color:#6A737D;"># &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;*.{js,vue,jsx,ts,tsx,cjs}&quot;: &quot;eslint --fix&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;*.{js,vue,jsx,ts,tsx,cjs,css,less,html,md,json}&quot;: &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>使用 <code>husky</code> 代理 <code>GitHooks</code>，<code>commit</code> 时执行 <code>lint-staged</code> 任务</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装 husky</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span></span>
<span class="line"><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#6A737D;"># 安装后自动启用Git挂钩</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scripts.prepare=&quot;husky install&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置 pre-commit 挂钩, 执行 lint-staged 任务</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.husky/pre-commit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;npx lint-staged&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装 husky</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span></span>
<span class="line"><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6A737D;"># 安装后自动启用Git挂钩</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scripts.prepare=&quot;husky install&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置 pre-commit 挂钩, 执行 lint-staged 任务</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.husky/pre-commit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;npx lint-staged&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>使用 <code>commitizen</code> 完成提交信息的规范化</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装 commitizen</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitizen</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cz-conventional-changelog</span></span>
<span class="line"><span style="color:#6A737D;"># package.json 添加 config.commitizen 配置项</span></span>
<span class="line"><span style="color:#6A737D;"># &quot;config&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#   &quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;path&quot;: &quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#   }</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span>
<span class="line"><span style="color:#6A737D;"># 配置 prepare-commit-msg 挂钩，执行 commitizen 的任务</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.husky/prepare-commit-msg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;exec &lt; /dev/tty &amp;&amp; node_modules/.bin/cz --hook || true&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装 commitizen</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitizen</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cz-conventional-changelog</span></span>
<span class="line"><span style="color:#6A737D;"># package.json 添加 config.commitizen 配置项</span></span>
<span class="line"><span style="color:#6A737D;"># &quot;config&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#   &quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">#     &quot;path&quot;: &quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#   }</span></span>
<span class="line"><span style="color:#6A737D;"># }</span></span>
<span class="line"><span style="color:#6A737D;"># 配置 prepare-commit-msg 挂钩，执行 commitizen 的任务</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.husky/prepare-commit-msg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;exec &lt; /dev/tty &amp;&amp; node_modules/.bin/cz --hook || true&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>使用 commitlint</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-wD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@commitlint/config-conventional</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@commitlint/cli</span></span>
<span class="line"><span style="color:#6A737D;"># 配置</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module.exports = { extends: [&#39;@commitlint/config-conventional&#39;] };&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitlint.config.js</span></span>
<span class="line"><span style="color:#6A737D;"># 挂载</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.husky/commit-msg</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;npx --no -- commitlint --edit \${1}&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-wD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@commitlint/config-conventional</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@commitlint/cli</span></span>
<span class="line"><span style="color:#6A737D;"># 配置</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module.exports = { extends: [&#39;@commitlint/config-conventional&#39;] };&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitlint.config.js</span></span>
<span class="line"><span style="color:#6A737D;"># 挂载</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.husky/commit-msg</span><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;npx --no -- commitlint --edit \${1}&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="测试规范提交流程" tabindex="-1">测试规范提交流程 <a class="header-anchor" href="#测试规范提交流程" aria-label="Permalink to &quot;测试规范提交流程&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 测试规范提交流程</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span></span>
<span class="line"><span style="color:#6A737D;"># 执行命令后：</span></span>
<span class="line"><span style="color:#6A737D;"># 1）lint-staged 执行 eslint 和 prettier 任务；</span></span>
<span class="line"><span style="color:#6A737D;"># 2）commitizen 执行 提交信息 填写任务；</span></span>
<span class="line"><span style="color:#6A737D;"># 3）保存并提交（:wq）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 测试规范提交流程</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span></span>
<span class="line"><span style="color:#6A737D;"># 执行命令后：</span></span>
<span class="line"><span style="color:#6A737D;"># 1）lint-staged 执行 eslint 和 prettier 任务；</span></span>
<span class="line"><span style="color:#6A737D;"># 2）commitizen 执行 提交信息 填写任务；</span></span>
<span class="line"><span style="color:#6A737D;"># 3）保存并提交（:wq）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,21),o=[e];function c(r,t,i,y,E,u){return a(),n("div",null,o)}const F=s(p,[["render",c]]);export{m as __pageData,F as default};
