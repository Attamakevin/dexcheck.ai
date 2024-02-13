"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7483],{51659:function(e,t,r){var n,a=r(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}t.Z=function(e){return a.createElement("svg",s({width:10,height:8,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=a.createElement("path",{d:"M9.529.25a.417.417 0 0 0-.363-.208H.833a.417.417 0 0 0-.358.625L4.64 7.75a.417.417 0 0 0 .717 0L9.525.667A.417.417 0 0 0 9.529.25Z",fill:"currentColor"})))}},44822:function(e,t,r){r.d(t,{q:function(){return x}});var n=r(52322),a=r(23882),s=r(2784),i=r(77245),l=r(88932),o=r(40060),c=r(67579),d=r(505),x=(0,s.memo)((function(e){var t=e.children,r=e.copyContent,x=e.noTooltip,u=void 0!==x&&x,f=e.className,p=void 0===f?"":f,m=e.disabled,h=e.toastMessage,v=void 0===h?"Address copied to clipboard!":h,b=(0,o.m9)().copy,g=(0,s.useState)((function(){return(0,a.Z)("copy-button__")}))[0],j=(0,o.fv)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{"data-tip":!0,"data-for":g,disabled:m,className:(0,c.m)("transform text-xs text-white duration-200 hover:text-sm hover:text-green-400",p),onClick:function(e){b(r).then((function(){return(0,l.Am)(v)})),e.stopPropagation(),e.preventDefault()},children:t||(0,n.jsx)(i.LhG,{})}),!j&&!u&&(0,n.jsx)(d.Tooltip,{className:"min-w-max !rounded-lg !px-2 !py-1 !text-center !opacity-100",id:g,multiline:!0,place:"right",effect:"solid",backgroundColor:"#18293A",children:(0,n.jsx)("span",{className:"text-[13px]",children:"Copy Address"})})]})}));x.displayName="CopyButton"},44125:function(e,t,r){r.d(t,{O:function(){return u}});var n=r(98788),a=r(70865),s=r(5163),i=r(36105),l=r(62141),o=r(82066),c=r(39081);function d(e,t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)((function(e,t){var r;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return r="".concat(t,"token_details"),[4,i.od.get(r,{params:e})];case 1:return[2,n.sent().data]}}))}))).apply(this,arguments)}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,c.C)((function(e){return e.chain.chain})),n=(0,l.l)(e.chain||r).apiPrefix,s=(0,o.useQuery)(["token-details",e,n],(function(){return d(e,n)}),(0,a.Z)({retry:2,enabled:!!e.token_id},t));return s}},31694:function(e,t,r){r.d(t,{a:function(){return p}});var n=r(98788),a=r(70865),s=r(96670),i=r(5163),l=r(36105),o=r(62141),c=r(82066),d=r(39081),x=r(40060);function u(e,t){return f.apply(this,arguments)}function f(){return f=(0,n.Z)((function(e,t){var r,n,o,c=arguments;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:1,n="".concat(t).concat(e.top?"top_tokens_traders":"token_top_traders"),[4,l.od.get(n,{params:(0,a.Z)((0,s.Z)((0,a.Z)({},e),{page:r}),(0,x.wV)(!!e.maker_list,{maker_list:JSON.stringify(e.maker_list)}))})];case 1:return[2,{data:(o=i.sent()).data,nextPage:o.data.length?r+1:void 0}]}}))})),f.apply(this,arguments)}var p=function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,d.C)((function(e){return e.chain.chain})),l=(0,o.l)(e.chain||i).apiPrefix,x=(0,c.useInfiniteQuery)(["token-top-traders",e,l],(function(t){var r=t.pageParam;return u(e,l,r)}),(0,s.Z)((0,a.Z)({},n),{getPreviousPageParam:function(e){return null!==(t=null===e||void 0===e?void 0:e.nextPage)&&void 0!==t?t:void 0},getNextPageParam:function(e){return null!==(r=null===e||void 0===e?void 0:e.nextPage)&&void 0!==r?r:void 0}}));return x}},50765:function(e,t,r){r.d(t,{B:function(){return f}});var n=r(98788),a=r(70865),s=r(96670),i=r(5163),l=r(36105),o=r(62141),c=r(82066),d=r(39081);function x(e,t){return u.apply(this,arguments)}function u(){return u=(0,n.Z)((function(e,t){var r,n,o,c=arguments;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:1,n="".concat(t,"token_top_traders_breakdown"),[4,l.od.get(n,{params:(0,s.Z)((0,a.Z)({size:20},e),{page:r})})];case 1:return o=i.sent(),[2,(0,s.Z)((0,a.Z)({},o.data),{nextPage:r+1})]}}))})),u.apply(this,arguments)}var f=function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,d.C)((function(e){return e.chain.chain})),l=(0,o.l)(e.chain||i).apiPrefix,u=(0,c.useInfiniteQuery)(["trades-breakdown-by-token_id",e,l],(function(t){var r=t.pageParam;return x(e,l,r)}),(0,s.Z)((0,a.Z)({},n),{retry:!1,getPreviousPageParam:function(e){return null!==(t=null===e||void 0===e?void 0:e.nextPage)&&void 0!==t?t:void 0},getNextPageParam:function(e){return null!==(r=null===e||void 0===e?void 0:e.nextPage)&&void 0!==r?r:void 0}}));return u}},65455:function(e,t,r){r.r(t),r.d(t,{FavTradersCtxProvider:function(){return d},useFavTradersCtx:function(){return x},useFavTradersLocalStorage:function(){return u}});var n=r(87394),a=r(50930),s=r(52322),i=r(2784),l=r(8799),o=r(76940),c=(0,i.createContext)({savedTraders:[],isSaved:function(){return!1},onSave:function(){}}),d=function(e){var t=e.children,r=(0,n.Z)((0,o.Z)("TOP-TRADERS-V3"),2),l=r[0],d=r[1],x=(0,i.useMemo)((function(){return l?JSON.parse(l):[]}),[l]),u=(0,i.useCallback)((function(e){if(l){var t=JSON.parse(l);if(Array.isArray(t))return t.map((function(e){return e.address})).includes(e)}return!1}),[l]),f=(0,i.useCallback)((function(e,t){u(e)?d(JSON.stringify((0,a.Z)(JSON.parse(l||"[]")).filter((function(t){return t.address!==e})))):d(JSON.stringify((0,a.Z)(JSON.parse(l||"[]")).concat([{address:e,chain:t}])))}),[u,d,l]);return(0,s.jsx)(c.Provider,{value:{isSaved:u,onSave:f,savedTraders:x},children:t})},x=function(){return(0,i.useContext)(c)},u=function(){var e=(0,n.Z)((0,o.Z)("TOP-TRADERS-V2"),2),t=e[0],r=e[1],s=(0,i.useMemo)((function(){if(t)return JSON.parse(t)}),[t]),l=(0,i.useCallback)((function(e){if(t){var r=JSON.parse(t);if(Array.isArray(r))return r.map((function(e){return e.address})).includes(e)}}),[t]),c=(0,i.useCallback)((function(e,n){l(e)?r(JSON.stringify((0,a.Z)(JSON.parse(t||"[]")).filter((function(t){return t.address!==e})))):r(JSON.stringify((0,a.Z)(JSON.parse(t||"[]")).concat([{address:e,chain:n}])))}),[l,r,t]);return{savedTraders:s||[],isSaved:l,onSave:c}};t.default=function(e){var t=e.address,r=e.chain,n=e.disabled,a=x(),i=a.isSaved,o=a.onSave;return(0,s.jsx)("button",{disabled:n,className:"flex items-center rounded-lg border border-[#4b4e5e] px-1.5 py-1.5 text-white",onClick:function(){return o(t,r)},children:i(t)?(0,s.jsx)(l.ytW,{className:"scale-90"}):(0,s.jsx)(l.sF8,{className:"scale-90"})})}},11192:function(e,t,r){r.d(t,{$:function(){return E},N:function(){return L}});var n=r(70865),a=r(96670),s=r(87394),i=r(52322),l=r(72779),o=r.n(l),c=r(28879),d=r.n(c),x=r(13834),u=r(31694),f=r(50765),p=r(25237),m=r.n(p),h=r(96577),v=r.n(h),b=r(51659),g=r(2784),j=r(77245),N=r(65186),y=r(93923),_=r(86776),w=r(40060),k=r(505),P=r(27376),C=r(44125),S=r(46306),Z=r(85819),O=r(3624),T=r(44822),z=r(77491),A=r.n(z),B=r(6691),M=r(94203),J=m()((function(){return Promise.resolve().then(r.bind(r,65455))}),{loadableGenerated:{webpack:function(){return[65455]}},ssr:!1});d().extend(A());var E=function(e){var t,r,n,a,l,c=e.token_id,u=e.maker,p=e.chain,m=e.sell_size,h=e.sell_price,b=e.buy_size,j=e.buy_price,N=e.symbol,_=void 0===N?"":N,k=e.profit,P=e.tokenName,O=void 0===P?_:P,T=e.coingecko,z=e.showBoughtSold,A=void 0===z||z,B=e.timeframe,M=void 0===B?30:B,J=e.roi,E=void 0===J?0:J,$=e.unrealized_profit,D=void 0===$?0:$,L=e.unrealized_roi,I=void 0===L?0:L,F=e.no_profit,R=(0,g.useState)(M),U=R[0],Q=R[1],G=(0,x.c6)(p),K=G.logo,V=G.explorerLink,W=(0,C.O)({token_id:c,chain:p},{refetchOnWindowFocus:!1}).data,X=(0,f.B)({maker:u,token_id:c,timeframe:U,chain:p,coingecko:T?1:0,no_profit:F}),q=X.data,H=X.isLoading,Y=X.fetchNextPage,ee=X.isError,te=X.hasNextPage,re=void 0===te||te,ne=(0,s.Z)((0,y.Z)({loading:H,hasNextPage:re,onLoadMore:Y,disabled:ee,rootMargin:"0px 0px 20px 0px"}),1)[0],ae=(null===(t=null===q||void 0===q?void 0:q.pages[0].data.buy)||void 0===t?void 0:t.txn_count)||0,se=(null===(r=null===q||void 0===q?void 0:q.pages[0].data.sell)||void 0===r?void 0:r.txn_count)||0,ie=(null===(n=null===q||void 0===q?void 0:q.pages[0].data.buy)||void 0===n?void 0:n.total_amount_usd)||0,le=(null===(a=null===q||void 0===q?void 0:q.pages[0].data.sell)||void 0===a?void 0:a.total_amount_usd)||0,oe=(null===q||void 0===q?void 0:q.pages[0].data.usd_balance)||0,ce=(null===q||void 0===q?void 0:q.pages[0].data.wallet_balance)||0,de=(0,g.useMemo)((function(){return 1===U?"1d":7===U?"1w":30===U?"1m":60===U?"2m":90===U?"3m":"1m"}),[U]);return(0,i.jsxs)("div",{className:"relative flex h-[560px] w-[580px] max-w-[92vw] flex-col rounded-xl border-[0.8px] border-[#ffffff30] bg-[#0c1826] px-1.5 py-1 shadow-xl",children:[(0,i.jsx)("div",{className:"absolute right-4 top-2 z-20 flex justify-end",children:(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"Open in new tab",href:"/app/".concat(p,"/trades-chart/").concat(c,"?maker=").concat(u,"&timeframe=").concat(de),className:"transform text-lg text-white duration-200 hover:scale-110 hover:text-blue-400",children:(0,i.jsx)(Z.ZiU,{})})}),(0,i.jsx)("div",{className:"flex h-[265px]",children:!!W&&(0,i.jsx)(S.s,{chain:p,token_id:c,price:W.data.price,price_variation:W.data.price_change,token_name:O,maker:u,activeTimeframe:de,onTimeframeChange:function(e){"1d"===e?Q(1):"1w"===e?Q(7):"1m"===e?Q(30):"2m"===e?Q(60):"3m"===e&&Q(90)},timeframes:{}})}),(0,i.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,i.jsxs)("div",{className:"flex items-center border-y border-[rgba(255,255,255,0.19)] px-2 py-1",children:[(0,i.jsxs)("p",{className:"mr-2 border-r border-[rgba(255,255,255,0.19)] pr-2 text-[13px] text-white",children:["Address:"," ",(0,i.jsx)("a",{href:"".concat(V,"address/").concat(u),target:"_blank",rel:"noopener noreferrer",className:"outline-none",children:(0,w.rC)(u,4)})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{className:"text-[13px] text-white",children:["Balance:"," ",(0,i.jsxs)("span",{className:"ml-0.5 font-semibold",children:[(0,w.cp)(ce,2,!0)," ",_," ",(0,i.jsxs)("span",{className:"font-normal",children:["($",(0,w.cp)(oe,2,!0),")"]})]})]})]}),(0,i.jsxs)("div",{className:"flex items-center border-b border-[rgba(255,255,255,0.19)] px-2 py-1",children:[(0,i.jsxs)("p",{className:"text-[13px] leading-[1.5rem] text-white",children:["Total TXs (",U,"D): ",(0,i.jsx)("span",{className:"font-semibold text-white",children:(0,w.cp)(ae+se,2,!0)})]}),(0,i.jsxs)("p",{className:"mx-3 border-r border-l border-[rgba(255,255,255,0.19)] px-3 text-[13px] leading-[1.5rem] text-[#16c784]",children:["Buys:",(0,i.jsxs)("span",{className:"font-semibold text-[#16c784]",children:[" ",ae," / ",(0,w.cp)(ie,2,!0),"$"]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{className:"text-[13px] leading-[1.5rem] text-[#ea3943]",children:["Sells:",(0,i.jsxs)("span",{className:"font-semibold text-[#ea3943]",children:[" ",se," / ",(0,w.cp)(le,2,!0),"$"]})]})]}),(0,i.jsxs)("div",{className:"flex gap-2 border-b-[0.8px] border-[#ffffff30] px-2 pt-2 pb-1",children:[(0,i.jsxs)("p",{className:"border-r border-[#ffffff30] pr-2 text-[13px] font-semibold text-white",children:["Profit (ROI):"," ",(0,i.jsxs)("span",{className:o()("text-[15px]",{"text-[#16c784]":(0,w.xP)(k),"text-[#ea3943]":(0,w.nM)(k)}),children:["$",(0,w.cp)(k,2,!0)]})," ","(",(0,w.cp)(E,0),"%)"]}),(0,i.jsxs)("p",{className:"flex-1 text-[13px] font-semibold text-white",children:["Unrealized Profit ",I?"(ROI)":"",":"," ",(0,i.jsxs)("span",{className:o()("text-[15px]",{"text-[#16c784]":(0,w.xP)(D),"text-[#ea3943]":(0,w.nM)(D)}),children:["$",(0,w.cp)(D,2,!0)]})," ",!!I&&(0,i.jsxs)(i.Fragment,{children:["(",(0,w.cp)(I,0),"%)"]})]})]}),A&&(0,i.jsxs)("p",{className:"px-2 pb-2 pt-1.5 text-[13px] text-white",children:["Total bought ",(0,i.jsx)("span",{className:"font-semibold",children:(0,w.cp)(b,2,!0)})," ",_," at average price of $",(0,i.jsx)("span",{className:"font-semibold",children:(0,w.cp)(j,2,!0)})," ",(0,i.jsx)("br",{}),"Total sold ",(0,i.jsx)("span",{className:"font-semibold",children:(0,w.cp)(m,2,!0)})," ",_," at average price of $",(0,i.jsx)("span",{className:"font-semibold",children:(0,w.cp)(h,2,!0)})]}),(0,i.jsxs)("div",{className:"grid grid-cols-[0.25fr_0.8fr_0.8fr_0.8fr_1fr_30px] gap-1 border-[0.8px] border-l-0 border-r-0 border-[rgba(255,255,255,0.19)] px-2 py-1.5",children:[(0,i.jsx)("p",{className:"justify-self-start px-0.5 text-[13px] font-semibold text-[#BBC1C4]",children:"Type"}),(0,i.jsx)("p",{className:"px-0.5 text-center text-[13px] font-medium text-[rgba(255,255,255,0.7)]",children:"Quantity"}),(0,i.jsx)("p",{className:"w-max min-w-full px-0.5 text-center text-[13px] font-medium text-[rgba(255,255,255,0.7)]",children:"Amount USD"}),(0,i.jsx)("p",{className:"w-max min-w-full px-0.5 text-center text-[13px] font-medium text-[rgba(255,255,255,0.7)]",children:"Price USD"}),(0,i.jsx)("p",{className:"px-0.5 text-center text-[13px] font-medium text-[rgba(255,255,255,0.7)]",children:"Age"}),(0,i.jsx)("p",{className:"px-0.5 text-center text-[13px] font-semibold text-[#BBC1C4]",children:"TX"})]}),(0,i.jsxs)("div",{className:"no-scroll-bar flex-1 basis-0 overflow-auto",children:[null===q||void 0===q?void 0:q.pages.map((function(e){return e.data.trades})).flat().map((function(e,t){return(0,i.jsxs)("div",{className:o()("mt-0.5 grid grid-cols-[0.25fr_0.8fr_0.8fr_0.8fr_1fr_30px] gap-1 p-1.5",{"bg-[#ff78782d] hover:bg-[#ff78784b]":"sell"===e.side,"bg-[#35eec21a] hover:bg-[#35eec337]":"buy"===e.side}),children:[(0,i.jsx)("p",{className:o()("self-center justify-self-start text-center text-[13px] capitalize",{"text-[#ea3943]":"sell"===e.side,"text-[#16c784]":"buy"===e.side}),children:e.side}),(0,i.jsx)("p",{className:"self-center justify-self-center text-center text-[13px] text-white",children:(0,w.cp)(e.amount_usd/e.usd_price,2,!0)}),(0,i.jsxs)("p",{className:"self-center justify-self-center text-center text-[13px] text-white",children:["$",(0,w.cp)(e.amount_usd,2,!0)]}),(0,i.jsxs)("p",{className:"self-center justify-self-center text-center text-[13px] text-white",children:["$",(0,w.cp)(e.usd_price,2,!0)]}),(0,i.jsx)("p",{className:"self-center justify-self-center text-center text-[13px] text-white",children:d()(1e3*e.timestamp).format("DD MMM, hh:mm A")}),(0,i.jsx)("div",{className:"flex items-center justify-center",children:(0,i.jsx)("a",{href:"".concat(V,"tx/").concat(e.tx_hash),target:"_blank",rel:"noopener noreferrer",className:"h-[20px] w-[20px]",children:(0,i.jsx)(v(),{src:K,alt:"bsc",width:"16px",height:"16px",className:"rounded-full"})})})]},t)})),!!(q&&(null===(l=q.pages[q.pages.length-1])||void 0===l?void 0:l.data.trades.length)>0)&&(0,i.jsx)("div",{className:"flex items-center justify-center py-3",ref:ne,children:(0,i.jsx)("div",{className:"dot-pulse"})})]})]}),H&&(0,i.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,i.jsx)("div",{className:"dot-pulse"})})]})},$=function(e){var t=e.timeframe,r=e.token_id,n=e.maker,a=e.trades,s=e.investment_usd,l=e.profit_usd,c=e.base_name,d=e.base_symbol,u=e.icon,f=e.isBot,p=e.unrealized_profit,m=e.roi,h=e.coingecko,b=e.sell_size,j=void 0===b?0:b,y=e.sell_price,C=void 0===y?0:y,S=e.buy_size,Z=void 0===S?0:S,z=e.buy_price,A=void 0===z?0:z,$=e.locked,D=void 0!==$&&$,L=(0,x.ss)(),I=L.chain,F=L.logo,R=L.explorerLink,U=L.emptyTokenLogo,Q=(0,g.useMemo)((function(){return 100*l/(s||1)}),[s,l]),G=p||0;return(0,i.jsxs)("div",{className:"animate-row table-row__desktop_grid my-1 gap-1 rounded-lg bg-[#112134] px-2 py-2",children:[(0,i.jsxs)("div",{className:"flex items-center justify-start",children:[(0,i.jsx)("img",{src:"".concat((0,B.C)(),"/?Hash=").concat(n),alt:"avatar",width:"26",height:"26",className:"mr-1.5"}),(0,i.jsx)(P.I,{pClass:"self-center text-left text-[15px] text-[#2D68FF]",address:n,locked:D})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"relative mr-1.5 flex min-w-fit rounded-full bg-white",children:(0,i.jsx)("img",{src:u||U,alt:"bnb",width:"32",height:"32",className:"rounded-full"})}),(0,i.jsxs)("div",{className:"flex h-[42px] flex-1 flex-col justify-center",children:[(0,i.jsx)("p",{className:"one-line text-[15px] text-white",children:c}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("p",{className:"text-[15px] font-bold text-white",children:d}),(0,i.jsx)(T.q,{copyContent:r})]})]})]}),(0,i.jsxs)("p",{className:o()("self-center text-center",{"font-semibold":l>=3e4&&l<5e4,"font-bold":l>=5e4&&l<1e5,"font-extrabold":l>=1e5,"text-[#ea3943]":(0,w.nM)(l),"text-[#16c784]":(0,w.xP)(l)}),children:["$",D?(0,M.E)(l):(0,w.cp)(l,0,!0)]}),(0,i.jsxs)(w.SK,{condition:!!G,children:[(0,i.jsx)(w.SK.If,{children:(0,i.jsxs)("p",{className:o()("self-center text-center",{"font-semibold":G>=3e4&&G<5e4,"font-bold":G>=5e4&&G<1e5,"font-extrabold":G>=1e5,"text-[#ea3943]":(0,w.nM)(G),"text-[#16c784]":(0,w.xP)(G)}),children:["$",D?(0,M.E)(G):(0,w.cp)(G,0,!0)]})}),(0,i.jsx)(w.SK.Else,{children:(0,i.jsx)("p",{className:"self-center text-center text-white",children:"-"})})]}),(0,i.jsxs)("p",{className:"self-center text-center text-white",children:[D?(0,M.E)(Q,0):(0,w.cp)(Q,0,!0),"%"]}),(0,i.jsxs)("div",{className:"group flex items-center justify-center",children:[(0,i.jsx)("button",{disabled:D,className:o()("w-6 scale-110 cursor-pointer",{invisible:!f}),"data-tip":!0,"data-for":"bot-tooltip",children:"\ud83e\udd16"}),(0,i.jsx)(k.Tooltip,{className:"min-w-max !rounded-lg !px-3 !text-center !opacity-100",id:"bot-tooltip",multiline:!0,place:"bottom",effect:"solid",backgroundColor:"#18293A",children:(0,i.jsxs)("span",{className:"text-[13px] text-white",children:["Address with over 1000 trades during",(0,i.jsx)("br",{})," the last 30 days. Most likely a Bot."]})}),(0,i.jsx)(_.default,{trigger:function(e){return(0,i.jsxs)("button",{disabled:D,className:"flex items-center px-2",children:[(0,i.jsx)("p",{className:"mr-0.5 text-white",children:D?(0,M.E)(a,0):(0,w.cp)(a,0,!0)}),(0,i.jsx)(N.eJU,{className:o()("scale-90 hover:text-[#16c784]",{"text-white":!e,"text-[#16c784]":e})})]})},position:"left center",on:["hover"],keepTooltipInside:"#__next",closeOnDocumentClick:!0,arrow:!1,children:function(e,a){return a?(0,i.jsx)(E,{sell_size:j,sell_price:C,buy_size:Z,buy_price:A,maker:n,token_id:r,chain:I,timeframe:t,tokenName:c,symbol:d,profit:l,coingecko:h,unrealized_profit:G||0,roi:m}):null}})]}),(0,i.jsx)("a",{href:"".concat(R,"address/").concat(D?n:M.W),target:"_blank",rel:"noopener noreferrer",className:(0,w.cn)("flex items-center justify-center",{disabled:D}),children:(0,i.jsx)(v(),{src:F,alt:"explorer",width:"18",height:"18"})}),(0,i.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[(0,i.jsx)(J,{address:n,chain:I,disabled:D}),(0,i.jsx)("button",{disabled:D,className:"h-fit w-fit self-center justify-self-center rounded-lg border border-[#4b4e5e] px-2 py-1 text-sm text-white",onClick:function(){return(0,O.Y)("/app/address-analyzer/".concat(n,"?timeframe=").concat(t,"&coingecko=").concat(h?1:0))},children:"Analyze"})]})]})},D=[{label:"All",value:void 0},{label:"> 10%",value:10},{label:"> 30%",value:30},{label:"> 50%",value:50},{label:"> 100%",value:100}],L=function(e){var t,r=e.timeframe,l=e.excludeBots,c=e.coingecko,d=e.top,x=e.locked,f=(0,g.useState)(),p=f[0],m=f[1],h=(0,g.useState)(void 0),v=h[0],N=h[1],k=(0,u.a)({size:20,sort_by:null===p||void 0===p?void 0:p.sortParam,sort_side:null===p||void 0===p?void 0:p.sortBy,timeframe:r,min_roi:v,top:d,coingecko:c?1:0,exclude_bots:l?1:0}),P=k.data,C=k.isLoading,S=k.fetchNextPage,Z=k.isError,O=k.hasNextPage,T=void 0===O||O,z=(0,s.Z)((0,y.Z)({loading:C,hasNextPage:T,onLoadMore:function(){S()},disabled:Z,rootMargin:"0px 0px 40px 0px"}),1)[0];return(0,i.jsxs)("div",{className:"top-traders-table",children:[(0,i.jsx)("div",{className:"top-traders__desktop_grid w-fit min-w-full border-[0.8px] border-l-0 border-r-0 border-[rgba(255,255,255,0.19)] px-2 py-2",children:["Address","Token Traded",{name:"Realized Profit",sort:"realized_profit"},"Unrealized Profit",{name:"Realized ROI",sort:"realized_roi"},{name:"Total Trades",sort:"trades"},"Infos","Action"].filter(Boolean).map((function(e,t){if(e&&"object"===typeof e){var r=e.sort;return e=e.name,(0,i.jsxs)("div",{className:"flex items-center justify-center",children:[(0,i.jsx)("p",{className:"text-sm font-medium text-[rgba(255,255,255,0.7)]",children:e},e),(0,i.jsx)("button",{disabled:x,className:"mx-1 p-0.5 text-[#BBC1C4]",title:"Sort ".concat(e),"aria-label":"Sort ".concat(e),onClick:function(){(null===p||void 0===p?void 0:p.sortParam)===r?"asc"===p.sortBy?m({sortParam:r,sortBy:"desc"}):m(void 0):m({sortParam:r,sortBy:"asc"})},children:(null===p||void 0===p?void 0:p.sortParam)===r?"desc"===p.sortBy?(0,i.jsx)(b.Z,{class:"text-[#16c784]"}):(0,i.jsx)(b.Z,{class:"rotate-180 transform text-[#16c784]"}):(0,i.jsx)(b.Z,{})}),"realized_roi"===r&&(0,i.jsx)(_.default,{closeOnDocumentClick:!0,arrow:!1,position:"bottom center",keepTooltipInside:"#__next",offsetY:8,offsetX:8,on:["click"],trigger:function(){return(0,i.jsx)("button",{disabled:x,title:"filter",className:"flex items-center justify-center text-sm font-medium text-white",children:(0,i.jsx)(j.Ol$,{className:"text-blue-400"})})},children:(0,i.jsx)("div",{className:"bg-primary-gradient mt-2 w-[7rem] rounded-xl px-[1px] pb-[1px]",children:D.map((function(e,t){return(0,i.jsx)("button",{disabled:x,onClick:function(){return N(e.value)},className:o()("w-full pt-[1.2px]",{"rounded-b-xl":t===D.length-1,"rounded-t-xl":0===t}),children:(0,i.jsxs)("div",{className:o()("flex cursor-pointer select-none items-center justify-between  bg-[#112134] px-3 py-2 text-white",{"bg-[#091524]":v===e.value,"rounded-b-xl":t===D.length-1,"rounded-t-xl":0===t}),children:[(0,i.jsx)("p",{className:"ml-1 select-none text-sm capitalize",children:e.label}),(0,i.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.value===v})]})},e.label)}))})})]},t)}return(0,i.jsx)("p",{className:o()("self-center text-sm font-medium text-[rgba(255,255,255,0.7)]",{"text-center":t>0}),children:e},e)}))}),(0,i.jsxs)("div",{className:(0,w.cn)("top-traders-table--body no-scroll-bar inline-block h-fit min-h-[400px] min-w-full",{"overflow-hidden":x,"overflow-y-auto":!x}),children:[null===P||void 0===P?void 0:P.pages.map((function(e){return e.data})).flat().map((function(e,t){return(0,i.jsx)($,(0,a.Z)((0,n.Z)({},e),{timeframe:r,coingecko:c,locked:x}),"".concat(e.maker,"::").concat(t))})),C&&(0,i.jsx)("div",{className:"mb-3 flex min-h-[inherit] items-center justify-center",children:(0,i.jsx)("div",{className:"dot-pulse"})}),!!(P&&(null===(t=P.pages[P.pages.length-1])||void 0===t?void 0:t.data.length)>0)&&(0,i.jsx)("div",{className:"flex items-center justify-center py-6",ref:z,children:(0,i.jsx)("div",{className:"dot-pulse"})})]})]})}},505:function(e,t,r){r.r(t),r.d(t,{Tooltip:function(){return a}});var n=r(25237),a=r.n(n)()((function(){return r.e(3710).then(r.bind(r,33710))}),{loadableGenerated:{webpack:function(){return[33710]}},ssr:!1})},9375:function(e,t,r){r.d(t,{D:function(){return n}});var n=function(e){return new Promise((function(t){setTimeout(t,e)}))}}}]);