import { newWindow, openWindow, closeWindow as cw } from './z4ui/windows.js';
document.wD = wD;
document.closeWindow = cw;
document.playerContext = {
    cries: 0,
    salt: 0,
    glandSize = 5,
    storageSize = 5,
    autocryEfficiency = 0.1,
    events = ["aglanet.NoEvent"],
    upgradesBought = [ ],
}
var p = document.playerContext;
document.updateBindings = updateBindings;
var about = `
    <div class="window-header">
        <div class="window-icon quirky">
            <span class="material-symbols-sharp rotated-icon">info</span>
        </div>
        <span class="window-title quirky">Ağla hakkında</span>
        <div class="window-buttons">
            <a  class="window-close"><span class="material-symbols-sharp">close</span></a>
        </div>
    </div>
    <div class="window-content">
        <div>
            <img width="150px" src="logo.png">
            <span>Ağla v0.1</span>
            <span>Önizleme sürümü</span>
            <span>© 2023 Ağlanet. Tüm sakları faklıdır.</span>
        </div>
</div>`
var settings = `
<div class="window-header">
<div class="window-icon quirky">
    <span class="material-symbols-sharp rotated-icon">settings</span>
</div>
<span class="window-title quirky">Ağla Ayarları</span>
<div class="window-buttons">
    <a class="window-close"><span class="material-symbols-sharp">close</span></a>
</div>
</div>`
function wD(id) {
    if (id === "wAbout") {
        var w = newWindow("wAbout", "Ağla Hakkında");
        w.innerHTML = about;
        openWindow(w);
    }
    if (id === "wSettings") {
        var w = newWindow("wSettings", "Ağla Ayarları");
        w.innerHTML = settings;
        openWindow(w);
    }
}
function updateBindings(id) {
    var value;
    switch (id) {
        case "TearsCount": value = p.cries;
    }
    // the OS
    $("#\\%" + id).each(function () {
        $(this).text(value);
    })
    // browser windows
    $(".browser-window").each(function () {
        $(this).children("iframe").contents().find("#\\%" + id).each(function () {
            $(this).text(value);
        })
    })
}