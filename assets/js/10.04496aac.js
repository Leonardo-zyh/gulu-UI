(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{198:function(t,s,o){"use strict";var n=o(3),e=o(15),a=o(16),r=o(71),c=o(69),i=o(6),l=o(91).f,d=o(92).f,f=o(8).f,u=o(93).trim,v=n.Number,g=v,p=v.prototype,m="Number"==a(o(70)(p)),_="trim"in String.prototype,C=function(t){var s=c(t,!1);if("string"==typeof s&&s.length>2){var o,n,e,a=(s=_?s.trim():u(s,3)).charCodeAt(0);if(43===a||45===a){if(88===(o=s.charCodeAt(2))||120===o)return NaN}else if(48===a){switch(s.charCodeAt(1)){case 66:case 98:n=2,e=49;break;case 79:case 111:n=8,e=55;break;default:return+s}for(var r,i=s.slice(2),l=0,d=i.length;l<d;l++)if((r=i.charCodeAt(l))<48||r>e)return NaN;return parseInt(i,n)}}return+s};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var s=arguments.length<1?0:t,o=this;return o instanceof v&&(m?i(function(){p.valueOf.call(o)}):"Number"!=a(o))?r(new g(C(s)),o,v):C(s)};for(var h,w=o(7)?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)e(g,h=w[b])&&!e(v,h)&&f(v,h,d(g,h));v.prototype=p,p.constructor=v,o(11)(n,"Number",v)}},200:function(t,s,o){},201:function(t,s,o){},212:function(t,s,o){"use strict";var n=o(4),e=o(72)(!0);n(n.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),o(94)("includes")},213:function(t,s,o){"use strict";var n=o(4),e=o(214);n(n.P+n.F*o(215)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},214:function(t,s,o){var n=o(73),e=o(17);t.exports=function(t,s,o){if(n(s))throw TypeError("String#"+o+" doesn't accept regex!");return String(e(t))}},215:function(t,s,o){var n=o(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(o){try{return s[n]=!1,!"/./"[t](s)}catch(t){}}return!0}},216:function(t,s,o){"use strict";var n=o(200);o.n(n).a},217:function(t,s,o){"use strict";var n=o(201);o.n(n).a},224:function(t,s,o){"use strict";o(14),o(24),o(52),o(198);var n={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},e=(o(217),o(1)),a=Object(e.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"719d1865",null);a.options.__file="row.vue";s.a=a.exports},225:function(t,s,o){"use strict";var n=o(10),e=(o(198),o(212),o(213),o(24),o(14),o(19),o(25),function(t){var s=Object.keys(t),o=!0;return s.forEach(function(t){["span","offset"].includes(t)||(o=!1)}),o}),a={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var o=[];return t.span&&o.push("col-".concat(s).concat(t.span)),t.offset&&o.push("offset-".concat(s).concat(t.offset)),o}},computed:{colClass:function(){var t=this.span,s=this.offset,o=this.ipad,e=this.narrowPc,a=this.pc,r=this.widePc,c=this.createClasses;return Object(n.a)(c({span:t,offset:s})).concat(Object(n.a)(c(o,"ipad-")),Object(n.a)(c(e,"narrow-pc-")),Object(n.a)(c(a,"pc-")),Object(n.a)(c(r,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},r=(o(216),o(1)),c=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"47eabc54",null);c.options.__file="col.vue";s.a=c.exports},235:function(t,s,o){},271:function(t,s,o){"use strict";var n=o(235);o.n(n).a},297:function(t,s,o){"use strict";o.r(s);o(23),o(90);var n=o(224),e=o(225),a={components:{GRow:n.a,GCol:e.a},data:function(){return{content:'\n        * {\n          box-sizing: border-box;\n        }\n        <g-row class="demoRow" gutter="10">\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8" offset="8">\n            <div class="demoCol">8</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="8">\n            <div class="demoCol">4</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n        </g-row>\n    '.replace(/^ {8}/gm,"").trim()}}},r=(o(271),o(1)),c=Object(r.a)(a,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8",offset:"8"}},[o("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"4"}},[o("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"4"}},[o("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"8"}},[o("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"d2ff6d16",null);c.options.__file="grid-demo-3.vue";s.default=c.exports}}]);