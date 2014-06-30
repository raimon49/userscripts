// ==UserScript==
// @name        show Yahoo! News detail page
// @namespace   http://sangoukan.xrea.jp/
// @description ヤフーニュースのヘッドラインを表示した時に自動で記事全文へ移動するスクリプト
// @include     http://dailynews.yahoo.co.jp/fc/*
// @include     http://news.yahoo.co.jp/pickup/*
// @author      raimon
// @version     1.1.1
// ==/UserScript==
(function() {
    var doc = document,
        nextLink = doc.querySelector("a.readAll");

    if (nextLink) {
        location.replace(nextLink.href);
    }
})();
