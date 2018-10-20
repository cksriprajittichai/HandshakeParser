(function(){var t,e,n,r,o,i,u,a,s,l,c,h,p,d,f,m,y,v,g,b,w,E,T,k,_,A,S,H,R,C,O,N,x,L,q,D,P,F,I,M,X,B,j,G,U,Q,V,$,K,Y,z,J,W,Z,tt,et,nt,rt,ot,it,ut,at,st,lt,ct,ht,pt=[].slice,dt=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},ft=function(t,e){function n(){this.constructor=t}for(var r in e)mt.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},mt={}.hasOwnProperty,yt=function(t,e){return function(){return t.apply(e,arguments)}};F={},h=10,rt=!1,Z=!0,j=null,G=400,v=null,L=null,Q=null,ht=null,r={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",PARTIAL_LOAD:"page:partial-load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",AFTER_REMOVE:"page:after-remove"},x=function(t){return t.change||t.append||t.prepend},T=function(t,e){var r;if(null==e&&(e={}),t=new n(t),!I(t.absolute)){if(!t.crossOrigin())return x(e)||e.keep?z():c(),Y(),null!=j&&j.start({delay:G}),rt&&!x(e)&&(r=ot(t.absolute))?(V(t),k(r),e.showProgressBar=!1,e.scroll=!1):x(e)&&!t.hash&&null==e.scroll&&(e.scroll=!1),_(t,e);document.location.href=t.absolute}},ot=function(t){var e;if(t!==v.url)return(e=F[t])&&!e.transitionCacheDisabled?e:void 0},b=function(t){return null==t&&(t=!0),rt=t},g=function(t){return null==t&&(t=!0),Z=!t,t},_=function(t,e){return null==e.cacheRequest&&(e.cacheRequest=Z),null==e.showProgressBar&&(e.showProgressBar=!0),it(r.FETCH,{url:t.absolute}),null!=ht&&ht.abort(),(ht=new XMLHttpRequest).open("GET",t.formatForXHR({cache:e.cacheRequest}),!0),ht.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),ht.setRequestHeader("X-XHR-Referer",Q),ht.onload=function(){var n,o;return it(r.RECEIVE,{url:t.absolute}),(n=B())?(V(t),$(),o=p.apply(null,pt.call(E(n)).concat([e])),e.showProgressBar&&null!=j&&j.done(),st(e.scroll),it(x(e)?r.PARTIAL_LOAD:r.LOAD,o),f(h)):(null!=j&&j.done(),document.location.href=y()||t.absolute)},j&&e.showProgressBar&&(ht.onprogress=function(t){var e;return e=t.lengthComputable?t.loaded/t.total*100:j.value+(100-j.value)/10,j.advanceTo(e)}),ht.onloadend=function(){return ht=null},ht.onerror=function(){return document.location.href=t.absolute},ht.send()},k=function(t,e){return null==e&&(e={}),null!=ht&&ht.abort(),p(t.title,t.body,null,{runScripts:!1}),null!=j&&j.done(),st(e.scroll),it(r.RESTORE)},c=function(){var t;return t=new n(v.url),F[t.absolute]={url:t.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")}},z=function(){return delete F[new n(v.url).absolute]},M=function(t){if(null==t&&(t=h),/^[\d]+$/.test(t))return h=parseInt(t)},f=function(t){var e,n,r,o,i,u;for(e=(i=Object.keys(F)).map(function(t){return F[t].cachedAt}).sort(function(t,e){return e-t}),u=[],n=0,o=i.length;n<o;n++)r=i[n],F[r].cachedAt<=e[t]&&(P(F[r].body),u.push(delete F[r]));return u},W=function(t,e){var n;return null==e&&(e={}),n=p.apply(null,pt.call(E(m(t))).concat([e])),it(x(e)?r.PARTIAL_LOAD:r.LOAD,n)},p=function(e,n,o,i){var u,a,s,l,c,h,p,d,f,m,y;return e=null!=(m=i.title)?m:e,s=document.body,x(i)?(i.append&&(l=S(s,i.append)),i.prepend&&(p=S(s,i.prepend)),d=A(s,"[data-turbolinks-temporary]"),i.change&&(d=d.concat(S(s,i.change))),c=[].concat(l||[],p||[],d||[]),c=J(c)):c=[s],it(r.BEFORE_UNLOAD,c),!1!==e&&(document.title=e),x(i)?(l&&(u=nt(n,l,{keep:!1,append:!0})),p&&(f=nt(n,p,{keep:!1,prepend:!0})),d&&(y=nt(n,d,{keep:!1})),a=[].concat(u||[],f||[],y||[]),a=J(a)):(i.flush||(h=A(s,"[data-turbolinks-permanent]"),i.keep&&h.push.apply(h,S(s,i.keep)),nt(n,J(h),{keep:!0})),document.body=n,null!=o&&t.update(o),et(),a=[n]),w(H(a,i.runScripts)),v=window.history.state,it(r.CHANGE,a),it(r.UPDATE),a},A=function(t,e){return Array.prototype.slice.apply(t.querySelectorAll(e))},S=function(t,e){var n,r,o,i,u;for(i=[],n=0,o=(u=Array.isArray(e)?e:[e]).length;n<o;n++)r=u[n],i.push.apply(i,A(t,'[id^="'+r+':"], [id="'+r+'"]'));return i},nt=function(t,e,n){var r,o,i,u,a,s,l,c,h,p,d;for(r=[],s=0,c=e.length;s<c;s++){if(!(p=(u=e[s]).getAttribute("id")))throw new Error("Turbolinks partial replace: turbolinks elements must have an id.");if(d=t.querySelector('[id="'+p+'"]'))if(n.keep)u.parentNode.insertBefore(u.cloneNode(!0),u),u=d.ownerDocument.adoptNode(u),d.parentNode.replaceChild(u,d);else if(n.append||n.prepend){for(a=u.firstChild,l=0,h=(i=Array.prototype.slice.call(d.childNodes,0)).length;l<h;l++)o=i[l],!a||n.append?u.appendChild(o):n.prepend&&u.insertBefore(o,a);r.push(u)}else u.parentNode.replaceChild(d,u),P(u),r.push(d)}return r},P=function(t){return"undefined"!=typeof jQuery&&jQuery(t).remove(),it(r.AFTER_REMOVE,t)},H=function(t,e){var n,r,o,i,u,a;for(a=!1===e?'script[data-turbolinks-eval="always"]':'script:not([data-turbolinks-eval="false"])',i=[],n=0,r=(o=document.body.querySelectorAll(a)).length;n<r;n++)u=o[n],(N(u)||q(t,u)&&!ct(u))&&i.push(u);return i},N=function(t){return"always"===t.getAttribute("data-turbolinks-eval")},ct=function(t){for(;null!=t;){if("function"==typeof t.hasAttribute?t.hasAttribute("data-turbolinks-permanent"):void 0)return!0;t=t.parentNode}return!1},q=function(t,e){for(;null!=e;){if(dt.call(t,e)>=0)return!0;e=e.parentNode}return!1},w=function(t){var e,n,r,o,i,u,a,s,l,c,h;for(r=0,i=t.length;r<i;r++)if(""===(l=(h=t[r]).type)||"text/javascript"===l){for(n=document.createElement("script"),o=0,u=(c=h.attributes).length;o<u;o++)e=c[o],n.setAttribute(e.name,e.value);h.hasAttribute("async")||(n.async=!1),n.appendChild(document.createTextNode(h.innerHTML)),s=h.parentNode,a=h.nextSibling,s.removeChild(h),s.insertBefore(n,a)}},et=function(){var t,e;if((t=(e=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length-1])&&document.activeElement!==t)return t.focus()},V=function(t){var e;if((e=(t=new n(t)).absolute)!==Q&&e!==document.location.href)return window.history.pushState({turbolinks:!0,url:t.absolute},"",t.absolute)},$=function(){var t,e;if(t=ht.getResponseHeader("X-XHR-Redirected-To"))return e=(t=new n(t)).hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",t.href+e)},y=function(){var t;if(null!=(t=ht.getResponseHeader("Location"))&&new n(t).crossOrigin())return t},Y=function(){return Q=document.location.href},K=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href),v=window.history.state},st=function(t){return Array.isArray(t)?window.scrollTo(t[0],t[1]):!1!==t?document.location.hash?(document.location.href=document.location.href,K()):window.scrollTo(0,0):void 0},d=function(t){var e,n,r;if(null==t||"object"!=typeof t)return t;e=new t.constructor;for(n in t)r=t[n],e[n]=d(r);return e},J=function(t){var e,n,r,o;for(o=[],e=0,n=t.length;e<n;e++)r=t[e],-1===o.indexOf(r)&&o.push(r);return o},X=function(t){var e,n;return n=(null!=(e=document.cookie.match(new RegExp(t+"=(\\w+)")))?e[1].toUpperCase():void 0)||"",document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",n},at=function(){return(new Date).getTime().toString(36)},it=function(t,e){var n;return"undefined"!=typeof Prototype&&Event.fire(document,t,e,!0),n=document.createEvent("Events"),e&&(n.data=e),n.initEvent(t,!0,!0),document.dispatchEvent(n)},I=function(t){return!it(r.BEFORE_CHANGE,{url:t})},B=function(){var t,e,n,r,o,i;if(i=function(){var t;return null!=(t=ht.getResponseHeader("Content-Type"))&&t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},n=function(){var t;return null!=(t=ht.getResponseHeader("Content-Disposition"))&&t.match(/^attachment/)},r=function(t){var e,n,r,o,i;for(i=[],e=0,n=(o=t.querySelector("head").childNodes).length;e<n;e++)null!=("function"==typeof(r=o[e]).getAttribute?r.getAttribute("data-turbolinks-track"):void 0)&&i.push(r.getAttribute("src")||r.getAttribute("href"));return i},t=function(t){var e;return L||(L=r(document)),(e=r(t)).length!==L.length||o(e,L).length!==L.length},o=function(t,e){var n,r,o,i,u;for(t.length>e.length&&(t=(o=[e,t])[0],e=o[1]),i=[],n=0,r=t.length;n<r;n++)u=t[n],dt.call(e,u)>=0&&i.push(u);return i},!function(){var t;return 400<=(t=ht.status)&&t<600}()&&i()&&!n()&&(e=m(ht.responseText))&&!t(e))return e},E=function(e){var n;return[null!=(n=e.querySelector("title"))?n.textContent:void 0,e.querySelector("body"),t.get(e).token]},t={get:function(t){var e;return null==t&&(t=document),{node:e=t.querySelector('meta[name="csrf-token"]'),token:null!=e&&"function"==typeof e.getAttribute?e.getAttribute("content"):void 0}},update:function(t){var e;if(null!=(e=this.get()).token&&null!=t&&e.token!==t)return e.node.setAttribute("content",t)}},m=function(t){var e;return/<(html|body)/i.test(t)?(e=document.documentElement.cloneNode()).innerHTML=t:(e=document.documentElement.cloneNode(!0)).querySelector("body").innerHTML=t,e.head=e.querySelector("head"),e.body=e.querySelector("body"),e},n=function(){function t(e){if(this.original=null!=e?e:document.location.href,this.original.constructor===t)return this.original;this._parse()}return t.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},t.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},t.prototype.hasNoHash=function(){return 0===this.hash.length},t.prototype.crossOrigin=function(){return this.origin!==(new t).origin},t.prototype.formatForXHR=function(t){return null==t&&(t={}),(t.cache?this:this.withAntiCacheParam()).withoutHashForIE10compatibility()},t.prototype.withAntiCacheParam=function(){return new t(/([?&])_=[^&]*/.test(this.absolute)?this.absolute.replace(/([?&])_=[^&]*/,"$1_="+at()):new t(this.absolute+(/\?/.test(this.absolute)?"&":"?")+"_="+at()))},t.prototype._parse=function(){var t;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,t=this.link,this.href=t.href,this.protocol=t.protocol,this.host=t.host,this.hostname=t.hostname,this.port=t.port,this.pathname=t.pathname,this.search=t.search,this.hash=t.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},t}(),o=function(){function t(e){if(this.link=e,this.link.constructor===t)return this.link;this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),t.__super__.constructor.apply(this,arguments)}return ft(t,n),t.HTML_EXTENSIONS=["html"],t.allowExtensions=function(){var e,n,r,o;for(r=0,o=(n=1<=arguments.length?pt.call(arguments,0):[]).length;r<o;r++)e=n[r],t.HTML_EXTENSIONS.push(e);return t.HTML_EXTENSIONS},t.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},t.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new n).withoutHash()},t.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+t.HTML_EXTENSIONS.join("|")+")?$","g"))},t.prototype._optOut=function(){var t,e;for(e=this.originalElement;!t&&e!==document;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},t.prototype._target=function(){return 0!==this.link.target.length},t}(),e=function(){function t(t){this.event=t,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(lt(this.link.href),this.event.preventDefault()))}return t.installHandlerLast=function(e){if(!e.defaultPrevented)return document.removeEventListener("click",t.handle,!1),document.addEventListener("click",t.handle,!1)},t.handle=function(e){return new t(e)},t.prototype._extractLink=function(){var t;for(t=this.event.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;if("A"===t.nodeName&&0!==t.href.length)return this.link=new o(t)},t.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},t.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},t}(),u={enable:(i=function(){function t(t){this.elementSelector=t,this._trickle=yt(this._trickle,this),this._reset=yt(this._reset,this),this.value=0,this.content="",this.speed=300,this.opacity=n,this.install()}var e,n;return e="turbolinks-progress-bar",n=.99,t.enable=function(){return null!=j?j:j=new t("html")},t.disable=function(){return null!=j&&j.uninstall(),j=null},t.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(e),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},t.prototype.uninstall=function(){return this.element.classList.remove(e),document.head.removeChild(this.styleElement)},t.prototype.start=function(t){var e,n;return e=(null!=t?t:{}).delay,clearTimeout(this.displayTimeout),e?(this.display=!1,this.displayTimeout=setTimeout((n=this,function(){return n.display=!0}),e)):this.display=!0,this.value>0&&(this._reset(),this._reflow()),this.advanceTo(5)},t.prototype.advanceTo=function(t){var e;if(t>(e=this.value)&&e<=100){if(this.value=t,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},t.prototype.done=function(){if(this.value>0)return this.advanceTo(100),this._finish()},t.prototype._finish=function(){var t;return this.fadeTimer=setTimeout((t=this,function(){return t.opacity=0,t._updateStyle()}),this.speed/2),this.resetTimer=setTimeout(this._reset,this.speed)},t.prototype._reflow=function(){return this.element.offsetHeight},t.prototype._reset=function(){return this._stopTimers(),this.value=0,this.opacity=n,this._withSpeed(0,(t=this,function(){return t._updateStyle(!0)}));var t},t.prototype._stopTimers=function(){return this._stopTrickle(),clearTimeout(this.fadeTimer),clearTimeout(this.resetTimer)},t.prototype._startTrickle=function(){if(!this.trickleTimer)return this.trickleTimer=setTimeout(this._trickle,this.speed)},t.prototype._stopTrickle=function(){return clearTimeout(this.trickleTimer),delete this.trickleTimer},t.prototype._trickle=function(){return this.advanceTo(this.value+Math.random()/2),this.trickleTimer=setTimeout(this._trickle,this.speed)},t.prototype._withSpeed=function(t,e){var n,r;return n=this.speed,this.speed=t,r=e(),this.speed=n,r},t.prototype._updateStyle=function(t){return null==t&&(t=!1),t&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},t.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},t.prototype._createCSSRule=function(){return this.elementSelector+"."+e+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+(this.display?this.value:0)+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},t}()).enable,disable:i.disable,setDelay:function(t){return G=t},start:function(t){return i.enable().start(t)},advanceTo:function(t){return null!=j?j.advanceTo(t):void 0},done:function(){return null!=j?j.done():void 0}},C=function(){return document.addEventListener("DOMContentLoaded",function(){return it(r.CHANGE,[document.body]),it(r.UPDATE)},!0)},O=function(){if("undefined"!=typeof jQuery)return jQuery(document).on("ajaxSuccess",function(t,e){if(jQuery.trim(e.responseText))return it(r.UPDATE)})},D=function(t){var e,r,o,i;if((null!=(i=t.state)?i.turbolinks:void 0)&&t.state.url!==v.url)return o=new n(v.url),(r=new n(t.state.url)).withoutHash()===o.withoutHash()?st():(e=F[r.absolute])?(c(),k(e,{scroll:[e.positionX,e.positionY]})):lt(t.target.location.href)},R=function(){return K(),i.enable(),document.addEventListener("click",e.installHandlerLast,!0),window.addEventListener("hashchange",K,!1),window.addEventListener("popstate",D,!1)},s=window.history&&"pushState"in window.history&&"state"in window.history,a=(-1!==(ut=navigator.userAgent).indexOf("Android 2.")||-1!==ut.indexOf("Android 4.0"))&&-1!==ut.indexOf("Mobile Safari")&&-1===ut.indexOf("Chrome")&&-1===ut.indexOf("Windows Phone"),tt="GET"===(U=X("request_method"))||""===U,l=s&&!a&&tt,document.addEventListener&&document.createEvent&&(C(),O()),l?(lt=T,R()):lt=function(t){return null==t&&(t=document.location.href),document.location.href=t},this.Turbolinks={visit:lt,replace:W,pagesCached:M,cacheCurrentPage:c,enableTransitionCache:b,disableRequestCaching:g,ProgressBar:u,allowLinkExtensions:o.allowExtensions,supported:l,EVENTS:d(r)}}).call(this);