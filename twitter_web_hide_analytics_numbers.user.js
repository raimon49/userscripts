// ==UserScript==
// @name        Twitter web hide analytics numbers
// @description Twitter web上で表示される表示回数らしき数字を隠す
// @namespace   http://sangoukan.xrea.jp/
// @match       https://twitter.com/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/twitter_web_hide_analytics_numbers.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/twitter_web_hide_analytics_numbers.user.js
// @noframes
// @author      raimon
// @version     1.0.1
// ==/UserScript==
(() => {
    const hideAnalyticsNumbersStyle = document.createElement("style");
    hideAnalyticsNumbersStyle.innerHTML = `
        a[href$="analytics"] span[data-testid="app-text-transition-container"] >
        span,
        span.r-1b43r93:nth-child(1) > span:nth-child(1)
        {
            display: none;
        }
    `;
    document.head.appendChild(hideAnalyticsNumbersStyle);
})();
