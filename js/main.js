(()=>{var T=[],s={q:e=>document.querySelector(e),qa:e=>document.querySelectorAll(e),gId:e=>document.getElementById(e),debounce(e,t,o){let n;return function(){let i=arguments;clearTimeout(n),n=setTimeout(()=>{n=null,o||e.apply(this,i)},t),o&&!n&&e.apply(this,i)}},wrap(e,t,o={}){if(typeof t=="string"){t=document.createElement(t);for(let[n,i]of Object.entries(o))t.setAttribute(n,i)}e.parentNode.insertBefore(t,e),t.appendChild(e)},urlFor(e){return/^(#|\/\/|http(s)?:)/.test(e)?e:(window.ASYNC_CONFIG.root+e).replace(/\/{2,}/g,"/")},siblings:(e,t)=>[...e.parentNode.children].filter(o=>t?o!==e&&o.matches(t):o!==e),message(e,t="success"){let o=document.createElement("div");o.className=`trm-message ${t}`,o.style.top=`${30+T.length*60}px`,o.innerText=e,document.body.append(o),T.push(o),setTimeout(()=>{T=T.filter(n=>n!==o),document.body.removeChild(o),T.forEach((n,i)=>{n.style.top=`${30+i*60}px`})},2e3)},loadScript(e,t){return new Promise((o,n)=>{if(t)o();else{let i=document.createElement("script");i.src=e,i.setAttribute("async","false"),i.onerror=n,i.onload=()=>o(),document.head.appendChild(i)}})},runScriptBlock(e){let t=e.text||e.textContent||e.innerHTML||"",o=document.head||document.querySelector("head")||document.documentElement,n=document.createElement("script");if(t.match("document.write"))return console&&console.log&&console.log("Script contains document.write. Can\u2019t be executed correctly. Code skipped "),!1;try{n.appendChild(document.createTextNode(t))}catch{n.text=t}o.appendChild(n),o.contains(n)&&o.removeChild(n)},icons(e,t="font"){return t==="symbol"?`<svg class="symbol-icon " aria-hidden="true"><use xlink:href="#${e}"></use></svg>`:`<i class="iconfont ${e}"></i>`},diffDate:(e,t=!1)=>{let o=new Date,n=new Date(e),i=o.getTime()-n.getTime(),r=1e3*60,c=r*60,a=c*24,m=a*30,l;if(t){let h=i/m,d=i/a,p=i/c,g=i/r;h>12?l=n.toISOString().slice(0,10):h>=1?l=parseInt(h.toString())+" "+window.ASYNC_CONFIG.date_suffix.month:d>=1?l=parseInt(d.toString())+" "+window.ASYNC_CONFIG.date_suffix.day:p>=1?l=parseInt(p.toString())+" "+window.ASYNC_CONFIG.date_suffix.hour:g>=1?l=parseInt(g.toString())+" "+window.ASYNC_CONFIG.date_suffix.min:l=window.ASYNC_CONFIG.date_suffix.just}else l=parseInt((i/a).toString());return l},getRandomItem(e){if(Array.isArray(e)){if(e.length===0)return;let t=Math.floor(Math.random()*e.length);return e[t]}return e},scrollBarWidth(){let e=document.createElement("div");e.className="async-scrollbar__wrap",e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);let t=e.offsetWidth;e.style.overflow="scroll";let o=document.createElement("div");o.style.width="100%",e.appendChild(o);let n=o.offsetWidth;return e.parentNode.removeChild(e),t-n},clickoutside(e,t){return t.includes(e)?!1:e.parentElement?s.clickoutside(e.parentElement,t):!0},isInViewPortOfOne(e){let t=s.viewPortHeight(),n=s.scrollTop()+t,{bottom:i,top:r,height:c}=e.getBoundingClientRect();return i>0&&r<n?{is:!0,ratio:r<0?Math.abs(r/c):0}:{is:!1}},scrollTop(){let e=window.pageXOffset!==void 0,t=(document.compatMode||"")==="CSS1Compat";return e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop},viewPortHeight(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}};var B=(e=600)=>new Promise(t=>{s.q("html").classList.add("is-animating"),s.q(".trm-scroll-container").style.opacity="0",setTimeout(()=>{s.q("html").classList.remove("is-animating"),s.q(".trm-scroll-container").style.opacity="1",t()},e)}),L=(e=600)=>{let t=s.q("#trm-scroll-container"),o=s.q(".trm-mode-swich-animation-frame");return new Promise(n=>{o.classList.add("trm-active"),t.style.opacity="0",setTimeout(()=>{setTimeout(()=>{o.classList.remove("trm-active"),t.style.opacity="1"},e),n()},e)})},R=()=>{document.body.classList.toggle("trm-single-column")},j=()=>{let e=document.body,t=document.createElement("button");t.type="button",t.title=window.ASYNC_CONFIG.i18n.exit_read_mode,t.className="trm-exit-readmode trm-glow",t.innerHTML=s.icons(window.ASYNC_CONFIG.icons.close,window.ASYNC_CONFIG.icontype);let o=()=>new Promise(r=>{let c=document.getElementById("article-container");if(c){let a=Array.from(c.children);for(let m=0;m<a.length;m++){let l=a[m],h=s.isInViewPortOfOne(l);if(h.is){r({el:l,ratio:h.ratio});return}}r()}else r()}),n=r=>{if(r&&r.ratio>0){let{top:c,height:a}=r.el.getBoundingClientRect(),m=r.ratio*a+c+s.scrollTop();window.scrollTo({top:m})}},i=()=>{o().then(r=>{e.classList.remove("trm-read-mode"),t.removeEventListener("click",i),t.remove(),n(r)})};o().then(r=>{e.classList.add("trm-read-mode"),e.appendChild(t),t.addEventListener("click",i),n(r)})},W=e=>{L().then(()=>{let t=e==="style-dark"?"add":"remove";s.q(".trm-mode-swich-animation").classList[t]("trm-active"),document.documentElement.classList[t]("dark"),localStorage.setItem("theme-mode",e),S(),typeof window.changeGiscusTheme=="function"&&window.changeGiscusTheme()})},S=(e="--theme-bg-color")=>{let t=getComputedStyle(document.documentElement).getPropertyValue(e),o=s.q('meta[name="theme-color"]');t&&o&&(o.content=t)},z=(e,t,o)=>{let n=s.q("#post-toc");n&&!n.classList.contains("fixed")&&(e===void 0&&(e=!n.classList.contains("active")),e&&(t&&o?(o+n.clientHeight>window.innerHeight&&(o=Math.max(window.innerHeight-n.clientHeight,0)),t+n.clientWidth>window.innerWidth&&(t=Math.max(window.innerWidth-n.clientWidth,0)),n.style.left=`${t}px`,n.style.top=`${o}px`,n.style.right="unset",n.style.bottom="unset"):(n.style.removeProperty("left"),n.style.removeProperty("top"),n.style.removeProperty("right"),n.style.removeProperty("bottom"))),e?n.classList.add("active"):n.classList.remove("active"))},v={pageLoading:B,themeLoading:L,switchSingleColumn:R,switchReadMode:j,switchThemeMode:W,setThemeColor:S,switchToc:z};var C=class{constructor(t){this.name="HeadPlugin";this.isSwupPlugin=!0;this.defaultOptions={persistTags:!1,persistAssets:!1,specialTags:!1};this.getHeadAndReplace=()=>{let t=this.getHeadChildren(),o=this.getNextHeadChildren();this.replaceTags(t,o)};this.getHeadChildren=()=>document.head.children;this.getNextHeadChildren=()=>{let t=this.swup.cache.getCurrentPage().originalContent.replace("<head",'<div id="swupHead"').replace("</head>","</div>"),o=document.createElement("div");o.innerHTML=t;let n=o.querySelector("#swupHead").children;return o.innerHTML="",o=null,n};this.replaceTags=(t,o)=>{let n=document.head,i=Boolean(document.querySelector("[data-swup-theme]")),r=this.getTagsToAdd(t,o,i),c=this.getTagsToRemove(t,o);c.reverse().forEach(a=>{n.removeChild(a.tag)}),r.forEach(a=>{n.insertBefore(a.tag,n.children[a.index+1]||null)}),this.swup.log(`Removed ${c.length} / added ${r.length} tags in head`)};this.compareTags=(t,o)=>{let n=t.outerHTML,i=o.outerHTML;return n===i};this.getTagsToRemove=(t,o)=>{let n=[];for(let i=0;i<t.length;i++){let r=null;for(let c=0;c<o.length;c++)if(this.compareTags(t[i],o[c])){r=c;break}r==null&&t[i].getAttribute("data-async-theme")===null&&!this.isMatchesTag(t[i],this.options.persistTags)&&n.push({tag:t[i]})}return n};this.getTagsToAdd=(t,o,n)=>{let i=[];for(let r=0;r<o.length;r++){let c=null;for(let a=0;a<t.length;a++)if(this.compareTags(t[a],o[r])){c=a;break}c==null&&!this.isMatchesTag(o[r],this.options.specialTags)&&i.push({index:n?r+1:r,tag:o[r]})}return i};this.isMatchesTag=(t,o=this.options.persistTags)=>typeof o=="function"?o(t):typeof o=="string"?t.matches(o):Boolean(o);this.updateHtmlLangAttribute=()=>{let t=document.documentElement,n=new DOMParser().parseFromString(this.swup.cache.getCurrentPage().originalContent,"text/html").documentElement.lang;t.lang!==n&&(this.swup.log(`Updated lang attribute: ${t.lang} > ${n}`),t.lang=n)};this.options={...this.defaultOptions,...t},this.options.persistAssets&&!this.options.persistTags&&(this.options.persistTags="link[rel=stylesheet], script[src], style")}mount(){this.swup.on("contentReplaced",this.getHeadAndReplace),this.swup.on("contentReplaced",this.updateHtmlLangAttribute)}unmount(){this.swup.off("contentReplaced",this.getHeadAndReplace),this.swup.off("contentReplaced",this.updateHtmlLangAttribute)}},H=C;var V=e=>Array.prototype.slice.call(e),E=class{constructor(t={}){this.name="ScriptPlugin";this.isSwupPlugin=!0;this.defaultOptions={selectors:"script[data-swup-reload-script]"};this.getScriptAndInsert=()=>{let t=this.getNextScriptChildren();t.length&&(async n=>{let i=Array.from(document.scripts);for(let r=0;r<n.length;r++){let c=n[r];c.src?i.findIndex(a=>a.src===c.src&&!a.dataset.reset)<0&&await this.loadScript(c):s.runScriptBlock(c)}})(t)};this.options={...this.defaultOptions,...t}}mount(){this.swup.on("contentReplaced",this.getScriptAndInsert)}unmount(){this.swup.off("contentReplaced",this.getScriptAndInsert)}loadScript(t){return new Promise((o,n)=>{let i=document.createElement("script");for(let{name:r,value:c}of V(t.attributes))i.setAttribute(r,c);i.textContent=t.textContent,i.setAttribute("async","false"),i.onload=()=>{o(),document.body.contains(i)&&document.body.removeChild(i)},i.onerror=n,document.body.appendChild(i)})}getNextScriptChildren(){let t=this.swup.cache.getCurrentPage().originalContent.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),o=document.createElement("div");o.innerHTML=t;let n=o.querySelector("#swupBody").querySelectorAll(this.options.selectors);return o.innerHTML="",o=null,n}},N=E;function I(){window.Fancybox&&(window.Fancybox.bind("[data-fancybox]"),window.Fancybox.bind('[data-fancybox="light"],[data-fancybox="article"]',{groupAll:!0}),window.Fancybox.bind('[data-fancybox="dark"],[data-fancybox="article"]',{groupAll:!0}),window.Fancybox.defaults.Hash=!1)}function _(){window.Swiper&&new window.Swiper(".trm-slideshow",{slidesPerView:1,effect:"fade",parallax:!0,autoplay:!0,speed:1400})}function A(){window.Fancybox&&s.qa("#article-container img:not(.no-fancybox)").forEach(e=>{if(!e.parentNode.dataset.fancybox){let t="article";e.classList.contains("trm-light-icon")?t="light":e.classList.contains("trm-dark-icon")&&(t="dark"),s.wrap(e,"div",{"data-src":e.dataset.src||e.src,"data-fancybox":t})}})}function X(){let e=[];e.push(new H({specialTags:"#trm-switch-style"})),e.push(new N);let t={containers:["#trm-dynamic-content"],animateHistoryBrowsing:!0,linkSelector:".trm-menu a:not([data-no-swup]), .trm-anima-link:not([data-no-swup])",animationSelector:'[class="trm-swup-animation"]',plugins:e};return new window.Swup(t)}function M(e=!1){let t=s.q("#trm-swich"),o=s.q(".trm-mode-swich-animation"),n=s.q(".trm-mode-swich-animation-frame");if(e){let i=(localStorage.getItem("theme-mode")||window.ASYNC_CONFIG.theme.default)=="style-dark",r=i?"add":"remove";o.classList[r]("trm-active"),n.classList.remove("trm-active"),v.setThemeColor(),t&&(t.checked=i)}t&&t.addEventListener("change",function(){v.switchThemeMode(this.checked?"style-dark":"style-light")})}function k(){let e=s.q(".trm-banner-cover"),t=s.q(".trm-sidebar"),o=s.q("#trm-back-top"),n=s.q("#scroll-triger"),i=s.q(".trm-fixed-container"),r=new IntersectionObserver(d=>{d.forEach(({isIntersecting:p,target:g})=>{p&&(g.classList.add("trm-active-el"),r.unobserve(g))})},{threshold:[0,1],rootMargin:"0px 0px -40px 0px"}),c=function(d){window.scrollTo({top:0,behavior:d?"smooth":"auto"})},a=function(){let d=s.scrollTop(),{scrollHeight:p,clientHeight:g}=document.documentElement,u=d>500?"add":"remove";i==null||i.classList[u]("offset");let w=parseInt((d/(p-g)*100).toString());o&&(o.style.backgroundSize=`100% ${w}%`);let y=d>=70?"add":"remove";t&&t.classList[y]("fixed"),e&&(e.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.min(d/3,100)}, 0, 1)`),v.switchToc(!1)},m=function(){t&&(t.style.width=window.innerWidth>992?`${t.parentElement.clientWidth-40}px`:"auto")},l=function(){let d=s.q(".trm-banner");d&&window.scrollTo({top:d.clientHeight-20,behavior:"smooth"})};(()=>{s.qa(".trm-scroll-animation").forEach(p=>{p&&r.observe(p)}),a(),m()})(),o==null||o.addEventListener("click",c),n==null||n.addEventListener("click",l),window.addEventListener("scroll",a),window.addEventListener("resize",m),document.addEventListener("swup:contentReplaced",()=>{r.disconnect(),o==null||o.removeEventListener("click",c),n==null||n.removeEventListener("click",l),window.removeEventListener("scroll",a),window.removeEventListener("resize",m),c()})}function q(e=2e3){let t=(o,n,i,r)=>{i+=n,i>=r?o.innerText=r.toString():(o.innerText=parseInt(i.toString()).toString(),requestAnimationFrame(()=>t(o,n,i,r)))};s.qa(".trm-counter").forEach(o=>{let n=Number(o.innerText);if(!isNaN(n)){let i=n/(e/16);t(o,i,0,n)}})}function F(){let{i18n:e,toc:t,icons:o,icontype:n}=window.ASYNC_CONFIG,i=s.q("#post-toc"),r=s.q(".post-toc-btn");if(i){let c=i.querySelector("#post-toc-top"),a=i.querySelector(".trm-post-toc-header");c.addEventListener("click",function(){i.classList.contains("fixed")?(i.classList.remove("fixed","active"),c.innerHTML=e.sticky):(i.classList.add("fixed"),c.innerHTML=s.icons(o.close,n))}),i.addEventListener("click",function(l){l.preventDefault(),l.stopPropagation();let h=l.target,d=h.getAttribute("href");if(d||(d=h.parentElement.getAttribute("href")),!d)return;let p=document.querySelector(d);if(!p)return;let g=p.getBoundingClientRect().top+s.scrollTop();return window.scrollTo({top:g-110,behavior:"smooth"}),!1}),a.addEventListener("mousedown",function(l){if(!i.classList.contains("fixed"))return;let h=a.getBoundingClientRect(),d=l.clientX,p=l.clientY,g=!0;document.onmousemove=function(u){if(g){let w=u.clientX,y=u.clientY;i.style.left=`${w-(d-h.x)}px`,i.style.top=`${y-(p-h.y)}px`,i.style.right="unset",i.style.bottom="unset",i.style.opacity=".6"}},document.onmouseup=function(){g=!1,document.onmousemove=null,document.onmouseup=null,i.style.opacity="unset"}}),t.post_title&&i.querySelectorAll(".trm-toc-link").forEach(l=>{let h=l.getAttribute("href"),d=s.q(h);if(!d)return;let p=document.createElement("span");p.className="trm-toc-icon",p.innerHTML=s.icons(o.toc_tag,n),p.onclick=function(g){return v.switchToc(!0,g.clientX,g.clientY),g.preventDefault(),g.stopPropagation(),!1},d.appendChild(p)});let m=l=>{i.classList.contains("fixed")||(s.clickoutside(l.target,[i,r])?i.classList.remove("active"):v.switchToc())};window.addEventListener("click",m),document.addEventListener("swup:contentReplaced",()=>{window.removeEventListener("click",m)})}}function J(){if(window.ASYNC_CONFIG.creative_commons){let{author:e}=window.ASYNC_CONFIG,{i18n:t,creative_commons:o}=window.ASYNC_CONFIG,n=function(i){let r=i.clipboardData||window.clipboardData;if(!r)return;let c=window.getSelection().toString();if(c){i.preventDefault();let a=document.getElementById("post-author");a&&(e=a.innerText.replace(`
`,""));let m=location.href,l=document.getElementById("original-link");l&&(m=l.innerText.replace(`
`,""));let h=`

${t.author}${e}
${t.copyright_link}${m}
${t.copyright_license_title}${t.copyright_license_content.replace("undefined","CC"+o.license.toUpperCase()+" "+(o.license=="zero"?"1.0":"4.0"))}`;r.setData("text/plain",c+h)}};document.addEventListener("copy",n)}}function O(){let{i18n:e,highlight:t,icons:o,icontype:n}=window.ASYNC_CONFIG,i=t.copy,r=t.lang,c=t.height_limit,a=i||r,m=t.plugin==="prismjs",l=t.title==="mac",h=m?'pre[class*="language-"]':"figure.highlight",d=s.qa(h);if(!(a||c||d.length))return;let p=function(){try{let u=this.parentNode.parentNode,w=u.querySelector(".code");if(w||(w=u.querySelector("table")),w||(w=u.querySelector("code")),!w)return;navigator.clipboard.writeText(w.innerText),s.message(e.copy_success)}catch{s.message(e.copy_failure,"warning")}},g=function(){let u=this.classList.contains("expand-done"),w=s.scrollTop(),y=this.parentElement.clientHeight;this.classList.toggle("expand-done");let f=this.parentElement.clientHeight;if(u){let b=y-f;if(b<s.viewPortHeight())return;window.scrollTo({top:w-b})}};s.qa(h).forEach(u=>{let w=document.createDocumentFragment(),y=document.createElement("div");if(y.className=`code-tools ${a&&l?"mac-style":"default-style"}`,r){let f="";m?f=u.getAttribute("data-language")?u.getAttribute("data-language"):"Code":(f=u.getAttribute("class").split(" ")[1],(f==="plain"||f===void 0)&&(f="Code"));let b=document.createElement("span");b.className="code-lang",b.innerText=f,y.append(b)}if(i){let f=document.createElement("span");f.className="copy-button",f.innerHTML=s.icons(o.copy,n),f.addEventListener("click",p),y.append(f)}if(c&&u.offsetHeight>t.height_limit+50){let f=document.createElement("div");f.innerHTML=s.icons(o.double_arrows,n),f.className="code-expand-btn",f.addEventListener("click",g),w.append(f)}if(w.append(y),m){s.wrap(u,"figure",{class:"highlight"}),u.parentNode.insertBefore(w,u);let f=u.querySelector(".caption,caption");f&&u.parentNode.appendChild(f)}else u.insertBefore(w,u.querySelector("table"))})}function P(){s.qa(".trm-tabs .trm-tab > button").forEach(function(e){e.addEventListener("click",function(){let t=this.parentNode;if(!t.classList.contains("active")){let o=t.parentNode.nextElementSibling,n=s.siblings(t,".active")[0];n&&n.classList.remove("active"),t.classList.add("active");let i=this.getAttribute("data-href").replace("#","");[...o.children].forEach(c=>{c.id===i?c.classList.add("active"):c.classList.remove("active")})}})})}function G(){let e=s.qa(".fj-gallery");e.length&&(e.forEach(t=>{t.querySelectorAll("img").forEach(n=>{n.loading="eager",s.wrap(n,"div",{class:"fj-gallery-item","data-src":n.dataset.src||n.src,"data-fancybox":"gallery"})})}),s.loadScript(window.ASYNC_CONFIG.plugin.flickr_justified_gallery,window.fjGallery).then(()=>{e.forEach(t=>{window.fjGallery(t,{itemSelector:".fj-gallery-item",rowHeight:220,gutter:4,onJustify:function(){this.$container.style.opacity="1"}})})}))}function U(){if(window.ASYNC_CONFIG&&window.ASYNC_CONFIG.favicon.visibilitychange){window.originTitle=document.title;let e,t=Array.from(s.qa('[rel="icon"]')),o=t.map(n=>n.href);document.addEventListener("visibilitychange",function(){document.hidden?(t.forEach(n=>{n.href=s.urlFor(window.ASYNC_CONFIG.favicon.hidden)}),document.title=window.ASYNC_CONFIG.favicon.hideText,clearTimeout(e)):(t.forEach((n,i)=>{n.href=o[i]}),document.title=window.ASYNC_CONFIG.favicon.showText+window.originTitle,e=setTimeout(function(){document.title=window.originTitle},2e3))})}}function $(){let{notice_outdate:e,i18n:t}=window.ASYNC_CONFIG;if(e){let o=s.diffDate(window.PAGE_CONFIG.postUpdate);if(o>=e.limit_day){let n=document.createElement("div");n.className=`post-outdate-notice ${e.position}`,n.textContent=t.notice_outdate_message.replace("undefined",o.toString());let i=document.getElementById("article-container");e.position==="top"?i.insertBefore(n,i.firstChild):i.appendChild(n)}}}function Y(){if(window.ASYNC_CONFIG.covers&&window.PAGE_CONFIG.isHome){let e=window.ASYNC_CONFIG.covers;s.qa("div[data-random-img]").forEach(o=>{let n=s.getRandomItem(e);n+=n.includes("?")?`&v=${Math.random()}`:`?v=${Math.random()}`,n&&(o.style.backgroundImage=`url(${n})`)})}}function D(){s.q(".trm-menu-btn").addEventListener("click",function(){s.q(".trm-menu-btn,.trm-right-side").classList.toggle("trm-active")})}function K(){let e=t=>console.log(t,"color: white; background: #0078E7; padding:5px 0;margin: 0 0 2px 0;border-radius: 4px 0 0 4px;","padding: 4px;border:1px solid #0078E7;border-radius: 0 4px 4px 0; background: linear-gradient(70deg, #e3f9eb, #d1dbff);");e(`%c \u{1F680} Hexo-Theme-Async ${window.ASYNC_CONFIG.theme_version=="0.0.0"?"Github":window.ASYNC_CONFIG.theme_version} %c https://github.com/MaLuns/hexo-theme-async `),e("%c \u{1F4D1} Hexo-Theme-Async Docs %c https://hexo-theme-async.imalun.com ")}function x(){window.asyncFun=v,K(),v.pageLoading(),U(),window.PAGE_CONFIG.isPost&&$(),G(),A(),O(),P(),window.ASYNC_CONFIG.swup&&X(),D(),M(!0),q(),k(),_(),I(),F(),J(),Y(),window.ASYNC_CONFIG.swup&&document.addEventListener("swup:contentReplaced",function(){let e=s.gId("async-page-config");e&&s.runScriptBlock(e),window.PAGE_CONFIG.isPost&&$(),D(),document.body.classList.remove("trm-read-mode"),window.show_date_time&&window.show_date_time(),G(),A(),O(),P(),s.q(".trm-scroll-container").style.opacity="1",M(!0),q(),k(),_(),I(),F(),Y()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x();})();