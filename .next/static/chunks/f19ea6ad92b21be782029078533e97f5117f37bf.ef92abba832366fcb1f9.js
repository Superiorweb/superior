(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,s=void 0!==o&&o;return n||r&&s}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},s=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var l=d[i];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=r.props[l],f=a[l]||new Set;f.has(u)?o=!1:(f.add(u),a[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,r.useContext)(s.AmpStateContext),a=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var v=p;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),s=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||s()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),f=function(e){s(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,s=r(n("q1tI")),i=n("elyg"),c=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function m(e,t,n,a){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=s.default.useState(),r=a(n,2),o=r[0],l=r[1],p=(0,c.useRouter)(),v=p&&p.pathname||"/",h=s.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href);return{href:t,as:e.as?(0,i.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),y=h.href,g=h.as;s.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,i.isLocalURL)(y)&&!f[y+"%"+g])return d(o,(function(){m(p,y,g)}))}),[t,o,y,g,p]);var b=e.children,w=e.replace,N=e.shallow,x=e.scroll;"string"===typeof b&&(b=s.default.createElement("a",null,b));var M=s.Children.only(b),_={ref:function(e){e&&l(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,y,g,w,N,x)}};return t&&(_.onMouseEnter=function(e){(0,i.isLocalURL)(y)&&(M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),m(p,y,g,{priority:!0}))}),(e.passHref||"a"===M.type&&!("href"in M.props))&&(_.href=(0,i.addBasePath)(g)),s.default.cloneElement(M,_)};t.default=p},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},tAWR:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("q1tI"),r=n.n(a),o=n("YFqc"),s=n.n(o),i=n("KnzP"),c=n.n(i),l=n("8Kt/"),u=n.n(l),f=r.a.createElement;function d(){return f("section",null,f(u.a,null,f("title",null,"\u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u06cc\u062a | \u0633\u0646\u06cc\u0648\u0631 \u0648\u0628 | SEO | \u0648\u0628 \u0633\u0627\u06cc\u062a"),f("meta",{name:"description",content:"\u0637\u0631\u0627\u062d\u06cc \u0627\u0646\u0648\u0627\u0639 \u0648\u0628 \u0633\u0627\u06cc\u062a \u0647\u0627\u06cc \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc \u060c \u062e\u0628\u0631\u06cc \u060c \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u062f\u0631 \u0628\u0633\u062a\u0631 \u0648\u0631\u062f\u067e\u0631\u0633 \u0648 cms \u0647\u0627\u06cc \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0633\u0646\u06cc\u0648\u0631 \u0648\u0628 "}),f("meta",{name:"keywords",content:"\u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u06cc\u062a, \u0637\u0631\u0627\u062d\u06cc \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646, \u0633\u0646\u06cc\u0648\u0631 \u0648\u0628, SEO , \u0633\u0627\u06cc\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc"}),f("meta",{name:"author",content:"majid javadi"}),f("meta",{property:"og:url",content:"https://superiorweb.ir/"}),f("link",{rel:"shortcut icon",href:"./logo.ico"})),f("header",{id:"menu",className:c.a.header+" "+c.a.displaynone+" disnone"},f("div",{className:c.a.menu}),f("nav",{className:c.a.navheader},f("ul",{className:c.a.ulmenuresponsive},f("li",{className:c.a.limenureposnsive},f(s.a,{href:"/"},"\u062e\u0627\u0646\u0647")),f("li",{className:c.a.limenureposnsive},f(s.a,{href:"/Cv"},"\u0631\u0632\u0648\u0645\u0647")),f("li",{className:c.a.limenureposnsive},f(s.a,{href:"/Articles"},"\u0628\u0644\u0627\u06af")),f("li",{className:c.a.limenureposnsive},f(s.a,{href:"/ConnectUs"},"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627")))),f("div",{className:c.a.cardmenu},f("div",{style:{background:"rgba(0,0,0,0)",maxWidth:"18rem"},className:c.a.CardMenu+" card border-0 mt-5 mt-xxl-0 text-white mr-5"},f("div",{className:"card-body"},f("img",{src:"/img/index/logotext.png",className:"w-100"}))))),f("div",{className:"row mr-0 ml-0"},f("div",{className:"col-12 pl-0 pr-0"},f("div",{className:c.a.backone},f("div",{className:"row mr-0 ml-0"},f("div",{className:"col-8 col-lg-1 col-md-10 col-sm-10 col-xl-1 mt-5"},f("button",{onClick:function(){var e=document.getElementById("menu"),t=document.getElementById("bars");e.classList.contains("disnone")?(e.classList.remove("disnone"),e.classList.remove(c.a.displaynone),e.classList.add(c.a.dnone),e.classList.remove(c.a.dclose),t.classList.remove("fa","fa-bars"),t.classList.add("fas","fa-times")):(e.classList.add("disnone"),e.classList.remove(c.a.dnone),e.classList.add(c.a.dclose),t.classList.add("fa","fa-bars"),t.classList.remove("fas","fa-times"))},className:c.a.btnmenu},f("i",{id:"bars",className:c.a.fontbars+" fa fa-bars"}))),f("div",{className:"col d-none d-lg-block col-lg-10 col-md-8 col-sm-8"},f("div",{className:"w-100 d-none d-md-block"},f("ul",{className:c.a.ulmenu},f("li",{className:c.a.limenu},f("a",null,"windows")),f("li",{className:c.a.limenu},f("a",null,"android")),f("li",{className:c.a.limenu},f("a",null,"ios")),f("li",{className:c.a.limenu},f("a",null,"website"))))),f("div",{className:"col-4 col-lg-1 col-md-2 col-sm-2 col-xl-1 mt-3"},f("img",{src:"/img/index/logotext.png",className:c.a.logo+" w-100 h-100"}))),f("div",{className:c.a.centertopte+" row justify-content-center mr-0 ml-0"},f("div",{className:"col-8 text-center"},f("h1",{className:c.a.title+" mt-5 animate__animated animate__bounceInDown"},f("span",{className:"text-danger"},"\u0645\u0634\u0627\u0648\u0631\u0647 \u0648 \u062a\u0648\u0633\u0639\u0647"),f("br",null),"\u0633\u0627\u06cc\u062a \u0648 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0628\u0627 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f \u0647\u0627\u06cc \u0631\u0648\u0632 \u062f\u0646\u06cc\u0627"),f("h4",{className:c.a.undertitle+" text-white mt-4"},"\u0645\u0627 \u0627\u0641\u062a\u062e\u0627\u0631 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u062a\u0646\u0647\u0627 \u062a\u06cc\u0645 \u0637\u0631\u0627\u062d\u06cc \u0648\u0628 \u0628\u0627 \u06a9\u06cc\u0641\u06cc\u062a \u0645\u0634\u062a\u0631\u06cc \u0645\u062f\u0627\u0631 \u0647\u0633\u062a\u06cc\u0645 \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u062a\u0645\u0627\u0645 \u0646\u06cc\u0627\u0632\u0647\u0627\u06cc \u0648\u0628 \u0633\u0627\u06cc\u062a \u0634\u0645\u0627 \u0631\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u06a9\u0646\u062f."),f("div",{className:"mt-lg-5"},f("button",{className:c.a.btnstoper},f("a",{href:"#nmonekar"},"\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631")),f("button",{className:c.a.btnstoper},f("a",{href:"#khadamat"},"\u062e\u062f\u0645\u0627\u062a \u0645\u0627"))))),f("div",{className:"row mr-0 ml-0 justify-content-center mt-5"},f("div",{className:c.a.centerclass+" col-4 col-sm-4 col-md-2 col-lg-1 mt-lg-5 mt-sm-2 mt-1"}))))))}}}]);