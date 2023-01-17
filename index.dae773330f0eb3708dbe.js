"use strict";(self.webpackChunkstarworld_toolbox_plus=self.webpackChunkstarworld_toolbox_plus||[]).push([[826],{5291:()=>{},2087:(e,t,n)=>{var l=n(5466),r=n.n(l),a=n(6909),s=n(3974);if("undefined"!=typeof localStorage&&localStorage.getItem("settings"))try{JSON.parse(localStorage.getItem("settings"))}catch(e){localStorage.setItem("settings","{}")}else localStorage.setItem("settings","{}");function o(e,t){let n=JSON.parse(localStorage.getItem("settings"));return(0,s.hasIn)(n,e)?(0,s.get)(n,e):t}function c(e,t){let n=JSON.parse(localStorage.getItem("settings"));return(0,s.set)(n,e,t),localStorage.setItem("settings",JSON.stringify(n)),n}class i extends r().Component{constructor(e){super(e),this.state={showNavbarBasic:!1}}render(){return r().createElement(a.A0,{expand:"lg",light:!0,bgColor:"light",id:`${this.props.appid}-navbar`,sticky:!0,style:{overflow:"hidden"}},r().createElement(a.L5,null,r().createElement(a.JI,{href:"/"},o("general.title","StarWorld 工具箱")," "),r().createElement(a.$Y,{onClick:()=>this.setState({showNavbarBasic:!this.state.showNavbarBasic})},r().createElement(a.vm,{icon:"bars",fas:!0})),r().createElement(a.Eq,{navbar:!0,show:this.state.showNavbarBasic},r().createElement(a.T2,{className:"mr-auto mb-2 mb-lg-0"},r().createElement(a.V$,null,r().createElement(a.Nd,{href:"/"},r().createElement(a.vm,{icon:"house"})," 主页"))))))}}const m=i;var u=n(5733);class h extends r().Component{constructor(e){super(e),this.state={currentText:e.list[Math.floor(Math.random()*e.list.length)]}}componentDidMount(){let e=this,t=this.props.list;this.id=setInterval((()=>e.setState({currentText:t[Math.floor(Math.random()*t.length)]})),this.props.timeout)}componentWillUnmount(){try{clearInterval(this.id)}catch(e){}}render(){return r().createElement(a.vm,{icon:this.state.currentText})}}const p={all:{title:r().createElement(r().Fragment,null,r().createElement(h,{list:["earth-africa","earth-americas","earth-asia","earth-europe","earth-oceania"],timeout:250})," 全部工具"),childrens:[]},programming:{title:r().createElement(r().Fragment,null,r().createElement(a.vm,{icon:"code"})," 编程工具"),childrens:[]},other:{title:r().createElement(r().Fragment,null,r().createElement(a.vm,{icon:"cube"})," 其他工具"),childrens:[]}};function d(e,t,n=null,l=null,s={}){let o="string"==typeof n?[n]:n,c=1==o.length?r().createElement(a.vm,{icon:o[0]}):r().createElement(h,{list:o,timeout:250}),i=l=>r().createElement(a.$v,Object.assign({key:l,onClick:()=>location.hash=t,style:{textTransform:"none",marginRight:".4rem",marginTop:".4rem"}},s),n?r().createElement(r().Fragment,null,c," "):"",e);return"string"==typeof l&&l in p&&p[l].childrens.push(i),p.all.childrens.push(i),i}class E extends r().Component{getItems(){return Object.values(p).map(((e,t)=>{let n=e.childrens.map(((e,t)=>e(t)));return n.length<=0&&(n=[r().createElement("h4",{key:0},"暂无内容")]),{label:r().createElement(r().Fragment,null,"  ",e.title,"  "),children:r().createElement(r().Fragment,null,...n),key:`${this.props.appid}-tabs-${t}`}}))}render(){return r().createElement(a.L5,null,r().createElement(u.Z,{tabPosition:o("general.tabs.position","left"),items:this.getItems()}))}}const g=E;var b=n(6517),f=n(8473),v=n(164),I=n(7586),S=n(4435),w=n(4885),C=n(6476);class k extends r().Component{constructor(e){super(e),this.state={modalIssues:!1,modalIssuesContent:"",modalIssuesTitle:""}}render(){let e=this;return r().createElement(r().Fragment,null,r().createElement(b.Z.Group,{trigger:"click",icon:r().createElement(v.Z,null)},"#/settings"!==location.hash?r().createElement(b.Z,{icon:r().createElement(I.Z,null),tooltip:"设置",href:"#/settings"}):r().createElement(b.Z,{icon:r().createElement(S.Z,null),tooltip:"重置",onClick:()=>{localStorage.clear(),location.reload()}}),r().createElement(b.Z,{tooltip:"反馈",icon:r().createElement(w.Z,null),onClick:()=>this.setState({modalIssues:!this.state.modalIssues})}),r().createElement(b.Z,{tooltip:"刷新",icon:r().createElement(C.Z,null),onClick:()=>location.reload()}),r().createElement(b.Z.BackTop,{tooltip:"返回顶部",onClick:()=>scrollTo(0,0),visibilityHeight:0})),r().createElement(f.Z,{title:"反馈",destroyOnClose:!0,okButtonProps:{className:"shadow border-0"},cancelButtonProps:{className:"shadow border-0"},open:this.state.modalIssues,onCancel:()=>this.setState({modalIssues:!1}),onOk:()=>{e.setState({modalIssues:!1}),window.open(`https://github.com/WowStarWorld/StarWorldToolBox-Plus/issues/new?body=${encodeURI(e.state.modalIssuesContent)}&title=${encodeURI(e.state.modalIssuesTitle)}`)}},r().createElement("br",null),r().createElement(a.u2,{label:"标题",onInput:e=>this.setState({modalIssuesTitle:e.target.value})}),r().createElement("br",null),r().createElement(a.Ys,{label:"内容",onInput:e=>this.setState({modalIssuesContent:e.target.value})})))}}const x=k;var y=n(5851).lW;const N="/tools/base64",O={render:function(){return r().createElement(Z,null)},path:N};d("Base64 编码工具",N,"layer-group","programming");class Z extends r().Component{constructor(e){super(e),this.state={currentOutput:"空",currentInput:""}}encode(){this.setState({currentOutput:new y(this.state.currentInput).toString("base64")||"空"})}decode(){this.setState({currentOutput:new y(this.state.currentInput,"base64").toString()||"空"})}render(){let e=this;return r().createElement(r().Fragment,null,r().createElement("br",null),r().createElement("br",null),r().createElement(a.L5,null,r().createElement(a.Ff,null,r().createElement(a.$v,{onClick:()=>e.encode()},"编码"),r().createElement(a.$v,{onClick:()=>e.decode()},"解码")),r().createElement("br",null),r().createElement("br",null),r().createElement("br",null),r().createElement(a.Ys,{label:"请输入要编码的文本",onInput:e=>{this.setState({currentInput:e.target.value})}}),r().createElement("br",null),r().createElement(a.Ys,{className:"form-control",placeholder:"空",value:this.state.currentOutput})))}}var B=n(9663),F=n(8107),T=n.n(F);const $="/tools/number-convert",L={render:function(){return r().createElement(W,null)},path:$};d("进制转换工具",$,"copy","other");class W extends r().Component{constructor(e){super(e),this.state={currentOutput:"空",currentInput:"",from:10,to:10}}convert(){let e=this.state.from,t=this.state.to,n=this.state.currentInput;try{let l=parseInt(n,e).toString(t);this.setState({currentOutput:"NaN"===l?"空":l})}catch(e){this.setState({currentOutput:"空"})}}switch(){this.setState({from:this.state.to,to:this.state.from})}render(){let e=this,t=T()(2,37),n=t.map((e=>({label:`从${e}进制`,value:e}))),l=t.map((e=>({label:`到${e}进制`,value:e})));return r().createElement(r().Fragment,null,r().createElement("br",null),r().createElement("br",null),r().createElement(a.L5,null,r().createElement("span",{title:"转换",role:"button",onClick:()=>e.convert(),className:"not-a-text",style:{marginRight:"1rem"}},r().createElement("i",{className:"sw-text-shadow far fa-compass",style:{marginRight:".25rem"}}),"转换"),r().createElement(B.Z,{value:this.state.from,options:n,onSelect:e=>this.setState({from:e})}),r().createElement("span",{title:"切换",role:"button",onClick:()=>e.switch(),className:"not-a-text text-button",style:{marginRight:"1rem",marginLeft:"1rem"}},r().createElement("i",{className:"sw-text-shadow fa fa-repeat text-hover-blue"})),r().createElement(B.Z,{value:this.state.to,options:l,onSelect:e=>this.setState({to:e})}),r().createElement("br",null),r().createElement("br",null),r().createElement(a.Ys,{label:"请输入要转换进制的数字",onInput:e=>{this.setState({currentInput:e.target.value})}}),r().createElement("br",null),r().createElement(a.Ys,{className:"form-control",placeholder:"空",value:this.state.currentOutput})))}}const D={render:function(){return r().createElement(M,null)},path:"/settings"};class M extends r().Component{getItems(){return[{label:"常规",children:r().createElement(r().Fragment,null,r().createElement(a.tD,{textBefore:"主题:",noBorder:!0},r().createElement(B.Z,{options:[{label:"亮",value:"light"},{label:"暗",value:"dark"}],defaultValue:o("general.theme","light"),onSelect:e=>c("general.theme",e)})),r().createElement("br",null),r().createElement(a.tD,{textBefore:"工具箱标题:",noBorder:!0},r().createElement("input",{className:"form-control rounded",type:"text",defaultValue:o("general.title","StarWorld 工具箱"),onInput:e=>c("general.title",e.target.value)})),r().createElement("br",null),r().createElement(a.tD,{textBefore:"选项卡位置:",noBorder:!0},r().createElement(B.Z,{options:[{label:"左",value:"left"},{label:"右",value:"right"},{label:"上",value:"top"},{label:"下",value:"bottom"}],defaultValue:o("general.tabs.position","left"),onSelect:e=>c("general.tabs.position",e)})))}].map(((e,t)=>({label:e.label,children:e.children,key:t})))}render(){return r().createElement(r().Fragment,null,r().createElement("br",null),r().createElement("br",null),r().createElement(a.L5,null,r().createElement(u.Z,{items:this.getItems(),tabPosition:o("general.tabs.position","left")})))}}let P={[O.path]:O.render,[L.path]:L.render},R=Object.assign(Object.assign({},P),{[D.path]:D.render}),Y=function(){let e=location.hash.slice(1);return e in R?R[e]():r().createElement(a.L5,null,r().createElement("br",null),r().createElement("br",null),r().createElement("h4",null,"页面未找到"))}();const J=Y;class j extends r().Component{constructor(e){super(e),this.id=`app-${(new Date).getTime()}`,this.state={showNavbarBasic:!1}}componentDidMount(){}render(){return r().createElement(r().Fragment,null,r().createElement(m,{appid:this.id}),location.hash.length<2?r().createElement(r().Fragment,null,r().createElement("br",null),r().createElement("br",null),r().createElement(g,{appid:this.id})):J,r().createElement(x,null))}}const V=j;var _=n(6598),U=n(3897),q=n(423),A=n(8563);const G=A("#app-container").hide();(0,U.s)(G[0]).render(r().createElement(q.ZP,{locale:_.Z},r().createElement(V,{container:G}))),A(window).on("hashchange",(()=>location.reload())),G.fadeIn(500),A(document.documentElement).addClass("sw-theme-"+("dark"===o("general.theme")?"dark":"light"))}},e=>{var t=t=>e(e.s=t);e.O(0,[736],(()=>(t(2087),t(5291)))),e.O()}]);