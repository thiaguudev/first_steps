window.hjSiteSettings = window.hjSiteSettings || {
  site_id: 3855589,
  rec_value: 1.0,
  state_change_listen_mode: "automatic",
  record: true,
  continuous_capture_enabled: true,
  recording_capture_keystrokes: true,
  session_capture_console_consent: true,
  anonymize_digits: true,
  anonymize_emails: true,
  suppress_all: false,
  suppress_all_on_specific_pages: [],
  suppress_text: false,
  suppress_location: false,
  user_attributes_enabled: false,
  legal_name: null,
  privacy_policy_url: null,
  deferred_page_contents: [],
  record_targeting_rules: [],
  feedback_widgets: [
    {
      id: 489635,
      created_epoch_time: 1708397346,
      effective_show_branding: true,
      skin: "dark",
      background: "#D23201",
      position: "bottom_left",
      content: {
        initial: "Help us improve by sharing your feedback.",
        emotion: "How would you rate your experience?",
        thankyou: "Thank you for sharing your feedback with us!",
        email:
          "We may wish to follow up. Enter your email if you're happy for us to contact you.",
      },
      connect_visit_data: "ask",
      language: "en",
      display_condition: "immediate",
      display_delay: 0,
      persist_condition: "always",
      auto_screenshot: true,
      targeting_percentage: 100,
      targeting: [
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "contains",
          negate: false,
          pattern: "/",
          name: null,
          rule_type: null,
        },
      ],
      ask_for_consent: true,
      emotion_style: "default",
      display_type: "button",
      show_legal: false,
      widget_label: null,
      active_seasonal_emotion_style: null,
      parent_element_selector: null,
    },
  ],
  heatmaps: [],
  polls: [
    {
      id: 991947,
      created_epoch_time: 1708396889,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: true,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e69c4dfe-12d3-4344-b807-823a30e99fec",
            type: "net-promoter-score",
            text: "How likely are you to recommend us to a friend or colleague?",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [
              {
                text: "Not likely at all",
              },
              {
                text: "Extremely likely",
              },
            ],
            next: "byOrder",
          },
          {
            uuid: "376008ae-ee82-4ef3-8add-c60f0cda4c7a",
            type: "single-open-ended-multiple-line",
            text: "What's the reason for your score?",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "aca736b9-46e4-4370-8ebc-47b9dab67069",
            type: "email",
            text: "We may want to follow up. If you're happy to be contacted, enter your email:",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
        ],
        thankyou:
          "Thank you for answering this survey. Your feedback is highly appreciated!",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "en",
      display_condition: "immediate",
      display_delay: 0,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "contains",
          negate: false,
          pattern: "/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "c5a50de8-2d9c-47a6-b962-c72baf08f88f",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: true,
      show_legal: false,
      logo_url: null,
      button_color: "#324FBE",
      parent_element_selector: "example_selector",
      button_survey_label: null,
    },
    {
      id: 991945,
      created_epoch_time: 1708396574,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: true,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "9b7f1f52-79da-4d01-b538-86b9d747b6c8",
            type: "reaction",
            text: "How would you rate your experience?",
            required: true,
            labels: [
              {
                text: "Not good at all",
              },
              {
                text: "Very good",
              },
            ],
            reaction_style: "default",
            next: "byOrder",
          },
          {
            uuid: "12d37a1f-ad7b-47e1-9896-d61ed238ed27",
            type: "title-and-description",
            text: "How can we improve to make our product better fit your needs?",
            required: true,
            next: "byOrder",
          },
        ],
        thankyou:
          "Thank you for answering this survey. Your feedback is highly appreciated!",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "en",
      display_condition: "immediate",
      display_delay: 0,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "url",
          match_operation: "contains",
          negate: false,
          pattern: "/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "955b1db5-11fb-4bdf-bb01-0af79f31b3aa",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_url: null,
      button_color: "#C3F0F7",
      parent_element_selector: null,
      button_survey_label: null,
    },
  ],
  integrations: {
    optimizely: {
      tag_recordings: false,
    },
    abtasty: {
      tag_recordings: false,
    },
    kissmetrics: {
      send_user_id: false,
    },
    mixpanel: {
      send_events: false,
    },
    unbounce: {
      tag_recordings: false,
    },
    hubspot: {
      enabled: false,
      send_recordings: false,
      send_surveys: false,
    },
  },
  features: [
    "ask.popover_redesign",
    "client_script.compression.pc",
    "error_reporting",
    "feedback.embeddable_widget",
    "feedback.widgetV2",
    "settings.billing_v2",
    "survey.embeddable_widget",
    "survey.image_question",
    "survey.screenshots",
    "survey.type_button",
  ],
  tracking_code_verified: true,
};

