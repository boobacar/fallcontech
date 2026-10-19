/* Analytics Fallcon Tech — chargé en première partie, sans cookie. */
/* Analytics Fallcon Tech — sans cookie, sans identifiant persistant. */
(function () {
  var s = document.currentScript;
  if (!s) return;
  var site = s.getAttribute('data-site') || 'fallcontech';
  var base = s.src.replace(/stats\.js(\?.*)?$/, '');
  var endpoint = s.getAttribute('data-endpoint') || '/api/track';

  function sessionId() {
    try {
      var k = 'ft_s';
      var v = sessionStorage.getItem(k);
      if (!v) {
        v = Math.random().toString(36).slice(2) + Date.now().toString(36);
        sessionStorage.setItem(k, v);
      }
      return v;
    } catch (e) {
      return 'nosession';
    }
  }

  function referrerHost() {
    try {
      if (!document.referrer) return '';
      var u = new URL(document.referrer);
      return u.hostname === location.hostname ? '' : u.hostname;
    } catch (e) {
      return '';
    }
  }

  function send(event, props) {
    var payload = JSON.stringify({
      e: event,
      p: location.pathname + location.search,
      r: referrerHost(),
      s: sessionId(),
      site: site,
      props: props || {},
    });
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, new Blob([payload], { type: 'text/plain;charset=UTF-8' }));
        return;
      }
    } catch (e) {
      /* repli fetch */
    }
    try {
      fetch(endpoint, {
        method: 'POST',
        body: payload,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        keepalive: true,
        mode: 'cors',
      });
    } catch (e) {
      /* silencieux */
    }
  }

  window.ftrack = function (event, props) {
    if (!event) return;
    send(String(event), props);
  };

  var lastPath = '';
  function pageView() {
    var p = location.pathname + location.search;
    if (p === lastPath) return;
    lastPath = p;
    send('page_view', { title: document.title });
  }

  pageView();

  ['pushState', 'replaceState'].forEach(function (method) {
    var original = history[method];
    history[method] = function () {
      var result = original.apply(this, arguments);
      setTimeout(pageView, 0);
      return result;
    };
  });
  window.addEventListener('popstate', function () {
    setTimeout(pageView, 0);
  });
})();
