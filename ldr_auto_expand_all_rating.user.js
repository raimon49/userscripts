// ==UserScript==
// @name        LDR Auto Expand All Rating
// @description [deprecated] LDRのページロード時に全てのレーティングフォルダを全て展開するスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @include     http://reader.livedoor.com/reader/*
// @include     https://reader.livedoor.com/reader/*
// @include     http://reader.livedwango.com/reader/*
// @include     https://reader.livedwango.com/reader/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/ldr_auto_expand_all_rating.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/ldr_auto_expand_all_rating.user.js
// @author      raimon
// @version     1.1.0
// ==/UserScript==
(function() {
    function contentEval(source) {
        if ("function" === typeof source) {
            source = "(" + source + ")();";
        }

        var script = document.createElement("script");
        script.setAttribute("type", "application/javascript");
        script.textContent = source;

        document.body.appendChild(script);
        document.body.removeChild(script);
    }

    var init = function() {
        var w = window,
            isRateMode = function() {
                var config = w.Config || null;
                if (!config) {
                    return false;
                }

                return config.view_mode === "rate";
            },
            expandAllRating = function() {
                var ratingTree = document.querySelectorAll(".folder_root");
                Array.prototype.slice.call(ratingTree).forEach(function(treeDom) {
                    var treeId = treeDom.getAttribute("id"),
                        treeInstance = w.TreeView.instance[treeId];
                    if (treeInstance && typeof treeInstance.open === "function") {
                        treeInstance.open();
                    }
                });
            };

        w.register_hook("after_configload", function() {
            if (!isRateMode()) {
                return;
            }

            w.register_hook("after_subs_load", function() {
                expandAllRating();
            });
        });
    };

    contentEval(init);
})();
