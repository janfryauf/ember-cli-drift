import ENV from '../config/environment';

export function initialize(applicationInstance) {
  const token = ENV.drift && ENV.drift.token;
  const version = ENV.drift.version;
  const fastboot = applicationInstance.lookup('service:fastboot');
  const fastbootEnabled = fastboot && fastboot.get('isEnabled');

  var t;

  if(token && !fastbootEnabled) {
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

    window.drift.SNIPPET_VERSION = version || '0.3.1';
    window.drift.load(token);
  }
}

export default {
  name: 'drift',
  initialize
};
