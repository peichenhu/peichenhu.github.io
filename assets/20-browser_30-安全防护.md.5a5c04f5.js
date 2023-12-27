import{_ as e,c as a,o,Q as t}from"./chunks/framework.03c6a765.js";const u=JSON.parse('{"title":"HTTP 安全","description":"","frontmatter":{},"headers":[],"relativePath":"20-browser/30-安全防护.md","filePath":"20-browser/30-安全防护.md","lastUpdated":1703663478000}'),r={name:"20-browser/30-安全防护.md"},c=t('<h1 id="http-安全" tabindex="-1">HTTP 安全 <a class="header-anchor" href="#http-安全" aria-label="Permalink to &quot;HTTP 安全&quot;">​</a></h1><blockquote><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP" target="_blank" rel="noreferrer">HTTP 安全</a></p></blockquote><h2 id="浏览器同源策略" tabindex="-1">浏览器同源策略 <a class="header-anchor" href="#浏览器同源策略" aria-label="Permalink to &quot;浏览器同源策略&quot;">​</a></h2><ul><li>现代浏览器以及 HTTPS 会对非同源的请求进行拦截以保证安全</li><li>若请求链接中的协议、主机名、端口、方法等任何一个不一样，都是不同源请求</li></ul><h2 id="csp" tabindex="-1">CSP <a class="header-anchor" href="#csp" aria-label="Permalink to &quot;CSP&quot;">​</a></h2><ul><li>内容安全策略，可以在 HTML 中的 meta 标签或者服务端返回的 <code>Content-Secrity-Policy</code> 头中进行设置</li><li>可以指定资源的请求域、资源的加载方式等</li></ul><h2 id="xss" tabindex="-1">XSS <a class="header-anchor" href="#xss" aria-label="Permalink to &quot;XSS&quot;">​</a></h2><p>跨站脚本攻击，分为了持久型 XSS、反射型 XSS 和 DOM 型 XSS</p><ul><li><code>持久型 XSS</code> 是最常见的 XSS 攻击，主要通过输入框、富文本等组件<code>输入</code>一些恶意的脚本代码，存储到服务端之后，当其他用户打开页面加载该脚本时便出现攻击行为</li><li><code>反射型 XSS</code> 是需要用户点击黑客提供的<code>恶意链接</code>，该恶意链接会在跳转到正常页面的同时执行黑客脚本</li><li><code>DOM 型 XSS</code>存在于一些<code>第三方插件</code>中，如浏览器插件去<code>恶意修改页面 DOM 等方式</code> 对于 XSS 的防范主要是防范持久型 XSS，在页面的输入框和富文本提交时对字符串做过滤处理，同时在页面中只对可信的 HTML 文本做解析</li></ul><h2 id="csrf" tabindex="-1">CSRF <a class="header-anchor" href="#csrf" aria-label="Permalink to &quot;CSRF&quot;">​</a></h2><p>跨站请求伪造，当用户在正常的网站登录之后，由于同源请求会默认携带 Cookie，因此黑客可以在自己的网站中向正常网站发送<code>伪造请求</code>来冒充用户自己的操作</p><p>攻击方式主要包含通过标签的 src 属性、href 属性以及 form 的 action 属性等，通常是伪造 GET 请求</p><p>防范方式包含使用 POST 请求处理资源、服务端验证请求的 Referer、禁止第三方网站请求携带 Cookie 以及最后在请求时增加 csrftoken 字段做校验</p>',13),l=[c];function i(d,s,n,h,S,_){return o(),a("div",null,l)}const T=e(r,[["render",i]]);export{u as __pageData,T as default};
