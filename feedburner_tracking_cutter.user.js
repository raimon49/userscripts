// ==UserScript==
// @name        FeedBurner Tracking Cutter
// @description FeedBurner経由でつく?utm_sourceから始まるトラッキングパラメータをカットして再読み込みするユーザスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @include     http://*
// @include     https://*
// @author      raimon
// @version     1.0.0
// ==/UserScript==
(function (){
    if (!location.search) {
        return;
    }

    var url = location.href;
    var pattern = '?utm_source';

    var pos = url.indexOf(pattern);
    if (pos >= 0) {
        location.replace(url.substr(0, pos));
    }
})();
