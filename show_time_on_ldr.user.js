// ==UserScript==
// @name        show time on LDR
// @namespace   http://sangoukan.xrea.jp/
// @description Tキーで中の人に現在時刻と経過時間を表示してもらうスクリプト
// @include     http://reader.livedoor.com/reader/*
// @author      raimon
// @version     0.1
// ==/UserScript==
(function (){
    var w = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
    
    var SHOW_KEY = 't';
    
    function Clock() {};
    
    Clock.prototype.start_time = new Date().getTime();
    
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
    }
    
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
    }
    
    Clock.prototype.format = function(t) {
        return String("00" + t).substr(-2);
    }
    
    var c = null;
    
    w.addEventListener(
        "load", 
        function() {
            with(w) {
                c = new Clock();
                
                Keybind.add(
                    SHOW_KEY, 
                    function() {
                        var m = "現在時刻: " + c.showTime() + "  経過時間: " + c.showPassage();
                        message(m);
                    }
                );
            }
        }, 
        false
    );
})();
