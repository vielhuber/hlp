'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hlp = function () {
    function hlp() {
        (0, _classCallCheck3.default)(this, hlp);
    }

    (0, _createClass3.default)(hlp, null, [{
        key: 'capitalize',
        value: function capitalize() {
            var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (string === null) {
                return string;
            }
            if (string === '') {
                return string;
            }
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }, {
        key: 'cookieExists',
        value: function cookieExists(cookie_name) {
            if (document.cookie !== undefined && this.cookieGet(cookie_name) !== null) {
                return true;
            }
            return false;
        }
    }, {
        key: 'cookieGet',
        value: function cookieGet(cookie_name) {
            var cookie_match = document.cookie.match(new RegExp(cookie_name + '=([^;]+)'));
            if (cookie_match) {
                return decodeURIComponent(cookie_match[1]);
            }
            return null;
        }
    }, {
        key: 'cookieSet',
        value: function cookieSet(cookie_name, cookie_value, days) {
            document.cookie = cookie_name + '=' + encodeURIComponent(cookie_value) + '; ' + 'expires=' + new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).toUTCString() + '; path=/';
        }
    }, {
        key: 'cookieDelete',
        value: function cookieDelete(cookie_name) {
            document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        }
    }, {
        key: 'getParam',
        value: function getParam(variable) {
            var url = window.location.search;
            if (this.nx(url)) {
                return null;
            }
            var query = url.substring(1),
                vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair[0] == variable && this.x(pair[1])) {
                    return pair[1];
                }
            }
            return null;
        }
    }, {
        key: 'isPhone',
        value: function isPhone() {
            // based on detectmobilebrowsers.com
            var a = navigator.userAgent || navigator.vendor || window.opera;
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
            );
        }
    }, {
        key: 'isTablet',
        value: function isTablet() {
            // based on detectmobilebrowsers.com
            var a = navigator.userAgent || navigator.vendor || window.opera;
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
            );
        }
    }, {
        key: 'isDesktop',
        value: function isDesktop() {
            return !this.isPhone() && !this.isTablet();
        }
    }, {
        key: 'isMobile',
        value: function isMobile() {
            // viewport width based OR phone based
            if (window.innerWidth < 750 || this.isPhone()) {
                return true;
            }
            return false;
        }
    }, {
        key: 'isTouch',
        value: function isTouch() {
            return 'ontouchstart' in window || navigator.maxTouchPoints || false;
        }
    }, {
        key: 'isObject',
        value: function isObject(a) {
            return !!a && a.constructor === Object;
        }
    }, {
        key: 'isArray',
        value: function isArray(a) {
            return !!a && a.constructor === Array;
        }
    }, {
        key: 'isString',
        value: function isString(string) {
            return typeof string === 'string' || string instanceof String;
        }
    }, {
        key: 'isDate',
        value: function isDate(string) {
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
            var day = parseInt(string.split('-')[2]),
                month = parseInt(string.split('-')[1]),
                year = parseInt(string.split('-')[0]),
                date = new Date();
            date.setFullYear(year, month - 1, day);
            if (date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day) {
                return true;
            }
            return false;
        }
    }, {
        key: 'jsonStringToObject',
        value: function jsonStringToObject(string) {
            if (this.nx(string) || !this.isString(string)) {
                return null;
            }
            try {
                return JSON.parse(string);
            } catch (error) {
                return null;
            }
        }
    }, {
        key: 'jsonObjectToString',
        value: function jsonObjectToString(object) {
            try {
                return (0, _stringify2.default)(object);
            } catch (error) {
                return null;
            }
        }
    }, {
        key: 'guid',
        value: function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }, {
        key: 'replaceAll',
        value: function replaceAll(string, search, replace) {
            return string.split(search).join(replace);
        }
    }, {
        key: 'get',
        value: function get(url, success, error) {
            var _this = this;

            var throttle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            setTimeout(function () {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onload = function () {
                    if (xhr.readyState != 4 || xhr.status != 200 && xhr.status != 304) {
                        error([xhr.readyState, xhr.status, xhr.statusText]);
                    }
                    success(_this.jsonStringToObject(xhr.responseText));
                };
                xhr.onerror = function () {
                    error([xhr.readyState, xhr.status, xhr.statusText]);
                };
                xhr.send(null);
            }, throttle);
        }
    }, {
        key: 'post',
        value: function post(url) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var success = arguments[2];
            var error = arguments[3];

            var _this2 = this;

            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var throttle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            setTimeout(function () {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                if (_this2.x(headers)) {
                    (0, _entries2.default)(headers).forEach(function (_ref) {
                        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                            headers__key = _ref2[0],
                            headers__value = _ref2[1];

                        xhr.setRequestHeader(headers__key, headers__value);
                    });
                }
                xhr.onload = function () {
                    if (xhr.readyState != 4 || xhr.status != 200 && xhr.status != 304) {
                        error(_this2.jsonStringToObject(xhr.statusText));
                    }
                    success(_this2.jsonStringToObject(xhr.responseText));
                };
                xhr.onerror = function () {
                    error([xhr.readyState, xhr.status, xhr.statusText]);
                };
                xhr.send((0, _stringify2.default)(data));
            }, throttle);
        }
    }, {
        key: 'getWithPromise',
        value: function getWithPromise(url) {
            var _this3 = this;

            var throttle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return new _promise2.default(function (resolve, reject) {
                _this3.get(url, function (v) {
                    resolve(v);
                }, function (v) {
                    reject(v);
                }, throttle);
            });
        }
    }, {
        key: 'postWithPromise',
        value: function postWithPromise(url) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var _this4 = this;

            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var throttle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            return new _promise2.default(function (resolve, reject) {
                _this4.post(url, data, function (v) {
                    resolve(v);
                }, function (v) {
                    reject(v);
                }, headers, throttle);
            });
        }
    }, {
        key: 'onResizeHorizontal',
        value: function onResizeHorizontal(fun) {
            var windowWidth = window.innerWidth;
            window.addEventListener('resize', function () {
                var windowWidthNew = window.screen.availWidth || window.innerWidth;
                if (windowWidthNew != windowWidth) {
                    windowWidth = windowWidthNew;
                    if (_timeout) {
                        clearTimeout(_timeout);
                    }
                    var _timeout = window.setTimeout(function () {
                        fun();
                    }, 250);
                }
            });
            fun();
        }
    }, {
        key: 'onResizeVertical',
        value: function onResizeVertical(fun) {
            var windowHeight = window.innerHeight;
            window.addEventListener('resize', function () {
                var windowHeightNew = window.screen.availHeight || window.innerHeight;
                if (windowHeightNew != windowHeight) {
                    windowHeight = windowHeightNew;
                    if (_timeout2) {
                        clearTimeout(_timeout2);
                    }
                    var _timeout2 = window.setTimeout(function () {
                        fun();
                    }, 250);
                }
            });
            fun();
        }
    }, {
        key: 'uniqueArray',
        value: function uniqueArray(array) {
            var seen = {},
                ret_arr = [];
            for (var i = 0; i < array.length; i++) {
                if (!(array[i] in seen)) {
                    ret_arr.push(array[i]);
                    seen[array[i]] = true;
                }
            }
            return ret_arr;
        }
    }, {
        key: 'charToInt',
        value: function charToInt(val) {
            val = val.toUpperCase();
            var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                i = void 0,
                j = void 0,
                result = 0;
            for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1) {
                result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
            }
            return result;
        }
    }, {
        key: 'intToChar',
        value: function intToChar(num) {
            for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
                ret = String.fromCharCode(parseInt(num % b / a) + 65) + ret;
            }
            return ret;
        }
    }, {
        key: 'incChar',
        value: function incChar(char) {
            var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return this.intToChar(this.charToInt(char) + shift);
        }
    }, {
        key: 'decChar',
        value: function decChar(char) {
            var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return this.intToChar(this.charToInt(char) - shift);
        }
    }, {
        key: 'range',
        value: function range(start, end) {
            var range = [],
                typeofStart = typeof start === 'undefined' ? 'undefined' : (0, _typeof3.default)(start),
                typeofEnd = typeof end === 'undefined' ? 'undefined' : (0, _typeof3.default)(end),
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

        /* todo */

    }, {
        key: 'fadeOut',
        value: function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= .1) < 0) {
                    el.style.display = 'none';
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn(el) {
            el.style.opacity = 0;
            el.style.display = 'block';
            (function fade() {
                var val = parseFloat(el.style.opacity);
                if (!((val += .1) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(element) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var to = element.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop,
                from = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop,
                by = to - from,
                currentIteration = 0,
                animIterations = Math.round(60 * (duration / 1000));
            (function scroll() {
                var value = void 0;
                // easeInOutCirc
                var currentIterationTmp = currentIteration;
                currentIterationTmp /= animIterations / 2;
                if (currentIterationTmp < 1) {
                    value = -by / 2 * (Math.sqrt(1 - currentIterationTmp * currentIterationTmp) - 1) + from;
                } else {
                    currentIterationTmp -= 2;
                    value = by / 2 * (Math.sqrt(1 - currentIterationTmp * currentIterationTmp) + 1) + from;
                }
                value = Math.round(value);
                document.documentElement.scrollTop = document.body.scrollTop = value;
                currentIteration++;
                if (currentIteration < animIterations) {
                    requestAnimationFrame(scroll);
                }
            })();
        }
    }, {
        key: 'loadJS',
        value: function loadJS(url) {
            return new _promise2.default(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = url;
                script.onload = function () {
                    resolve();
                };
                document.head.appendChild(script);
            });
        }
    }, {
        key: 'isVisible',
        value: function isVisible(el) {
            return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        }
    }, {
        key: 'textareaSetHeight',
        value: function textareaSetHeight(el) {
            el.style.height = '5px';
            el.style.height = el.scrollHeight + 'px';
        }
    }, {
        key: 'textareaSetHeights',
        value: function textareaSetHeights(selector) {
            var _this5 = this;

            [].forEach.call(document.querySelectorAll(selector), function (el) {
                if (_this5.isVisible(el)) {
                    _this5.textareaSetHeight(el);
                }
            });
        }
    }, {
        key: 'textareaAutoHeight',
        value: function textareaAutoHeight(selector) {
            var _this6 = this;

            this.textareaSetHeights(selector);

            window.addEventListener('resize', function () {
                _this6.textareaSetHeights(selector);
            });

            document.addEventListener('keyup', function (e) {
                if (e.target && e.target.tagName === 'TEXTAREA') {
                    _this6.textareaSetHeight(e.target);
                }
            });
        }
    }, {
        key: 'fixMobileHeightInit',
        value: function fixMobileHeightInit() {
            /* on apple devices fix height bug (https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html) */
            if (Helpers.isMobile() || Helpers.isTablet()) {
                Helpers.fixMobileHeight();
                Helpers.onResizeHorizontal(Helpers.fixMobileHeight);
            }
        }
    }, {
        key: 'fixMobileHeight',
        value: function fixMobileHeight() {
            // do some manual work here
            document.querySelector('.full-height-item').style.height = window.innerHeight + 'px';
        }
    }, {
        key: 'x',
        value: function x(input) {
            if (input === null || input === false || typeof input === 'string' && input.trim() == '' || (typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object' && (0, _keys2.default)(input).length === 0 && input.constructor === Object || typeof input === 'undefined' || Array.isArray(input) && input.length === 0) {
                return false;
            }
            if (Array.isArray(input) && input.length === 1 && input[0] === '') {
                return false;
            }
            return true;
        }
    }, {
        key: 'nx',
        value: function nx(input) {
            return !this.x(input);
        }
    }]);
    return hlp;
}();

/* expose all functions to window */


exports.default = hlp;
window.hlp = {};
(0, _getOwnPropertyNames2.default)(hlp).forEach(function (value, key) {
    if (['length', 'name', 'prototype'].includes(value)) {
        return;
    }
    window.hlp[value] = hlp[value];
});