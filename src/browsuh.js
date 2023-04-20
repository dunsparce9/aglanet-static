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

function newBrowserWindow(targetUrl,width) {
    const w = newWindow('wBrowser');
    if (width) {
        $(w).css('width',width)
    }
    w.pagetitle = "Boş sayfa";
    w.url = "about:blank";
    w.content = document.createElement("div");
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
    w.content = document.createElement("div");
    w.content.className = 'browser-window window-content';
    w.favicon = `<span class="material-symbols-sharp">draft</span>`;
    w.url = url;
    var sitePath = url.replace(/^(https?\:\/\/)/, "");
    var siteName = sitePath.replace(/\/.*/, "")
    w.pagetitle = siteName;
    if (url == "tutorial") {
        w.favicon = `<span class="material-symbols-sharp">quiz</span>`
        w.pagetitle = "Ağla Nasıl Oynanır";
        w.content.innerHTML = "Ağlayarak\n(tutorial henüz yazılmadı)";
    }
    if (url == "about:nah") {
        w.favicon = `<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">`;
        w.pagetitle = "Bilal Aytemur size nah çekiyor";
        w.content.innerHTML = `<img style="max-width: 100%; max-height: 100%;" src="nah.jpg">`;
    }
    if (url.startsWith("https://")) {
        var path = "htdocs/" + sitePath;
        $.ajax({
            type: 'HEAD',
            url: path,
            success: function () {
                w.favicon = `<img style="max-width: 100%; max-height: 100%;" src="${path}/favicon.png">`;
                w.content.innerHTML = `<iframe style="width:100%;height:100%;border:none" src="${path}"></iframe>`;
                w.content.firstChild.addEventListener('load', function () { $(w).find("#title").html(this.contentDocument.title); });
            },
            error: function () {
                w.content.innerHTML = `<iframe style="width:100%;height:100%;border:none" src="htdocs/browser/errors/not_resolved.html"></iframe>`;
            },
        }).always(function () {
            updateWindow(w);
        });
    } else {
        updateWindow(w);
    }
}
function updateWindow(w) {
    $(w).find("#favicon").html(w.favicon);
    $(w).find("#url").html(w.url);
    $(w).find("#url-input").val(w.url);
    $(w).find("#title").html(w.pagetitle);
    $(w).find(".window-content").replaceWith(w.content);
    $(w).find("#url-input").blur();
}
