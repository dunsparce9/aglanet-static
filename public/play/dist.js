(()=>{"use strict";var n={422:(n,a,s)=>{var i=s(343);function t(n){$(n).find("#title-display").click((function(){$(this).css("display","none"),$(this).parent().css("width","100%"),$(this).siblings("#url-display").css("display","flex");var n=$(this).parent().find("#url-input");n.focus();var a=n.val();n.val(""),n.val(a)})),$(n).find("#favicon").click((function(){})),$(n).find("#url-display").focusout((function(){$(this).css("display","none"),$(this).parent().css("width","max-content"),$(this).siblings("#title-display").css("display","flex")})),$(n).find("#url-input").keydown((function(a){13==a.which&&l(n,this.value)}))}function l(n,a){var s="",i="",t='<span class="material-symbols-sharp">draft</span>';"tutorial"==a&&(t='<span class="material-symbols-sharp">quiz</span>',s="Ağla Nasıl Oynanır",i="Ağlayarak\n(tutorial henüz yazılmadı)"),"about:nah"==a&&(t='<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">',s="Bilal Aytemur size nah çekiyor",i='<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">'),n.favicon=t,n.url=a||"about:blank",n.pagetitle=s||a,n.content=i,$(n).find("#favicon").html(n.favicon),$(n).find("#url").html(n.url),$(n).find("#url-input").val(n.url),$(n).find("#title").html(n.pagetitle),$(n).find(".window-content").html(n.content),$(n).find("#url-input").blur()}document.wB=function(n){const a=(0,i.u)("wBrowser");a.pagetitle="Boş sayfa",a.url="about:blank",a.content="",a.innerHTML='\n    <div class="window-header">\n        <div id="browser-header-container">\n            <div id="page-header">\n                <div id="favicon">\n                    <span class="material-symbols-sharp">draft</span>\n                </div>\n                <div id="title-display">\n                    <span id="title">Boş sayfa</span>\n                    <span id="url">about:blank</span>\n                </div>\n                <div id="url-display">\n                    <input id="url-input" type="url" value="about:blank">\n                </div>\n            </div>\n            <div id="actions">\n                <div>\n                    <span class="material-symbols-sharp">arrow_back</span>\n                </div>\n                <div>\n                    <span class="material-symbols-sharp">home</span>\n                </div>\n                <div>\n                    <span class="material-symbols-sharp">arrow_forward</span>\n                </div>\n            </div>\n        </div>\n        <div class="window-buttons">\n            <a class="window-close"><span class="material-symbols-sharp">close</span></a>\n        </div>\n    </div>\n    <div class="window-content">\n    </div>\n  ',t(a),(0,i.x)(a),l(a,n)},$(document).ready((function(){t("#wBrowser")}))},272:(n,a,s)=>{var i=s(343);document.wD=function(n){var a;("wAbout"===n&&((a=(0,i.u)("wAbout","Ağla Hakkında")).innerHTML=t,(0,i.x)(a)),"wSettings"===n)&&((a=(0,i.u)("wSettings","Ağla Ayarları")).innerHTML=l,(0,i.x)(a))};var t='\n    <div class="window-header">\n        <div class="window-icon quirky">\n            <span class="material-symbols-sharp rotated-icon">info</span>\n        </div>\n        <span class="window-title quirky">Ağla hakkında</span>\n        <div class="window-buttons">\n            <a  class="window-close"><span class="material-symbols-sharp">close</span></a>\n        </div>\n    </div>\n    <div class="window-content">\n        <div>\n            <img width="150px" src="logo.png">\n            <span>Ağla v0.1</span>\n            <span>Önizleme sürümü</span>\n            <span>© 2023 Ağlanet. Tüm sakları faklıdır.</span>\n        </div>\n</div>',l='\n<div class="window-header">\n<div class="window-icon quirky">\n    <span class="material-symbols-sharp rotated-icon">settings</span>\n</div>\n<span class="window-title quirky">Ağla Ayarları</span>\n<div class="window-buttons">\n    <a class="window-close"><span class="material-symbols-sharp">close</span></a>\n</div>\n</div>'},702:(n,a,s)=>{function i(){document.querySelectorAll(".dropdown-button").forEach((n=>{n.classList.remove("opened"),n.nextElementSibling.style.display="none"}))}s.d(a,{Z:()=>i}),$(document).ready((function(){$(".dropdown-button").click((function(){const n=this.nextElementSibling.style.display;i(),"flex"!==n&&(this.nextElementSibling.style.display="flex",this.classList.add("opened"))})),$(document).click((function(n){n.target.closest(".dropdown-menu")||n.target.closest(".dropdown-button")||i()}))}))},343:(n,a,s)=>{s.d(a,{u:()=>o,x:()=>d});var i,t=s(702),l=[];function e(){l.forEach((n=>{$(n).css("z-index",l.indexOf(n))}))}function o(n,a){const s=document.createElement("div");return s.id=n,s.className="window",s}function d(n){(0,t.Z)(),"-1"==l.indexOf(n)?l.push(n):r(n),n.style.display="flex",i[0].appendChild(n),function(n){$(n).draggable({handle:".window-header",scroll:!1}),$(n).resizable({handles:"all",distance:50,classes:{"ui-resizable-se":""}}),$(n).mousedown((function(){(0,t.Z)(),r(n)})),$(n).find(".window-close").click((function(){!function(n){n.style.display="none";const a=l.indexOf(n);a>-1&&l.splice(a,1),n.remove()}(n)}))}(n),e()}function r(n){const a=l.indexOf(n);l.push(l.splice(a,1)[0]),e()}$(document).ready((function(){i=$("#window-area")}))}},a={};function s(i){var t=a[i];if(void 0!==t)return t.exports;var l=a[i]={exports:{}};return n[i](l,l.exports,s),l.exports}s.d=(n,a)=>{for(var i in a)s.o(a,i)&&!s.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:a[i]})},s.o=(n,a)=>Object.prototype.hasOwnProperty.call(n,a),s(422),s(272),s(343),s(702)})();