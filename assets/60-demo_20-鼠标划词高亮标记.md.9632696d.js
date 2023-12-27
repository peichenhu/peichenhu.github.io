import{E as O,j as P,O as I,a7 as u,a8 as C,d as S,x as $,a9 as R,_ as M,o as _,c as k,p as L,m as H,k as y,C as V,H as x,w as T,a as j,Q as J}from"./chunks/framework.03c6a765.js";const z=`
.use-selection-mark {
	position: fixed;
	top: 0;
	left: 0;
	height: 20px;
	width: auto;
	background-color: #fefefe;
	font-size: 14px;
	line-height: 20px;
	color: #333;
	padding: 2px 4px;
	border-radius: 4px;
	transform: translate(-50%, -100%);
	user-select: none;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
	box-sizing: content-box;
}
.use-selection-mark-order {
	display: inline-block;
	min-width: 2em;
	text-align: center;
}
.use-selection-mark-edit {
	display: inline-block;
	padding: 0 4px;
	margin: 0 4px;
	border-left: 1px solid #ccc;
	border-right: 1px solid #ccc;
	cursor: pointer;
}
.use-selection-mark-delete {
	display: inline-block;
	cursor: pointer;
}
.use-selection-mark-edit:hover,
.use-selection-mark-delete:hover {
    color: black;
    font-weight: 500;
}
`;function Y(s){const n=`${s.name}`;let e=document.head.querySelector(`style[name=${n}]`);e||(e=document.createElement("style"),e.setAttribute("type","text/css"),e.setAttribute("name",n),document.head.appendChild(e)),e.textContent=`
	::highlight(${n}) {
		background-color: ${s.bgColor};
		color: ${s.color};
	}`}function Q(s,n){const e=document.querySelector(".use-selection-mark");if(e)return e;const l=u("div",{class:"use-selection-mark"},[u("span",{class:"use-selection-mark-order"},"1"),u("span",{class:"use-selection-mark-edit",onClick:n},"编辑"),u("span",{class:"use-selection-mark-delete",onClick:s},"删除")]),o=u("style",{type:"text/css",name:"use-selection-mark-anchor"},z);return C(l,document.body),C(o,document.head),l.el}function U(){try{return new window.Highlight}catch(s){return console.error(s),null}}function X(){return CSS.highlights}function G(s){if(!(s instanceof Element))return"*";const n=[];for(;s&&s.nodeName&&s.nodeName.toLowerCase()!=="html";){let e=s.nodeName.toLowerCase();if(s.id){e+="#"+s.id,n.unshift(e);break}else if(s.parentElement){let l=Array.from(s.parentElement.children);if(l.some(a=>a!==s&&a.nodeName===s.nodeName)){const a=l.indexOf(s)+1;e+=":nth-child("+a+")"}n.unshift(e)}s=s.parentElement}return n.join(" > ")}function v(s){const n=s.parentElement,e=Array.from(n.childNodes);return{selector:G(n),index:e.indexOf(s)}}function q(s,n,e){const l=Array.from(n.values());return e.value=l.map((o,a)=>{const{selector:t,index:c}=v(o.startContainer),{selector:E,index:p}=v(o.endContainer);return{index:a,live:!0,content:o.toString().trim(),startOffset:o.startOffset,endOffset:o.endOffset,startNodeParent:t,startNodeIndex:c,endNodeParent:E,endNodeIndex:p}}),localStorage.setItem(s,JSON.stringify(e.value)),e}function K(s,n,e,l){const o=JSON.parse(localStorage.getItem(s)||"[]");e.value=o.map(a=>{const t=document.querySelector(a.startNodeParent),c=document.querySelector(a.endNodeParent);if(t&&c){const E=t.childNodes[a.startNodeIndex],p=c.childNodes[a.endNodeIndex],i=new Range;E&&i.setStart(E,a.startOffset),p&&i.setEnd(p,a.endOffset);const d=l.contains(i.startContainer),m=l.contains(i.endContainer),b=i.toString().trim()===a.content;d&&m&&b&&a.content?n.add(i):a.live=!1}return a})}function W(s,n){return document.caretPositionFromPoint?document.caretPositionFromPoint(s,n):document.caretRangeFromPoint?document.caretRangeFromPoint(s,n):document.createRange()}function A(s,n){const e=n.isPointInRange(s.startContainer,s.startOffset),l=n.isPointInRange(s.endContainer,s.endOffset),o=s.isPointInRange(n.startContainer,n.startOffset),a=s.isPointInRange(n.endContainer,n.endOffset);return e||l||o||a}function Z(s,n,e,l){const o=document.getSelection();if(o&&o.type==="Range"&&o.anchorNode&&o.focusNode){const a=new Range;a.setStart(o.anchorNode,o.anchorOffset),a.setEnd(o.focusNode,o.focusOffset);const t=Array.from(n.values()).some(i=>A(a,i)),c=l.contains(a.startContainer),E=l.contains(a.endContainer),p=!!a.toString().trim();!t&&c&&E&&p&&(n.add(a),q(s,n,e))}}function ss(s){const n=O([]),e=Object.assign({name:"use-selection-mark",bgColor:"rgba(255, 255, 0, 0.5)",color:"unset"},s.options||{}),l=U(),o=X();let a=null,t=null,c=null,E=!1,p=null;P(()=>{I(()=>{a=Q(i,d);const r=document.querySelector(s.rootSelector);console.log(a,r),r&&l&&o&&(console.time("性能统计__loadStore"),o.set(e.name,l),Y(e),K(e.name,l,n,r),document.addEventListener("mouseup",()=>b(r)),document.addEventListener("mousemove",D),document.addEventListener("selectionchange",B),console.timeEnd("性能统计__loadStore"))})});function i(){const r=n.value[c];typeof s.onDeleteBefore=="function"&&s.onDeleteBefore(r)===!1||(t&&l.delete(t),q(e.name,l,n),m(),typeof s.onDeleteAfter=="function"&&s.onDeleteAfter(r))}function d(){typeof s.onEdit=="function"?s.onEdit(c,n):alert(`编辑 store[${c}]`)}function m(){t=null,a.style.left="-10000px",a.style.top="-10000px"}function b(r){console.time("性能统计__selectionHandle"),E&&a&&Z(e.name,l,n,r),E=!1,console.timeEnd("性能统计__selectionHandle")}function B(){E=!0}function D(r){const g=W(r.clientX,r.clientY);for(let F of l.values())if(A(g,F)){t=F;const{x:N,y:w}=t.getClientRects()[0],h=Array.from(l.values());c=h.indexOf(t)+1,a.children[0].textContent=`${c}/${h.length}`,a.style.left=N+"px",a.style.top=w+"px",p&&clearTimeout(p);break}else p&&clearTimeout(p),p=setTimeout(()=>{m(),p=null},500)}return{deleteRange:i,editRange:d,store:n,hi:l,cssHi:o,anchorElement:a}}const ns=S({setup(){const{store:s}=ss({rootSelector:".demo> .workspace"});$(s,()=>{console.log("useSelectionMark--store",R(s))})}});const f=s=>(L("data-v-ce50b1fe"),s=s(),H(),s),as={class:"demo"},es=f(()=>y("div",null," 非工作区（鼠标划词没有效果）： Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam quia maxime repellat labore omnis ea molestiae excepturi quod dicta porro debitis impedit consequatur similique, obcaecati esse eveniet facilis fuga! ",-1)),ls=f(()=>y("br",null,null,-1)),os=f(()=>y("div",{class:"workspace"}," 工作区（鼠标划词有效果）： Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam quia maxime repellat labore omnis ea molestiae excepturi quod dicta porro debitis impedit consequatur similique, obcaecati esse eveniet facilis fuga! ",-1)),ts=[es,ls,os];function ps(s,n,e,l,o,a){return _(),k("div",as,ts)}const cs=M(ns,[["render",ps],["__scopeId","data-v-ce50b1fe"]]),rs=y("h1",{id:"鼠标划词高亮标记",tabindex:"-1"},[j("鼠标划词高亮标记 "),y("a",{class:"header-anchor",href:"#鼠标划词高亮标记","aria-label":'Permalink to "鼠标划词高亮标记"'},"​")],-1),is=y("p",null,"基于 SelectionAPI 和 CSS.highlights 实现。",-1),Es=J(`<details class="details custom-block"><summary>查看代码 index.vue</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { toValue, watch, defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useSelectionMark } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./useSelectionMark&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useSelectionMark</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">			rootSelector: </span><span style="color:#9ECBFF;">&#39;.demo&gt; .workspace&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(store, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;useSelectionMark--store&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">toValue</span><span style="color:#E1E4E8;">(store));</span></span>
<span class="line"><span style="color:#E1E4E8;">		});</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;demo&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			非工作区（鼠标划词没有效果）： Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam quia</span></span>
<span class="line"><span style="color:#E1E4E8;">			maxime repellat labore omnis ea molestiae excepturi quod dicta porro debitis impedit consequatur similique,</span></span>
<span class="line"><span style="color:#E1E4E8;">			obcaecati esse eveniet facilis fuga!</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;workspace&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			工作区（鼠标划词有效果）： Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam quia maxime</span></span>
<span class="line"><span style="color:#E1E4E8;">			repellat labore omnis ea molestiae excepturi quod dicta porro debitis impedit consequatur similique,</span></span>
<span class="line"><span style="color:#E1E4E8;">			obcaecati esse eveniet facilis fuga!</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.demo</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&gt; </span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dashed</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lightgray</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">7</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { toValue, watch, defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useSelectionMark } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./useSelectionMark&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">store</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useSelectionMark</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">			rootSelector: </span><span style="color:#032F62;">&#39;.demo&gt; .workspace&#39;</span></span>
<span class="line"><span style="color:#24292E;">		});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(store, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;useSelectionMark--store&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">toValue</span><span style="color:#24292E;">(store));</span></span>
<span class="line"><span style="color:#24292E;">		});</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;demo&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			非工作区（鼠标划词没有效果）： Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam quia</span></span>
<span class="line"><span style="color:#24292E;">			maxime repellat labore omnis ea molestiae excepturi quod dicta porro debitis impedit consequatur similique,</span></span>
<span class="line"><span style="color:#24292E;">			obcaecati esse eveniet facilis fuga!</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;workspace&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			工作区（鼠标划词有效果）： Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam quia maxime</span></span>
<span class="line"><span style="color:#24292E;">			repellat labore omnis ea molestiae excepturi quod dicta porro debitis impedit consequatur similique,</span></span>
<span class="line"><span style="color:#24292E;">			obcaecati esse eveniet facilis fuga!</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.demo</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	&gt; </span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dashed</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lightgray</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">7</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div></details>`,1),ds=JSON.parse('{"title":"鼠标划词高亮标记","description":"","frontmatter":{},"headers":[],"relativePath":"60-demo/20-鼠标划词高亮标记.md","filePath":"60-demo/20-鼠标划词高亮标记.md","lastUpdated":1703663478000}'),ys={name:"60-demo/20-鼠标划词高亮标记.md"},ms=S({...ys,setup(s){return(n,e)=>{const l=V("ClientOnly");return _(),k("div",null,[rs,is,x(l,null,{default:T(()=>[x(cs)]),_:1}),Es])}}});export{ds as __pageData,ms as default};
