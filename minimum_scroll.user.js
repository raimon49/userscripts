// ==UserScript==
// @name        Minimum Scroll
// @description Space, Shitf+Spaceのスクロール量を短くします
// @namespace   http://sangoukan.xrea.jp/
// @match       http://*/*
// @match       https://*/*
// @exclude     http://reader.livedoor.com/reader/*
// @exclude     https://reader.livedoor.com/reader/*
// @exclude     http://reader.livedwango.com/reader/*
// @exclude     https://reader.livedwango.com/reader/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/minimum_scroll.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/minimum_scroll.user.js
// @noframes
// @author      raimon
// @version     1.4.0
// ==/UserScript==

(function() {
    const SPACE_KEY_CODE = 32;
    const SCROLL_OFFSET = 50;

    var ignoreElements = [
            "input",
            "button",
            "select",
            "textarea"
        ],
        onSpaceKeyPress = function(e) {
            if (e.charCode !== SPACE_KEY_CODE) {
                return;
            }

            if (ignoreElements.indexOf(e.target.tagName.toLowerCase()) >= 0) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();
            window.scrollBy(0, (e.shiftKey) ? -SCROLL_OFFSET : SCROLL_OFFSET);
        };

    window.addEventListener("keypress", onSpaceKeyPress, false);
})();
