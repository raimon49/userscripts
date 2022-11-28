// ==UserScript==
// @name        Togetter auto expand
// @description Togetterページの「この続きを読む」自動でクリック
// @namespace   http://sangoukan.xrea.jp/
// @match       https://togetter.com/li/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/togetter_auto_expand.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/togetter_auto_expand.user.js
// @noframes
// @author      raimon
// @version     1.0.0
// ==/UserScript==
(() => {
    setTimeout(() => {
        const moreTweet = document.querySelector("div.more_tweet_box > button");
        if (moreTweet && typeof moreTweet.onclick === "function") {
            moreTweet.onclick();
        }
    }, 2000);
})();
