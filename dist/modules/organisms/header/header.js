var header=function(){"use strict";return document.addEventListener("DOMContentLoaded",function(){header()}),function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".searchbar",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=document.querySelector(e);Object.keys(n).forEach(function(e){o.addEventListener(e,n[e])}),document.querySelector(".searchbar .button").addEventListener("click",function(){console.log("searchbar:","you clicked my button")}),document.querySelector(".searchbar input").addEventListener("change",function(){console.log("searchbar:","you changed my input")})}("header .searchbar",{mouseover:function(){console.log("header:","you hovered over my searchbar")}})}}();
