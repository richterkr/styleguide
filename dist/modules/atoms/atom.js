var atom=function(){"use strict";window.addEventListener("load",function(){new atom});function t(t){const o={selector:"body",scope:document};this.options=Object.assign({},o,t)}return t.prototype.subscribe=function(t,o){const e=this,{scope:n,selector:s}=e.options;n.querySelectorAll(s).forEach(n=>{n.addEventListener(t,t=>{t.stopPropagation(),o.notify(e,t.type)},!0)})},t}();
