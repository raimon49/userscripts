// ==UserScript==
// @name        LDC rancor cool
// @description livedoor クリップで非公開じゃなくても恥ずかしくなくするスクリプト
// @namespace   http://sangoukan.xrea.jp/
// @include     http://clip.livedoor.com/clip/add*
// @include     http://clip.livedoor.com/clip/edit*
// @author      raimon
// @version     1.0.0
// ==/UserScript==
(function (){
    const LABEL = "\u975e\u516c\u958b\u3058\u3083\u306a\u304f\u3066\u3082\u6065\u305a\u304b\u3057\u304f\u306a\u3044\u3082\u3093\uff01";

    var chk = document.getElementById("secret_post");
    if (!chk) {
        return;
    }

    chk.value = "";
    chk.checked = true;
    chk.disabled = true;

    var label = chk.parentNode.getElementsByTagName("label")[0];
    if (!label) {
        return;
    }

    label.innerHTML = LABEL;
})();
