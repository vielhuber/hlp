(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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
        key: 'x',
        value: function x(input) {
            if (typeof input === 'function') {
                try {
                    input = input();
                    return this.x(input);
                } catch (e) {
                    return false;
                }
            }
            if (input === null || input === false || typeof input === 'string' && input.trim() == '' || (typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object' && (0, _keys2.default)(input).length === 0 && input.constructor === Object || typeof input === 'undefined' || Array.isArray(input) && input.length === 0 || Array.isArray(input) && input.length === 1 && input[0] === '') {
                return false;
            }
            return true;
        }
    }, {
        key: 'nx',
        value: function nx(input) {
            return !this.x(input);
        }
    }, {
        key: 'true',
        value: function _true(input) {
            if (typeof input === 'function') {
                try {
                    input = input();
                    return this.true(input);
                } catch (e) {
                    return false;
                }
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
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object' && (0, _keys2.default)(input).length === 0 && input.constructor === Object) {
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
    }, {
        key: 'false',
        value: function _false(input) {
            if (typeof input === 'function') {
                try {
                    input = input();
                    return this.false(input);
                } catch (e) {
                    return false;
                }
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
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object' && (0, _keys2.default)(input).length === 0 && input.constructor === Object) {
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
    }, {
        key: 'v',
        value: function v() {
            if (this.nx(arguments)) {
                return null;
            }
            for (var i = 0; i < arguments.length; i++) {
                if (this.x(arguments[i])) {
                    return arguments[i];
                }
            }
            return null;
        }
    }, {
        key: 'loop',
        value: function loop(input, fun) {
            if (this.nx(input)) {
                return null;
            }
            if (Array.isArray(input)) {
                input.forEach(function (input__value, input__key) {
                    fun(input__value, input__key);
                });
            } else if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                (0, _entries2.default)(input).forEach(function (_ref) {
                    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                        input__key = _ref2[0],
                        input__value = _ref2[1];

                    fun(input__value, input__key);
                });
            }
        }
    }, {
        key: 'first',
        value: function first(input) {
            if (Array.isArray(input)) {
                var ret = null;
                input.forEach(function (input__value, input__key) {
                    if (ret === null) {
                        ret = input__value;
                    }
                });
                return ret;
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                var ret = null;
                (0, _entries2.default)(input).forEach(function (_ref3) {
                    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                        input__key = _ref4[0],
                        input__value = _ref4[1];

                    if (ret === null) {
                        ret = input__value;
                    }
                });
                return ret;
            }
            return null;
        }
    }, {
        key: 'last',
        value: function last(input) {
            if (Array.isArray(input)) {
                var ret = null;
                input.forEach(function (input__value, input__key) {
                    ret = input__value;
                });
                return ret;
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                var _ret = null;
                (0, _entries2.default)(input).forEach(function (_ref5) {
                    var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
                        input__key = _ref6[0],
                        input__value = _ref6[1];

                    _ret = input__value;
                });
                return _ret;
            }
            return null;
        }
    }, {
        key: 'rand',
        value: function rand(input) {
            if (Array.isArray(input)) {
                return input[Math.floor(Math.random() * input.length)];
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                var input = (0, _values2.default)(input);
                return input[Math.floor(Math.random() * input.length)];
            }
            return null;
        }
    }, {
        key: 'random_string',
        value: function random_string() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (chars === null) {
                chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            var chars_length = chars.length,
                random_string = '';
            for (var i = 0; i < length; i++) {
                random_string += chars[~~(Math.random() * (chars_length - 1 - 0 + 1)) + 0];
            }
            return random_string;
        }
    }, {
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
        key: 'getDevice',
        value: function getDevice() {
            if (this.isPhone()) {
                return 'phone';
            }
            if (this.isTablet()) {
                return 'tablet';
            }
            return 'desktop';
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
        key: 'isMac',
        value: function isMac() {
            return hlp.getOs() === 'mac';
        }
    }, {
        key: 'isLinux',
        value: function isLinux() {
            return hlp.getOs() === 'linux';
        }
    }, {
        key: 'isWindows',
        value: function isWindows() {
            return hlp.getOs() === 'windows';
        }
    }, {
        key: 'getOs',
        value: function getOs() {
            var userAgent = window.navigator.userAgent,
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
    }, {
        key: 'getBrowser',
        value: function getBrowser() {
            var browser_name = '',
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
            } else if (navigator.userAgent.indexOf('MSIE') != -1 || !!document.documentMode == true) //IF IE > 10
                {
                    browser_name = 'ie';
                } else if (isEdge) {
                browser_name = 'edge';
            } else {
                browser_name = 'unknown';
            }

            return browser_name;
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
        key: 'deepCopy',
        value: function deepCopy(obj) {
            var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _weakMap2.default();

            if (Object(obj) !== obj) return obj; // primitives
            if (hash.has(obj)) return hash.get(obj); // cyclic reference
            var result = obj instanceof Date ? new Date(obj) : obj instanceof RegExp ? new RegExp(obj.source, obj.flags) : obj.constructor ? new obj.constructor() : (0, _create2.default)(null);
            hash.set(obj, result);
            if (obj instanceof _map2.default) (0, _from2.default)(obj, function (_ref7) {
                var _ref8 = (0, _slicedToArray3.default)(_ref7, 2),
                    key = _ref8[0],
                    val = _ref8[1];

                return result.set(key, hlp.deepCopy(val, hash));
            });
            return _assign2.default.apply(Object, [result].concat((0, _toConsumableArray3.default)((0, _keys2.default)(obj).map(function (key) {
                return (0, _defineProperty3.default)({}, key, hlp.deepCopy(obj[key], hash));
            }))));
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
        key: 'isJsonString',
        value: function isJsonString(string) {
            if (this.nx(string) || !this.isString(string)) {
                return false;
            }
            try {
                var json = JSON.parse(string);
                return true;
            } catch (error) {
                return false;
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
        value: function get(url) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            return this.call('GET', url, args);
        }
    }, {
        key: 'post',
        value: function post(url) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            return this.call('POST', url, args);
        }
    }, {
        key: 'call',
        value: function call(method, url) {
            var _this2 = this;

            var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
            return new _promise2.default(function (resolve, reject) {
                setTimeout(function () {
                    if (url.indexOf('http') !== 0) {
                        url = hlp.baseUrl() + '/' + url;
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.open(method, url, true);
                    if (method === 'POST') {
                        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    }
                    if (_this2.x(args.headers)) {
                        (0, _entries2.default)(args.headers).forEach(function (_ref10) {
                            var _ref11 = (0, _slicedToArray3.default)(_ref10, 2),
                                headers__key = _ref11[0],
                                headers__value = _ref11[1];

                            xhr.setRequestHeader(headers__key, headers__value);
                        });
                    }
                    xhr.onload = function () {
                        if (xhr.readyState != 4 || args.allow_errors !== true && xhr.status != 200 && xhr.status != 304) {
                            if (_this2.isJsonString(xhr.responseText)) {
                                reject(_this2.jsonStringToObject(xhr.responseText));
                            } else {
                                reject(xhr.responseText);
                            }
                        }
                        if (_this2.isJsonString(xhr.responseText)) {
                            resolve(_this2.jsonStringToObject(xhr.responseText));
                        } else {
                            resolve(xhr.responseText);
                        }
                    };
                    xhr.onerror = function () {
                        reject([xhr.readyState, xhr.status, xhr.statusText]);
                    };
                    if (method === 'GET') {
                        xhr.send(null);
                    }
                    if (method === 'POST') {
                        xhr.send((0, _stringify2.default)(args.data));
                    }
                }, args.throttle);
            });
        }
    }, {
        key: 'onResizeHorizontal',
        value: function onResizeHorizontal(fun) {
            var windowWidth = window.innerWidth,
                windowWidthNew = void 0,
                timeout = void 0;
            window.addEventListener('resize', function () {
                windowWidthNew = window.innerWidth;
                if (windowWidthNew != windowWidth) {
                    windowWidth = windowWidthNew;
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = window.setTimeout(function () {
                        fun();
                    }, 250);
                }
            });
            fun();
        }
    }, {
        key: 'onResizeVertical',
        value: function onResizeVertical(fun) {
            var windowHeight = window.innerHeight,
                windowHeightNew,
                timeout;
            window.addEventListener('resize', function () {
                windowHeightNew = window.innerHeight;
                if (windowHeightNew != windowHeight) {
                    windowHeight = windowHeightNew;
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = window.setTimeout(function () {
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
    }, {
        key: 'dateToWeek',
        value: function dateToWeek() {
            var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (d === null) {
                d = new Date();
            }
            d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
            d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
            var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)),
                weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
            return weekNo;
        }
    }, {
        key: 'weekToDate',
        value: function weekToDate(w, y) {
            var simple = new Date(y, 0, 1 + (w - 1) * 7),
                dow = simple.getDay(),
                ISOweekStart = simple;
            if (dow <= 4) {
                ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
            } else {
                ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
            }
            ISOweekStart.setUTCHours(0, 0, 0, 0);
            return ISOweekStart;
        }
    }, {
        key: 'addDays',
        value: function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    }, {
        key: 'objectsAreEqual',
        value: function objectsAreEqual(x, y) {
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
            var p = (0, _keys2.default)(x);
            return (0, _keys2.default)(y).every(function (i) {
                return p.indexOf(i) !== -1;
            }) && p.every(function (i) {
                return _this.objectsAreEqual(x[i], y[i]);
            });
        }
    }, {
        key: 'containsObject',
        value: function containsObject(obj, list) {
            var x;
            for (x in list) {
                if (list.hasOwnProperty(x) && this.objectsAreEqual(list[x], obj)) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(el) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            if (speed <= 25) {
                speed = 25;
            }
            return new _promise2.default(function (resolve) {
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
    }, {
        key: 'fadeIn',
        value: function fadeIn(el) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            if (speed <= 25) {
                speed = 25;
            }
            return new _promise2.default(function (resolve) {
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
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var doc = document.documentElement;
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var doc = document.documentElement;
            return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        }
    }, {
        key: 'offsetTop',
        value: function offsetTop(el) {
            return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop;
        }
    }, {
        key: 'offsetLeft',
        value: function offsetLeft(el) {
            return el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft;
        }
    }, {
        key: 'offsetRight',
        value: function offsetRight(el) {
            return el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft + el.offsetWidth;
        }
    }, {
        key: 'offsetBottom',
        value: function offsetBottom(el) {
            return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop + el.offsetHeight;
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(to) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            return new _promise2.default(function (resolve) {
                if (!hlp.isNumeric(to)) {
                    to = to.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop;
                }

                var element = document.scrollingElement || document.documentElement,
                    start = element.scrollTop,
                    change = to - start,
                    startDate = +new Date(),

                // t = current time
                // b = start value
                // c = change in value
                // d = duration
                easeInOutQuad = function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                },
                    easeInOutCirc = function easeInOutCirc(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                    t -= 2;
                    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
                },
                    animateScroll = function animateScroll() {
                    var currentDate = +new Date();
                    var currentTime = currentDate - startDate;
                    element.scrollTop = parseInt(easeInOutCirc(currentTime, start, change, duration));
                    if (currentTime < duration) {
                        requestAnimationFrame(animateScroll);
                    } else {
                        element.scrollTop = to;
                        resolve();
                    }
                };
                animateScroll();
            });
        }
    }, {
        key: 'loadJs',
        value: function loadJs(urls) {
            if (!hlp.isArray(urls)) {
                urls = [urls];
            }
            var promises = [];
            hlp.loop(urls, function (urls__value, urls__key) {
                promises.push(new _promise2.default(function (resolve, reject) {
                    var script = document.createElement('script');
                    script.src = urls__value;
                    script.onload = function () {
                        resolve();
                    };
                    document.head.appendChild(script);
                }));
            });
            return _promise2.default.all(promises);
        }
    }, {
        key: 'loadJsSequentially',
        value: function () {
            var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(urls) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, urls__value;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!hlp.isArray(urls)) {
                                    urls = [urls];
                                }
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context.prev = 4;
                                _iterator = (0, _getIterator3.default)(urls);

                            case 6:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context.next = 13;
                                    break;
                                }

                                urls__value = _step.value;
                                _context.next = 10;
                                return hlp.loadJs(urls__value);

                            case 10:
                                _iteratorNormalCompletion = true;
                                _context.next = 6;
                                break;

                            case 13:
                                _context.next = 19;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](4);
                                _didIteratorError = true;
                                _iteratorError = _context.t0;

                            case 19:
                                _context.prev = 19;
                                _context.prev = 20;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 22:
                                _context.prev = 22;

                                if (!_didIteratorError) {
                                    _context.next = 25;
                                    break;
                                }

                                throw _iteratorError;

                            case 25:
                                return _context.finish(22);

                            case 26:
                                return _context.finish(19);

                            case 27:
                                return _context.abrupt('return');

                            case 28:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[4, 15, 19, 27], [20,, 22, 26]]);
            }));

            function loadJsSequentially(_x14) {
                return _ref12.apply(this, arguments);
            }

            return loadJsSequentially;
        }()
    }, {
        key: 'isVisible',
        value: function isVisible(el) {
            return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        }
    }, {
        key: 'textareaAutoHeight',
        value: function textareaAutoHeight() {
            var _this3 = this;

            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'textarea';


            this.textareaSetHeights(selector);

            this.onResizeHorizontal(function () {
                _this3.textareaSetHeights(selector);
            });

            [].forEach.call(document.querySelectorAll(selector), function (el) {
                el.addEventListener('keyup', function (e) {
                    _this3.textareaSetHeight(e.target);
                });
            });
        }
    }, {
        key: 'textareaSetHeights',
        value: function textareaSetHeights() {
            var _this4 = this;

            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'textarea';

            [].forEach.call(document.querySelectorAll(selector), function (el) {
                if (_this4.isVisible(el)) {
                    _this4.textareaSetHeight(el);
                }
            });
        }
    }, {
        key: 'textareaSetHeight',
        value: function textareaSetHeight(el) {
            el.style.height = '5px';
            el.style.height = el.scrollHeight + 'px';
        }
    }, {
        key: 'real100vh',
        value: function real100vh(selector) {
            document.querySelector(selector).style.height = window.innerHeight + 'px';
            // onResizeHorizontal does not work, we really have to trigger on every resize
            window.addEventListener('resize', function () {
                document.querySelector(selector).style.height = window.innerHeight + 'px';
            });
        }
    }, {
        key: 'iOsRemoveHover',
        value: function iOsRemoveHover() {
            if (hlp.getBrowser() === 'safari' && hlp.getDevice() !== 'desktop') {
                hlp.on('touchend', 'a', function (e, el) {
                    el.click();
                });
            }
        }
    }, {
        key: 'isNumeric',
        value: function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }, {
        key: 'animate',
        value: function animate(el, from, to, easing, duration) {
            return new _promise2.default(function (resolve) {
                var properties = [];
                from.split(';').forEach(function (from__value) {
                    properties.push(from__value.split(':')[0].trim());
                });
                var transition = [];
                properties.forEach(function (properties__value) {
                    transition.push(properties__value + ' ' + Math.round(duration / 1000 * 10) / 10 + 's ' + easing);
                });
                transition = 'transition: ' + transition.join(', ') + ' !important;';

                var els = null;
                if (NodeList.prototype.isPrototypeOf(el)) {
                    els = (0, _from2.default)(el);
                } else if (el === null) {
                    console.log('cannot animate element from ' + from + ' to ' + to + ' because it does not exist');
                    resolve();
                } else {
                    els = [el];
                }

                var toFinish = els.length;

                els.forEach(function (els__value, els__key) {
                    // add random class
                    var random_class = hlp.random_string(10, 'abcdefghijklmnopqrstuvwxyz');
                    els__value.classList.add(random_class);

                    window.requestAnimationFrame(function () {
                        // set from style inline (don't fully remove previous style)
                        var new_style = [];
                        var prev_style = els__value.getAttribute('style');
                        if (prev_style !== null) {
                            prev_style.split(';').forEach(function (prev_style__value) {
                                if (!properties.includes(prev_style__value.split(':')[0].trim())) {
                                    new_style.push(prev_style__value);
                                }
                            });
                        }
                        new_style = new_style.join(';') + from + ';';
                        els__value.setAttribute('style', new_style);

                        window.requestAnimationFrame(function () {
                            // add transition property
                            var style = document.createElement('style');
                            style.innerHTML = '.' + random_class + ' { ' + transition + ' }';
                            document.head.appendChild(style);

                            window.requestAnimationFrame(function () {
                                // set last style inline
                                els__value.setAttribute('style', els__value.getAttribute('style').replace(from + ';', '') + to + ';');

                                hlp.addEventListenerOnce(els__value, 'transitionend', function (event) {
                                    // remove previous styles property
                                    document.head.removeChild(style);

                                    // remove random class
                                    els__value.classList.remove(random_class);

                                    // resolve promise when last is finished
                                    toFinish--;
                                    if (toFinish <= 0) {
                                        window.requestAnimationFrame(function () {
                                            resolve();
                                        });
                                    }
                                });
                            });
                        });
                    });
                });
            });
        }
    }, {
        key: 'addEventListenerOnce',
        value: function addEventListenerOnce(target, type, listener, addOptions, removeOptions) {
            target.addEventListener(type, function fn(event) {
                target.removeEventListener(type, fn, removeOptions);
                listener.apply(this, arguments, addOptions);
            });
        }
    }, {
        key: 'htmlDecode',
        value: function htmlDecode(value) {
            var tmp = document.createElement('textarea');
            tmp.innerHTML = value;
            return tmp.value;
        }
    }, {
        key: 'htmlEncode',
        value: function htmlEncode(value) {
            return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/`/g, '&#96;');
        }
    }, {
        key: 'closest',
        value: function closest(el, selector) {
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
    }, {
        key: 'matches',
        value: function matches(el, selector) {
            var node = el,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
            while (nodes[++i] && nodes[i] != node) {}
            return !!nodes[i];
        }
    }, {
        key: 'remove',
        value: function remove(el) {
            if (el !== null) {
                el.parentNode.removeChild(el);
            }
        }
    }, {
        key: 'on',
        value: function on(event, selector, scope) {
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            if (callback === null) {
                callback = scope;
                scope = document;
            } else {
                scope = document.querySelector(scope);
            }
            scope.addEventListener(event, function (e) {
                var el = hlp.closest(e.target, selector);
                if (el) {
                    callback(e, el);
                }
            }, false);
        }
    }, {
        key: 'url',
        value: function url() {
            return window.location.protocol + '//' + window.location.host + window.location.pathname;
        }
    }, {
        key: 'urlWithHash',
        value: function urlWithHash() {
            return window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.hash;
        }
    }, {
        key: 'baseUrl',
        value: function baseUrl() {
            return window.location.protocol + '//' + window.location.host;
        }
    }, {
        key: 'waitUntil',
        value: function waitUntil(selector, css_option) {
            var css_value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            return new _promise2.default(function (resolve, reject) {
                var timeout = setInterval(function () {
                    if (document.querySelector(selector) !== null && (css_value === null && window.getComputedStyle(document.querySelector(selector))[css_option] !== undefined && window.getComputedStyle(document.querySelector(selector))[css_option] != '' || css_value !== null && window.getComputedStyle(document.querySelector(selector))[css_option] === css_value)) {
                        window.clearInterval(timeout);
                        resolve();
                    }
                }, 30);
            });
        }
    }, {
        key: 'fmath',
        value: function fmath(op, x, y) {
            var precision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;

            var n = {
                '*': x * y,
                '-': x - y,
                '+': x + y,
                '/': x / y
            }[op];
            return Math.round(n * 10 * Math.pow(10, precision)) / (10 * Math.pow(10, precision));
        }
    }, {
        key: 'pushId',
        value: function pushId() {
            /* source https://gist.github.com/mikelehen/3596a30bd69384624c11 */
            var pushIdData = null;
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

            var now = new Date().getTime(),
                duplicateTime = now === pushIdData.lastPushTime;
            pushIdData.lastPushTime = now;

            var timeStampChars = new Array(8);
            for (var i = 7; i >= 0; i--) {
                timeStampChars[i] = pushIdData.PUSH_CHARS.charAt(now % 64);
                now = Math.floor(now / 64);
            }
            if (now !== 0) {
                throw new Error();
            }
            var id = timeStampChars.join('');
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
    }]);
    return hlp;
}();

/* expose all functions to window */


exports.default = hlp;
window.hlp = {};
(0, _getOwnPropertyNames2.default)(hlp).forEach(function (value, key) {
    if (value === 'length' || value === 'name' || value === 'prototype' || value === 'caller' || value === 'arguments') {
        return;
    }
    window.hlp[value] = hlp[value];
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/array/from":3,"babel-runtime/core-js/get-iterator":4,"babel-runtime/core-js/json/stringify":6,"babel-runtime/core-js/map":7,"babel-runtime/core-js/object/assign":8,"babel-runtime/core-js/object/create":9,"babel-runtime/core-js/object/entries":11,"babel-runtime/core-js/object/get-own-property-names":12,"babel-runtime/core-js/object/keys":13,"babel-runtime/core-js/object/values":14,"babel-runtime/core-js/promise":15,"babel-runtime/core-js/weak-map":18,"babel-runtime/helpers/asyncToGenerator":19,"babel-runtime/helpers/classCallCheck":20,"babel-runtime/helpers/createClass":21,"babel-runtime/helpers/defineProperty":22,"babel-runtime/helpers/slicedToArray":23,"babel-runtime/helpers/toConsumableArray":24,"babel-runtime/helpers/typeof":25,"babel-runtime/regenerator":26}],2:[function(require,module,exports){
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _script = require('./../../_js/script');

var _script2 = _interopRequireDefault(_script);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('x', function () {
    expect(_script2.default.x(null)).toBe(false);
    expect(_script2.default.x(false)).toBe(false);
    expect(_script2.default.x(true)).toBe(true);
    expect(_script2.default.x([])).toBe(false);
    expect(_script2.default.x([''])).toBe(false);
    expect(_script2.default.x(0)).toBe(true);
    expect(_script2.default.x(1)).toBe(true);
    expect(_script2.default.x(-1)).toBe(true);
    expect(_script2.default.x('0')).toBe(true);
    expect(_script2.default.x('1')).toBe(true);
    expect(_script2.default.x('-1')).toBe(true);
    expect(_script2.default.x('')).toBe(false);
    expect(_script2.default.x(' ')).toBe(false);
    expect(_script2.default.x('null')).toBe(true);
    expect(_script2.default.x('false')).toBe(true);
    expect(_script2.default.x('true')).toBe(true);
    expect(_script2.default.x('str')).toBe(true);
    expect(_script2.default.x([0, 1])).toBe(true);
    expect(_script2.default.x([0])).toBe(true);
    expect(_script2.default.x({})).toBe(false);
    expect(_script2.default.x(function () {
        return un.known.property;
    })).toBe(false);
});

test('nx', function () {
    expect(_script2.default.nx(null)).toBe(true);
    expect(_script2.default.nx(false)).toBe(true);
    expect(_script2.default.nx(true)).toBe(false);
    expect(_script2.default.nx([])).toBe(true);
    expect(_script2.default.nx([''])).toBe(true);
    expect(_script2.default.nx(0)).toBe(false);
    expect(_script2.default.nx(1)).toBe(false);
    expect(_script2.default.nx(-1)).toBe(false);
    expect(_script2.default.nx('0')).toBe(false);
    expect(_script2.default.nx('1')).toBe(false);
    expect(_script2.default.nx('-1')).toBe(false);
    expect(_script2.default.nx('')).toBe(true);
    expect(_script2.default.nx(' ')).toBe(true);
    expect(_script2.default.nx('null')).toBe(false);
    expect(_script2.default.nx('false')).toBe(false);
    expect(_script2.default.nx('true')).toBe(false);
    expect(_script2.default.nx('str')).toBe(false);
    expect(_script2.default.nx([0, 1])).toBe(false);
    expect(_script2.default.nx([0])).toBe(false);
    expect(_script2.default.nx({})).toBe(true);
    expect(_script2.default.nx(function () {
        return un.known.property;
    })).toBe(true);
});

test('true', function () {
    expect(_script2.default.true(null)).toBe(false);
    expect(_script2.default.true(false)).toBe(false);
    expect(_script2.default.true(true)).toBe(true);
    expect(_script2.default.true([])).toBe(false);
    expect(_script2.default.true([''])).toBe(false);
    expect(_script2.default.true(0)).toBe(false);
    expect(_script2.default.true(1)).toBe(true);
    expect(_script2.default.true(-1)).toBe(true);
    expect(_script2.default.true('0')).toBe(false);
    expect(_script2.default.true('1')).toBe(true);
    expect(_script2.default.true('-1')).toBe(true);
    expect(_script2.default.true('')).toBe(false);
    expect(_script2.default.true(' ')).toBe(false);
    expect(_script2.default.true('null')).toBe(false);
    expect(_script2.default.true('false')).toBe(false);
    expect(_script2.default.true('true')).toBe(true);
    expect(_script2.default.true('str')).toBe(true);
    expect(_script2.default.true([0, 1])).toBe(true);
    expect(_script2.default.true([0])).toBe(true);
    expect(_script2.default.true({})).toBe(false);
    expect(_script2.default.true(function () {
        return un.known.property;
    })).toBe(false);
});

test('false', function () {
    expect(_script2.default.false(null)).toBe(false);
    expect(_script2.default.false(false)).toBe(true);
    expect(_script2.default.false(true)).toBe(false);
    expect(_script2.default.false([])).toBe(false);
    expect(_script2.default.false([''])).toBe(false);
    expect(_script2.default.false(0)).toBe(true);
    expect(_script2.default.false(1)).toBe(false);
    expect(_script2.default.false(-1)).toBe(false);
    expect(_script2.default.false('0')).toBe(true);
    expect(_script2.default.false('1')).toBe(false);
    expect(_script2.default.false('-1')).toBe(false);
    expect(_script2.default.false('')).toBe(false);
    expect(_script2.default.false(' ')).toBe(false);
    expect(_script2.default.false('null')).toBe(false);
    expect(_script2.default.false('false')).toBe(true);
    expect(_script2.default.false('true')).toBe(false);
    expect(_script2.default.false('str')).toBe(false);
    expect(_script2.default.false([0, 1])).toBe(false);
    expect(_script2.default.false([0])).toBe(false);
    expect(_script2.default.false({})).toBe(false);
    expect(_script2.default.false(function () {
        return un.known.property;
    })).toBe(false);
});

test('v', function () {
    expect(_script2.default.v('foo')).toBe('foo');
    expect(_script2.default.v(0)).toBe(0);
    expect(_script2.default.v('')).toBe(null);
    expect(_script2.default.v(' ', 'default')).toBe('default');
    expect(_script2.default.v('', [], 'baz')).toBe('baz');
    expect(_script2.default.v('', [], null)).toBe(null);
    expect(_script2.default.v()).toBe(null);
});

test('loop', function () {
    var arr = ['foo', 'bar', 'baz'];
    _script2.default.loop(arr, function (arr__value) {
        expect(['foo', 'bar', 'baz'].includes(arr__value)).toBe(true);
    });
    _script2.default.loop(arr, function (arr__key, arr__value) {
        if (arr__key === 0) {
            expect(arr__value).toBe('foo');
        }
        if (arr__key === 1) {
            expect(arr__value).toBe('bar');
        }
        if (arr__key === 2) {
            expect(arr__value).toBe('baz');
        }
    });
    var arr = [];
    _script2.default.loop(arr, function (arr__key, arr__value) {
        expect(true).toBe(false);
    });
    var obj = { bar: 'foo', foo: 'bar', baz: 'baz' };
    _script2.default.loop(obj, function (obj__key, obj__value) {
        if (obj__key === 'bar') {
            expect(obj__value).toBe('foo');
        }
        if (obj__key === 'foo') {
            expect(obj__value).toBe('bar');
        }
        if (obj__key === 'baz') {
            expect(obj__value).toBe('baz');
        }
    });
    var obj = {};
    _script2.default.loop(obj, function (obj__key, obj__value) {
        expect(true).toBe(false);
    });
    _script2.default.loop(null, function (key, value) {
        expect(true).toBe(false);
    });
    _script2.default.loop(function () {
        return vrbl;
    }, function (vrbl__value, vrbl__key) {
        expect(true).toBe(false);
    });
});

test('last', function () {
    expect(_script2.default.last(['foo', 'bar', 'baz'])).toBe('baz');
    expect(_script2.default.last({ foo: 'bar', bar: 'baz' })).toBe('baz');
    expect(_script2.default.last([''])).toBe('');
});

test('first', function () {
    expect(_script2.default.first(['foo', 'bar', 'baz'])).toBe('foo');
    expect(_script2.default.first({ foo: 'bar', bar: 'baz' })).toBe('bar');
    expect(_script2.default.first([''])).toBe('');
});

test('random', function () {
    expect(['foo', 'bar', 'baz'].indexOf(_script2.default.rand(['foo', 'bar', 'baz'])) > -1).toBe(true);
    expect(_script2.default.random_string().length).toBe(8);
    expect(_script2.default.random_string(10).length).toBe(10);
    expect(_script2.default.random_string(16, 'idkfa').length).toBe(16);
});

test('capitalize', function () {
    expect(_script2.default.capitalize('string')).toBe('String');
    expect(_script2.default.capitalize('')).toBe('');
    expect(_script2.default.capitalize('STRINGß')).toBe('STRINGß');
    expect(_script2.default.capitalize(null)).toBe(null);
});

test('cookies', function () {
    _script2.default.cookieSet('foo', 'bar');
    expect(_script2.default.cookieGet('foo')).toBe('bar');
    expect(_script2.default.cookieExists('foo')).toBe(true);
    expect(_script2.default.cookieExists('bar')).toBe(false);
    _script2.default.cookieDelete('foo');
    expect(_script2.default.cookieExists('foo')).toBe(false);
});

test('getParam', function () {
    expect(_script2.default.getParam('foo')).toBe('bar');
    expect(_script2.default.getParam('bar')).toBe('baz');
    expect(_script2.default.getParam('baz')).toBe(null);
});

test('device', function () {
    expect(_script2.default.isPhone()).toBe(false);
    expect(_script2.default.isTablet()).toBe(false);
    expect(_script2.default.isDesktop()).toBe(true);
    expect(_script2.default.isMobile()).toBe(false);
    expect(_script2.default.isTouch()).toBe(false);
});

test('isObject', function () {
    expect(_script2.default.isObject({})).toBe(true);
    expect(_script2.default.isObject('')).toBe(false);
    expect(_script2.default.isObject(null)).toBe(false);
    expect(_script2.default.isObject(true)).toBe(false);
    expect(_script2.default.isObject(false)).toBe(false);
    expect(_script2.default.isObject([])).toBe(false);
    expect(_script2.default.isObject()).toBe(false);
    expect(_script2.default.isObject(1)).toBe(false);
    expect(_script2.default.isObject(0)).toBe(false);
    expect(_script2.default.isObject('str')).toBe(false);
    expect(_script2.default.isObject(new Date())).toBe(false);
    expect(_script2.default.isObject({ foo: 'bar' })).toBe(true);
    expect(_script2.default.isObject({ 'foo': 'bar' })).toBe(true);
    expect(_script2.default.isObject(['foo', 'bar'])).toBe(false);
});

test('isArray', function () {
    expect(_script2.default.isArray({})).toBe(false);
    expect(_script2.default.isArray('')).toBe(false);
    expect(_script2.default.isArray(null)).toBe(false);
    expect(_script2.default.isArray(true)).toBe(false);
    expect(_script2.default.isArray(false)).toBe(false);
    expect(_script2.default.isArray([])).toBe(true);
    expect(_script2.default.isArray()).toBe(false);
    expect(_script2.default.isArray(1)).toBe(false);
    expect(_script2.default.isArray(0)).toBe(false);
    expect(_script2.default.isArray('str')).toBe(false);
    expect(_script2.default.isArray(new Date())).toBe(false);
    expect(_script2.default.isArray({ foo: 'bar' })).toBe(false);
    expect(_script2.default.isArray({ 'foo': 'bar' })).toBe(false);
    expect(_script2.default.isArray(['foo', 'bar'])).toBe(true);
});

test('isString', function () {
    expect(_script2.default.isString('foo')).toBe(true);
    expect(_script2.default.isString(42)).toBe(false);
    expect(_script2.default.isString(null)).toBe(false);
    expect(_script2.default.isString(true)).toBe(false);
    expect(_script2.default.isString(false)).toBe(false);
    expect(_script2.default.isString('')).toBe(true);
});

test('isDate', function () {
    expect(_script2.default.isDate('2018-01-01')).toBe(true);
    expect(_script2.default.isDate('2018-02-29')).toBe(false);
    expect(_script2.default.isDate('1700-01-01')).toBe(true);
    expect(_script2.default.isDate(42)).toBe(false);
    expect(_script2.default.isDate(false)).toBe(false);
    expect(_script2.default.isDate(true)).toBe(false);
    expect(_script2.default.isDate('')).toBe(false);
    expect(_script2.default.isDate(new Date())).toBe(true);
    expect(_script2.default.isDate(new Date('2018-01-01'))).toBe(true);
    expect(_script2.default.isDate(new Date('2018-02-29'))).toBe(true);
    expect(_script2.default.isDate('&nbsp; 1')).toBe(false);
});

test('guid', function () {
    expect(_script2.default.guid().split('-').length).toBe(5);
    expect(_script2.default.guid().split('-').join('').length).toBe(32);
    expect(_script2.default.guid().length).toBe(36);
    expect(_script2.default.guid().substring(0, 8).indexOf('-')).toBe(-1);
    expect(_script2.default.guid().substring(9, 13).indexOf('-')).toBe(-1);
    expect(_script2.default.guid().substring(14, 18).indexOf('-')).toBe(-1);
    expect(_script2.default.guid().substring(19, 23).indexOf('-')).toBe(-1);
    expect(_script2.default.guid().substring(24, 32).indexOf('-')).toBe(-1);
});

test('replaceAll', function () {
    expect(_script2.default.replaceAll('foo bar baz', 'a', 'b')).toBe('foo bbr bbz');
    expect(_script2.default.replaceAll('foo bar baz', '', 'b')).toBe('fbobob bbbabrb bbbabz');
    expect(_script2.default.replaceAll('foo bar baz', ' ', '')).toBe('foobarbaz');
    expect(_script2.default.replaceAll('', 'a', 'b')).toBe('');
});

test('json', function () {
    expect(_script2.default.jsonStringToObject(_script2.default.jsonObjectToString(['foo', 'bar', 'baz']))).toEqual(['foo', 'bar', 'baz']);
    expect(_script2.default.jsonStringToObject(null)).toBe(null);
    expect(_script2.default.jsonStringToObject(false)).toBe(null);
    expect(_script2.default.jsonStringToObject(true)).toBe(null);
    expect(_script2.default.jsonStringToObject('')).toBe(null);
    expect(_script2.default.jsonStringToObject('["foo","bar","baz",]')).toBe(null);
    expect(_script2.default.jsonObjectToString(_script2.default.jsonStringToObject('["foo","bar","baz"]'))).toEqual('["foo","bar","baz"]');
    expect(_script2.default.jsonObjectToString(null)).toBe('null');
    expect(_script2.default.jsonObjectToString(false)).toBe('false');
    expect(_script2.default.jsonObjectToString(true)).toBe('true');
    expect(_script2.default.jsonObjectToString('')).toBe('\"\"');

    expect(_script2.default.isJsonString('')).toBe(false);
    expect(_script2.default.isJsonString('["foo","bar","baz",]')).toBe(false);
    expect(_script2.default.isJsonString(null)).toBe(false);
    expect(_script2.default.isJsonString('["foo","bar","baz"]')).toBe(true);
});

test('htmlencode/decode', function () {
    expect(_script2.default.htmlEncode('&<>"`\'')).toBe('&amp;&lt;&gt;&quot;&#96;&#x27;');
    expect(_script2.default.htmlDecode('&amp;&lt;&gt;&quot;&#96;&#x27;')).toBe('&<>"`\'');
});

test('get/post', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    response = void 0;
                    _context.next = 3;
                    return _script2.default.get('http://httpbin.org/anything');

                case 3:
                    response = _context.sent;

                    expect(response.method).toBe('GET');
                    _context.next = 7;
                    return _script2.default.post('http://httpbin.org/anything', { data: { foo: 'bar', bar: 'baz' } });

                case 7:
                    response = _context.sent;

                    expect(response.method).toBe('POST');
                    expect(response.data).toBe(_script2.default.jsonObjectToString({ foo: 'bar', bar: 'baz' }));
                    _context.next = 12;
                    return _script2.default.post('http://httpbin.org/anything', { data: { foo: 'bar', bar: 'baz' }, headers: { Bar: 'baz' } });

                case 12:
                    response = _context.sent;

                    expect(response.method).toBe('POST');
                    expect(response.data).toBe(_script2.default.jsonObjectToString({ foo: 'bar', bar: 'baz' }));
                    expect(response.headers.Bar).toBe('baz');
                    _context.next = 18;
                    return _script2.default.get('https://httpbin.org/status/404', { throttle: 0, allow_errors: false }).then(function () {
                        expect(true).toBe(false);
                    }).catch(function () {
                        expect(true).toBe(true);
                    });

                case 18:
                    _context.next = 20;
                    return _script2.default.get('https://httpbin.org/status/404', { throttle: 0, allow_errors: true }).then(function () {
                        expect(true).toBe(true);
                    }).catch(function () {
                        expect(true).toBe(false);
                    });

                case 20:
                    _context.next = 22;
                    return _script2.default.get('https://httpbin.org/status/404', { throttle: 0 }).then(function () {
                        expect(true).toBe(true);
                    }).catch(function () {
                        expect(true).toBe(false);
                    });

                case 22:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));

test('uniqueArray', function () {
    expect(_script2.default.uniqueArray(['foo', 'bar', 'foo', 'baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(_script2.default.uniqueArray(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(_script2.default.uniqueArray(['Foo', 'bar', 'baz', 'foo'])).toEqual(['Foo', 'bar', 'baz', 'foo']);
    expect(_script2.default.uniqueArray(['Foo', 'bar', 'baz', 'Foo'])).toEqual(['Foo', 'bar', 'baz']);
    expect(_script2.default.uniqueArray(['foo'])).toEqual(['foo']);
    expect(_script2.default.uniqueArray([null, null])).toEqual([null]);
    expect(_script2.default.uniqueArray([null, false])).toEqual([null, false]);
    expect(_script2.default.uniqueArray([false, null])).toEqual([false, null]);
    expect(_script2.default.uniqueArray([false, false])).toEqual([false]);
    expect(_script2.default.uniqueArray([true])).toEqual([true]);
    expect(_script2.default.uniqueArray([])).toEqual([]);
    expect(_script2.default.uniqueArray(['', ''])).toEqual(['']);
    expect(_script2.default.uniqueArray([''])).toEqual(['']);
});

test('char', function () {
    expect(_script2.default.charToInt('D')).toBe(4);
    expect(_script2.default.charToInt('d')).toBe(4);
    expect(_script2.default.charToInt('A')).toBe(1);
    expect(_script2.default.charToInt('Z')).toBe(26);
    expect(_script2.default.charToInt('AA')).toBe(27);
    expect(_script2.default.intToChar(4)).toBe('D');
    expect(_script2.default.intToChar(1)).toBe('A');
    expect(_script2.default.intToChar(26)).toBe('Z');
    expect(_script2.default.intToChar(27)).toBe('AA');
    expect(_script2.default.incChar('D')).toBe('E');
    expect(_script2.default.incChar('Z')).toBe('AA');
    expect(_script2.default.incChar('A', 2)).toBe('C');
    expect(_script2.default.decChar('U')).toBe('T');
    expect(_script2.default.decChar('U', 2)).toBe('S');
    expect(_script2.default.decChar('A')).toBe('');
});

test('range', function () {
    expect(_script2.default.range('A', 'Z')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
    expect(_script2.default.range('C', 'A')).toEqual(['C', 'B', 'A']);
    expect(_script2.default.range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(_script2.default.range(10, 0)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    expect(_script2.default.range(0, 'A')).toBe(null);
});

test('dateToWeek', function () {
    expect(_script2.default.dateToWeek(new Date('2018-01-01'))).toBe(1);
    expect(_script2.default.dateToWeek(new Date('2021-02-22'))).toBe(8);
    expect(_script2.default.dateToWeek(new Date('1980-03-27'))).toBe(13);
    expect(_script2.default.dateToWeek()).toBe(_script2.default.dateToWeek(new Date()));
});

test('weekToDate', function () {
    expect(_script2.default.weekToDate(42, 2018)).toEqual(new Date('2018-10-14'));
    expect(_script2.default.weekToDate(17, 2023)).toEqual(new Date('2023-04-23'));
});

test('addDays', function () {
    expect(_script2.default.addDays(new Date('2018-01-01'), 7)).toEqual(new Date('2018-01-08'));
    expect(_script2.default.addDays(new Date('2018-02-22'), 658)).toEqual(new Date('2019-12-12'));
});

test('objectsAreEqual', function () {
    expect(_script2.default.objectsAreEqual({}, {})).toBe(true);
    expect(_script2.default.objectsAreEqual({ foo: 'bar' }, { foo: 'bar' })).toBe(true);
    expect(_script2.default.objectsAreEqual({ foo: 'bar' }, { bar: 'baz' })).toBe(false);
    expect(_script2.default.objectsAreEqual({ foo: 'bar', bar: [] }, { foo: 'bar', bar: [] })).toBe(true);
});

test('containsObject', function () {
    expect(_script2.default.containsObject({ foo: 'bar' }, [])).toBe(false);
    expect(_script2.default.containsObject({ foo: 'bar' }, [{ foo: 'bar' }, { bar: 'baz' }])).toBe(true);
    expect(_script2.default.containsObject({ foo: 'bar' }, { foo: { foo: 'bar' } })).toBe(true);
});

test('isNumeric', function () {
    expect(_script2.default.isNumeric(1337)).toBe(true);
    expect(_script2.default.isNumeric('42')).toBe(true);
    expect(_script2.default.isNumeric('a')).toBe(false);
});

test('deepCopy', function () {
    expect(_script2.default.deepCopy({ foo: 'bar' })).toEqual({ foo: 'bar' });
    expect(_script2.default.deepCopy(['foo', 'bar'])).toEqual(['foo', 'bar']);
    expect(_script2.default.deepCopy(new Date('2018-01-01'))).toEqual(new Date('2018-01-01'));
    expect(_script2.default.deepCopy(new RegExp('ab+c', 'i'))).toEqual(new RegExp('ab+c', 'i'));
});

test('fmath', function () {
    expect(_script2.default.fmath('*', 0.1, 0.2)).toEqual(0.02);
    expect(_script2.default.fmath('+', 0.1, 0.2)).toEqual(0.3);
    expect(_script2.default.fmath('-', 0.1, 0.2)).toEqual(-0.1);
    expect(_script2.default.fmath('/', 0.2, 0.1)).toEqual(2);
    expect(_script2.default.fmath('/', 0.39, 100, 12)).toEqual(0.0039);
});

test('pushId', function () {
    expect(_script2.default.pushId().length > 3).toEqual(true);
    expect(_script2.default.pushId().length > 3).toEqual(true);
});

},{"./../../_js/script":1,"babel-runtime/helpers/asyncToGenerator":19,"babel-runtime/regenerator":26}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":27}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":28}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":29}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":30}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":31}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":32}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":33}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":34}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":35}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-names"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-names":36}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":37}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/values"), __esModule: true };
},{"core-js/library/fn/object/values":38}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":39}],16:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":40}],17:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":41}],18:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/weak-map"), __esModule: true };
},{"core-js/library/fn/weak-map":42}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":15}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":10}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
},{"../core-js/object/define-property":10}],23:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":4,"../core-js/is-iterable":5}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":3}],25:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":16,"../core-js/symbol/iterator":17}],26:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":156}],27:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;

},{"../../modules/_core":58,"../../modules/es6.array.from":131,"../../modules/es6.string.iterator":141}],28:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/core.get-iterator":129,"../modules/es6.string.iterator":141,"../modules/web.dom.iterable":155}],29:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');

},{"../modules/core.is-iterable":130,"../modules/es6.string.iterator":141,"../modules/web.dom.iterable":155}],30:[function(require,module,exports){
var core = require('../../modules/_core');
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

},{"../../modules/_core":58}],31:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
require('../modules/es7.map.of');
require('../modules/es7.map.from');
module.exports = require('../modules/_core').Map;

},{"../modules/_core":58,"../modules/es6.map":133,"../modules/es6.object.to-string":139,"../modules/es6.string.iterator":141,"../modules/es7.map.from":144,"../modules/es7.map.of":145,"../modules/es7.map.to-json":146,"../modules/web.dom.iterable":155}],32:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":58,"../../modules/es6.object.assign":134}],33:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":58,"../../modules/es6.object.create":135}],34:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":58,"../../modules/es6.object.define-property":136}],35:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;

},{"../../modules/_core":58,"../../modules/es7.object.entries":147}],36:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-names');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};

},{"../../modules/_core":58,"../../modules/es6.object.get-own-property-names":137}],37:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":58,"../../modules/es6.object.keys":138}],38:[function(require,module,exports){
require('../../modules/es7.object.values');
module.exports = require('../../modules/_core').Object.values;

},{"../../modules/_core":58,"../../modules/es7.object.values":148}],39:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":58,"../modules/es6.object.to-string":139,"../modules/es6.promise":140,"../modules/es6.string.iterator":141,"../modules/es7.promise.finally":149,"../modules/es7.promise.try":150,"../modules/web.dom.iterable":155}],40:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":58,"../../modules/es6.object.to-string":139,"../../modules/es6.symbol":142,"../../modules/es7.symbol.async-iterator":151,"../../modules/es7.symbol.observable":152}],41:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":126,"../../modules/es6.string.iterator":141,"../../modules/web.dom.iterable":155}],42:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-map');
require('../modules/es7.weak-map.of');
require('../modules/es7.weak-map.from');
module.exports = require('../modules/_core').WeakMap;

},{"../modules/_core":58,"../modules/es6.object.to-string":139,"../modules/es6.weak-map":143,"../modules/es7.weak-map.from":153,"../modules/es7.weak-map.of":154,"../modules/web.dom.iterable":155}],43:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],44:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],45:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],46:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":78}],47:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":68}],48:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":117,"./_to-iobject":119,"./_to-length":120}],49:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":51,"./_ctx":60,"./_iobject":75,"./_to-length":120,"./_to-object":121}],50:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":77,"./_is-object":78,"./_wks":127}],51:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":50}],52:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":53,"./_wks":127}],53:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],54:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":45,"./_ctx":60,"./_descriptors":62,"./_for-of":68,"./_iter-define":81,"./_iter-step":83,"./_meta":86,"./_object-create":90,"./_object-dp":91,"./_redefine-all":106,"./_set-species":110,"./_validate-collection":124}],55:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":47,"./_classof":52}],56:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":45,"./_an-object":46,"./_array-methods":49,"./_for-of":68,"./_has":70,"./_is-object":78,"./_meta":86,"./_redefine-all":106,"./_validate-collection":124}],57:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var meta = require('./_meta');
var fails = require('./_fails');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var setToStringTag = require('./_set-to-string-tag');
var dP = require('./_object-dp').f;
var each = require('./_array-methods')(0);
var DESCRIPTORS = require('./_descriptors');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":45,"./_array-methods":49,"./_descriptors":62,"./_export":66,"./_fails":67,"./_for-of":68,"./_global":69,"./_hide":71,"./_is-object":78,"./_meta":86,"./_object-dp":91,"./_redefine-all":106,"./_set-to-string-tag":111}],58:[function(require,module,exports){
var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],59:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":91,"./_property-desc":105}],60:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":43}],61:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],62:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":67}],63:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":69,"./_is-object":78}],64:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],65:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":96,"./_object-keys":99,"./_object-pie":100}],66:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":58,"./_ctx":60,"./_global":69,"./_hide":71}],67:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],68:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":46,"./_ctx":60,"./_is-array-iter":76,"./_iter-call":79,"./_to-length":120,"./core.get-iterator-method":128}],69:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],70:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],71:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":62,"./_object-dp":91,"./_property-desc":105}],72:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":69}],73:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":62,"./_dom-create":63,"./_fails":67}],74:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],75:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":53}],76:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":84,"./_wks":127}],77:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":53}],78:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],79:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":46}],80:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":71,"./_object-create":90,"./_property-desc":105,"./_set-to-string-tag":111,"./_wks":127}],81:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":66,"./_has":70,"./_hide":71,"./_iter-create":80,"./_iterators":84,"./_library":85,"./_object-gpo":97,"./_redefine":107,"./_set-to-string-tag":111,"./_wks":127}],82:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":127}],83:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],84:[function(require,module,exports){
module.exports = {};

},{}],85:[function(require,module,exports){
module.exports = true;

},{}],86:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":67,"./_has":70,"./_is-object":78,"./_object-dp":91,"./_uid":123}],87:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":53,"./_global":69,"./_task":116}],88:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":43}],89:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":67,"./_iobject":75,"./_object-gops":96,"./_object-keys":99,"./_object-pie":100,"./_to-object":121}],90:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":46,"./_dom-create":63,"./_enum-bug-keys":64,"./_html":72,"./_object-dps":92,"./_shared-key":112}],91:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":46,"./_descriptors":62,"./_ie8-dom-define":73,"./_to-primitive":122}],92:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":46,"./_descriptors":62,"./_object-dp":91,"./_object-keys":99}],93:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":62,"./_has":70,"./_ie8-dom-define":73,"./_object-pie":100,"./_property-desc":105,"./_to-iobject":119,"./_to-primitive":122}],94:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":95,"./_to-iobject":119}],95:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":64,"./_object-keys-internal":98}],96:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],97:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":70,"./_shared-key":112,"./_to-object":121}],98:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":48,"./_has":70,"./_shared-key":112,"./_to-iobject":119}],99:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":64,"./_object-keys-internal":98}],100:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],101:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":58,"./_export":66,"./_fails":67}],102:[function(require,module,exports){
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":99,"./_object-pie":100,"./_to-iobject":119}],103:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],104:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":46,"./_is-object":78,"./_new-promise-capability":88}],105:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],106:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":71}],107:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":71}],108:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":43,"./_ctx":60,"./_export":66,"./_for-of":68}],109:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":66}],110:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":58,"./_descriptors":62,"./_global":69,"./_object-dp":91,"./_wks":127}],111:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":70,"./_object-dp":91,"./_wks":127}],112:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":113,"./_uid":123}],113:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":69}],114:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":43,"./_an-object":46,"./_wks":127}],115:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":61,"./_to-integer":118}],116:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":53,"./_ctx":60,"./_dom-create":63,"./_global":69,"./_html":72,"./_invoke":74}],117:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":118}],118:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],119:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":61,"./_iobject":75}],120:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":118}],121:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":61}],122:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":78}],123:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],124:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":78}],125:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":58,"./_global":69,"./_library":85,"./_object-dp":91,"./_wks-ext":126}],126:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":127}],127:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":69,"./_shared":113,"./_uid":123}],128:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":52,"./_core":58,"./_iterators":84,"./_wks":127}],129:[function(require,module,exports){
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":46,"./_core":58,"./core.get-iterator-method":128}],130:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};

},{"./_classof":52,"./_core":58,"./_iterators":84,"./_wks":127}],131:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":59,"./_ctx":60,"./_export":66,"./_is-array-iter":76,"./_iter-call":79,"./_iter-detect":82,"./_to-length":120,"./_to-object":121,"./core.get-iterator-method":128}],132:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":44,"./_iter-define":81,"./_iter-step":83,"./_iterators":84,"./_to-iobject":119}],133:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":57,"./_collection-strong":54,"./_validate-collection":124}],134:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":66,"./_object-assign":89}],135:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":66,"./_object-create":90}],136:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":62,"./_export":66,"./_object-dp":91}],137:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-gopn-ext":94,"./_object-sap":101}],138:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":99,"./_object-sap":101,"./_to-object":121}],139:[function(require,module,exports){

},{}],140:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":43,"./_an-instance":45,"./_classof":52,"./_core":58,"./_ctx":60,"./_export":66,"./_for-of":68,"./_global":69,"./_is-object":78,"./_iter-detect":82,"./_library":85,"./_microtask":87,"./_new-promise-capability":88,"./_perform":103,"./_promise-resolve":104,"./_redefine-all":106,"./_set-species":110,"./_set-to-string-tag":111,"./_species-constructor":114,"./_task":116,"./_wks":127}],141:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":81,"./_string-at":115}],142:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":46,"./_descriptors":62,"./_enum-keys":65,"./_export":66,"./_fails":67,"./_global":69,"./_has":70,"./_hide":71,"./_is-array":77,"./_is-object":78,"./_library":85,"./_meta":86,"./_object-create":90,"./_object-dp":91,"./_object-gopd":93,"./_object-gopn":95,"./_object-gopn-ext":94,"./_object-gops":96,"./_object-keys":99,"./_object-pie":100,"./_property-desc":105,"./_redefine":107,"./_set-to-string-tag":111,"./_shared":113,"./_to-iobject":119,"./_to-primitive":122,"./_uid":123,"./_wks":127,"./_wks-define":125,"./_wks-ext":126}],143:[function(require,module,exports){
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":49,"./_collection":57,"./_collection-weak":56,"./_fails":67,"./_is-object":78,"./_meta":86,"./_object-assign":89,"./_redefine":107,"./_validate-collection":124}],144:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":108}],145:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":109}],146:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":55,"./_export":66}],147:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":66,"./_object-to-array":102}],148:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":66,"./_object-to-array":102}],149:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":58,"./_export":66,"./_global":69,"./_promise-resolve":104,"./_species-constructor":114}],150:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":66,"./_new-promise-capability":88,"./_perform":103}],151:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":125}],152:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":125}],153:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require('./_set-collection-from')('WeakMap');

},{"./_set-collection-from":108}],154:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require('./_set-collection-of')('WeakMap');

},{"./_set-collection-of":109}],155:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":69,"./_hide":71,"./_iterators":84,"./_wks":127,"./es6.array.iterator":132}],156:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":157}],157:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}]},{},[2]);
