export default class hlp
{

    static x(input)
    {
        if( input === null || input === false || (typeof input === 'string' && input.trim() == '') || (typeof input === 'object' && Object.keys(input).length === 0 && input.constructor === Object) || (typeof input === 'undefined') || (Array.isArray(input) && input.length === 0) ) { return false; }
        if( Array.isArray(input) && input.length === 1 && input[0] === '' ) { return false; }
        return true;
    }

    static o()
    {
        let args = Array.prototype.slice.call(arguments);
        args = ['o: '].concat(args);
        console.log.apply(console, args);
    }

    static cookie_exists(cookie_name)
    {
        if( document.cookie !== undefined && document.cookie.indexOf(cookie_name) > -1 )
        {
            return true;
        }
        return false;
    }

    static cookie_get(cookie_name)
    {
        var cookie_match = document.cookie.match(new RegExp(cookie_name + '=([^;]+)'));
        if(cookie_match)
        {
            return decodeURIComponent(cookie_match[1]);
        }
        return null;
    }

    static cookie_set(cookie_name, cookie_value, days)
    {
        document.cookie = cookie_name+'='+encodeURIComponent(cookie_value)+'; '+'expires='+((new Date((new Date()).getTime() + (days*24*60*60*1000))).toUTCString())+'; path=/';
    }

    static cookie_delete(cookie_name)
    {
        document.cookie = cookie_name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    }

    static get(variable) { 
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for(var i=0; i < vars.length; i++)
        {
            var pair = vars[i].split('=');
            if(pair[0] == variable && x(pair[1]))
            {
                return pair[1];
            }
        }
        return null;
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

}

window.hlp = {};
Object.getOwnPropertyNames(hlp).forEach((value, key) =>
{
    if( ['length','name','prototype'].includes(value) ) { return; }
    window.hlp[value] = hlp[value];
});