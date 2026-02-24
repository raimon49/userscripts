// ==UserScript==
// @name        Set stock title on SBI
// @description SBI証券の国内株式ページで表示中の銘柄をタイトルにセットする
// @namespace   http://sangoukan.xrea.jp/
// @match       https://*.sbisec.co.jp/ETGate/*
// @match       https://sbi.ifis.co.jp/index.php*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/set_stock_title_on_sbi.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/set_stock_title_on_sbi.user.js
// @noframes
// @author      raimon
// @version     1.1.0
// ==/UserScript==
(() => {
    const main = () => {
        const DEFAULT_PAGE_HEADER = "国内株式",
            DEFAULT_PAGE_TITLE = "国内株式｜SBI証券",
            shownPage = document.querySelector("a[aria-current=true]").textContent;
        if (!shownPage || shownPage !== DEFAULT_PAGE_HEADER) {
            clearInterval(timerID);
            return;
        }

        const stockTitle = document.querySelector("div.stock-title h1 span").textContent,
            selectedTab = document.querySelector("a[aria-selected=true]").textContent,
            currentTitle= document.title;

        if (currentTitle === DEFAULT_PAGE_TITLE && stockTitle && selectedTab) {
            document.title = `${stockTitle}｜${selectedTab}｜${currentTitle}`;
            clearInterval(timerID);
        }
    };

    const timerID = setInterval(main, 200/* ms */);
})();
