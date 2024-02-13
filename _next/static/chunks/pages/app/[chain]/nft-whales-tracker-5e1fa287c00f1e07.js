(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4514],{28879:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",s="second",a="minute",i="hour",l="day",o="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:g,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),s=r%60;return(t<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(n,c),a=r-s<0,i=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-s)/(a?s-i:i-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:o,d:l,D:f,h:i,m:a,s:s,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",j={};j[b]=p;var y=function(e){return e instanceof _},N=function e(t,r,n){var s;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();j[a]&&(s=a),r&&(j[a]=r,s=a);var i=t.split("-");if(!s&&i.length>1)return e(i[0])}else{var l=t.name;j[l]=t,s=l}return!n&&s&&(b=s),s||!n&&b},w=function(e,t){if(y(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new _(r)},$=v;$.l=N,$.i=y,$.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function p(e){this.$L=N(e.locale,null,!0),this.parse(e)}var g=p.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return $},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},g.isAfter=function(e,t){return w(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<w(e)},g.$g=function(e,t,r){return $.u(e)?this[t]:this.set(r,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var r=this,n=!!$.u(t)||t,u=$.p(e),h=function(e,t){var s=$.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?s:s.endOf(l)},m=function(e,t){return $.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},x=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?h(1,0):h(31,11);case c:return n?h(1,p):h(0,p+1);case o:var b=this.$locale().weekStart||0,j=(x<b?x+7:x)-b;return h(n?g-j:g+(6-j),p);case l:case f:return m(v+"Hours",0);case i:return m(v+"Minutes",1);case a:return m(v+"Seconds",2);case s:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var r,o=$.p(e),u="set"+(this.$u?"UTC":""),h=(r={},r[l]=u+"Date",r[f]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[i]=u+"Hours",r[a]=u+"Minutes",r[s]=u+"Seconds",r[n]=u+"Milliseconds",r)[o],m=o===l?this.$D+(t-this.$W):t;if(o===c||o===d){var x=this.clone().set(f,1);x.$d[h](m),x.init(),this.$d=x.set(f,Math.min(this.$D,x.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[$.p(e)]()},g.add=function(n,u){var f,h=this;n=Number(n);var m=$.p(u),x=function(e){var t=w(h);return $.w(t.date(t.date()+Math.round(e*n)),h)};if(m===c)return this.set(c,this.$M+n);if(m===d)return this.set(d,this.$y+n);if(m===l)return x(1);if(m===o)return x(7);var p=(f={},f[a]=t,f[i]=r,f[s]=e,f)[m]||1,g=this.$d.getTime()+n*p;return $.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=$.z(this),a=this.$H,i=this.$m,l=this.$M,o=r.weekdays,c=r.months,u=function(e,r,s,a){return e&&(e[r]||e(t,n))||s[r].slice(0,a)},d=function(e){return $.s(a%12||12,e,"0")},f=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:$.s(l+1,2,"0"),MMM:u(r.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,o,2),ddd:u(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:$.s(a,2,"0"),h:d(1),hh:d(2),a:f(a,i,!0),A:f(a,i,!1),m:String(i),mm:$.s(i,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:s};return n.replace(x,(function(e,t){return t||m[e]||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,f,h){var m,x=$.p(f),p=w(n),g=(p.utcOffset()-this.utcOffset())*t,v=this-p,b=$.m(this,p);return b=(m={},m[d]=b/12,m[c]=b,m[u]=b/3,m[o]=(v-g)/6048e5,m[l]=(v-g)/864e5,m[i]=v/r,m[a]=v/t,m[s]=v/e,m)[x]||v,h?b:$.a(b)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return j[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=N(e,t,!0);return n&&(r.$L=n),r},g.clone=function(){return $.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),k=_.prototype;return w.prototype=k,[["$ms",n],["$s",s],["$m",a],["$H",i],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,_,w),e.$i=!0),w},w.locale=N,w.isDayjs=y,w.unix=function(e){return w(1e3*e)},w.en=j[b],w.Ls=j,w.p={},w}()},77491:function(e){e.exports=function(){"use strict";return function(e,t,r){e=e||{};var n=t.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,r,s){return n.fromToBase(e,t,r,s)}r.en.relativeTime=s,n.fromToBase=function(t,n,a,i,l){for(var o,c,u,d=a.$locale().relativeTime||s,f=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=f.length,m=0;m<h;m+=1){var x=f[m];x.d&&(o=i?r(t).diff(a,x.d,!0):a.diff(t,x.d,!0));var p=(e.rounding||Math.round)(Math.abs(o));if(u=o>0,p<=x.r||!x.r){p<=1&&m>0&&(x=f[m-1]);var g=d[x.l];l&&(p=l(""+p)),c="string"==typeof g?g.replace("%d",p):g(p,n,x.l,u);break}}if(n)return c;var v=u?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},n.to=function(e,t){return a(e,t,this,!0)},n.from=function(e,t){return a(e,t,this)};var i=function(e){return e.$u?r.utc():r()};n.toNow=function(e){return this.to(i(this),e)},n.fromNow=function(e){return this.from(i(this),e)}}}()},14252:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/[chain]/nft-whales-tracker",function(){return r(73120)}])},3445:function(e,t,r){"use strict";r.d(t,{g:function(){return f}});var n=r(98788),s=r(70865),a=r(5163),i=r(36105),l=r(62141),o=r(82066),c=r(39081);function u(e,t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((function(e,t){var r;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return r="".concat(t,"details"),[4,i.od.get(r,{params:e})];case 1:return[2,n.sent().data]}}))}))).apply(this,arguments)}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,c.C)((function(e){return e.chain.chain})),n=(0,l.l)(e.chain||r).apiPrefix,a=(0,o.useQuery)(["pair-details",e,n],(function(){return u(e,n)}),(0,s.Z)({retry:2,refetchInterval:5e3,refetchOnWindowFocus:!0,enabled:!!e.pairId},t));return a}},73120:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(52322),s=r(21810),a=r(70865),i=r(96670),l=r(87394),o=r(72779),c=r.n(o),u=r(28879),d=r.n(u),f=r(13834),h=r(63542),m=r(24211),x=r(98788),p=r(5163),g=r(36105),v=r(82066);function b(e){return j.apply(this,arguments)}function j(){return j=(0,x.Z)((function(e){var t,r,n,s=arguments;return(0,p.__generator)(this,(function(l){switch(l.label){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r="/nft-api/nft_whales",[4,g.od.get(r,{params:(0,i.Z)((0,a.Z)({},e),{page:t})})];case 1:return n=l.sent(),[2,(0,i.Z)((0,a.Z)({},n.data),{nextPage:n.data.data.length?t+1:void 0})]}}))})),j.apply(this,arguments)}var y=function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(0,v.useInfiniteQuery)(["nft-whales_infinite",e],(function(t){var r=t.pageParam;return b(e,r)}),(0,i.Z)((0,a.Z)({},n),{getPreviousPageParam:function(e){return null!==(t=null===e||void 0===e?void 0:e.nextPage)&&void 0!==t?t:void 0},getNextPageParam:function(e){return null!==(r=null===e||void 0===e?void 0:e.nextPage)&&void 0!==r?r:void 0}}));return s},N=r(3445),w=r(41651),$=r(96577),_=r.n($),k=r(2784),M=r(8799),D=r(93923),S=r(86776),T=r(40060),Z=r(6691),C=r(21329),O=r(77491);d().extend(O);var P=function(e){var t=e.contract,r=e.trades,s=e.marketplace,a=e.token_id,i=e.timestamp,l=e.price,o=e.tx_hash,u=e.buyer_address,m=e.seller_address,x=e.name,p=e.image_url,g=(0,h.d)({src:p}).loaded,v=(0,f.ss)(),b=v.logo,j=v.explorerLink,y=v.chainLogo,$=v.wrappedPairId,D=(0,N.g)({pairId:$}).data,O=(0,k.useMemo)((function(){return l*((null===D||void 0===D?void 0:D.data.priceUsd)||0)}),[l,null===D||void 0===D?void 0:D.data.priceUsd]),P=(0,f.ud)();return(0,n.jsxs)("div",{className:"table-row__desktop_grid my-1 rounded-lg bg-[#11213382] p-2 hover:bg-[#122133]",children:[(0,n.jsx)("div",{className:"ml-2 flex items-center justify-start",children:(0,n.jsx)(_(),{src:y,alt:"chain",width:"18",height:"18",className:"rounded-full"})}),(0,n.jsxs)("a",{className:"relative flex items-center",children:[(0,n.jsx)("div",{className:"flex h-[50px] w-[50px] items-center justify-center",children:g?(0,n.jsx)("img",{src:p||P,alt:"logo",className:"nft-img h-full w-auto rounded-md transition-all duration-200"}):(0,n.jsx)("div",{className:"flex h-full flex-1 animate-pulse items-center justify-center rounded-md bg-[#091525]",children:(0,n.jsx)(M.Lwf,{className:"text-2xl text-gray-600"})})}),(0,n.jsxs)("div",{className:"flex h-full flex-1 flex-col justify-center pl-4",children:[(0,n.jsx)("p",{className:"font-semibold text-white",children:x}),(0,n.jsxs)("p",{className:"one-line break-all text-sm text-blue-400",children:["#",a]})]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("p",{className:"font-semibold text-white",children:[(0,T.cp)(l,4,!0)," ETH"]}),!!O&&(0,n.jsxs)("p",{className:"text-[13px] text-slate-400",children:["$",(0,T.cp)(O,4,!0)]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-start justify-center gap-2",children:[(0,n.jsxs)("a",{href:"".concat(j,"address/").concat(m),target:"_blank",rel:"noopener noreferrer",className:"group flex items-center",children:[(0,n.jsx)("span",{className:"mr-2 w-10 text-sm text-slate-400",children:"From:"}),(0,n.jsx)("img",{src:"".concat((0,Z.C)(),"/?Hash=").concat(m),alt:"avatar",width:"19",height:"19",className:"mr-1.5"}),(0,n.jsx)("p",{className:"cursor-pointer self-center text-center text-sm text-slate-400 group-hover:text-blue-300",children:(0,T.rC)(m,4)})]}),(0,n.jsxs)("a",{href:"".concat(j,"address/").concat(u),target:"_blank",rel:"noopener noreferrer",className:"group flex items-center",children:[(0,n.jsx)("span",{className:"mr-2 w-10 text-sm text-slate-400",children:"to:"}),(0,n.jsx)("img",{src:"".concat((0,Z.C)(),"/?Hash=").concat(u),alt:"avatar",width:"19",height:"19",className:"mr-1.5"}),(0,n.jsx)("p",{className:"cursor-pointer self-center text-center text-sm text-slate-400 group-hover:text-blue-300",children:(0,T.rC)(u,4)})]})]}),(0,n.jsxs)("div",{className:"flex items-center justify-center",children:[(0,n.jsx)("a",{href:(0,C.d)(s,t,a),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{src:(0,C.m)(s),alt:s,width:"19px",height:"19px",className:"rounded-full"})}),(0,n.jsx)("a",{href:"".concat(j,"tx/").concat(o),target:"_blank",rel:"noopener noreferrer",className:"mx-1.5 flex h-fit w-fit",children:(0,n.jsx)("img",{src:b,alt:"explorer",width:"18",height:"18",className:"rounded-full"})}),(0,n.jsx)(S.default,{trigger:function(e){return(0,n.jsx)("button",{className:c()("w-12 cursor-pointer rounded-md border border-gray-700 bg-[#182636] py-0.5 text-center text-xs text-white",{invisible:!r,"border-green-500":e}),children:r})},position:"left center",on:["hover"],offsetX:8,keepTooltipInside:"#__next",closeOnDocumentClick:!0,arrow:!1,children:function(e,t){return t?(0,n.jsx)(w.H,{maker:u,nativePrice:(null===D||void 0===D?void 0:D.data.priceUsd)||0}):null}})]}),(0,n.jsx)("p",{className:"self-center text-center text-sm text-white",children:d()(1e3*i).format("DD MMM, hh:mm A")})]})},I=function(){var e,t=y(),r=t.data,s=t.isLoading,o=t.fetchNextPage,u=t.isError,d=t.hasNextPage,h=void 0===d||d,x=(0,l.Z)((0,D.Z)({loading:s,hasNextPage:h,onLoadMore:function(){o()},disabled:u,rootMargin:"0px 0px 40px 0px"}),1)[0],p=(0,k.useState)({}),g=p[0],v=p[1];(0,m.F)({maker_list:(null===r||void 0===r?void 0:r.pages[r.pages.length-1].data.map((function(e){return e.buyer_address})))||[]},{enabled:!!(null===r||void 0===r?void 0:r.pages.length),onSuccess:function(e){v((function(t){return(0,a.Z)({},t,e)}))}});var b=(0,f.ss)(),j=b.chainLogo,N=b.name;return(0,n.jsx)("div",{className:"nft-whales-tracker-table-box-con flex",children:(0,n.jsxs)("div",{className:"nft-whales-tracker-table-box flex w-full flex-col bg-[#0C1826] px-5 pt-6 pb-4",children:[(0,n.jsx)("div",{className:"table-head relative flex justify-between",children:(0,n.jsxs)("div",{className:"table-head__texts",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:j,alt:"logo",width:"24",height:"24",className:"mr-2 rounded-full"}),(0,n.jsx)("p",{className:"text-2xl font-semibold text-white",children:"NFT Whales Big Trades Tracker"})]}),(0,n.jsxs)("p",{className:"mt-1 text-white",children:["Detects ",(0,n.jsx)("span",{className:"font-bold",children:"big"})," NFT ",(0,n.jsx)("span",{className:"font-bold",children:"trades"})," transactions by ",(0,n.jsx)("span",{className:"font-bold",children:"whales"})," on ",N," NFT Marketplaces in"," ",(0,n.jsx)("span",{className:"font-bold",children:"real-time"})," !"]})]})}),(0,n.jsxs)("div",{className:"nft-whales-tracker-table",children:[(0,n.jsx)("div",{className:c()("nft-whales-tracker__desktop_grid mt-4 min-w-fit border-[0.8px] border-l-0 border-r-0 border-[rgba(255,255,255,0.19)] px-2 py-2"),children:["Chain","NFT","Price","Transfer","Infos","Age"].map((function(e,t){return(0,n.jsx)("p",{className:c()("text-sm font-medium text-[rgba(255,255,255,0.7)]",{"text-left":t<2,"text-center":t>=2}),children:e},e)}))}),(0,n.jsxs)("div",{className:"nft-whales-tracker-table--body no-scroll-bar inline-block h-fit min-h-[200px] min-w-full overflow-y-auto",children:[null===r||void 0===r?void 0:r.pages.map((function(e){return e.data})).flat().map((function(e,t){return(0,n.jsx)(P,(0,i.Z)((0,a.Z)({},e),{trades:g[e.buyer_address]||0}),t)})),s&&(0,n.jsx)("div",{className:"mb-3 flex min-h-[inherit] items-center justify-center",children:(0,n.jsx)("div",{className:"dot-pulse"})}),!!(r&&(null===(e=r.pages[r.pages.length-1])||void 0===e?void 0:e.data.length)>0)&&(0,n.jsx)("div",{className:"flex items-center justify-center py-6",ref:x,children:(0,n.jsx)("div",{className:"dot-pulse"})})]})]})]})})},L=r(68543),F=r(77245),H=r(52742),A=r(77491);d().extend(A);var E=function(e){var t=e.contract,r=e.timestamp,s=e.price,a=e.token_id,i=e.marketplace,l=e.tx_hash,o=e.buyer_address,u=e.seller_address,d=e.name,m=e.trades,x=e.image_url,p=(0,T.DV)(r).countdown,g=(0,k.useState)(!1),v=g[0],b=g[1],j=(0,h.d)({src:x}).loaded,y=(0,f.ss)(),w=y.logo,$=y.explorerLink,D=y.wrappedPairId,O=(0,N.g)({pairId:D}).data,P=(0,k.useMemo)((function(){return s*((null===O||void 0===O?void 0:O.data.priceUsd)||0)}),[s,null===O||void 0===O?void 0:O.data.priceUsd]),I=(0,f.ud)();return(0,n.jsxs)("div",{className:"table-row__mobile animate-row my-1",children:[(0,n.jsxs)("div",{className:c()("table-row__mobile--grid rounded-lg bg-[#357eee1a] px-2 py-2",{"rounded-b-none":v}),onClick:function(){return b((function(e){return!e}))},children:[(0,n.jsxs)("div",{className:"relative flex items-center",children:[(0,n.jsx)("div",{className:"flex h-[36px] w-[36px] items-center justify-center",children:j?(0,n.jsx)("img",{src:x||I,alt:"logo",className:"nft-img h-full w-auto rounded-md transition-all duration-200"}):(0,n.jsx)("div",{className:"flex h-full flex-1 animate-pulse items-center justify-center rounded-md bg-[#091525]",children:(0,n.jsx)(M.Lwf,{className:"text-2xl text-gray-600"})})}),(0,n.jsxs)("div",{className:"flex h-full flex-1 flex-col justify-center pl-1.5",children:[(0,n.jsx)("p",{className:"one-line break-all text-[13px] font-semibold text-white",children:d}),(0,n.jsxs)("p",{className:"one-line break-all text-xs text-blue-400",children:["#",a]})]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-end",children:[(0,n.jsxs)("p",{className:c()("text-sm font-semibold text-white",{}),children:["$",P>999999999?(0,T.Et)(P):(0,T.cp)(P,0,!0)]}),(0,n.jsx)("p",{className:"mt-1 text-xs text-slate-400",children:p})]}),(0,n.jsxs)("div",{className:"flex items-center justify-center",children:[(0,n.jsx)("a",{href:(0,C.d)(i,t,a),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{src:(0,C.m)(i),alt:i,width:"18",height:"18",className:"mr-1.5 rounded-full"})}),(0,n.jsx)("a",{href:"".concat($,"tx/").concat(l),target:"_blank",rel:"noopener noreferrer",className:"flex h-fit w-fit self-center justify-self-center",children:(0,n.jsx)(_(),{src:w,alt:"explorer",width:"17",height:"17",className:"rounded-full"})})]}),(0,n.jsx)(F.OrA,{className:c()("transform-gpu self-center justify-self-end text-white duration-300",{"rotate-180":v})})]}),(0,n.jsx)("div",{className:c()("origin-top rounded-b-lg bg-[#357eee1a] text-white transition-all duration-200",{"mt-0.5 h-[60px] opacity-100":v,"h-0 opacity-0":!v}),children:v&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:c()("flex items-center justify-between px-2 pt-1.5"),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{className:"self-center text-xs text-[rgba(255,255,255,0.7)]",children:"From"}),(0,n.jsx)("p",{className:"ml-[5.6rem] self-center text-xs text-[rgba(255,255,255,0.7)]",children:"To"})]}),!!m&&(0,n.jsx)("p",{className:"self-center text-center text-xs text-[rgba(255,255,255,0.7)]",children:"Maker Trades"})]}),(0,n.jsxs)("div",{className:c()("flex items-center justify-between px-2 py-2"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,n.jsxs)("a",{href:"".concat($,"address/").concat(o),target:"_blank",rel:"noopener noreferrer",className:"group flex items-center",children:[(0,n.jsx)("img",{src:"".concat((0,Z.C)(),"/?Hash=").concat(o),alt:"avatar",width:"19",height:"19",className:"mr-1.5"}),(0,n.jsx)("p",{className:"cursor-pointer self-center text-center text-xs text-slate-400 group-hover:text-blue-300",children:(0,T.rC)(o,4)})]}),(0,n.jsx)(H.WFu,{className:"text-white"}),(0,n.jsxs)("a",{href:"".concat($,"address/").concat(u),target:"_blank",rel:"noopener noreferrer",className:"group flex items-center",children:[(0,n.jsx)("img",{src:"".concat((0,Z.C)(),"/?Hash=").concat(u),alt:"avatar",width:"19",height:"19",className:"mr-1.5"}),(0,n.jsx)("p",{className:"cursor-pointer self-center text-center text-xs text-slate-400 group-hover:text-blue-300",children:(0,T.rC)(u,4)})]})]}),(0,n.jsx)(S.default,{trigger:function(e){return(0,n.jsx)("button",{className:c()("mx-1 w-10 cursor-pointer rounded-md border border-gray-700 bg-[#182636] py-0.5 text-center text-xs text-white",{invisible:!m,"border-green-500":e}),children:m})},position:"bottom right",offsetX:10,offsetY:8,keepTooltipInside:"#__next",on:["click"],closeOnDocumentClick:!0,arrow:!1,children:function(e,t){return t?(0,n.jsx)(L.i,{maker:o,nativePrice:(null===O||void 0===O?void 0:O.data.priceUsd)||0}):null}})]})]})})]})},W=function(){var e,t=y(),r=t.data,s=t.isLoading,o=t.fetchNextPage,u=t.isError,d=t.hasNextPage,h=void 0===d||d,x=(0,l.Z)((0,D.Z)({loading:s,hasNextPage:h,onLoadMore:function(){o()},disabled:u,rootMargin:"0px 0px 40px 0px"}),1)[0],p=(0,k.useState)({}),g=p[0],v=p[1];(0,m.F)({maker_list:(null===r||void 0===r?void 0:r.pages[r.pages.length-1].data.map((function(e){return e.buyer_address})))||[]},{enabled:!!(null===r||void 0===r?void 0:r.pages.length),onSuccess:function(e){v((function(t){return(0,a.Z)({},t,e)}))}});var b=(0,f.ss)(),j=b.chainLogo,N=b.name;return(0,n.jsx)("div",{className:"nft-whales-tracker-table-box-con flex",children:(0,n.jsxs)("div",{className:"nft-whales-tracker-table-box flex w-full flex-col bg-[#0C1826]",children:[(0,n.jsx)("div",{className:"table-head relative flex justify-between",children:(0,n.jsx)("div",{className:"table-head__texts",children:(0,n.jsxs)("div",{className:"flex items-start",children:[(0,n.jsx)("img",{src:j,alt:"logo",width:"18",height:"18",className:"mr-1 mt-1 rounded-full"}),(0,n.jsxs)("p",{className:"my-0.5 text-center text-[13px] text-white",children:["Detects ",(0,n.jsx)("span",{className:"font-bold",children:"big"})," NFT ",(0,n.jsx)("span",{className:"font-bold",children:"trades"})," ","transactions by ",(0,n.jsx)("span",{className:"font-bold",children:"whales"})," on ",N," NFT Marketplaces in"," ",(0,n.jsx)("span",{className:"font-bold",children:"real-time"})," !"]})]})})}),(0,n.jsxs)("div",{className:"nft-whales-tracker-table",children:[(0,n.jsx)("div",{className:"nft-whales-tracker__mobile_grid mt-1.5 min-w-fit border-[0.8px] border-l-0 border-r-0 border-[rgba(255,255,255,0.19)] px-2 py-2",children:["NFT","Sale Value","Infos"].map((function(e,t){return(0,n.jsx)("p",{className:c()("self-center text-sm font-medium text-[rgba(255,255,255,0.7)]",{"text-center":2===t,"text-right":1===t}),children:e},e)}))}),(0,n.jsxs)("div",{className:"no-scroll-bar nft-whales-tracker__mobile_body inline-block h-fit min-h-[200px] min-w-full overflow-y-auto",children:[null===r||void 0===r?void 0:r.pages.map((function(e){return e.data})).flat().map((function(e,t){return(0,n.jsx)(E,(0,i.Z)((0,a.Z)({},e),{trades:g[e.buyer_address]||0}),t)})),s&&(0,n.jsx)("div",{className:"flex min-h-[inherit] items-center justify-center",children:(0,n.jsx)("div",{className:"dot-pulse"})}),!!(r&&(null===(e=r.pages[r.pages.length-1])||void 0===e?void 0:e.data.length)>0)&&(0,n.jsx)("div",{className:"my-4 flex items-center justify-center",ref:x,children:(0,n.jsx)("div",{className:"dot-pulse"})})]})]})]})})},Y=function(){var e=(0,T.fv)();return(0,n.jsxs)("div",{className:"nft-whales-tracker",children:[(0,n.jsx)(s.h,{name:"NFT Whales Tracker"}),e?(0,n.jsx)(W,{}):(0,n.jsx)(I,{})]})},U=r(97729),V=r.n(U),R=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(V(),{children:[(0,n.jsx)("title",{children:"Nft Whales Tracker - DexCheck"}),(0,n.jsx)("meta",{name:"title",content:"Nft Whales Tracker - DexCheck"}),(0,n.jsx)("meta",{name:"description",content:"Gainers and Losers"})]}),(0,n.jsx)(Y,{})]})}},6691:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});var n=function(){var e=window.location.hostname;return e.includes("www.")&&(e=e.replace("www.","")),"https://icons.".concat(e)}},21329:function(e,t,r){"use strict";r.d(t,{d:function(){return s},m:function(){return n}});var n=function(e){return"opensea"===e?"/assets/images/opensea.png":"x2y2"===e?"/assets/images/x2y2.png":"looksrare"===e?"/assets/images/looksrare.png":"blur"===e?"/assets/images/blur.jpeg":"https://static.oklink.com/cdn/explorer/icon/pool/unknow.png"},s=function(e,t,r){return"opensea"===e?"https://opensea.io/assets/ethereum/".concat(t,"/").concat(r):"x2y2"===e?"https://x2y2.io/eth/".concat(t,"/").concat(r):"looksrare"===e?"https://looksrare.org/collections/".concat(t,"/").concat(r):"blur"===e?"https://blur.io/asset/".concat(t,"/").concat(r):void 0}},60269:function(e,t,r){"use strict";r.d(t,{M:function(){return l},Z:function(){return i}});var n=r(28879),s=r.n(n),a=r(77491);s().extend(a);var i=function(e){return s()(e).isValid()?s()(e).fromNow(!0):e},l=function(e){return s()(e).isValid()?s()(e).fromNow(!0).replace("a month","30d").replace("a few seconds","< 1m").replace("an hour","1h").replace("hours","h").replace("a minute","< 1m").replace("minutes","m").replace("a day","1d").replace("days","d").replace("month","m").replace("year","y").replace("s","").replace(" ",""):e}},93923:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2784),s=[0];function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e){var t,r=function(e){var t,r,a=null!=(t=null==e?void 0:e.rootMargin)?t:"0px",i=null!=(r=null==e?void 0:e.threshold)?r:s,l=(0,n.useRef)(null),o=(0,n.useRef)(null),c=(0,n.useRef)(null),u=(0,n.useState)(),d=u[0],f=u[1],h=(0,n.useCallback)((function(){var e=c.current;null==e||e.disconnect(),c.current=null}),[]),m=(0,n.useCallback)((function(){var e=l.current;if(e){var t=o.current,r=new IntersectionObserver((function(e){var t=e[0];f(t)}),{root:t,rootMargin:a,threshold:i});r.observe(e),c.current=r}}),[a,i]),x=(0,n.useCallback)((function(){h(),m()}),[m,h]),p=(0,n.useCallback)((function(e){l.current=e,x()}),[x]),g=(0,n.useCallback)((function(e){o.current=e,x()}),[x]);return(0,n.useEffect)((function(){return x(),function(){h()}}),[x,h]),[p,{entry:d,rootRef:g}]}(e),i=r[0],l=r[1],o=Boolean(null==(t=l.entry)?void 0:t.isIntersecting),c=(0,n.useState)(o),u=c[0],d=c[1];return(0,n.useEffect)((function(){o&&d(o)}),[o]),[i,a({},l,{isVisible:o,wasEverVisible:u})]}var l=function(e){var t=e.loading,r=e.hasNextPage,s=e.onLoadMore,a=e.rootMargin,l=e.disabled,o=e.delayInMs,c=void 0===o?100:o,u=i({rootMargin:a}),d=u[0],f=u[1],h=f.rootRef,m=f.isVisible,x=!l&&!t&&m&&r;return(0,n.useEffect)((function(){if(x){var e=setTimeout((function(){s()}),c);return function(){clearTimeout(e)}}}),[s,x,c]),[d,{rootRef:h}]}},30630:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},18770:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,{Z:function(){return n}})},33579:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},93520:function(e,t,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return n}})},87394:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(18770),s=r(33579),a=r(93520),i=r(15459);function l(e,t){return(0,n.Z)(e)||(0,s.Z)(e,t)||(0,i.Z)(e,t)||(0,a.Z)()}},15459:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(30630);function s(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[6776,7473,1810,1663,9774,2888,179],(function(){return t=14252,e(e.s=t);var t}));var t=e.O();_N_E=t}]);