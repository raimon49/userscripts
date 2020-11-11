// ==UserScript==
// @name        read two ahead feed on LDR
// @description [deprecated] フィードを1つ飛ばしで読み進めるためのキーを追加するスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @include     http://reader.livedoor.com/reader/*
// @include     https://reader.livedoor.com/reader/*
// @include     http://reader.livedwango.com/reader/*
// @include     https://reader.livedwango.com/reader/*
// @grant       none
// @downloadURL https://github.com/raimon49/userscripts/raw/master/read_two_ahead_feed_on_ldr.user.js
// @updateURL   https://github.com/raimon49/userscripts/raw/master/read_two_ahead_feed_on_ldr.user.js
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
        const KEY = 'S';
        var w = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
        var State = w.State, Ordered = w.Ordered, Control = w.Control;
        var touch = w.touch;
        // via http://reader.livedoor.com/js/reader_main.0.3.4.js
        var get_feed = function() {
            var sid = State.now_reading;
            if (!sid && Ordered.list) {
                return Ordered.list[1];
            }

            var list = Ordered.list;
            if (!list) {
                return;
            }

            var offset = list.indexOfStr(sid);
            var feed = list[offset+2];
            return feed;
        };

        var read_two_ahead_subs = function() {
            if (State.requested) {
                return;
            }

            var feed = get_feed();
            if (!feed) {
                return;
            }

            State.requested = true;
            touch(State.now_reading, "onclose");
            Control.read(feed, Control.prefetch);
        };

        w.register_hook('AFTER_INIT', function() {
            w.Keybind.add(KEY, read_two_ahead_subs);
        });
    };

    contentEval(init);
})();
