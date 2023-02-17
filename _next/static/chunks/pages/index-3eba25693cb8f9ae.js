(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(808)}])},808:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return J}});var a,n,i=s(2322),o=s(7729),c=s.n(o),l=s(2784);let r=(0,l.createContext)({wallets:[]}),d=()=>(0,l.useContext)(r),h=({children:e,walletAggregator:t})=>{let[s,a]=(0,l.useState)([]);(0,l.useEffect)(()=>{a(t.getWallets())},[t]);let n=(0,l.useMemo)(()=>({wallets:s}),[s]);return(0,i.jsx)(r.Provider,{value:n,children:e})};class m{constructor(e){this.walletProviders=e}getWallets(){let e=[];for(let t of this.walletProviders)e.push(...t.getWallets());return e}}(a=n||(n={})).INJECTED="INJECTED",a.WALLET_CONNECT="WALLET_CONNECT",a.LEDGER="LEDGER";let u=e=>e;class p{constructor(e,t){this.type=n.INJECTED,this.extension=e,this.metadata={...e.metadata},this.appName=t}async getAccounts(){let e=await this.injected?.accounts.get();return e?.map(e=>u(e))||[]}async connect(){try{let e;if(this.extension?.connect)e=await this.extension.connect(this.appName);else if(this.extension?.enable)e=await this.extension.enable(this.appName);else throw Error("No connect(..) or enable(...) hook found");this.injected=e,this.signer=e.signer}catch({message:e}){console.error(`Error initializing ${this.metadata.title}: ${e}`)}}async disconnect(){}isConnected(){return!1}}class g{constructor(e,t,s=!1){this.config=e,this.supportedOnly=s,this.appName=t}getExtensions(){let e=window,t=[],s=[];return e.injectedWeb3?Object.keys(e.injectedWeb3).forEach(a=>{if(!this.config.disallowed?.includes(a)){let n=this.config.supported?.find(({id:e})=>e===a);n?t.push({...e.injectedWeb3[a],metadata:n}):s.push({...e.injectedWeb3[a],metadata:{id:a,title:a}})}}):console.info("no extension was detected!"),{known:t,other:s}}getWallets(){let{known:e,other:t}=this.getExtensions(),s=[...e];return this.supportedOnly||(s=[...s,...t]),s.map(e=>new p(e,this.appName))}}var _=s(1653),w=s(8980),f=s(1073);class x{constructor(e,t,s){this.id=0,this.signPayload=async e=>{let{signature:t}=await this.client.request({topic:this.session.topic,chainId:this.chainId,request:{id:1,jsonrpc:"2.0",method:"polkadot_signTransaction",params:{address:e.address,transactionPayload:e}}});return{id:++this.id,signature:t}},this.signRaw=async e=>{let{signature:t}=await this.client.request({topic:this.session.topic,chainId:"polkadot:91b171bb158e2d3848fa23a9f1c25182",request:{id:1,jsonrpc:"2.0",method:"polkadot_signMessage",params:{address:e.address,message:e.data}}});return{id:++this.id,signature:t}},this.client=e,this.session=t,this.registry=new f.P,this.chainId=s}}let j="polkadot:91b171bb158e2d3848fa23a9f1c25182",v=e=>{let t=e.split(":")[2];return{address:t}};class b{constructor(e,t){this.type=n.WALLET_CONNECT,this.config=e,this.appName=t,this.metadata={title:"Wallet Connect",description:e.metadata?.description||"",urls:{main:e.metadata?.url||""},iconUrl:e.metadata?.icons[0]||"",version:"2.0"}}reset(){this.client=void 0,this.session=void 0,this.signer=void 0}async getAccounts(){let e=[];return this.session&&(e=Object.values(this.session.namespaces).map(e=>e.accounts).flat().map(e=>v(e))),e}async connect(){this.reset();let e=await _.ZP.init(this.config),{uri:t,approval:s}=await e.connect({requiredNamespaces:{polkadot:{methods:["polkadot_signTransaction","polkadot_signMessage"],chains:[j],events:[]}}});return new Promise((a,n)=>{t&&w.open(t,()=>{n(Error("Canceled pairing. QR Code Modal closed."))}),s().then(t=>{this.client=e,this.session=t,this.signer=new x(e,t,j),a()}).catch(n).finally(()=>w.close())})}async disconnect(){this.session?.topic&&this.client?.disconnect({topic:this.session?.topic,reason:{code:-1,message:"Disconnected by client!"}}),this.reset()}isConnected(){return!!(this.client&&this.signer&&this.session)}}class N{constructor(e,t){this.config=e,this.appName=t}getWallets(){return[new b(this.config,this.appName)]}}let y={disallowed:[],supported:[{id:"polkadot-js",title:"polkadotJS",description:"Basic account injection and signer",urls:{main:"",browsers:{chrome:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd",firefox:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/"}},iconUrl:"/images/polkadot-js.svg"},{id:"talisman",title:"talisman",description:"Talisman is a Polkadot wallet that unlocks a new world of multichain web3 applications in the Paraverse",urls:{main:"",browsers:{chrome:"https://chrome.google.com/webstore/detail/talisman-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld",firefox:"https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/"}},iconUrl:"/images/talisman-icon.svg"}]};var k=s(2556),E=s.n(k),C=s(6577),H=s.n(C),P=s(8355),T=s(4675);let D=e=>{let t=e;if(e&&e.length>20){let s=e.slice(0,10),a=e.slice(-10);t="".concat(s,"...").concat(a)}return t},W=e=>{let{api:t,account:s,signer:a}=e,n=async e=>{e.preventDefault(),e.stopPropagation(),t&&(null==s?void 0:s.address)&&a&&(t.registry.chainDecimals[0],await t.tx.system.remark("I am signing this transaction!").signAndSend(s.address,{signer:a},()=>{}))},o=async e=>{e.preventDefault(),e.stopPropagation();let t=null==a?void 0:a.signRaw;if(t&&(null==s?void 0:s.address)){let{signature:e}=await t({address:s.address,data:"I am signing this message",type:"bytes"})}};return(0,i.jsxs)("div",{className:"".concat(E().card," ").concat(E().account),children:[(0,i.jsx)("div",{className:"".concat(E().name),children:D(null==s?void 0:s.name)}),(0,i.jsx)("div",{className:"".concat(E().address),children:D(null==s?void 0:s.address)}),(0,i.jsxs)("div",{className:"".concat(E().flex," ").concat(E().column),children:[(0,i.jsx)("button",{className:"".concat(E().btn," ").concat(E().small),onClick:e=>n(e),children:"Submit Transaction"}),(0,i.jsx)("button",{className:"".concat(E().btn," ").concat(E().small),onClick:e=>o(e),children:"Sign Message"})]})]})},S=e=>{var t;let{wallet:s}=e,[a,n]=(0,l.useState)([]),[o,c]=(0,l.useState)(null),[r,d]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=async()=>{let e=new P.U("wss://westend-rpc.polkadot.io"),t=await T.G.create({provider:e});c(t)};e()},[]);let h=async e=>{if(console.log("wallet clicked!"),!r)try{d(!0),await s.connect();let e=await s.getAccounts();n(e)}catch(e){}finally{d(!1)}};return(0,i.jsxs)("div",{className:"".concat(E().card," ").concat(E().shadow),style:{marginBottom:"20px"},onClick:h,children:[(0,i.jsxs)("div",{className:"".concat(E().walletheader),children:[(0,i.jsx)("div",{style:{margin:5,display:"flex",alignItems:"center"},children:(null==s?void 0:null===(t=s.metadata)||void 0===t?void 0:t.iconUrl)&&(0,i.jsx)(H(),{width:45,height:45,src:"/polkadot-onboard".concat(s.metadata.iconUrl),alt:"wallet icon"})}),(0,i.jsx)("div",{children:"".concat(s.metadata.title," ").concat(s.metadata.version||"")})]}),(0,i.jsx)("div",{className:"".concat(E().wallet),children:a.length>0&&a.map(e=>{let{address:t,name:a=""}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(W,{api:o,account:{address:t,name:a},signer:s.signer})},t)})})]})};var L=(0,l.memo)(S);let O=()=>{let{wallets:e}=d();return(0,i.jsx)("div",{children:e.map(e=>(0,i.jsx)(L,{wallet:e},e.metadata.title))})};var U=(0,l.memo)(O);let I="Polkadot Demo",A=()=>{let e=new g(y,I),t=new N({projectId:"4fae85e642724ee66587fa9f37b997e2",relayUrl:"wss://relay.walletconnect.com",metadata:{name:"Polkadot Demo",description:"Polkadot Demo",url:"#",icons:["/images/wallet-connect.svg"]}},I),s=new m([e,t]),[a,n]=(0,l.useState)(!1);return(0,i.jsx)(h,{walletAggregator:s,children:(0,i.jsxs)("div",{className:"".concat(E().grid),children:[!a&&(0,i.jsx)("button",{className:"".concat(E().btn," ").concat(E().rounded),onClick:()=>{n(!0)},children:"Get Wallets"}),a&&(0,i.jsx)(U,{})]})})},G=()=>(0,i.jsxs)("div",{className:E().container,children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:"Substrate Wallet Aggregator"}),(0,i.jsx)("meta",{name:"description",content:"A wallet aggregator to select accounts from your different wallets"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:E().main,children:[(0,i.jsx)("h1",{className:E().title,children:"Substrate Wallets"}),(0,i.jsx)("p",{className:E().description,children:"Get started by connecting to your favorite wallets"}),(0,i.jsx)(A,{})]})]});var J=G},2556:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",grid:"Home_grid__GxQ85",title:"Home_title__T09hD",description:"Home_description__41Owk",card:"Home_card___LpL1",shadow:"Home_shadow__UcJVL",wallet:"Home_wallet__iOS9t",walletheader:"Home_walletheader__JFQMn",account:"Home_account__SbDoP",name:"Home_name__Je8n6",address:"Home_address__UT_ly",logo:"Home_logo__27_tb",btn:"Home_btn__UGRT9",small:"Home_small__xqsik",flex:"Home_flex__XpVr_",column:"Home_column__Bx5cY",rounded:"Home_rounded__7bEnD"}},9314:function(){},5477:function(){},3196:function(){}},function(e){e.O(0,[827,907,774,888,179],function(){return e(e.s=7314)}),_N_E=e.O()}]);