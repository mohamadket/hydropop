/* HydroPop Site Bundle — מנוע + loader. נבנה 2026-08-15 20:13 */
/* התקנה: <script src=".../hydropop.site.js" data-config="https://.../getConfig" defer></script> */
/* HydroPop — ספריית העיצובים.
   קובץ נפרד בכוונה: המנוע, פאנל הניהול והתצוגה המקדימה חייבים לצייר מאותו
   מקור. רשימה משוכפלת מתחילה זהה ונפרדת תוך שבועיים.
   חמש מהערכות נגזרו מזהות האתר עצמו — ירוק הניווט, תכלת האיורים, ירוק הדשא
   והצהוב של הדירוגים — כדי שהפופאפ ירגיש חלק מהעמוד ולא דבוק עליו.
   שדה bgAnim: none | drift | bubbles | aurora | sheen  (ראה css() במנוע). */
(function (w) {
  w.HYDROPOP_PRESETS = [
    { id: 'hydro', name: 'הידרו האוס', desc: 'ירוק הניווט של האתר. ברירת המחדל הבטוחה.',
      theme: { primary: '#2E9B45', primaryDark: '#1F7A32', accent: '#8CC63E', accentGlow: 'rgba(140,198,62,.45)',
        ink: '#132A17', inkSoft: '#4A6B52', surface: '#FFFFFF', surfaceAlt: '#F2F9F1',
        border: '#D8EBD5', overlay: 'rgba(12,38,18,.62)', radius: '22px', bgAnim: 'none' } },

    { id: 'sky', name: 'שמיים ודשא', desc: 'התכלת מהאיורים באתר. אוורירי, מרגיש כמו המחשה ולא כמו פרסומת.',
      theme: { primary: '#2E9B45', primaryDark: '#1F7A32', accent: '#7FD4F0', accentGlow: 'rgba(127,212,240,.5)',
        ink: '#14303A', inkSoft: '#4A6A76', surface: '#FFFFFF', surfaceAlt: '#EAF6FC',
        border: '#CDE9F5', overlay: 'rgba(16,48,60,.58)', radius: '26px', bgAnim: 'drift' } },

    { id: 'garden', name: 'גינה חיה', desc: 'ירוק עמוק עם בועות מרחפות. הכי "צומח" מבין השמונה.',
      theme: { primary: '#1F7A32', primaryDark: '#14561F', accent: '#A8DC5B', accentGlow: 'rgba(168,220,91,.5)',
        ink: '#0F2614', inkSoft: '#41634A', surface: '#FBFEF8', surfaceAlt: '#EEF8E6',
        border: '#D6EBC7', overlay: 'rgba(10,32,16,.66)', radius: '24px', bgAnim: 'bubbles' } },

    { id: 'aurora', name: 'זוהר', desc: 'רקע נע ומשתנה. תופס את העין הכי חזק — ולכן גם הכי קל להגזים איתו.',
      theme: { primary: '#0F8A5F', primaryDark: '#0A6444', accent: '#9BE564', accentGlow: 'rgba(155,229,100,.55)',
        ink: '#08251C', inkSoft: '#3F6155', surface: '#FFFFFF', surfaceAlt: '#F0FAF4',
        border: '#D5EDE0', overlay: 'rgba(4,26,18,.7)', radius: '28px', bgAnim: 'aurora' } },

    { id: 'night', name: 'לילה', desc: 'כהה. בולט מאוד על רקע אתר בהיר, אבל דורש בדיקה — לא לכולם נוח.',
      theme: { primary: '#3FD98A', primaryDark: '#2FB870', accent: '#8CC63E', accentGlow: 'rgba(63,217,138,.35)',
        ink: '#EAF6EE', inkSoft: '#9DBCA9', surface: '#12211A', surfaceAlt: '#1B2E24',
        border: '#2C4437', overlay: 'rgba(2,12,8,.78)', radius: '20px', bgAnim: 'aurora' } },

    { id: 'clean', name: 'נקי', desc: 'לבן, אפור, ונגיעת ירוק אחת. כשרוצים שהתוכן ידבר ולא העיצוב.',
      theme: { primary: '#2E9B45', primaryDark: '#1F7A32', accent: '#2E9B45', accentGlow: 'rgba(46,155,69,.25)',
        ink: '#1A1A1A', inkSoft: '#6B7280', surface: '#FFFFFF', surfaceAlt: '#F7F8F7',
        border: '#E5E7EB', overlay: 'rgba(0,0,0,.55)', radius: '14px', bgAnim: 'none' } },

    { id: 'warm', name: 'חם', desc: 'אדמדם-חמרה. מנוגד לכל האתר — ולכן שווה כווריאנט B בניסוי.',
      theme: { primary: '#D9552F', primaryDark: '#B33F1E', accent: '#FFC629', accentGlow: 'rgba(255,198,41,.5)',
        ink: '#2B1710', inkSoft: '#6B4A3C', surface: '#FFFCF7', surfaceAlt: '#FCF2E6',
        border: '#F0DCC4', overlay: 'rgba(38,18,10,.62)', radius: '22px', bgAnim: 'sheen' } },

    /* שתי הערכות הבאות נגזרו ישירות מסרטון האנימציה של הידרו האוס:
       תכלת-מנטה של השמיים, עננים לבנים רכים, פס דשא בתחתית, וצמיחה איטית
       כלפי מעלה. מי שראה את הסרטון יזהה מיד שזה אותו עולם. */
    { id: 'toon', name: 'סרטון', desc: 'התכלת והעננים מהסרטון שלכם. עננים נעים לאט ברקע.',
      theme: { primary: '#3FA34D', primaryDark: '#2C7A38', accent: '#8CC63E', accentGlow: 'rgba(140,198,62,.4)',
        ink: '#1B3A2A', inkSoft: '#4F7263', surface: '#FFFFFF', surfaceAlt: '#CFECEC',
        border: '#B4DEDE', overlay: 'rgba(18,58,58,.55)', radius: '26px', bgAnim: 'clouds' } },

    { id: 'grow', name: 'צומח', desc: 'עלים שמתנדנדים ועולים מלמטה, כמו הצמחים בסרטון.',
      theme: { primary: '#3FA34D', primaryDark: '#2C7A38', accent: '#7ED957', accentGlow: 'rgba(126,217,87,.45)',
        ink: '#16331F', inkSoft: '#4B6B54', surface: '#FBFFFA', surfaceAlt: '#D8F0E4',
        border: '#BEE3CD', overlay: 'rgba(14,44,26,.58)', radius: '24px', bgAnim: 'sprout' } },

    /* --- שבע ערכות תנועה חזקה. לכל אחת נושא אחד ברור, כדי שהבחירה תהיה
       "איזה סיפור מספרים" ולא "איזה צבע יפה". התנועה כאן מסיבית ומורגשת —
       מי שרוצה עדין יבחר "סרטון" או "צומח". --- */
    { id: 'tomato', name: '🍅 עגבניות', desc: 'עגבניות שעולות מהקרקע בקצב מהיר. חם, שופע, בלתי אפשרי להתעלם.',
      theme: { primary: '#D8342A', primaryDark: '#A82219', accent: '#8CC63E', accentGlow: 'rgba(216,52,42,.4)',
        ink: '#2A1210', inkSoft: '#6B4741', surface: '#FFFFFF', surfaceAlt: '#CFECEC',
        border: '#F0D2CE', overlay: 'rgba(42,18,16,.6)', radius: '24px', bgAnim: 'tomato' } },

    { id: 'berry', name: '🍓 תותים', desc: 'תותים שמרחפים כלפי מעלה. הכי מתוק ומזמין מכולם.',
      theme: { primary: '#E8455F', primaryDark: '#B92C44', accent: '#7ED957', accentGlow: 'rgba(232,69,95,.38)',
        ink: '#2E1218', inkSoft: '#70464F', surface: '#FFFCFD', surfaceAlt: '#FBE4EA',
        border: '#F4C9D3', overlay: 'rgba(46,18,24,.6)', radius: '26px', bgAnim: 'berry' } },

    { id: 'lettuce', name: '🥬 חסה', desc: 'עלים ירוקים שנפרשים ונושמים. רגוע יחסית לשאר החבורה.',
      theme: { primary: '#4CA83F', primaryDark: '#33772A', accent: '#B7E06B', accentGlow: 'rgba(183,224,107,.5)',
        ink: '#16311A', inkSoft: '#4C6B4E', surface: '#FCFFFA', surfaceAlt: '#E4F5DA',
        border: '#C9E7B8', overlay: 'rgba(18,44,22,.58)', radius: '24px', bgAnim: 'lettuce' } },

    { id: 'tower', name: '🗼 מגדל הידרופוני', desc: 'המגדל מסתובב והשתילים נעים כלפי מעלה. המוצר עצמו כרקע.',
      theme: { primary: '#2E9B45', primaryDark: '#1F7A32', accent: '#5FC4DE', accentGlow: 'rgba(95,196,222,.45)',
        ink: '#12303A', inkSoft: '#496872', surface: '#FFFFFF', surfaceAlt: '#CFECEC',
        border: '#B7DFE6', overlay: 'rgba(16,46,56,.6)', radius: '20px', bgAnim: 'tower' } },

    { id: 'water', name: '💧 מים זורמים', desc: 'זרימה חזקה ומהירה. הכי אגרסיבי בספרייה — ובדיוק מה שהמערכת עושה.',
      theme: { primary: '#1B9AAA', primaryDark: '#13707C', accent: '#7ED957', accentGlow: 'rgba(27,154,170,.42)',
        ink: '#0E2F35', inkSoft: '#456C74', surface: '#FFFFFF', surfaceAlt: '#DFF4FA',
        border: '#B6E2EC', overlay: 'rgba(10,42,48,.62)', radius: '22px', bgAnim: 'water' } },

    { id: 'roots', name: '🌱 טפטוף ושורשים', desc: 'טיפות שנופלות ושורשים שמתפשטים. מדגיש את הטכנולוגיה ולא את הפרי.',
      theme: { primary: '#2E9B45', primaryDark: '#1F7A32', accent: '#5FC4DE', accentGlow: 'rgba(95,196,222,.4)',
        ink: '#14301F', inkSoft: '#4B6B58', surface: '#FBFEFC', surfaceAlt: '#DCEFE8',
        border: '#BEDFD3', overlay: 'rgba(14,44,30,.6)', radius: '22px', bgAnim: 'roots' } },

    { id: 'green', name: '🏡 חממה', desc: 'קרני שמש שסורקות שורות גידול. הכי "מקצועי" — מתאים לקהל עסקי.',
      theme: { primary: '#3FA34D', primaryDark: '#2C7A38', accent: '#FFC629', accentGlow: 'rgba(255,198,41,.45)',
        ink: '#1E3320', inkSoft: '#556F58', surface: '#FFFFFF', surfaceAlt: '#E8F3DE',
        border: '#CFE4BE', overlay: 'rgba(22,44,26,.58)', radius: '18px', bgAnim: 'green' } },

    { id: 'bold', name: 'נועז', desc: 'ניגודיות גבוהה ופינות חדות. הכי "עכשיו" — ולא לכל קהל.',
      theme: { primary: '#111827', primaryDark: '#000000', accent: '#8CC63E', accentGlow: 'rgba(140,198,62,.45)',
        ink: '#0B0F14', inkSoft: '#54606E', surface: '#FFFFFF', surfaceAlt: '#F3F4F6',
        border: '#D8DCE2', overlay: 'rgba(0,0,0,.66)', radius: '6px', bgAnim: 'sheen' } }
  ];
})(typeof window !== 'undefined' ? window : this);

/* =============================================================================
 * HydroPop Engine v1.0.0
 * מנוע פופאפים + שאלונים + אנליטיקות + A/B testing לאתרי מסחר.
 * ללא תלויות. Shadow DOM (לא מתנגש עם CSS של האתר). RTL מלא.
 *
 * טעינה:  <script src="hydropop.config.js"></script>
 *         <script src="hydropop.engine.js" defer></script>
 *
 * API ציבורי (window.HydroPop):
 *   .open(campaignId, variantId?)   פתיחה ידנית (גם לבדיקות)
 *   .close()                        סגירה
 *   .report()                       טבלת ביצועים מקומית + מובהקות
 *   .significance(a,b)              מבחן z לשתי פרופורציות
 *   .sampleSize(base, mde)          כמה תצוגות צריך לניסוי
 *   .reset()                        איפוס כל המצב המקומי
 *   .on(event, cb)                  האזנה לאירועים
 *   .identify({email, phone})       זיהוי משתמש ידוע
 * =========================================================================== */
