export default class hlp
{

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

    static isObject(a)
    {
        return (!!a) && (a.constructor === Object);
    }

    static isArray(a)
    {
        return (!!a) && (a.constructor === Array);
    }

    static fadeOut(el)
    {
        el.style.opacity = 1;
        (function fade()
        {
            if ((el.style.opacity -= .1) < 0)
            {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    static fadeIn(el)
    {
        el.style.opacity = 0;
        el.style.display = "block";
        (function fade()
        {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1))
            {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    static scrollTo(element, duration = 1)
    {
        let to = (element.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop),
            from = ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop),
            by = (to-from),
            currentIteration = 0,
            animIterations = Math.round(60 * (duration/1000)); 
        (function scroll()
        {
            let value;
            // easeInOutCirc
            let currentIterationTmp = currentIteration;
            currentIterationTmp /= animIterations/2;
            if (currentIterationTmp < 1)
            {
                value = -by/2 * (Math.sqrt(1 - currentIterationTmp*currentIterationTmp) - 1) + from;
            }
            else
            {
                currentIterationTmp -= 2;
                value = by/2 * (Math.sqrt(1 - currentIterationTmp*currentIterationTmp) + 1) + from;
            }
            value = Math.round(value);
            document.documentElement.scrollTop = document.body.scrollTop = value;
            currentIteration++;
            if (currentIteration < animIterations)
            {
                requestAnimationFrame(scroll);
            }    
        })();
    }

    static onResizeHorizontal(fun)
    {
        var windowWidth = window.innerWidth;
        window.addEventListener('resize', () =>
        {
            var windowWidthNew = window.innerWidth;
            if(windowWidthNew != windowWidth)
            {
                windowWidth = windowWidthNew;
                fun();
            }
        });
    }

    static onResizeVertical(fun)
    {
        var windowHeight = window.innerHeight;
        window.addEventListener('resize', () =>
        {
            var windowHeightNew = window.innerHeight;
            if(windowHeightNew != windowHeight)
            {
                windowHeight = windowHeightNew;
                fun();
            }
        });
    }

    static parseJson(string)
    {
        try
        {
            return JSON.parse(string);
        }
        catch(error)
        {
            return string;
        }
    }

    static get(url, success, error, throttle = 0)
    {
        setTimeout(() =>
        {
            let xhr = new XMLHttpRequest();
            xhr.onload = () =>
            { 
                if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 304))
                {
                    error([xhr.readyState, xhr.status, xhr.statusText]);
                }
                success(this.parseJson(xhr.responseText));
            }
            xhr.onerror = () =>
            {  
                error([xhr.readyState, xhr.status, xhr.statusText]);
            }
            xhr.open( 'GET', url, true );            
            xhr.send( null );
        }, throttle);
    }

    static post(url, data, success, error, throttle = 0)
    {
        setTimeout(() =>
        {
            let xhr = new XMLHttpRequest();
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onload = () =>
            {
                if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 304))
                {
                    error(this.parseJson(xhr.statusText));
                }
                success(xhr.responseText);
            }
            xhr.onerror = () =>
            {  
                error([xhr.readyState, xhr.status, xhr.statusText]);
            }
            xhr.open( 'POST', url, true );
            xhr.send( JSON.stringify(data) );
        }, throttle);
    }

    static getWithPromise(url, throttle = 0)
    {
        return new Promise((resolve, reject) =>
        {
            this.get(url, (v) => { resolve(v); }, (v) => { reject(v); }, throttle);
        });
    }

    static postWithPromise(url, data, throttle = 0)
    {
        return new Promise((resolve, reject) =>
        {
            this.post(url, data, (v) => { resolve(v); }, (v) => { reject(v); }, throttle);
        });
    }

    static guid()
    {
        function s4()
        {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    static isVisible(el)
    {
        return !!( el.offsetWidth || el.offsetHeight || el.getClientRects().length );
    }

    static isDate(string)
    {
        return (new Date(string) !== 'Invalid Date') && !isNaN(new Date(string));
    }

    static textareaSetHeight(el)
    {
        el.style.height = '5px';
        el.style.height = (el.scrollHeight)+'px';   
    }

    static textareaSetHeights(selector)
    {
        [].forEach.call(document.querySelectorAll(selector), (el) =>
        {
            if( this.isVisible(el) )
            {
                this.textareaSetHeight(el);
            }
        });
    }

    static textareaAutoHeight(selector)
    {

        this.textareaSetHeights(selector);

        window.addEventListener('resize', () =>
        {
            this.textareaSetHeights(selector);
        });

        document.addEventListener('keyup', (e) =>
        {
            if(e.target && e.target.tagName === 'TEXTAREA')
            {
                this.textareaSetHeight(e.target);
            }
        });
        
    }

    static fixMobileHeightInit()
    {
        /* on apple devices fix height bug (https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html) */
        if( Helpers.isMobile() || Helpers.isTablet() )
        {
            Helpers.fixMobileHeight();
            Helpers.onResizeHorizontal(Helpers.fixMobileHeight);
        }
    }
    static fixMobileHeight()
    {
        // do some manual work here
        document.querySelector('.full-height-item').style.height = window.innerHeight+'px';
    }

    static x(input)
    {
        if( input === null || input === false || (typeof input === 'string' && input.trim() == '') || (typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object) || (typeof input === 'undefined') || (Array.isArray(input) && input.length === 0) ) { return false; }
        if( Array.isArray(input) && input.length === 1 && input[0] === '' ) { return false; }
        return true;
    }

    static nx(input)
    {
        return !this.x(input);
    }

}

window.hlp = {};
Object.getOwnPropertyNames(hlp).forEach((value, key) =>
{
    if( ['length','name','prototype'].includes(value) ) { return; }
    window.hlp[value] = hlp[value];
});