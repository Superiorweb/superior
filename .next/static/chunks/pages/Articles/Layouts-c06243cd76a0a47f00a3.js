_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"758o":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Articles/Layouts",function(){return n("ifbw")}])},ARU5:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),o=n("JX7q"),s=n("Ji7U"),c=n("md7G"),i=n("foSv"),l=n("rePB"),u=n("q1tI"),f=n.n(u),m=n("YpKv"),d=n.n(m),p=n("vDqi"),y=n.n(p),v=n("YFqc"),h=n.n(v),_=f.a.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var g=function(e){Object(s.a)(n,e);var t=b(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(o.a)(e),"state",{result:[],notfound:[]}),Object(l.a)(Object(o.a)(e),"closemenu",(function(){document.getElementById("menures").classList.add("d-none")})),Object(l.a)(Object(o.a)(e),"openmenu",(function(){document.getElementById("menures").classList.remove("d-none")})),Object(l.a)(Object(o.a)(e),"search",(function(t){var n=document.querySelector("#resulsearch");null!=t&&""!=t&&" "!=t?(n.classList.remove("d-none"),y.a.get("api/post/search?str=".concat(t)).then((function(t){t.data.length>0?(e.setState({result:t.data}),e.setState({notfound:" "})):(e.setState({result:t.data}),e.setState({notfound:"Not Found"}))}))):n.classList.add("d-none")})),e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.result.map((function(e){return _("li",null,_(NavLink,{to:"/post/"+e.id},e.title))}));return _("header",{className:"bg-dark mt-0 pt-3 pb-3 pt-lg-0 pb-lg-0 text-white"},_("div",{className:"row mr-0 ml-0"},_("div",{className:"col-4 col-lg-6"},_("ul",{className:d.a.ulmenu+" d-none d-lg-flex mt-2 mb-0"},_("li",{className:d.a.limenu+" ml-2 text-center"},_(h.a,{href:"/"},"\u062e\u0627\u0646\u0647")),_("li",{className:d.a.limenu+" ml-2 text-center"},_(h.a,{href:"/Cv"},"\u0631\u0632\u0648\u0645\u0647")),_("li",{className:d.a.limenu+" ml-2 text-center"},_(h.a,{href:"/Articles"},"\u0628\u0644\u0627\u06af")),_("li",{className:d.a.limenu+" ml-2 text-center"},_(h.a,{href:"/ConnectUs"},"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627"))),_("button",{onClick:this.openmenu,className:d.a.btnmenuopen},_("i",{className:"fa fa-bars","aria-hidden":"true"})),_("div",null,_("ul",{id:"menures",className:d.a.ulmenuresponsive+" mt-2 mb-0 d-none"},_("li",{className:d.a.limenuresponsive+" ml-2 text-center"},_("button",{onClick:this.closemenu,id:"close",className:d.a.btnclose},_("i",{className:"fas text-dark fa-times"}))),_("li",{className:d.a.limenuresponsive+" ml-2 text-center"},_(h.a,{href:"/"},"\u062e\u0627\u0646\u0647")),_("li",{className:d.a.limenuresponsive+" ml-2 text-center"},_(h.a,{href:"/Cv"},"\u0631\u0632\u0648\u0645\u0647")),_("li",{className:d.a.limenuresponsive+" ml-2 text-center"},_(h.a,{href:"/posts"},"\u0628\u0644\u0627\u06af")),_("li",{className:d.a.limenuresponsive+" ml-2 text-center"},_(h.a,{href:"/ConnectUs"},"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627")),_("li",{className:d.a.limenuresponsive+" ml-2 text-center"},_("img",{src:"/img/index/logotext.png",className:"w-100"}))))),_("div",{className:"col-8 col-lg-6 justify-content-end align-items-center d-flex"},_("div",{className:""},_("form",{style:{marginLeft:"2vw"}},_("label",{className:"sr-only",htmlFor:"inlineFormInputGroupUsername"},"Username"),_("div",{style:{direction:"ltr"},className:"input-group"},_("div",{className:"input-group-prepend"},_("button",{type:"submit",className:"input-group-text h-100 "+d.a.btnsearch},_("i",{className:"fa fa-search","aria-hidden":"true"}))),_("input",{onChange:function(t){return e.search(t.target.value)},type:"text",className:"form-control "+d.a.search,id:"",placeholder:"search"})),_("div",{style:{zIndex:"100000"},id:"resulsearch",className:d.a.resulsearch+"  bg-dark d-none"},_("ul",null,t,_("li",{style:{listStyle:"none",textAlign:"center"}},this.state.notfound))))))))}}]),n}(u.Component);t.default=g},Fdpp:function(e,t,n){e.exports={logo:"Catgorys_logo__12jRH",bgsection:"Catgorys_bgsection__1bAq-",titleslide:"Catgorys_titleslide__11AC0",textslide:"Catgorys_textslide__2KBHD",btnslide:"Catgorys_btnslide__2Brgu",items:"Catgorys_items__yaNDJ",item:"Catgorys_item__3I6bA",animitem:"Catgorys_animitem__M1Sgl",titleT:"Catgorys_titleT__1clPy",bg_primary:"Catgorys_bg_primary__2P5Jx",card:"Catgorys_card__FYZ5q",iconcard:"Catgorys_iconcard__1LhR6",textslidetwo:"Catgorys_textslidetwo__2sgtI",customwith:"Catgorys_customwith__l5MLk",select:"Catgorys_select__svH_f"}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},YFqc:function(e,t,n){e.exports=n("cTJO")},YpKv:function(e,t,n){e.exports={search:"menu_search__2sO7i",btnsearch:"menu_btnsearch__1H1bm",ulmenu:"menu_ulmenu__xCgZ1",limenu:"menu_limenu__1zqJG",ulmenuresponsive:"menu_ulmenuresponsive__3_9D9",btnmenuopen:"menu_btnmenuopen__1qKcd",resulsearch:"menu_resulsearch__3t51W",limenuresponsive:"menu_limenuresponsive__T-NKv",btnclose:"menu_btnclose__2upwn"}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,s=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var m=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=s.default.useState(),a=r(n,2),o=a[0],l=a[1],p=(0,i.useRouter)(),y=p&&p.pathname||"/",v=s.default.useMemo((function(){var t=(0,c.resolveHref)(y,e.href);return{href:t,as:e.as?(0,c.resolveHref)(y,e.as):t}}),[y,e.href,e.as]),h=v.href,_=v.as;s.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,c.isLocalURL)(h)&&!f[h+"%"+_])return m(o,(function(){d(p,h,_)}))}),[t,o,h,_,p]);var b=e.children,g=e.replace,N=e.shallow,w=e.scroll;"string"===typeof b&&(b=s.default.createElement("a",null,b));var j=s.Children.only(b),x={ref:function(e){e&&l(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,h,_,g,N,w)}};return t&&(x.onMouseEnter=function(e){(0,c.isLocalURL)(h)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(p,h,_,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(x.href=(0,c.addBasePath)(_)),s.default.cloneElement(j,x)};t.default=p},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},ifbw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),s=n("md7G"),c=n("foSv"),i=n("q1tI"),l=n.n(i),u=n("Fdpp"),f=n.n(u),m=n("ARU5"),d=l.a.createElement;function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var y=function(e){Object(o.a)(n,e);var t=p(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return d("div",null,d(m.default,null),d("section",{className:f.a.bgsection+" row justify-content-center align-items-center text-white mr-0 ml-0"},d("div",{className:"col-12 pr-0 pl-0"},d("div",{className:"w-100 h-100 d-flex justify-content-center align-items-center text-center"},d("div",{style:{width:"90%"}},d("h1",{className:f.a.titleslide},"\u0645\u0642\u0627\u0644\u0627\u062a"),d("p",{className:f.a.textslide},"\u062a\u06cc\u0645 \u0633\u0646\u06cc\u0648\u0631 \u0648\u0628 \u062f\u0631 \u062a\u0644\u0627\u0634 \u0627\u0633\u062a \u062a\u0627 \u0628\u0627 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0646 \u0645\u0637\u0627\u0644\u0628 \u0627\u0645\u0648\u0632\u0646\u062f\u0647 \u062f\u0631 \u062d\u0648\u0632\u0647 \u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0648 \u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u06cc\u062a \u0648 SEO \u0628\u0647 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0644 \u0645\u0634\u06a9\u0644\u0627\u062a \u0648 \u0633\u0648\u0627\u0644\u0627\u062a \u0634\u0645\u0627 \u06a9\u0645\u06a9 \u06a9\u0646\u062f"),d("div",null,d("a",{href:"#posts"},d("button",{className:f.a.btnslide},"\u062f\u06cc\u062f\u0646 \u067e\u0633\u062a \u0647\u0627"))),d("div",{className:f.a.items+" row justify-content-center mr-0 ml-0 align-items-center"},d("div",{className:"col-lg-2 col-3 d-flex justify-content-end justify-content-lg-center"},d("div",{className:f.a.item},d("i",{className:"fab fa-java"}))),d("div",{className:"col-lg-2 col-3 d-flex justify-content-center"},d("div",{className:f.a.item},d("i",{className:"fab fa-microsoft"}))),d("div",{className:"col-lg-2 col-3 d-flex justify-content-center text-center"},d("div",{className:f.a.item},d("i",{className:"fab fa-php"}))),d("div",{className:"col-lg-2 col-3 d-flex justify-content-start justify-content-lg-center"},d("div",{className:f.a.item},d("i",{className:"fab fa-react"})))))))),this.props.children)}}]),n}(i.Component)},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var a=n("JX7q");function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))}},[["758o",0,1,2,4,3]]]);