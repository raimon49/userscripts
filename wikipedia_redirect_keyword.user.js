// ==UserScript==
// @name        Wikipedia(ja) redirect keyword
// @description Wikipedia日本語ページで別のキーワードから転送されてた時はそのページをリロードするスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @match       http://ja.wikipedia.org/wiki/*
// @match       https://ja.wikipedia.org/wiki/*
// @grant       none
// @author      raimon
// @version     1.1.0
// ==/UserScript==
(function() {
    var contentSub = document.getElementById("contentSub"),
        firstHeader = document.querySelector("#firstHeading span");
    if (!contentSub) {
        return;
    }

    const RE_REDIRECTION = /（(.+)から転送）/,
        URL_BASE = (location.origin || (location.protocol + "//" + location.hostname)) + "/wiki/";
    var text = contentSub.textContent || contentSub.innerText,
        matched = text.match(RE_REDIRECTION);
    if (!matched) {
        return;
    }

    var originalKeyword = matched[1],
        currentlyKeyword = firstHeader.textContent || firstHeader.innerText;
    if (currentlyKeyword !== originalKeyword) {
        location.href = URL_BASE + currentlyKeyword;
    }
})();