(function (win, doc) {
  'use strict';

  if (win.HydroPop) return;                       // הגנה מטעינה כפולה
  var CFG = null;                                 // נקבע ב-HydroPop.init() — מקובץ מקומי או מהשרת

  var NS = 'hydropop_v1';
  var LS_KEY = NS + '_state';
  var SS_KEY = NS + '_session';
  var OB_KEY = NS + '_outbox';                    // לידים שלא הצליחו להישלח

  /* ==========================================================================
   * 1. עזרים
   * ======================================================================== */
  var U = {
    now: function () { return Date.now(); },
    log: function () { if (CFG.debug) console.log.apply(console, ['%c[HydroPop]', 'color:#0F8A5F;font-weight:bold'].concat([].slice.call(arguments))); },
    uid: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8); return v.toString(16);
      }) + '-' + U.now().toString(36);
    },
    esc: function (s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    },
    /**
     * התאמה אישית בטקסט: {{key}} או {{key|ברירת מחדל}}.
     * מוחלף בתווית **הקצרה** של התשובה שנבחרה (report אם הוגדר, אחרת label),
     * לא בערך הגולמי — "עגבניות" ולא "fruiting".
     * חסר ערך ואין ברירת מחדל → הסימון נעלם והרווחים מתנקים, כי משפט
     * שבור גרוע יותר ממשפט גנרי.
     */
    fill: function (txt, answers, quiz) {
      var s = String(txt == null ? '' : txt);
      if (s.indexOf('{{') === -1) return s;
      var labelOf = function (key, val) {
        var out = null;
        ((quiz && quiz.steps) || []).forEach(function (st) {
          if (st.key !== key) return;
          (st.options || []).forEach(function (o) {
            if (out === null && String(o.value) === String(val)) out = o.report || o.label;
          });
        });
        return out;
      };
      s = s.replace(/\{\{\s*([\w.]+)\s*(?:\|([^}]*))?\}\}/g, function (m, key, def) {
        var v = (answers || {})[key];
        if (Object.prototype.toString.call(v) === '[object Array]') {
          var parts = v.map(function (x) { return labelOf(key, x) || x; });
          return parts.length ? parts.join(' ו') : (def == null ? '' : def);
        }
        if (v === undefined || v === null || v === '') return def == null ? '' : def;
        return labelOf(key, v) || String(v);
      });
      // ניקוי שאריות: רווחים כפולים, ורווח לפני פיסוק
      return s.replace(/\s{2,}/g, ' ').replace(/\s+([,.!?:;])/g, '$1').trim();
    },

    // hash דטרמיניסטי (FNV-1a) — לחלוקת וריאנטים יציבה לאותו מבקר
    hash: function (str) {
      var h = 2166136261;
      for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
      return (h >>> 0) / 4294967296;
    },
    isMobile: function () { return win.matchMedia('(max-width: 767px)').matches || /Mobi|Android/i.test(navigator.userAgent); },
    reducedMotion: function () { return win.matchMedia('(prefers-reduced-motion: reduce)').matches; },
    dnt: function () { return CFG.respectDoNotTrack && (navigator.doNotTrack === '1' || win.doNotTrack === '1'); },
    scrollPct: function () {
      var h = doc.documentElement || {}, b = doc.body || {};
      var docH = Math.max(h.scrollHeight || 0, b.scrollHeight || 0, h.clientHeight || 0);
      var total = docH - (win.innerHeight || 0);
      if (!(total > 0)) return 100;                       // גם מכסה NaN
      var pct = ((win.pageYOffset || 0) / total) * 100;
      return pct > 0 ? Math.min(100, pct) : 0;
    },
    matchPath: function (list) {
      if (!list || !list.length) return false;
      var p = (location.pathname + location.search).toLowerCase();
      for (var i = 0; i < list.length; i++) {
        if (p.indexOf(String(list[i]).toLowerCase()) !== -1) return true;
      }
      return false;
    },
    validEmail: function (v) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(String(v).trim()); },
    validPhoneIL: function (v) {
      var d = String(v).replace(/\D/g, '').replace(/^972/, '0');
      return /^0(5\d|7\d|[2-4]|8|9)\d{7}$/.test(d) || /^0\d{8,9}$/.test(d);
    },
    normPhone: function (v) {
      var d = String(v).replace(/\D/g, '');
      if (d.indexOf('972') === 0) return '+' + d;
      if (d.indexOf('0') === 0) return '+972' + d.slice(1);
      return d ? '+' + d : '';
    },
    merge: function (a, b) { var o = {}, k; for (k in a) o[k] = a[k]; for (k in b) if (b[k] !== undefined) o[k] = b[k]; return o; },
    utm: function () {
      var q = new URLSearchParams(location.search), o = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'].forEach(function (k) {
        var v = q.get(k); if (v) o[k] = v;
      });
      return o;
    },
    // אחסון בטוח: בפתיחה מקומית (file://) או במצב פרטי הדפדפן עלול לחסום
    // גישה ל-localStorage ולזרוק שגיאה. במקרה כזה עוברים לזיכרון.
    memStore: function () {
      var m = {};
      return {
        getItem: function (k) { return Object.prototype.hasOwnProperty.call(m, k) ? m[k] : null; },
        setItem: function (k, v) { m[k] = String(v); },
        removeItem: function (k) { delete m[k]; }
      };
    },
    safeStorage: function (kind) {
      try {
        var s = kind === 'session' ? win.sessionStorage : win.localStorage;
        s.setItem('__hp_probe', '1'); s.removeItem('__hp_probe');
        return s;
      } catch (e) {
        U.log('אחסון הדפדפן חסום — עובר לזיכרון זמני');
        return U.memStore();
      }
    }
  };

  /* ==========================================================================
   * 2. מצב מתמשך (Storage)
   * ======================================================================== */
  var Store = {
    _s: null, _sess: null, _ls: null, _ss: null,

    ls: function () { return this._ls || (this._ls = U.safeStorage('local')); },
    ss: function () { return this._ss || (this._ss = U.safeStorage('session')); },

    _read: function (storage, key, def) {
      try { var raw = storage.getItem(key); return raw ? JSON.parse(raw) : def; }
      catch (e) { return def; }
    },
    _write: function (storage, key, val) { try { storage.setItem(key, JSON.stringify(val)); } catch (e) { } },

    state: function () {
      if (!this._s) {
        this._s = this._read(this.ls(), LS_KEY, null) || {
          v: 1, visitorId: U.uid(), firstSeen: U.now(), pageViews: 0,
          campaigns: {}, stats: {}, identity: {}
        };
      }
      return this._s;
    },
    save: function () { this._write(this.ls(), LS_KEY, this._s); },

    session: function () {
      if (!this._sess) {
        this._sess = this._read(this.ss(), SS_KEY, null) || {
          id: U.uid(), start: U.now(), shown: [], lastShownAt: 0, pageViews: 0
        };
      }
      return this._sess;
    },
    saveSession: function () { this._write(this.ss(), SS_KEY, this._sess); },

    camp: function (id) {
      var s = this.state();
      if (!s.campaigns[id]) s.campaigns[id] = { imp: 0, lastAt: 0, convertedAt: 0, variant: null, dismissed: 0 };
      return s.campaigns[id];
    },
    stat: function (campId, varId) {
      var s = this.state(), k = campId + '::' + varId;
      if (!s.stats[k]) s.stats[k] = { imp: 0, engaged: 0, leads: 0, dismissed: 0, steps: {} };
      return s.stats[k];
    },
    /* התקדמות בשאלון. נשמרות אך ורק תשובות בחירה — לעולם לא פרטי קשר.
       הכל בדפדפן של הגולש, נמחק בהמרה או אחרי מספר הימים שהוגדר. */
    prog: function (campId) {
      var s = this.state(); s.progress = s.progress || {};
      return s.progress[campId] || null;
    },
    setProg: function (campId, data) {
      var s = this.state(); s.progress = s.progress || {};
      if (data) s.progress[campId] = data; else delete s.progress[campId];
      this.save();
    },
    purgeProg: function (days) {
      var s = this.state(); if (!s.progress) return;
      var max = (days || 7) * 86400000, now = U.now(), changed = false;
      Object.keys(s.progress).forEach(function (k) {
        if (now - (s.progress[k].at || 0) > max) { delete s.progress[k]; changed = true; }
      });
      if (changed) this.save();
    },

    /* תור לידים שנכשלו בשליחה — ניסיון חוזר בטעינת העמוד הבאה.
       בניגוד לשמירת ההתקדמות, כאן *כן* יש פרטי קשר — כי בלעדיהם אין ליד.
       לכן: מקסימום 5 רשומות, נמחק מיד עם שליחה מוצלחת, ופג אוטומטית אחרי 3 ימים. */
    outbox: function () { var q = this._read(this.ls(), OB_KEY, []); return q && q.length ? q : []; },
    pushOutbox: function (lead) {
      var q = this.outbox();
      q.push({ at: U.now(), tries: 0, lead: lead });
      while (q.length > 5) q.shift();
      this._write(this.ls(), OB_KEY, q);
    },
    setOutbox: function (q) {
      if (q && q.length) this._write(this.ls(), OB_KEY, q);
      else { try { this.ls().removeItem(OB_KEY); } catch (e) { } }
    },

    reset: function () {
      try { this.ls().removeItem(LS_KEY); this.ls().removeItem(OB_KEY); this.ss().removeItem(SS_KEY); } catch (e) { }
      this._s = null; this._sess = null;
    }
  };

  /* ==========================================================================
   * 3. סטטיסטיקה — מבחן z לשתי פרופורציות + גודל מדגם
   * ======================================================================== */
  var Stats = {
    erf: function (x) {
      var s = x < 0 ? -1 : 1; x = Math.abs(x);
      var a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741,
          a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
      var t = 1 / (1 + p * x);
      var y = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
      return s * y;
    },
    normCdf: function (z) { return 0.5 * (1 + Stats.erf(z / Math.SQRT2)); },

    /** מבחן z דו-זנבי. a/b = {n: תצוגות, x: המרות} */
    ztest: function (a, b) {
      var n1 = a.n, x1 = a.x, n2 = b.n, x2 = b.x;
      if (!n1 || !n2) return { ok: false, reason: 'אין מספיק נתונים' };
      var p1 = x1 / n1, p2 = x2 / n2, pp = (x1 + x2) / (n1 + n2);
      var se = Math.sqrt(pp * (1 - pp) * (1 / n1 + 1 / n2));
      if (!se) return { ok: false, reason: 'שונות אפס' };
      var z = (p2 - p1) / se;
      var pv = 2 * (1 - Stats.normCdf(Math.abs(z)));
      // רווח סמך 95% להפרש
      var seDiff = Math.sqrt(p1 * (1 - p1) / n1 + p2 * (1 - p2) / n2);
      return {
        ok: true, z: z, p: pv,
        rateA: p1, rateB: p2,
        lift: p1 ? (p2 - p1) / p1 : null,
        ci95: [(p2 - p1) - 1.96 * seDiff, (p2 - p1) + 1.96 * seDiff],
        significant: pv < 0.05,
        confidence: 1 - pv,
        winner: pv < 0.05 ? (p2 > p1 ? 'B' : 'A') : null
      };
    },

    /** כמה תצוגות לכל וריאנט צריך. base=שיעור המרה נוכחי (0-1), mde=שיפור יחסי (0.2 = 20%) */
    sampleSize: function (base, mde, alpha, power) {
      alpha = alpha || 0.05; power = power || 0.8;
      var p1 = base, p2 = base * (1 + mde);
      if (p2 >= 1) p2 = 0.999;
      var zA = 1.959963985, zB = 0.8416212336;   // 95% / 80%
      if (alpha === 0.1) zA = 1.644853627;
      if (power === 0.9) zB = 1.281551566;
      var pooled = (p1 + p2) / 2;
      var num = Math.pow(zA * Math.sqrt(2 * pooled * (1 - pooled)) + zB * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)), 2);
      var den = Math.pow(p2 - p1, 2);
      return Math.ceil(num / den);
    }
  };

  /* ==========================================================================
   * 4. אנליטיקות
   * ======================================================================== */
  var Analytics = {
    q: [], timer: null, listeners: {},

    ctx: function () {
      var s = Store.state(), ses = Store.session();
      return {
        visitorId: s.visitorId, sessionId: ses.id,
        url: location.href, path: location.pathname, ref: doc.referrer || '',
        title: doc.title, device: U.isMobile() ? 'mobile' : 'desktop',
        vw: win.innerWidth, vh: win.innerHeight,
        lang: navigator.language, tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        utm: U.utm(), ts: U.now()
      };
    },

    track: function (name, props) {
      var ev = U.merge({ event: name, props: props || {} }, this.ctx());
      U.log('event:', name, props || {});
      if (CFG.analytics.consoleTable) console.log('[HydroPop event]', ev);

      this.emit(name, ev);
      this.emit('*', ev);

      // תצוגה מקדימה בפאנל — שום דבר לא יוצא החוצה, אחרת הדוחות מזדהמים
      if (CFG.previewMode || U.dnt()) return;

      // GA4 / GTM
      if (CFG.analytics.ga4) {
        var flat = U.merge({ hp_campaign: ev.props.campaign, hp_variant: ev.props.variant, hp_step: ev.props.step }, {});
        if (typeof win.gtag === 'function') win.gtag('event', 'hydropop_' + name, flat);
        if (win.dataLayer && win.dataLayer.push) win.dataLayer.push(U.merge({ event: 'hydropop_' + name }, flat));
      }
      // Meta Pixel — רק אירועים משמעותיים
      if (CFG.analytics.metaPixel && typeof win.fbq === 'function') {
        if (name === 'lead') win.fbq('track', 'Lead', { content_name: ev.props.campaign });
        if (name === 'popup_view') win.fbq('trackCustom', 'HydroPopView', { content_name: ev.props.campaign });
      }

      if (CFG.analytics.endpoint) {
        this.q.push(ev);
        if (this.q.length >= CFG.analytics.batchSize) this.flush();
        else this.schedule();
      }
    },

    schedule: function () {
      if (this.timer) return;
      var self = this;
      this.timer = setTimeout(function () { self.timer = null; self.flush(); }, CFG.analytics.flushIntervalMs);
    },

    flush: function (useBeacon) {
      if (!CFG.analytics.endpoint || !this.q.length) return;
      var batch = this.q.splice(0, this.q.length);
      var body = JSON.stringify({ source: 'hydropop', version: CFG.version, events: batch });
      try {
        if (useBeacon && navigator.sendBeacon) {
          navigator.sendBeacon(CFG.analytics.endpoint, new Blob([body], { type: 'application/json' }));
        } else {
          fetch(CFG.analytics.endpoint, {
            method: 'POST', keepalive: true,
            headers: U.merge({ 'Content-Type': 'application/json' }, CFG.analytics.endpointHeaders),
            body: body
          })['catch'](function () { });
        }
      } catch (e) { U.log('flush failed', e); }
    },

    on: function (name, cb) { (this.listeners[name] = this.listeners[name] || []).push(cb); },
    emit: function (name, payload) {
      var l = this.listeners[name]; if (!l) return;
      for (var i = 0; i < l.length; i++) { try { l[i](payload); } catch (e) { } }
    }
  };

  /* ==========================================================================
   * 5. חיבור CRM
   * ======================================================================== */
  var CRM = {
    /** @param {boolean} isRetry ניסיון מהתור — לא נכנס לתור שוב בכישלון */
    send: function (lead, isRetry) {
      // תצוגה מקדימה — לא שולחים ולא מתורים. ליד מזויף ב-CRM גרוע מליד חסר.
      if (CFG.previewMode) { U.log('תצוגה מקדימה — הליד לא נשלח ולא נשמר:', lead); return Promise.resolve({ ok: false, preview: true }); }
      var c = CFG.crm, payload, url, headers = { 'Content-Type': 'application/json' };
      var fm = c.fieldMap || {};

      var base = {};
      base[fm.email || 'email'] = lead.email || '';
      if (lead.phone) base[fm.phone || 'phone'] = U.normPhone(lead.phone);
      if (lead.firstName) base[fm.firstName || 'first_name'] = lead.firstName;
      if (lead.lastName) base[fm.lastName || 'last_name'] = lead.lastName;
      base[fm.tags || 'tags'] = (c.baseTags || []).concat(lead.tags || []);
      base[fm.source || 'source'] = lead.source;
      base[fm.answers || 'custom_fields'] = lead.answers || {};

      switch (c.provider) {
        case 'base44': {
          // Mini CRM באפליקציית "מנהלת הפופאפים" — מבנה שטוח ונקי, תואם ל-saveLead
          url = c.endpoint;
          var ans = {}, meta = lead.answers || {};
          Object.keys(meta).forEach(function (k) { if (k.charAt(0) !== '_') ans[k] = meta[k]; });
          var src = String(lead.source || '').split('/');
          payload = {
            email: lead.email || '',
            phone: lead.phone ? U.normPhone(lead.phone) : '',
            firstName: lead.firstName || '',
            lastName: lead.lastName || '',
            consent: lead.consent === true,
            campaign: src[1] || '',
            variant: src[2] || '',
            source: lead.source || '',
            page: meta._page || '',
            pageTitle: meta._title || '',
            answers: ans,
            tags: (c.baseTags || []).concat(lead.tags || []),
            utm: lead.utm || {},
            visitorId: lead.visitorId || '',
            submittedAt: new Date().toISOString()
          };
          break;
        }

        case 'klaviyo':
          url = 'https://a.klaviyo.com/client/subscriptions/?company_id=' + encodeURIComponent(c.publicKey);
          headers.revision = '2024-10-15';
          payload = {
            data: {
              type: 'subscription',
              attributes: {
                profile: { data: { type: 'profile', attributes: { email: lead.email, phone_number: lead.phone ? U.normPhone(lead.phone) : undefined, first_name: lead.firstName, properties: lead.answers } } }
              },
              relationships: { list: { data: { type: 'list', id: c.listId } } }
            }
          };
          break;

        case 'smoove':          // Smoove — דרך פרוקסי בשרת (המפתח לא בצד לקוח!)
        case 'activetrail':     // ActiveTrail — אותו עיקרון
        case 'mailchimp':
          url = c.endpoint;
          payload = U.merge(base, { provider: c.provider, listId: c.listId });
          break;

        case 'custom':
          if (typeof win.HYDROPOP_CRM_SEND === 'function') return win.HYDROPOP_CRM_SEND(lead);
          url = c.endpoint; payload = base;
          break;

        default:                // webhook
          url = c.endpoint;
          payload = U.merge(base, { raw: lead });
      }

      if (!url || url.indexOf('REPLACE-ME') !== -1) {
        U.log('CRM לא מוגדר — הליד לא נשלח:', lead);
        if (!isRetry) Store.pushOutbox(lead);
        return Promise.resolve({ ok: false, skipped: true, queued: !isRetry });
      }
      return this._post(url, headers, payload, c.retries || 0).then(function (r) {
        if (!r.ok && !isRetry) {
          Store.pushOutbox(lead);
          U.log('שליחת הליד נכשלה — נשמר לניסיון חוזר בטעינה הבאה');
          r.queued = true;
        }
        return r;
      });
    },

    /**
     * ניקוז התור. רץ פעם אחת בטעינת עמוד, אחרי שההגדרות הגיעו.
     * זה מה שמונע אובדן ליד כשה-CRM היה למטה בזמן השליחה.
     */
    drain: function () {
      var q = Store.outbox();
      if (!q.length) return;
      var c = CFG.crm || {};
      if (!c.endpoint || c.endpoint.indexOf('REPLACE-ME') !== -1) return;   // עדיין אין לאן לשלוח

      var now = U.now(), maxAge = (c.outboxDays || 3) * 86400000;
      var live = q.filter(function (it) { return now - (it.at || 0) < maxAge && (it.tries || 0) < 5; });
      if (live.length !== q.length) Store.setOutbox(live);
      if (!live.length) return;

      var left = live.slice(), done = 0;
      U.log('מנקז ' + live.length + ' לידים שממתינים מהפעם הקודמת');
      live.forEach(function (it) {
        it.tries = (it.tries || 0) + 1;
        CRM.send(it.lead, true).then(function (r) {
          done++;
          if (r && r.ok) {
            var i = left.indexOf(it); if (i > -1) left.splice(i, 1);
            var src = String((it.lead && it.lead.source) || '').split('/');
            Analytics.track('lead_recovered', {
              campaign: src[1] || '', variant: src[2] || '',
              tries: it.tries, ageMs: now - (it.at || 0)
            });
          }
          if (done === live.length) Store.setOutbox(left);
        })['catch'](function () {
          done++;
          if (done === live.length) Store.setOutbox(left);
        });
      });
    },

    _post: function (url, headers, payload, retries) {
      var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var to = setTimeout(function () { ctrl && ctrl.abort(); }, CFG.crm.timeoutMs || 8000);
      return fetch(url, {
        method: 'POST', headers: headers, body: JSON.stringify(payload),
        signal: ctrl ? ctrl.signal : undefined, keepalive: true
      }).then(function (r) {
        clearTimeout(to);
        if (!r.ok && retries > 0) return CRM._post(url, headers, payload, retries - 1);
        return { ok: r.ok, status: r.status };
      })['catch'](function (e) {
        clearTimeout(to);
        if (retries > 0) return CRM._post(url, headers, payload, retries - 1);
        return { ok: false, error: String(e) };
      });
    }
  };

  /* ==========================================================================
   * 6. A/B — חלוקת וריאנטים דטרמיניסטית
   * ======================================================================== */
  var AB = {
    pick: function (camp) {
      var saved = Store.camp(camp.id).variant;
      var vars = camp.variants || [];
      if (saved) {
        for (var i = 0; i < vars.length; i++) if (vars[i].id === saved) return vars[i];
      }
      // hash יציב לפי visitorId+campaignId → אותו מבקר תמיד באותה קבוצה
      var r = U.hash(Store.state().visitorId + '|' + camp.id);
      var total = 0, j;
      for (j = 0; j < vars.length; j++) total += (vars[j].weight || 1);
      var acc = 0, target = r * total;
      for (j = 0; j < vars.length; j++) {
        acc += (vars[j].weight || 1);
        if (target <= acc) { Store.camp(camp.id).variant = vars[j].id; Store.save(); return vars[j]; }
      }
      return vars[0];
    },
    force: function (campId, varId) { Store.camp(campId).variant = varId; Store.save(); }
  };

  /* ==========================================================================
   * 7. CSS
   * ======================================================================== */
  function css(t) {
    return `
:host{all:initial;direction:rtl;font-family:${t.fontFamily};}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
.wrap{position:fixed;inset:0;z-index:2147483000;display:flex;pointer-events:none;}
.wrap[data-layout="modal"],.wrap[data-layout="fullscreen"]{align-items:center;justify-content:center;padding:16px;}
.wrap[data-layout="slidein"]{align-items:flex-end;justify-content:flex-start;padding:18px;}
.wrap[data-layout="bar"]{align-items:flex-start;justify-content:center;padding:0;}

.ovl{position:absolute;inset:0;background:${t.overlay};backdrop-filter:blur(${t.overlayBlur});-webkit-backdrop-filter:blur(${t.overlayBlur});opacity:0;transition:opacity .32s ease;pointer-events:auto;}
.wrap.in .ovl{opacity:1;}
.wrap[data-layout="slidein"] .ovl,.wrap[data-layout="bar"] .ovl{display:none;}

.card{position:relative;pointer-events:auto;background:${t.surface};color:${t.ink};border-radius:${t.radius};
 box-shadow:${t.shadow};width:100%;max-width:520px;max-height:92vh;overflow:hidden;display:flex;flex-direction:column;
 opacity:0;transform:translateY(22px) scale(.965);transition:opacity .38s cubic-bezier(.2,.8,.25,1),transform .38s cubic-bezier(.2,.8,.25,1);}
.wrap.in .card{opacity:1;transform:none;}
.wrap[data-layout="slidein"] .card{max-width:380px;transform:translateY(28px);}
.wrap[data-layout="fullscreen"] .card{max-width:760px;}
.wrap[data-layout="bar"] .card{max-width:none;border-radius:0;box-shadow:0 6px 24px -12px rgba(6,48,34,.4);transform:translateY(-100%);}
.wrap[data-layout="bar"].in .card{transform:none;}

/* פס דקורטיבי עליון */
.card::before{content:'';position:absolute;top:0;inset-inline:0;height:4px;z-index:3;
 background:linear-gradient(90deg,${t.primary},${t.accent},${t.primary});background-size:200% 100%;animation:hp-flow 6s linear infinite;}
@keyframes hp-flow{to{background-position:-200% 0;}}

/* ---- רקע חי ----
   שכבה דקורטיבית מתחת לתוכן. שלושה כללים שלא מתפשרים עליהם:
   1. pointer-events:none — לעולם לא חוסמת קליק על כפתור.
   2. prefers-reduced-motion — מי שביקש פחות תנועה מקבל רקע סטטי. תנועה
      מתמדת היא טריגר למיגרנה ולסחרחורת, וזה לא עניין של טעם.
   3. z-index — התוכן תמיד מעל. רקע שמסתיר טקסט הוא באג, לא אפקט. */
.bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden;border-radius:inherit;}
.card>.x,.card>.prog,.card>.body{position:relative;z-index:2;}

.card[data-bg="aurora"] .bg{background:
 radial-gradient(60% 55% at 20% 15%,${t.accentGlow},transparent 70%),
 radial-gradient(55% 50% at 85% 25%,${t.primary}38,transparent 70%),
 radial-gradient(65% 60% at 50% 100%,${t.accent}30,transparent 70%);
 background-size:180% 180%,170% 170%,160% 160%;animation:hp-aurora 18s ease-in-out infinite alternate;}
@keyframes hp-aurora{
 0%{background-position:0% 0%,100% 0%,50% 100%;}
 50%{background-position:60% 40%,20% 60%,80% 30%;}
 100%{background-position:100% 60%,0% 100%,10% 0%;}}

.card[data-bg="drift"] .bg{background:linear-gradient(125deg,${t.surfaceAlt},${t.accent}2E,${t.primary}24,${t.surfaceAlt});
 background-size:300% 300%;animation:hp-drift 22s ease infinite;}
@keyframes hp-drift{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}

.card[data-bg="bubbles"] .bg::before,.card[data-bg="bubbles"] .bg::after{content:'';position:absolute;
 border-radius:50%;background:radial-gradient(circle at 32% 30%,${t.accent}55,${t.primary}22 60%,transparent 72%);}
.card[data-bg="bubbles"] .bg::before{width:190px;height:190px;left:-50px;bottom:-60px;animation:hp-float 15s ease-in-out infinite;}
.card[data-bg="bubbles"] .bg::after{width:130px;height:130px;right:-38px;top:-30px;animation:hp-float 19s ease-in-out infinite reverse;}
@keyframes hp-float{0%,100%{transform:translate(0,0) scale(1);}
 33%{transform:translate(24px,-20px) scale(1.09);}66%{transform:translate(-18px,16px) scale(.94);}}

.card[data-bg="sheen"] .bg{background:linear-gradient(100deg,transparent 38%,${t.accent}3D 50%,transparent 62%);
 background-size:250% 100%;animation:hp-sheen 7s ease-in-out infinite;}
@keyframes hp-sheen{0%{background-position:130% 0;}55%,100%{background-position:-30% 0;}}

/* עננים — נגזר מסרטון האנימציה של הידרו האוס: תכלת-מנטה, עננים לבנים רכים
   שנעים לאט, ופס דשא בתחתית. הכל צורות CSS, בלי תמונה ובלי תלות חיצונית. */
.card[data-bg="clouds"] .bg{background:linear-gradient(180deg,${t.surfaceAlt} 0%,${t.surfaceAlt} 72%,${t.accent}5C 72%,${t.accent}42 100%);}
.card[data-bg="clouds"] .bg::before,.card[data-bg="clouds"] .bg::after{content:'';position:absolute;
 background:radial-gradient(circle at 22% 62%,#fff 0 26px,transparent 27px),
            radial-gradient(circle at 46% 42%,#fff 0 34px,transparent 35px),
            radial-gradient(circle at 72% 60%,#fff 0 24px,transparent 25px),
            linear-gradient(#fff,#fff) 18% 74%/62% 26px no-repeat;
 width:300px;height:110px;opacity:.9;filter:blur(.3px);}
.card[data-bg="clouds"] .bg::before{top:6%;animation:hp-cloud 34s linear infinite;}
.card[data-bg="clouds"] .bg::after{top:34%;transform:scale(.7);opacity:.6;animation:hp-cloud 52s linear infinite reverse;}
@keyframes hp-cloud{from{inset-inline-start:-320px;}to{inset-inline-start:105%;}}

/* צומח — עלים שמתנדנדים ועולים מקו הקרקע, כמו הצמחים שמטפסים בסרטון */
.card[data-bg="sprout"] .bg{background:linear-gradient(180deg,transparent 55%,${t.accent}30 100%);}
.card[data-bg="sprout"] .bg::before,.card[data-bg="sprout"] .bg::after{content:'';position:absolute;bottom:-14px;
 width:120px;height:120px;border-radius:0 78% 0 78%;background:linear-gradient(140deg,${t.accent}70,${t.primary}40);
 transform-origin:bottom center;}
.card[data-bg="sprout"] .bg::before{inset-inline-start:-26px;animation:hp-sway 11s ease-in-out infinite;}
.card[data-bg="sprout"] .bg::after{inset-inline-end:-30px;width:92px;height:92px;border-radius:78% 0 78% 0;
 animation:hp-sway 14s ease-in-out infinite reverse;}
@keyframes hp-sway{0%,100%{transform:rotate(-5deg) translateY(0);}50%{transform:rotate(6deg) translateY(-9px);}}

/* ===== ערכות תנועה חזקה — נושא אחד ברור לכל אחת =====
   כולן צורות CSS בלבד: אפס תמונות, אפס בקשות רשת, אפס תלויות.
   מונפשות ב-transform או ב-background-position, שהדפדפן מריץ בכרטיס המסך. */

/* 🍅 עגבניות עולות מהקרקע */
.card[data-bg="tomato"] .bg{background:linear-gradient(180deg,${t.surfaceAlt} 0 74%,${t.accent}55 74%,${t.accent}30 100%);}
.card[data-bg="tomato"] .bg::before{content:'';position:absolute;inset:-25% -12%;
 background-image:
  radial-gradient(circle at 50% 52%,#E23B2E 0 15px,transparent 16px),
  radial-gradient(circle at 50% 48%,#F2685A 0 11px,transparent 12px),
  radial-gradient(circle at 50% 50%,#C82F24 0 19px,transparent 20px);
 background-size:118px 152px,86px 124px,164px 186px;
 background-position:6% 0,42% 22px,76% 54px;animation:hp-rise 7s linear infinite;}
@keyframes hp-rise{to{background-position:6% -152px,42% -102px,76% -132px;}}

/* 🍓 תותים מרחפים */
.card[data-bg="berry"] .bg{background:linear-gradient(180deg,${t.surfaceAlt},#FFF6F8);}
.card[data-bg="berry"] .bg::before{content:'';position:absolute;inset:-25% -12%;
 background-image:
  radial-gradient(circle at 50% 45%,#E8455F 0 13px,transparent 14px),
  radial-gradient(circle at 50% 45%,#FF7C8E 0 9px,transparent 10px),
  radial-gradient(circle at 50% 55%,#C8324A 0 16px,transparent 17px);
 background-size:104px 138px,78px 112px,146px 168px;
 background-position:12% 0,52% 40px,84% 12px;animation:hp-rise2 6s linear infinite;}
@keyframes hp-rise2{to{background-position:12% -138px,52% -72px,84% -156px;}}

/* 🥬 עלי חסה שנפרשים */
.card[data-bg="lettuce"] .bg{background:radial-gradient(120% 90% at 50% 110%,${t.accent}5E,${t.surfaceAlt} 62%);}
.card[data-bg="lettuce"] .bg::before,.card[data-bg="lettuce"] .bg::after{content:'';position:absolute;
 inset-inline-start:50%;bottom:-46%;width:150%;padding-bottom:150%;margin-inline-start:-75%;
 border-radius:50%;border:14px solid ${t.primary}2E;animation:hp-unfurl 6.5s ease-in-out infinite;}
.card[data-bg="lettuce"] .bg::after{border-color:${t.accent}55;animation-delay:-3.2s;}
@keyframes hp-unfurl{0%,100%{transform:scale(.62) rotate(-6deg);opacity:.35;}
 50%{transform:scale(1) rotate(7deg);opacity:.95;}}

/* 🗼 מגדל הידרופוני — השתילים נעים כלפי מעלה */
.card[data-bg="tower"] .bg{background:linear-gradient(180deg,${t.surfaceAlt},#BCE2E2);}
.card[data-bg="tower"] .bg::before{content:'';position:absolute;top:-8%;bottom:-8%;inset-inline-start:50%;
 width:104px;margin-inline-start:-52px;background:linear-gradient(90deg,#EDF7F7,#fff 35%,#DCEEEE);
 border-radius:16px;box-shadow:0 0 34px rgba(0,0,0,.07);}
.card[data-bg="tower"] .bg::after{content:'';position:absolute;top:-8%;bottom:-8%;inset-inline-start:50%;
 width:104px;margin-inline-start:-52px;
 background-image:
  radial-gradient(circle at 25% 50%,#6B4B33 0 7px,transparent 8px),
  radial-gradient(circle at 75% 50%,#6B4B33 0 7px,transparent 8px),
  radial-gradient(circle at 25% 50%,${t.primary}CC 0 4px,transparent 5px),
  radial-gradient(circle at 75% 50%,${t.primary}CC 0 4px,transparent 5px);
 background-size:104px 48px,104px 48px,104px 48px,104px 48px;
 background-position:0 0,0 24px,0 -13px,0 11px;animation:hp-tower 2.8s linear infinite;}
@keyframes hp-tower{to{background-position:0 -48px,0 -24px,0 -61px,0 -37px;}}

/* 💧 מים זורמים — הכי אגרסיבי */
.card[data-bg="water"] .bg{background:linear-gradient(180deg,${t.surfaceAlt},#A8DFEC);}
.card[data-bg="water"] .bg::before{content:'';position:absolute;inset:-40%;
 background:repeating-linear-gradient(100deg,transparent 0 24px,rgba(255,255,255,.6) 24px 33px,transparent 33px 66px);
 animation:hp-flowx 2.4s linear infinite;}
.card[data-bg="water"] .bg::after{content:'';position:absolute;inset:-40%;
 background:repeating-linear-gradient(84deg,transparent 0 38px,${t.primary}3D 38px 50px,transparent 50px 98px);
 animation:hp-flowx 3.9s linear infinite reverse;}
@keyframes hp-flowx{to{transform:translateX(-132px);}}

/* 🌱 טפטוף ושורשים */
.card[data-bg="roots"] .bg{background:linear-gradient(180deg,${t.surfaceAlt} 0 62%,${t.primary}22 100%);}
.card[data-bg="roots"] .bg::before{content:'';position:absolute;inset:-30% 0;
 background-image:
  radial-gradient(ellipse 4px 9px at 50% 50%,${t.accent}D9,transparent 60%),
  radial-gradient(ellipse 3px 7px at 50% 50%,#7FD4F0BB,transparent 60%);
 background-size:74px 108px,52px 86px;background-position:10% 0,58% 30px;
 animation:hp-drip 1.9s linear infinite;}
.card[data-bg="roots"] .bg::after{content:'';position:absolute;inset-inline:-10%;bottom:-30px;height:120px;
 background:repeating-conic-gradient(from 210deg at 50% 0,${t.primary}33 0 4deg,transparent 4deg 14deg);
 opacity:.55;animation:hp-spread 8s ease-in-out infinite;}
@keyframes hp-drip{to{background-position:10% 108px,58% 116px;}}
@keyframes hp-spread{0%,100%{transform:scaleY(.82);}50%{transform:scaleY(1.12);}}

/* 🏡 חממה — קרני שמש סורקות שורות גידול */
.card[data-bg="green"] .bg{background:linear-gradient(180deg,${t.surfaceAlt},#F7FBF2);}
.card[data-bg="green"] .bg::before{content:'';position:absolute;inset:0;
 background:repeating-linear-gradient(180deg,transparent 0 28px,${t.primary}1F 28px 32px,transparent 32px 60px);}
.card[data-bg="green"] .bg::after{content:'';position:absolute;inset:-40%;
 background:linear-gradient(74deg,transparent 40%,${t.accent}66 50%,transparent 60%);
 animation:hp-sun 5.5s ease-in-out infinite;}
@keyframes hp-sun{0%{transform:translateX(60%);}55%,100%{transform:translateX(-60%);}}

@media (prefers-reduced-motion:reduce){
 .bg,.bg::before,.bg::after,.card::before{animation:none!important;}
}

.x{position:absolute;top:12px;inset-inline-start:12px;width:34px;height:34px;border:0;border-radius:50%;
 background:${t.surfaceAlt};color:${t.inkSoft};font-size:19px;line-height:1;cursor:pointer;display:grid;place-items:center;
 transition:.2s;z-index:3;}
.x:hover{background:${t.border};color:${t.ink};transform:rotate(90deg);}
.x:focus-visible{outline:2px solid ${t.primary};outline-offset:2px;}

.prog{height:3px;background:${t.border};flex:none;}
.prog i{display:block;height:100%;background:linear-gradient(90deg,${t.primary},${t.accent});
 border-radius:0 3px 3px 0;transition:width .45s cubic-bezier(.2,.8,.25,1);}

.body{padding:34px 30px 28px;overflow-y:auto;flex:1;-webkit-overflow-scrolling:touch;}
.wrap[data-layout="bar"] .body{padding:14px 20px;display:flex;align-items:center;gap:16px;justify-content:center;flex-wrap:wrap;}

.eyebrow{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;letter-spacing:.4px;
 color:${t.primary};background:${t.surfaceAlt};border:1px solid ${t.border};padding:5px 11px;border-radius:999px;margin-bottom:14px;}
.eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:${t.accent};box-shadow:0 0 0 3px ${t.accentGlow};}
h2{font-size:25px;line-height:1.25;font-weight:800;letter-spacing:-.4px;margin-bottom:9px;}
.sub{font-size:15px;line-height:1.6;color:${t.inkSoft};margin-bottom:22px;}
.wrap[data-layout="bar"] h2{font-size:15px;font-weight:600;margin:0;}
.wrap[data-layout="slidein"] h2{font-size:20px;}

/* אפשרויות */
.opts{display:grid;gap:10px;}
.opts.grid2{grid-template-columns:1fr 1fr;}
.opt{display:flex;align-items:center;gap:12px;width:100%;text-align:start;padding:15px 16px;border-radius:15px;
 border:1.5px solid ${t.border};background:${t.surface};color:${t.ink};font:inherit;font-size:15px;font-weight:600;
 cursor:pointer;transition:.18s cubic-bezier(.2,.8,.25,1);position:relative;}
.opt:hover{border-color:${t.primary};background:${t.surfaceAlt};transform:translateX(-3px);}
.opt:focus-visible{outline:2px solid ${t.primary};outline-offset:2px;}
.opt[aria-pressed="true"]{border-color:${t.primary};background:${t.surfaceAlt};box-shadow:0 0 0 3px ${t.accentGlow};}
.opt .ic{font-size:23px;flex:none;line-height:1;}
.opt .tx{flex:1;min-width:0;}
.opt .dsc{display:block;font-size:12.5px;font-weight:500;color:${t.inkSoft};margin-top:2px;}
.opt .chk{width:20px;height:20px;border-radius:6px;border:1.5px solid ${t.border};flex:none;display:grid;place-items:center;font-size:12px;color:#fff;}
.opt[aria-pressed="true"] .chk{background:${t.primary};border-color:${t.primary};}
.opt.primary{background:${t.primary};border-color:${t.primary};color:#fff;justify-content:center;}
.opt.primary .dsc{color:rgba(255,255,255,.8);}
.opt.primary:hover{background:${t.primaryDark};transform:translateY(-2px);}
.opt.ghost{border:0;background:transparent;color:${t.inkSoft};font-weight:500;font-size:13.5px;justify-content:center;padding:9px;}
.opt.ghost:hover{background:transparent;color:${t.ink};transform:none;text-decoration:underline;}

/* טופס */
.field{margin-bottom:13px;}
label{display:block;font-size:13px;font-weight:700;margin-bottom:6px;color:${t.ink};}
input{width:100%;padding:13px 15px;border:1.5px solid ${t.border};border-radius:13px;font:inherit;font-size:15.5px;
 background:${t.surfaceAlt};color:${t.ink};transition:.18s;}
input::placeholder{color:#9CB5AB;}
input:focus{outline:0;border-color:${t.primary};background:${t.surface};box-shadow:0 0 0 4px ${t.accentGlow};}
input[aria-invalid="true"]{border-color:${t.danger};background:#FFF5F7;}
.err{display:none;font-size:12.5px;color:${t.danger};margin-top:5px;font-weight:600;}
input[aria-invalid="true"] ~ .err{display:block;}
.consent{display:flex;gap:9px;align-items:flex-start;font-size:12.5px;color:${t.inkSoft};margin:12px 0 4px;line-height:1.5;cursor:pointer;}
.consent input{width:17px;height:17px;flex:none;margin-top:1px;padding:0;accent-color:${t.primary};}

.btn{width:100%;padding:15px;border:0;border-radius:14px;background:${t.primary};color:#fff;font:inherit;
 font-size:16px;font-weight:800;cursor:pointer;transition:.2s;margin-top:14px;position:relative;overflow:hidden;}
.btn:hover:not(:disabled){background:${t.primaryDark};transform:translateY(-2px);box-shadow:0 12px 28px -12px ${t.primary};}
.btn:disabled{opacity:.62;cursor:progress;}
.btn:focus-visible{outline:2px solid ${t.ink};outline-offset:2px;}
.wrap[data-layout="bar"] .btn{width:auto;padding:9px 20px;margin:0;font-size:14px;border-radius:999px;}
.spin{display:inline-block;width:15px;height:15px;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;
 border-radius:50%;animation:hp-spin .7s linear infinite;vertical-align:-2px;margin-inline-end:7px;}
@keyframes hp-spin{to{transform:rotate(360deg);}}

.trust{font-size:12px;color:${t.inkSoft};text-align:center;margin-top:11px;}
.back{background:0;border:0;font:inherit;font-size:13px;color:${t.inkSoft};cursor:pointer;padding:8px 0;margin-top:10px;font-weight:600;}
.back:hover{color:${t.ink};}

/* הצלחה */
.ok{text-align:center;padding:8px 0 4px;}
.ok .badge{width:66px;height:66px;margin:0 auto 18px;border-radius:50%;display:grid;place-items:center;font-size:31px;
 background:linear-gradient(135deg,${t.primary},${t.accent});color:#fff;animation:hp-pop .55s cubic-bezier(.2,1.5,.4,1);}
@keyframes hp-pop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}
.coupon{display:flex;align-items:center;gap:10px;margin:18px 0 6px;padding:13px 15px;border-radius:14px;
 border:2px dashed ${t.primary};background:${t.surfaceAlt};}
.coupon code{flex:1;font-family:ui-monospace,'SF Mono',Menlo,monospace;font-size:20px;font-weight:800;letter-spacing:2.5px;color:${t.primary};}
.copy{border:0;background:${t.primary};color:#fff;padding:9px 15px;border-radius:10px;font:inherit;font-size:13px;font-weight:700;cursor:pointer;transition:.2s;}
.copy:hover{background:${t.primaryDark};}
.copy.done{background:${t.accent};color:${t.ink};}

/* המלצת מוצר */
.reco{display:flex;flex-direction:column;gap:12px;margin:18px 0 6px;padding:16px;border-radius:16px;
 background:${t.surfaceAlt};border:1.5px solid ${t.border};text-align:start;}
.reco-img{width:100%;max-height:170px;object-fit:cover;border-radius:12px;}
.reco-body{display:flex;flex-direction:column;}
.reco-eyebrow{font-size:11.5px;font-weight:800;letter-spacing:.4px;color:${t.primary};margin-bottom:4px;}
.reco-name{font-size:16.5px;font-weight:800;color:${t.ink};margin-bottom:3px;}
.reco-tag{font-size:13px;color:${t.inkSoft};line-height:1.5;}
.reco-actions{display:flex;flex-direction:column;gap:8px;margin-top:12px;}
.reco-actions .btn{margin-top:0;text-decoration:none;display:block;text-align:center;box-sizing:border-box;}
.btn.wa{background:#25D366;}
.btn.wa:hover{background:#1DA851;}

/* ===== סגנון "שאלון ממותג" (camp.ui) ===== */
/* ===== תצוגת שיחה (variant.render='chat') ===== */
.chead{display:flex;align-items:center;gap:7px;padding:0 0 10px;border-bottom:1px solid ${t.border};margin-bottom:10px;}
.chead img{height:26px;border-radius:6px;}
.chead .ct{font-size:14px;font-weight:800;color:${t.ink};}
.chead .cs{font-size:10.5px;color:${t.inkSoft};}
.chead .con{margin-inline-start:auto;font-size:10.5px;font-weight:700;color:${t.primary};display:flex;align-items:center;gap:4px;}
.chead .con::before{content:'';width:6px;height:6px;border-radius:50%;background:${t.primary};box-shadow:0 0 0 3px ${t.accentGlow};}
.cbar{height:4px;border-radius:99px;background:${t.surfaceAlt};overflow:hidden;margin-bottom:10px;}
.cbar i{display:block;height:100%;background:linear-gradient(90deg,${t.primary},${t.accent});transition:width .45s cubic-bezier(.2,.8,.25,1);}
.clog{display:flex;flex-direction:column;gap:8px;max-height:min(46vh,320px);overflow-y:auto;padding:2px 2px 8px;scroll-behavior:smooth;}
.cmsg{display:flex;align-items:flex-end;gap:6px;animation:hp-rise .32s cubic-bezier(.2,.9,.3,1) both;}
.cmsg.me{flex-direction:row-reverse;}
.cav{width:22px;height:22px;flex:none;border-radius:50%;background:${t.primary};color:#fff;font-size:11px;font-weight:800;display:grid;place-items:center;}
.cb{max-width:82%;padding:9px 12px;border-radius:15px;font-size:14px;line-height:1.5;
 background:${t.surfaceAlt};color:${t.ink};border-end-start-radius:5px;}
.cmsg.me .cb{background:${t.primary};color:#fff;border-end-start-radius:15px;border-end-end-radius:5px;font-weight:600;}
.cb .cl{display:block;}
.cb .cl.sub{font-size:12.5px;opacity:.8;margin-top:3px;}
.cb.typing{display:flex;gap:4px;padding:12px 13px;}
.cb.typing i{width:6px;height:6px;border-radius:50%;background:${t.inkSoft};opacity:.45;animation:hp-typ 1.1s infinite;}
.cb.typing i:nth-child(2){animation-delay:.16s;}
.cb.typing i:nth-child(3){animation-delay:.32s;}
@keyframes hp-typ{0%,60%,100%{transform:translateY(0);opacity:.35}30%{transform:translateY(-4px);opacity:.9}}
@keyframes hp-rise{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
.cin{margin-top:10px;}
.cin[hidden]{display:none;}
/* בשיחה האפשרויות הן שבבים — אבל חייבות להיראות **לחיצות**: מסגרת בצבע
   המותג, רקע, וצל קל. שבב שטוח נקרא כטקסט ולא כתשובה. */
.cin{display:flex;flex-direction:column;gap:8px;}
.cin .opts{flex-direction:row;flex-wrap:wrap;display:flex;gap:8px;justify-content:flex-end;}
.cin .opt{width:auto;flex:0 1 auto;padding:10px 15px;border-radius:999px;font-size:13.5px;font-weight:700;
 background:${t.surface};border:1.5px solid ${t.primary};color:${t.primary};
 box-shadow:0 2px 8px -4px ${t.primary};}
.cin .opt .rad,.cin .opt .dsc{display:none;}
.cin .opt .ic{font-size:16px;}
.cin .opt:hover{background:${t.primary};color:#fff;transform:translateY(-2px);}
.cin .opt:hover .ic{filter:brightness(1.2);}
.cin .opt[aria-pressed="true"]{background:${t.primary};color:#fff;}
.cin .opts.grid2{grid-template-columns:none;}
/* רמז עדין שיש כאן מה ללחוץ */
.ctap{font-size:11px;color:${t.inkSoft};text-align:center;opacity:.75;}
.cback{align-self:flex-start;background:0;border:0;font:inherit;font-size:12.5px;font-weight:700;
 color:${t.inkSoft};cursor:pointer;padding:4px 2px;}
.cback:hover{color:${t.primary};text-decoration:underline;}

.card.quiz{background:linear-gradient(168deg,#F3FBF2,#E2F3E4 55%,#D5EDDA);}
.card.quiz::before{display:none;}
.card.quiz .body{padding:26px 22px 20px;}
.brand{display:flex;flex-direction:column;align-items:center;margin-bottom:6px;}
.brand img{max-height:46px;margin-bottom:4px;}
.brand .bt{font-size:19px;font-weight:800;color:${t.primary};letter-spacing:1.5px;}
.brand .bs{font-size:10.5px;color:${t.inkSoft};letter-spacing:.4px;}
.headline{font-size:19px;font-weight:800;text-align:center;line-height:1.4;margin:6px 0 16px;color:${t.ink};}
.qpanel{background:${t.surface};border-radius:18px;padding:20px 18px 14px;box-shadow:0 10px 28px -18px rgba(6,48,34,.35);}
.qpanel h2{font-size:17.5px;margin-bottom:12px;}
.qpanel .sub{font-size:13.5px;margin-bottom:14px;}
.card.quiz .opt{border:0;background:transparent;border-radius:10px;padding:12px 6px;border-bottom:1px solid ${t.border};}
.card.quiz .opts{gap:0;}
.card.quiz .opt:last-child{border-bottom:0;}
.card.quiz .opt:hover{background:${t.surfaceAlt};transform:none;border-color:${t.border};}
.card.quiz .opt[aria-pressed="true"]{box-shadow:none;background:${t.surfaceAlt};}
.rad{width:21px;height:21px;border-radius:50%;background:#F1C40F;opacity:.85;flex:none;transition:.18s;}
.opt[aria-pressed="true"] .rad{background:#27AE60;opacity:1;box-shadow:0 0 0 4px rgba(39,174,96,.22);}
.qfoot{display:flex;align-items:center;gap:12px;margin-top:16px;}
.qprev{border:0;background:${t.surface};color:${t.primary};font:inherit;font-weight:700;font-size:14px;padding:10px 18px;border-radius:12px;cursor:pointer;box-shadow:0 4px 12px -8px rgba(6,48,34,.35);transition:.18s;}
.qprev:hover{transform:translateY(-1px);}
.qbar{flex:1;height:10px;border-radius:99px;background:${t.ink};overflow:hidden;}
.qbar i{display:block;height:100%;background:linear-gradient(90deg,${t.primary},${t.accent});border-radius:99px;transition:width .45s cubic-bezier(.2,.8,.25,1);}
.resume{display:flex;align-items:center;gap:8px;justify-content:center;font-size:12px;font-weight:700;
 color:${t.primary};background:${t.surfaceAlt};border:1px solid ${t.border};border-radius:99px;
 padding:6px 12px;margin-bottom:12px;}
.resume button{border:0;background:transparent;color:${t.inkSoft};font:inherit;font-size:11.5px;
 font-weight:600;cursor:pointer;text-decoration:underline;padding:0;}
.resume button:hover{color:${t.ink};}
.proof{display:flex;flex-direction:column;gap:3px;margin-top:14px;padding:11px 14px;border-radius:13px;
 background:${t.surface};border:1px solid ${t.border};box-shadow:0 6px 18px -14px rgba(6,48,34,.4);
 animation:hp-fade .5s ease both;}
.proof .pst{color:#F5B301;font-size:12.5px;letter-spacing:1.5px;line-height:1;}
.proof .ptx{font-size:12.8px;line-height:1.55;color:${t.ink};}
.proof .pnm{font-size:11.5px;font-weight:700;color:${t.inkSoft};}
@keyframes hp-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.vid{position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#000;}
.vid iframe,.vid video{position:absolute;inset:0;width:100%;height:100%;border:0;}
.vid-empty{position:absolute;inset:0;display:grid;place-items:center;color:#9CB5AB;font-size:14px;}
.qconsent{justify-content:center;margin-top:12px;font-size:12px;}
.qconsent.req{color:${t.danger};font-weight:700;animation:hp-shake .3s;}
@keyframes hp-shake{25%{transform:translateX(4px)}75%{transform:translateX(-4px)}}
.card.quiz .btn{margin-top:6px;}

@media (max-width:520px){
 .wrap[data-layout="modal"]{align-items:flex-end;padding:0;}
 .card{max-width:none;border-radius:${t.radius} ${t.radius} 0 0;max-height:88vh;}
 .wrap[data-layout="slidein"]{padding:0;align-items:flex-end;}
 .wrap[data-layout="slidein"] .card{max-width:none;border-radius:${t.radius} ${t.radius} 0 0;}
 .body{padding:28px 20px 24px;}
 h2{font-size:21px;}
 .opts.grid2{grid-template-columns:1fr;}
}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition-duration:.01ms!important;}}
`;
  }

  /* ==========================================================================
   * 8. UI + מנוע השאלון
   * ======================================================================== */
  var UI = {
    host: null, root: null, wrap: null, active: null, lastFocus: null, keyHandler: null,

    theme: function (camp, variant) {
      return U.merge(CFG.theme, variant.themeOverride || camp.themeOverride || {});
    },

    mount: function (camp, variant, ui) {
      this.destroy(true);
      var t = this.theme(camp, variant);

      if (t.loadGoogleFont && !doc.getElementById('hp-font')) {
        var l = doc.createElement('link');
        l.id = 'hp-font'; l.rel = 'stylesheet';
        l.href = 'https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700;800&display=swap';
        doc.head.appendChild(l);
      }

      this.host = doc.createElement('div');
      this.host.id = 'hydropop-host';
      this.host.setAttribute('data-hydropop', camp.id);
      this.root = this.host.attachShadow({ mode: 'open' });

      var style = doc.createElement('style');
      style.textContent = css(t);
      this.root.appendChild(style);

      this.wrap = doc.createElement('div');
      this.wrap.className = 'wrap';
      this.wrap.setAttribute('data-layout', camp.layout || 'modal');
      this.wrap.setAttribute('role', 'dialog');
      this.wrap.setAttribute('aria-modal', camp.layout === 'bar' || camp.layout === 'slidein' ? 'false' : 'true');
      this.wrap.setAttribute('aria-label', camp.name || 'הודעה');
      this.wrap.innerHTML =
        '<div class="ovl" data-act="overlay"></div>' +
        '<div class="card' + (ui ? ' quiz' : '') + '" data-bg="' + (t.bgAnim || 'none') + '">' +
        (t.bgAnim && t.bgAnim !== 'none' ? '<div class="bg" aria-hidden="true"></div>' : '') +
        '<button class="x" data-act="close" aria-label="סגירה">✕</button>' +
        '<div class="prog" hidden><i style="width:0"></i></div>' +
        '<div class="body"></div></div>';

      this.root.appendChild(this.wrap);
      doc.body.appendChild(this.host);

      this.lastFocus = doc.activeElement;
      var self = this;
      requestAnimationFrame(function () { requestAnimationFrame(function () { self.wrap.classList.add('in'); }); });

      // סגירה
      this.wrap.addEventListener('click', function (e) {
        var act = e.target.closest && e.target.closest('[data-act]');
        if (!act) return;
        var a = act.getAttribute('data-act');
        if (a === 'close') Flow.close('close_button');
        if (a === 'overlay' && camp.layout !== 'bar') Flow.close('overlay_click');
      });
      this.keyHandler = function (e) {
        if (e.key === 'Escape') Flow.close('escape');
        if (e.key === 'Tab') UI.trapFocus(e);
      };
      doc.addEventListener('keydown', this.keyHandler, true);

      if (camp.layout === 'modal' || camp.layout === 'fullscreen') {
        doc.documentElement.style.overflow = 'hidden';
      }
      return this.root;
    },

    trapFocus: function (e) {
      if (!UI.root) return;
      var f = UI.root.querySelectorAll('button,input,a[href],[tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1], cur = UI.root.activeElement;
      if (e.shiftKey && cur === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && cur === last) { e.preventDefault(); first.focus(); }
    },

    body: function () { return this.root.querySelector('.body'); },

    setProgress: function (pct) {
      var p = this.root.querySelector('.prog');
      if (pct == null) { p.hidden = true; return; }
      p.hidden = false;
      p.querySelector('i').style.width = Math.max(4, pct) + '%';
    },

    destroy: function (instant) {
      if (this.keyHandler) { doc.removeEventListener('keydown', this.keyHandler, true); this.keyHandler = null; }
      doc.documentElement.style.overflow = '';
      var h = this.host; this.host = null; this.root = null;
      if (!h) return;
      if (instant || U.reducedMotion()) { h.remove(); }
      else {
        var w = h.shadowRoot && h.shadowRoot.querySelector('.wrap');
        if (w) w.classList.remove('in');
        setTimeout(function () { h.remove(); }, 340);
      }
      if (this.lastFocus && this.lastFocus.focus) { try { this.lastFocus.focus(); } catch (e) { } }
    }
  };

  /* --- Reco: מנוע המלצת מוצר למסך התוצאה. הכלל הראשון שמתאים מנצח;
     בלי כלל תואם — נופל ל-answers.product (הבחירה הישירה בענפי מוצר),
     ואז ל-defaultProductId. --- */
  var Reco = {
    matchCond: function (cond, answers) {
      var v = answers[cond.key];
      if (cond.op === 'exists') return v !== undefined && v !== null && v !== '';
      if (cond.op === 'neq') return String(v == null ? '' : v) !== String(cond.value);
      if (cond.op === 'in') {
        var list = String(cond.value || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean);
        return list.indexOf(String(v == null ? '' : v)) !== -1;
      }
      return String(v == null ? '' : v) === String(cond.value);
    },
    matchRule: function (rule, answers) {
      if (rule.enabled === false) return false;
      var conds = rule.when || [];
      for (var i = 0; i < conds.length; i++) if (!this.matchCond(conds[i], answers)) return false;
      return true;
    },
    /**
     * ההכרעה המלאה, כולל **למה**. הסיבה נשלחת לאנליטיקות: בלעדיה "0 לחיצות"
     * נראה כמו כשל של הכרטיס, כשבפועל ייתכן שהוא פשוט מעולם לא הוצג.
     * reason: off · step_off · suppressed · rule · answer · default ·
     *         catalog_miss (הגולש בחר מוצר שאין לו רשומה בקטלוג) · no_match
     */
    explain: function (answers) {
      var rc = CFG.recommendation;
      if (!rc || rc.enabled === false) return { product: null, reason: 'off' };
      var byId = {};
      (CFG.productCatalog || []).forEach(function (p) { byId[p.id] = p; });
      var rules = rc.rules || [];
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        if (!this.matchRule(r, answers)) continue;
        // כלל השבתה גובר על הכל, כולל הבחירה הישירה בשאלון וברירת המחדל:
        // "מעל סכום X — בלי כרטיס מוצר, רק חזרה טלפונית".
        if (r.suppress) return { product: null, reason: 'suppressed', rule: r.id || ('#' + (i + 1)) };
        if (r.productId && byId[r.productId]) return { product: byId[r.productId], reason: 'rule', rule: r.id || ('#' + (i + 1)) };
      }
      if (answers.product && byId[answers.product]) return { product: byId[answers.product], reason: 'answer' };
      if (rc.defaultProductId && byId[rc.defaultProductId]) return { product: byId[rc.defaultProductId], reason: 'default' };
      // הגולש בחר מוצר בשאלון אבל אין לו רשומה בקטלוג — תקלת הגדרות שקטה,
      // ולכן היא מקבלת סיבה משלה ולא מתחבאת בתוך "לא נמצאה התאמה".
      return { product: null, reason: answers.product ? 'catalog_miss' : 'no_match' };
    },
    resolve: function (answers) { return this.explain(answers).product; },
    /* תבנית הודעת וואטסאפ: כלל (פעיל, עם waTemplate, שמתאים) גובר על ברירת
       המחדל הגלובלית. עצמאי מבחירת המוצר — כלל יכול לשאת רק תבנית, בלי productId.
       כללי השבתה מדולגים: אין להם כרטיס להציג, ואסור שתבנית שנשמרה בהם פעם
       תכתיב את הנוסח של כרטיס שכלל אחר הביא. */
    waTemplate: function (answers) {
      var rc = CFG.recommendation || {};
      var rules = rc.rules || [];
      for (var i = 0; i < rules.length; i++) {
        if (rules[i].waTemplate && !rules[i].suppress && this.matchRule(rules[i], answers)) return rules[i].waTemplate;
      }
      return rc.whatsappTemplate || 'היי, מעוניין/ת ב-{product}';
    },
    waLink: function (p, answers) {
      var rc = CFG.recommendation || {};
      var num = String(rc.whatsappNumber || '').replace(/[^\d]/g, '');
      if (!num) return '';
      var tpl = this.waTemplate(answers || {});
      var text = tpl.split('{product}').join(p.name || '');
      return 'https://wa.me/' + num + '?text=' + encodeURIComponent(text);
    }
  };

  /* ==========================================================================
   * 9. Flow — ניהול שלבים, ולידציה, שליחה
   * ======================================================================== */
  var Flow = {
    camp: null, variant: null, steps: null, idx: 0, history: [],
    answers: {}, openedAt: 0, engaged: false, converted: false,

    stepIndex: function (id) {
      for (var i = 0; i < this.steps.length; i++) if (this.steps[i].id === id) return i;
      return -1;
    },

    open: function (camp, variant, reason) {
      this.camp = camp; this.variant = variant;
      // שלבים: מהספרייה (quizRef) או מוטמעים בווריאנט
      var quiz = null;
      if (variant.quizRef && CFG.quizzes) {
        for (var qi = 0; qi < CFG.quizzes.length; qi++)
          if (CFG.quizzes[qi].id === variant.quizRef) quiz = CFG.quizzes[qi];
        if (!quiz) U.log('שאלון לא נמצא בספרייה:', variant.quizRef);
      }
      this.quiz = quiz;
      this.ui = camp.ui || (quiz && quiz.ui) || null;
      this.steps = (quiz ? quiz.steps : variant.steps) || [];

      /* ווריאנט בלי שלבים — בדרך כלל quizRef שמצביע על שאלון שנמחק או ששמו
         שונה. עד כאן זה נגמר בפופאפ ריק שנתקע על המסך: popup_view נשלח,
         render() נזרק על שלב לא קיים, ו-step_view מעולם לא נשלח. יוצאים
         לפני ההרכבה ולפני המונים, ומדווחים כדי שזה ייראה באנליטיקות. */
      if (!this.steps.length) {
        Analytics.track('popup_broken', {
          campaign: camp.id, variant: variant.id,
          quizRef: variant.quizRef || '', reason: 'no_steps', trigger: reason || ''
        });
        U.log('ווריאנט בלי שלבים — הפופאפ לא נפתח:', camp.id, variant.id, variant.quizRef);
        this.camp = null; this.variant = null; this.steps = null;
        return false;
      }
      this.idx = 0; this.history = []; this.answers = {}; this.resumed = false;
      this.openedAt = U.now(); this.engaged = false; this.converted = false;
      /* תצוגת שיחה — נקבעת ברמת הווריאנט כדי שתהיה ניתנת לבדיקת A/B מול
         תצוגת המסכים על אותו שאלון בדיוק. */
      this.chat = (variant.render || camp.render) === 'chat';
      this.log = []; this.logStep = null; this.typing = false;
      // נשמר כדי שכל אירוע בהמשך הסשן יישא את אותו טריגר. בלעדיו אירועי
      // ההמלצה חסרי trigger, ומסנן אירועי הבדיקה בשרת מסנן את popup_view
      // אבל לא אותם — ושני הדוחות מתבססים על אוכלוסיות שונות.
      this.trigger = reason || '';

      // המשך מהמקום שנעצר (אם מופעל ורלוונטי)
      var rc = CFG.resume || {};
      if (rc.enabled !== false && camp.resume !== false) {
        var pr = Store.prog(camp.id);
        if (pr && pr.variant === variant.id && pr.quiz === (quiz ? quiz.id : '') &&
            (U.now() - (pr.at || 0)) / 86400000 < (rc.days || 7)) {
          var ri = this.stepIndex(pr.step);
          if (ri > 0) {
            this.idx = ri;
            this.answers = pr.answers || {};
            this.resumed = true;
            Analytics.track('quiz_resume', { campaign: camp.id, variant: variant.id, step: pr.step, stepIndex: ri });
          }
        }
      }

      UI.mount(camp, variant, this.ui);

      var c = Store.camp(camp.id);
      c.imp++; c.lastAt = U.now(); Store.save();
      var st = Store.stat(camp.id, variant.id); st.imp++; Store.save();

      var ses = Store.session();
      ses.shown.push(camp.id); ses.lastShownAt = U.now(); Store.saveSession();

      Analytics.track('popup_view', {
        campaign: camp.id, variant: variant.id, trigger: reason, layout: camp.layout,
        quiz: quiz ? quiz.id : '', socialProof: this.proofLevel()
      });
      this.render();
    },

    close: function (reason) {
      if (!this.camp) return;
      var dur = U.now() - this.openedAt;
      if (!this.converted) {
        var st = Store.stat(this.camp.id, this.variant.id);
        st.dismissed++; Store.camp(this.camp.id).dismissed++; Store.save();
      }
      Analytics.track(this.converted ? 'popup_close_converted' : 'popup_dismiss', {
        campaign: this.camp.id, variant: this.variant.id, reason: reason,
        step: this.steps[this.idx] && this.steps[this.idx].id,
        stepIndex: this.idx, durationMs: dur, engaged: this.engaged
      });
      UI.destroy();
      this.camp = null;
    },

    progressPct: function () {
      var total = 0, done = 0;
      for (var i = 0; i < this.steps.length; i++) {
        if (this.steps[i].progress) { total++; if (i < this.idx) done++; }
      }
      if (!total) return null;
      return Math.round(((done + 0.5) / total) * 100);
    },

    goTo: function (id) {
      var i = this.stepIndex(id);
      if (i === -1) { U.log('שלב לא נמצא:', id); return this.close('flow_end'); }
      this.history.push(this.idx);
      this.idx = i;
      this.render();
    },
    next: function (explicit) {
      var cur = this.steps[this.idx];
      var target = explicit || cur.next;
      if (target) return this.goTo(target);
      if (this.idx + 1 < this.steps.length) { this.history.push(this.idx); this.idx++; return this.render(); }
      this.close('flow_end');
    },
    back: function () {
      if (!this.history.length) return;
      this.idx = this.history.pop();
      /* בשיחה גם היומן חייב לחזור אחורה: מסירים את השאלה הנוכחית ואת
         התשובה שהובילה אליה, ומסמנים שהשאלה הקודמת כבר רשומה כדי שלא
         תיכתב פעמיים. בלי זה השיחה גדלה בכל "חזרה" ומאבדת היגיון. */
      if (this.chat) {
        while (this.log.length && this.log[this.log.length - 1].side === 'bot') this.log.pop();
        if (this.log.length && this.log[this.log.length - 1].side === 'me') this.log.pop();
        this.logStep = this.steps[this.idx].id;
        this.typing = false;
        var cur = this.steps[this.idx], self = this;
        // אם השאלה שחוזרים אליה כבר לא ביומן (למשל אחרי שחזור) — נרשמת מחדש
        if (!this.log.some(function (m) { return m.side === 'bot'; }) || !this.log.length) {
          var q = [cur.eyebrow, cur.title, cur.subtitle].filter(Boolean)
            .map(function (x) { return self.txt(x); });
          if (q.length) this.log.push({ side: 'bot', lines: q });
        }
      }
      Analytics.track('step_back', { campaign: this.camp.id, variant: this.variant.id, step: this.steps[this.idx].id });
      this.render();
    },

    render: function () {
      var s = this.steps && this.steps[this.idx];
      // רשת ביטחון: שלב חסר סוגר בנקייה במקום לזרוק ולהשאיר פופאפ ריק על המסך
      if (!s) {
        Analytics.track('popup_broken', {
          campaign: this.camp && this.camp.id, variant: this.variant && this.variant.id,
          reason: 'missing_step', stepIndex: this.idx, trigger: this.trigger || ''
        });
        return this.close('broken');
      }
      var ui = this.ui || null;
      UI.setProgress(!ui && s.progress ? this.progressPct() : null);

      var st = Store.stat(this.camp.id, this.variant.id);
      st.steps[s.id] = (st.steps[s.id] || 0) + 1; Store.save();

      // שמירת מיקום — תשובות בחירה בלבד, בלי שדות טופס
      if ((CFG.resume || {}).enabled !== false && this.camp.resume !== false &&
          this.idx > 0 && s.type !== 'success' && !this.converted) {
        Store.setProg(this.camp.id, {
          variant: this.variant.id, quiz: this.quiz ? this.quiz.id : '',
          step: s.id, answers: this.answers, at: U.now()
        });
      }

      Analytics.track('step_view', { campaign: this.camp.id, variant: this.variant.id, step: s.id, stepIndex: this.idx, type: s.type });

      // מכנה להמלצה: כמה בכלל ראו כרטיס מול כמה לא — ולמה לא.
      // בלי זה "אחוז הלחיצות" הוא מספר בלי בסיס.
      if (s.type === 'success') {
        var rd = this.recoFor(s);
        Analytics.track(rd.product ? 'reco_view' : 'reco_none', {
          campaign: this.camp.id, variant: this.variant.id, step: s.id,
          product: rd.product ? rd.product.id : '', reason: rd.reason, rule: rd.rule || '',
          trigger: this.trigger || ''
        });
      }

      var inner = '';
      if (s.type === 'success') {
        inner = this.renderSuccess(s);
      } else {
        /* בשיחה הכותרת כבר נאמרה בבועת הבוט — הצגתה שוב מתחת לאפשרויות
           יוצרת כפילות, ומסיטה את המשקל מהתשובות שאמורות להיראות לחיצות. */
        if (!this.chat) {
          if (s.eyebrow) inner += '<span class="eyebrow">' + U.esc(this.txt(s.eyebrow)) + '</span>';
          if (s.title) inner += '<h2>' + U.esc(this.txt(s.title)) + '</h2>';
          if (s.subtitle) inner += '<p class="sub">' + U.esc(this.txt(s.subtitle)) + '</p>';
        }
        if (s.type === 'choice') inner += this.renderChoice(s);
        else if (s.type === 'form') inner += this.renderForm(s);
        else if (s.type === 'video') inner += this.renderVideo(s);
        else if (s.type === 'content') inner += this.renderContent(s);
      }

      var resumeBar = (this.resumed && this.idx > 0 && s.type !== 'success')
        ? '<div class="resume">המשכנו מהמקום שעצרת ✓<button data-restart type="button">התחל מחדש</button></div>' : '';

      var html;
      if (this.chat) {
        html = this.renderChat(s, inner);
      } else if (ui) {
        // סגנון שאלון ממותג: לוגו + כותרת קבועה + פאנל לבן + פס התקדמות תחתון + הסכמה
        var brand = '<div class="brand">' +
          (ui.logoImg ? '<img src="' + U.esc(ui.logoImg) + '" alt="">' : '') +
          (ui.logoText ? '<span class="bt">' + U.esc(ui.logoText) + '</span>' : '') +
          (ui.logoSub ? '<span class="bs">' + U.esc(ui.logoSub) + '</span>' : '') +
          '</div>';
        if (s.type === 'success') {
          html = brand + inner;
        } else {
          html = brand + resumeBar +
            (ui.headline ? '<div class="headline">' + U.esc(this.txt(ui.headline)) + '</div>' : '') +
            '<div class="qpanel">' + inner + '</div>' +
            this.renderProof(s) +
            '<div class="qfoot">' +
            (this.history.length ? '<button class="qprev" data-back type="button">‹ קודם</button>' : '') +
            (s.progress ? '<div class="qbar"><i style="width:' + Math.max(6, this.progressPct() || 6) + '%"></i></div>' : '') +
            '</div>' +
            (ui.consentText
              ? '<label class="consent qconsent"><input type="checkbox" data-consent' + (this.answers._consent ? ' checked' : '') + '>' +
                '<span>' + U.esc(ui.consentText) + '</span></label>'
              : '');
        }
      } else {
        html = resumeBar + inner + this.renderProof(s);
        if (this.history.length && s.type !== 'success') html += '<button class="back" data-back>← חזרה</button>';
      }

      UI.body().innerHTML = html;
      this.bind(s);
      if (this.chat) this.afterChat();

      var first = UI.root.querySelector('.opt,input,.btn');
      if (first && !U.isMobile() && !this.typing) setTimeout(function () { try { first.focus(); } catch (e) { } }, 380);
    },

    renderChoice: function (s) {
      var quiz = !!this.ui;
      var cls = 'opts' + (s.columns === 2 ? ' grid2' : '');
      // תשובה קודמת (חזרה אחורה או שחזור התקדמות) — האפשרות חוזרת מסומנת
      var prev = s.key ? this.answers[s.key] : undefined;
      var chosen = function (v) {
        if (prev === undefined || prev === null) return false;
        return Object.prototype.toString.call(prev) === '[object Array]' ? prev.indexOf(v) !== -1 : prev === v;
      };
      var self = this;
      var h = '<div class="' + cls + '" role="group">';
      (s.options || []).forEach(function (o, i) {
        var c = 'opt' + (o.primary ? ' primary' : '') + (o.ghost ? ' ghost' : '');
        h += '<button class="' + c + '" data-opt="' + i + '" aria-pressed="' + (chosen(o.value) ? 'true' : 'false') + '" type="button">';
        if (o.icon) h += '<span class="ic" aria-hidden="true">' + U.esc(o.icon) + '</span>';
        h += '<span class="tx">' + U.esc(self.txt(o.label)) +
          (o.desc ? '<span class="dsc">' + U.esc(self.txt(o.desc)) + '</span>' : '') + '</span>';
        if (s.multi) h += '<span class="chk" aria-hidden="true">✓</span>';
        else if (quiz && !o.primary && !o.ghost) h += '<span class="rad" aria-hidden="true"></span>';
        h += '</button>';
      });
      h += '</div>';
      if (s.multi) h += '<button class="btn" data-multi-next type="button">' + U.esc(s.cta || 'המשך') + '</button>';
      return h;
    },

    renderForm: function (s) {
      var h = '<form data-form novalidate>';
      (s.fields || []).forEach(function (f) {
        h += '<div class="field">' +
          '<label for="hp_' + U.esc(f.name) + '">' + U.esc(f.label) + (f.required ? ' *' : '') + '</label>' +
          '<input id="hp_' + U.esc(f.name) + '" name="' + U.esc(f.name) + '" type="' + U.esc(f.type || 'text') + '"' +
          (f.placeholder ? ' placeholder="' + U.esc(f.placeholder) + '"' : '') +
          (f.required ? ' required' : '') +
          (f.type === 'email' ? ' inputmode="email" autocomplete="email"' : '') +
          (f.type === 'tel' ? ' inputmode="tel" autocomplete="tel"' : '') +
          '>' +
          '<span class="err" data-err="' + U.esc(f.name) + '"></span></div>';
      });
      if (s.consentText) {
        h += '<label class="consent"><input type="checkbox" name="consent"' + (s.consentRequired ? ' required' : '') + '>' +
          '<span>' + U.esc(s.consentText) + '</span></label>';
      }
      h += '<button class="btn" type="submit">' + U.esc(s.cta || 'שליחה') + '</button>';
      if (s.trust) h += '<p class="trust">' + U.esc(s.trust) + '</p>';
      h += '</form>';
      return h;
    },

    /** התאמה אישית לכל טקסט שמוצג — {{key}} מוחלף בתשובה שכבר ניתנה. */
    txt: function (v) { return U.fill(v, this.answers, this.quiz); },

    /**
     * תצוגת שיחה — אותו שאלון בדיוק, במראה של צ'אט.
     * הכלל שמחזיק את זה: ה"מעטפת" משתנה, אבל החלק האינטראקטיבי (inner) מגיע
     * מאותם renderChoice/renderForm/renderSuccess עם אותם data-attributes.
     * לכן bind() לא יודע בכלל שיש מצב שיחה, ואין שני מסלולי לוגיקה שיתפצלו.
     */
    renderChat: function (s, inner) {
      var ui = this.ui || {};
      var self = this;
      // רישום השאלה הנוכחית ביומן, פעם אחת לכל שלב
      if (this.logStep !== s.id) {
        this.logStep = s.id;
        var q = [s.eyebrow, s.title, s.subtitle].filter(Boolean)
          .map(function (x) { return self.txt(x); });
        if (q.length) { this.log.push({ side: 'bot', lines: q }); this.typing = !U.reducedMotion(); }
      }
      var bubbles = '', last = this.log.length - 1;
      this.log.forEach(function (m, i) {
        // בזמן "מקליד" ההודעה החדשה עוד לא נחשפת — אחרת היא ותיבת ההקלדה
        // היו מופיעות יחד והאפקט מאבד את משמעותו
        if (self.typing && i === last && m.side === 'bot') return;
        if (m.side === 'me') {
          bubbles += '<div class="cmsg me"><div class="cb">' + U.esc(m.text) + '</div></div>';
          return;
        }
        bubbles += '<div class="cmsg bot">' + (ui.logoText
          ? '<span class="cav" aria-hidden="true">' + U.esc(ui.logoText.charAt(0)) + '</span>' : '') +
          '<div class="cb">' + m.lines.map(function (l, i) {
            return '<span class="cl' + (i ? ' sub' : '') + '">' + U.esc(l) + '</span>';
          }).join('') + '</div></div>';
      });
      // "מקליד..." — מוצג רק כשההודעה האחרונה טרייה, ומוחלף בתוכן אחרי רגע
      var typing = this.typing
        ? '<div class="cmsg bot"><div class="cb typing"><i></i><i></i><i></i></div></div>' : '';

      var head = '<div class="chead">' +
        (ui.logoImg ? '<img src="' + U.esc(ui.logoImg) + '" alt="">' : '') +
        '<span class="ct">' + U.esc(ui.logoText || 'צ׳אט') + '</span>' +
        (ui.logoSub ? '<span class="cs">' + U.esc(ui.logoSub) + '</span>' : '') +
        '<span class="con">מקוון</span></div>';

      var prog = s.progress ? '<div class="cbar"><i style="width:' +
        Math.max(6, this.progressPct() || 6) + '%"></i></div>' : '';

      // רמז מילולי קצר — רק בשאלת בחירה, ורק בשאלה הראשונה שבה יש אפשרויות
      var tap = (s.type === 'choice' && (s.options || []).length && this.log.length <= 1)
        ? '<div class="ctap">בחרו תשובה כדי להמשיך</div>' : '';

      return head + prog +
        '<div class="clog" data-clog>' + bubbles + (this.typing ? typing : '') + '</div>' +
        '<div class="cin"' + (this.typing ? ' hidden' : '') + '>' + inner + tap +
        (this.history.length && s.type !== 'success'
          ? '<button class="cback" data-back type="button">‹ חזרה לשאלה הקודמת</button>' : '') +
        (ui.consentText && s.type !== 'success'
          ? '<label class="consent qconsent"><input type="checkbox" data-consent' +
            (this.answers._consent ? ' checked' : '') + '><span>' + U.esc(ui.consentText) + '</span></label>'
          : '') + '</div>';
    },

    /** גלילה לתחתית היומן + החלפת "מקליד" בתוכן אחרי השהיה קצרה. */
    afterChat: function () {
      var root = UI.root; if (!root) return;
      var log = root.querySelector('[data-clog]');
      if (log) log.scrollTop = log.scrollHeight;
      var self = this;
      if (this.typing) {
        clearTimeout(this._typeT);
        this._typeT = setTimeout(function () {
          if (!self.camp) return;
          self.typing = false; self.render();
        }, 480);
      }
    },

    /* מקור אמת יחיד: גם ה-HTML וגם האנליטיקות שואלים דרך כאן, כדי שלא ייווצר
       מצב שהכרטיס מוצג אבל מדווח אחרת (או להפך). */
    recoFor: function (s) {
      if (s && s.showRecommendation === false) return { product: null, reason: 'step_off' };
      return Reco.explain(this.answers);
    },

    renderSuccess: function (s) {
      var h = '<div class="ok"><div class="badge">✓</div>';
      h += '<h2>' + U.esc(this.txt(s.title || 'תודה!')) + '</h2>';
      if (s.body) h += '<p class="sub">' + U.esc(this.txt(s.body)) + '</p>';
      h += '</div>';
      var rec = this.recoFor(s).product;
      if (rec) h += this.renderRecommendation(rec);
      if (s.couponCode) {
        h += '<div class="coupon"><code data-code>' + U.esc(s.couponCode) + '</code>' +
          '<button class="copy" data-copy type="button">העתק</button></div>';
      }
      if (s.ctaLabel) h += '<button class="btn" data-cta type="button">' + U.esc(s.ctaLabel) + '</button>';
      return h;
    },

    renderRecommendation: function (p) {
      var h = '<div class="reco">';
      if (p.image) h += '<img class="reco-img" src="' + U.esc(p.image) + '" alt="' + U.esc(p.name || '') + '" loading="lazy">';
      h += '<div class="reco-body"><span class="reco-eyebrow">ההמלצה בשבילך</span>';
      if (p.name) h += '<h3 class="reco-name">' + U.esc(p.name) + '</h3>';
      if (p.tagline) h += '<p class="reco-tag">' + U.esc(p.tagline) + '</p>';
      var wa = Reco.waLink(p, this.answers);
      h += '<div class="reco-actions">';
      if (p.url) h += '<a class="btn" data-reco-view="' + U.esc(p.id || '') + '" href="' + U.esc(p.url) + '" target="_blank" rel="noopener">לצפייה במוצר</a>';
      if (wa) h += '<a class="btn wa" data-reco-wa="' + U.esc(p.id || '') + '" href="' + U.esc(wa) + '" target="_blank" rel="noopener">שאלה בוואטסאפ</a>';
      h += '</div></div></div>';
      return h;
    },

    /* הוכחה חברתית — עוצמה נשלטת: off / low / medium / high */
    proofLevel: function () {
      var sp = (this.quiz && this.quiz.socialProof) || null;
      if (!sp || sp.enabled === false || !(sp.items || []).length) return 'off';
      return sp.intensity || 'medium';
    },
    renderProof: function (s) {
      var sp = (this.quiz && this.quiz.socialProof) || null;
      var lvl = this.proofLevel();
      if (lvl === 'off' || s.type === 'success') return '';
      // low = רק בשלב הראשון · medium = כל שלב שני · high = כל שלב
      if (lvl === 'low' && this.idx !== 0) return '';
      if (lvl === 'medium' && this.idx % 2 !== 0) return '';
      var items = sp.items, it = items[this.idx % items.length];
      if (!it || !it.text) return '';
      var stars = Math.max(0, Math.min(5, it.rating == null ? 5 : it.rating));
      return '<div class="proof">' +
        (stars ? '<span class="pst" aria-label="' + stars + ' כוכבים">' + new Array(stars + 1).join('★') + '</span>' : '') +
        '<span class="ptx">' + U.esc(it.text) + '</span>' +
        (it.name ? '<span class="pnm">— ' + U.esc(it.name) + '</span>' : '') +
        '</div>';
    },

    renderVideo: function (s) {
      var u = String(s.videoUrl || '');
      var yt = u.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
      var vmo = u.match(/vimeo\.com\/(\d+)/);
      var h = '<div class="vid">';
      if (yt) h += '<iframe src="https://www.youtube.com/embed/' + yt[1] + '?rel=0" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="video"></iframe>';
      else if (vmo) h += '<iframe src="https://player.vimeo.com/video/' + vmo[1] + '" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="video"></iframe>';
      else if (u) h += '<video src="' + U.esc(u) + '" controls playsinline></video>';
      else h += '<div class="vid-empty">🎬 הדבק כתובת וידאו בהגדרות השלב</div>';
      h += '</div>';
      if (s.body) h += '<p class="sub" style="margin-top:12px">' + U.esc(s.body) + '</p>';
      h += '<button class="btn" data-vnext type="button">' + U.esc(s.ctaLabel || 'המשך') + '</button>';
      return h;
    },

    renderContent: function (s) {
      var h = '';
      if (s.ctaLabel) h += '<button class="btn" data-cta type="button">' + U.esc(s.ctaLabel) + '</button>';
      return h;
    },

    markEngaged: function () {
      if (this.engaged) return;
      this.engaged = true;
      var st = Store.stat(this.camp.id, this.variant.id); st.engaged++; Store.save();
      Analytics.track('popup_engage', { campaign: this.camp.id, variant: this.variant.id });
    },

    bind: function (s) {
      var self = this, root = UI.root;
      var backBtn = root.querySelector('[data-back]');
      if (backBtn) backBtn.onclick = function () { self.back(); };

      var rst = root.querySelector('[data-restart]');
      if (rst) rst.onclick = function () {
        Store.setProg(self.camp.id, null);
        Analytics.track('quiz_restart', { campaign: self.camp.id, variant: self.variant.id });
        self.idx = 0; self.history = []; self.answers = {}; self.resumed = false;
        self.render();
      };

      // בחירות — בשלב רב-בחירה מתחילים מהתשובות ששמורות, לא מרשימה ריקה
      var multiSel = [];
      if (s.multi && s.key && Object.prototype.toString.call(self.answers[s.key]) === '[object Array]')
        multiSel = self.answers[s.key].slice();
      root.querySelectorAll('[data-opt]').forEach(function (btn) {
        btn.onclick = function () {
          var o = s.options[+btn.getAttribute('data-opt')];
          self.markEngaged();

          if (o.action === 'dismiss') {
            Analytics.track('step_answer', { campaign: self.camp.id, variant: self.variant.id, step: s.id, key: s.key, value: o.value });
            return self.close('declined');
          }

          if (s.multi) {
            var on = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', on ? 'false' : 'true');
            var i = multiSel.indexOf(o.value);
            if (on) { if (i > -1) multiSel.splice(i, 1); } else if (i === -1) multiSel.push(o.value);
            if (s.key) self.answers[s.key] = multiSel.slice();
            return;
          }

          btn.setAttribute('aria-pressed', 'true');
          if (s.key) self.answers[s.key] = o.value;
          // בשיחה התשובה מהדהדת כבועה של הגולש — זה מה שהופך את זה לדו-שיח
          if (self.chat) self.log.push({ side: 'me', text: o.report || o.label || o.value });
          Analytics.track('step_answer', {
            campaign: self.camp.id, variant: self.variant.id, step: s.id,
            key: s.key, value: o.value, stepIndex: self.idx
          });
          // בסגנון שאלון משהים מעט יותר, כדי שהעיגול הירוק ייראה
          setTimeout(function () { self.next(o.next); }, self.ui ? 320 : 180);
        };
      });

      var mn = root.querySelector('[data-multi-next]');
      if (mn) mn.onclick = function () {
        Analytics.track('step_answer', { campaign: self.camp.id, variant: self.variant.id, step: s.id, key: s.key, value: multiSel });
        self.next();
      };

      // הסכמה קבועה (סגנון שאלון) — נשמרת בין שלבים
      var cbx = root.querySelector('[data-consent]');
      if (cbx) cbx.onchange = function () {
        self.answers._consent = cbx.checked;
        var l = root.querySelector('.qconsent'); if (l) l.classList.remove('req');
      };

      // טופס
      var form = root.querySelector('[data-form]');
      if (form) {
        form.querySelectorAll('input').forEach(function (inp) {
          inp.addEventListener('input', function () { inp.setAttribute('aria-invalid', 'false'); self.markEngaged(); });
        });
        form.onsubmit = function (e) { e.preventDefault(); self.submit(s, form); };
      }

      // העתקת קופון
      var cp = root.querySelector('[data-copy]');
      if (cp) cp.onclick = function () {
        var code = root.querySelector('[data-code]').textContent;
        var done = function () {
          cp.textContent = 'הועתק ✓'; cp.classList.add('done');
          Analytics.track('coupon_copy', { campaign: self.camp.id, variant: self.variant.id, code: code });
        };
        if (navigator.clipboard) navigator.clipboard.writeText(code).then(done)['catch'](done);
        else done();
      };

      // וידאו — כפתור המשך
      var vn = root.querySelector('[data-vnext]');
      if (vn) vn.onclick = function () {
        self.markEngaged();
        Analytics.track('video_continue', { campaign: self.camp.id, variant: self.variant.id, step: s.id });
        self.next(s.next);
      };

      // CTA
      var cta = root.querySelector('[data-cta]');
      if (cta) cta.onclick = function () {
        Analytics.track('cta_click', { campaign: self.camp.id, variant: self.variant.id, step: s.id, url: s.ctaUrl || '' });
        var url = s.ctaUrl;
        self.close('cta');
        if (url) setTimeout(function () { location.href = url; }, 60);
      };

      // המלצת מוצר — צפייה / וואטסאפ (קישורים אמיתיים, רק מדווחים)
      root.querySelectorAll('[data-reco-view]').forEach(function (el) {
        el.onclick = function () {
          Analytics.track('reco_view_click', { campaign: self.camp.id, variant: self.variant.id,
            product: el.getAttribute('data-reco-view'), trigger: self.trigger || '' });
        };
      });
      var recoWa = root.querySelector('[data-reco-wa]');
      if (recoWa) recoWa.onclick = function () {
        Analytics.track('reco_wa_click', { campaign: self.camp.id, variant: self.variant.id,
          product: recoWa.getAttribute('data-reco-wa'), trigger: self.trigger || '' });
      };
    },

    submit: function (s, form) {
      var self = this, data = {}, valid = true;

      (s.fields || []).forEach(function (f) {
        var inp = form.querySelector('[name="' + f.name + '"]');
        var v = (inp.value || '').trim();
        var errEl = form.querySelector('[data-err="' + f.name + '"]');
        var msg = '';

        if (f.required && !v) msg = 'שדה חובה';
        else if (v && f.type === 'email' && !U.validEmail(v)) msg = 'כתובת מייל לא תקינה';
        else if (v && f.type === 'tel' && !U.validPhoneIL(v)) msg = 'מספר טלפון לא תקין';
        else if (f.minLength && v.length < f.minLength) msg = 'קצר מדי';

        if (msg) { valid = false; inp.setAttribute('aria-invalid', 'true'); errEl.textContent = msg; }
        else { inp.setAttribute('aria-invalid', 'false'); errEl.textContent = ''; data[f.name] = v; }
      });

      var consent = form.querySelector('[name="consent"]');
      if (s.consentRequired && consent && !consent.checked) {
        valid = false;
        Analytics.track('submit_error', { campaign: this.camp.id, variant: this.variant.id, step: s.id, reason: 'consent' });
      }

      // הסכמה קבועה של סגנון השאלון (camp.ui)
      var uiC = this.ui && this.ui.consentText ? this.ui : null;
      if (uiC && uiC.consentRequired && !this.answers._consent) {
        valid = false;
        var ql = UI.root.querySelector('.qconsent'); if (ql) { ql.classList.remove('req'); void ql.offsetWidth; ql.classList.add('req'); }
        Analytics.track('submit_error', { campaign: this.camp.id, variant: this.variant.id, step: s.id, reason: 'consent' });
      }

      if (!valid) {
        Analytics.track('submit_error', { campaign: this.camp.id, variant: this.variant.id, step: s.id });
        var bad = form.querySelector('[aria-invalid="true"]'); if (bad) bad.focus();
        return;
      }

      var btn = form.querySelector('.btn');
      var label = btn.textContent;
      btn.disabled = true;
      btn.innerHTML = '<span class="spin"></span>שולח...';

      var rec = Reco.resolve(this.answers);
      if (rec) this.answers.recommendedProduct = rec.id;

      var lead = U.merge(data, {
        answers: U.merge(this.answers, { _page: location.pathname, _title: doc.title }),
        tags: (s.tags || []).concat(['campaign:' + this.camp.id, 'variant:' + this.variant.id]),
        consent: consent ? !!consent.checked : (uiC ? !!this.answers._consent : null),
        source: 'hydropop/' + this.camp.id + '/' + this.variant.id,
        visitorId: Store.state().visitorId,
        utm: U.utm()
      });

      // שמירת זהות מקומית
      var st8 = Store.state();
      st8.identity = U.merge(st8.identity, { email: data.email, phone: data.phone, firstName: data.firstName });
      Store.save();

      this.converted = true;
      Store.setProg(this.camp.id, null);   // הומר — אין מה לשחזר
      var stat = Store.stat(this.camp.id, this.variant.id);
      stat.leads++;
      Store.camp(this.camp.id).convertedAt = U.now();
      Store.save();

      Analytics.track('lead', {
        campaign: this.camp.id, variant: this.variant.id, step: s.id,
        hasPhone: !!data.phone, answers: this.answers,
        timeToLeadMs: U.now() - this.openedAt
      });

      // נשמר מראש — הגולש עשוי לסגור את הפופאפ לפני שה-CRM עונה
      var campId = this.camp.id, varId = this.variant.id;
      CRM.send(lead).then(function (r) {
        Analytics.track(r && r.ok ? 'crm_ok' : 'crm_fail', {
          campaign: campId, variant: varId, status: r && r.status,
          skipped: r && r.skipped, queued: !!(r && r.queued)
        });
      })['catch'](function () { });

      // תמיד ממשיכים למסך ההצלחה — לא חוסמים את המשתמש בגלל CRM
      setTimeout(function () {
        btn.disabled = false; btn.textContent = label;
        self.next(s.next);
      }, 550);
    }
  };

  /* ==========================================================================
   * 10. כשירות — האם מותר להציג קמפיין
   * ======================================================================== */
  /**
   * בדיקת כשירות עם סיבה מילולית.
   * `soft: true` = הסיבה זמנית ועשויה להשתנות בהמשך העמוד (למשל "עוד לא עברו X שניות"),
   * ואז הטריגר נשאר דרוך ומנסה שוב. `soft: false` = סופי לעמוד הזה.
   */
  function checkEligible(camp) {
    if (!camp.enabled) return { ok: false, why: 'הקמפיין כבוי' };
    if (CFG.debug) return { ok: true, why: 'מצב debug — כל המגבלות מבוטלות' };

    if (U.matchPath(CFG.suppressOnPaths)) return { ok: false, why: 'עמוד ברשימת suppressOnPaths' };

    var a = camp.audience || {};
    if (a.device === 'mobile' && !U.isMobile()) return { ok: false, why: 'מיועד למובייל בלבד' };
    if (a.device === 'desktop' && U.isMobile()) return { ok: false, why: 'מיועד לדסקטופ בלבד' };
    if (a.urlInclude && a.urlInclude.length && !U.matchPath(a.urlInclude))
      return { ok: false, why: 'העמוד לא ברשימת urlInclude (' + a.urlInclude.join(', ') + ')' };
    if (a.urlExclude && U.matchPath(a.urlExclude)) return { ok: false, why: 'העמוד ברשימת urlExclude' };
    if (a.newVisitorsOnly && Store.state().pageViews > 1) return { ok: false, why: 'מיועד למבקרים חדשים בלבד' };
    if (a.minTimeOnPageSec && (U.now() - PAGE_START) / 1000 < a.minTimeOnPageSec)
      return { ok: false, soft: true, why: 'עוד לא עברו ' + a.minTimeOnPageSec + ' שניות בעמוד' };

    var ses = Store.session();
    if (ses.shown.indexOf(camp.id) !== -1) return { ok: false, why: 'כבר הוצג בסשן הזה' };
    if (ses.shown.length >= (CFG.maxPopupsPerSession || 99))
      return { ok: false, why: 'מיצוי מכסת הסשן (' + CFG.maxPopupsPerSession + ' פופאפים)' };
    if (ses.lastShownAt && (U.now() - ses.lastShownAt) / 60000 < (CFG.globalCooldownMinutes || 0))
      return { ok: false, soft: true, why: 'מרווח גלובלי — נותרו ' +
        Math.ceil(CFG.globalCooldownMinutes - (U.now() - ses.lastShownAt) / 60000) + ' דק׳' };

    var c = Store.camp(camp.id), f = camp.frequency || {};
    if (f.maxImpressions && c.imp >= f.maxImpressions)
      return { ok: false, why: 'מיצוי תצוגות (' + c.imp + '/' + f.maxImpressions + ')' };
    if (f.cooldownHours && c.lastAt && (U.now() - c.lastAt) / 3600000 < f.cooldownHours)
      return { ok: false, why: 'cooldown — נותרו ' +
        Math.ceil(f.cooldownHours - (U.now() - c.lastAt) / 3600000) + ' שעות' };
    if (f.hideAfterConvertDays && c.convertedAt && (U.now() - c.convertedAt) / 86400000 < f.hideAfterConvertDays)
      return { ok: false, why: 'המבקר כבר המיר בקמפיין הזה' };

    return { ok: true, why: 'כשיר' };
  }
  function eligible(camp) { return checkEligible(camp).ok; }

  function attempt(camp, reason) {
    if (Flow.camp) return false;               // כבר פתוח משהו
    var chk = checkEligible(camp);
    if (!chk.ok) { U.log('דילוג על ' + camp.id + ': ' + chk.why); return false; }
    var v = AB.pick(camp);
    if (!v) return false;
    // פתיחה שנכשלה (ווריאנט שבור) לא "שורפת" את הטריגר — קמפיין אחר עוד יוכל לרוץ
    return Flow.open(camp, v, reason) !== false;
  }

  /* ==========================================================================
   * 11. טריגרים
   * ======================================================================== */
  var PAGE_START = U.now();
  var Triggers = {
    armed: [], maxScroll: 0, lastY: 0, idleTimer: null, exitArmed: false,

    init: function () {
      var camps = (CFG.campaigns || []).slice().sort(function (a, b) { return (b.priority || 0) - (a.priority || 0); });
      var self = this;

      camps.forEach(function (c) {
        var t = c.trigger || {};
        // וריאנט יכול לשאת טריגר משלו (ניסויי שילובים).
        // ההקצאה דטרמיניסטית — אותו מבקר יקבל תמיד את אותו שילוב.
        if (c.variants && c.variants.length) {
          var av = AB.pick(c);
          if (av && av.trigger) t = av.trigger;
        }
        switch (t.type) {
          case 'entry':
            setTimeout(function () { attempt(c, 'entry'); }, t.delayMs || 0);
            break;
          case 'time':
            setTimeout(function () { attempt(c, 'time:' + t.seconds); }, (t.seconds || 10) * 1000);
            break;
          case 'scroll':
            self.armed.push({ camp: c, kind: 'scroll', pct: t.percent || 50, delay: t.delayMs || 0, fired: false });
            break;
          case 'exit':
            self.armed.push({ camp: c, kind: 'exit', fired: false, mobileFallback: t.mobileFallback, minTime: t.minTimeOnPageSec || 0 });
            break;
          case 'idle':
            self.armed.push({ camp: c, kind: 'idle', seconds: t.seconds || 30, fired: false });
            break;
          case 'click':
            if (t.selector) doc.addEventListener('click', function (e) {
              if (e.target.closest && e.target.closest(t.selector)) attempt(c, 'click');
            }, true);
            break;
          case 'element':
            if (t.selector && win.IntersectionObserver) {
              var el = doc.querySelector(t.selector);
              if (el) {
                var io = new IntersectionObserver(function (en) {
                  if (en[0].isIntersecting) { io.disconnect(); attempt(c, 'element'); }
                }, { threshold: t.threshold || 0.5 });
                io.observe(el);
              }
            }
            break;
        }
      });

      // גלילה (throttled ב-rAF)
      var ticking = false;
      win.addEventListener('scroll', function () {
        if (ticking) return; ticking = true;
        requestAnimationFrame(function () { ticking = false; self.onScroll(); });
      }, { passive: true });

      // כוונת יציאה — דסקטופ
      doc.addEventListener('mouseout', function (e) {
        if (e.clientY > 8 || e.relatedTarget || e.toElement) return;
        self.fireExit('mouse');
      });
      // כוונת יציאה — החלפת טאב ממושכת
      var hiddenAt = 0;
      doc.addEventListener('visibilitychange', function () {
        if (doc.hidden) { hiddenAt = U.now(); Analytics.flush(true); }
        else if (hiddenAt && U.now() - hiddenAt > 25000) self.fireExit('return_from_tab');
      });

      // idle
      ['mousemove', 'keydown', 'touchstart', 'scroll'].forEach(function (ev) {
        win.addEventListener(ev, function () { self.resetIdle(); }, { passive: true });
      });
      this.resetIdle();

      // הערכה מיידית של מצב הגלילה הנוכחי — הגולש עשוי כבר להיות באמצע העמוד
      setTimeout(function () { self.onScroll(); }, 0);

      // בדיקה מחזורית לטריגרים שנחסמו זמנית (למשל "עוד לא עברו X שניות")
      this.recheckTimer = setInterval(function () { self.recheck(); }, 2500);
      setTimeout(function () { if (self.recheckTimer) { clearInterval(self.recheckTimer); self.recheckTimer = null; } }, 300000);

      win.addEventListener('pagehide', function () { Analytics.flush(true); });
    },

    onScroll: function () {
      var pct = U.scrollPct(), y = win.pageYOffset, self = this;
      if (pct > this.maxScroll) this.maxScroll = pct;

      this.armed.forEach(function (a) {
        if (a.fired) return;
        if (a.kind === 'scroll' && pct >= a.pct && !a.reached) {
          a.reached = true; a.reason = 'scroll:' + a.pct;
          setTimeout(function () { self.tryOne(a); }, a.delay);
        }
        // מובייל: גלילה מהירה כלפי מעלה ליד ראש העמוד = כוונת יציאה
        if (a.kind === 'exit' && a.mobileFallback === 'scrollUp' && U.isMobile()) {
          var dy = self.lastY - y;
          if (dy > 90 && y < 380 && (U.now() - PAGE_START) / 1000 > a.minTime && self.maxScroll > 25) {
            a.reached = true; a.reason = 'exit:scrollUp'; self.tryOne(a);
          }
        }
      });
      this.lastY = y;
    },

    fireExit: function (how) {
      var self = this;
      this.armed.forEach(function (a) {
        if (a.fired || a.kind !== 'exit') return;
        if ((U.now() - PAGE_START) / 1000 < a.minTime) return;
        if (U.isMobile() && how === 'mouse') return;
        a.reached = true; a.reason = 'exit:' + how;
        self.tryOne(a);
      });
    },

    /** ניסיון הצגה בודד. נכשל זמנית? הטריגר נשאר דרוך וה-recheck ינסה שוב. */
    tryOne: function (a) {
      if (a.fired) return true;
      if (attempt(a.camp, a.reason || a.kind)) { a.fired = true; return true; }
      var chk = checkEligible(a.camp);
      if (!chk.soft && !Flow.camp) a.fired = true;   // סיבה סופית — אין טעם לנסות שוב
      return false;
    },

    /**
     * בדיקה מחזורית. שני תפקידים:
     * 1. הערכה מחדש של מיקום הגלילה — קריטי אם המנוע עלה *אחרי* שהגולש כבר גלל
     *    (טעינת הגדרות איטית מהשרת), ואז אירוע הגלילה כבר לא יגיע שוב.
     * 2. ניסיון חוזר לטריגרים שהתנאי שלהם התקיים אך נחסמו זמנית.
     */
    recheck: function () {
      var self = this, pending = 0;
      this.onScroll();
      this.armed.forEach(function (a) {
        if (a.fired) return;
        pending++;                       // כל טריגר שעדיין לא נורה = יש למה להמשיך
        if (a.reached) self.tryOne(a);
      });
      if (!pending && self.recheckTimer) { clearInterval(self.recheckTimer); self.recheckTimer = null; }
    },

    resetIdle: function () {
      var self = this;
      clearTimeout(this.idleTimer);
      var idleCamps = this.armed.filter(function (a) { return a.kind === 'idle' && !a.fired; });
      if (!idleCamps.length) return;
      var secs = Math.min.apply(null, idleCamps.map(function (a) { return a.seconds; }));
      this.idleTimer = setTimeout(function () {
        idleCamps.forEach(function (a) { if (!a.fired) { a.fired = true; attempt(a.camp, 'idle'); } });
      }, secs * 1000);
    }
  };

  /* ==========================================================================
   * 12. API ציבורי
   * ======================================================================== */
  var API = {
    version: '',
    config: null,

    open: function (campId, varId) {
      var camp = null;
      for (var i = 0; i < CFG.campaigns.length; i++) if (CFG.campaigns[i].id === campId) camp = CFG.campaigns[i];
      if (!camp) return console.warn('[HydroPop] קמפיין לא נמצא:', campId);
      var v = camp.variants[0];
      if (varId) camp.variants.forEach(function (x) { if (x.id === varId) v = x; });
      Flow.open(camp, v, 'manual');
    },
    close: function () { Flow.close('api'); },

    /** תצוגה מקדימה של שלב מסוים — משמש את פאנל הניהול */
    preview: function (campId, varId, stepId) {
      var camp = null;
      for (var i = 0; i < CFG.campaigns.length; i++) if (CFG.campaigns[i].id === campId) camp = CFG.campaigns[i];
      if (!camp || !camp.variants || !camp.variants.length) return;
      var v = camp.variants[0];
      if (varId) camp.variants.forEach(function (x) { if (x.id === varId) v = x; });
      Flow.open(camp, v, 'preview');
      if (stepId) {
        var idx = Flow.stepIndex(stepId);
        if (idx > -1) { Flow.idx = idx; Flow.history = []; Flow.render(); }
      }
    },

    on: function (ev, cb) { Analytics.on(ev, cb); },
    identify: function (o) { var s = Store.state(); s.identity = U.merge(s.identity, o); Store.save(); },
    reset: function () { Store.reset(); console.log('[HydroPop] המצב אופס. רענן את העמוד.'); },
    stats: function () { return JSON.parse(JSON.stringify(Store.state().stats)); },

    /** אבחון: למה כל קמפיין מוצג או לא מוצג ברגע זה */
    why: function () {
      var rows = (CFG.campaigns || []).map(function (c) {
        var chk = checkEligible(c), t = c.trigger || {}, st = Store.camp(c.id);
        var armed = null;
        Triggers.armed.forEach(function (a) { if (a.camp.id === c.id) armed = a; });
        return {
          'קמפיין': c.id,
          'כשיר עכשיו': chk.ok ? '✅ כן' : '❌ לא',
          'סיבה': chk.why,
          'טריגר': t.type + (t.percent ? ' ' + t.percent + '%' : '') + (t.seconds ? ' ' + t.seconds + 'ש' : ''),
          'התנאי התקיים': armed ? (armed.reached ? 'כן' : 'עדיין לא') : '—',
          'תצוגות': st.imp
        };
      });
      console.table(rows);
      console.log('גלילה נוכחית: ' + Math.round(U.scrollPct()) + '% · זמן בעמוד: ' +
        Math.round((U.now() - PAGE_START) / 1000) + 'ש · הוצגו בסשן: ' + Store.session().shown.join(', ') || '(כלום)');
      return rows;
    },

    /** בדיקה מהירה: מאפס הכל ומציג קמפיין מיד */
    test: function (campId) {
      Store.reset();
      var c = null;
      (CFG.campaigns || []).forEach(function (x) { if (x.id === campId) c = x; });
      if (!c) { console.log('קמפיינים זמינים:', (CFG.campaigns || []).map(function (x) { return x.id; }).join(', ')); return; }
      API.open(campId);
    },
    significance: Stats.ztest,
    sampleSize: Stats.sampleSize,

    /** דוח ביצועים מקומי (של הדפדפן הזה — לניתוח אמיתי השתמש ב-endpoint) */
    report: function () {
      var stats = Store.state().stats, rows = [], byCamp = {};
      Object.keys(stats).forEach(function (k) {
        var p = k.split('::'), s = stats[k];
        var row = {
          קמפיין: p[0], וריאנט: p[1], תצוגות: s.imp,
          מעורבות: s.engaged, לידים: s.leads,
          'המרה %': s.imp ? +(s.leads / s.imp * 100).toFixed(2) : 0,
          'מעורבות %': s.imp ? +(s.engaged / s.imp * 100).toFixed(2) : 0
        };
        rows.push(row);
        (byCamp[p[0]] = byCamp[p[0]] || []).push({ id: p[1], n: s.imp, x: s.leads });
      });
      if (console.table) console.table(rows); else console.log(rows);

      Object.keys(byCamp).forEach(function (cid) {
        var v = byCamp[cid];
        if (v.length !== 2) return;
        var r = Stats.ztest(v[0], v[1]);
        if (!r.ok) return console.log('· ' + cid + ': ' + r.reason);
        console.log('· ' + cid + ': ' + v[0].id + ' ' + (r.rateA * 100).toFixed(2) + '% מול ' +
          v[1].id + ' ' + (r.rateB * 100).toFixed(2) + '% | שיפור ' +
          (r.lift == null ? '—' : (r.lift * 100).toFixed(1) + '%') +
          ' | p=' + r.p.toFixed(4) + ' | ' + (r.significant ? '✅ מובהק — מנצח: ' + r.winner : '⏳ עדיין לא מובהק'));
      });
      return rows;
    },

    /** כמה תצוגות לכל וריאנט צריך כדי לזהות שיפור מסוים */
    plan: function (baselineRate, relativeLift) {
      var n = Stats.sampleSize(baselineRate, relativeLift);
      console.log('נדרשות ~' + n.toLocaleString('he-IL') + ' תצוגות לכל וריאנט (' +
        (n * 2).toLocaleString('he-IL') + ' סה״כ) כדי לזהות שיפור של ' +
        (relativeLift * 100) + '% מעל ' + (baselineRate * 100) + '% בביטחון 95%.');
      return n;
    },

    _internals: { U: U, Store: Store, Stats: Stats, Analytics: Analytics, CRM: CRM, AB: AB, Flow: Flow, Reco: Reco, Triggers: Triggers, eligible: eligible, checkEligible: checkEligible, attempt: attempt }
  };

  /* ==========================================================================
   * 13. אתחול
   * ======================================================================== */
  function boot() {
    var s = Store.state(); s.pageViews++; Store.save();
    Store.purgeProg((CFG.resume || {}).days || 7);   // מחיקת התקדמות שפג תוקפה
    CRM.drain();                                     // לידים שלא נשלחו בפעם הקודמת
    var ses = Store.session(); ses.pageViews++; Store.saveSession();

    // דופק חיבור — מאפשר ל-Base44 לדעת איזו גרסת מנוע והגדרות רצות באתר בפועל
    Analytics.track('heartbeat', {
      engineBuild: API.build || 'unknown',
      configVersion: CFG.version || '',
      // מונה הפרסומים של Base44 — נחתם בהגדרות ע"י saveConfig. זה מה שמשווים מולו.
      publishedVersion: CFG.publishedVersion != null ? String(CFG.publishedVersion) : '',
      // גרסת המנוע שההגדרות מצפות לה (נחתמה בפאנל בעת הפרסום)
      requiredEngineBuild: CFG.requiredEngineBuild || '',
      engineOutdated: !!(CFG.requiredEngineBuild && API.build && API.build < CFG.requiredEngineBuild),
      configSource: API.configSource || 'inline',
      campaigns: (CFG.campaigns || []).length,
      enabledCampaigns: (CFG.campaigns || []).filter(function (c) { return c.enabled; })
        .map(function (c) { return c.id; }).join(','),
      host: location.hostname
    });
    Analytics.track('page_view', { pageViews: s.pageViews, sessionPageViews: ses.pageViews });
    Triggers.init();
    U.log('מוכן. v' + CFG.version + ' · מבקר:', s.visitorId, '· קמפיינים:', (CFG.campaigns || []).length);
  }

  /**
   * אתחול המנוע עם אובייקט הגדרות.
   * נקרא אוטומטית אם window.HYDROPOP_CONFIG כבר קיים בעמוד (התקנה עם קובץ),
   * או ידנית ע"י ה-loader אחרי משיכת ההגדרות מהשרת.
   */
  API.init = function (cfg) {
    if (API._inited || !cfg || !cfg.campaigns) return API;
    API._inited = true;
    // הגנה: הגדרות מהשרת עלולות להגיע בלי מקטעים מסוימים — משלימים ברירות מחדל
    cfg.theme = cfg.theme || {};
    if (!cfg.theme.fontFamily) cfg.theme.fontFamily = "'Assistant','Heebo',-apple-system,'Segoe UI',sans-serif";
    if (cfg.theme.bgAnim == null) cfg.theme.bgAnim = 'none';
    var themeDefaults = { radius: '22px', primary: '#0F8A5F', primaryDark: '#0A6444', accent: '#9BE564',
      accentGlow: 'rgba(155,229,100,.45)', ink: '#0B2B22', inkSoft: '#4A6B60', surface: '#FFFFFF',
      surfaceAlt: '#F3FAF6', border: '#DCEDE4', overlay: 'rgba(6,32,24,.62)', overlayBlur: '6px',
      shadow: '0 30px 80px -20px rgba(6,48,34,.45)', danger: '#D9455F' };
    for (var k in themeDefaults) if (cfg.theme[k] == null) cfg.theme[k] = themeDefaults[k];
    cfg.analytics = cfg.analytics || {};
    if (cfg.analytics.batchSize == null) cfg.analytics.batchSize = 12;
    if (cfg.analytics.flushIntervalMs == null) cfg.analytics.flushIntervalMs = 8000;
    cfg.crm = cfg.crm || { provider: 'webhook', endpoint: '' };
    cfg.suppressOnPaths = cfg.suppressOnPaths || [];
    cfg.quizzes = cfg.quizzes || [];
    cfg.resume = cfg.resume || { enabled: true, days: 7 };
    CFG = cfg;
    API.config = cfg;
    API.version = cfg.version || '';
    if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
    else boot();
    return API;
  };

  API.presets = win.HYDROPOP_PRESETS || [];   // נטען מ-hydropop.presets.js

  win.HydroPop = API;
  // תאימות לאחור: הגדרות שכבר נטענו בעמוד → אתחול מיידי
  if (win.HYDROPOP_CONFIG) API.init(win.HYDROPOP_CONFIG);

})(window, document);

