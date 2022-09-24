"use strict";(self.webpackChunkshx_blog=self.webpackChunkshx_blog||[]).push([[692],{5050:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-7ec9e54a",path:"/js/json-nested.html",title:"json 字符串嵌套问题",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用vue web-component开发，数据通过属性嵌套,关于引号问题的解决",slug:"使用vue-web-component开发-数据通过属性嵌套-关于引号问题的解决",children:[]},{level:2,title:"json 嵌套问题 本身是没有问题的 跟原生交互的时候碰到问题就转编码 base64、url等都可以",slug:"json-嵌套问题-本身是没有问题的-跟原生交互的时候碰到问题就转编码-base64、url等都可以",children:[]}],filePathRelative:"js/json-nested.md",git:{updatedTime:1664006125e3,contributors:[{name:"shangxin",email:"1083732908@qq.com",commits:1}]}}},302:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const l=(0,a(6252).uE)('<h1 id="json-字符串嵌套问题" tabindex="-1"><a class="header-anchor" href="#json-字符串嵌套问题" aria-hidden="true">#</a> json 字符串嵌套问题</h1><h2 id="使用vue-web-component开发-数据通过属性嵌套-关于引号问题的解决" tabindex="-1"><a class="header-anchor" href="#使用vue-web-component开发-数据通过属性嵌套-关于引号问题的解决" aria-hidden="true">#</a> 使用vue web-component开发，数据通过属性嵌套,关于引号问题的解决<br><br></h2><br><blockquote><p>json 转 str</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">j2base</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//return btoa( encodeURIComponent(JSON.stringify(obj)) ); </span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//要求：不能有双引号，能处理层层引号问题</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//理想状态：基本可读性；体积不能太膨胀</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">json</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;</span><span style="color:#D7BA7D;">\\u2745</span><span style="color:#CE9178;">&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">json</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">json</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;"> + </span><span style="color:#CE9178;">&quot;00&quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">json</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">json</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">RegExp</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;"> + </span><span style="color:#CE9178;">&quot;(</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">d</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">d)&quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">), </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">word</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">$1</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">parseInt</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">10</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;"> + (</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">) </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  });</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">json</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><br><blockquote><p>str 转 json</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//🌟 思想是层层解析 先解析最外层的</span></span>\n<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">base2j</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">st</span><span style="color:#D4D4D4;">) {     </span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//return JSON.parse( decodeURIComponent(atob(s)) ); </span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">st</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;</span><span style="color:#D7BA7D;">\\u2745</span><span style="color:#CE9178;">&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">st</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">st</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">RegExp</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;"> + </span><span style="color:#CE9178;">&quot;(</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">d</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">d)&quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">), </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">word</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">$1</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">parseInt</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">10</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;"> == </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;"> + (</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">);  </span><span style="color:#6A9955;">// 🌟  -1 是精髓  只有是1才转换</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">) </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">magic</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  });</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">st</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">parse</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">st</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><br><blockquote><p>demo</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj1</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">a:</span><span style="color:#B5CEA8;">111</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">b:</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">c:</span><span style="color:#CE9178;">&#39;单引号&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">d:</span><span style="color:#CE9178;">&quot;双引号&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj2</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">component:</span><span style="color:#CE9178;">&quot;内容&lt;span msg=</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">{❅01❅a❅01❅:111,❅01❅b❅01❅:[1,2],❅01❅c❅01❅:❅01❅单引号❅01❅,❅01❅d❅01❅:❅01❅双引号❅01❅}</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">&gt;&lt;/span&gt;&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">mark:</span><span style="color:#CE9178;">&#39;嵌套组件&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;">// json to str</span></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">atob</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">j2base</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj2</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;atob&#39;</span><span style="color:#D4D4D4;">,</span><span style="color:#9CDCFE;">atob</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;">//str to json</span></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;{❅01❅component❅01❅:❅01❅内容&lt;span msg=</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">❅01❅{❅02❅a❅02❅:111,❅02❅b❅02❅:[1,2],❅02❅c❅02❅:❅02❅单引号❅02❅,❅02❅d❅02❅:❅02❅双引号❅02❅}</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">❅01❅&gt;&lt;/span&gt;❅01❅,❅01❅mark❅01❅:❅01❅嵌套组件❅01❅}&quot;</span></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">btoa</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">base2j</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">btoa</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="json-嵌套问题-本身是没有问题的-跟原生交互的时候碰到问题就转编码-base64、url等都可以" tabindex="-1"><a class="header-anchor" href="#json-嵌套问题-本身是没有问题的-跟原生交互的时候碰到问题就转编码-base64、url等都可以" aria-hidden="true">#</a> json 嵌套问题 本身是没有问题的 跟原生交互的时候碰到问题就转编码 base64、url等都可以</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj3</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">a3:</span><span style="color:#CE9178;">&quot;{</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">a</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">:111,</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">b</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">:[1,2],</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">c</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">:</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">单引号</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">,</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">d</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">:</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">双引号</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">}&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj2str</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj3</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">//&quot;{\\&quot;a3\\&quot;:\\&quot;{\\\\\\&quot;a\\\\\\&quot;:111,\\\\\\&quot;b\\\\\\&quot;:[1,2],\\\\\\&quot;c\\\\\\&quot;:\\\\\\&quot;单引号\\\\\\&quot;,\\\\\\&quot;d\\\\\\&quot;:\\\\\\&quot;双引号\\\\\\&quot;}\\&quot;}&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">str32obj</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">parse</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj2str</span><span style="color:#D4D4D4;">) </span></span>\n<span class="line"><span style="color:#6A9955;">/* </span></span>\n<span class="line"><span style="color:#6A9955;">{</span></span>\n<span class="line"><span style="color:#6A9955;">  a3: &quot;{\\&quot;a\\&quot;:111,\\&quot;b\\&quot;:[1,2],\\&quot;c\\&quot;:\\&quot;单引号\\&quot;,\\&quot;d\\&quot;:\\&quot;双引号\\&quot;}&quot;,</span></span>\n<span class="line"><span style="color:#6A9955;">} </span></span>\n<span class="line"><span style="color:#6A9955;">*/</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',13),p={render:function(s,n){return l}}}}]);