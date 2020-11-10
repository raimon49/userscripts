// ==UserScript==
// @name        LDR Hide Warning Of Close
// @description [deprecated] LDRサービス終了のお知らせを隠すスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @include     http://reader.livedoor.com/reader/*
// @include     https://reader.livedoor.com/reader/*
// @include     http://reader.livedwango.com/reader/*
// @include     https://reader.livedwango.com/reader/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/ldr_hide_warning_of_close.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/ldr_hide_warning_of_close.user.js
// @author      raimon
// @version     1.1.0
// ==/UserScript==
(function() {
    var blocks = document.querySelectorAll("body > div"),
        isHide = false;
    Array.from(blocks).forEach(function(div) {
        if (isHide) {
            return;
        }

        div.style.display = "none";
        isHide = true;
    });
})();

