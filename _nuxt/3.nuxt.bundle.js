webpackJsonp([3],{251:function(t,e,n){var s,i;n(312),s=n(310);var a=n(321);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-23a45d78",t.exports=s},263:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{menu:{type:String,required:!0},list:{type:Object,required:!0}}}},264:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(271),a=s(i);e.default={props:{title:{type:String,required:!0},visible:{type:Boolean,required:!0}},methods:{toggle:function(){this.$emit("toggle")}},components:{NuxtSearch:a.default}}},265:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{q:""}}}},266:function(t,e){},267:function(t,e){},268:function(t,e){},269:function(t,e,n){var s,i;n(266),s=n(263);var a=n(272);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-0437d0ac",t.exports=s},270:function(t,e,n){var s,i;n(267),s=n(264);var a=n(273);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-5925e26f",t.exports=s},271:function(t,e,n){var s,i;n(268),s=n(265);var a=n(274);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-60d64f08",t.exports=s},272:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("nav",{staticClass:"Affix"},[t._l(t.list,function(n,s){return[e("h3",{staticClass:"Affix__Title"},[t._s(s)])," ",e("ul",{staticClass:"Affix__List"},[t._l(n,function(n){return e("li",{staticClass:"Affix__List__Item"},[e("router-link",{staticClass:"Affix__List__Item__Link",attrs:{to:t.menu+n.to,exact:""}},["\n          "+t._s(n.name)+"\n        "])])})])]})])},staticRenderFns:[]}},273:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"Bar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"Bar__Left"},[e("span",{staticClass:"Bar__Left__Text"},[t._s(t.title)])," ",e("div",{staticClass:"Bar__Left__Toggler",on:{click:t.toggle}},[e("div",{class:{"close icon":t.visible,"indent icon":!t.visible}})])])," ",e("div",{staticClass:"Bar__Right"},[e("nuxt-search")])])])},staticRenderFns:[]}},274:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"Search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"Search__Input",attrs:{type:"text",name:"search",id:"search",placeholder:"Search"},domProps:{value:t._s(t.q)},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}})," ",e("label",{staticClass:"Search__Label",attrs:{for:"search"},on:{click:function(e){t.q=""}}},[e("div",{class:{"icon search":!t.q.length,"icon remove":t.q.length}})])])},staticRenderFns:[]}},275:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],mounted:function(){this.addListeners()},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(t){var e=t.target.getAttribute("href");if(e&&"/"===e[0]&&(t.preventDefault(),this.$router.push(e)),e&&"#"===e[0]){t.preventDefault();var n=document.getElementById(e.slice(1)),s=window.outerWidth>768?n.offsetTop-160:n.offsetTop-120;window.scrollTo(0,s)}},contentUpdated:function(){var t=this;this.removeListeners(),this.$nextTick(function(){t.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var t=0;t<this._links.length;t++)this._links[t].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var t=0;t<this._links.length;t++)this._links[t].removeEventListener("click",this.navigate,!1);this._links=[]}}}},302:function(t,e,n){var s,i;s=n(275);var a=n(303);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=s},303:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"Content",domProps:{innerHTML:t._s(t.content)}})},staticRenderFns:[]}},310:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=s(i),r=n(22),o=s(r),c=n(270),u=s(c),d=n(269),l=s(d),f=n(21),p=s(f),v=n(302),_=s(v);e.default={components:{NuxtBar:u.default,NuxtAffix:l.default,NuxtFooter:p.default,HtmlParser:_.default},data:function(){return(0,o.default)({url:"https://api.github.com/repos/nuxt/nuxt.js/releases",headers:{Authorization:"token 4aa6bcf919d238504e7db59a66d32e78281c0ad3"}}).then(function(t){var e=t.data.filter(function(t){return!t.draft}).map(function(t){return{name:t.name,date:t.published_at,body:(0,a.default)(t.body)}});return{releases:e}})},computed:{visible:function(){return this.$store.state.visibleAffix}},methods:{toggle:function(){this.$store.commit("toggle","visibleAffix")}},head:function(){return{title:"Release Notes",titleTemplate:"%s - Nuxt.js"}}}},312:function(t,e){},321:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"Guide"},[e("nuxt-bar",{attrs:{visible:t.visible,title:"Version "+t.$store.state.version},on:{toggle:t.toggle}})," ",e("div",{staticClass:"Guide__Left",class:{"Guide__Left--hidden":!t.visible}},[e("div",{staticClass:"container"},[e("nuxt-affix",{attrs:{list:t.$store.state.guideMenu,menu:"/guide"}})])])," ",e("div",{staticClass:"container"},[e("div",{staticClass:"Guide__Right",class:{"Guide__Right--hidden":t.visible}},[e("div",{staticClass:"Content"},[e("h1",["Release Notes"])," ",t._l(t.releases,function(n){return e("div",[e("h2",{attrs:{id:n.name}},[t._s(n.name)])," ",e("html-parser",{staticClass:"Release__Content",domProps:{innerHTML:t._s(n.body)}})])})])])])," ",e("div",{staticClass:"Guide__Footer"},[e("nuxt-footer")])])},staticRenderFns:[]}}});