/* =============================================================================
 * HydroPop Loader — תוכנת הגשר
 * -----------------------------------------------------------------------------
 * מושך את ההגדרות מה-API של אפליקציית הניהול ב-Base44 ומאתחל את המנוע.
 * נטען אחרי hydropop.engine.js (או כחלק מהבאנדל hydropop.site.js).
 *
 * התקנה באתר — שורה אחת:
 *   <script src="https://cdn.../hydropop.site.js"
 *           data-config="https://your-app.base44.app/functions/getConfig"
 *           defer></script>
 *
 * אסטרטגיית טעינה (stale-while-revalidate):
 *   1. יש עותק שמור ב-localStorage? אם הרשת לא ענתה תוך 2 שניות — מתחילים ממנו,
 *      כדי שהפופאפ לעולם לא יתעכב בגלל שרת איטי.
 *   2. התשובה הטרייה מהשרת נשמרת תמיד — ותחול מהעמוד הבא.
 *   3. אין רשת ואין עותק שמור? לא קורה כלום, בלי שגיאות למבקר.
 * =========================================================================== */
(function (win, doc) {
  'use strict';

  var script = doc.currentScript;
  var url = (script && script.getAttribute('data-config')) || win.HYDROPOP_CONFIG_URL || '';
  if (!url) { console.warn('[HydroPop] חסרה כתובת הגדרות: הוסף data-config לתג הסקריפט'); return; }

  var KEY = 'hydropop_cfg_cache_v1';
  var booted = false;

  // תומך גם בתשובה עטופה { config: {...} } וגם בהגדרות ישירות
  function normalize(d) {
    if (d && d.config && d.config.campaigns) return d.config;
    return d;
  }

  function start(cfg, source) {
    if (booted || !cfg || !cfg.campaigns) return;
    booted = true;
    if (win.HydroPop) win.HydroPop.configSource = source || 'unknown';
    if (win.HydroPop && win.HydroPop.init) win.HydroPop.init(cfg);
    else win.HYDROPOP_CONFIG = cfg;   // המנוע עוד לא נטען — יאתחל את עצמו כשיגיע
  }

  var cached = null;
  try { cached = JSON.parse(win.localStorage.getItem(KEY)); } catch (e) { }

  // רשת איטית + יש עותק שמור → לא מחכים
  if (cached) setTimeout(function () { start(cached, 'cache-timeout'); }, 2000);

  fetch(url, { cache: 'no-store' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (data) {
      var cfg = normalize(data);
      if (!cfg || !cfg.campaigns) throw new Error('תשובה ללא campaigns');
      try { win.localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) { }
      start(cfg, 'server');
    })
    ['catch'](function (e) {
      console.warn('[HydroPop] משיכת ההגדרות נכשלה (' + e.message + ') — משתמש בעותק השמור אם קיים');
      start(cached, 'cache-fallback');
    });

})(window, document);

/* חותמת בנייה — הרץ HydroPop.build בקונסול כדי לוודא איזו גרסה רצה באתר */
try{window.HydroPop.build="2026-08-15 20:13";}catch(e){}
