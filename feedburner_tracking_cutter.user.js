// ==UserScript==
// @name        FeedBurner Tracking Cutter
// @description FeedBurner経由でつく?utm_sourceから始まるトラッキングパラメータをカットして再読み込みするユーザスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @include     http://*
// @include     https://*
// @author      raimon
// @version     1.1.0
// ==/UserScript==
(function() {
    if (!location.search) {
        return;
    }

    if (window.top !== window.self) {
        // iframe
        return;
    }

    var url = location.href;
    var pattern = '?utm_source';

    var pos = url.indexOf(pattern);
    if (pos >= 0) {
        var replacedUrl = url.substr(0, pos);
        if (history && history.replaceState) {
            history.replaceState(null, document.title, replacedUrl);
        } else {
            location.replace(replacedUrl);
        }
    }
})();
