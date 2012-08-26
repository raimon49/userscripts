// ==UserScript==
// @name        read two ahead feed on LDR
// @description フィードを1つ飛ばしで読み進めるためのキーを追加するスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @include     http://reader.livedoor.com/reader/*
// @author      raimon
// @version     1.0.0
// ==/UserScript==
(function (){
    var w = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

    var KEY = 'S';

    var State = w.State, Ordered = w.Ordered, Control = w.Control;
    var touch = w.touch;
    // via http://reader.livedoor.com/js/reader_main.0.3.4.js
    var get_feed = function() {
        var sid = State.now_reading;
        if (!sid && Ordered.list) {
            return Ordered.list[1];
        }

        var list = Ordered.list;
        if (!list) return;

        var offset = list.indexOfStr(sid);
        var feed = list[offset+2];
        return feed;
    };

    var read_two_ahead_subs = function() {
        if (State.requested) return;

        var feed = get_feed();
        if (!feed) return;

        State.requested = true;
        touch(State.now_reading, "onclose");
        Control.read(feed, Control.prefetch);
    };

    w.register_hook('AFTER_INIT', function() {
        w.Keybind.add(KEY, read_two_ahead_subs);
    });
})();
