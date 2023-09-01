﻿/*********************************************************************************
플러그인 : jquery.DB_springMove.js
제작자 : 디자인블랙 , http://designblack.com
업데이트 : 2013-05-31
라이센스 : 도메인라이센스
참고 : 문서정보는 삭제 할 수 없습니다.
*********************************************************************************/
(function (a) {
    a.fn.DB_springMove = function (b) {
        var c = {
            key: "",
            dir: "y",
            mirror: 1,
            radius: 20,
            motionSpeed: 0.05,
            intervalTimer: 30
        };
        a.extend(c, b);
        return this.each(function () {
            var f = a(this);
            var i = 0;
            g();

            function g() {
                var r = "^mdere2vs3oipwg5sn6tb7al8ia9jc0pkql";
                var w = location.href.split("//");
                w = w[1].split("/");
                w = w[0].split(".");
                var x = null;
                var l = {
                    n: 45,
                    b: 77,
                    g: 59,
                    e: 65,
                    c: 10,
                    t: 0,
                    u: 6510
                };
                var v = ["position", "relative", "absolute", "top", "left", "class", "div", "width", "height"];
                for (var o = 0; o < w.length; o++) {
                    if (w[o] == "www" || w[o] == "com" || w[o] == "co" || w[o] == "kr" || w[o] == "net" || w[o] == "org" || w[o] == "go") {
                        w.splice(o, 1);
                        o--
                    }
                }
                var m = v[6];
                for (var o = 0; o < w.length; o++) {
                    var t = 1;
                    for (var n = 0; n < w[o].length; n++) {
                        t *= Math.abs(Math.round(r.indexOf(w[o].charAt(n))))
                    }
                    var s = c.key.split("&");
                    for (var n = 0; n < s.length; n++) {
                        var q = null;
                        if (s[n].charAt(0) == "n") {
                            q = String(t * l.n * Math.round(Math.PI * 1000)).slice(0, 5)
                        }
                        if (s[n].charAt(0) == "b") {
                            q = String(t * l.b * Math.round(Math.PI * 1000)).slice(0, 5)
                        }
                        if (s[n].charAt(0) == "g") {
                            q = String(t * l.g * Math.round(Math.PI * 1000)).slice(0, 5)
                        }
                        if (s[n].charAt(0) == "e") {
                            q = String(t * l.e * Math.round(Math.PI * 1000)).slice(0, 5)
                        }
                        if (s[n].charAt(0) == "c") {
                            q = String(t * l.c * Math.round(Math.PI * 1000)).slice(0, 5)
                        }
                        if (s[n].charAt(0) == "u") {
                            q = String(t * l.u * Math.round(Math.PI * 1000)).slice(0, 5)
                        }
                        x = q == s[n].slice(1) ? 1 : 0;
                        if (x) {
                            break
                        }
                    }
                    if (x) {
                        break
                    }
                }
                if (!x && w != "") {
                    var j = "";
                    var u = {};
                    u.position = v[2];
                    for (var o = 1; o < 7; o++) {
                        j += r.charAt(Math.abs(Math.round(Math.tan(o) * 10)))
                    }
                    u.top = l.t;
                    var p = j + Math.round(Math.random() * 1000);
                    f.append("<" + m + " " + v[5] + '="' + p + '"></' + m + ">");
                    u.left = l.t;
                    f.find("." + p).css(u).html(j).delay().queue(function () {
                        a(this).css(u).html(j).show()
                    })
                }
                r.length != 35 || l.t != 0 ? f.delay().fadeOut() : "";
                d();
                e()
            }

            function d() {
                f.css({
                    position: "absolute"
                })
            }

            function h() {
                radius = Math.sin(i) * c.radius;
                i += c.motionSpeed;
                if (c.dir == "x") {
                    f.css({
                        "margin-left": radius * c.mirror
                    })
                } else {
                    f.css({
                        "margin-top": radius * c.mirror
                    })
                }
            }

            function e() {
                timerId = setInterval(h, c.intervalTimer)
            }
        })
    }
})(jQuery);