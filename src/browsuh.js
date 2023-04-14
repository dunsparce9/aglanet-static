import { newWindow, openWindow } from './z4ui/windows.js'
document.wB = newBrowserWindow;
$(document).ready(function () {
    bindEvents("#wBrowser");
});

function bindEvents(browser) {
    $(browser)
        .find("#title-display")
        .click(function () {
            $(this).css("display", "none");
            $(this).parent().css("width", "100%");
            $(this).siblings("#url-display").css("display", "flex");
            var input = $(this).parent().find("#url-input");
            input.focus();
            var tmpStr = input.val();
            input.val("");
            input.val(tmpStr);
        });
    $(browser)
        .find("#favicon")
        .click(function () { });
    $(browser)
        .find("#url-display")
        .focusout(function () {
            $(this).css("display", "none");
            $(this).parent().css("width", "max-content");
            $(this).siblings("#title-display").css("display", "flex");
        });
    $(browser)
        .find("#url-input")
        .keydown(function (event) {
            if (event.which == 13) {
                navigateTo(browser, this.value)
            }
        });
}

function newBrowserWindow(targetUrl) {
    const w = newWindow('wBrowser');
    w.pagetitle = "Boş sayfa";
    w.url = "about:blank";
    w.content = "";
    // TEMPLATE LITERALS DON'T UPDATE
    // use a databinding library
    w.innerHTML = `
    <div class="window-header">
        <div id="browser-header-container">
            <div id="page-header">
                <div id="favicon">
                    <span class="material-symbols-sharp">draft</span>
                </div>
                <div id="title-display">
                    <span id="title">Boş sayfa</span>
                    <span id="url">about:blank</span>
                </div>
                <div id="url-display">
                    <input id="url-input" type="url" value="about:blank">
                </div>
            </div>
            <div id="actions">
                <div>
                    <span class="material-symbols-sharp">arrow_back</span>
                </div>
                <div>
                    <span class="material-symbols-sharp">home</span>
                </div>
                <div>
                    <span class="material-symbols-sharp">arrow_forward</span>
                </div>
            </div>
        </div>
        <div class="window-buttons">
            <a class="window-close"><span class="material-symbols-sharp">close</span></a>
        </div>
    </div>
    <div class="window-content">
    </div>
  `;
    bindEvents(w);
    openWindow(w);
    navigateTo(w, targetUrl);
}
function navigateTo(w, url) {
    var title = "", content = "", favicon = `<span class="material-symbols-sharp">draft</span>`;
    if (url == "tutorial") {
        favicon = `<span class="material-symbols-sharp">quiz</span>`
        title = "Ağla Nasıl Oynanır";
        content = "Ağlayarak\n(tutorial henüz yazılmadı)";
    }
    if (url == "about:nah") {
        favicon = `<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">`;
        title = "Bilal Aytemur size nah çekiyor";
        content = `<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">`;
    }
    w.favicon = favicon;
    w.url = url ? url : "about:blank";
    w.pagetitle = title ? title : url;
    w.content = content;
    $(w).find("#favicon").html(w.favicon);
    $(w).find("#url").html(w.url);
    $(w).find("#url-input").val(w.url);
    $(w).find("#title").html(w.pagetitle);
    $(w).find(".window-content").html(w.content);
    $(w).find("#url-input").blur();
}
