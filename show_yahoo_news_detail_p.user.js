// ==UserScript==
// @name        show Yahoo! News detail page
// @namespace   http://sangoukan.xrea.jp/
// @description ヤフーニュースのヘッドラインを表示した時に自動で記事全文へ移動するスクリプト
// @include     http://dailynews.yahoo.co.jp/fc/*
// @author      raimon
// @version     1.0.1
// ==/UserScript==
(function() {
    var next = $x('//div[@id="detailHeadline"]/h3/a');
    if (next.length >= 1) {
        location.replace(next[0].href);
    }

    function $x(query) {
        var results = document.evaluate(query, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        for(var i=0, l=results.snapshotLength, r=[]; i<l; i++) {
           r.push(results.snapshotItem(i));
        }

        return r;
    }
})();
