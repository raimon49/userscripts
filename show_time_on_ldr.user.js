// ==UserScript==
// @name        show time on LDR
// @namespace   http://sangoukan.xrea.jp/
// @description [deprecated] Tキーで中の人に現在時刻と経過時間を表示してもらうスクリプト
// @include     http://reader.livedoor.com/reader/*
// @include     https://reader.livedoor.com/reader/*
// @include     http://reader.livedwango.com/reader/*
// @include     https://reader.livedwango.com/reader/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/show_time_on_ldr.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/show_time_on_ldr.user.js
// @author      raimon
// @version     1.2.0
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
        const SHOW_KEY = "t";
        var w = window;
        function Clock() {
            this.start_time = new Date().getTime();
        }

        Clock.prototype.showTime = function() {
            var now = new Date();
            var hms = [];
            [
                now.getHours(),
                now.getMinutes(),
                now.getSeconds()
            ].forEach(
                function(item) {
                    hms.push(this.format(item));
                },
                this
            );

            return hms.join(":");
        };

        Clock.prototype.showPassage = function() {
            var passage_time = parseInt((new Date().getTime() - this.start_time) / 1000);
            var hms = [];
            [
                parseInt(passage_time / (60 * 60)),
                parseInt((passage_time / 60) % 60),
                parseInt(passage_time % 60)
            ].forEach(
                function(item) {
                    hms.push(this.format(item));
                },
                this
            );

            return hms.join(":");
        };

        Clock.prototype.format = function(t) {
            return String("00" + t).substr(-2);
        };

        w.register_hook('AFTER_INIT', function() {
            var c = new Clock();
            w.Keybind.add(SHOW_KEY, function() {
                var m = [
                    "現在時刻: ",
                    c.showTime(),
                    "  経過時間: ",
                    c.showPassage()
                ].join("");
                w.message(m);
            });
        });
    };

    contentEval(init);
})();
