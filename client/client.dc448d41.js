function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function c(t,e,n,r,s,o,i){const c=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(c){const s=a(e,n,r,i);t.p(s,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}let h=!1;const p=new Set;function f(t,e){h&&p.delete(e),e.parentNode!==t&&t.appendChild(e)}function d(t,e,n){h&&p.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function m(t){h?p.add(t):t.parentNode&&t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function $(){return w(" ")}function y(){return w("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:_(t,r,e[r])}function S(t){return Array.from(t.childNodes)}function T(t,e,n,r){for(;t.length>0;){const r=t.shift();if(r.nodeName===e){let t=0;const e=[];for(;t<r.attributes.length;){const s=r.attributes[t++];n[s.name]||e.push(s.name)}for(let t=0;t<e.length;t++)r.removeAttribute(e[t]);return r}m(r)}return r?b(e):v(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return w(e)}function N(t){return A(t," ")}function I(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e){t.value=null==e?"":e}let R,L;function O(){if(void 0===R){R=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){R=!0}}return R}function U(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=v("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=O();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=x(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=x(n.contentWindow,"resize",e)}),f(t,n),()=>{(r||s&&n.contentWindow)&&s(),m(n)}}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}class H{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=v(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)d(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}function j(t){L=t}function M(){if(!L)throw new Error("Function called outside component initialization");return L}function D(t){M().$$.on_mount.push(t)}function q(t){M().$$.after_update.push(t)}function z(t){M().$$.on_destroy.push(t)}const G=[],B=[],K=[],J=[],V=Promise.resolve();let W=!1;function F(t){K.push(t)}let Y=!1;const Q=new Set;function X(){if(!Y){Y=!0;do{for(let t=0;t<G.length;t+=1){const e=G[t];j(e),Z(e.$$)}for(j(null),G.length=0;B.length;)B.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];Q.has(e)||(Q.add(e),e())}K.length=0}while(G.length);for(;J.length;)J.pop()();W=!1,Y=!1,Q.clear()}}function Z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function rt(){et.r||s(et.c),et=et.p}function st(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function it(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function at(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function lt(t,e){t&&t.l(e)}function ut(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||F((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(F)}function ht(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(G.push(t),W||(W=!0,V.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,o,i,a,c,l=[-1]){const u=L;j(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),d&&pt(e,t)),n})):[],f.update(),d=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){h=!0;const t=S(n.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();n.intro&&st(e.$$.fragment),ut(e,n.target,n.anchor,n.customElement),function(){h=!1;for(const t of p)t.parentNode.removeChild(t);p.clear()}(),X()}j(u)}class dt{$destroy(){ht(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function gt(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!mt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),mt.push(n,e)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.push(c),1===s.length&&(r=n(o)||t),i(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const vt={};var bt={owner:"xnaas",repo:"nitter-instances",sites:[{name:"nitter.net",url:"https://nitter.net",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"nitter.42l.fr",url:"https://nitter.42l.fr",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/fr.png"},{name:"nitter.pussthecat.org",url:"https://nitter.pussthecat.org",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"nitter.nixnet.services",url:"https://nitter.nixnet.services",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"nitter.tedomum.net",url:"https://nitter.tedomum.net",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/fr.png"},{name:"nitter.fdn.fr",url:"https://nitter.fdn.fr",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/fr.png"},{name:"nitter.1d4.us",url:"https://nitter.1d4.us",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/us.png"},{name:"nitter.kavin.rocks",url:"https://nitter.kavin.rocks",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/in.png"},{name:"tweet.lambda.dance",url:"https://tweet.lambda.dance",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/us.png"},{name:"nitter.cc",url:"https://nitter.cc",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/rs.png"},{name:"nitter.vxempire.xyz",url:"https://nitter.vxempire.xyz",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/es.png"},{name:"nitter.unixfox.eu",url:"https://nitter.unixfox.eu",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/nl.png"},{name:"nitter.domain.glass",url:"https://nitter.domain.glass",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/us.png"},{name:"nitter.himiko.cloud",url:"https://nitter.himiko.cloud",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/bg.png"},{name:"nitter.eu",url:"https://nitter.eu",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/fi.png"},{name:"nitter.ethibox.fr",url:"https://nitter.ethibox.fr",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/fr.png"},{name:"nitter.namazso.eu",url:"https://nitter.namazso.eu",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"nitter.mailstation.de",url:"https://nitter.mailstation.de",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"nitter.actionsack.com",url:"https://nitter.actionsack.com",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/us.png",assignees:["xnaas"]},{name:"nitter.cattube.org",url:"https://nitter.cattube.org",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"birdsite.xanny.family",url:"https://birdsite.xanny.family",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/gb.png"},{name:"nitter.40two.app",url:"https://nitter.40two.app",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/nl.png"},{name:"nitter.skrep.in",url:"https://nitter.skrep.in",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"nitter.database.red",url:"https://nitter.database.red",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/us.png"},{name:"nitter.exonip.de",url:"https://nitter.exonip.de",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"},{name:"twitr.gq",url:"https://twitr.gq",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/fi.png"},{name:"nitter.koyu.space",url:"https://nitter.koyu.space",icon:"https://raw.githubusercontent.com/kreativekorp/vexillo/master/artwork/vexillo/pvb160/de.png"}],"status-website":{baseUrl:"/nitter-instances",logoUrl:"https://raw.githubusercontent.com/zedeus/nitter/master/public/favicon-32x32.png",name:"Nitter Instances",introTitle:"Nitter Instances Uptime",introMessage:"This status page monitors [Nitter instances](https://github.com/zedeus/nitter/wiki/Instances) for uptime.",navbar:[{title:"Status",href:"/nitter-instances"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}],theme:"dark"},path:"https://xnaas.github.io/nitter-instances",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function wt(t,e,n){const r=t.slice();return r[1]=e[n],r}function $t(e){let n,r,s,o=bt["status-website"]&&!bt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=v("img"),this.h()},l(t){n=T(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){_(n,"alt",""),n.src!==(r=bt["status-website"].logoUrl)&&_(n,"src",r),_(n,"class","svelte-a08hsz")},m(t,e){d(t,n,e)},p:t,d(t){t&&m(n)}}}(),i=bt["status-website"]&&!bt["status-website"].hideNavTitle&&function(e){let n,r,s=bt["status-website"].name+"";return{c(){n=v("div"),r=w(s)},l(t){n=T(t,"DIV",{});var e=S(n);r=A(e,s),e.forEach(m)},m(t,e){d(t,n,e),f(n,r)},p:t,d(t){t&&m(n)}}}();return{c(){n=v("div"),r=v("a"),o&&o.c(),s=$(),i&&i.c(),this.h()},l(t){n=T(t,"DIV",{});var e=S(n);r=T(e,"A",{href:!0,class:!0});var a=S(r);o&&o.l(a),s=N(a),i&&i.l(a),a.forEach(m),e.forEach(m),this.h()},h(){_(r,"href",bt["status-website"].logoHref||bt.path),_(r,"class","logo svelte-a08hsz")},m(t,e){d(t,n,e),f(n,r),o&&o.m(r,null),f(r,s),i&&i.m(r,null)},p(t,e){bt["status-website"]&&!bt["status-website"].hideNavLogo&&o.p(t,e),bt["status-website"]&&!bt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&m(n),o&&o.d(),i&&i.d()}}}function yt(t){let e,n,r,s,o,i=t[1].title+"";return{c(){e=v("li"),n=v("a"),r=w(i),o=$(),this.h()},l(t){e=T(t,"LI",{});var s=S(e);n=T(s,"A",{"aria-current":!0,href:!0,class:!0});var a=S(n);r=A(a,i),a.forEach(m),o=N(s),s.forEach(m),this.h()},h(){_(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),_(n,"href",t[1].href.replace("$OWNER",bt.owner).replace("$REPO",bt.repo)),_(n,"class","svelte-a08hsz")},m(t,s){d(t,e,s),f(e,n),f(n,r),f(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&_(n,"aria-current",s)},d(t){t&&m(e)}}}function xt(e){let n,r,s,o,i,a=bt["status-website"]&&bt["status-website"].logoUrl&&$t(),c=bt["status-website"]&&bt["status-website"].navbar&&function(t){let e,n=bt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=yt(wt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=y()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=y()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);d(t,e,n)},p(t,s){if(1&s){let o;for(n=bt["status-website"].navbar,o=0;o<n.length;o+=1){const i=wt(t,n,o);r[o]?r[o].p(i,s):(r[o]=yt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){g(r,t),t&&m(e)}}}(e),l=bt["status-website"]&&bt["status-website"].navbarGitHub&&!bt["status-website"].navbar&&function(e){let n,r,s,o=bt.i18n.navGitHub+"";return{c(){n=v("li"),r=v("a"),s=w(o),this.h()},l(t){n=T(t,"LI",{});var e=S(n);r=T(e,"A",{href:!0,class:!0});var i=S(r);s=A(i,o),i.forEach(m),e.forEach(m),this.h()},h(){_(r,"href",`https://github.com/${bt.owner}/${bt.repo}`),_(r,"class","svelte-a08hsz")},m(t,e){d(t,n,e),f(n,r),f(r,s)},p:t,d(t){t&&m(n)}}}();return{c(){n=v("nav"),r=v("div"),a&&a.c(),s=$(),o=v("ul"),c&&c.c(),i=$(),l&&l.c(),this.h()},l(t){n=T(t,"NAV",{class:!0});var e=S(n);r=T(e,"DIV",{class:!0});var u=S(r);a&&a.l(u),s=N(u),o=T(u,"UL",{class:!0});var h=S(o);c&&c.l(h),i=N(h),l&&l.l(h),h.forEach(m),u.forEach(m),e.forEach(m),this.h()},h(){_(o,"class","svelte-a08hsz"),_(r,"class","container svelte-a08hsz"),_(n,"class","svelte-a08hsz")},m(t,e){d(t,n,e),f(n,r),a&&a.m(r,null),f(r,s),f(r,o),c&&c.m(o,null),f(o,i),l&&l.m(o,null)},p(t,[e]){bt["status-website"]&&bt["status-website"].logoUrl&&a.p(t,e),bt["status-website"]&&bt["status-website"].navbar&&c.p(t,e),bt["status-website"]&&bt["status-website"].navbarGitHub&&!bt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&m(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function kt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class _t extends dt{constructor(t){super(),ft(this,t,kt,xt,i,{segment:0})}}var Et={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function St(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Tt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function At(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},h=0;function p(t){var e=Et[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function f(){for(var t="";c.length;)t+=p(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(h,s.index),h=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+St(Tt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=At(St(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Tt(s[8])+'" alt="'+Tt(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Tt(s[11]||u[r.toLowerCase()])+'">'),n=f()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+At(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Tt(s[16])+"</code>":(s[17]||s[1])&&(n=p(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(h)+f()).replace(/^\n+|\n+$/g,"")}function Nt(t,e,n){const r=t.slice();return r[3]=e[n],r}function It(t,e,n){const r=t.slice();return r[3]=e[n],r}function Pt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Rt(e){let n;return{c(){n=v("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",`${bt.path}/themes/${(bt["status-website"]||{}).theme||"light"}.css`)},m(t,e){d(t,n,e)},p:t,d(t){t&&m(n)}}}function Lt(e){let n;return{c(){n=v("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",(bt["status-website"]||{}).themeUrl)},m(t,e){d(t,n,e)},p:t,d(t){t&&m(n)}}}function Ot(e){let n,r;return{c(){n=v("script"),this.h()},l(t){n=T(t,"SCRIPT",{src:!0,async:!0,defer:!0}),S(n).forEach(m),this.h()},h(){n.src!==(r=e[8].src)&&_(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){d(t,n,e)},p:t,d(t){t&&m(n)}}}function Ut(e){let n;return{c(){n=v("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",e[3].rel),_(n,"href",e[3].href),_(n,"media",e[3].media)},m(t,e){d(t,n,e)},p:t,d(t){t&&m(n)}}}function Ct(e){let n;return{c(){n=v("meta"),this.h()},l(t){n=T(t,"META",{name:!0,content:!0}),this.h()},h(){_(n,"name",e[3].name),_(n,"content",e[3].content)},m(t,e){d(t,n,e)},p:t,d(t){t&&m(n)}}}function Ht(e){let n,r,s,o,i,l,u,h,p,b,w,x,k,E,A,I,P,R,L=At(bt.i18n.footer.replace(/\$REPO/,`https://github.com/${bt.owner}/${bt.repo}`))+"",O=(bt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(bt["status-website"]||{}).customHeadHtml+"";return{c(){r=y(),this.h()},l(t){r=y(),this.h()},h(){n=new H(r)},m(t,e){n.m(s,t,e),d(t,r,e)},p:t,d(t){t&&m(r),t&&n.d()}}}();let U=((bt["status-website"]||{}).themeUrl?Lt:Rt)(e),j=(bt["status-website"]||{}).scripts&&function(t){let e,n=(bt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ot(Pt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=y()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=y()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);d(t,e,n)},p(t,s){if(0&s){let o;for(n=(bt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Pt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Ot(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){g(r,t),t&&m(e)}}}(e),M=(bt["status-website"]||{}).links&&function(t){let e,n=(bt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ut(It(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=y()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=y()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);d(t,e,n)},p(t,s){if(0&s){let o;for(n=(bt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=It(t,n,o);r[o]?r[o].p(i,s):(r[o]=Ut(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){g(r,t),t&&m(e)}}}(e),D=(bt["status-website"]||{}).metaTags&&function(t){let e,n=(bt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ct(Nt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=y()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=y()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);d(t,e,n)},p(t,s){if(0&s){let o;for(n=(bt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Nt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Ct(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){g(r,t),t&&m(e)}}}(e),q=bt["status-website"].css&&function(e){let n,r,s=`<style>${bt["status-website"].css}</style>`;return{c(){r=y(),this.h()},l(t){r=y(),this.h()},h(){n=new H(r)},m(t,e){n.m(s,t,e),d(t,r,e)},p:t,d(t){t&&m(r),t&&n.d()}}}(),z=bt["status-website"].js&&function(e){let n,r,s=`<script>${bt["status-website"].js}<\/script>`;return{c(){r=y(),this.h()},l(t){r=y(),this.h()},h(){n=new H(r)},m(t,e){n.m(s,t,e),d(t,r,e)},p:t,d(t){t&&m(r),t&&n.d()}}}(),G=(bt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(bt["status-website"]||{}).customBodyHtml+"";return{c(){r=y(),this.h()},l(t){r=y(),this.h()},h(){n=new H(r)},m(t,e){n.m(s,t,e),d(t,r,e)},p:t,d(t){t&&m(r),t&&n.d()}}}();x=new _t({props:{segment:e[0]}});const B=e[2].default,K=function(t,e,n,r){if(t){const s=a(t,e,n,r);return t[0](s)}}(B,e,e[1],null);return{c(){O&&O.c(),n=y(),U.c(),r=v("link"),s=v("link"),o=v("link"),j&&j.c(),i=y(),M&&M.c(),l=y(),D&&D.c(),u=y(),q&&q.c(),h=y(),z&&z.c(),p=y(),b=$(),G&&G.c(),w=$(),ct(x.$$.fragment),k=$(),E=v("main"),K&&K.c(),A=$(),I=v("footer"),P=v("p"),this.h()},l(t){const e=C('[data-svelte="svelte-ri9y7q"]',document.head);O&&O.l(e),n=y(),U.l(e),r=T(e,"LINK",{rel:!0,href:!0}),s=T(e,"LINK",{rel:!0,type:!0,href:!0}),o=T(e,"LINK",{rel:!0,type:!0,href:!0}),j&&j.l(e),i=y(),M&&M.l(e),l=y(),D&&D.l(e),u=y(),q&&q.l(e),h=y(),z&&z.l(e),p=y(),e.forEach(m),b=N(t),G&&G.l(t),w=N(t),lt(x.$$.fragment,t),k=N(t),E=T(t,"MAIN",{class:!0});var a=S(E);K&&K.l(a),a.forEach(m),A=N(t),I=T(t,"FOOTER",{class:!0});var c=S(I);P=T(c,"P",{}),S(P).forEach(m),c.forEach(m),this.h()},h(){_(r,"rel","stylesheet"),_(r,"href",`${bt.path}/global.css`),_(s,"rel","icon"),_(s,"type","image/svg"),_(s,"href",(bt["status-website"]||{}).faviconSvg||(bt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(o,"rel","icon"),_(o,"type","image/png"),_(o,"href",(bt["status-website"]||{}).favicon||"/logo-192.png"),_(E,"class","container"),_(I,"class","svelte-jbr799")},m(t,e){O&&O.m(document.head,null),f(document.head,n),U.m(document.head,null),f(document.head,r),f(document.head,s),f(document.head,o),j&&j.m(document.head,null),f(document.head,i),M&&M.m(document.head,null),f(document.head,l),D&&D.m(document.head,null),f(document.head,u),q&&q.m(document.head,null),f(document.head,h),z&&z.m(document.head,null),f(document.head,p),d(t,b,e),G&&G.m(t,e),d(t,w,e),ut(x,t,e),d(t,k,e),d(t,E,e),K&&K.m(E,null),d(t,A,e),d(t,I,e),f(I,P),P.innerHTML=L,R=!0},p(t,[e]){(bt["status-website"]||{}).customHeadHtml&&O.p(t,e),U.p(t,e),(bt["status-website"]||{}).scripts&&j.p(t,e),(bt["status-website"]||{}).links&&M.p(t,e),(bt["status-website"]||{}).metaTags&&D.p(t,e),bt["status-website"].css&&q.p(t,e),bt["status-website"].js&&z.p(t,e),(bt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),x.$set(n),K&&K.p&&(!R||2&e)&&c(K,B,t,t[1],e,null,null)},i(t){R||(st(x.$$.fragment,t),st(K,t),R=!0)},o(t){ot(x.$$.fragment,t),ot(K,t),R=!1},d(t){O&&O.d(t),m(n),U.d(t),m(r),m(s),m(o),j&&j.d(t),m(i),M&&M.d(t),m(l),D&&D.d(t),m(u),q&&q.d(t),m(h),z&&z.d(t),m(p),t&&m(b),G&&G.d(t),t&&m(w),ht(x,t),t&&m(k),t&&m(E),K&&K.d(t),t&&m(A),t&&m(I)}}}function jt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Mt extends dt{constructor(t){super(),ft(this,t,jt,Ht,i,{segment:0})}}function Dt(t){let e,n,r=t[1].stack+"";return{c(){e=v("pre"),n=w(r)},l(t){e=T(t,"PRE",{});var s=S(e);n=A(s,r),s.forEach(m)},m(t,r){d(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&I(n,r)},d(t){t&&m(e)}}}function qt(e){let n,r,s,o,i,a,c,l,u,h=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&Dt(e);return{c(){r=$(),s=v("h1"),o=w(e[0]),i=$(),a=v("p"),c=w(h),l=$(),p&&p.c(),u=y(),this.h()},l(t){C('[data-svelte="svelte-1moakz"]',document.head).forEach(m),r=N(t),s=T(t,"H1",{class:!0});var n=S(s);o=A(n,e[0]),n.forEach(m),i=N(t),a=T(t,"P",{class:!0});var f=S(a);c=A(f,h),f.forEach(m),l=N(t),p&&p.l(t),u=y(),this.h()},h(){_(s,"class","svelte-17w3omn"),_(a,"class","svelte-17w3omn")},m(t,e){d(t,r,e),d(t,s,e),f(s,o),d(t,i,e),d(t,a,e),f(a,c),d(t,l,e),p&&p.m(t,e),d(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&I(o,t[0]),2&e&&h!==(h=t[1].message+"")&&I(c,h),t[2]&&t[1].stack?p?p.p(t,e):(p=Dt(t),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&m(r),t&&m(s),t&&m(i),t&&m(a),t&&m(l),p&&p.d(t),t&&m(u)}}}function zt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Gt extends dt{constructor(t){super(),ft(this,t,zt,qt,i,{status:0,error:1})}}function Bt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ct(n.$$.fragment),r=y()},l(t){n&&lt(n.$$.fragment,t),r=y()},m(t,e){n&&ut(n,t,e),d(t,r,e),s=!0},p(t,e){const s=16&e?it(o,[at(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){nt();const t=n;ot(t.$$.fragment,1,0,(()=>{ht(t,1)})),rt()}i?(n=new i(a()),ct(n.$$.fragment),st(n.$$.fragment,1),ut(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&st(n.$$.fragment,t),s=!0)},o(t){n&&ot(n.$$.fragment,t),s=!1},d(t){t&&m(r),n&&ht(n,t)}}}function Kt(t){let e,n;return e=new Gt({props:{error:t[0],status:t[1]}}),{c(){ct(e.$$.fragment)},l(t){lt(e.$$.fragment,t)},m(t,r){ut(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(st(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Jt(t){let e,n,r,s;const o=[Kt,Bt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){i[e].m(t,n),d(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(nt(),ot(i[c],1,1,(()=>{i[c]=null})),rt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),st(n,1),n.m(r.parentNode,r))},i(t){s||(st(n),s=!0)},o(t){ot(n),s=!1},d(t){i[e].d(t),t&&m(r)}}}function Vt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Jt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Mt({props:o}),{c(){ct(n.$$.fragment)},l(t){lt(n.$$.fragment,t)},m(t,e){ut(n,t,e),r=!0},p(t,[e]){const r=12&e?it(s,[4&e&&{segment:t[2][0]},8&e&&at(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(st(n.$$.fragment,t),r=!0)},o(t){ot(n.$$.fragment,t),r=!1},d(t){ht(n,t)}}}function Wt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,h;return q(l),u=vt,h=r,M().$$.context.set(u,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class Ft extends dt{constructor(t){super(),ft(this,t,Wt,Vt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Yt=[],Qt=[{js:()=>Promise.all([import("./index.b6eebc80.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.be55fc36.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].6c877f3d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].d9209dec.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.80e6f2ea.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],Xt=(Zt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:Zt(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:Zt(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Zt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function te(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ne,re=1;const se="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},oe={};let ie,ae;function ce(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function le(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ie))return null;let e=t.pathname.slice(ie.length);if(""===e&&(e="/"),!Yt.some((t=>t.test(e))))for(let n=0;n<Xt.length;n+=1){const r=Xt[n],s=r.pattern.exec(e);if(s){const n=ce(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function ue(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=le(s);if(o){fe(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),se.pushState({id:ne},"",s.href)}}function he(){return{x:pageXOffset,y:pageYOffset}}function pe(t){if(oe[ne]=he(),t.state){const e=le(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else!function(t){re=t}(re+1),function(t){ne=t}(re),se.replaceState({id:ne},"",location.href)}function fe(t,e,n,r){return te(this,void 0,void 0,(function*(){const s=!!e;if(s)ne=e;else{const t=he();oe[ne]=t,ne=e=++re,oe[ne]=n?t:{x:0,y:0}}if(yield ae(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=oe[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),oe[ne]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function de(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let me,ge=null;function ve(t){const e=ee(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=le(new URL(t,de(document)));if(e)ge&&t===ge.href||(ge={href:t,promise:Oe(e)}),ge.promise}(e.href)}function be(t){clearTimeout(me),me=setTimeout((()=>{ve(t)}),20)}function we(t,e={noscroll:!1,replaceState:!1}){const n=le(new URL(t,de(document)));if(n){const r=fe(n,null,e.noscroll);return se[e.replaceState?"replaceState":"pushState"]({id:ne},"",t),r}return location.href=t,new Promise((()=>{}))}const $e="undefined"!=typeof __SAPPER__&&__SAPPER__;let ye,xe,ke,_e=!1,Ee=[],Se="{}";const Te={page:function(t){const e=gt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:gt(null),session:gt($e&&$e.session)};let Ae,Ne,Ie;function Pe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Re(t){return te(this,void 0,void 0,(function*(){ye&&Te.preloading.set(!0);const e=function(t){return ge&&ge.href===t.href?ge.promise:Oe(t)}(t),n=xe={},r=yield e,{redirect:s}=r;if(n===xe)if(s)yield we(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Le(n,e,Pe(e,t.page))}}))}function Le(t,e,n){return te(this,void 0,void 0,(function*(){Te.page.set(n),Te.preloading.set(!1),ye?ye.$set(e):(e.stores={page:{subscribe:Te.page.subscribe},preloading:{subscribe:Te.preloading.subscribe},session:Te.session},e.level0={props:yield ke},e.notify=Te.page.notify,ye=new Ft({target:Ie,props:e,hydrate:!0})),Ee=t,Se=JSON.stringify(n.query),_e=!0,Ne=!1}))}function Oe(t){return te(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ke){const t=()=>({});ke=$e.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ae)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>te(this,void 0,void 0,(function*(){const h=r[a];if(function(t,e,n,r){if(r!==Se)return!0;const s=Ee[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,h,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:h};const p=c++;let f;if(Ne||u||!Ee[a]||Ee[a].part!==e.i){u=!1;const{default:r,preload:s}=yield Qt[e.i].js();let o;o=_e||!$e.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ae):{}:$e.preloaded[a+1],f={component:r,props:o,segment:h,match:l,part:e.i}}else f=Ee[a];return o[`level${p}`]=f})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Ue,Ce,He;Te.session.subscribe((t=>te(void 0,void 0,void 0,(function*(){if(Ae=t,!_e)return;Ne=!0;const e=le(new URL(location.href)),n=xe={},{redirect:r,props:s,branch:o}=yield Oe(e);n===xe&&(r?yield we(r.location,{replaceState:!0}):yield Le(o,s,Pe(s,e.page)))})))),Ue={target:document.querySelector("#sapper")},Ce=Ue.target,Ie=Ce,He=$e.baseUrl,ie=He,ae=Re,"scrollRestoration"in se&&(se.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{se.scrollRestoration="auto"})),addEventListener("load",(()=>{se.scrollRestoration="manual"})),addEventListener("click",ue),addEventListener("popstate",pe),addEventListener("touchstart",ve),addEventListener("mousemove",be),$e.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=$e;ke||(ke=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:ke},level1:{props:{status:o,error:i},component:Gt},segments:s},c=ce(n);Le([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;se.replaceState({id:re},"",e);const n=le(new URL(location.href));if(n)return fe(n,re,!0,t)}));export{ht as A,x as B,s as C,B as D,u as E,C as F,At as G,H,b as I,we as J,P as K,k as L,e as M,E as N,it as O,q as P,z as Q,l as R,dt as S,at as T,F as U,U as V,S as a,A as b,T as c,m as d,v as e,_ as f,d as g,f as h,ft as i,$ as j,N as k,nt as l,ot as m,t as n,rt as o,st as p,D as q,bt as r,i as s,w as t,I as u,y as v,g as w,ct as x,lt as y,ut as z};

import __inject_styles from './inject_styles.5607aec6.js';