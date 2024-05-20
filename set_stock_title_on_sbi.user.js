// ==UserScript==
// @name        Set stock title on SBI
// @description SBI証券の国内株式ページで表示中の銘柄をタイトルにセットする
// @namespace   http://sangoukan.xrea.jp/
// @match       https://site1.sbisec.co.jp/ETGate/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/set_stock_title_on_sbi.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/set_stock_title_on_sbi.user.js
// @noframes
// @author      raimon
// @version     0.1.1
// ==/UserScript==
(() => {
    const main = () => {
        const shownPage = document.querySelector("h2.head01").textContent;
        if (!shownPage || shownPage !== "国内株式") {
            return;
        }

        const stockTitle = document.querySelector("h3:has(span.fm01)").textContent,
            selectedTab = document.querySelector("div.tab02T td.act").textContent,
            currentTitle= document.title;

        if (currentTitle === "国内株式｜SBI証券" && stockTitle && selectedTab) {
            document.title = `${stockTitle}｜${selectedTab}｜${currentTitle}`;
        }
    };

    setTimeout(main, 1500/* ms */);
})();
