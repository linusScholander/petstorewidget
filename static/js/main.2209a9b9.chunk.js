(this.webpackJsonppetstorewidget=this.webpackJsonppetstorewidget||[]).push([[0],{24:function(e,t,s){},26:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s.n(r),i=s(15),c=s.n(i),n=(s(23),s(24),s(6)),l=s.n(n),o=s(16),d=s(3),u=s(17),j=(s(26),s(18)),m=s.n(j).a.create({baseURL:"https://petstore.swagger.io/v2/"}),p={findByStatus:function(e){return m.get("/pet/findByStatus?status=".concat(e))}},b=(s(45),s(46),s(4)),g=s(0),x=function(e){var t=e.name,s=e.className,r=s?"icon-svg ".concat(t,"-svg ").concat(s):"icon-svg ".concat(t,"-svg");switch(t){case"filter":return Object(g.jsx)(b.c,{className:r});case"available":return Object(g.jsx)(b.b,{className:r});case"pending":return Object(g.jsx)(b.a,{className:r});case"sold":return Object(g.jsx)(b.d,{className:r});default:return" "}},h=function(e){var t=e.itemIcon,s=e.itemData,r=e.itemIndex,a=e.currentBreakpoint,i=(null===s||void 0===s?void 0:s.tags)?null===s||void 0===s?void 0:s.tags:"",c=0===r?"petstorewidget-row petstorewidget-tbody-first-row":"petstorewidget-row";return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("li",{className:c,role:"row","aria-rowindex":r+1,children:[Object(g.jsx)("div",{className:"petstorewidget-column","aria-hidden":"true",children:Object(g.jsx)(x,{name:t,className:"petstorewidget-tbody-column-icon petstorewidget-column-icon"})}),Object(g.jsxs)("div",{className:"petstorewidget-column",role:"cell",children:["small"===a?Object(g.jsx)("strong",{className:"petstorewidget-tbody-column-key petstorewidget-column-key","aria-hidden":"true",children:"Name "}):"",null===s||void 0===s?void 0:s.name]}),Object(g.jsxs)("div",{className:"petstorewidget-column",role:"cell",children:["small"===a?Object(g.jsx)("strong",{className:"petstorewidget-tbody-column-key petstorewidget-column-key","aria-hidden":"true",children:"ID "}):"",null===s||void 0===s?void 0:s.id]}),i.length>0?Object(g.jsxs)("div",{className:"petstorewidget-column",role:"cell",children:["small"===a?Object(g.jsx)("strong",{className:"petstorewidget-tbody-column-key petstorewidget-column-key","aria-hidden":"true",children:"Tags "}):"",Object(g.jsx)("ul",{className:"petstorewidget-column-list",children:null===i||void 0===i?void 0:i.map((function(e,t){return Object(g.jsx)("li",{className:"petstorewidget-column-item",children:Object(g.jsx)("span",{className:"petstorewidget-tag",children:e.name})},"petStoreTag".concat(r,"_").concat(t))}))})]}):Object(g.jsxs)("div",{className:"petstorewidget-column petstorewidget-column-placeholder",role:"cell",children:["small"===a?Object(g.jsx)("strong",{className:"petstorewidget-tbody-column-key petstorewidget-column-key","aria-hidden":"true",children:"Tags "}):"","-"]})]})})},O=(s(48),function(){return Object(g.jsx)("div",{className:"petstorewidget-thead",role:"rowgroup",children:Object(g.jsxs)("div",{className:"petstorewidget-row",role:"row",children:[Object(g.jsx)("div",{className:"petstorewidget-column petstorewidget-column-icon-placeholder","aria-hidden":"true",children:Object(g.jsx)("span",{className:"petstorewidget-column-key",children:" "})}),Object(g.jsx)("div",{className:"petstorewidget-column",role:"columnheader",children:Object(g.jsx)("strong",{className:"petstorewidget-column-key",children:"Name "})}),Object(g.jsx)("div",{className:"petstorewidget-column",role:"columnheader",children:Object(g.jsx)("strong",{className:"petstorewidget-column-key",children:"ID "})}),Object(g.jsx)("div",{className:"petstorewidget-column",role:"columnheader",children:Object(g.jsx)("strong",{className:"petstorewidget-column-key",children:"Tags "})})]})})}),w=function(e){var t=e.loading,s=e.petData,r=e.petStatus,a=e.maxItems,i=e.resultPanelId,c=e.currentBreakpoint;if(t)return Object(g.jsx)("div",{children:"..."});var n=s.slice(0,a);return Object(g.jsx)("div",{className:"petstorewidget-result",id:i,children:Object(g.jsxs)("div",{className:"petstorewidget-table",role:"table","aria-label":"".concat(r," Pets"),"aria-rowcount":a,children:[Object(g.jsx)(O,{}),Object(g.jsx)("ul",{className:"petstorewidget-tbody",role:"rowgroup",children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(g.jsx)(h,{itemIcon:r,itemData:e,itemIndex:t,currentBreakpoint:c},"petStore".concat(t))}))})]})})},f=(s(49),s(50),function(e){var t=e.buttonStatus,s=e.text,r=e.label,a=e.petStatus,i=e.setPetStatus;return a===t?Object(g.jsxs)("strong",{className:"petstorewidget-filter-button petstorewidget-filter-button-active",onClick:function(){i(t)},role:"radio","aria-checked":"true",tabIndex:0,title:r,"aria-label":r,children:[Object(g.jsx)("span",{className:"petstorewidget-filter-button-icon petstorewidget-filter-button-icon-active",children:Object(g.jsx)(x,{name:t})}),Object(g.jsx)("span",{className:"petstorewidget-filter-button-text petstorewidget-filter-button-text-active",children:s})]}):Object(g.jsxs)("span",{className:"petstorewidget-filter-button",onClick:function(){i(t)},role:"radio","aria-checked":"false",tabIndex:0,title:r,"aria-label":r,children:[Object(g.jsx)("span",{className:"petstorewidget-filter-button-icon",children:Object(g.jsx)(x,{name:t})}),Object(g.jsx)("span",{className:"petstorewidget-filter-button-text",children:s})]})}),v=function(e){var t=e.petStatus,s=e.setPetStatus,r=e.resultPanelId;return Object(g.jsxs)("div",{id:"petStoreWidget_filter",className:"petstorewidget-filter",role:"radiogroup","aria-controls":r,children:[Object(g.jsx)("strong",{className:"petstorewidget-filter-label","aria-hidden":"true",children:Object(g.jsx)("span",{className:"petstorewidget-filter-label-icon",title:"Filter options",children:Object(g.jsx)(x,{name:"filter"})})}),Object(g.jsxs)("ul",{className:"petstorewidget-filter-list",children:[Object(g.jsx)("li",{className:"petstorewidget-filter-item",children:Object(g.jsx)(f,{buttonStatus:"available",text:"Available",label:"Show available pets",petStatus:t,setPetStatus:s})}),Object(g.jsx)("li",{className:"petstorewidget-filter-item",children:Object(g.jsx)(f,{buttonStatus:"pending",text:"Pending",label:"Show pending Pets",petStatus:t,setPetStatus:s})}),Object(g.jsx)("li",{className:"petstorewidget-filter-item",children:Object(g.jsx)(f,{buttonStatus:"sold",text:"Sold",label:"Show sold pets",petStatus:t,setPetStatus:s})})]})]})},N=function(e){var t=Object(r.useState)([]),s=Object(d.a)(t,2),a=s[0],i=s[1],c=Object(r.useState)(!1),n=Object(d.a)(c,2),j=n[0],m=n[1],b=Object(r.useState)("sold"),x=Object(d.a)(b,2),h=x[0],O=x[1],f=e.maxItems,N=void 0===f?5:f,S=e.breakpointWidth,k=void 0===S?360:S,y="petStoreWidget_filter_result",I=Object(r.useState)("petstorewidget petstorewidget-large"),P=Object(d.a)(I,2),B=P[0],W=P[1];Object(r.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,p.findByStatus(h);case 3:t=e.sent,s=t.data,i(s),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]);var D=Object(u.a)({breakpoints:{small:0,large:k},updateOnBreakpointChange:!0,onResize:function(e){var t=e.currentBreakpoint;W("small"===t?"petstorewidget petstorewidget-small":"petstorewidget petstorewidget-large")}}),F=D.ref,T=D.currentBreakpoint;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("section",{id:"petStoreWidget",className:B,ref:F,children:[Object(g.jsx)(v,{petStatus:h,setPetStatus:O,resultPanelId:y,currentBreakpoint:T}),Object(g.jsx)(w,{loading:j,petData:a,petStatus:h,maxItems:N,resultPanelId:y,currentBreakpoint:T})]})})};var S=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{style:{padding:"4.8rem 0 19.2rem"},children:[Object(g.jsx)("h1",{style:{padding:"4.8rem 0",textAlign:"center"},children:"Pet Store Widget"}),Object(g.jsx)("div",{style:{paddingBottom:"4.8rem"},children:Object(g.jsx)(N,{})}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{style:{width:"320px",maxWidth:"100%",margin:"0 auto"},children:[Object(g.jsx)("h2",{style:{padding:"4.8rem 0",textAlign:"center"},children:"Small version e.g sidebar"}),Object(g.jsx)(N,{breakpointWidth:"9999",maxItems:"5"})]})]})})};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2209a9b9.chunk.js.map