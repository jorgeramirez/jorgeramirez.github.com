(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,A="undefined"!=typeof window,h=A&&window.IntersectionObserver,v=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(z,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},z=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,m=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:d,onClick:u,ref:t,loading:f,draggable:m,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=A&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||A&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,A=e.backgroundColor,h=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,x=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:j?1:0,transition:R?"opacity "+h+"ms":"none"},o),P="boolean"==typeof A?"lightgray":A,B={transitionDelay:h+"ms"},I=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&B,{},o,{},f),k={title:t,alt:this.state.isVisible?"":a,style:I,className:m,itemProp:y};if(p){var L=p,V=L[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),P&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&B)}),V.base64&&c.default.createElement(C,{src:V.base64,spreadProps:k,imageVariants:L,generateSources:w}),V.tracedSVG&&c.default.createElement(C,{src:V.tracedSVG,spreadProps:k,imageVariants:L,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,b(L),c.default.createElement(z,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:L}))}}))}if(g){var M=g,Q=M[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},i);return"inherit"===i.display&&delete F.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},P&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:P,width:Q.width,opacity:this.state.imgLoaded?0:1,height:Q.height},R&&B)}),Q.base64&&c.default.createElement(C,{src:Q.base64,spreadProps:k,imageVariants:M,generateSources:w}),Q.tracedSVG&&c.default.createElement(C,{src:Q.tracedSVG,spreadProps:k,imageVariants:M,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,b(M),c.default.createElement(z,{alt:a,title:t,width:Q.width,height:Q.height,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:S},Q,{imageVariants:M}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});j.propTypes={resolutions:R,sizes:O,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=j;t.default=P},DZ0b:function(e,t,a){"use strict";a("pIFo"),t.__esModule=!0,t.default=function(e){return e.replace(r,(function(e,t){return t.toUpperCase()}))};var r=/-(.)/g;e.exports=t.default},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},QA0p:function(e,t,a){"use strict";a("91GP"),a("f3/d"),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,r=a.propTypes,i=a.defaultProps,s=a.allowFallback,o=void 0!==s&&s,l=a.displayName,c=void 0===l?e.name||e.displayName:l,d=function(t,a){return e(t,a)};return Object.assign(n.default.forwardRef||!o?n.default.forwardRef(d):function(e){return d(e,null)},{displayName:c,propTypes:r,defaultProps:i})};var r,n=(r=a("q1tI"))&&r.__esModule?r:{default:r}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=(a("PGGC"),a("qxz8")),s=a("9eSz"),o=a.n(s),l=function(){var e=i.data;return n.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid,className:"rounded-circle",style:{maxWidth:150,maxHeight:150,marginLeft:"8px"}})},c=a("vrFN");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var f=a("TSYQ"),m=a.n(f),p=(a("f3/d"),a("QA0p"),n.a.createContext({}));p.Consumer,p.Provider;function g(e,t){var a=Object(r.useContext)(p);return e||a[t]||t}var A=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,i=e.as,s=void 0===i?"div":i,o=e.className,l=u(e,["bsPrefix","fluid","as","className"]),c=g(a,"container");return n.a.createElement(s,d({ref:t},l,{className:m()(o,r?c+"-fluid":c)}))}));A.displayName="Container",A.defaultProps={fluid:!1};var h=A,v=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.noGutters,i=e.as,s=void 0===i?"div":i,o=e.className,l=u(e,["bsPrefix","noGutters","as","className"]),c=g(a,"row");return n.a.createElement(s,d({ref:t},l,{className:m()(o,c,r&&"no-gutters")}))}));v.defaultProps={noGutters:!1};var b=v,y=(a("8+KV"),["xl","lg","md","sm","xs"]),E=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,s=void 0===i?"div":i,o=u(e,["bsPrefix","className","as"]),l=g(a,"col"),c=[],f=[];return y.forEach((function(e){var t,a,r,n=o[e];if(delete o[e],null!=n&&"object"==typeof n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&c.push(!0===t?""+l+s:""+l+s+"-"+t),null!=r&&f.push("order"+s+"-"+r),null!=a&&f.push("offset"+s+"-"+a)})),c.length||c.push(l),n.a.createElement(s,d({},o,{ref:t,className:m.a.apply(void 0,[r].concat(c,f))}))}));E.displayName="Col";var w=E,S=a("DZ0b"),x=a.n(S),N=function(e){return e[0].toUpperCase()+x()(e).slice(1)};function C(e,t){var a=void 0===t?{}:t,r=a.displayName,i=void 0===r?N(e):r,s=a.Component,o=void 0===s?"div":s,l=a.defaultProps,c=n.a.forwardRef((function(t,a){var r=t.className,i=t.bsPrefix,s=t.as,l=void 0===s?o:s,c=u(t,["className","bsPrefix","as"]),f=g(i,e);return n.a.createElement(l,d({ref:a,className:m()(r,f)},c))}));return c.defaultProps=l,c.displayName=i,c}var z=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",d({},t,{ref:a,className:m()(t.className,e)}))}))},j=n.a.createContext(null),R=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,s=e.as,o=void 0===s?"img":s,l=u(e,["bsPrefix","className","variant","as"]),c=g(a,"card-img");return n.a.createElement(o,d({ref:t,className:m()(i?c+"-"+i:c,r)},l))}));R.displayName="CardImg",R.defaultProps={variant:null};var O=R,P=z("h5"),B=z("h6"),I=C("card-body"),k=n.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.bg,o=e.text,l=e.border,c=e.body,f=e.children,p=e.as,A=void 0===p?"div":p,h=u(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=g(a,"card"),b=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return n.a.createElement(j.Provider,{value:b},n.a.createElement(A,d({ref:t},h,{className:m()(i,v,s&&"bg-"+s,o&&"text-"+o,l&&"border-"+l)}),c?n.a.createElement(I,null,f):f))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=O,k.Title=C("card-title",{Component:P}),k.Subtitle=C("card-subtitle",{Component:B}),k.Body=I,k.Link=C("card-link",{Component:"a"}),k.Text=C("card-text",{Component:"p"}),k.Header=C("card-header"),k.Footer=C("card-footer"),k.ImgOverlay=C("card-img-overlay");var L=k,V=(a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP"),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),M=r.createContext&&r.createContext(V),Q=function(){return(Q=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},F=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function T(e){return function(t){return r.createElement(G,Q({attr:Q({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,Q({key:a},t.attr),e(t.child))}))}(e.child))}}function G(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var i=e.attr,s=e.title,o=F(e,["attr","title"]);return r.createElement("svg",Q({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:a,style:Q({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==M?r.createElement(M.Consumer,null,(function(e){return t(e)})):t(V)}var Y=function(e){return T({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}}]})(e)};Y.displayName="FaFacebookSquare";var D=function(e){return T({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)};D.displayName="FaGithub";var _=function(e){return T({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)};_.displayName="FaLinkedin";var q=function(e){return T({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"}}]})(e)};q.displayName="FaStackOverflow";var H=function(e){return T({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"}}]})(e)};H.displayName="FaTwitterSquare";var W=function(e){return T({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(e)};W.displayName="FaGraduationCap";var U=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).handleWindowSizeChange=function(){a.setState({width:window.screen.availHeight})},a.state={width:0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.componentDidMount=function(){this.handleWindowSizeChange(),window.addEventListener("resize",this.handleWindowSizeChange)},i.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowSizeChange)},i.render=function(){var e=this.state.width,t=e/4;return n.a.createElement("div",{style:{height:e,overflow:"scroll",background:"#FDFEFF"}},n.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"}),n.a.createElement(c.a,{title:"Home"}),n.a.createElement(h,null,n.a.createElement(b,{className:"justify-content-md-center justify-content-sm-center",style:{position:"relative",zIndex:1e3}},n.a.createElement(w,{xs:12,md:7,lg:7},n.a.createElement(L,{style:{marginTop:t,boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.2)",border:"none"}},n.a.createElement(L.Body,{style:{display:"flex",flexDirection:"row",alignItems:"center"}},n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(b,null,n.a.createElement(w,{xs:{span:8,offset:2},md:{span:12,offset:0},lg:{span:4,offset:0}},n.a.createElement(l,null)),n.a.createElement(w,{xs:12,md:12,lg:8},n.a.createElement("div",{className:"profile-info"},n.a.createElement("h2",null,"Jorge Ramírez"),n.a.createElement("div",{style:{lineHeight:1.2},className:"info"},n.a.createElement("p",{style:{marginBottom:0}},n.a.createElement("span",{style:{fontSize:"1.15rem"}},"Ph.D. candidate")," ",n.a.createElement("a",{href:"https://ict.unitn.it/",target:"_blank",rel:"noopener noreferrer"},"@ UNITN"),"."),n.a.createElement("p",{style:{marginBottom:0}},n.a.createElement("span",{style:{fontSize:"1.15rem"}},"Informatics Engineering")," ",n.a.createElement("a",{href:"https://www.pol.una.py/",target:"_blank",rel:"noopener noreferrer"},"@ FPUNA"),"."),n.a.createElement("p",{style:{marginBottom:10}},n.a.createElement("span",{style:{fontSize:"1.15rem"}},"Co-founder")," ",n.a.createElement("a",{href:"https://www.codium.com.py/en/",target:"_blank",rel:"noopener noreferrer"},"@ Codium"),"."),n.a.createElement("p",{style:{marginBottom:0,fontSize:"0.85rem"},className:"location-info"},n.a.createElement("b",null,"Asunción")," ",n.a.createElement("span",{role:"img","aria-label":"From"},"🇵🇾")," ","⟹ ",n.a.createElement("b",null,"Trento")," ",n.a.createElement("span",{role:"img","aria-label":"Home"},"🇮🇹")))))))),n.a.createElement("p",{style:{padding:"1.25rem",textAlign:"justify"}},"I'm a Ph.D. candidate at the University of Trento. My thesis work focuses on developing strategies for addressing performance concerns and bias in designing, running, and reporting crowdsourcing experiments (helping crowd workers, the overall task design, and task requesters). You can find my publications on my"," ",n.a.createElement("a",{href:"https://scholar.google.com/citations?user=RntrsC8AAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer"},"Google Scholar profile"),".")))),n.a.createElement(b,{className:"justify-content-md-center justify-content-sm-center",style:{position:"relative",zIndex:900}},n.a.createElement(w,{xs:{span:11},sm:{span:10,offset:0},md:6,className:"media-badges-container"},n.a.createElement("div",{className:"media-badges"},n.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"1rem"}},n.a.createElement("a",{href:"https://scholar.google.com/citations?user=RntrsC8AAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(W,null))),n.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"1rem"}},n.a.createElement("a",{href:"https://www.linkedin.com/in/jorgeramirez1990",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(_,null))),n.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"1rem"}},n.a.createElement("a",{href:"https://www.github.com/jorgeramirez",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(D,null))),n.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"1rem"}},n.a.createElement("a",{href:"https://stackoverflow.com/users/1726085/jramirez",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(q,null))),n.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"1rem"}},n.a.createElement("a",{href:"https://www.facebook.com/jorgeramirez1990",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(Y,null))),n.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"1rem"}},n.a.createElement("a",{href:"https://www.twitter.com/ingheniero",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(H,null))))))))},r}(n.a.Component);t.default=U},TSYQ:function(e,t,a){var r;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===i)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},qxz8:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB284dCVRFGJa2jJ//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADERIhIkL/2gAIAQEAAQUCe/VK7jot3DAZVYagD7sOIx7f/8QAFxEBAAMAAAAAAAAAAAAAAAAAABARQf/aAAgBAwEBPwFTY//EABcRAQADAAAAAAAAAAAAAAAAAAAQEUH/2gAIAQIBAT8BWyP/xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIQESEiMkFhgf/aAAgBAQAGPwLTJNjc+OjJaJGF8m6ngz//xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUFRkbH/2gAIAQEAAT8hvHQY6tXw2l6aisYzqAAUXYxMXuI3hcSlLtG9Xyf/2gAMAwEAAgADAAAAEOT3Af/EABcRAQEBAQAAAAAAAAAAAAAAABEAARD/2gAIAQMBAT8QwIRx/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQABEP/aAAgBAgEBPxDVnPP/xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhMUFRgf/aAAgBAQABPxBh5IB2t7R2ofDdixR8p9lMmjXKgqSKCrpCBWPsX3JlmcXxiwIu9/WZbNt3sUjS9L7if//Z","aspectRatio":1,"src":"/static/fa2760687a402cb091bafd8225348ac7/c83a6/me.jpg","srcSet":"/static/fa2760687a402cb091bafd8225348ac7/24f62/me.jpg 75w,\\n/static/fa2760687a402cb091bafd8225348ac7/cb3d3/me.jpg 150w,\\n/static/fa2760687a402cb091bafd8225348ac7/c83a6/me.jpg 300w,\\n/static/fa2760687a402cb091bafd8225348ac7/f709c/me.jpg 450w,\\n/static/fa2760687a402cb091bafd8225348ac7/775d9/me.jpg 600w,\\n/static/fa2760687a402cb091bafd8225348ac7/0a89a/me.jpg 960w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-31fafe0072717802f65c.js.map