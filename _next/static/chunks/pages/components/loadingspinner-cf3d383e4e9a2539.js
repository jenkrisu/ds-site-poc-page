(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4552],{65147:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/loadingspinner",function(){return i(66576)}])},66576:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return K}});var t=i(51351),a=i(85893),s=i(67294),l=i(9008),r=i.n(l),o=i(37039),c=i(88466),d=i(91760),p=i(35424),g=i(67527),_=i(1292),u=i(4115),x=i(32594),m=i(72119),h=i(89222),f=i(21737),v=i(41640),j=i(41518),y=i(67434),b=i(60257),w=i(675),N=i(98607),S=i(78502),Z=i(26274),O=i(32125),E=i(94184),R=i.n(E),k=i(2763),C=i(72465),I=i(27143),P=i(44934),T=i(59761),z=i(49651),A=["className","id","text","textAlign","textVisibility","variant","status"],B=["theme"];function X(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function D(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?X(Object(i),!0).forEach((function(n){(0,j.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function L(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,t=(0,Z.Z)(e);if(n){var a=(0,Z.Z)(this).constructor;i=Reflect.construct(t,arguments,a)}else i=t.apply(this,arguments);return(0,S.Z)(this,i)}}var G="fi-loadingSpinner",$={text:"".concat(G,"_text"),textAlignBottom:"".concat(G,"-textAlign--bottom"),textAlignRight:"".concat(G,"-textAlign--right"),small:"".concat(G,"--small"),failed:"".concat(G,"--failed"),loading:"".concat(G,"--loading"),success:"".concat(G,"--success"),icon:"".concat(G,"_icon")},F=function(e){(0,N.Z)(i,e);var n=L(i);function i(){return(0,b.Z)(this,i),n.apply(this,arguments)}return(0,w.Z)(i,[{key:"render",value:function(){var e,n=this.props,i=n.className,t=n.id,a=n.text,l=n.textAlign,r=void 0===l?"bottom":l,o=n.textVisibility,c=void 0===o?"visible":o,d=n.variant,p=void 0===d?"normal":d,g=n.status,_=void 0===g?"loading":g,u=(0,y.Z)(n,A);return s.createElement(I.lk,D({className:R()(G,i,(e={},(0,j.Z)(e,$.loading,"loading"===_),(0,j.Z)(e,$.failed,"failed"===_),(0,j.Z)(e,$.success,"success"===_),(0,j.Z)(e,$.small,"small"===p),(0,j.Z)(e,$.textAlignRight,"right"===r),e)),as:"section",id:t},u),"loading"===_&&s.createElement(T.Y,{icon:"preloader",className:$.icon}),"success"===_&&s.createElement(z.JO,{icon:"checkCircleFilled",className:$.icon}),"failed"===_&&s.createElement(z.JO,{icon:"errorFilled",className:$.icon}),"visible"===c?s.createElement(I.hh,{className:$.text},a):s.createElement(P.T,null,a))}}]),i}(s.Component),J=(0,O.ZP)((function(e){e.theme;var n=(0,y.Z)(e,B);return s.createElement(F,D({},n))})).withConfig({componentId:"sc-141i9nw-0"})(["",";"],(function(e){return function(e){return(0,O.iv)([""," "," &.fi-loadingSpinner{display:block;text-align:center;& .fi-loadingSpinner_icon{display:inline-block;width:40px;height:40px;}& .fi-loadingSpinner_text{font-size:18px;font-weight:600;text-align:center;margin-top:6px;}&.fi-loadingSpinner-textAlign--right{display:flex;align-items:center;& .fi-loadingSpinner_text{margin-left:10px;margin-top:0;line-height:1.5em;}}&.fi-loadingSpinner--small{.fi-loadingSpinner_icon{width:24px;height:24px;}& .fi-loadingSpinner_text{font-size:16px;font-weight:normal;margin-top:0;}}&.fi-loadingSpinner--loading{& .fi-loadingSpinner_icon{animation:rotation 1.5s infinite linear;}}&.fi-loadingSpinner--success{.fi-icon-base-fill{fill:",";}}&.fi-loadingSpinner--failed{.fi-icon-base-fill{fill:",";}}}@keyframes rotation{from{transform:rotate(0deg);}to{transform:rotate(359deg);}}@media (prefers-reduced-motion){&.fi-loadingSpinner.fi-loadingSpinner--loading{.fi-loadingSpinner_icon{animation:rotation 10s infinite linear;}}}"],(0,k.bG)(e),(0,k.LZ)(e)("bodyTextSmall"),e.colors.successBase,e.colors.alertBase)}(e.theme)})),V=(0,s.forwardRef)((function(e,n){var i=(0,v.Z)({},e);return s.createElement(C.cY,null,(function(e){var t=e.suomifiTheme;return s.createElement(J,D({forwardedRef:n,theme:t},i))}))}));V.displayName="LoadingSpinner";var Y=i(46845),H=function(e){e=null!==e?e:(0,t.Z)(new TypeError("Cannot destructure undefined"));var n=(0,o.$G)().t,i=(0,s.useState)(!1),l=i[0],r=i[1],c=(0,s.useState)("loading"),d=c[0],p=c[1];return(0,a.jsxs)(g.Z,{style:{marginBottom:f.R.spacing.s,display:"flex",flexDirection:"column"},children:[(0,a.jsx)(Y.z,{disabled:l,onClick:function(){p("loading"),l||function(){var e=0,n=setInterval((function(){e>=100?(clearInterval(n),r(!1),e=0):e+=10}),300)}(),r(!l)},children:n("loading_spinner_page.example.start_button")}),(0,a.jsx)("div",{"aria-live":"assertive","aria-busy":"loading"===d,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",marginTop:f.R.spacing.m,border:"1px solid ".concat(f.R.colors.depthLight1)},children:l&&(0,a.jsx)(V,{status:d,text:n("success"!==d?"loading_spinner_page.example.loading.active":"loading_spinner_page.example.loading.success")})})]})},W=function(e){e=null!==e?e:(0,t.Z)(new TypeError("Cannot destructure undefined"));var n=(0,o.$G)().t,i=(0,s.useState)(!1),l=i[0],r=i[1],c=(0,s.useState)("failed"),d=c[0],p=c[1];return(0,a.jsxs)(g.Z,{style:{marginBottom:f.R.spacing.s,display:"flex",flexDirection:"column"},children:[(0,a.jsx)(Y.z,{disabled:"loading"===d,onClick:function(){l?p("failed"):(p("loading"),function(){var e=0,n=setInterval((function(){e>=100?(clearInterval(n),p("success"),e=0):e+=10}),300)}()),r(!l)},children:n("success"===d?"loading_spinner_page.example.close_button":"loading_spinner_page.example.start_button")}),(0,a.jsx)("div",{"aria-live":"assertive","aria-busy":"loading"===d,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",marginTop:f.R.spacing.m,border:"1px solid ".concat(f.R.colors.depthLight1)},children:l&&(0,a.jsx)(V,{status:d,text:n("success"!==d?"loading_spinner_page.example.loading.active":"loading_spinner_page.example.loading.success")})})]})},q=function(e){e=null!==e?e:(0,t.Z)(new TypeError("Cannot destructure undefined"));var n=(0,o.$G)().t,i=(0,s.useState)(!1),l=i[0],r=i[1],c=(0,s.useState)("success"),d=c[0],p=c[1];return(0,a.jsxs)(g.Z,{style:{marginBottom:f.R.spacing.s,display:"flex",flexDirection:"column"},children:[(0,a.jsx)(Y.z,{disabled:"loading"===d,onClick:function(){l?p("success"):(p("loading"),function(){var e=0,n=setInterval((function(){e>=100?(clearInterval(n),p("failed"),e=0):e+=10}),300)}()),r(!l)},children:n("failed"===d?"loading_spinner_page.example.close_button":"loading_spinner_page.example.start_button")}),(0,a.jsx)("div",{"aria-live":"assertive","aria-busy":"loading"===d,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",marginTop:f.R.spacing.m,border:"1px solid ".concat(f.R.colors.depthLight1)},children:l&&(0,a.jsx)(V,{status:d,text:n("failed"!==d?"loading_spinner_page.example.loading.active":"loading_spinner_page.example.loading.error")})})]})},K=function(){var e=(0,o.$G)().t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:e("loading_spinner_page.site_title")})}),(0,a.jsxs)(c.Z,{navItems:d.t,navHeaderText:e("main_nav.components"),navIcon:"puzzle",children:[(0,a.jsx)(_.X,{variant:"h1",children:e("loading_spinner_page.heading")}),(0,a.jsx)(u.g,{variant:"div",mt:"m",children:(0,a.jsx)(x.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/LoadingSpinner",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("common.see_technical_documentation_of_component")})}),(0,a.jsx)(m.n,{className:"my-xl",children:(0,a.jsx)(h.x,{variant:"lead",children:e("loading_spinner_page.ingress")})}),(0,a.jsx)(u.g,{variant:"section",children:(0,a.jsx)(g.Z,{style:{marginBottom:f.R.spacing.s},children:(0,a.jsx)(V,{status:"loading",variant:"normal",textAlign:"right",text:"Loading"})})}),(0,a.jsx)(u.g,{variant:"section",className:"my-xl",children:(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(_.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:e("loading_spinner_page.accessibility_list.point_1")}),(0,a.jsx)("li",{children:e("loading_spinner_page.accessibility_list.point_2")}),(0,a.jsx)("li",{children:e("loading_spinner_page.accessibility_list.point_3")}),(0,a.jsx)("li",{children:e("loading_spinner_page.accessibility_list.point_4")}),(0,a.jsx)("li",{children:e("loading_spinner_page.accessibility_list.point_5")})]})]})}),(0,a.jsxs)(u.g,{variant:"section",children:[(0,a.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("loading_spinner_page.what_does_the_component_contain.heading")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("loading_spinner_page.what_does_the_component_contain.text_1")}),(0,a.jsxs)(m.n,{className:"my-xl",children:[e("loading_spinner_page.what_does_the_component_contain.text_2.heading"),(0,a.jsxs)("ol",{type:"1",children:[(0,a.jsx)("li",{children:e("loading_spinner_page.what_does_the_component_contain.text_2.state1")}),(0,a.jsx)("li",{children:e("loading_spinner_page.what_does_the_component_contain.text_2.state2")}),(0,a.jsx)("li",{children:e("loading_spinner_page.what_does_the_component_contain.text_2.state3")})]})]})]}),(0,a.jsxs)(u.g,{variant:"section",children:[(0,a.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("loading_spinner_page.size_and_usage.heading")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("loading_spinner_page.size_and_usage.text_1")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("loading_spinner_page.size_and_usage.text_2")})]}),(0,a.jsxs)(u.g,{variant:"section",children:[(0,a.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("loading_spinner_page.example.basic.heading")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("loading_spinner_page.example.basic.description")}),(0,a.jsx)(H,{})]}),(0,a.jsxs)(u.g,{variant:"section",children:[(0,a.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("loading_spinner_page.example.success.heading")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("loading_spinner_page.example.success.description")}),(0,a.jsx)(W,{})]}),(0,a.jsxs)(u.g,{variant:"section",children:[(0,a.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("loading_spinner_page.example.error.heading")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("loading_spinner_page.example.error.description")}),(0,a.jsx)(q,{})]})]})]})}}},function(e){e.O(0,[6510,8043,5030,9774,2888,179],(function(){return n=65147,e(e.s=n);var n}));var n=e.O();_N_E=n}]);