!(function () {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  function e(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, r(i.key), i);
    }
  }
  function r(e) {
    var r = (function (e, r) {
      if ("object" != t(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(e, "string");
        if ("object" != t(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    })(e);
    return "symbol" == t(r) ? r : String(r);
  }
  var n,
    i = (function () {
      function t(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1e3;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.send = e),
          (this.batchSize = r),
          (this.flushInterval = n),
          (this.buffer = []),
          (this.flushTimer = null);
      }
      var r, n;
      return (
        (r = t),
        (n = [
          {
            key: "getBuffer",
            value: function () {
              return this.buffer;
            },
          },
          {
            key: "add",
            value: function (t) {
              var e = this;
              this.buffer.push(t),
                this.buffer.length >= this.batchSize
                  ? this.flush()
                  : this.flushTimer ||
                    (this.flushTimer = setTimeout(function () {
                      e.flush();
                    }, this.flushInterval));
            },
          },
          {
            key: "flush",
            value: function () {
              this.buffer.length > 0 &&
                (this.send(this.buffer), (this.buffer = [])),
                this.flushTimer &&
                  (clearTimeout(this.flushTimer), (this.flushTimer = null));
            },
          },
        ]) && e(r.prototype, n),
        Object.defineProperty(r, "prototype", {
          writable: !1,
        }),
        t
      );
    })();
  function a() {
    return (
      (a = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }),
      a.apply(this, arguments)
    );
  }
  var o,
    s = function () {
      try {
        return "performance" in window && "now" in window.performance;
      } catch (t) {
        return !1;
      }
    },
    c = {
      version: 6,
      metricsUrl:
        (null === (n = window._hjSettings) || void 0 === n
          ? void 0
          : n.metricsUrl) || "https://metrics.hotjar.io",
      sampling: {
        metrics: 0.1,
        fieldMetrics: 0.01,
        debug: 0.5,
        universalDebug: 0.05 * 0.1,
      },
      browser: {
        hasPerformance: !1,
        shouldLogMetrics: !1,
        inLab: !1,
      },
      buffer: {
        bufferSize: 40,
        flushInterval: 3e3,
      },
    },
    u = {
      isDebugEnabled: !1,
      isMetricsEnabled: !1,
      isFieldMetricsEnabled: !1,
      loggedMetrics: {},
      genericTags: {},
    },
    l = function (t, e, r) {
      var n;
      u.loggedMetrics[t] = a(
        a({}, u.loggedMetrics[t]),
        {},
        (((n = {})[e] = r || {}), n)
      );
    },
    d = function (t) {
      if (!t) return "value";
      var e = Object.keys(t)[0];
      return (e && t[e]) || "value";
    },
    f = function (t) {
      var e,
        r = null !== (e = t.tag) && void 0 !== e ? e : void 0;
      return u.isDebugEnabled ? a(a(a({}, r), t.extraTags), u.genericTags) : r;
    },
    h = function (t, e) {
      if (!o) return !1;
      var r = u.isMetricsEnabled || u.isDebugEnabled;
      return (
        "lab" === t && (r = c.browser.inLab),
        "field" === t && (r = u.isFieldMetricsEnabled),
        e ? r && e.flush : r
      );
    },
    g = function (t) {
      var e = !1,
        r = "v=".concat(c.version),
        n =
          ""
            .concat(c.metricsUrl, "?")
            .concat(r, "&site_id=")
            .concat(hj.settings.site_id) +
          (u.isDebugEnabled ? "&debug=true" : ""),
        i = JSON.stringify(t);
      if ("sendBeacon" in navigator)
        try {
          e = navigator.sendBeacon.bind(navigator)(n, i);
        } catch (t) {}
      if (!1 === e)
        try {
          var a = new XMLHttpRequest();
          a.open("POST", n), (a.timeout = 1e4), a.send(i);
        } catch (t) {}
      c.browser.shouldLogMetrics && console.debug("New Metrics: ", t);
    },
    b = {
      getConfig: function (t) {
        return c[t];
      },
      getState: function (t) {
        return u[t];
      },
      start: function () {
        try {
          c.browser = {
            hasPerformance: s(),
            shouldLogMetrics: /hjMetrics=1/.test(location.search),
            inLab: /hjLab=true/.test(location.search),
          };
          var t = b.time(),
            e = window.hjSiteSettings || {},
            r = e.features,
            n = e.site_id,
            a = new Set(r),
            l = c.sampling;
          return (
            (u.genericTags = {
              site_id: n,
            }),
            (u.isDebugEnabled =
              Math.random() <= l.universalDebug ||
              (a.has("client_script.metrics.debug") &&
                Math.random() <= l.debug)),
            (u.isMetricsEnabled = Math.random() <= l.metrics),
            (u.isFieldMetricsEnabled =
              u.isMetricsEnabled && Math.random() <= l.fieldMetrics),
            (o = new i(g, c.buffer.bufferSize, c.buffer.flushInterval)),
            t
          );
        } catch (t) {
          console.debug("Error in metrics.start", {
            error: t,
          });
        }
      },
      reset: function () {
        u.loggedMetrics = {};
      },
      stop: function () {
        (u.isDebugEnabled = !1),
          (u.isMetricsEnabled = !1),
          (u.genericTags = {});
      },
      count: function (t, e) {
        var r = e.incr,
          n = e.tag,
          i = e.extraTags,
          s = e.type;
        try {
          var c,
            l = d(n),
            g = u.loggedMetrics[t],
            b = 0;
          if (
            (r
              ? ((b = ((g && g[l]) || 0) + (r.value || 1)),
                (u.loggedMetrics[t] = a(
                  a({}, g),
                  {},
                  (((c = {})[l] = null != r && r.flush ? 0 : b), c)
                )))
              : (b = 1),
            h(s, r))
          ) {
            var v = {
              name: t,
              type: "count",
              value: b,
              tags: f({
                tag: n,
                extraTags: i,
              }),
            };
            o.add(v);
          }
        } catch (t) {}
      },
      distr: function (t, e) {
        var r = e.task,
          n = e.value,
          i = e.extraTags;
        h() &&
          o.add({
            name: t,
            type: "distribution",
            value: n,
            tags: f({
              tag: {
                task: r,
              },
              extraTags: i,
            }),
          });
      },
      time: function () {
        try {
          if (!c.browser.hasPerformance) return;
          return performance.now();
        } catch (t) {}
      },
      timeEnd: function (t, e) {
        var r = e.tag,
          n = e.start,
          i = e.total,
          a = e.extraTags,
          s = e.type;
        try {
          var c = b.time();
          if (!i && !c) return;
          var u = d(r),
            g = i || (n && c ? c - n : void 0);
          if ((l(t, u, {}), g && g > 0 && h(s))) {
            var v = {
              name: t,
              type: "distribution",
              value: Math.round(g),
              tags: f({
                tag: r,
                extraTags: a,
              }),
            };
            o.add(v);
          }
          return c;
        } catch (e) {
          console.debug("Failed to send timer metric: ", {
            name: t,
            tag: r,
            error: e,
          });
        }
      },
      timeIncr: function (t, e) {
        var r,
          n,
          i,
          a,
          o = e.tag,
          s = e.start,
          c = e.flush,
          f = e.extraTags,
          h = e.type,
          g = hj.metrics.time(),
          v = s && g ? g - s : void 0,
          m =
            ((r = t),
            {
              tagName: (n = d(o)),
              start: (a = ((i = u.loggedMetrics[r]) && i[n]) || {}).start,
              total: a.total,
            }),
          w = v ? v + (m.total || 0) : m.total;
        return (
          l(t, m.tagName, {
            total: w,
          }),
          c &&
            b.timeEnd(t, {
              tag: o,
              total: w,
              extraTags: f,
              type: h,
            }),
          w
        );
      },
      timeWatcher: function () {
        var t,
          e = 0,
          r = !1,
          n = function () {
            var r,
              n = b.time();
            return (
              (e += null !== (r = t && n && n - t) && void 0 !== r ? r : 0),
              (t = b.time()),
              e
            );
          };
        return {
          start: function () {
            if (!r) return (r = !0), (t = b.time());
          },
          incr: n,
          end: function () {
            var r = n();
            return (e = 0), (t = void 0), r;
          },
        };
      },
      getErrorMessage: function (t) {
        return t instanceof Error ? t.message : "string" == typeof t ? t : "";
      },
    };
  (window.hj =
    window.hj ||
    function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      (window.hj.q = window.hj.q || []).push(e);
    }),
    (window.hj.metrics = b);
  var v = hj.metrics.start();
  (window.hjBootstrap =
    window.hjBootstrap ||
    function (t, e, r) {
      var n,
        i = new RegExp(
          "bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot",
          "i"
        ),
        a =
          (null === (n = window.navigator) || void 0 === n
            ? void 0
            : n.userAgent) || "unknown";
      if (i.test(a))
        return (
          hj.metrics.count("session-rejection", {
            tag: {
              reason: "bot",
            },
          }),
          void console.warn(
            "Hotjar not launching due to suspicious userAgent:",
            a
          )
        );
      var o = "http:" === window.location.protocol,
        s = Boolean(window._hjSettings.preview);
      if (o && !s)
        return (
          hj.metrics.count("session-rejection", {
            tag: {
              reason: "https",
            },
          }),
          void console.warn(
            "For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047"
          )
        );
      var c = function (t, e, r) {
        (window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(r)),
          window.hj &&
            window.hj._init &&
            window.hj._init._verifyInstallation &&
            hj._init._verifyInstallation();
      };
      c(0, 0, r);
      var u = window.document,
        l = u.head || u.getElementsByTagName("head")[0];
      hj.scriptDomain = t;
      var d = u.createElement("script");
      (d.async = 1),
        (d.src = hj.scriptDomain + e),
        (d.charset = "utf-8"),
        l.appendChild(d),
        (c.revision = "78ae519"),
        (window.hjBootstrap = c);
    }),
    window.hjBootstrap(
      "https://script.hotjar.com/",
      "modules.a02b08e96dea6b9516bd.js",
      "3855589"
    ),
    hj.metrics.timeEnd("resource-blocking-time", {
      tag: {
        resource: "hotjar-js",
      },
      start: v,
      type: "lab",
    }),
    (window.hjLazyModules = window.hjLazyModules || {
      SURVEY_V2: {
        js: "survey-v2.c1b2f73ca3717144d613.js",
      },
      SURVEY_BOOTSTRAPPER: {
        js: "survey-bootstrapper.e068d4da5877f107712a.js",
      },
      SURVEY_ISOLATED: {
        js: "survey-isolated.40fe79479a0f13258431.js",
      },
      HEATMAP_RETAKER: {
        js: "heatmap-retaker.f79c0c7bb13d8a14bddc.js",
      },
      SURVEY_INVITATION: {
        js: "survey-invitation.20158c9248b11ff9848d.js",
      },
      NOTIFICATION: {
        js: "notification.7536b7a2a6bf5125e2b4.js",
      },
      PREACT_INCOMING_FEEDBACK: {
        js: "preact-incoming-feedback.a891c63a0230b4c3862a.js",
      },
      SENTRY: {
        js: "sentry.58c81e3e25532810f6fd.js",
      },
      BROWSER_PERF: {
        js: "browser-perf.8417c6bba72228fa2e29.js",
      },
    });
})();
