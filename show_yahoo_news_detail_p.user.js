// ==UserScript==
// @name        show Yahoo! News detail page
// @namespace   http://sangoukan.xrea.jp/
// @description ヤフーニュースのヘッドラインを表示した時に自動で記事全文へ移動するスクリプト
// @include     http://dailynews.yahoo.co.jp/fc/*
// @include     https://dailynews.yahoo.co.jp/fc/*
// @include     http://news.yahoo.co.jp/pickup/*
// @include     https://news.yahoo.co.jp/pickup/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/show_yahoo_news_detail_p.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/show_yahoo_news_detail_p.user.js
// @author      raimon
// @version     1.2.0
// ==/UserScript==
(function() {
    const SELECTOR_PATTERNS = [
        "a.readAll",
        "h2.newsTitle a#link",
        "a.newsLink",
        "#detailHeadline h3 a"
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
