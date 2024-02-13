"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4644],{27376:function(e,t,n){n.d(t,{I:function(){return _}});var r=n(47842),i=n(52322),o=n(72779),a=n.n(o),s=n(98788),c=n(70865),l=n(5163),u=n(36105),d=n(82066),p=n(9375);function f(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((function(e){var t;return(0,l.__generator)(this,(function(n){switch(n.label){case 0:return"/alert-api/all_maker_names",[4,u.od.get("/alert-api/all_maker_names",{params:e})];case 1:return t=n.sent(),[4,(0,p.D)(2e3)];case 2:return n.sent(),[2,t.data.data]}}))}))).apply(this,arguments)}var x=n(23882),h=n(2784),v=n(74782),y=n(88932),g=n(40060),b=n(505),w=n(94203),k=n(69702),_=function(e){var t=e.address,n=e.pClass,o=e.noTooltip,s=void 0!==o&&o,l=e.locked,u=void 0!==l&&l,p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,d.useQuery)(["all_maker_names"],(function(){return f(e)}),(0,c.Z)({retry:!1,refetchInterval:!1,keepPreviousData:!0,refetchOnWindowFocus:!1,enabled:!!e.user_wallet,staleTime:3e6,cacheTime:33e5},t))}({user_wallet:(0,k.mA)().address}),m=p.data,_=p.isLoading,C=(0,h.useState)((function(){return(0,x.Z)("address-loader__")}))[0],M=(0,g.fv)(),j=(0,g.m9)().copy,T=(0,h.useMemo)((function(){return u?w.W:t}),[t,u]);return(0,i.jsx)(i.Fragment,{children:_?(0,i.jsx)(v.ZP,{speed:2,width:M?60:100,height:M?8:10,viewBox:"0 0 ".concat(M?60:100," ").concat(M?8:10),backgroundColor:"#0E1F33",foregroundColor:"#1f3854",children:(0,i.jsx)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:M?60:100,height:M?8:10})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{"data-tip":!0,"data-for":C,role:"button","aria-label":"Copy address",title:"Copy address",className:a()("one-line cursor-pointer break-all",(0,r.Z)({},n,!!n)),onClick:function(e){u||(T&&j(T).then((function(){return(0,y.Am)("Address copied to your clipboard")})),e.stopPropagation())},children:T?(null===m||void 0===m?void 0:m[T.toLowerCase()])||(0,g.rC)(T,M?3:4,"center",M?"..":"..."):"-"}),!M&&!s&&(0,i.jsx)(b.Tooltip,{className:"min-w-max !rounded-lg !px-2 !py-1 !text-center !opacity-100",id:C,multiline:!0,place:"right",effect:"solid",backgroundColor:"#000",children:(0,i.jsx)("span",{className:"text-[13px]",children:T})})]})})}},83777:function(e,t,n){n.d(t,{k:function(){return p}});var r=n(98788),i=n(70865),o=n(5163),a=n(36105),s=n(62141),c=n(82066),l=n(39081);function u(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((function(e,t){var n;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return n="".concat(e,"token_charts"),[4,a.od.get(n,{params:(0,i.Z)({},t)})];case 1:return[2,r.sent().data]}}))}))).apply(this,arguments)}var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,l.C)((function(e){return e.chain.chain})),r=(0,s.l)(e.chain||n).apiPrefix,o=(0,c.useQuery)(["token-chart-data",r,e],(function(){return u(r,e)}),(0,i.Z)({retry:!1,keepPreviousData:!0},t));return o}},14607:function(e,t,n){n.d(t,{a:function(){return p}});var r=n(98788),i=n(70865),o=n(5163),a=n(36105),s=n(62141),c=n(82066),l=n(39081);function u(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((function(e,t){var n;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return n="".concat(t,"chart_plot"),[4,a.od.get(n,{params:e})];case 1:return[2,r.sent().data]}}))}))).apply(this,arguments)}var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,l.C)((function(e){return e.chain.chain})),r=(0,s.l)(e.chain||n).apiPrefix,o=(0,c.useQuery)(["chart_plot",e,r],(function(){return u(e,r)}),(0,i.Z)({retry:!1,enabled:!!e.token_id},t));return o}},46306:function(e,t,n){n.d(t,{s:function(){return M}});var r=n(47842),i=n(70865),o=n(96670),a=n(26297),s=n(52322),c=n(72779),l=n.n(c),u=n(28879),d=n.n(u),p=n(83777),f=n(14607),m=n(54982),x=n(35711),h=n(2784),v=n(40060),y="transparent",g="#8bca5f",b="#9e9e9e",w="#5d5d5d2a",k="rgba(139, 202, 95, 0.2)",_="rgba(139, 202, 95, 0.001)",C={"1h":0,"1d":1,"1w":2,"1m":3,"3m":4,"1y":5},M=function(e){var t=e.maker,n=e.token_id,c=e.chain,u=e.price,M=e.price_variation,j=e.token_name,T=e.activeTimeframe,N=e.timeframes,Z=void 0===N?C:N,z=e.showTokenInfoOnChart,D=void 0===z||z,A=e.onTimeframeChange,S=(0,h.useState)(T),L=S[0],P=S[1];(0,h.useEffect)((function(){null===A||void 0===A||A(L)}),[L,A]);var E=(0,f.a)({maker:t,token_id:n,chain:c,timeframe:L}),F=E.data,Y=E.isLoading,I=E.isFetched,O=(0,p.k)({token_id:n,timeframe:L,chain:c}),H=O.data,Q=O.isFetched,W=(0,h.useMemo)((function(){return(null===H||void 0===H?void 0:H.data.sort((function(e,t){return e.timestamp-t.timestamp})).map((function(e){return{time:e.timestamp,value:e.avg_price||0}})))||[]}),[null===H||void 0===H?void 0:H.data]),B=(0,h.useMemo)((function(){return W.map((function(e){return e.time}))}),[W]),R=(0,h.useMemo)((function(){return(null===F||void 0===F?void 0:F.data.sort((function(e,t){return e.timestamp-t.timestamp})).map((function(e){var t=e.timestamp,n=e.amount_usd,r=e.side,i=e.usd_price,o=B.findIndex((function(e){return t<e})),a=o+1,s=B[o];if(B[a]){var c=Math.abs(t-B[o]);Math.abs(t-B[a])<c&&(s=B[a])}return{timestamp:1e3*t,time:s||t,value:i,side:r,amount_usd:n}})))||[]}),[B,null===F||void 0===F?void 0:F.data]),U=(0,h.useRef)(null),$=(0,h.useMemo)((function(){return"1h"===L?"hh:mm:ss A":"1d"===L?"hh:mm A":"DD MMM"}),[L]);(0,h.useEffect)((function(){if(U.current){var e=(0,m.C2)(U.current,{layout:{background:{type:m.Mr.Solid,color:y},textColor:b},rightPriceScale:{borderColor:w},timeScale:{tickMarkFormatter:function(e){return d()(1e3*e).format($)}},grid:{horzLines:{color:w,style:m.TD.Dashed},vertLines:{color:w,style:m.TD.Dashed}}}),t=e.addAreaSeries({lineColor:g,topColor:k,bottomColor:_,lineWidth:1,priceFormat:{minMove:1e-11,type:"custom",formatter:function(e){return(0,v.cp)(e,4,!0,!0)}}});t.setData(W);var n=R.reduce((function(e,t){var n=d()(1e3*Number(t.time)).format("YYYY-MM-DD hh:mm A")+t.side,a=e[n];return(0,o.Z)((0,i.Z)({},e),(0,r.Z)({},n,(0,o.Z)((0,i.Z)({},t),(0,r.Z)({},t.side,((null===a||void 0===a?void 0:a[t.side])||0)+1))))}),{});if(t.setMarkers(Object.values(n).sort((function(e,t){return e.timestamp-t.timestamp})).map((function(e){var t=e.time,n=e.side,r=(0,a.Z)(e,["time","side"]);return{time:t,position:"buy"===n?"belowBar":"aboveBar",color:"buy"===n?"#16c784":"#ea3943",shape:"buy"===n?"arrowUp":"arrowDown",text:(r[n]||0)>1?"+".concat(r[n]):"",size:1}}))),D){var s=document.createElement("div");s.setAttribute("style","position: absolute; left: 12px; top: 6px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;"),U.current.appendChild(s);var c=document.createElement("div");c.innerHTML=j,c.style.fontWeight="900",c.style.marginBottom="4px",c.style.fontSize="20px",c.style.color="#fff",s.appendChild(c);var l=document.createElement("div");l.innerHTML="<p>".concat((0,v.cp)(u,4,!0,!0),'$ <span style="font-size: 14px; color: ').concat((0,v.xP)(M)?"#60dcac":"#ff656d",'; margin-left: 2px;">').concat((0,v.xP)(M)?"+":"").concat((0,v.cp)(M,2,!0,!0),"%</span></p>"),l.style.marginTop="10px",l.style.fontSize="20px",l.style.color="#fff",s.appendChild(l)}var p=document.getElementById("CHART-TOOLTIP")||document.createElement("div");return p.setAttribute("id","CHART-TOOLTIP"),p.setAttribute("style","position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"),p.style.background="#18293A",p.style.color="#fff",p.style.borderColor="#ffffff30",p.style.borderRadius="10px",U.current.appendChild(p),e.subscribeCrosshairMove((function(e){if(U.current){var t=e.time,n=R.filter((function(e){return e.time===t}));if(!n.length||void 0===e.point||!e.time||e.point.x<0||e.point.x>U.current.clientWidth||e.point.y<0||e.point.y>U.current.clientHeight)p.style.display="none";else{p.style.display="block";var r=n.slice(0,2);p.innerHTML=r.map((function(e,t){return'<div style="padding-bottom: 6px; margin-bottom: 6px; border-bottom: '.concat(t!==r.length-1?"1px solid gray":"none",';">\n<p style="font-size: 14px; font-weight: ',"bold","; color: ").concat("buy"===e.side?"#16c784":"#ea3943",'">\n').concat((e.side.slice(0,1).toUpperCase()||"")+(e.side.slice(1,e.side.length)||""),'\n</p>\n<p style="font-size: 12px; margin-top: 2px; font-weight: 900;">\n').concat(d()(e.timestamp).format("DD MMM YYYY, hh:mm A"),'\n</p>\n<p style="font-size: 12px; margin-top: 2px;">Amount USD: <span style="font-weight: 900;">').concat((0,v.cp)(e.amount_usd,2,!0,!0),'$</span></p>\n<p style="font-size: 12px; margin-top: 2px;">Quantity: <span style="font-weight: 900;">').concat((0,v.cp)(e.amount_usd/e.value,2,!0,!0),'</span></p>\n<p style="font-size: 12px; margin-top: 2px;">Price USD: <span style="font-weight: 900;">').concat((0,v.cp)(e.value,2,!0,!0),"$</span></p>\n</div>")})).join("")+(n.length>r.length?'<div style="font-size: 13px; font-weight: bold; color: #e161db;">+'.concat(n.length-r.length," More</div>"):"");var i=e.point.y,o=e.point.x+15;o>U.current.clientWidth-80&&(o=e.point.x-15-80);var a=i+15;a>U.current.clientHeight-80&&(a=i-80-15),p.style.left=o+"px",p.style.top=a+"px"}}})),e.timeScale().fitContent(),function(){return e.remove()}}}),[W,R,L,u,M,D,$,j]);var q=(0,h.useMemo)((function(){return Q&&!(null===H||void 0===H?void 0:H.data.length)||I&&!(null===F||void 0===F?void 0:F.data.length)}),[null===F||void 0===F?void 0:F.data.length,I,null===H||void 0===H?void 0:H.data.length,Q]);return(0,s.jsxs)("div",{className:"relative flex h-full w-full flex-col items-center justify-center",children:[(0,s.jsx)("div",{ref:U,className:l()("ml-1.5 mt-6 h-full w-full",{hidden:Y||q})}),Y&&(0,s.jsx)("div",{className:"flex h-full w-full flex-1 items-center justify-center",children:(0,s.jsx)("div",{className:"dot-pulse"})}),q&&!Y&&(0,s.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[(0,s.jsx)("img",{src:"/assets/images/empty-box.png",alt:"no data",className:"mb-4 h-16 w-16"}),(0,s.jsx)("p",{className:"text-center text-sm text-white",children:"No Trades found!"})]}),I&&(0,s.jsx)("div",{className:"mb-2 mt-1 flex w-full px-2",children:(0,s.jsx)(v.mQ,{activeTab:Z[L],onTabChange:function(e){return P((0,x.Z)(Z)[e])},children:(0,s.jsx)(v.mQ.List,{children:Object.keys(Z).map((function(e){return(0,s.jsx)(v.mQ.Item,{className:"h-[1.6rem] px-3 text-[13px] font-semibold uppercase",activeClass:"light-bg text-white rounded-none font-semibold",children:e},e)}))})})})]})}},6691:function(e,t,n){n.d(t,{C:function(){return r}});var r=function(){var e=window.location.hostname;return e.includes("www.")&&(e=e.replace("www.","")),"https://icons.".concat(e)}},3624:function(e,t,n){n.d(t,{Y:function(){return r}});var r=function(e){var t;return null===(t=window.open(e,"_blank"))||void 0===t?void 0:t.focus()}},94203:function(e,t,n){n.d(t,{E:function(){return o},W:function(){return i}});var r=/[0-9]/g,i="0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if("number"===typeof e||"string"===typeof e){var n=Number(Number(e).toFixed(t)).toLocaleString().replaceAll(r,"x");return n}return"xx.xx"}}}]);