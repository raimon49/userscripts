// ==UserScript==
// @name        show Yahoo! News detail page
// @namespace   http://sangoukan.xrea.jp/
// @description ヤフーニュースのヘッドラインを表示した時に自動で記事全文へ移動するスクリプト
// @include     http://dailynews.yahoo.co.jp/fc/*
// @include     http://news.yahoo.co.jp/pickup/*
// @author      raimon
// @version     1.1.3
// ==/UserScript==
(function() {
    const SELECTOR_PATTERNS = [
        "a.readAll",
        "h2.newsTitle a#link",
        "a.newsLink",
        "#detailHeadline h3 a",
    ];

    var doc = document,
        nextLink;
    SELECTOR_PATTERNS.forEach(function(selector) {
        nextLink = doc.querySelector(selector);

        if (nextLink) {
            location.replace(nextLink.href);
        }
    });

})();
