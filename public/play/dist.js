(()=>{"use strict";var n={422:(n,a,i)=>{var s=i(343);function t(n){$(n).find("#title-display").click((function(){$(this).css("display","none"),$(this).parent().css("width","100%"),$(this).siblings("#url-display").css("display","flex");var n=$(this).parent().find("#url-input");n.focus();var a=n.val();n.val(""),n.val(a)})),$(n).find("#favicon").click((function(){})),$(n).find("#url-display").focusout((function(){$(this).css("display","none"),$(this).parent().css("width","max-content"),$(this).siblings("#title-display").css("display","flex")})),$(n).find("#url-input").keydown((function(a){13==a.which&&e(n,this.value)}))}function e(n,a){var i="",s=document.createElement("div"),t='<span class="material-symbols-sharp">draft</span>';if(s.className="window-content","tutorial"==a&&(t='<span class="material-symbols-sharp">quiz</span>',i="Ağla Nasıl Oynanır",s.innerHTML="Ağlayarak\n(tutorial henüz yazılmadı)"),"about:nah"==a&&(t='<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">',i="Bilal Aytemur size nah çekiyor",s.innerHTML='<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">'),a.startsWith("https://")){var e="htdocs/"+a.replace(/^(https?\:\/\/)/,"");t=`<img style="max-width: 100%; max-height: 100%;" src="${e}/favicon.png">`,s.innerHTML=`<iframe style="width:100%;height:100%" src=${e}></iframe>`,s.firstChild.addEventListener("load",(function(){console.log("iframe loaded")}))}n.favicon=t,n.url=a||"about:blank",n.pagetitle=i||a,n.content=s,$(n).find("#favicon").html(n.favicon),$(n).find("#url").html(n.url),$(n).find("#url-input").val(n.url),$(n).find("#title").html(n.pagetitle),$(n).find(".window-content").replaceWith(n.content),$(n).find("#url-input").blur()}document.wB=function(n){const a=(0,s.u)("wBrowser");a.pagetitle="Boş sayfa",a.url="about:blank",a.content=document.createElement("div"),a.innerHTML='\n    <div class="window-header">\n        <div id="browser-header-container">\n            <div id="page-header">\n                <div id="favicon">\n                    <span class="material-symbols-sharp">draft</span>\n                </div>\n                <div id="title-display">\n                    <span id="title">Boş sayfa</span>\n                    <span id="url">about:blank</span>\n                </div>\n                <div id="url-display">\n                    <input id="url-input" type="url" value="about:blank">\n                </div>\n            </div>\n            <div id="actions">\n                <div>\n                    <span class="material-symbols-sharp">arrow_back</span>\n                </div>\n                <div>\n                    <span class="material-symbols-sharp">home</span>\n                </div>\n                <div>\n                    <span class="material-symbols-sharp">arrow_forward</span>\n                </div>\n            </div>\n        </div>\n        <div class="window-buttons">\n            <a class="window-close"><span class="material-symbols-sharp">close</span></a>\n        </div>\n    </div>\n    <div class="window-content">\n    </div>\n  ',t(a),(0,s.x)(a),e(a,n)},$(document).ready((function(){t("#wBrowser")}))},272:(n,a,i)=>{var s=i(343);document.wD=function(n){var a;("wAbout"===n&&((a=(0,s.u)("wAbout","Ağla Hakkında")).innerHTML=t,(0,s.x)(a)),"wSettings"===n)&&((a=(0,s.u)("wSettings","Ağla Ayarları")).innerHTML=e,(0,s.x)(a))};var t='\n    <div class="window-header">\n        <div class="window-icon quirky">\n            <span class="material-symbols-sharp rotated-icon">info</span>\n        </div>\n        <span class="window-title quirky">Ağla hakkında</span>\n        <div class="window-buttons">\n            <a  class="window-close"><span class="material-symbols-sharp">close</span></a>\n        </div>\n    </div>\n    <div class="window-content">\n        <div>\n            <img width="150px" src="logo.png">\n            <span>Ağla v0.1</span>\n            <span>Önizleme sürümü</span>\n            <span>© 2023 Ağlanet. Tüm sakları faklıdır.</span>\n        </div>\n</div>',e='\n<div class="window-header">\n<div class="window-icon quirky">\n    <span class="material-symbols-sharp rotated-icon">settings</span>\n</div>\n<span class="window-title quirky">Ağla Ayarları</span>\n<div class="window-buttons">\n    <a class="window-close"><span class="material-symbols-sharp">close</span></a>\n</div>\n</div>'},702:(n,a,i)=>{function s(){document.querySelectorAll(".dropdown-button").forEach((n=>{n.classList.remove("opened"),n.nextElementSibling.style.display="none"}))}i.d(a,{Z:()=>s}),$(document).ready((function(){$(".dropdown-button").click((function(){const n=this.nextElementSibling.style.display;s(),"flex"!==n&&(this.nextElementSibling.style.display="flex",this.classList.add("opened"))})),$(document).click((function(n){n.target.closest(".dropdown-menu")||n.target.closest(".dropdown-button")||s()}))}))},343:(n,a,i)=>{i.d(a,{u:()=>o,x:()=>d});var s,t=i(702),e=[];function l(){e.forEach((n=>{$(n).css("z-index",e.indexOf(n))}))}function o(n,a){const i=document.createElement("div");return i.id=n,i.className="window",i}function d(n){(0,t.Z)(),"-1"==e.indexOf(n)?e.push(n):r(n),n.style.display="flex",s[0].appendChild(n),function(n){$(n).draggable({handle:".window-header",scroll:!1}),$(n).resizable({handles:"all",distance:50,classes:{"ui-resizable-se":""}}),$(n).mousedown((function(){(0,t.Z)(),r(n)})),$(n).find(".window-close").click((function(){!function(n){n.style.display="none";const a=e.indexOf(n);a>-1&&e.splice(a,1),n.remove()}(n)}))}(n),l()}function r(n){const a=e.indexOf(n);e.push(e.splice(a,1)[0]),l()}$(document).ready((function(){s=$("#window-area")}))}},a={};function i(s){var t=a[s];if(void 0!==t)return t.exports;var e=a[s]={exports:{}};return n[s](e,e.exports,i),e.exports}i.d=(n,a)=>{for(var s in a)i.o(a,s)&&!i.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:a[s]})},i.o=(n,a)=>Object.prototype.hasOwnProperty.call(n,a),i(422),i(272),i(343),i(702)})();