var tool = {
    lfix: function(b, d) {
        try {
            b = rfloat(b);
            var f = b.toString();
            if (1E-7 < Math.abs(b) && -1 == f.indexOf("e+")) {
                var c = b.toFixed(d).toString(), a, g;
                var h = c;
                h = h.split("");
                var k = h.length;
                for (a = g = 0; a < d; a++)
                    if ("0" == h[k - 1 - a])
                        g++;
                    else
                        break;
                g = d - g + 1;
                1 == g && (g = 0);
                c = rfloat(c.substr(0, c.indexOf(".") + g))
            } else
                c = b;
            return c
        } catch (l) {}
    },
    calpnJ: function() {
        $("#input1").val("");
        var a = []
            , b = [];
        $("#input4").val("");
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        $("#input3").val("");
        $("#s2").html(a[2].toString());
        a = g_pow(a);
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        $("#s3").html(a[2].toString());
    },
    chrufx: function() {
        b[1] += a + g_str(a);
        $("#input3").val("");
        $("#s1").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        a = g_pow(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input2").val("");
        a = rstr(rint(a));
        $("#s2").html(a[2].toString());
        $("#s4").html(a[2].toString());
        var a = []
            , b = [];
        $("#input4").val("");
        $("#s3").html(a[2].toString());
    },
    IOlchr: function() {
        $("#s3").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        a = rstr(rint(a));
        $("#input1").val("");
        $("#input3").val("");
        $("#input2").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var a = []
            , b = [];
        b[1] += a + g_str(a);
        $("#input4").val("");
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
        a = g_pow(a);
    },
    stop: function() {
        this.glb_over = this.glb_sta = !1;
        $("#s3").html("\u8ba1\u7b97\u505c\u6b62(" + this.glb_cnt + ")")
    },
    PXYchr: function() {
        b[1] += a + g_str(a);
        var a = []
            , b = [];
        a = g_pow(a);
        $("#s2").html(a[2].toString());
        $("#s3").html(a[2].toString());
        $("#s4").html(a[2].toString());
        $("#input4").val("");
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        $("#input1").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
    },
    QBk: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input4").val("");
        $("#s1").html(a[2].toString());
        a = g_pow(a);
        $("#input3").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s3").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s2").html(a[2].toString());
        $("#s4").html(a[2].toString());
        $("#input1").val("");
        a = rstr(rint(a));
        $("#input2").val("");
        b[1] += a + g_str(a);
        var a = []
            , b = [];
    },
    pnJchr: function() {
        a = rstr(rint(a));
        $("#input4").val("");
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s3").html(a[2].toString());
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s1").html(a[2].toString());
        $("#input3").val("");
        b[1] += a + g_str(a);
        $("#s2").html(a[2].toString());
        $("#s4").html(a[2].toString());
        $("#input1").val("");
    },
    chrIOl: function() {
        $("#s4").html(a[2].toString());
        $("#s1").html(a[2].toString());
        a = rstr(rint(a));
        $("#s3").html(a[2].toString());
        $("#input3").val("");
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        $("#s2").html(a[2].toString());
        a = g_pow(a);
        b[1] += a + g_str(a);
        $("#input4").val("");
    },
    whWchr: function() {
        $("#input1").val("");
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s1").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        a = g_pow(a);
        $("#s3").html(a[2].toString());
        a = rstr(rint(a));
        $("#input2").val("");
        $("#s2").html(a[2].toString());
        $("#input4").val("");
    },
    mode_change: function() {
        var b = $("#input6").val();
        1 == rint(b) ? ($("#extra_tb").css("visibility", "visible"),
            $("#extra_tb").css("height", "auto")) : ($("#extra_tb").css("visibility", "hidden"),
            $("#extra_tb").css("height", "0px"))
    },
    HXm: function() {
        $("#s2").html(a[2].toString());
        $("#input3").val("");
        $("#s4").html(a[2].toString());
        $("#input1").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        a = g_pow(a);
        $("#input4").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s3").html(a[2].toString());
        b[1] += a + g_str(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        var a = []
            , b = [];
        $("#input2").val("");
        $("#s1").html(a[2].toString());
    },
    calQMP: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var a = []
            , b = [];
        $("#input1").val("");
        $("#s3").html(a[2].toString());
        $("#s2").html(a[2].toString());
        $("#input2").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        $("#input4").val("");
        $("#input3").val("");
        b[1] += a + g_str(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = rstr(rint(a));
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
    },
    LOgchr: function() {
        $("#input1").val("");
        a = g_pow(a);
        $("#input2").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s4").html(a[2].toString());
        a = rstr(rint(a));
        $("#input3").val("");
        $("#s3").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s1").html(a[2].toString());
        b[1] += a + g_str(a);
        var a = []
            , b = [];
        $("#input4").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s2").html(a[2].toString());
    },
    calOpm: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s1").html(a[2].toString());
        a = rstr(rint(a));
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input1").val("");
        $("#input3").val("");
        $("#s4").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        b[1] += a + g_str(a);
        var a = []
            , b = [];
        a = g_pow(a);
        $("#input4").val("");
        $("#input2").val("");
        $("#s3").html(a[2].toString());
        $("#s2").html(a[2].toString());
    },
    RiH: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var a = []
            , b = [];
        $("#input4").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        $("#s4").html(a[2].toString());
        $("#s2").html(a[2].toString());
        b[1] += a + g_str(a);
        a = g_pow(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        $("#s3").html(a[2].toString());
        $("#input2").val("");
        $("#input1").val("");
        $("#s1").html(a[2].toString());
    },
    zYj: function() {
        $("#input1").val("");
        a = g_pow(a);
        $("#s1").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        var a = []
            , b = [];
        $("#s4").html(a[2].toString());
        $("#s3").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        b[1] += a + g_str(a);
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        a = rstr(rint(a));
        $("#input2").val("");
    },
    calFea: function() {
        $("#input1").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s1").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = g_pow(a);
        a = rstr(rint(a));
        $("#input4").val("");
        $("#s3").html(a[2].toString());
        b[1] += a + g_str(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s2").html(a[2].toString());
        var a = []
            , b = [];
        $("#input2").val("");
        $("#input3").val("");
        $("#s4").html(a[2].toString());
    },
    QMPcal: function() {
        $("#input3").val("");
        a = g_pow(a);
        $("#s1").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s4").html(a[2].toString());
        $("#s3").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input2").val("");
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        b[1] += a + g_str(a);
        a = rstr(rint(a));
        $("#input1").val("");
        $("#input4").val("");
        $("#s2").html(a[2].toString());
    },
    QMPchr: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s1").html(a[2].toString());
        $("#s2").html(a[2].toString());
        $("#input4").val("");
        var a = []
            , b = [];
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input1").val("");
        $("#input2").val("");
        $("#s4").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        a = g_pow(a);
        $("#s3").html(a[2].toString());
        $("#input3").val("");
        b[1] += a + g_str(a);
    },
    Opmchr: function() {
        $("#s3").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#input1").val("");
        a = rstr(rint(a));
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s4").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#s2").html(a[2].toString());
        a = g_pow(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#input2").val("");
        $("#input4").val("");
    },
    calFun: function() {
        var b = [], d = 0, f, c = [];
        var a = [];
        a[0] = rval("#input1");
        a[1] = rval("#input2");
        a[2] = rval("#input3");
        a[3] = rval("#input4");
        a[4] = rval("#input5");
        var g = rfloat(a[0]);
        var h = rfloat(a[1]);
        var k = rfloat(a[2]);
        switch (rint(rval("#input7"))) {
            case 0:
                var l = .01;
                break;
            case 1:
                l = .001;
                break;
            case 2:
                l = 5E-4;
                break;
            case 3:
                l = 2E-4;
                break;
            case 4:
                l = 1E-4;
                break;
            default:
                l = .001
        }
        if (0 >= g || 0 >= h || 0 >= k)
            return alert("\u5e73\u5747\u503c\u3001\u6807\u51c6\u5dee\u3001\u6837\u672c\u6570\u5e94\u5927\u4e8e0\uff01"),
                !1;
        var u = rabs(g * l);
        var v = rabs(h * l);
        var n = rint(a[3]);
        var p = rint(rabs(a[4]));
        10 < p && (p = 10,
            $("#input5").val(10));
        if (0 == rint(rval("#input6"))) {
            var r = -268435455;
            var t = 268435455
        } else
            r = rfloat(rval("#input8")),
                t = rfloat(rval("#input9"));
        for (; ; ) {
            var m = h * h;
            for (a = 0; a <= k; a++) {
                do {
                    var e = 1;
                    for (f = 0; e > f; ) {
                        var q = 500 * h * Math.random();
                        e = 100 * Math.random();
                        f = 100 * Math.exp(-q * q / (2 * m))
                    }
                    e = .5 > Math.random() ? 1 : -1;
                    e = g + e * q;
                    d++;
                    if (1E5 < d)
                        return !1
                } while (e < r || e > t);
                c[a] = e;
                c[a] = 0 == p ? rround(c[a]) : rfloat(this.lfix(c[a], p))
            }
            e = 0;
            for (a = 1; a <= k; a++)
                e += c[a];
            m = e / k;
            e = 0;
            for (a = 1; a <= k; a++)
                e += (c[a] - m) * (c[a] - m);
            e = rsqrt(e / (k - 1));
            if (rabs(e - h) < v && rabs(m - g) < u)
                break
        }
        switch (n) {
            case 1:
                n = " ";
                break;
            case 2:
                n = ",";
                break;
            case 3:
                n = "\r\n"
        }
        switch (l) {
            case .01:
                d = "\u00b11%";
                break;
            case .001:
                d = "\u00b11\u2030";
                break;
            case 5E-4:
                d = "\u00b15\u2031";
                break;
            case 2E-4:
                d = "\u00b12\u2031";
                break;
            case 1E-4:
                d = "\u00b11\u2031";
                break;
            default:
                d = "\u2030"
        }
        this.glb_str = "\u4ee5\u4e0b\u4e3a\u751f\u6210\u968f\u673a\u6837\u672c\u503c\uff08\u5171" + k + "\u4e2a\uff0c\u8bef\u5dee" + d + "\uff09\uff1a\r\n";
        for (a = 1; a <= k; a++)
            1 !== a && (this.glb_str += n),
                this.glb_str += c[a];
        b[0] = lfix(m);
        b[1] = lfix(e);
        $("#s1").html(rstr(b[0]));
        $("#s2").html(rstr(b[1]));
        $("#out").val(this.glb_str);
        $("#out").css("visibility", "visible");
        $("#out").css("height", "150px");
        this.glb_sta = !1;
        this.glb_over = !0;
        return b
    },
    CpXchr: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        $("#s2").html(a[2].toString());
        $("#input1").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s1").html(a[2].toString());
        var a = []
            , b = [];
        a = rstr(rint(a));
        b[1] += a + g_str(a);
        $("#input3").val("");
        $("#s3").html(a[2].toString());
        a = g_pow(a);
        $("#s4").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input2").val("");
    },
    chrFea: function() {
        b[1] += a + g_str(a);
        $("#input4").val("");
        $("#s4").html(a[2].toString());
        $("#s3").html(a[2].toString());
        $("#s1").html(a[2].toString());
        var a = []
            , b = [];
        $("#input1").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        a = rstr(rint(a));
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        a = g_pow(a);
        $("#input2").val("");
        $("#s2").html(a[2].toString());
    },
    calRiH: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s1").html(a[2].toString());
        $("#input4").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        $("#input3").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s4").html(a[2].toString());
        $("#input2").val("");
        var a = []
            , b = [];
        $("#s3").html(a[2].toString());
        $("#input1").val("");
        $("#s2").html(a[2].toString());
        a = rstr(rint(a));
        b[1] += a + g_str(a);
    },
    pnJcal: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input2").val("");
        $("#s2").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input1").val("");
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        $("#input4").val("");
        $("#s1").html(a[2].toString());
        $("#s3").html(a[2].toString());
        $("#input3").val("");
        a = rstr(rint(a));
        var a = []
            , b = [];
        a = g_pow(a);
    },
    chrQMP: function() {
        $("#s3").html(a[2].toString());
        $("#s2").html(a[2].toString());
        var a = []
            , b = [];
        b[1] += a + g_str(a);
        $("#input4").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        $("#input3").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s4").html(a[2].toString());
        a = rstr(rint(a));
        $("#s1").html(a[2].toString());
        a = g_pow(a);
    },
    chrRiH: function() {
        $("#input1").val("");
        $("#input2").val("");
        $("#s2").html(a[2].toString());
        var a = []
            , b = [];
        a = g_pow(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input3").val("");
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#s3").html(a[2].toString());
        $("#input4").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        a = rstr(rint(a));
    },
    Fea: function() {
        $("#s4").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        a = rstr(rint(a));
        $("#s3").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#input1").val("");
        $("#s2").html(a[2].toString());
        $("#input3").val("");
        b[1] += a + g_str(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = g_pow(a);
    },
    QBkchr: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        a = rstr(rint(a));
        $("#input3").val("");
        $("#s4").html(a[2].toString());
        var a = []
            , b = [];
        b[1] += a + g_str(a);
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s3").html(a[2].toString());
        $("#s2").html(a[2].toString());
        $("#input1").val("");
        $("#input4").val("");
    },
    ufx: function() {
        $("#s4").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var a = []
            , b = [];
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        $("#input1").val("");
        $("#input4").val("");
        b[1] += a + g_str(a);
        $("#s3").html(a[2].toString());
        $("#s2").html(a[2].toString());
        a = rstr(rint(a));
        a = g_pow(a);
        $("#input3").val("");
    },
    chrCpX: function() {
        $("#input3").val("");
        $("#s4").html(a[2].toString());
        $("#s2").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        a = g_pow(a);
        $("#s3").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input2").val("");
        b[1] += a + g_str(a);
        a = rstr(rint(a));
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input1").val("");
        var a = []
            , b = [];
        $("#s1").html(a[2].toString());
    },
    calzYj: function() {
        $("#s2").html(a[2].toString());
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        a = g_pow(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        b[1] += a + g_str(a);
        $("#input1").val("");
        $("#input4").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input3").val("");
        a = rstr(rint(a));
        var a = []
            , b = [];
        $("#s4").html(a[2].toString());
        $("#s3").html(a[2].toString());
    },
    glb_str: "",
    glb_sta: !1,
    glb_over: !1,
    glb_cnt: 0,
    chr: function() {
        var b = [];
        b[0] = rval("#input1");
        b[1] = rval("#input2");
        b[2] = rval("#input3");
        b[3] = rval("#input4");
        b[4] = rval("#input5");
        if (5 === rchr(b)[1]) {
            if (this.glb_sta = !0,
                this.glb_cnt = 0,
                this.glb_over = !1,
                this.clr(),
                $("#s3").html("\u6b63\u5728\u8ba1\u7b97\uff0c\u8bf7\u7a0d\u540e\uff08" + this.glb_cnt + "\uff09"),
            1 == rval("#input6")) {
                b = rfloat(rval("#input1"));
                var d = rfloat(rval("#input2"));
                var f = rfloat(rval("#input8"));
                var c = rfloat(rval("#input9"));
                if (b <= f || b >= c)
                    return alert("\u5e73\u5747\u503c\u53d6\u503c\u8303\u56f4\u4e0d\u80fd\u5728\u53d6\u503c\u8303\u56f4\u4e4b\u5916\uff0c\u91cd\u65b0\u8f93\u5165\u53c2\u6570\uff01"),
                        !1;
                (rabs(b - f) < d || rabs(b - c) < d) && alert("\u53d6\u503c\u8303\u56f4\u79bb\u5e73\u5747\u503c\u5f88\u8fd1\uff0c\u53ef\u80fd\u8ba1\u7b97\u65f6\u95f4\u5f88\u957f\uff0c\u53ef\u4ee5\u6309\u505c\u6b62\uff0c\u91cd\u65b0\u8f93\u5165\u53c2\u6570\uff01")
            }
        } else
            return alert("\u8bf7\u8f93\u5165\u6709\u6548\u6570\u503c\uff01"),
                !1
    },
    calIOl: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s1").html(a[2].toString());
        $("#input1").val("");
        a = rstr(rint(a));
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        $("#s3").html(a[2].toString());
        $("#input3").val("");
        $("#s2").html(a[2].toString());
        a = g_pow(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input4").val("");
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var a = []
            , b = [];
    },
    chrHXm: function() {
        $("#s2").html(a[2].toString());
        b[1] += a + g_str(a);
        var a = []
            , b = [];
        $("#s1").html(a[2].toString());
        $("#s3").html(a[2].toString());
        a = g_pow(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s4").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        a = rstr(rint(a));
        $("#input1").val("");
        $("#input4").val("");
    },
    chrLOg: function() {
        var a = []
            , b = [];
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        a = g_pow(a);
        $("#input2").val("");
        b[1] += a + g_str(a);
        a = rstr(rint(a));
        $("#s2").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s3").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#input1").val("");
        $("#input4").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        $("#s4").html(a[2].toString());
    },
    zYjcal: function() {
        $("#s1").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        b[1] += a + g_str(a);
        $("#input3").val("");
        $("#input2").val("");
        a = g_pow(a);
        $("#s2").html(a[2].toString());
        a = rstr(rint(a));
        $("#s3").html(a[2].toString());
        $("#input1").val("");
        $("#s4").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input4").val("");
        var a = []
            , b = [];
    },
    ufxcal: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = rstr(rint(a));
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s2").html(a[2].toString());
        $("#s3").html(a[2].toString());
        $("#input3").val("");
        $("#s4").html(a[2].toString());
        $("#input4").val("");
        b[1] += a + g_str(a);
        $("#input2").val("");
        $("#input1").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        a = g_pow(a);
        var a = []
            , b = [];
    },
    whW: function() {
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        b[1] += a + g_str(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s1").html(a[2].toString());
        a = g_pow(a);
        $("#s2").html(a[2].toString());
        $("#input3").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#input4").val("");
        a = rstr(rint(a));
        $("#s3").html(a[2].toString());
        $("#s4").html(a[2].toString());
    },
    Feacal: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        b[1] += a + g_str(a);
        $("#input3").val("");
        $("#input2").val("");
        $("#input1").val("");
        $("#s2").html(a[2].toString());
        $("#s4").html(a[2].toString());
        var a = []
            , b = [];
        $("#s1").html(a[2].toString());
        $("#s3").html(a[2].toString());
        a = g_pow(a);
        a = rstr(rint(a));
        $("#input4").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
    },
    tim: function() {
        !0 === this.glb_sta && (this.calFun(),
            this.glb_cnt++,
            $("#s3").html("\u6b63\u5728\u8ba1\u7b97\uff0c\u8bf7\u7a0d\u540e\uff08" + this.glb_cnt + "\uff09"),
        1E3 <= this.glb_cnt && 0 != this.glb_cnt && alert("\u8f93\u5165\u53d6\u503c\u8303\u56f4\u8fc7\u5c0f\uff0c\u8ba1\u7b97\u65f6\u95f4\u8f83\u957f\uff0c\u8bf7\u7ee7\u7eed\u7b49\u5f85\u6216\u7ec8\u6b62\u540e\u589e\u5927\u53d6\u503c\u8303\u56f4\uff01"));
        !0 === this.glb_over && $("#s3").html("\u8ba1\u7b97\u5b8c\u6210\uff08" + this.glb_cnt + "\uff09");
        window.setTimeout("tool.tim()", 1E3)
    },
    chrpnJ: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s2").html(a[2].toString());
        a = rstr(rint(a));
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input4").val("");
        $("#s3").html(a[2].toString());
        $("#input2").val("");
        b[1] += a + g_str(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input3").val("");
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
        $("#input1").val("");
        a = g_pow(a);
    },
    calLOg: function() {
        a = g_pow(a);
        $("#input3").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input2").val("");
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s3").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#input1").val("");
        $("#input4").val("");
        $("#s2").html(a[2].toString());
        $("#s1").html(a[2].toString());
        a = rstr(rint(a));
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s4").html(a[2].toString());
    },
    calCpX: function() {
        $("#s3").html(a[2].toString());
        $("#input1").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var a = []
            , b = [];
        a = rstr(rint(a));
        $("#input2").val("");
        b[1] += a + g_str(a);
        a = g_pow(a);
        $("#s2").html(a[2].toString());
        $("#input3").val("");
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s4").html(a[2].toString());
        $("#input4").val("");
    },
    HXmcal: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        b[1] += a + g_str(a);
        $("#input4").val("");
        $("#s4").html(a[2].toString());
        a = g_pow(a);
        $("#input1").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s2").html(a[2].toString());
        $("#input2").val("");
        var a = []
            , b = [];
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        $("#input3").val("");
        $("#s3").html(a[2].toString());
    },
    chrQBk: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        $("#input3").val("");
        $("#input2").val("");
        b[1] += a + g_str(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        $("#input4").val("");
        $("#s3").html(a[2].toString());
        a = g_pow(a);
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
        $("#s2").html(a[2].toString());
    },
    IOlcal: function() {
        $("#s4").html(a[2].toString());
        a = g_pow(a);
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s3").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input3").val("");
        a = rstr(rint(a));
        var a = []
            , b = [];
        $("#input1").val("");
        b[1] += a + g_str(a);
        $("#s2").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
    },
    IOl: function() {
        a = rstr(rint(a));
        $("#s3").html(a[2].toString());
        a = g_pow(a);
        $("#input1").val("");
        b[1] += a + g_str(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s2").html(a[2].toString());
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        $("#input4").val("");
        $("#s4").html(a[2].toString());
        $("#input3").val("");
        var a = []
            , b = [];
    },
    PXY: function() {
        $("#s4").html(a[2].toString());
        $("#input2").val("");
        a = rstr(rint(a));
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        b[1] += a + g_str(a);
        $("#s3").html(a[2].toString());
        var a = []
            , b = [];
        $("#input1").val("");
        $("#input3").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s1").html(a[2].toString());
        a = g_pow(a);
        $("#input4").val("");
        $("#s2").html(a[2].toString());
    },
    chrHeW: function() {
        a = rstr(rint(a));
        $("#input2").val("");
        $("#input3").val("");
        $("#input1").val("");
        var a = []
            , b = [];
        $("#input4").val("");
        $("#s3").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = g_pow(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s2").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
    },
    QMP: function() {
        $("#input1").val("");
        $("#input3").val("");
        $("#input4").val("");
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        $("#s2").html(a[2].toString());
        a = g_pow(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s3").html(a[2].toString());
        var a = []
            , b = [];
        a = rstr(rint(a));
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
    },
    HeWcal: function() {
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s1").html(a[2].toString());
        $("#input3").val("");
        $("#s2").html(a[2].toString());
        a = g_pow(a);
        a = rstr(rint(a));
        $("#input4").val("");
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        $("#s3").html(a[2].toString());
    },
    calHXm: function() {
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s2").html(a[2].toString());
        a = rstr(rint(a));
        $("#s3").html(a[2].toString());
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        $("#s4").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        var a = []
            , b = [];
        $("#input1").val("");
        $("#input2").val("");
        b[1] += a + g_str(a);
        $("#input3").val("");
    },
    calPXY: function() {
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
        b[1] += a + g_str(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input4").val("");
        $("#input3").val("");
        $("#s2").html(a[2].toString());
        a = g_pow(a);
        $("#s3").html(a[2].toString());
        $("#input1").val("");
        a = rstr(rint(a));
        var a = []
            , b = [];
    },
    Opm: function() {
        var a = []
            , b = [];
        $("#s2").html(a[2].toString());
        $("#s4").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#input3").val("");
        a = g_pow(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s3").html(a[2].toString());
        $("#input1").val("");
        $("#input2").val("");
        a = rstr(rint(a));
        b[1] += a + g_str(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input4").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
    },
    CpXcal: function() {
        $("#s3").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#input4").val("");
        a = rstr(rint(a));
        $("#s2").html(a[2].toString());
        $("#input3").val("");
        $("#s4").html(a[2].toString());
        $("#input2").val("");
        $("#input1").val("");
        $("#s1").html(a[2].toString());
        b[1] += a + g_str(a);
        a = g_pow(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
    },
    clr: function() {
        this.glb_str = "";
        $("#out").val("");
        $("#out").css("visibility", "hidden");
        $("#out").css("height", "1px")
    },
    calufx: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#s4").html(a[2].toString());
        $("#input1").val("");
        b[1] += a + g_str(a);
        $("#input3").val("");
        $("#s3").html(a[2].toString());
        a = rstr(rint(a));
        a = g_pow(a);
    },
    Feachr: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = g_pow(a);
        $("#s3").html(a[2].toString());
        a = rstr(rint(a));
        $("#s1").html(a[2].toString());
        var a = []
            , b = [];
        $("#input2").val("");
        b[1] += a + g_str(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s2").html(a[2].toString());
        $("#input1").val("");
        $("#input4").val("");
        $("#s4").html(a[2].toString());
        $("#input3").val("");
    },
    calHeW: function() {
        var a = []
            , b = [];
        $("#s2").html(a[2].toString());
        $("#input4").val("");
        a = g_pow(a);
        $("#input3").val("");
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = rstr(rint(a));
        $("#input1").val("");
        $("#s1").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        b[1] += a + g_str(a);
        $("#s3").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s4").html(a[2].toString());
    },
    calwhW: function() {
        $("#input4").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input3").val("");
        b[1] += a + g_str(a);
        $("#s3").html(a[2].toString());
        $("#s1").html(a[2].toString());
        var a = []
            , b = [];
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s4").html(a[2].toString());
        $("#input1").val("");
        a = g_pow(a);
        a = rstr(rint(a));
        $("#s2").html(a[2].toString());
        $("#input2").val("");
    },
    test: function() {
        var b = this.data_arr("1  5");
        var d = b.length, f, c = "";
        for (f = 0; f < d; f++)
            c += rstr(b[f]) + ",";
        $("#s1").html(d)
    },
    HeWchr: function() {
        b[1] += a + g_str(a);
        $("#s3").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s4").html(a[2].toString());
        $("#input2").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s1").html(a[2].toString());
        var a = []
            , b = [];
        $("#input4").val("");
        a = g_pow(a);
        $("#input1").val("");
        $("#s2").html(a[2].toString());
        a = rstr(rint(a));
        $("#input3").val("");
    },
    PXYcal: function() {
        var a = []
            , b = [];
        a = rstr(rint(a));
        $("#input4").val("");
        $("#s3").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s4").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#s1").html(a[2].toString());
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        $("#s2").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input3").val("");
        a = g_pow(a);
    },
    HeW: function() {
        $("#input1").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s2").html(a[2].toString());
        var a = []
            , b = [];
        $("#s1").html(a[2].toString());
        b[1] += a + g_str(a);
        a = rstr(rint(a));
        $("#input2").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input3").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input4").val("");
        a = g_pow(a);
        $("#s3").html(a[2].toString());
        $("#s4").html(a[2].toString());
    },
    calQBk: function() {
        $("#input1").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = rstr(rint(a));
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#s4").html(a[2].toString());
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#s3").html(a[2].toString());
        $("#input4").val("");
        a = g_pow(a);
        $("#input3").val("");
    },
    chrOpm: function() {
        var a = []
            , b = [];
        a = rstr(rint(a));
        $("#input2").val("");
        $("#input3").val("");
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s4").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#input1").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input4").val("");
        $("#s3").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s1").html(a[2].toString());
        a = g_pow(a);
    },
    RiHcal: function() {
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s3").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s4").html(a[2].toString());
        a = g_pow(a);
        $("#input3").val("");
        $("#input4").val("");
        b[1] += a + g_str(a);
        $("#s2").html(a[2].toString());
        $("#input2").val("");
        $("#input1").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        a = rstr(rint(a));
        $("#s1").html(a[2].toString());
    },
    Opmcal: function() {
        $("#input2").val("");
        $("#s3").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#input1").val("");
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = rstr(rint(a));
        $("#s4").html(a[2].toString());
        b[1] += a + g_str(a);
        a = g_pow(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s2").html(a[2].toString());
        $("#input4").val("");
        $("#input3").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
    },
    QBkcal: function() {
        a = rstr(rint(a));
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s3").html(a[2].toString());
        b[1] += a + g_str(a);
        var a = []
            , b = [];
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input3").val("");
        $("#input1").val("");
        a = g_pow(a);
        $("#s2").html(a[2].toString());
        $("#input4").val("");
        $("#s4").html(a[2].toString());
    },
    zYjchr: function() {
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#input1").val("");
        b[1] += a + g_str(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s3").html(a[2].toString());
        $("#input3").val("");
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s1").html(a[2].toString());
        a = rstr(rint(a));
        a = g_pow(a);
        $("#s4").html(a[2].toString());
        $("#input4").val("");
        $("#s2").html(a[2].toString());
    },
    RiHchr: function() {
        $("#s2").html(a[2].toString());
        var a = []
            , b = [];
        $("#s1").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input2").val("");
        $("#input3").val("");
        a = rstr(rint(a));
        a = g_pow(a);
        $("#s4").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#input1").val("");
        $("#s3").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input4").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
    },
    ufxchr: function() {
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s3").html(a[2].toString());
        var a = []
            , b = [];
        $("#input2").val("");
        a = g_pow(a);
        b[1] += a + g_str(a);
        $("#s4").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#input3").val("");
        $("#input1").val("");
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        a = rstr(rint(a));
    },
    LOgcal: function() {
        a = rstr(rint(a));
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        $("#input3").val("");
        b[1] += a + g_str(a);
        var a = []
            , b = [];
        $("#s4").html(a[2].toString());
        $("#input1").val("");
        $("#s3").html(a[2].toString());
        $("#input4").val("");
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#s2").html(a[2].toString());
    },
    HXmchr: function() {
        $("#s4").html(a[2].toString());
        $("#input3").val("");
        a = rstr(rint(a));
        a = g_pow(a);
        b[1] += a + g_str(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        $("#input2").val("");
        $("#s1").html(a[2].toString());
        $("#s2").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        var a = []
            , b = [];
        $("#s3").html(a[2].toString());
    },
    whWcal: function() {
        $("#s3").html(a[2].toString());
        $("#input2").val("");
        $("#s4").html(a[2].toString());
        a = g_pow(a);
        $("#s1").html(a[2].toString());
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var a = []
            , b = [];
        a = rstr(rint(a));
        $("#input1").val("");
        b[1] += a + g_str(a);
        $("#input4").val("");
        $("#input3").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
    },
    chrPXY: function() {
        b[1] += a + g_str(a);
        $("#input2").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input1").val("");
        $("#s3").html(a[2].toString());
        $("#input4").val("");
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
        a = g_pow(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s2").html(a[2].toString());
        $("#input3").val("");
        var a = []
            , b = [];
        a = rstr(rint(a));
    },
    pnJ: function() {
        $("#input3").val("");
        var a = []
            , b = [];
        $("#s1").html(a[2].toString());
        $("#input1").val("");
        $("#s3").html(a[2].toString());
        $("#s4").html(a[2].toString());
        $("#input2").val("");
        b[1] += a + g_str(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        $("#s2").html(a[2].toString());
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input4").val("");
        a = rstr(rint(a));
    },
    CpX: function() {
        a = g_pow(a);
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#input4").val("");
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        b[1] += a + g_str(a);
        var a = []
            , b = [];
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input1").val("");
        $("#input2").val("");
        $("#s3").html(a[2].toString());
        $("#input3").val("");
        $("#s2").html(a[2].toString());
        $("#s1").html(a[2].toString());
        $("#s4").html(a[2].toString());
        a = rstr(rint(a));
    },
    LOg: function() {
        a = rstr(rint(a));
        $("#input3").val("");
        $("#input1").val("");
        $("#s3").html(a[2].toString());
        b[1] += a + g_str(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#s2").html(a[2].toString());
        $("#input4").val("");
        $("#s1").html(a[2].toString());
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        a = g_pow(a);
        $("#input2").val("");
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        var a = []
            , b = [];
        $("#s4").html(a[2].toString());
    },
    chrzYj: function() {
        $("#s3").html(a[2].toString());
        a = rstr(rint(a));
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        $("#input2").val("");
        $("#s2").html(a[2].toString());
        var a = []
            , b = [];
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s1").html(a[2].toString());
        b[1] += a + g_str(a);
        a = g_pow(a);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        $("#input4").val("");
        $("#input3").val("");
        $("#input1").val("");
        $("#s4").html(a[2].toString());
    },
    chrwhW: function() {
        a = g_pow(a);
        var d = a.length;
        for (b = 0; b < d; b++)
            c += Math.pow(a[b], 2);
        var c = [4, 16, 37, 58, 89, 145, 42, 20];
        a = rstr(rint(a));
        $("#s2").html(a[2].toString());
        $("#s3").html(a[2].toString());
        $("#input1").val("");
        if (1 != rchr(a)[1] || !Is_int(a[0]) || 2 > a[0])
            return alert("wrong!");
        $("#s4").html(a[2].toString());
        b[1] += a + g_str(a);
        $("#s1").html(a[2].toString());
        var a = []
            , b = [];
        $("#input4").val("");
        $("#input3").val("");
        $("#input2").val("");
    }
};
