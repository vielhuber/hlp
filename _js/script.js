export default class hlp
{

    static x(input)
    {
        if( typeof input === 'function' )
        {
            try
            {
                input = input();
                return this.x(input);
            }
            catch(e)
            {
                return false;
            }
        }
        if(
            (input === null) ||
            (input === false) ||
            (typeof input === 'string' && input.trim() == '') ||
            (typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object) ||
            (typeof input === 'undefined') ||
            (Array.isArray(input) && input.length === 0) ||
            (Array.isArray(input) && input.length === 1 && input[0] === '')
        )
        {
            return false;
        }
        return true;
    }

    static nx(input)
    {
        return !this.x(input);
    }

    static true(input)
    {
        if( typeof input === 'function' )
        {
            try
            {
                input = input();
                return this.true(input);
            }
            catch(e)
            {
                return false;
            }
        }
        if( input === null ) { return false; }
        if( input === false ) { return false; }
        if( Array.isArray(input) && input.length === 0 ) { return false; }
        if( Array.isArray(input) && hlp.first(input) === '' ) { return false; }
        if( typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object ) { return false; }
        if( input === 0 ) { return false; }
        if( input === '0' ) { return false; }
        if( input === '' ) { return false; }
        if( input === ' ' ) { return false; }
        if( input === 'null' ) { return false; }
        if( input === 'false' ) { return false; }        
        return true;
    }

    static false(input)
    {
        if( typeof input === 'function' )
        {
            try
            {
                input = input();
                return this.false(input);
            }
            catch(e)
            {
                return false;
            }
        }
        if( input === null ) { return false; }
        if( input === false ) { return true; }
        if( Array.isArray(input) && input.length === 0 ) { return false; }
        if( Array.isArray(input) && hlp.first(input) === '' ) { return false; }
        if( typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object ) { return false; }
        if( input === 0 ) { return true; }
        if( input === '0' ) { return true; }
        if( input === '' ) { return false; }
        if( input === ' ' ) { return false; }
        if( input === 'null' ) { return false; }
        if( input === 'false' ) { return true; }        
        return false;
    }

    static v()
    {
        if( this.nx(arguments) )
        {
            return null;
        }
        for( let i = 0; i < arguments.length; i++)
        {
            if( this.x(arguments[i]) )
            {
                return arguments[i];
            }
        }
        return null;
    }

    static loop(input, fun)
    {
        if( this.nx(input) )
        {
            return null;
        }
        if( Array.isArray(input) )
        {
            input.forEach((input__value, input__key) =>
            {
                fun(input__value, input__key);
            });
        }
        else if( typeof input === 'object' )
        {
            Object.entries(input).forEach(([input__key, input__value]) =>
            {
                fun(input__value, input__key);
            });
        }
    }

    static first(input)
    {
        if( Array.isArray(input) )
        {
            var ret = null;
            input.forEach((input__value, input__key) =>
            {
                if( ret === null ) { ret = input__value; }
            });
            return ret;
        }
        if( typeof input === 'object' )
        {
            var ret = null;
            Object.entries(input).forEach(([input__key, input__value]) =>
            {
                if( ret === null ) { ret = input__value; }
            });
            return ret;
        }
        return null;
    }

    static last(input)
    {
        if( Array.isArray(input) )
        {
            let ret = null;
            input.forEach((input__value, input__key) =>
            {
                ret = input__value;
            });
            return ret;
        }
        if( typeof input === 'object' )
        {
            let ret = null;
            Object.entries(input).forEach(([input__key, input__value]) =>
            {
                ret = input__value;
            });
            return ret;
        }
        return null;
    }

    static rand(input)
    {
        if( Array.isArray(input) )
        {
            return input[Math.floor(Math.random()*input.length)];
        }
        if( typeof input === 'object' )
        {
            var input =	Object.values(input); 
            return input[Math.floor(Math.random()*input.length)];
        }
        return null;
    }

    static random_string(length = 8, chars = null)
    {
        if( chars === null ) { chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
        let chars_length = chars.length,
            random_string = '';
        for(let i = 0; i < length; i++)
        {
            random_string += chars[~~(Math.random()*(chars_length-1-0+1))+0];
        }
        return random_string;
    }

    static capitalize(string = null)
    {
        if( string === null )
        {
            return string;
        }
        if( string === '' )
        {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static cookieExists(cookie_name)
    {
        if( document.cookie !== undefined && this.cookieGet(cookie_name) !== null )
        {
            return true;
        }
        return false;
    }

    static cookieGet(cookie_name)
    {
        var cookie_match = document.cookie.match(new RegExp(cookie_name + '=([^;]+)'));
        if(cookie_match)
        {
            return decodeURIComponent(cookie_match[1]);
        }
        return null;
    }

    static cookieSet(cookie_name, cookie_value, days)
    {
        document.cookie = cookie_name+'='+encodeURIComponent(cookie_value)+'; '+'expires='+((new Date((new Date()).getTime() + (days*24*60*60*1000))).toUTCString())+'; path=/';
    }

    static cookieDelete(cookie_name)
    {
        document.cookie = cookie_name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    }

    static getParam(variable)
    { 
        let url = window.location.search;
        if( this.nx(url) )
        {
            return null;
        }
        let query = url.substring(1),
            vars = query.split('&');
        for(var i=0; i < vars.length; i++)
        {
            var pair = vars[i].split('=');
            if(pair[0] == variable && this.x(pair[1]))
            {
                return pair[1];
            }
        }
        return null;
    }

    static getDevice()
    {
        if( this.isPhone() ) { return 'phone'; }
        if( this.isTablet() ) { return 'tablet'; }
        return 'desktop';
    }

    static isPhone()
    {
        // based on detectmobilebrowsers.com
        let a = navigator.userAgent||navigator.vendor||window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
    }

    static isTablet()
    {
        // based on detectmobilebrowsers.com
        let a = navigator.userAgent||navigator.vendor||window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
    }

    static isDesktop()
    {
        return !this.isPhone() && !this.isTablet();
    }

    static isMobile()
    {
        // viewport width based OR phone based
        if( window.innerWidth < 750 || this.isPhone() )
        {
            return true;
        }
        return false;
    }

    static isTouch()
    {
        return 'ontouchstart' in window || navigator.maxTouchPoints || false;
    }

    static isMac()
    {
        return (hlp.getOs() === 'mac');
    }

    static isLinux()
    {
        return (hlp.getOs() === 'linux');
    }

    static isWindows()
    {
        return (hlp.getOs() === 'windows');
    }

    static getOs()
    {
        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = 'unknown';

        if (macosPlatforms.indexOf(platform) !== -1)
        {
            os = 'mac';
        }
        else if (iosPlatforms.indexOf(platform) !== -1)
        {
            os = 'mac';
        }
        else if (windowsPlatforms.indexOf(platform) !== -1)
        {
            os = 'windows';
        }
        else if (/Android/.test(userAgent))
        {
            os = 'linux';
        }
        else if (!os && /Linux/.test(platform))
        {
            os = 'linux';
        }

        return os;
    }

    static getBrowser()
    {
        let browser_name = '',
            isIE = (/*@cc_on!@*/false || !!document.documentMode),
            isEdge = (!isIE && !!window.StyleMedia);

        if( navigator.userAgent.indexOf('Opera') != -1 || navigator.userAgent.indexOf('OPR') != -1 )
        {
            browser_name = 'opera';
        }

        else if(navigator.userAgent.indexOf('Chrome') != -1 && !isEdge)
        {
            browser_name = 'chrome';
        }

        else if(navigator.userAgent.indexOf('Safari') != -1 && !isEdge)
        {
            browser_name = 'safari';
        }

        else if(navigator.userAgent.indexOf('Firefox') != -1 ) 
        {
            browser_name = 'firefox';
        }

        else if((navigator.userAgent.indexOf('MSIE') != -1 ) || (!!document.documentMode == true )) //IF IE > 10
        {
            browser_name = 'ie';
        }

        else if(isEdge)
        {
            browser_name = 'edge';
        }

        else 
        {
           browser_name = 'unknown';
        }

        return browser_name;
    }

    static isObject(a)
    {
        return (!!a) && (a.constructor === Object);
    }

    static isArray(a)
    {
        return (!!a) && (a.constructor === Array);
    }

    static isString(string)
    {
        return (typeof string === 'string' || string instanceof String);
    }

    static isDate(string)
    {
        if( this.nx(string) )
        {
            return false;
        }
        // if string is of object date
        if( Object.prototype.toString.call(string) === '[object Date]' )
        {
            return true;
        }
        // if this is not a string
        if( !this.isString(string) )
        {
            return false;
        }
        // strong check
        if( string.split('-').length !== 3 )
        {
            return false;
        }
        let day = parseInt(string.split('-')[2]),
            month = parseInt(string.split('-')[1]),
            year = parseInt(string.split('-')[0]),
            date = new Date();
        date.setFullYear(year, month-1, day);
        if( (date.getFullYear() == year) && (date.getMonth()+1 == month) && (date.getDate() == day) )
        {
            return true;
        }
        return false;
    }

    static deepCopy(obj, hash = new WeakMap())
    {
        if (Object(obj) !== obj) return obj; // primitives
        if (hash.has(obj)) return hash.get(obj); // cyclic reference
        const result = obj instanceof Date ? new Date(obj)
                     : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
                     : obj.constructor ? new obj.constructor() 
                     : Object.create(null);
        hash.set(obj, result);
        if (obj instanceof Map)
            Array.from(obj, ([key, val]) => result.set(key, hlp.deepCopy(val, hash)) );
        return Object.assign(result, ...Object.keys(obj).map (
            key => ({ [key]: hlp.deepCopy(obj[key], hash) }) ));
    }

    static jsonStringToObject(string)
    {
        if( this.nx(string) || !this.isString(string) )
        {
            return null;
        }
        try
        {
            return JSON.parse(string);
        }
        catch(error)
        {
            return null;
        }
    }

    static isJsonString(string)
    {
        if( this.nx(string) || !this.isString(string) )
        {
            return false;
        }
        try
        {
           let json = JSON.parse(string);
           return true;
        }
        catch(error)
        {
           return false;
        }
    }

    static jsonObjectToString(object)
    {
        try
        {
            return JSON.stringify(object);
        }
        catch(error)
        {
            return null;
        }
    }

    static guid()
    {
        function s4()
        {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    static replaceAll(string, search, replace)
    {
        return string.split(search).join(replace);
    }

    static get(url, success, error, throttle = 0, allow_error = false)
    {
        setTimeout(() =>
        {
            let xhr = new XMLHttpRequest();
            xhr.open( 'GET', url, true );
            xhr.onload = () =>
            { 
                if(xhr.readyState != 4 || (allow_error === false && xhr.status != 200 && xhr.status != 304))
                {
                    error([xhr.readyState, xhr.status, xhr.statusText]);
                }

                if( this.isJsonString(xhr.responseText) )
                {
                    success( this.jsonStringToObject(xhr.responseText) );
                }
                else
                {
                    success( xhr.responseText );
                }
            }
            xhr.onerror = () =>
            {  
                error([xhr.readyState, xhr.status, xhr.statusText]);
            }            
            xhr.send( null );
        }, throttle);
    }

    static post(url, data = null, success, error, headers = null, throttle = 0, allow_error = false)
    {
        setTimeout(() =>
        {
            let xhr = new XMLHttpRequest();
            xhr.open( 'POST', url, true );
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if( this.x(headers) )
            {
                Object.entries(headers).forEach(([headers__key, headers__value]) =>
                {
                    xhr.setRequestHeader(headers__key, headers__value);
                });
            }
            xhr.onload = () =>
            {
                if(xhr.readyState != 4 || (allow_error === false && xhr.status != 200 && xhr.status != 304))
                {
                    if( this.isJsonString(xhr.statusText) )
                    {
                        error( this.jsonStringToObject(xhr.statusText) );
                    }
                    else
                    {
                        error( xhr.statusText );
                    }
                }
                if( this.isJsonString(xhr.responseText) )
                {
                    success( this.jsonStringToObject(xhr.responseText) );
                }
                else
                {
                    success( xhr.responseText );
                }
            }
            xhr.onerror = () =>
            {  
                error([xhr.readyState, xhr.status, xhr.statusText]);
            }            
            xhr.send( JSON.stringify(data) );
        }, throttle);
    }

    static getWithPromise(url, throttle = 0, allow_error = false)
    {
        return new Promise((resolve, reject) =>
        {
            this.get(url, (v) => { resolve(v); }, (v) => { reject(v); }, throttle, allow_error);
        });
    }

    static postWithPromise(url, data = null, headers = null, throttle = 0, allow_error = false)
    {
        return new Promise((resolve, reject) =>
        {
            this.post(url, data, (v) => { resolve(v); }, (v) => { reject(v); }, headers, throttle, allow_error);
        });
    }


    static onResizeHorizontal(fun)
    {
        let windowWidth = window.innerWidth,
            windowWidthNew,
            timeout;
        window.addEventListener('resize', () =>
        {
            windowWidthNew = window.innerWidth;
            if(windowWidthNew != windowWidth)
            {
                windowWidth = windowWidthNew;
                if(timeout)
                {
                    clearTimeout(timeout);
                }
                timeout = window.setTimeout(() =>
                {
                    fun();
                }, 250);
            }
        });
        fun();
    }

    static onResizeVertical(fun)
    {
        var windowHeight = window.innerHeight,
            windowHeightNew,
            timeout;
        window.addEventListener('resize', () =>
        {
            windowHeightNew = window.innerHeight;
            if(windowHeightNew != windowHeight)
            {
                windowHeight = windowHeightNew;
                if(timeout)
                {
                    clearTimeout(timeout);
                }
                timeout = window.setTimeout(() =>
                {
                    fun();
                }, 250);
            }
        });
        fun();
    }

    static uniqueArray(array)
    {
        let seen = {},
            ret_arr = [];
        for( let i = 0; i < array.length; i++ )
        {
            if( !(array[i] in seen) )
            {
                ret_arr.push(array[i]);
                seen[array[i]] = true;
            }
        }
        return ret_arr;
    }

    static charToInt(val)
    {
        val = val.toUpperCase();
        let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', i, j, result = 0;      
        for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1)
        {
            result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
        }      
        return result;
    }
    
    static intToChar(num)
    {
        for( var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26 )
        {
            ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
        }
        return ret;
    }

    static incChar(char, shift = 1)
    {
        return this.intToChar(this.charToInt(char)+shift);
    }

    static decChar(char, shift = 1)
    {
        return this.intToChar(this.charToInt(char)-shift);
    }

    static range(start, end)
    {
        let range = [],
            typeofStart = typeof start,
            typeofEnd = typeof end,
            step = 1;
        if (typeofStart == 'undefined' || typeofEnd == 'undefined' || typeofStart != typeofEnd)
        {
            return null;
        }
        if (end < start)
        {
            step = -step;
        }
        if (typeofStart == 'number')
        {
            while (step > 0 ? end >= start : end <= start)
            {
                range.push(start);
                start += step;
            }
        }
        else if (typeofStart == 'string')
        {
            if (start.length != 1 || end.length != 1)
            {
                return null;
            }
            start = start.charCodeAt(0);
            end = end.charCodeAt(0);
            while (step > 0 ? end >= start : end <= start)
            {
                range.push(String.fromCharCode(start));
                start += step;
            }
        }
        else
        {
            return null;
        }
        return range;
    }

    static dateToWeek(d = null)
    {
        if( d === null )
        {
            d = new Date();
        }
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay()||7));
        let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1)),
            weekNo = Math.ceil((((d-yearStart)/86400000)+1)/7);
        return weekNo;
    }

    static weekToDate(w, y)
    {
        var simple = new Date(y, 0, 1 + (w - 1) * 7),
            dow = simple.getDay(),
            ISOweekStart = simple;
        if (dow <= 4)
        {
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        }
        else
        {
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        }
        ISOweekStart.setUTCHours(0,0,0,0);
        return ISOweekStart;
    }

    static addDays(date, days)
    {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    static objectsAreEqual(x, y)
    {
        var _this = this;
        if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
        if (x.constructor !== y.constructor) { return false; }
        if (x instanceof Function) { return x === y; }
        if (x instanceof RegExp) { return x === y; }
        if (x === y || x.valueOf() === y.valueOf()) { return true; }
        if (Array.isArray(x) && x.length !== y.length) { return false; }
        if (x instanceof Date) { return false; }
        if (!(x instanceof Object)) { return false; }
        if (!(y instanceof Object)) { return false; }
        var p = Object.keys(x);
        return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
            p.every(function (i) { return _this.objectsAreEqual(x[i], y[i]); });
    }

    static containsObject(obj, list)
    {
        var x;
        for(x in list)
        {
            if(list.hasOwnProperty(x) && this.objectsAreEqual(list[x],obj))
            {
                return true;
            }
        }
        return false;
    }

    static fadeOut(el, speed = 1000)
    {
        if( speed <= 25 )
        {
            speed = 25;
        }
        return new Promise(resolve =>
        {
            el.style.opacity = 1;
            (function fade()
            {
                if((el.style.opacity -= (25/speed)) < 0)
                {
                    el.style.display = 'none';
                    resolve();
                }
                else
                {
                    requestAnimationFrame(fade);
                }
            })();
        });
    }

    static fadeIn(el, speed = 1000)
    {
        if( speed <= 25 )
        {
            speed = 25;
        }
        return new Promise(resolve =>
        {
            el.style.opacity = 0;
            el.style.display = 'block';
            (function fade()
            {
                var val = parseFloat(el.style.opacity);
                if(!((val += (25/speed)) > 1))
                {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
                else
                {
                    resolve();
                }
            })();
        });
    }

    static scrollTop()
    {
        let doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    }

    static scrollLeft()
    {
        let doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }

    static offsetTop(el)
    {
        return (el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop);
    }

    static offsetLeft(el)
    {
        return (el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft);
    }

    static offsetRight(el)
    {
        return (el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft) + el.offsetWidth;
    }

    static offsetBottom(el)
    {
        return (el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop) + el.offsetHeight;
    }

    static scrollTo(to, duration = 1000)
    {
        return new Promise(resolve =>
        {
            if( !hlp.isNumeric(to) )
            {
                to = to.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop
            }

            const
                element = document.scrollingElement || document.documentElement,
                start = element.scrollTop,
                change = to - start,
                startDate = +new Date(),
                // t = current time
                // b = start value
                // c = change in value
                // d = duration
                easeInOutQuad = function(t, b, c, d)
                {
                    t /= d/2;
                    if (t < 1) return c/2*t*t + b;
                    t--;
                    return -c/2 * (t*(t-2) - 1) + b;
                },
                easeInOutCirc = function(t, b, c, d)
                {
                    t /= d/2;
                    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                    t -= 2;
                    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
                },
                animateScroll = function()
                {
                    const currentDate = +new Date();
                    const currentTime = currentDate - startDate;
                    element.scrollTop = parseInt(easeInOutCirc(currentTime, start, change, duration));
                    if(currentTime < duration)
                    {
                        requestAnimationFrame(animateScroll);
                    }
                    else
                    {
                        element.scrollTop = to;
                        resolve();
                    }
                };
                animateScroll();

        });
    }

    static loadJs(urls)
    {
        if( !hlp.isArray(urls) )
        {
            urls = [urls];
        }
        let promises = [];
        hlp.loop(urls, (urls__value, urls__key) =>
        {
            promises.push(new Promise((resolve, reject) =>
            {
                let script = document.createElement('script');
                script.src = urls__value;
                script.onload = () => { resolve(); };
                document.head.appendChild(script);
            }));
        });
        return Promise.all(promises);
    }

    static async loadJsSequentially(urls)
    {
        if( !hlp.isArray(urls) )
        {
            urls = [urls];
        }
        for(let urls__value of urls)
        {
            await hlp.loadJs(urls__value);
        }
        return;
    }

    static isVisible(el)
    {
        return !!( el.offsetWidth || el.offsetHeight || el.getClientRects().length );
    }

    static textareaAutoHeight(selector = 'textarea')
    {

        this.textareaSetHeights(selector);

        this.onResizeHorizontal(() =>
        {
            this.textareaSetHeights(selector);
        });

        [].forEach.call(document.querySelectorAll(selector), (el) =>
        {
            el.addEventListener('keyup', (e) =>
            {
                this.textareaSetHeight(e.target);
            });
        });
        
    }

    static textareaSetHeights(selector = 'textarea')
    {
        [].forEach.call(document.querySelectorAll(selector), (el) =>
        {
            if( this.isVisible(el) )
            {
                this.textareaSetHeight(el);
            }
        });
    }

    static textareaSetHeight(el)
    {
        el.style.height = '5px';
        el.style.height = (el.scrollHeight)+'px';   
    }

    static real100vh(selector)
    {
        document.querySelector(selector).style.height = window.innerHeight+'px';
        // onResizeHorizontal does not work, we really have to trigger on every resize
        window.addEventListener('resize', () =>
        {
            document.querySelector(selector).style.height = window.innerHeight+'px'
        });
    }

    static iOsRemoveHover()
    {
        if( hlp.getBrowser() === 'safari' && hlp.getDevice() !== 'desktop' )
        {
            hlp.on('touchend', 'a', (e, el) =>
            {
                el.click();
            });
        }
    }

    static isNumeric(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    static animate(el, from, to, easing, duration)
    {
        return new Promise(resolve =>
        {
            let properties = [];
            from.split(';').forEach((from__value) =>
            {
                properties.push( from__value.split(':')[0].trim() );
            });
            let transition = [];
            properties.forEach((properties__value) =>
            {
                transition.push( properties__value+' '+(Math.round(duration/1000*10)/10)+'s '+easing );
            });
            transition = 'transition: '+transition.join(', ')+' !important;';

            let els = null;
            if( NodeList.prototype.isPrototypeOf(el) )
            {
                els = Array.from(el);
            }
            else if( el === null )
            {
                console.log('cannot animate element from '+from+' to '+to+' because it does not exist');
                resolve();
            }
            else
            {
                els = [el];
            }

            let toFinish = els.length;

            els.forEach((els__value, els__key) =>
            {               
                // add random class
                let random_class = hlp.random_string(10,'abcdefghijklmnopqrstuvwxyz');
                els__value.classList.add(random_class);
                
                window.requestAnimationFrame(() =>
                {                
                    // set from style inline (don't fully remove previous style)
                    let new_style = [];
                    let prev_style = els__value.getAttribute('style');
                    if( prev_style !== null )
                    {
                        prev_style.split(';').forEach((prev_style__value) =>
                        {
                            if( !properties.includes( prev_style__value.split(':')[0].trim() ) )
                            {
                                new_style.push( prev_style__value );
                            }
                        });
                    }
                    new_style = new_style.join(';')+from+';';
                    els__value.setAttribute('style', new_style);

                    window.requestAnimationFrame(() =>
                    {
                        // add transition property
                        let style = document.createElement('style');
                        style.innerHTML = '.'+random_class+' { '+transition+' }';
                        document.head.appendChild(style);

                        window.requestAnimationFrame(() =>
                        {                        
                            // set last style inline
                            els__value.setAttribute('style', els__value.getAttribute('style').replace(from+';','')+to+';');

                            hlp.addEventListenerOnce(els__value, 'transitionend', (event) =>
                            {      
                                // remove previous styles property
                                document.head.removeChild(style);

                                // remove random class
                                els__value.classList.remove(random_class);

                                // resolve promise when last is finished
                                toFinish--;
                                if( toFinish <= 0 )
                                {
                                    window.requestAnimationFrame(() =>
                                    {
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

    static addEventListenerOnce(target, type, listener, addOptions, removeOptions)
    {
        target.addEventListener(type, function fn(event)
        {
            target.removeEventListener(type, fn, removeOptions);
            listener.apply(this, arguments, addOptions);
        });
    }

    static htmlDecode(value)
    {
        let tmp = document.createElement('textarea');
        tmp.innerHTML = value;
        return tmp.value;
    }

    static htmlEncode(value)
    {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/`/g, '&#96;');
    }

    static closest(el, selector)
    {
        if(!document.documentElement.contains(el))
        {
            return null;
        }
        do
        {
            if(this.matches(el, selector))
            {
                return el;
            }
            el = el.parentElement || el.parentNode;
        }
        while(el !== null && el.nodeType === 1); 
        return null;
    }

    static matches(el, selector)
    {
        let node = el,
            nodes = (node.parentNode || node.document).querySelectorAll(selector),
            i = -1;
        while(nodes[++i] && nodes[i] != node);
        return !!nodes[i];
    }

    static remove(el)
    {
        el.parentNode.removeChild(el);
    }

    static on(event, selector, scope, callback = null)
    {
        if( callback === null )
        {
            callback = scope;
            scope = document;
        }
        else
        {
            scope = document.querySelector(scope);
        }
        scope.addEventListener(event, (e) =>
        {
            var el = hlp.closest(e.target, selector);
            if(el)
            { 
                callback(e, el); 
            }
        }, false);
    }

    static url()
    {
        return window.location.protocol + '//' + window.location.host + window.location.pathname;
    }

    static urlWithHash()
    {
        return window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.hash;
    }

}

/* expose all functions to window */
window.hlp = {};
Object.getOwnPropertyNames(hlp).forEach((value, key) =>
{
    if( value === 'length' || value === 'name' || value === 'prototype' || value === 'caller' || value === 'arguments' ) { return; }
    window.hlp[value] = hlp[value];
});