import hlp from './../../_js/script';

test('capitalize', () =>
{
    expect( hlp.capitalize('string') ).toBe('String');
    expect( hlp.capitalize('') ).toBe('');
    expect( hlp.capitalize('STRINGß') ).toBe('STRINGß');
    expect( hlp.capitalize(null) ).toBe(null);
});

test('cookies', () =>
{
    hlp.cookieSet('foo', 'bar');
    expect( hlp.cookieGet('foo') ).toBe('bar');
    expect( hlp.cookieExists('foo') ).toBe(true);
    expect( hlp.cookieExists('bar') ).toBe(false);
    hlp.cookieDelete('foo');
    expect( hlp.cookieExists('foo') ).toBe(false);
});

test('getParam', () =>
{
    expect( hlp.getParam('foo') ).toBe('bar');
    expect( hlp.getParam('bar') ).toBe('baz');
    expect( hlp.getParam('baz') ).toBe(null);
});

test('device', () =>
{
    expect( hlp.isPhone() ).toBe(false);
    expect( hlp.isTablet() ).toBe(false);
    expect( hlp.isDesktop() ).toBe(true);
    expect( hlp.isMobile() ).toBe(false);
    expect( hlp.isTouch() ).toBe(false);
});

test('isObject', () =>
{
    expect( hlp.isObject({}) ).toBe(true);
    expect( hlp.isObject('') ).toBe(false);
    expect( hlp.isObject(null) ).toBe(false);
    expect( hlp.isObject(true) ).toBe(false);
    expect( hlp.isObject(false) ).toBe(false);
    expect( hlp.isObject([]) ).toBe(false);
    expect( hlp.isObject() ).toBe(false);
    expect( hlp.isObject(1) ).toBe(false);
    expect( hlp.isObject(0) ).toBe(false);
    expect( hlp.isObject('str') ).toBe(false);
    expect( hlp.isObject(new Date) ).toBe(false);
    expect( hlp.isObject({foo: 'bar'}) ).toBe(true);
    expect( hlp.isObject({'foo': 'bar'}) ).toBe(true);
    expect( hlp.isObject(['foo','bar']) ).toBe(false);
});

test('isArray', () =>
{
    expect( hlp.isArray({}) ).toBe(false);
    expect( hlp.isArray('') ).toBe(false);
    expect( hlp.isArray(null) ).toBe(false);
    expect( hlp.isArray(true) ).toBe(false);
    expect( hlp.isArray(false) ).toBe(false);
    expect( hlp.isArray([]) ).toBe(true);
    expect( hlp.isArray() ).toBe(false);
    expect( hlp.isArray(1) ).toBe(false);
    expect( hlp.isArray(0) ).toBe(false);
    expect( hlp.isArray('str') ).toBe(false);
    expect( hlp.isArray(new Date) ).toBe(false);
    expect( hlp.isArray({foo: 'bar'}) ).toBe(false);
    expect( hlp.isArray({'foo': 'bar'}) ).toBe(false);
    expect( hlp.isArray(['foo','bar']) ).toBe(true);
});

test('isString', () =>
{
    expect( hlp.isString('foo') ).toBe(true);
    expect( hlp.isString(42) ).toBe(false);
    expect( hlp.isString(null) ).toBe(false);
    expect( hlp.isString(true) ).toBe(false);
    expect( hlp.isString(false) ).toBe(false);
    expect( hlp.isString('') ).toBe(true);
});

test('isDate', () =>
{
    expect( hlp.isDate('2018-01-01') ).toBe(true);
    expect( hlp.isDate('2018-02-29') ).toBe(false);
    expect( hlp.isDate('1700-01-01') ).toBe(true);
    expect( hlp.isDate(42) ).toBe(false);
    expect( hlp.isDate(false) ).toBe(false);
    expect( hlp.isDate(true) ).toBe(false);
    expect( hlp.isDate('') ).toBe(false);
    expect( hlp.isDate(new Date()) ).toBe(true);
    expect( hlp.isDate(new Date('2018-01-01')) ).toBe(true);
    expect( hlp.isDate(new Date('2018-02-29')) ).toBe(true);
    expect( hlp.isDate('&nbsp; 1') ).toBe(false);
});

test('guid', () =>
{
    expect( hlp.guid().split('-').length ).toBe(5);
    expect( hlp.guid().split('-').join('').length ).toBe(32);
    expect( hlp.guid().length ).toBe(36);
    expect( hlp.guid().substring(0,8).indexOf('-') ).toBe(-1);
    expect( hlp.guid().substring(9,13).indexOf('-') ).toBe(-1);
    expect( hlp.guid().substring(14,18).indexOf('-') ).toBe(-1);
    expect( hlp.guid().substring(19,23).indexOf('-') ).toBe(-1);
    expect( hlp.guid().substring(24,32).indexOf('-') ).toBe(-1);
});

test('replaceAll', () =>
{
    expect( hlp.replaceAll('foo bar baz', 'a', 'b') ).toBe('foo bbr bbz');
    expect( hlp.replaceAll('foo bar baz', '', 'b') ).toBe('fbobob bbbabrb bbbabz');
    expect( hlp.replaceAll('foo bar baz', ' ', '') ).toBe('foobarbaz');
    expect( hlp.replaceAll('', 'a', 'b') ).toBe('');
});

test('json', () => 
{
    expect( hlp.jsonStringToObject(hlp.jsonObjectToString(['foo','bar','baz'])) ).toEqual(['foo','bar','baz']);
    expect( hlp.jsonStringToObject(null) ).toBe(null);
    expect( hlp.jsonStringToObject(false) ).toBe(null);
    expect( hlp.jsonStringToObject(true) ).toBe(null);
    expect( hlp.jsonStringToObject('') ).toBe(null);
    expect( hlp.jsonStringToObject('["foo","bar","baz",]') ).toBe(null);
    expect( hlp.jsonObjectToString(hlp.jsonStringToObject('["foo","bar","baz"]')) ).toEqual('["foo","bar","baz"]');
    expect( hlp.jsonObjectToString(null) ).toBe('null');
    expect( hlp.jsonObjectToString(false) ).toBe('false');
    expect( hlp.jsonObjectToString(true) ).toBe('true');
    expect( hlp.jsonObjectToString('') ).toBe('\"\"');
});

test('get/post', async () =>
{
    let data;
    data = await hlp.getWithPromise('http://httpbin.org/anything');
    expect( data.method ).toBe( 'GET' );
    data = await hlp.postWithPromise('http://httpbin.org/anything', { foo: 'bar', bar: 'baz' });
    expect( data.method ).toBe( 'POST' );
    expect( data.data ).toBe( hlp.jsonObjectToString({ foo: 'bar', bar: 'baz' }) );
    data = await hlp.postWithPromise('http://httpbin.org/anything', { foo: 'bar', bar: 'baz' }, { Bar: 'baz' });
    expect( data.method ).toBe( 'POST' );
    expect( data.data ).toBe( hlp.jsonObjectToString({ foo: 'bar', bar: 'baz' }) );
    expect( data.headers.Bar ).toBe( 'baz' );
});