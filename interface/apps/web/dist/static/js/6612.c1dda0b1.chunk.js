"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6612],{31508:(e,i,n)=>{n.d(i,{Z:()=>E});var d=n(92936),o=n(31017),t=n(88846),r=n(69780),l=n(61182),s=n(44591),c=n(5967),a=n(2562),u=n(94284),C=n(45779),v=n(61152),N=n(54972),R=n(62587),x=n(39671),g=n(54703);const p=v.default.div.withConfig({displayName:"UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-b083a83b-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${R.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,h=(0,v.default)(r.qL).withConfig({displayName:"UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-b083a83b-1"})`
  text-decoration: none;
`,j=(0,v.default)(N.Tv.DeprecatedBlue).withConfig({displayName:"UnsupportedCurrencyFooter__AddressText",componentId:"sc-b083a83b-2"})`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function E({show:e,currencies:i}){const{chainId:n}=(0,t.useWeb3React)(),[r,v]=(0,C.useState)(!1),R=n&&i?i.map((e=>{var i;return null===(i=e)||void 0===i?void 0:i.wrapped})):[],E=(0,x.l6)();return(0,d.jsxs)(p,{show:e,children:[(0,d.jsx)(a.Z,{isOpen:r,onDismiss:()=>v(!1),children:(0,d.jsx)(l.ZP,{padding:"2rem",children:(0,d.jsxs)(s.Tz,{gap:"lg",children:[(0,d.jsxs)(u.m0,{children:[(0,d.jsx)(N.Tv.DeprecatedMediumHeader,{children:(0,d.jsx)(o.cC,{id:"7Osz32"})}),(0,d.jsx)(N.Tw,{onClick:()=>v(!1),"data-testid":"close-icon"})]}),R.map((e=>{var i;return e&&E&&Object.keys(E).includes(e.address)&&(0,d.jsx)(l.nq,{"data-testid":"unsupported-token-card",children:(0,d.jsxs)(s.Tz,{gap:"10px",children:[(0,d.jsxs)(u.BA,{gap:"5px",align:"center",children:[(0,d.jsx)(c.Z,{currency:e,size:"24px"}),(0,d.jsx)(N.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),n&&(0,d.jsx)(N.dL,{href:(0,g.E)(n,e.address,g.r.ADDRESS),children:(0,d.jsx)(j,{children:e.address})})]})},null===(i=e.address)||void 0===i?void 0:i.concat("not-supported"))})),(0,d.jsx)(s.Tz,{gap:"lg",children:(0,d.jsx)(N.Tv.DeprecatedBody,{fontWeight:535,children:(0,d.jsx)(o.cC,{id:"l7X7DE"})})})]})})}),(0,d.jsx)(h,{padding:"0",onClick:()=>v(!0),"data-testid":"read-more-button",children:(0,d.jsx)(N.Tv.DeprecatedBlue,{children:(0,d.jsx)(o.cC,{id:"bIjYSY"})})})]})}},26612:(e,i,n)=>{n.r(i),n.d(i,{default:()=>ce});var d=n(92936),o=n(6282),t=n(11604),r=n(31017),l=n(5985),s=n(76078),c=n(88846),a=n(47583),u=n(25320),C=n(31508),v=n(10672),N=n(26073),R=n(81069),x=n(45779),g=n(57809),p=n(22953),h=n(61152),j=n(54972),E=n(69780),_=n(61182),m=n(44591),U=n(74293),y=n(47841),f=n(39753),Y=n(52223),A=n(94284),T=n(99819),B=n(13820),b=n(64370),D=n(39671),S=n(15463),q=n(7151),I=n(13919),w=n(4650),P=n(41047),k=n(47632),L=n(61592),O=n.n(L),z=n(89882),M=n(47856),$=n(83416),F=n(73720);const W=O().BigInt(0);function V(){return(0,M.C)((e=>e.mint))}var Z=n(99454),G=n(47186),H=n(28098),J=n(64510),Q=n(61744),X=n(17202),K=n(7501),ee=n(65118),ie=n(40926),ne=n(5967);function de({noLiquidity:e,price:i,currencies:n,parsedAmounts:o,poolTokenPercentage:t,onAdd:l}){var s,c,a,u,C,v,N,R,x,g,h;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(A.m0,{children:[(0,d.jsx)(j.Tv.DeprecatedBody,{children:(0,d.jsx)(r.cC,{id:"C7f3au",values:{0:null===(s=n[k.gN.CURRENCY_A])||void 0===s?void 0:s.symbol}})}),(0,d.jsxs)(A.DA,{children:[(0,d.jsx)(ne.Z,{currency:n[k.gN.CURRENCY_A],style:{marginRight:"8px"}}),(0,d.jsx)(j.Tv.DeprecatedBody,{children:null===(c=o[k.gN.CURRENCY_A])||void 0===c?void 0:c.toSignificant(6)})]})]}),(0,d.jsxs)(A.m0,{children:[(0,d.jsx)(j.Tv.DeprecatedBody,{children:(0,d.jsx)(r.cC,{id:"C7f3au",values:{0:null===(a=n[k.gN.CURRENCY_B])||void 0===a?void 0:a.symbol}})}),(0,d.jsxs)(A.DA,{children:[(0,d.jsx)(ne.Z,{currency:n[k.gN.CURRENCY_B],style:{marginRight:"8px"}}),(0,d.jsx)(j.Tv.DeprecatedBody,{children:null===(u=o[k.gN.CURRENCY_B])||void 0===u?void 0:u.toSignificant(6)})]})]}),(0,d.jsxs)(A.m0,{children:[(0,d.jsx)(j.Tv.DeprecatedBody,{children:(0,d.jsx)(r.cC,{id:"3XOwjg"})}),(0,d.jsx)(j.Tv.DeprecatedBody,{children:`1 ${null===(C=n[k.gN.CURRENCY_A])||void 0===C?void 0:C.symbol} = ${null===(v=i)||void 0===v?void 0:v.toSignificant(4)} ${null===(N=n[k.gN.CURRENCY_B])||void 0===N?void 0:N.symbol}`})]}),(0,d.jsx)(A.m0,{style:{justifyContent:"flex-end"},children:(0,d.jsx)(j.Tv.DeprecatedBody,{children:`1 ${null===(R=n[k.gN.CURRENCY_B])||void 0===R?void 0:R.symbol} = ${null===(x=i)||void 0===x?void 0:x.invert().toSignificant(4)} ${null===(g=n[k.gN.CURRENCY_A])||void 0===g?void 0:g.symbol}`})}),(0,d.jsxs)(A.m0,{children:[(0,d.jsx)(j.Tv.DeprecatedBody,{children:(0,d.jsx)(r.cC,{id:"6MJHcQ"})}),(0,d.jsx)(j.Tv.DeprecatedBody,{children:(0,d.jsx)(r.cC,{id:"hbO8db",values:{0:e?"100":null===(h=t)||void 0===h?void 0:h.toSignificant(4)}})})]}),(0,d.jsx)(E.DF,{style:{margin:"20px 0 0 0"},onClick:l,children:(0,d.jsx)(p.xv,{fontWeight:535,fontSize:20,children:e?(0,d.jsx)(r.cC,{id:"ELJdCv"}):(0,d.jsx)(r.cC,{id:"xqNrBs"})})})]})}function oe({currencies:e,noLiquidity:i,poolTokenPercentage:n,price:o}){var t,l,s,c,a,u,C;const v=(0,h.useTheme)();let N;try{var R,x;N=null===(x=o)||void 0===x||null===(R=x.invert())||void 0===R?void 0:R.toSignificant(6)}catch(g){N=void 0}return(0,d.jsx)(m.Tz,{gap:"md",children:(0,d.jsxs)(A.BA,{justify:"space-around",gap:"4px",children:[(0,d.jsxs)(m.Tz,{justify:"center",children:[(0,d.jsx)(j.Tv.DeprecatedBlack,{"data-testid":"currency-b-price",children:(null===(t=o)||void 0===t?void 0:t.toSignificant(6))??"-"}),(0,d.jsx)(p.xv,{fontWeight:535,fontSize:14,color:v.neutral2,pt:1,children:(0,d.jsx)(r.cC,{id:"7Z4WfS",values:{0:null===(l=e[k.gN.CURRENCY_B])||void 0===l?void 0:l.symbol,1:null===(s=e[k.gN.CURRENCY_A])||void 0===s?void 0:s.symbol}})})]}),(0,d.jsxs)(m.Tz,{justify:"center",children:[(0,d.jsx)(j.Tv.DeprecatedBlack,{"data-testid":"currency-a-price",children:N??"-"}),(0,d.jsx)(p.xv,{fontWeight:535,fontSize:14,color:v.neutral2,pt:1,children:(0,d.jsx)(r.cC,{id:"7Z4WfS",values:{0:null===(c=e[k.gN.CURRENCY_A])||void 0===c?void 0:c.symbol,1:null===(a=e[k.gN.CURRENCY_B])||void 0===a?void 0:a.symbol}})})]}),(0,d.jsxs)(m.Tz,{justify:"center",children:[(0,d.jsxs)(j.Tv.DeprecatedBlack,{children:[i&&o?"100":((null===(u=n)||void 0===u?void 0:u.lessThan(B.IS))?"<0.01":null===(C=n)||void 0===C?void 0:C.toFixed(2))??"0","%"]}),(0,d.jsx)(p.xv,{fontWeight:535,fontSize:14,color:v.neutral2,pt:1,children:(0,d.jsx)(r.cC,{id:"SbBMxj"})})]})]})})}function te(e,i,n,d,o,t,r){try{var l=e[t](r),s=l.value}catch(c){return void n(c)}l.done?i(s):Promise.resolve(s).then(d,o)}const re=new s.Percent(50,1e4),le=(0,h.default)(m.Tz).withConfig({displayName:"AddLiquidityV2__AddLiquidityHeaderContainer",componentId:"sc-49b7ecd7-0"})`
  gap: 20px;
  margin-bottom: 16px;
`;function se(){var e,i,n,L,ne,se,ce,ae,ue,Ce,ve,Ne,Re,xe;const{currencyIdA:ge,currencyIdB:pe}=(0,o.UO)(),he=(0,o.s0)(),{account:je,chainId:Ee,provider:_e}=(0,c.useWeb3React)(),me=(0,h.useTheme)(),Ue=(0,a.oO)(),ye=(0,D.U8)(ge),fe=(0,D.U8)(pe),Ye=Ee?b.Fl[Ee]:void 0,Ae=Boolean(Ee&&Ye&&(ye&&ye.equals(Ye)||fe&&fe.equals(Ye))),Te=(0,u.LK)(),{independentField:Be,typedValue:be,otherTypedValue:De}=V(),{dependentField:Se,currencies:qe,pair:Ie,pairState:we,currencyBalances:Pe,parsedAmounts:ke,price:Le,noLiquidity:Oe,liquidityMinted:ze,poolTokenPercentage:Me,error:$e}=function(e,i){var n,o,t,l,a;const{account:u}=(0,c.useWeb3React)(),{independentField:C,typedValue:v,otherTypedValue:N}=V(),R=C===k.gN.CURRENCY_A?k.gN.CURRENCY_B:k.gN.CURRENCY_A,g=(0,x.useMemo)((()=>({[k.gN.CURRENCY_A]:e??void 0,[k.gN.CURRENCY_B]:i??void 0})),[e,i]),[p,h]=(0,P.Oo)(g[k.gN.CURRENCY_A],g[k.gN.CURRENCY_B]),j=(0,$.A)(null===(n=h)||void 0===n?void 0:n.liquidityToken),E=p===P._G.NOT_EXISTS||Boolean(j&&O().equal(j.quotient,W))||Boolean(p===P._G.EXISTS&&h&&O().equal(h.reserve0.quotient,W)&&O().equal(h.reserve1.quotient,W)),_=(0,F.K5)(u??void 0,(0,x.useMemo)((()=>[g[k.gN.CURRENCY_A],g[k.gN.CURRENCY_B]]),[g])),m={[k.gN.CURRENCY_A]:_[0],[k.gN.CURRENCY_B]:_[1]},U=(0,z.Z)(v,g[C]),y=(0,x.useMemo)((()=>{if(E)return N&&g[R]?(0,z.Z)(N,g[R]):void 0;if(U){var n,d,o;const r=null===(n=U)||void 0===n?void 0:n.wrapped,[l,c]=[null===(d=e)||void 0===d?void 0:d.wrapped,null===(o=i)||void 0===o?void 0:o.wrapped];if(l&&c&&r&&h){var t;const n=R===k.gN.CURRENCY_B?i:e,d=R===k.gN.CURRENCY_B?h.priceOf(l).quote(r):h.priceOf(c).quote(r);return(null===(t=n)||void 0===t?void 0:t.isNative)?s.CurrencyAmount.fromRawAmount(n,d.quotient):d}}}),[E,N,g,R,U,e,i,h]),f=(0,x.useMemo)((()=>({[k.gN.CURRENCY_A]:C===k.gN.CURRENCY_A?U:y,[k.gN.CURRENCY_B]:C===k.gN.CURRENCY_A?y:U})),[y,U,C]),Y=(0,x.useMemo)((()=>{if(!E){var i;const n=null===(i=e)||void 0===i?void 0:i.wrapped;return h&&n?h.priceOf(n):void 0}{var n,d;const{[k.gN.CURRENCY_A]:e,[k.gN.CURRENCY_B]:i}=f;if((null===(n=e)||void 0===n?void 0:n.greaterThan(0))&&(null===(d=i)||void 0===d?void 0:d.greaterThan(0))){const n=i.divide(e);return new s.Price(e.currency,i.currency,n.denominator,n.numerator)}}}),[e,E,h,f]),A=(0,x.useMemo)((()=>{var e,i;const{[k.gN.CURRENCY_A]:n,[k.gN.CURRENCY_B]:d}=f,[o,t]=[null===(e=n)||void 0===e?void 0:e.wrapped,null===(i=d)||void 0===i?void 0:i.wrapped];if(h&&j&&o&&t)try{return h.getLiquidityMinted(j,o,t)}catch(B){return void console.error(B)}}),[f,h,j]),T=(0,x.useMemo)((()=>A&&j?new s.Percent(A.quotient,j.add(A).quotient):void 0),[A,j]);let B;u||(B=(0,d.jsx)(r.cC,{id:"VHOVEJ"})),p===P._G.INVALID&&(B=B??(0,d.jsx)(r.cC,{id:"R7D79P"})),f[k.gN.CURRENCY_A]&&f[k.gN.CURRENCY_B]||(B=B??(0,d.jsx)(r.cC,{id:"iPMIoT"}));const{[k.gN.CURRENCY_A]:b,[k.gN.CURRENCY_B]:D}=f;var S,q;return b&&(null===(t=m)||void 0===t||null===(o=t[k.gN.CURRENCY_A])||void 0===o?void 0:o.lessThan(b))&&(B=(0,d.jsx)(r.cC,{id:"m6RmA/",values:{0:null===(S=g[k.gN.CURRENCY_A])||void 0===S?void 0:S.symbol}})),D&&(null===(a=m)||void 0===a||null===(l=a[k.gN.CURRENCY_B])||void 0===l?void 0:l.lessThan(D))&&(B=(0,d.jsx)(r.cC,{id:"m6RmA/",values:{0:null===(q=g[k.gN.CURRENCY_B])||void 0===q?void 0:q.symbol}})),{dependentField:R,currencies:g,pair:h,pairState:p,currencyBalances:m,parsedAmounts:f,price:Y,noLiquidity:E,liquidityMinted:A,poolTokenPercentage:T,error:B}}(ye??void 0,fe??void 0),{onFieldAInput:Fe,onFieldBInput:We}=function(e){const i=(0,M.T)();return{onFieldAInput:(0,x.useCallback)((n=>{i((0,k.LC)({field:k.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[i,e]),onFieldBInput:(0,x.useCallback)((n=>{i((0,k.LC)({field:k.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[i,e])}}(Oe),Ve=!$e,[Ze,Ge]=(0,x.useState)(!1),[He,Je]=(0,x.useState)(!1),Qe=(0,w.n)(),Xe=(0,H.eq)(re),[Ke,ei]=(0,x.useState)(""),ii={[Be]:be,[Se]:Oe?De:(null===(e=ke[Se])||void 0===e?void 0:e.toSignificant(6))??""},ni=[k.gN.CURRENCY_A,k.gN.CURRENCY_B].reduce(((e,i)=>({...e,[i]:(0,K.i)(Pe[i])})),{}),di=[k.gN.CURRENCY_A,k.gN.CURRENCY_B].reduce(((e,i)=>{var n;return{...e,[i]:null===(n=ni[i])||void 0===n?void 0:n.equalTo(ke[i]??"0")}}),{}),oi=(0,q.XF)(),[ti,ri]=(0,S.q)(ke[k.gN.CURRENCY_A],null===(i=oi)||void 0===i?void 0:i.address),[li,si]=(0,S.q)(ke[k.gN.CURRENCY_B],null===(n=oi)||void 0===n?void 0:n.address),ci=(0,Z.h7)(),ai=(0,R.G)();function ui(){return Ci.apply(this,arguments)}function Ci(){var e;return e=function*(){if(!Ee||!_e||!je||!oi||!ai)return;const{[k.gN.CURRENCY_A]:e,[k.gN.CURRENCY_B]:i}=ke,n=yield Qe();if(!e||!i||!ye||!fe||!n)return;const d={[k.gN.CURRENCY_A]:(0,Q.u)(e,Oe?B.fI:Xe)[0],[k.gN.CURRENCY_B]:(0,Q.u)(i,Oe?B.fI:Xe)[0]};let o,r,s,c;if(ye.isNative||fe.isNative){var u,C;const n=fe.isNative;o=oi.estimateGas.addLiquidityETH,r=oi.addLiquidityETH,s=[(null===(C=n?ye:fe)||void 0===C||null===(u=C.wrapped)||void 0===u?void 0:u.address)??"",(n?e:i).quotient.toString(),d[n?k.gN.CURRENCY_A:k.gN.CURRENCY_B].toString(),d[n?k.gN.CURRENCY_B:k.gN.CURRENCY_A].toString(),je,"91190709129211"],c=t.O$.from((n?i:e).quotient.toString())}else{var v,N,R,x;o=oi.estimateGas.addLiquidity,r=oi.addLiquidity,s=[(null===(N=ye)||void 0===N||null===(v=N.wrapped)||void 0===v?void 0:v.address)??"",(null===(x=fe)||void 0===x||null===(R=x.wrapped)||void 0===R?void 0:R.address)??"",e.quotient.toString(),i.quotient.toString(),d[k.gN.CURRENCY_A].toString(),d[k.gN.CURRENCY_B].toString(),je,"91190709129211"],c=null}const g=t.O$.from("3000000000");Je(!0),yield o(...s,c?{value:c}:{}).then((e=>r(...s,{...c?{value:c,gasPrice:g}:{gasPrice:g},gasLimit:(0,J.y)(e)}).then((e=>{var i,n,d,o;Je(!1);const t={type:G.i.ADD_LIQUIDITY_V2_POOL,baseCurrencyId:(0,X.H)(ye),expectedAmountBaseRaw:(null===(i=ke[k.gN.CURRENCY_A])||void 0===i?void 0:i.quotient.toString())??"0",quoteCurrencyId:(0,X.H)(fe),expectedAmountQuoteRaw:(null===(n=ke[k.gN.CURRENCY_B])||void 0===n?void 0:n.quotient.toString())??"0"};ci(e,t),ei(e.hash),(0,a._P)(l.vp.ADD_LIQUIDITY_SUBMITTED,{label:[null===(d=qe[k.gN.CURRENCY_A])||void 0===d?void 0:d.symbol,null===(o=qe[k.gN.CURRENCY_B])||void 0===o?void 0:o.symbol].join("/"),...Ue,...t})})))).catch((e=>{var i;Je(!1),4001!==(null===(i=e)||void 0===i?void 0:i.code)&&console.error("error====",e)}))},Ci=function(){var i=this,n=arguments;return new Promise((function(d,o){var t=e.apply(i,n);function r(e){te(t,d,o,r,l,"next",e)}function l(e){te(t,d,o,r,l,"throw",e)}r(void 0)}))},Ci.apply(this,arguments)}const vi=()=>{var e,i,n,o,t;return(0,d.jsx)(le,{children:Oe?(0,d.jsx)(_.hl,{mt:"20px",$borderRadius:"20px",children:(0,d.jsxs)(A.BA,{justify:"space-between",children:[(0,d.jsx)(p.xv,{fontSize:"24px",fontWeight:535,lineHeight:"42px",marginRight:10,children:(null===(e=qe[k.gN.CURRENCY_A])||void 0===e?void 0:e.symbol)+"/"+(null===(i=qe[k.gN.CURRENCY_B])||void 0===i?void 0:i.symbol)}),(0,d.jsx)(y.Z,{currency0:qe[k.gN.CURRENCY_A],currency1:qe[k.gN.CURRENCY_B],size:30})]})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(A.v3,{style:{marginTop:"20px"},children:[(0,d.jsx)(p.xv,{fontSize:"48px",fontWeight:535,lineHeight:"42px",marginRight:10,children:null===(n=ze)||void 0===n?void 0:n.toSignificant(6)}),(0,d.jsx)(y.Z,{currency0:qe[k.gN.CURRENCY_A],currency1:qe[k.gN.CURRENCY_B],size:30})]}),(0,d.jsx)(A.ZP,{children:(0,d.jsx)(p.xv,{fontSize:"24px",children:(null===(o=qe[k.gN.CURRENCY_A])||void 0===o?void 0:o.symbol)+"/"+(null===(t=qe[k.gN.CURRENCY_B])||void 0===t?void 0:t.symbol)+" Pool Tokens"})}),(0,d.jsx)(j.Tv.DeprecatedItalic,{fontSize:12,textAlign:"left",padding:"8px 0 0 0 ",children:(0,d.jsx)(r.cC,{id:"4nBvG6",values:{0:Xe.toSignificant(4)}})})]})})},Ni=()=>(0,d.jsx)(de,{price:Le,currencies:qe,parsedAmounts:ke,noLiquidity:Oe,onAdd:ui,poolTokenPercentage:Me}),Ri=(0,d.jsx)(r.cC,{id:"+U2TkE",values:{0:null===(L=ke[k.gN.CURRENCY_A])||void 0===L?void 0:L.toSignificant(6),1:null===(ne=qe[k.gN.CURRENCY_A])||void 0===ne?void 0:ne.symbol,2:null===(se=ke[k.gN.CURRENCY_B])||void 0===se?void 0:se.toSignificant(6),3:null===(ce=qe[k.gN.CURRENCY_B])||void 0===ce?void 0:ce.symbol}}),xi=(0,x.useCallback)((e=>{const i=(0,X.H)(e);he(i===pe?`/add/v2/${pe}/${ge}`:`/add/v2/${i}/${pe}`)}),[pe,he,ge]),gi=(0,x.useCallback)((e=>{const i=(0,X.H)(e);he(ge===i?pe?`/add/v2/${pe}/${i}`:`/add/v2/${i}`:`/add/v2/${ge||"ETH"}/${i}`)}),[ge,he,pe]),pi=(0,x.useCallback)((()=>{Ge(!1),Ke&&Fe(""),ei("")}),[Fe,Ke]),{pathname:hi}=(0,o.TH)(),ji=hi.includes("/create"),Ei=(0,I.G)(null===(ae=qe)||void 0===ae?void 0:ae.CURRENCY_A,null===(ue=qe)||void 0===ue?void 0:ue.CURRENCY_B);return ai?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(ee.Z,{children:[(0,d.jsx)(f.w,{creating:ji,adding:!0,autoSlippage:re}),(0,d.jsxs)(ie.im,{children:[(0,d.jsx)(T.Z,{isOpen:Ze,onDismiss:pi,attemptingTxn:He,hash:Ke,reviewContent:()=>(0,d.jsx)(T.p,{title:Oe?(0,d.jsx)(r.cC,{id:"aM1tos"}):(0,d.jsx)(r.cC,{id:"AeZIvT"}),onDismiss:pi,topContent:vi,bottomContent:Ni}),pendingText:Ri,currencyToAdd:null===(Ce=Ie)||void 0===Ce?void 0:Ce.liquidityToken}),(0,d.jsxs)(m.Tz,{gap:"20px",children:[Oe||(ji?(0,d.jsx)(m.lg,{children:(0,d.jsx)(_.Pj,{children:(0,d.jsxs)(m.Tz,{gap:"10px",children:[(0,d.jsx)(j.Tv.DeprecatedLink,{fontWeight:535,color:"accent1",children:(0,d.jsx)(r.cC,{id:"thdBpY"})}),(0,d.jsx)(j.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,d.jsx)(r.cC,{id:"TscS1q"})}),(0,d.jsx)(j.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,d.jsx)(r.cC,{id:"UEmvHF"})})]})})}):(0,d.jsx)(m.lg,{children:(0,d.jsx)(_.Pj,{children:(0,d.jsx)(m.Tz,{gap:"10px",children:(0,d.jsxs)(j.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:[(0,d.jsx)("b",{children:(0,d.jsx)(r.cC,{id:"0l56BI"})})," ",(0,d.jsx)(r.cC,{id:"NqgbmN"})]})})})})),(0,d.jsx)(U.Z,{value:ii[k.gN.CURRENCY_A],onUserInput:Fe,onMax:()=>{var e;Fe((null===(e=ni[k.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())??"")},onCurrencySelect:xi,showMaxButton:!di[k.gN.CURRENCY_A],currency:qe[k.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena"}),(0,d.jsx)(m.lg,{children:(0,d.jsx)(g.Z,{size:"16",color:me.neutral2})}),(0,d.jsx)(U.Z,{value:ii[k.gN.CURRENCY_B],onUserInput:We,onCurrencySelect:gi,onMax:()=>{var e;We((null===(e=ni[k.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!di[k.gN.CURRENCY_B],currency:qe[k.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb"}),qe[k.gN.CURRENCY_A]&&qe[k.gN.CURRENCY_B]&&we!==P._G.INVALID&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(_.hl,{padding:"0px",$borderRadius:"20px",children:[(0,d.jsx)(A.m0,{padding:"1rem",children:(0,d.jsx)(j.Tv.DeprecatedSubHeader,{fontWeight:535,fontSize:14,children:Oe?(0,d.jsx)(r.cC,{id:"D52j9u"}):(0,d.jsx)(r.cC,{id:"vmTbpu"})})})," ",(0,d.jsx)(_.hl,{padding:"1rem",$borderRadius:"20px",children:(0,d.jsx)(oe,{currencies:qe,poolTokenPercentage:Me,noLiquidity:Oe,price:Le})})]})}),Ei?(0,d.jsx)(E.DF,{disabled:!0,children:(0,d.jsx)(j.Tv.DeprecatedMain,{mb:"4px",children:(0,d.jsx)(r.cC,{id:"Z941Tw"})})}):je?(0,d.jsxs)(m.Tz,{gap:"md",children:[(ti===S.U.NOT_APPROVED||ti===S.U.PENDING||li===S.U.NOT_APPROVED||li===S.U.PENDING)&&Ve&&(0,d.jsxs)(A.m0,{children:[ti!==S.U.APPROVED&&(0,d.jsx)(E.DF,{onClick:ri,disabled:ti===S.U.PENDING,width:li!==S.U.APPROVED?"48%":"100%",children:ti===S.U.PENDING?(0,d.jsx)(ie.bb,{children:(0,d.jsx)(r.cC,{id:"MfyhMG",values:{0:null===(ve=qe[k.gN.CURRENCY_A])||void 0===ve?void 0:ve.symbol}})}):(0,d.jsx)(r.cC,{id:"fgGids",values:{0:null===(Ne=qe[k.gN.CURRENCY_A])||void 0===Ne?void 0:Ne.symbol}})}),li!==S.U.APPROVED&&(0,d.jsx)(E.DF,{onClick:si,disabled:li===S.U.PENDING,width:ti!==S.U.APPROVED?"48%":"100%",children:li===S.U.PENDING?(0,d.jsx)(ie.bb,{children:(0,d.jsx)(r.cC,{id:"MfyhMG",values:{0:null===(Re=qe[k.gN.CURRENCY_B])||void 0===Re?void 0:Re.symbol}})}):(0,d.jsx)(r.cC,{id:"fgGids",values:{0:null===(xe=qe[k.gN.CURRENCY_B])||void 0===xe?void 0:xe.symbol}})})]}),(0,d.jsx)(E.Kd,{onClick:()=>{Ge(!0)},disabled:!Ve||ti!==S.U.APPROVED||li!==S.U.APPROVED,error:!Ve&&!!ke[k.gN.CURRENCY_A]&&!!ke[k.gN.CURRENCY_B],children:(0,d.jsx)(p.xv,{fontSize:20,fontWeight:535,children:$e??(0,d.jsx)(r.cC,{id:"bwSQI0"})})})]}):(0,d.jsx)(a.M8,{events:[l.TM.onClick],name:l.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:l.xo.CONNECT_WALLET_BUTTON,children:(0,d.jsx)(E.Sy,{onClick:Te,children:(0,d.jsx)(r.cC,{id:"VHOVEJ"})})})]})]})]}),(0,d.jsx)(v.c,{}),Ei?(0,d.jsx)(C.Z,{show:Ei,currencies:[qe.CURRENCY_A,qe.CURRENCY_B]}):Ie&&!Oe&&we!==P._G.INVALID?(0,d.jsx)(m.Tz,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,d.jsx)(Y.WP,{showUnwrapped:Ae,pair:Ie})}):null]}):(0,d.jsx)(N.A,{})}function ce(){const{currencyIdA:e,currencyIdB:i}=(0,o.UO)();return e&&i&&e.toLowerCase()===i.toLowerCase()?(0,d.jsx)(o.Fg,{to:`/add/v2/${e}`,replace:!0}):(0,d.jsx)(se,{})}}}]);
//# sourceMappingURL=6612.c1dda0b1.chunk.js.map