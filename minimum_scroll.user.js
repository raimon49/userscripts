// ==UserScript==
// @name        Minimum Scroll
// @description Space, Shitf+Spaceのスクロール量を短くします
// @namespace   http://sangoukan.xrea.jp/
// @include     http*://*
// @exclude     http://reader.livedoor.com/reader/
// @grant       none
// @author      raimon
// @version     1.0.0
// ==/UserScript==

(function() {
    const SPACE_KEY_CODE = 32;
    const SCROLL_OFFSET = 50;

    var ignoreElements = [
            "input",
            "button",
            "select",
            "textarea",
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
