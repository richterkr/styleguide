var organism=function(){"use strict";window.addEventListener("load",function(){new organism});function o(o){const t={selector:"body",scope:document};this.options=Object.assign({},t,o)}o.prototype.subscribe=function(o,t){const e=this,{scope:n,selector:s}=e.options;n.querySelectorAll(s).forEach(n=>{n.addEventListener(o,o=>{o.stopPropagation(),t.notify(e,o.type)},!0)})};function t(t){o.call(this,t);const e={selector:"body",scope:document};this.options=Object.assign({},e,t)}(t.prototype=Object.create(o.prototype)).constructor=t,t.prototype.notify=function(o,t){const{selector:e}=this.options;console.info(e,"got",t,"Event from",o.options.selector)};function e(o){t.call(this,o);const e={selector:"body",scope:document};this.options=Object.assign({},e,o)}return(e.prototype=Object.create(t.prototype)).constructor=e,e}();
