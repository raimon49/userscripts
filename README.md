userscripts
============

[![lint](https://github.com/raimon49/userscripts/actions/workflows/node-test.yml/badge.svg)](https://github.com/raimon49/userscripts/actions/workflows/node-test.yml)

個人用に書き溜めていたユーザースクリプトです。Firefox + Greasemonkeyでの動作を前提としていますが、[Violentmonkey](https://violentmonkey.github.io)/[Tampermonkey](https://www.tampermonkey.net)/[NinjaKit](http://os0x.hatenablog.com/entry/20100612/1276330696)といったGoogle Chrome, Safariなど他ウェブブラウザ用のGreasemonkey互換環境でも動作します。

feedburner\_tracking\_cutter.user.js
----------------------------------

* [FeedBurner Tracking Cutter](https://github.com/raimon49/userscripts/raw/master/feedburner_tracking_cutter.user.js)

> FeedBurner経由でつく?utm\_sourceから始まるトラッキングパラメータをカットして再読み込みするユーザスクリプト

ほぼ上位互換となる[UrlCleaner](https://github.com/ussy/greasemonkey/blob/master/urlcleaner.user.js)や[ParamCleaner](https://github.com/azu/ParamCleaner)というスクリプトが存在するので、よほどマシンパワーの不足しているマシンでない限りは、これらの利用がお奨めです。

[deprecated] ldr\_auto\_expand\_all\_rating.user.js
---------------------------------------------------

* [LDR Auto Expand All Rating](https://github.com/raimon49/userscripts/raw/master/ldr_auto_expand_all_rating.user.js)

> LDRのページロード時に全てのレーティングフォルダを全て展開するスクリプト

![スクリーンショット](http://sangoukan.xrea.jp/cgi-bin/tDiary/images/20140721_0.png)

minimum\_scroll.user.js
-----------------------

* [Minimum Scroll](https://github.com/raimon49/userscripts/raw/master/minimum_scroll.user.js)

> Space, Shitf+Spaceのスクロール量を短くします

[deprecated] read\_two\_ahead\_feed\_on\_ldr.user.js
----------------------------------------------------

* [read two ahead feed on LDR](https://github.com/raimon49/userscripts/raw/master/read_two_ahead_feed_on_ldr.user.js)

> フィードを1つ飛ばしで読み進めるためのキーを追加するスクリプト

LDR閲覧中にキーバインド「Shift + S」を追加します。押すと「次の次」のフィードへフォーカスします。

[deprecated] show\_time\_on\_ldr.user.js
----------------------------------------

* [show time on LDR](https://github.com/raimon49/userscripts/raw/master/show_time_on_ldr.user.js)

> Tキーで中の人に現在時刻と経過時間を表示してもらうスクリプト

![スクリーンショット](http://sangoukan.xrea.jp/cgi-bin/tDiary/images/20080913_1.jpg)

show\_yahoo\_news\_detail\_p.user.js
------------------------------------

* [show Yahoo! News detail page](https://github.com/raimon49/userscripts/raw/master/show_yahoo_news_detail_p.user.js)

> ヤフーニュースのヘッドラインを表示した時に自動で記事全文へ移動するスクリプト

togetter\_auto\_expand.user.js
-------------------------------

* [Togetter auto expand](https://github.com/raimon49/userscripts/raw/master/togetter_auto_expand.user.js)

> Togetterページの「この続きを読む」自動でクリック

![スクリーンショット](https://user-images.githubusercontent.com/221802/204266112-c4d563e4-783b-4093-8e4a-99b5adb3170b.png)

twitter\_web\_hide\_analytics\_numbers.user.js
----------------------------------------------

* [Twitter web hide analytics numbers](https://github.com/raimon49/userscripts/raw/master/twitter_web_hide_analytics_numbers.user.js)

> Twitter web上で表示される表示回数らしき数字を隠す

※Twitter PC Web側のUI刷新タイミングによっては上手く動作しない場合があります。

![スクリーンショット](https://user-images.githubusercontent.com/221802/209418905-96580a43-d899-420a-b6c9-35ea97afcac1.png)

wikipedia\_redirect\_keyword.user.js
------------------------------------

* [Wikipedia(ja) redirect keyword](https://github.com/raimon49/userscripts/raw/master/wikipedia_redirect_keyword.user.js)

> Wikipedia日本語ページで別のキーワードから転送されてた時はそのページをリロードするスクリプト
