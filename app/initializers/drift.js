import ENV from '../config/environment';

export function initialize() {
  const token = ENV.drift && ENV.drift.token;

  var t;

  if(token && !process.env.EMBER_CLI_FASTBOOT) {
    if (t = window.driftt = window.drift = window.driftt || [], !t.init) {

      t.methods = [ "identify", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ];

      t.factory = function(e) {
        return function() {
          var n;
          return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
        };
      };

      t.methods.forEach(function(e) {
        t[e] = t.factory(e);
      });

      t.load = function(t) {
        var e, n, o, r;
        e = 3e5;
        r = Math.ceil(new Date() / e) * e;

        o = document.createElement("script");
        o.type = "text/javascript";
        o.async = !0;
        o.crossorigin = "anonymous";
        o.src = "https://js.driftt.com/include/" + r + "/" + t + ".js";

        n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(o, n);
      };
    }

    window.drift.SNIPPET_VERSION = '0.2.0';
    window.drift.load(token);
  }
}

export default {
  name: 'drift',
  initialize
};
