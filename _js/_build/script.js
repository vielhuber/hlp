"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class hlp {
  static x(input) {
    if (typeof input === 'function') {
      try {
        input = input();
        return this.x(input);
      } catch (e) {
        return false;
      }
    }
    if (input === null || input === false || typeof input === 'string' && input.trim() == '' || typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object || typeof input === 'undefined' || Array.isArray(input) && input.length === 0 || Array.isArray(input) && input.length === 1 && input[0] === '') {
      return false;
    }
    return true;
  }
  static nx(input) {
    return !this.x(input);
  }
  static true(input) {
    if (typeof input === 'function') {
      try {
        input = input();
        return this.true(input);
      } catch (e) {
        return false;
      }
    }
    if (input === undefined) {
      return false;
    }
    if (input === null) {
      return false;
    }
    if (input === false) {
      return false;
    }
    if (Array.isArray(input) && input.length === 0) {
      return false;
    }
    if (Array.isArray(input) && hlp.first(input) === '') {
      return false;
    }
    if (typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object) {
      return false;
    }
    if (input === 0) {
      return false;
    }
    if (input === '0') {
      return false;
    }
    if (input === '') {
      return false;
    }
    if (input === ' ') {
      return false;
    }
    if (input === 'null') {
      return false;
    }
    if (input === 'false') {
      return false;
    }
    return true;
  }
  static false(input) {
    if (typeof input === 'function') {
      try {
        input = input();
        return this.false(input);
      } catch (e) {
        return false;
      }
    }
    if (input === undefined) {
      return false;
    }
    if (input === null) {
      return false;
    }
    if (input === false) {
      return true;
    }
    if (Array.isArray(input) && input.length === 0) {
      return false;
    }
    if (Array.isArray(input) && hlp.first(input) === '') {
      return false;
    }
    if (typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object) {
      return false;
    }
    if (input === 0) {
      return true;
    }
    if (input === '0') {
      return true;
    }
    if (input === '') {
      return false;
    }
    if (input === ' ') {
      return false;
    }
    if (input === 'null') {
      return false;
    }
    if (input === 'false') {
      return true;
    }
    return false;
  }
  static v() {
    if (this.nx(arguments)) {
      return '';
    }
    for (let i = 0; i < arguments.length; i++) {
      if (this.x(arguments[i])) {
        return arguments[i];
      }
    }
    return '';
  }
  static loop(input, fun) {
    if (this.nx(input)) {
      return null;
    }
    if (Array.isArray(input)) {
      input.forEach((input__value, input__key) => {
        fun(input__value, input__key);
      });
    } else if (typeof input === 'object') {
      Object.entries(input).forEach(_ref => {
        let [input__key, input__value] = _ref;
        fun(input__value, input__key);
      });
    }
  }
  static map(obj, fn, ctx) {
    return Object.keys(obj).reduce((a, b) => {
      a[b] = fn.call(ctx || null, b, obj[b]);
      return a;
    }, {});
  }
  static first(input) {
    if (Array.isArray(input)) {
      var ret = null;
      input.forEach((input__value, input__key) => {
        if (ret === null) {
          ret = input__value;
        }
      });
      return ret;
    }
    if (typeof input === 'object') {
      var ret = null;
      Object.entries(input).forEach(_ref2 => {
        let [input__key, input__value] = _ref2;
        if (ret === null) {
          ret = input__value;
        }
      });
      return ret;
    }
    return null;
  }
  static last(input) {
    if (Array.isArray(input)) {
      let ret = null;
      input.forEach((input__value, input__key) => {
        ret = input__value;
      });
      return ret;
    }
    if (typeof input === 'object') {
      let ret = null;
      Object.entries(input).forEach(_ref3 => {
        let [input__key, input__value] = _ref3;
        ret = input__value;
      });
      return ret;
    }
    return null;
  }
  static rand(input) {
    if (Array.isArray(input)) {
      return input[Math.floor(Math.random() * input.length)];
    }
    if (typeof input === 'object') {
      var input = Object.values(input);
      return input[Math.floor(Math.random() * input.length)];
    }
    return null;
  }
  static random_string() {
    let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
    let chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (chars === null) {
      chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    let chars_length = chars.length,
      random_string = '';
    for (let i = 0; i < length; i++) {
      random_string += chars[~~(Math.random() * (chars_length - 1 - 0 + 1)) + 0];
    }
    return random_string;
  }
  static round() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }
  static isInteger(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
  }
  static random_int() {
    let min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 99999;
    if (!this.isInteger(min) || !this.isInteger(max)) {
      return false;
    }
    if (min > max) {
      [min, max] = [max, min];
    }
    return ~~(Math.random() * (max - min + 1)) + min;
  }
  static capitalize() {
    let string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (string === null) {
      return string;
    }
    if (string === '') {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static cookieExists(cookie_name) {
    if (document.cookie !== undefined && this.cookieGet(cookie_name) !== null) {
      return true;
    }
    return false;
  }
  static cookieGet(cookie_name) {
    var cookie_match = document.cookie.match(new RegExp(cookie_name + '=([^;]+)'));
    if (cookie_match) {
      return decodeURIComponent(cookie_match[1]);
    }
    return null;
  }
  static cookieSet(cookie_name, cookie_value, days) {
    let full_domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    let samesite = '';
    if (window.location.protocol.indexOf('https') > -1) {
      samesite = '; SameSite=None; Secure';
    }
    document.cookie = cookie_name + '=' + encodeURIComponent(cookie_value) + '; ' + 'expires=' + new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).toUTCString() + '; path=/' + samesite + '; domain=' + (full_domain === true ? this.urlHostTopLevel() : '');
  }
  static cookieDelete(cookie_name) {
    let full_domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let samesite = '';
    if (window.location.protocol.indexOf('https') > -1) {
      samesite = '; SameSite=None; Secure';
    }
    document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/' + samesite + '; domain=' + (full_domain === true ? this.urlHostTopLevel() : '');
  }
  static localStorageSet(key, value) {
    let ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    ttl = ttl * (24 * 60 * 60 * 1000);
    let now = new Date(),
      item = {
        value: value,
        expiry: now.getTime() + ttl
      };
    localStorage.setItem(key, JSON.stringify(item));
  }
  static localStorageGet(key) {
    let itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    let item = JSON.parse(itemStr),
      now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
  static localStorageDelete(key) {
    localStorage.removeItem(key);
  }
  static localStorageExists(key) {
    return this.localStorageGet(key) !== null;
  }
  static getParam(variable) {
    let url = window.location.search;
    if (this.nx(url)) {
      return null;
    }
    let query = url.substring(1),
      vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == variable && this.x(pair[1])) {
        return pair[1];
      }
    }
    return null;
  }
  static getDevice() {
    if (this.isPhone()) {
      return 'phone';
    }
    if (this.isTablet()) {
      return 'tablet';
    }
    return 'desktop';
  }
  static isPhone() {
    // based on detectmobilebrowsers.com
    let a = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
  }
  static isTablet() {
    // based on detectmobilebrowsers.com
    let a = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
  }
  static isDesktop() {
    return !this.isPhone() && !this.isTablet();
  }
  static isMobile() {
    // viewport width based OR phone based
    if (window.innerWidth < 750 || this.isPhone()) {
      return true;
    }
    return false;
  }
  static isTouch() {
    return 'ontouchstart' in window || navigator.maxTouchPoints || false;
  }
  static isMac() {
    return hlp.getOs() === 'mac';
  }
  static isLinux() {
    return hlp.getOs() === 'linux';
  }
  static isWindows() {
    return hlp.getOs() === 'windows';
  }
  static getOs() {
    let userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = 'unknown';
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'mac';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'mac';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'windows';
    } else if (/Android/.test(userAgent)) {
      os = 'linux';
    } else if (/Linux/.test(platform)) {
      os = 'linux';
    }
    return os;
  }
  static getBrowser() {
    let browser_name = '',
      isIE = /*@cc_on!@*/false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia;
    if (navigator.userAgent.indexOf('Opera') != -1 || navigator.userAgent.indexOf('OPR') != -1) {
      browser_name = 'opera';
    } else if (navigator.userAgent.indexOf('Chrome') != -1 && !isEdge) {
      browser_name = 'chrome';
    } else if (navigator.userAgent.indexOf('Safari') != -1 && !isEdge) {
      browser_name = 'safari';
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
      browser_name = 'firefox';
    } else if (navigator.userAgent.indexOf('MSIE') != -1 || !!document.documentMode == true) {
      //IF IE > 10
      browser_name = 'ie';
    } else if (isEdge) {
      browser_name = 'edge';
    } else {
      browser_name = 'unknown';
    }
    return browser_name;
  }
  static isObject(a) {
    return !!a && a.constructor === Object;
  }
  static isArray(a) {
    return !!a && a.constructor === Array;
  }
  static isString(string) {
    return typeof string === 'string' || string instanceof String;
  }
  static isDate(string) {
    if (this.nx(string)) {
      return false;
    }
    // if string is of object date
    if (Object.prototype.toString.call(string) === '[object Date]') {
      return true;
    }
    // if this is not a string
    if (!this.isString(string)) {
      return false;
    }
    // strong check
    if (string.split('-').length !== 3) {
      return false;
    }
    let day = parseInt(string.split('-')[2]),
      month = parseInt(string.split('-')[1]),
      year = parseInt(string.split('-')[0]),
      date = new Date();
    date.setFullYear(year, month - 1, day);
    if (date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day) {
      return true;
    }
    return false;
  }
  static formatNumber(number) {
    let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let dec_point = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    let thousands_sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
      dec = typeof dec_point === 'undefined' ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
  static formatDate(format) {
    let date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (date === false || date === true || date === null || date === '') {
      date = new Date();
    } else if (typeof date !== 'object') {
      date = new Date(date.replace(/-/g, '/').replace(/T|Z/g, ' '));
    }
    let string = '',
      mo = date.getMonth(),
      m1 = mo + 1,
      dow = date.getDay(),
      d = date.getDate(),
      y = date.getFullYear(),
      h = date.getHours(),
      mi = date.getMinutes(),
      s = date.getSeconds();
    for (let i = 0, len = format.length; i < len; i++) {
      switch (format[i]) {
        case 'j':
          string += d;
          break;
        case 'd':
          string += d < 10 ? '0' + d : d;
          break;
        case 'l':
          let days = Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
          string += days[dow];
          break;
        case 'w':
          string += dow;
          break;
        case 'D':
          days = Array('Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat');
          string += days[dow];
          break;
        case 'm':
          string += m1 < 10 ? '0' + m1 : m1;
          break;
        case 'n':
          string += m1;
          break;
        case 'F':
          let months = Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
          string += months[mo];
          break;
        case 'M':
          months = Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
          string += months[mo];
          break;
        case 'Y':
          string += y;
          break;
        case 'y':
          string += y.toString().slice(-2);
          break;
        case 'H':
          string += h < 10 ? '0' + h : h;
          break;
        case 'g':
          let hour = h === 0 ? 12 : h;
          string += hour > 12 ? hour - 12 : hour;
          break;
        case 'h':
          hour = h === 0 ? 12 : h;
          hour = hour > 12 ? hour - 12 : hour;
          string += hour < 10 ? '0' + hour : hour;
          break;
        case 'a':
          string += h < 12 ? 'am' : 'pm';
          break;
        case 'i':
          string += mi < 10 ? '0' + mi : mi;
          break;
        case 's':
          string += s < 10 ? '0' + s : s;
          break;
        case 'c':
          string += date.toISOString();
          break;
        default:
          string += format[i];
      }
    }
    return string;
  }
  static deepCopy(obj) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
    if (Object(obj) !== obj) return obj; // primitives
    if (hash.has(obj)) return hash.get(obj); // cyclic reference
    const result = obj instanceof Date ? new Date(obj) : obj instanceof RegExp ? new RegExp(obj.source, obj.flags) : obj.constructor ? new obj.constructor() : Object.create(null);
    hash.set(obj, result);
    if (obj instanceof Map) Array.from(obj, _ref4 => {
      let [key, val] = _ref4;
      return result.set(key, hlp.deepCopy(val, hash));
    });
    return Object.assign(result, ...Object.keys(obj).map(key => ({
      [key]: hlp.deepCopy(obj[key], hash)
    })));
  }
  static jsonStringToObject(string) {
    if (this.nx(string) || !this.isString(string)) {
      return null;
    }
    try {
      return JSON.parse(string);
    } catch (error) {
      return null;
    }
  }
  static isJsonString(string) {
    if (this.nx(string) || !this.isString(string)) {
      return false;
    }
    try {
      let json = JSON.parse(string);
      return true;
    } catch (error) {
      return false;
    }
  }
  static jsonObjectToString(object) {
    try {
      return JSON.stringify(object);
    } catch (error) {
      return null;
    }
  }
  static uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  static guid() {
    return this.uuid();
  }
  static replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }
  static replaceLast(string, search, replace) {
    let n = string.lastIndexOf(search);
    string = string.slice(0, n) + string.slice(n).replace(search, replace);
    return string;
  }
  static replaceFirst(string, search, replace) {
    return string.replace(search, replace);
  }
  static findAllPositions(searchStr, str) {
    let searchStrLen = searchStr.length,
      startIndex = 0,
      index,
      indices = [];
    if (searchStrLen == 0) {
      return [];
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }
  static findAllPositionsCaseInsensitive(searchStr, str) {
    let searchStrLen = searchStr.length,
      startIndex = 0,
      index,
      indices = [];
    if (searchStrLen == 0) {
      return [];
    }
    while ((index = this.indexOfCaseInsensitive(searchStr, str, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }
  static countAllOccurences(value, str) {
    let regExp = new RegExp(value, 'g');
    return (str.match(regExp) || []).length;
  }
  static countAllOccurencesCaseInsensitive(value, str) {
    let regExp = new RegExp(value, 'gi');
    return (str.match(regExp) || []).length;
  }
  static indexOfCaseInsensitive(searchStr, str, offset) {
    return str.toLowerCase().indexOf(searchStr.toLowerCase(), offset);
  }
  static highlight(string, query) {
    let strip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let strip_length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
    if (this.nx(string) || this.nx(query)) {
      return string;
    }
    if (strip === true) {
      let dots = '...';
      // get all query begin positions in spot
      let positions = this.findAllPositionsCaseInsensitive(query, string);
      // strip away parts
      let words = string.split(' ');
      let i = 0;
      words.forEach((words__value, words__key) => {
        let strip_now = true;
        positions.forEach(positions__value => {
          if (i >= positions__value - strip_length && i <= positions__value + query.length + strip_length - 1) {
            strip_now = false;
          }
        });
        if (strip_now === true) {
          words[words__key] = dots;
        }
        i += words__value.length + 1;
      });
      string = words.join(' ');
      while (string.indexOf(dots + ' ' + dots) > -1) {
        string = this.replaceAll(string, dots + ' ' + dots, dots);
      }
      string = string.trim();
    }
    // again: get all query begin positions in spot
    let positions = this.findAllPositionsCaseInsensitive(query, string);
    // wrap span element around them
    let wrap_begin = '<strong class="highlight">';
    let wrap_end = '</strong>';
    for (let x = 0; x < positions.length; x++) {
      string = string.substring(0, positions[x]) + wrap_begin + string.substring(positions[x], positions[x] + query.length) + wrap_end + string.substring(positions[x] + query.length);
      // shift other positions
      for (let y = x + 1; y < positions.length; y++) {
        positions[y] = positions[y] + wrap_begin.length + wrap_end.length;
      }
    }
    return string;
  }
  static get(url) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return this.call('GET', url, args);
  }
  static post(url) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return this.call('POST', url, args);
  }
  static call(method, url) {
    let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (args === null) {
      args = {};
    }
    if (!('data' in args)) {
      args.data = {};
    }
    if (!('headers' in args)) {
      args.headers = null;
    }
    if (!('throttle' in args)) {
      args.throttle = 0;
    }
    if (!('allow_errors' in args)) {
      args.allow_errors = true;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.indexOf('http') !== 0) {
          url = hlp.baseUrl() + '/' + url;
        }
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (method === 'POST') {
          if ('data' in args && args.data !== null && typeof args.data === 'object' && !(args.data instanceof FormData)) {
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            args.data = JSON.stringify(args.data);
          }
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }
        if (this.x(args.headers)) {
          Object.entries(args.headers).forEach(_ref5 => {
            let [headers__key, headers__value] = _ref5;
            xhr.setRequestHeader(headers__key, headers__value);
          });
        }
        xhr.onload = () => {
          if (xhr.readyState != 4 || args.allow_errors !== true && xhr.status != 200 && xhr.status != 304) {
            if (this.isJsonString(xhr.responseText)) {
              reject(this.jsonStringToObject(xhr.responseText));
            } else {
              reject(xhr.responseText);
            }
          }
          if (this.isJsonString(xhr.responseText)) {
            resolve(this.jsonStringToObject(xhr.responseText));
          } else {
            resolve(xhr.responseText);
          }
        };
        xhr.onerror = () => {
          reject([xhr.readyState, xhr.status, xhr.statusText]);
        };
        if (method === 'GET') {
          xhr.send(null);
        }
        if (method === 'POST') {
          xhr.send(args.data);
        }
      }, args.throttle);
    });
  }
  static onResizeHorizontal(fun) {
    let windowWidth = window.innerWidth,
      windowWidthNew,
      timeout;
    window.addEventListener('resize', () => {
      windowWidthNew = window.innerWidth;
      if (windowWidthNew != windowWidth) {
        windowWidth = windowWidthNew;
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = window.setTimeout(() => {
          fun();
        }, 50);
      }
    });
    fun();
  }
  static onResizeVertical(fun) {
    var windowHeight = window.innerHeight,
      windowHeightNew,
      timeout;
    window.addEventListener('resize', () => {
      windowHeightNew = window.innerHeight;
      if (windowHeightNew != windowHeight) {
        windowHeight = windowHeightNew;
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = window.setTimeout(() => {
          fun();
        }, 50);
      }
    });
    fun();
  }
  static removeEmpty(array) {
    if (this.nx(array) || !Array.isArray(array)) {
      return array;
    }
    array = array.filter(array__value => {
      return this.x(array__value);
    });
    return array;
  }
  static uniqueArray(array) {
    let seen = {},
      ret_arr = [];
    for (let i = 0; i < array.length; i++) {
      if (!(array[i] in seen)) {
        ret_arr.push(array[i]);
        seen[array[i]] = true;
      }
    }
    return ret_arr;
  }
  static powerset(array) {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]]);
  }
  static charToInt(val) {
    val = val.toUpperCase();
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      i,
      j,
      result = 0;
    for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1) {
      result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
    }
    return result;
  }
  static intToChar(num) {
    for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
      ret = String.fromCharCode(parseInt(num % b / a) + 65) + ret;
    }
    return ret;
  }
  static slugify(text) {
    return text.toString().toLowerCase().trim().split('ä').join('ae').split('ö').join('oe').split('ü').join('ue').split('ß').join('ss').replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, ''); // remove leading, trailing -
  }
  static incChar(char) {
    let shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return this.intToChar(this.charToInt(char) + shift);
  }
  static decChar(char) {
    let shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return this.intToChar(this.charToInt(char) - shift);
  }
  static range(start, end) {
    let range = [],
      typeofStart = typeof start,
      typeofEnd = typeof end,
      step = 1;
    if (typeofStart == 'undefined' || typeofEnd == 'undefined' || typeofStart != typeofEnd) {
      return null;
    }
    if (end < start) {
      step = -step;
    }
    if (typeofStart == 'number') {
      while (step > 0 ? end >= start : end <= start) {
        range.push(start);
        start += step;
      }
    } else if (typeofStart == 'string') {
      if (start.length != 1 || end.length != 1) {
        return null;
      }
      start = start.charCodeAt(0);
      end = end.charCodeAt(0);
      while (step > 0 ? end >= start : end <= start) {
        range.push(String.fromCharCode(start));
        start += step;
      }
    } else {
      return null;
    }
    return range;
  }
  static dateToWeek() {
    let d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (d === null) {
      d = new Date();
    }
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)),
      weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekNo;
  }
  static weekToDate(week, year) {
    if (year == null) {
      year = new Date().getFullYear();
    }
    let date = new Date();
    date.setYear(year);
    date.setDate(1);
    date.setMonth(0);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    let FIRST_DAY_OF_WEEK = 1;
    let WEEK_LENGTH = 7;
    let day = date.getDay();
    day = day === 0 ? 7 : day;
    let dayOffset = -day + FIRST_DAY_OF_WEEK;
    if (WEEK_LENGTH - day + 1 < 4) {
      dayOffset += WEEK_LENGTH;
    }
    date = new Date(date.getTime() + dayOffset * 24 * 60 * 60 * 1000);
    let weekTime = 1000 * 60 * 60 * 24 * 7 * (week - 1);
    let targetTime = date.getTime() + weekTime;
    date.setTime(targetTime);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }
  static addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  static objectsAreEqual(x, y) {
    var _this = this;
    if (x === null || x === undefined || y === null || y === undefined) {
      return x === y;
    }
    if (x.constructor !== y.constructor) {
      return false;
    }
    if (x instanceof Function) {
      return x === y;
    }
    if (x instanceof RegExp) {
      return x === y;
    }
    if (x === y || x.valueOf() === y.valueOf()) {
      return true;
    }
    if (Array.isArray(x) && x.length !== y.length) {
      return false;
    }
    if (x instanceof Date) {
      return false;
    }
    if (!(x instanceof Object)) {
      return false;
    }
    if (!(y instanceof Object)) {
      return false;
    }
    var p = Object.keys(x);
    return Object.keys(y).every(function (i) {
      return p.indexOf(i) !== -1;
    }) && p.every(function (i) {
      return _this.objectsAreEqual(x[i], y[i]);
    });
  }
  static containsObject(obj, list) {
    var x;
    for (x in list) {
      if (list.hasOwnProperty(x) && this.objectsAreEqual(list[x], obj)) {
        return true;
      }
    }
    return false;
  }
  static fadeOut(el) {
    let speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    if (speed <= 25) {
      speed = 25;
    }
    return new Promise(resolve => {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 25 / speed) < 0) {
          el.style.display = 'none';
          resolve();
        } else {
          requestAnimationFrame(fade);
        }
      })();
    });
  }
  static fadeIn(el) {
    let speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    if (speed <= 25) {
      speed = 25;
    }
    return new Promise(resolve => {
      el.style.opacity = 0;
      el.style.display = 'block';
      (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += 25 / speed) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        } else {
          resolve();
        }
      })();
    });
  }
  static scrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static scrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static closestScrollable(node) {
    let isElement = node instanceof HTMLElement,
      overflowY = isElement && window.getComputedStyle(node).overflowY,
      isScrollable = overflowY && !(overflowY.includes('hidden') || overflowY.includes('visible'));
    if (!node) {
      return null;
    } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
      return node;
    }
    return this.closestScrollable(node.parentNode) || document.scrollingElement || document.body;
  }
  static offsetTop(el) {
    return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop;
  }
  static offsetLeft(el) {
    return el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft;
  }
  static offsetRight(el) {
    return el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft + el.offsetWidth;
  }
  static offsetBottom(el) {
    return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop + el.offsetHeight;
  }
  static offsetTopWithMargin(el) {
    return this.offsetTop(el) - parseInt(getComputedStyle(el).marginTop);
  }
  static offsetLeftWithMargin(el) {
    return this.offsetLeft(el) - parseInt(getComputedStyle(el).marginLeft);
  }
  static offsetRightWithMargin(el) {
    return this.offsetRight(el) + parseInt(getComputedStyle(el).marginRight);
  }
  static offsetBottomWithMargin(el) {
    return this.offsetBottom(el) + parseInt(getComputedStyle(el).marginBottom);
  }
  static documentHeight() {
    return Math.max(document.body.offsetHeight, document.body.scrollHeight, document.documentElement.clientHeight, document.documentElement.offsetHeight, document.documentElement.scrollHeight);
  }
  static documentWidth() {
    return document.documentElement.clientWidth || document.body.clientWidth;
  }
  static windowWidth() {
    return window.innerWidth;
  }
  static windowHeight() {
    return window.innerHeight;
  }
  static windowWidthWithoutScrollbar() {
    return document.documentElement.clientWidth || document.body.clientWidth;
  }
  static windowHeightWithoutScrollbar() {
    return document.documentElement.clientHeight || document.body.clientHeight;
  }
  static outerWidthWithMargin(el) {
    return el.offsetWidth + parseInt(getComputedStyle(el).marginLeft) + parseInt(getComputedStyle(el).marginRight);
  }
  static outerHeightWithMargin(el) {
    return el.offsetHeight + parseInt(getComputedStyle(el).marginTop) + parseInt(getComputedStyle(el).marginBottom);
  }
  static async cursorPosition() {
    // https://stackoverflow.com/a/43326327/2068362
    document.head.insertAdjacentHTML('afterbegin', `
                <style type="text/css">
                    .find-pointer-quad {
                        --hit: 0;
                        position: fixed;
	                    z-index:2147483647;
                        transform: translateZ(0);
                        &:hover { --hit: 1; }
                    }
                </style>
            `);
    window.cursorPositionDelay = 50;
    window.cursorPositionQuads = [];
    let dim = 10;
    let createQuad = (_, pos) => {
      let a = document.createElement('a');
      a.classList.add('find-pointer-quad');
      let {
        style
      } = a;
      style.top = pos < 2 ? 0 : `${dim}%`;
      style.left = pos % 2 === 0 ? 0 : `${dim}%`;
      style.width = style.height = `${dim}%`;
      document.body.appendChild(a);
      return a;
    };
    window.cursorPositionQuads = [1, 2, 3, 4].map(createQuad);
    return this.cursorPositionBisect(dim);
  }
  static cursorPositionBisect(dim) {
    let hit;
    window.cursorPositionQuads.some(a => {
      let style = getComputedStyle(a);
      let result = style.getPropertyValue(`--hit`);
      if (result === `1`) return hit = {
        style,
        a
      };
    });
    if (!hit) {
      let [q1] = window.cursorPositionQuads;
      let reset = Math.abs(dim) > 10000;
      let top = parseFloat(q1.style.top) - dim / 2;
      let left = parseFloat(q1.style.left) - dim / 2;
      window.cursorPositionQuads.forEach((_ref6, pos) => {
        let {
          style
        } = _ref6;
        if (reset) {
          style.top = pos < 2 ? 0 : `${dim}%`;
          style.left = pos % 2 === 0 ? 0 : `${dim}%`;
          style.width = style.height = `${dim}%`;
        } else {
          style.top = pos < 2 ? `${top}%` : `${top + dim}%`;
          style.left = pos % 2 === 0 ? `${left}%` : `${left + dim}%`;
          style.width = `${dim}%`;
          style.height = `${dim}%`;
        }
      });
      return new Promise(resolve => {
        setTimeout(() => resolve(this.cursorPositionBisect(!reset ? 2 * dim : dim)), window.cursorPositionDelay);
      });
    }
    let {
      style,
      a
    } = hit;
    let {
      top,
      left,
      width,
      height
    } = a.getBoundingClientRect();
    if (width < 3) {
      window.cursorPositionQuads.forEach(a => a.remove());
      return {
        x: Math.round(left + width / 2 + window.scrollX),
        y: Math.round(top + height / 2 + window.scrollY)
      };
    }
    let ox = a.style.left;
    let oy = a.style.top;
    let nextStep = dim / 2;
    window.cursorPositionQuads.forEach((_ref7, pos) => {
      let {
        style
      } = _ref7;
      style.top = pos < 2 ? oy : `${nextStep + parseFloat(oy)}%`;
      style.left = pos % 2 === 0 ? ox : `${nextStep + parseFloat(ox)}%`;
      style.width = `${nextStep}%`;
      style.height = `${nextStep}%`;
    });
    return new Promise(resolve => {
      setTimeout(() => resolve(this.cursorPositionBisect(nextStep)), window.cursorPositionDelay);
    });
  }
  static scrollTo(to) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    let element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let only_up = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    return new Promise(resolve => {
      if (element === null) {
        element = document.scrollingElement || document.documentElement;
      }
      if (!hlp.isNumeric(to)) {
        if (element === (document.scrollingElement || documentElement)) {
          to = this.offsetTopWithMargin(to);
        } else {
          to = to.getBoundingClientRect().top - parseInt(getComputedStyle(to).marginTop) - (element.getBoundingClientRect().top - element.scrollTop - parseInt(getComputedStyle(element).marginTop));
        }
      }
      let offset_calc = 0;
      if (!Array.isArray(offset)) {
        offset = [offset];
      }
      offset.forEach(offset__value => {
        if (hlp.isNumeric(offset__value)) {
          offset_calc += offset__value;
        } else {
          if (offset__value !== null) {
            if (window.getComputedStyle(offset__value).position === 'fixed') {
              offset_calc += -1 * offset__value.offsetHeight;
            }
          }
        }
      });
      to += offset_calc;
      const start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        },
        easeInOutCirc = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
          t -= 2;
          return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
        },
        animateScroll = function () {
          const currentDate = +new Date();
          const currentTime = currentDate - startDate;
          element.scrollTop = parseInt(easeInOutCirc(currentTime, start, change, duration));
          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          } else {
            element.scrollTop = to;
            resolve();
          }
        };
      if (only_up === true && change > 0) {
        resolve();
        return;
      }
      animateScroll();
    });
  }
  static loadJs(urls) {
    if (!hlp.isArray(urls)) {
      urls = [urls];
    }
    let promises = [];
    hlp.loop(urls, (urls__value, urls__key) => {
      promises.push(new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = urls__value;
        script.onload = () => {
          resolve();
        };
        document.head.appendChild(script);
      }));
    });
    return Promise.all(promises);
  }
  static async loadJsSequentially(urls) {
    if (!hlp.isArray(urls)) {
      urls = [urls];
    }
    for (let urls__value of urls) {
      await hlp.loadJs(urls__value);
    }
    return;
  }
  static triggerAfterAllImagesLoaded(selectorContainer, selectorImage, fn) {
    window.addEventListener('load', e => {
      if (document.querySelector(selectorContainer + ' ' + selectorImage) !== null) {
        document.querySelectorAll(selectorContainer + ' ' + selectorImage).forEach(el => {
          this.triggerAfterAllImagesLoadedBindLoadEvent(el, selectorContainer, selectorImage, fn);
        });
      }
    });
    document.addEventListener('DOMContentLoaded', () => {
      if (document.querySelector(selectorContainer) !== null) {
        new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              mutation.addedNodes.forEach(el => {
                this.triggerAfterAllImagesLoadedHandleEl(el, selectorContainer, selectorImage, fn);
              });
            } else if (mutation.type === 'attributes' && mutation.attributeName === 'src' && mutation.target.classList.contains(selectorImage.replace('.', '')) && mutation.oldValue !== mutation.target.getAttribute('src')) {
              this.triggerAfterAllImagesLoadedHandleEl(mutation.target, selectorContainer, selectorImage, fn);
            }
          });
        }).observe(document.querySelector(selectorContainer), {
          attributes: true,
          childList: true,
          characterData: false,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: false
        });
      }
    });
  }
  static triggerAfterAllImagesLoadedHandleEl(el, selectorContainer, selectorImage, fn) {
    if (el.nodeType === Node.ELEMENT_NODE) {
      el.classList.remove('loaded-img');
      el.closest(selectorContainer).classList.remove('loaded-all');
      // only bind if not yet binded
      if (!el.classList.contains('binded-trigger')) {
        el.classList.add('binded-trigger');
        el.addEventListener('load', () => {
          this.triggerAfterAllImagesLoadedBindLoadEvent(el, selectorContainer, selectorImage, fn);
        });
      }
    }
  }
  static triggerAfterAllImagesLoadedBindLoadEvent(el, selectorContainer, selectorImage, fn) {
    el.classList.add('loaded-img');
    if (el.closest(selectorContainer).querySelectorAll('.loaded-img').length === el.closest(selectorContainer).querySelectorAll(selectorImage).length) {
      el.closest(selectorContainer).classList.add('loaded-all');
      fn();
    }
  }
  static isVisible(el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
  static isVisibleInViewport(el) {
    if (!this.isVisible(el)) {
      return false;
    }
    let rect = el.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight);
  }
  static textareaAutoHeight() {
    let selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'textarea';
    this.textareaSetHeights(selector);
    this.onResizeHorizontal(() => {
      this.textareaSetHeights(selector);
    });
    [].forEach.call(document.querySelectorAll(selector), el => {
      el.addEventListener('keyup', e => {
        this.textareaSetHeight(e.target);
      });
    });
  }
  static textareaSetHeights() {
    let selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'textarea';
    [].forEach.call(document.querySelectorAll(selector), el => {
      if (this.isVisible(el)) {
        this.textareaSetHeight(el);
      }
    });
  }
  static textareaSetHeight(el) {
    el.style.height = '5px';
    el.style.height = el.scrollHeight + 'px';
  }
  static real100vh() {
    let selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    if (selector === null) {
      // apply trick from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
      let fn = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      fn();
      window.addEventListener('resize', () => {
        fn();
      });
    } else {
      let fn = () => {
        console.log(selector);
        if (document.querySelector(selector) !== null) {
          document.querySelectorAll(selector).forEach(selector__value => {
            selector__value.style.height = window.innerHeight * (percent / 100) + 'px';
          });
        }
      };
      fn();
      window.addEventListener('resize', () => {
        fn();
      });
    }
  }
  static iOsRemoveHover() {
    if (hlp.getBrowser() === 'safari' && hlp.getDevice() !== 'desktop') {
      hlp.on('touchend', 'a', (e, el) => {
        el.click();
      });
    }
  }
  static isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  static animate(el, from, to, easing, duration) {
    return new Promise(resolve => {
      // on durations smaller than 50, the end event does not trigger!
      if (duration <= 50) {
        duration = 50;
      }
      let properties = [];
      from.split(';').forEach(from__value => {
        properties.push(from__value.split(':')[0].trim());
      });
      let transition = [];
      properties.forEach(properties__value => {
        transition.push(properties__value + ' ' + Math.round(duration / 1000 * 10) / 10 + 's ' + easing);
      });
      transition = 'transition: ' + transition.join(', ') + ' !important;';
      let els = null;
      if (NodeList.prototype.isPrototypeOf(el)) {
        els = Array.from(el);
      } else if (el === null) {
        console.log('cannot animate element from ' + from + ' to ' + to + ' because it does not exist');
        resolve();
      } else {
        els = [el];
      }
      let toFinish = els.length;
      els.forEach((els__value, els__key) => {
        // add random class
        let random_class = hlp.random_string(10, 'abcdefghijklmnopqrstuvwxyz');
        els__value.classList.add(random_class);
        window.requestAnimationFrame(() => {
          // set from style inline (don't fully remove previous style)
          let new_style = [];
          let prev_style = els__value.getAttribute('style');
          if (prev_style !== null) {
            prev_style.split(';').forEach(prev_style__value => {
              if (!properties.includes(prev_style__value.split(':')[0].trim())) {
                new_style.push(prev_style__value);
              }
            });
          }
          new_style = new_style.join(';') + ';' + from + ';';
          els__value.setAttribute('style', new_style);
          window.requestAnimationFrame(() => {
            // add transition property
            let style = document.createElement('style');
            style.innerHTML = '.' + random_class + ' { ' + transition + ' }';
            document.head.appendChild(style);
            window.requestAnimationFrame(() => {
              // set last style inline
              els__value.setAttribute('style', els__value.getAttribute('style').replace(from + ';', '') + to + ';');
              if (this.isVisible(els__value)) {
                let fired = false;
                hlp.addEventListenerOnce(els__value, 'transitionend', event => {
                  fired = true;

                  // transitionend fires also, when animating child elements
                  // the following line ensures, that those events do not bubble up
                  // in that case, we return false and ensure, the event listener is still alive
                  if (event.target !== event.currentTarget) {
                    return false;
                  }

                  // remove previous styles property
                  document.head.removeChild(style);

                  // remove random class
                  els__value.classList.remove(random_class);

                  // resolve promise when last is finished
                  toFinish--;
                  if (toFinish <= 0) {
                    window.requestAnimationFrame(() => {
                      resolve();
                    });
                  }
                });

                // safeguard
                // in some edge cases, transitionend does not fire
                setTimeout(() => {
                  if (fired === false) {
                    document.head.removeChild(style);
                    els__value.classList.remove(random_class);
                    toFinish--;
                    if (toFinish <= 0) {
                      resolve();
                    }
                  }
                }, duration * 1.5);
              } else {
                document.head.removeChild(style);
                els__value.classList.remove(random_class);
                toFinish--;
                if (toFinish <= 0) {
                  resolve();
                }
              }
            });
          });
        });
      });
    });
  }
  static addEventListenerOnce(target, type, listener, addOptions, removeOptions) {
    target.addEventListener(type, function fn(event) {
      let result = listener.apply(this, arguments, addOptions);
      if (result !== false) {
        target.removeEventListener(type, fn, removeOptions);
      }
    });
  }
  static htmlDecode(value) {
    let tmp = document.createElement('textarea');
    tmp.innerHTML = value;
    return tmp.value;
  }
  static htmlEncode(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/`/g, '&#96;');
  }
  static nl2br(str) {
    if (typeof str === 'undefined' || str === null) {
      return '';
    }
    let breakTag = '<br/>',
      replaceStr = '$1' + breakTag;
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
  }
  static br2nl(str) {
    if (typeof str === 'undefined' || str === null) {
      return '';
    }
    let replaceStr = '\n';
    return str.replace(/<\s*\/?br\s*[\/]?>/gi, replaceStr);
  }
  static closest(el, selector) {
    if (!document.documentElement.contains(el)) {
      return null;
    }
    do {
      if (this.matches(el, selector)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  }
  static matches(el, selector) {
    let node = el,
      nodes = (node.parentNode || node.document).querySelectorAll(selector),
      i = -1;
    while (nodes[++i] && nodes[i] != node);
    return !!nodes[i];
  }
  static wrap(el, html) {
    if (el === null) {
      return;
    }
    let wrapper = new DOMParser().parseFromString(html, 'text/html').body.childNodes[0];
    el.parentNode.insertBefore(wrapper, el.nextSibling);
    wrapper.appendChild(el);
  }
  static wrapTextNodes(el, tag) {
    if (el === null) {
      return;
    }
    Array.from(el.childNodes).filter(node => node.nodeType === 3 && node.textContent.trim().length > 1).forEach(node => {
      const wrapper = document.createElement(tag);
      node.after(wrapper);
      wrapper.appendChild(node);
    });
  }
  static html2dom(html) {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    if (template.content === undefined) {
      return this.html2domLegacy(html);
    }
    return template.content.firstChild;
  }
  static html2domLegacy(html) {
    /* source: https://gist.github.com/Munawwar/6e6362dbdf77c7865a99 */
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      rtagName = /<([\w:]+)/,
      rhtml = /<|&#?\w+;/,
      wrapMap = {
        option: [1, "<select multiple='multiple'>", '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', '']
      },
      context = document;
    var tmp,
      tag,
      wrap,
      j,
      fragment = context.createDocumentFragment();
    if (!rhtml.test(html)) {
      fragment.appendChild(context.createTextNode(html));
    } else {
      tmp = fragment.appendChild(context.createElement('div'));
      tag = (rtagName.exec(html) || ['', ''])[1].toLowerCase();
      wrap = wrapMap[tag] || wrapMap._default;
      tmp.innerHTML = wrap[1] + html.replace(rxhtmlTag, '<$1></$2>') + wrap[2];
      j = wrap[0];
      while (j--) {
        tmp = tmp.lastChild;
      }
      fragment.removeChild(fragment.firstChild);
      while (tmp.firstChild) {
        fragment.appendChild(tmp.firstChild);
      }
    }
    return fragment.querySelector('*');
  }
  static prev(elem, filter) {
    let prev = elem.previousElementSibling;
    if (prev === null) {
      return null;
    }
    if (filter === undefined || this.matches(prev, filter)) {
      return prev;
    }
    return null;
  }
  static next(elem, filter) {
    let next = elem.nextElementSibling;
    if (next === null) {
      return null;
    }
    if (filter === undefined || this.matches(next, filter)) {
      return next;
    }
    return null;
  }
  static prevAll(elem, filter) {
    let sibs = [];
    while (elem = elem.previousElementSibling) {
      if (filter === undefined || this.matches(elem, filter)) {
        sibs.push(elem);
      }
    }
    return sibs;
  }
  static nextAll(elem, filter) {
    let sibs = [];
    while (elem = elem.nextElementSibling) {
      if (filter === undefined || this.matches(elem, filter)) {
        sibs.push(elem);
      }
    }
    return sibs;
  }
  static prevUntil(elem, filter) {
    let sibs = [];
    while (elem = elem.previousElementSibling) {
      if (!this.matches(elem, filter)) {
        sibs.push(elem);
      } else {
        break;
      }
    }
    return sibs;
  }
  static nextUntil(elem, filter) {
    let sibs = [];
    while (elem = elem.nextElementSibling) {
      if (!this.matches(elem, filter)) {
        sibs.push(elem);
      } else {
        break;
      }
    }
    return sibs;
  }
  static siblings(elem, filter) {
    let sibs = [];
    let self = elem;
    elem = elem.parentNode.firstChild;
    while (elem = elem.nextElementSibling) {
      if (filter === undefined || this.matches(elem, filter)) {
        if (self !== elem) {
          sibs.push(elem);
        }
      }
    }
    return sibs;
  }
  static parents(elem, selector) {
    let elements = [];
    let ishaveselector = selector !== undefined;
    while ((elem = elem.parentElement) !== null) {
      if (elem.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }
      if (!ishaveselector || this.matches(elem, selector)) {
        elements.push(elem);
      }
    }
    return elements;
  }
  static css(el) {
    let sheets = document.styleSheets,
      o = {};
    for (let sheets__key in sheets) {
      try {
        let rules = sheets[sheets__key].rules || sheets[sheets__key].cssRules;
        for (let rules__key in rules) {
          if (this.matches(el, rules[rules__key].selectorText)) {
            o = Object.assign(o, this.css2json(rules[rules__key].style), this.css2json(el.getAttribute('style')));
          }
        }
      } catch (e) {}
    }
    return o;
  }
  static css2json(css) {
    let obj = {};
    if (!css) {
      return obj;
    }
    if (css instanceof CSSStyleDeclaration) {
      for (let css__key in css) {
        if (css[css__key].toLowerCase && css[css[css__key]] !== undefined) {
          obj[css[css__key].toLowerCase()] = css[css[css__key]];
        }
      }
    } else if (typeof css == 'string') {
      css = css.split(';');
      for (let css__key in css) {
        if (css[css__key].indexOf(':') > -1) {
          let val = css[css__key].split(':');
          obj[val[0].toLowerCase().trim()] = val[1].trim();
        }
      }
    }
    return obj;
  }
  static compareDates(d1, d2) {
    // safari has problems in parsing "2019-01-01 00:00:00"
    if (typeof d1 === 'string') {
      d1 = d1.split(' ').join('T');
    }
    if (typeof d2 === 'string') {
      d2 = d2.split(' ').join('T');
    }
    d1 = new Date(d1);
    d2 = new Date(d2);
    d1.setHours(0);
    d1.setMinutes(0);
    d1.setSeconds(0);
    d1.setMilliseconds(0);
    d2.setHours(0);
    d2.setMinutes(0);
    d2.setSeconds(0);
    d2.setMilliseconds(0);
    if (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()) {
      return 0;
    }
    if (d1 < d2) {
      return -1;
    }
    return 1;
  }
  static spaceship(val1, val2) {
    if (val1 === null || val2 === null || typeof val1 != typeof val2) {
      return null;
    }
    if (typeof val1 === 'string') {
      return val1.localeCompare(val2);
    } else {
      if (val1 > val2) {
        return 1;
      } else if (val1 < val2) {
        return -1;
      }
      return 0;
    }
  }
  static focus(selector) {
    hlp.unfocus();
    let el = null;
    if (typeof selector === 'string' || selector instanceof String) {
      el = document.querySelector(selector);
    } else {
      el = selector;
    }
    if (el !== null) {
      let mask = document.createElement('div');
      mask.classList.add('hlp-focus-mask');
      mask.style.position = 'fixed';
      mask.style.top = 0;
      mask.style.bottom = 0;
      mask.style.left = 0;
      mask.style.right = 0;
      mask.style.backgroundColor = 'rgba(0,0,0,0.8)';
      mask.style.zIndex = 2147483646;
      el.before(mask);
      el.setAttribute('data-focussed', 1);
      el.setAttribute('data-focussed-orig-z-index', el.style.zIndex);
      el.setAttribute('data-focussed-orig-position', el.style.position);
      el.setAttribute('data-focussed-orig-background-color', el.style.backgroundColor);
      el.setAttribute('data-focussed-orig-box-shadow', el.style.boxShadow);
      el.style.zIndex = 2147483647;
      el.style.position = 'relative';
      el.style.backgroundColor = '#ffffff';
      el.style.boxShadow = '0px 0px 0px 20px #fff';
    }
  }
  static unfocus() {
    if (document.querySelector('.hlp-focus-mask') !== null) {
      document.querySelectorAll('.hlp-focus-mask').forEach(el => {
        hlp.remove(el);
      });
    }
    if (document.querySelector('[data-focussed]') !== null) {
      document.querySelectorAll('[data-focussed]').forEach(el => {
        el.style.zIndex = el.getAttribute('data-focussed-orig-z-index');
        el.style.position = el.getAttribute('data-focussed-orig-position');
        el.style.backgroundColor = el.getAttribute('data-focussed-orig-background-color');
        el.style.boxShadow = el.getAttribute('data-focussed-orig-box-shadow');
        el.removeAttribute('data-focussed');
        el.removeAttribute('data-focussed-orig-z-index');
        el.removeAttribute('data-focussed-orig-position');
        el.removeAttribute('data-focussed-orig-background-color');
        el.removeAttribute('data-focussed-orig-box-shadow');
      });
    }
  }
  static remove(el) {
    if (el !== null) {
      el.parentNode.removeChild(el);
    }
  }
  static on(event, selector, scope) {
    let callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    if (callback === null) {
      callback = scope;
      scope = document;
    } else {
      scope = document.querySelector(scope);
    }
    scope.addEventListener(event, e => {
      var el = hlp.closest(e.target, selector);
      if (el) {
        callback(e, el);
      }
    }, false);
  }
  static url() {
    return window.location.protocol + '//' + window.location.host + window.location.pathname;
  }
  static urlWithHash() {
    return window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.hash;
  }
  static fullUrl() {
    return window.location.href;
  }
  static urlWithArgs() {
    return window.location.href.split('#')[0];
  }
  static baseUrl() {
    return window.location.protocol + '//' + window.location.host;
  }
  static urlProtocol() {
    return window.location.protocol + '//';
  }
  static urlHost() {
    return window.location.host;
  }
  static urlHostTopLevel() {
    let host = window.location.host;
    // ipv4
    if (host.match(/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/)) {
      return host;
    }
    host = host.split('.');
    while (host.length > 2) {
      host.shift();
    }
    host = host.join('.');
    return host;
  }
  static urlPath() {
    return window.location.pathname;
  }
  static urlHash() {
    return window.location.hash;
  }
  static urlArgs() {
    return window.location.search;
  }
  static urlOfScript() {
    if (document.currentScript) {
      return document.currentScript.src;
    } else {
      let scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1].src;
    }
  }
  static pathOfScript() {
    let script = this.urlOfScript(),
      path = script.substring(0, script.lastIndexOf('/'));
    return path;
  }
  static waitUntil(selector) {
    let css_option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let css_value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return new Promise((resolve, reject) => {
      let timeout = setInterval(() => {
        if (document.querySelector(selector) !== null && (css_option === null || css_value === null && window.getComputedStyle(document.querySelector(selector))[css_option] !== undefined && window.getComputedStyle(document.querySelector(selector))[css_option] != '' || css_value !== null && window.getComputedStyle(document.querySelector(selector))[css_option] === css_value)) {
          window.clearInterval(timeout);
          resolve();
        }
      }, 30);
    });
  }
  static waitUntilEach(selector, callback) {
    let observer = new MutationObserver(() => {
      let elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        elements.forEach(element => {
          if (!element.__processed) {
            element.__processed = true;
            callback(element);
          }
        });
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    let initialElements = document.querySelectorAll(selector);
    if (initialElements.length > 0) {
      initialElements.forEach(element => {
        if (!element.__processed) {
          element.__processed = true;
          callback(element);
        }
      });
    }
  }
  static waitUntilVar() {
    let arg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let arg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let varName = null,
      parentContainer = null;
    if (arg2 === null) {
      varName = arg1;
      parentContainer = window;
    } else {
      varName = arg2;
      parentContainer = arg1;
    }
    return new Promise((resolve, reject) => {
      let timeout = setInterval(() => {
        if (parentContainer[varName] !== undefined && parentContainer[varName] !== null) {
          if (value === null || parentContainer[varName] === value) {
            window.clearInterval(timeout);
            resolve();
          }
        }
      }, 30);
    });
  }
  static ready() {
    return new Promise(resolve => {
      if (document.readyState !== 'loading') {
        return resolve();
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          return resolve();
        });
      }
    });
  }
  static load() {
    return new Promise(resolve => {
      if (document.readyState === 'complete') {
        return resolve();
      } else {
        window.addEventListener('load', () => {
          return resolve();
        });
      }
    });
  }
  static runForEl(selector, callback) {
    hlp.ready().then(() => {
      // add unique id
      let id = hlp.pushId();

      // also run for existing
      if (document.querySelector(selector) !== null) {
        document.querySelectorAll(selector).forEach(el => {
          if (el.runForEl === undefined) {
            el.runForEl = [];
          }
          if (!el.runForEl.includes(id)) {
            el.runForEl.push(id);
            callback(el);
          }
        });
      }
      // setup queue
      if (window.runForEl_queue === undefined) {
        window.runForEl_queue = [];
      }
      // setup observer
      if (window.runForEl_observer === undefined) {
        window.runForEl_observer = new MutationObserver(mutations => {
          mutations.forEach(mutations__value => {
            if (!mutations__value.addedNodes) {
              return;
            }
            for (let i = 0; i < mutations__value.addedNodes.length; i++) {
              let node = mutations__value.addedNodes[i];
              if (node.nodeType === Node.ELEMENT_NODE) {
                window.runForEl_queue.forEach(queue__value => {
                  if (node.matches(queue__value.selector)) {
                    if (node.runForEl === undefined) {
                      node.runForEl = [];
                    }
                    if (!node.runForEl.includes(queue__value.id)) {
                      node.runForEl.push(queue__value.id);
                      queue__value.callback(node);
                    }
                  }
                  // if you modify lots of html (e.g. with innerHTML), also check childs
                  if (node.querySelector(queue__value.selector) !== null) {
                    node.querySelectorAll(queue__value.selector).forEach(nodes__value => {
                      if (nodes__value.runForEl === undefined) {
                        nodes__value.runForEl = [];
                      }
                      if (!nodes__value.runForEl.includes(queue__value.id)) {
                        nodes__value.runForEl.push(queue__value.id);
                        queue__value.callback(nodes__value);
                      }
                    });
                  }
                });
              }
            }
          });
        }).observe(document.body, {
          attributes: false,
          childList: true,
          characterData: false,
          subtree: true,
          attributeOldValue: false,
          characterDataOldValue: false
        });
      }
      // push to queue
      window.runForEl_queue.push({
        id: id,
        selector: selector,
        callback: callback
      });
    });
  }
  static fmath(op, x, y) {
    let precision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
    let n = {
      '*': x * y,
      '-': x - y,
      '+': x + y,
      '/': x / y
    }[op];
    return Math.round(n * 10 * Math.pow(10, precision)) / (10 * Math.pow(10, precision));
  }
  static trim(str, charlist) {
    let whitespace = [' ', '\n', '\r', '\t', '\f', '\x0b', '\xa0', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200a', '\u200b', '\u2028', '\u2029', '\u3000'].join('');
    let l = 0;
    let i = 0;
    str += '';
    if (charlist) {
      whitespace = (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
    }
    l = str.length;
    for (i = 0; i < l; i++) {
      if (whitespace.indexOf(str.charAt(i)) === -1) {
        str = str.substring(i);
        break;
      }
    }
    l = str.length;
    for (i = l - 1; i >= 0; i--) {
      if (whitespace.indexOf(str.charAt(i)) === -1) {
        str = str.substring(0, i + 1);
        break;
      }
    }
    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
  }
  static ltrim(str, charlist) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
    const re = new RegExp('^[' + charlist + ']+', 'g');
    return (str + '').replace(re, '');
  }
  static rtrim(str, charlist) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '\\$1');
    const re = new RegExp('[' + charlist + ']+$', 'g');
    return (str + '').replace(re, '');
  }
  static truncate_string(str) {
    let len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    let chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
    if (this.nx(str) || !(typeof str === 'string' || str instanceof String)) {
      return str;
    }
    if (str.indexOf(' ') === -1) {
      if (str.length > len) {
        str = str.substring(0, len);
        str = hlp.rtrim(str);
        str += ' ' + chars;
      }
    } else {
      if (str.length > len) {
        str = hlp.rtrim(str);
        // cut of whole word
        while (str.length > len && str.lastIndexOf(' ') > -1 && str.substring(len - 1, len) != ' ') {
          str = str.substring(0, str.lastIndexOf(' '));
          str = hlp.rtrim(str);
        }
        str = str.substring(0, len);
        str = hlp.rtrim(str);
        str += ' ' + chars;
      }
    }
    return str;
  }
  static emojiRegex() {
    let global = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return new RegExp(hlp.emojiRegexPattern(), (global === true ? 'g' : '') + 'u');
  }
  static emojiRegexPattern() {
    return String.raw`\p{RI}\p{RI}|\p{Extended_Pictographic}(\p{EMod}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?(\u200D(\p{RI}\p{RI}|\p{Extended_Pictographic}(\p{EMod}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?))*`;
  }
  static serialize(mixedValue) {
    let val, key, okey;
    let ktype = '';
    let vals = '';
    let count = 0;
    const _utf8Size = function (str) {
      return ~-encodeURI(str).split(/%..|./).length;
    };
    const _getType = function (inp) {
      let match;
      let key;
      let cons;
      let types;
      let type = typeof inp;
      if (type === 'object' && !inp) {
        return 'null';
      }
      if (type === 'object') {
        if (!inp.constructor) {
          return 'object';
        }
        cons = inp.constructor.toString();
        match = cons.match(/(\w+)\(/);
        if (match) {
          cons = match[1].toLowerCase();
        }
        types = ['boolean', 'number', 'string', 'array'];
        for (key in types) {
          if (cons === types[key]) {
            type = types[key];
            break;
          }
        }
      }
      return type;
    };
    const type = _getType(mixedValue);
    switch (type) {
      case 'function':
        val = '';
        break;
      case 'boolean':
        val = 'b:' + (mixedValue ? '1' : '0');
        break;
      case 'number':
        val = (Math.round(mixedValue) === mixedValue ? 'i' : 'd') + ':' + mixedValue;
        break;
      case 'string':
        val = 's:' + _utf8Size(mixedValue) + ':"' + mixedValue + '"';
        break;
      case 'array':
      case 'object':
        val = 'a';
        for (key in mixedValue) {
          if (mixedValue.hasOwnProperty(key)) {
            ktype = _getType(mixedValue[key]);
            if (ktype === 'function') {
              continue;
            }
            okey = key.match(/^[0-9]+$/) ? parseInt(key, 10) : key;
            vals += this.serialize(okey) + this.serialize(mixedValue[key]);
            count++;
          }
        }
        val += ':' + count + ':{' + vals + '}';
        break;
      case 'undefined':
      default:
        val = 'N';
        break;
    }
    if (type !== 'object' && type !== 'array') {
      val += ';';
    }
    return val;
  }
  static unserialize(str) {
    try {
      if (typeof str !== 'string') {
        return false;
      }
      const store = [];
      const cache = value => {
        store.push(value[0]);
        return value;
      };
      cache.get = index => {
        if (index >= store.length) {
          throw RangeError(`Can't resolve reference ${index + 1}`);
        }
        return store[index];
      };
      const expectType = s => {
        const types = /^(?:N(?=;)|[bidsSaOCrR](?=:)|[^:]+(?=:))/g;
        const type = (types.exec(s) || [])[0];
        if (!type) throw SyntaxError('Invalid input: ' + s);
        switch (type) {
          case 'N':
            return cache([null, 2]);
          case 'b':
            return cache(expectBool(s));
          case 'i':
            return cache(expectInt(s));
          case 'd':
            return cache(expectFloat(s));
          case 's':
            return cache(expectString(s));
          case 'S':
            return cache(expectEscapedString(s));
          case 'a':
            return expectArray(s);
          case 'O':
            return expectObject(s);
          case 'C':
            throw Error('Not yet implemented');
          case 'r':
          case 'R':
            return expectReference(s);
          default:
            throw SyntaxError(`Invalid or unsupported data type: ${type}`);
        }
      };
      const expectBool = s => {
        const reBool = /^b:([01]);/;
        const [match, boolMatch] = reBool.exec(s) || [];
        if (!boolMatch) throw SyntaxError('Invalid bool value, expected 0 or 1');
        return [boolMatch === '1', match.length];
      };
      const expectInt = s => {
        const reInt = /^i:([+-]?\d+);/;
        const [match, intMatch] = reInt.exec(s) || [];
        if (!intMatch) throw SyntaxError('Expected an integer value');
        return [parseInt(intMatch, 10), match.length];
      };
      const expectFloat = s => {
        const reFloat = /^d:(NAN|-?INF|(?:\d+\.\d*|\d*\.\d+|\d+)(?:[eE][+-]\d+)?);/;
        const [match, floatMatch] = reFloat.exec(s) || [];
        if (!floatMatch) throw SyntaxError('Expected a float value');
        return [floatMatch === 'NAN' ? Number.NaN : floatMatch === '-INF' ? Number.NEGATIVE_INFINITY : floatMatch === 'INF' ? Number.POSITIVE_INFINITY : parseFloat(floatMatch), match.length];
      };
      const expectString = s => {
        const reStrLength = /^s:(\d+):"/g;
        const [match, byteLenMatch] = reStrLength.exec(s) || [];
        if (!match) throw SyntaxError('Expected a string value');
        const len = parseInt(byteLenMatch, 10);
        s = s.substr(match.length);
        const strMatch = s.substr(0, len);
        s = s.substr(len);
        if (!s.startsWith('";')) throw SyntaxError('Expected ";');
        return [strMatch, match.length + len + 2];
      };
      const expectEscapedString = s => {
        const reStrLength = /^S:(\d+):"/g;
        const [match, strLenMatch] = reStrLength.exec(s) || [];
        if (!match) throw SyntaxError('Expected an escaped string value');
        const len = parseInt(strLenMatch, 10);
        s = s.substr(match.length);
        const strMatch = s.substr(0, len);
        s = s.substr(len);
        if (!s.startsWith('";')) throw SyntaxError('Expected ";');
        return [strMatch, match.length + len + 2];
      };
      const expectReference = s => {
        const reRef = /^[rR]:(\d+);/;
        const [match, refIndex] = reRef.exec(s) || [];
        if (!match) throw SyntaxError('Expected reference value');
        return [cache.get(parseInt(refIndex, 10) - 1), match.length];
      };
      const expectArray = s => {
        const reArrayLength = /^a:(\d+):\{/;
        const [arrayLiteralBeginMatch, arrayLengthMatch] = reArrayLength.exec(s) || [];
        if (!arrayLengthMatch) throw SyntaxError('Expected array length annotation');
        s = s.substr(arrayLiteralBeginMatch.length);
        const items = {};
        cache([items]);
        for (let i = 0; i < parseInt(arrayLengthMatch, 10); i++) {
          const key = expectType(s);
          s = s.substr(key[1]);
          const value = expectType(s);
          s = s.substr(value[1]);
          items[key[0]] = value[0];
        }
        if (s.charAt(0) !== '}') throw SyntaxError('Expected }');
        return [items, arrayLiteralBeginMatch.length + 1];
      };
      const expectObject = s => {
        const reObjectLiteral = /^O:(\d+):"([^\"]+)":(\d+):\{/;
        const [match,, className, propCountMatch] = reObjectLiteral.exec(s) || [];
        if (!match) throw SyntaxError('Invalid input');
        if (className !== 'stdClass') throw SyntaxError(`Unsupported object type: ${className}`);
        let obj = {};
        cache([obj]);
        s = s.substr(match.length);
        for (let i = 0; i < parseInt(propCountMatch, 10); i++) {
          const prop = expectType(s);
          s = s.substr(prop[1]);
          const value = expectType(s);
          s = s.substr(value[1]);
          obj[prop[0]] = value[0];
        }
        if (s.charAt(0) !== '}') throw SyntaxError('Expected }');
        return [obj, match.length + 1];
      };
      return expectType(str)[0];
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  static pushId() {
    /* source https://gist.github.com/mikelehen/3596a30bd69384624c11 */
    let pushIdData = null;
    // browser
    if (window !== undefined) {
      if (window.pushIdDataGlobal === undefined) {
        window.pushIdDataGlobal = {};
      }
      pushIdData = window.pushIdDataGlobal;
    }
    // node.js
    if (global !== undefined) {
      if (global.pushIdDataGlobal === undefined) {
        global.pushIdDataGlobal = {};
      }
      pushIdData = global.pushIdDataGlobal;
    }
    // first run
    if (hlp.objectsAreEqual(pushIdData, {})) {
      pushIdData.lastPushTime = 0;
      pushIdData.lastRandChars = [];
      pushIdData.PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    }
    let now = new Date().getTime(),
      duplicateTime = now === pushIdData.lastPushTime;
    pushIdData.lastPushTime = now;
    let timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = pushIdData.PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }
    if (now !== 0) {
      throw new Error();
    }
    let id = timeStampChars.join('');
    if (!duplicateTime) {
      for (i = 0; i < 12; i++) {
        pushIdData.lastRandChars[i] = Math.floor(Math.random() * 64);
      }
    } else {
      for (i = 11; i >= 0 && pushIdData.lastRandChars[i] === 63; i--) {
        pushIdData.lastRandChars[i] = 0;
      }
      pushIdData.lastRandChars[i]++;
    }
    for (i = 0; i < 12; i++) {
      id += pushIdData.PUSH_CHARS.charAt(pushIdData.lastRandChars[i]);
    }
    if (id.length != 20) {
      throw new Error();
    }
    return id;
  }
  static getProp(obj, desc) {
    let arr = desc.split('.');
    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
  }
  static base64toblob(base64) {
    let contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    let sliceSize = 512,
      byteCharacters = atob(base64),
      byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize),
        byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }
  static blobtobase64(blob) {
    return new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => {
        var dataUrl = reader.result;
        var base64 = dataUrl.split(',')[1];
        resolve(base64);
      };
      reader.readAsDataURL(blob);
    });
  }
  static stringtoblob(string) {
    let contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    let blob = new Blob([string], {
      type: contentType
    });
    return blob;
  }
  static blobtostring(blob) {
    return new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsText(blob);
    });
  }
  static filetobase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });
  }
  static blobtofile(blob) {
    let filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'file.txt';
    let file = null;
    try {
      file = new File([blob], filename);
    } catch {
      // ie 11
      file = new Blob([blob], filename);
    }
    return file;
  }
  static filetoblob(file) {
    return new Blob([file]);
  }
  static base64tofile(base64) {
    let contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    let filename = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'file.txt';
    return this.blobtofile(this.base64toblob(base64, contentType), filename);
  }
  static blobtourl(blob) {
    return URL.createObjectURL(blob, {
      type: 'text/plain'
    });
  }
  static stringtourl(string) {
    return this.blobtourl(this.stringtoblob(string));
  }
  static base64tostring(base64) {
    return atob(base64);
  }
  static stringtobase64(string) {
    return btoa(string);
  }
  static base64tourl(base64) {
    return this.blobtourl(this.base64toblob(base64));
  }
  static filetourl(file) {
    return this.blobtourl(this.filetoblob(file));
  }
  static getImageOrientation(base64) {
    return new Promise((resolve, reject) => {
      base64 = base64.replace('data:image/jpeg;base64,', '');
      let file = this.base64tofile(base64),
        reader = new FileReader();
      reader.onload = e => {
        var view = new DataView(e.target.result);
        if (view.getUint16(0, false) != 0xffd8) {
          resolve(-2);
          return;
        }
        var length = view.byteLength,
          offset = 2;
        while (offset < length) {
          if (view.getUint16(offset + 2, false) <= 8) {
            resolve(-1);
            return;
          }
          var marker = view.getUint16(offset, false);
          offset += 2;
          if (marker == 0xffe1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
              resolve(-1);
              return;
            }
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) == 0x0112) {
                resolve(view.getUint16(offset + i * 12 + 8, little));
                return;
              }
            }
          } else if ((marker & 0xff00) != 0xff00) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }
        resolve(-1);
        return;
      };
      reader.readAsArrayBuffer(file);
    });
  }
  static resetImageOrientation(srcBase64, srcOrientation) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = () => {
        var width = img.width,
          height = img.height,
          canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d');
        if (4 < srcOrientation && srcOrientation < 9) {
          canvas.width = height;
          canvas.height = width;
        } else {
          canvas.width = width;
          canvas.height = height;
        }
        switch (srcOrientation) {
          case 2:
            ctx.transform(-1, 0, 0, 1, width, 0);
            break;
          case 3:
            ctx.transform(-1, 0, 0, -1, width, height);
            break;
          case 4:
            ctx.transform(1, 0, 0, -1, 0, height);
            break;
          case 5:
            ctx.transform(0, 1, 1, 0, 0, 0);
            break;
          case 6:
            ctx.transform(0, 1, -1, 0, height, 0);
            break;
          case 7:
            ctx.transform(0, -1, -1, 0, height, width);
            break;
          case 8:
            ctx.transform(0, -1, 1, 0, 0, width);
            break;
          default:
            break;
        }
        ctx.drawImage(img, 0, 0);
        let base64 = canvas.toDataURL();
        base64 = 'data:image/jpeg;base64,' + base64.split(',')[1];
        resolve(base64);
        return;
      };
      img.src = srcBase64;
    });
  }
  static fixImageOrientation(base64) {
    return new Promise((resolve, reject) => {
      if (base64.indexOf('data:') === -1) {
        resolve(base64);
        return;
      }
      if (base64.indexOf('data:image/jpeg;base64,') === 0) {
        base64 = base64.replace('data:image/jpeg;base64,', '');
      }
      this.getImageOrientation(base64).then(orientation => {
        base64 = 'data:image/jpeg;base64,' + base64;
        if (orientation <= 1) {
          resolve(base64);
          return;
        } else {
          this.resetImageOrientation(base64, orientation).then(base64_new => {
            resolve(base64_new);
            return;
          });
        }
      });
    });
  }
  static debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  static throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function () {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }
  static shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  static findRecursiveInObject(object) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    let paths = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    if (object !== null && typeof object === 'object') {
      for (const [object__key, object__value] of Object.entries(object)) {
        if (object__value !== null && typeof object__value === 'object') {
          this.findRecursiveInObject(object__value, key, value, (path === '' ? '' : path + '.') + object__key, paths);
        } else if ((key === null || object__key === key) && (value === null || object__value === value)) {
          paths.push(path);
          break; // only take first
        }
      }
    }
    return paths;
  }
}

/* expose all functions to window */
exports.default = hlp;
if (typeof window !== 'undefined') {
  window.hlp = {};
  Object.getOwnPropertyNames(hlp).forEach((value, key) => {
    if (value === 'length' || value === 'name' || value === 'prototype' || value === 'caller' || value === 'arguments') {
      return;
    }
    window.hlp[value] = hlp[value];
  });
}