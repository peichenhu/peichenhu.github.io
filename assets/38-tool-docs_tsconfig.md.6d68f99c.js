import{_ as s,c as n,o as a,Q as t}from"./chunks/framework.03c6a765.js";const b=JSON.parse('{"title":"tsconfig 文件","description":"","frontmatter":{},"headers":[],"relativePath":"38-tool-docs/tsconfig.md","filePath":"38-tool-docs/tsconfig.md","lastUpdated":1703663478000}'),l={name:"38-tool-docs/tsconfig.md"},p=t(`<h1 id="tsconfig-文件" tabindex="-1">tsconfig 文件 <a class="header-anchor" href="#tsconfig-文件" aria-label="Permalink to &quot;tsconfig 文件&quot;">​</a></h1><blockquote><p>使用 <code>tsc --init</code> 快速生成, 参观 <a href="https://www.tslang.cn/docs/handbook/compiler-options.html" target="_blank" rel="noreferrer">docs</a> 阅读有关此文件的详细信息.</p></blockquote><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;include&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;相对 tsconfig.json 的文件或文件夹路径&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;exclude&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;与 include 作用相反&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;继承一个配置&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">/* 基础配置 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;incremental&quot;: true, 			//  启用增量编译</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;target&quot;: &quot;es5&quot;, 				//  指定生成的 ECMAScript 目标版本：“ES3”（默认值）、“ES5”、“ESNEXT” 等等</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;module&quot;: &quot;commonjs&quot;, 			//  指定生成的模块代码：&#39;commonjs&#39;、&#39;es2020&#39; 或 &#39;ESNext&#39; 等等</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;lib&quot;: [], 						//  指定要包含在编译中的库文件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;allowJs&quot;: true, 				//  允许编译 javascript 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;checkJs&quot;: true, 				//  报告.js文件中的错误</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;jsx&quot;: &quot;preserve&quot;, 				//  指定 JSX 代码生成：“preserve”、“react” 等等</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;declaration&quot;: true, 			//  生成相应的 “.d.ts” 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;declarationMap&quot;: true, 			//  为每个相应的 “.d.ts” 文件生成一个源映射</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;sourceMap&quot;: true, 				//  生成相应的 “.map” 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;outFile&quot;: &quot;./&quot;, 				//  将输出连接并发送到单个文件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;outDir&quot;: &quot;./&quot;, 					//  将输出结构重定向到目录</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;rootDir&quot;: &quot;./&quot;, 				//  指定输入文件的根目录。用于使用 --outDir 控制输出目录结构</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;composite&quot;: true, 				//  启用项目编译</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;tsBuildInfoFile&quot;: &quot;./&quot;, 		//  指定用于存储增量编译信息的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;removeComments&quot;: true, 			//  不要向输出发出注释</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noEmit&quot;: true, 					//  不要发出输出</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;importHelpers&quot;: true, 			//  从“tslib”导入发射帮助程序</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;downlevelIteration&quot;: true, 		//  当目标为“ES5”或“ES3”时，为“for of”、spread 和 destructuring 中的可迭代项提供完全支持</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;isolatedModules&quot;: true 			//  将每个文件转换为一个单独的模块（类似于“ts.transfileModule”</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// /* 严格类型检查选项 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;strict&quot;: true, 							// 启用所有严格的类型检查选项。</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;alwaysStrict&quot;: true, 					// 在严格模式下进行分析，并对每个源文件发出 “use strict”</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noImplicitAny&quot;: true, 					// 在具有隐含 “any” 类型的表达式和声明上引发错误</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noImplicitThis&quot;: true, 					// 在具有隐含 “any” 类型的 “this” 表达式上引发错误</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;strictNullChecks&quot;: true, 				// 启用严格的空检查</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;strictFunctionTypes&quot;: true, 			// 启用对函数类型的严格检查</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;strictBindCallApply&quot;: true, 			// 对函数启用严格的“绑定”、“调用”和“应用”方法</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;strictPropertyInitialization&quot;: true, 	// 启用对类中属性初始化的严格检查</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// /* 附加检查 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noUnusedLocals&quot;: true, 						// 报告未使用的本地文件的错误</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noUnusedParameters&quot;: true, 					// 报告未使用参数的错误</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noImplicitReturns&quot;: true, 					// 当函数中并非所有代码路径都返回值时，报告错误</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noFallthroughCasesInSwitch&quot;: true, 			// 在switch语句中报告失败案例的错误</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noUncheckedIndexedAccess&quot;: true, 			// 在索引签名结果中包括“未定义”</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noImplicitOverride&quot;: true, 					// 确保用“override”修饰符标记派生类中的重写成员</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;noPropertyAccessFromIndexSignature&quot;: true, 	// 需要索引签名中未声明的属性才能使用元素访问</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">/* 模块解析相关选项 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;moduleResolution&quot;: &quot;node&quot;,                  /* 指定模块解析策略：“node” 或 “classic” 等等 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;baseUrl&quot;: &quot;./&quot;,                             /* 用于解析非绝对模块名称的基目录 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;paths&quot;: {},                                 /* 将导入重新映射到相对于“baseUrl”的查找位置的一系列条目 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;rootDirs&quot;: [],                              /* 根文件夹的列表，其组合内容表示运行时项目的结构 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;typeRoots&quot;: [],                             /* 要包含其中的类型定义的文件夹列表 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;types&quot;: [],                                 /* 要包含在编译中的类型声明文件 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;allowSyntheticDefaultImports&quot;: true,        /* 允许默认导入没有默认导出的模块 (import * as x from &#39;x&#39;) */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;esModuleInterop&quot;: true,                     /* 通过为所有导入创建命名空间对象，实现CommonJS和ES模块之间的发射互操作性。 */,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;preserveSymlinks&quot;: true,                    /* 不要解析符号链接的真实路径。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;allowUmdGlobalAccess&quot;: true,                /* 允许从模块访问UMD全局。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">/* 源映射选项 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;sourceRoot&quot;: &quot;&quot;,                            /* 指定调试器应定位TypeScript文件的位置，而不是源位置 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;mapRoot&quot;: &quot;&quot;,                               /* 指定调试器应定位映射文件的位置，而不是生成的位置 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;inlineSourceMap&quot;: true,                     /* 发射具有源映射的单个文件，而不是具有单独的文件 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;inlineSources&quot;: true,                       /* 将源与源映射一起发射到单个文件中；要求设置“--inlineSourceMap”或“--sourceMap” */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">/* 实验选项 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;experimentalDecorators&quot;: true,              /* 启用对ES7装饰器的实验性支持 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;emitDecoratorMetadata&quot;: true,               /* 为decorator启用对发射类型元数据的实验性支持 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">/* 高级选项 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;skipLibCheck&quot;: true,                        /* 跳过声明文件的类型检查。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// &quot;forceConsistentCasingInFileNames&quot;: true     /* 不允许对同一文件进行大小写不一致的引用 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;include&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;相对 tsconfig.json 的文件或文件夹路径&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;exclude&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;与 include 作用相反&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;继承一个配置&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">/* 基础配置 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;incremental&quot;: true, 			//  启用增量编译</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;target&quot;: &quot;es5&quot;, 				//  指定生成的 ECMAScript 目标版本：“ES3”（默认值）、“ES5”、“ESNEXT” 等等</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;module&quot;: &quot;commonjs&quot;, 			//  指定生成的模块代码：&#39;commonjs&#39;、&#39;es2020&#39; 或 &#39;ESNext&#39; 等等</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;lib&quot;: [], 						//  指定要包含在编译中的库文件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;allowJs&quot;: true, 				//  允许编译 javascript 文件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;checkJs&quot;: true, 				//  报告.js文件中的错误</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;jsx&quot;: &quot;preserve&quot;, 				//  指定 JSX 代码生成：“preserve”、“react” 等等</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;declaration&quot;: true, 			//  生成相应的 “.d.ts” 文件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;declarationMap&quot;: true, 			//  为每个相应的 “.d.ts” 文件生成一个源映射</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;sourceMap&quot;: true, 				//  生成相应的 “.map” 文件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;outFile&quot;: &quot;./&quot;, 				//  将输出连接并发送到单个文件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;outDir&quot;: &quot;./&quot;, 					//  将输出结构重定向到目录</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;rootDir&quot;: &quot;./&quot;, 				//  指定输入文件的根目录。用于使用 --outDir 控制输出目录结构</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;composite&quot;: true, 				//  启用项目编译</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;tsBuildInfoFile&quot;: &quot;./&quot;, 		//  指定用于存储增量编译信息的文件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;removeComments&quot;: true, 			//  不要向输出发出注释</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noEmit&quot;: true, 					//  不要发出输出</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;importHelpers&quot;: true, 			//  从“tslib”导入发射帮助程序</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;downlevelIteration&quot;: true, 		//  当目标为“ES5”或“ES3”时，为“for of”、spread 和 destructuring 中的可迭代项提供完全支持</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;isolatedModules&quot;: true 			//  将每个文件转换为一个单独的模块（类似于“ts.transfileModule”</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// /* 严格类型检查选项 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;strict&quot;: true, 							// 启用所有严格的类型检查选项。</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;alwaysStrict&quot;: true, 					// 在严格模式下进行分析，并对每个源文件发出 “use strict”</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noImplicitAny&quot;: true, 					// 在具有隐含 “any” 类型的表达式和声明上引发错误</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noImplicitThis&quot;: true, 					// 在具有隐含 “any” 类型的 “this” 表达式上引发错误</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;strictNullChecks&quot;: true, 				// 启用严格的空检查</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;strictFunctionTypes&quot;: true, 			// 启用对函数类型的严格检查</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;strictBindCallApply&quot;: true, 			// 对函数启用严格的“绑定”、“调用”和“应用”方法</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;strictPropertyInitialization&quot;: true, 	// 启用对类中属性初始化的严格检查</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// /* 附加检查 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noUnusedLocals&quot;: true, 						// 报告未使用的本地文件的错误</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noUnusedParameters&quot;: true, 					// 报告未使用参数的错误</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noImplicitReturns&quot;: true, 					// 当函数中并非所有代码路径都返回值时，报告错误</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noFallthroughCasesInSwitch&quot;: true, 			// 在switch语句中报告失败案例的错误</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noUncheckedIndexedAccess&quot;: true, 			// 在索引签名结果中包括“未定义”</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noImplicitOverride&quot;: true, 					// 确保用“override”修饰符标记派生类中的重写成员</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;noPropertyAccessFromIndexSignature&quot;: true, 	// 需要索引签名中未声明的属性才能使用元素访问</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">/* 模块解析相关选项 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;moduleResolution&quot;: &quot;node&quot;,                  /* 指定模块解析策略：“node” 或 “classic” 等等 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;baseUrl&quot;: &quot;./&quot;,                             /* 用于解析非绝对模块名称的基目录 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;paths&quot;: {},                                 /* 将导入重新映射到相对于“baseUrl”的查找位置的一系列条目 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;rootDirs&quot;: [],                              /* 根文件夹的列表，其组合内容表示运行时项目的结构 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;typeRoots&quot;: [],                             /* 要包含其中的类型定义的文件夹列表 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;types&quot;: [],                                 /* 要包含在编译中的类型声明文件 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;allowSyntheticDefaultImports&quot;: true,        /* 允许默认导入没有默认导出的模块 (import * as x from &#39;x&#39;) */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;esModuleInterop&quot;: true,                     /* 通过为所有导入创建命名空间对象，实现CommonJS和ES模块之间的发射互操作性。 */,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;preserveSymlinks&quot;: true,                    /* 不要解析符号链接的真实路径。 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;allowUmdGlobalAccess&quot;: true,                /* 允许从模块访问UMD全局。 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">/* 源映射选项 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;sourceRoot&quot;: &quot;&quot;,                            /* 指定调试器应定位TypeScript文件的位置，而不是源位置 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;mapRoot&quot;: &quot;&quot;,                               /* 指定调试器应定位映射文件的位置，而不是生成的位置 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;inlineSourceMap&quot;: true,                     /* 发射具有源映射的单个文件，而不是具有单独的文件 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;inlineSources&quot;: true,                       /* 将源与源映射一起发射到单个文件中；要求设置“--inlineSourceMap”或“--sourceMap” */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">/* 实验选项 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;experimentalDecorators&quot;: true,              /* 启用对ES7装饰器的实验性支持 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;emitDecoratorMetadata&quot;: true,               /* 为decorator启用对发射类型元数据的实验性支持 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">/* 高级选项 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;skipLibCheck&quot;: true,                        /* 跳过声明文件的类型检查。 */</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// &quot;forceConsistentCasingInFileNames&quot;: true     /* 不允许对同一文件进行大小写不一致的引用 */</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div>`,3),o=[p];function e(r,c,u,i,E,y){return a(),n("div",null,o)}const D=s(l,[["render",e]]);export{b as __pageData,D as default};
