import hlp from './../../_js/script';

test('x', () =>
{
    expect( hlp.x(null) ).toBe(false);
    expect( hlp.x(false) ).toBe(false);
    expect( hlp.x(true) ).toBe(true);
    expect( hlp.x([]) ).toBe(false);
    expect( hlp.x(['']) ).toBe(false);
    expect( hlp.x(0) ).toBe(true);
    expect( hlp.x(1) ).toBe(true);
    expect( hlp.x(-1) ).toBe(true);
    expect( hlp.x('0') ).toBe(true);
    expect( hlp.x('1') ).toBe(true);
    expect( hlp.x('-1') ).toBe(true);
    expect( hlp.x('') ).toBe(false);
    expect( hlp.x(' ') ).toBe(false);
    expect( hlp.x('null') ).toBe(true);
    expect( hlp.x('false') ).toBe(true);
    expect( hlp.x('true') ).toBe(true);
    expect( hlp.x('str') ).toBe(true);
    expect( hlp.x([0,1]) ).toBe(true);
    expect( hlp.x([0]) ).toBe(true);
    expect( hlp.x({}) ).toBe(false);
    expect( hlp.x((()=>un.known.property)) ).toBe(false);
});

test('nx', () =>
{
    expect( hlp.nx(null) ).toBe(true);
    expect( hlp.nx(false) ).toBe(true);
    expect( hlp.nx(true) ).toBe(false);
    expect( hlp.nx([]) ).toBe(true);
    expect( hlp.nx(['']) ).toBe(true);
    expect( hlp.nx(0) ).toBe(false);
    expect( hlp.nx(1) ).toBe(false);
    expect( hlp.nx(-1) ).toBe(false);
    expect( hlp.nx('0') ).toBe(false);
    expect( hlp.nx('1') ).toBe(false);
    expect( hlp.nx('-1') ).toBe(false);
    expect( hlp.nx('') ).toBe(true);
    expect( hlp.nx(' ') ).toBe(true);
    expect( hlp.nx('null') ).toBe(false);
    expect( hlp.nx('false') ).toBe(false);
    expect( hlp.nx('true') ).toBe(false);
    expect( hlp.nx('str') ).toBe(false);
    expect( hlp.nx([0,1]) ).toBe(false);
    expect( hlp.nx([0]) ).toBe(false);
    expect( hlp.nx({}) ).toBe(true);
    expect( hlp.nx((()=>un.known.property)) ).toBe(true);
});

test('true', () =>
{
    expect( hlp.true(null) ).toBe(false);
    expect( hlp.true(false) ).toBe(false);
    expect( hlp.true(true) ).toBe(true);
    expect( hlp.true([]) ).toBe(false);
    expect( hlp.true(['']) ).toBe(false);
    expect( hlp.true(0) ).toBe(false);
    expect( hlp.true(1) ).toBe(true);
    expect( hlp.true(-1) ).toBe(true);
    expect( hlp.true('0') ).toBe(false);
    expect( hlp.true('1') ).toBe(true);
    expect( hlp.true('-1') ).toBe(true);
    expect( hlp.true('') ).toBe(false);
    expect( hlp.true(' ') ).toBe(false);
    expect( hlp.true('null') ).toBe(false);
    expect( hlp.true('false') ).toBe(false);
    expect( hlp.true('true') ).toBe(true);
    expect( hlp.true('str') ).toBe(true);
    expect( hlp.true([0,1]) ).toBe(true);
    expect( hlp.true([0]) ).toBe(true);
    expect( hlp.true({}) ).toBe(false);
    expect( hlp.true((()=>un.known.property)) ).toBe(false);    
});

test('false', () =>
{
    expect( hlp.false(null) ).toBe(false);
    expect( hlp.false(false) ).toBe(true);
    expect( hlp.false(true) ).toBe(false);
    expect( hlp.false([]) ).toBe(false);
    expect( hlp.false(['']) ).toBe(false);
    expect( hlp.false(0) ).toBe(true);
    expect( hlp.false(1) ).toBe(false);
    expect( hlp.false(-1) ).toBe(false);
    expect( hlp.false('0') ).toBe(true);
    expect( hlp.false('1') ).toBe(false);
    expect( hlp.false('-1') ).toBe(false);
    expect( hlp.false('') ).toBe(false);
    expect( hlp.false(' ') ).toBe(false);
    expect( hlp.false('null') ).toBe(false);
    expect( hlp.false('false') ).toBe(true);
    expect( hlp.false('true') ).toBe(false);
    expect( hlp.false('str') ).toBe(false);
    expect( hlp.false([0,1]) ).toBe(false);
    expect( hlp.false([0]) ).toBe(false);
    expect( hlp.false({}) ).toBe(false);
    expect( hlp.false((()=>un.known.property)) ).toBe(false);
});

test('v', () =>
{
    expect( hlp.v('foo') ).toBe('foo');
    expect( hlp.v(0) ).toBe(0);
    expect( hlp.v('') ).toBe(null);
    expect( hlp.v(' ','default') ).toBe('default');
    expect( hlp.v('',[],'baz') ).toBe('baz');
    expect( hlp.v('',[],null) ).toBe(null);
    expect( hlp.v() ).toBe(null);
});

test('loop', () =>
{
    var arr = ['foo', 'bar', 'baz'];
    hlp.loop(arr, (arr__value) =>
    {
        expect(['foo', 'bar', 'baz'].includes(arr__value)).toBe(true);
    });
    hlp.loop(arr, (arr__key, arr__value) =>
    {
        if( arr__key === 0 ) { expect(arr__value).toBe('foo'); }
        if( arr__key === 1 ) { expect(arr__value).toBe('bar'); }
        if( arr__key === 2 ) { expect(arr__value).toBe('baz'); }
    });
    var arr = [];
    hlp.loop(arr, (arr__key, arr__value) =>
    {
        expect(true).toBe(false);
    });
    var obj = {bar: 'foo', foo: 'bar', baz: 'baz'};
    hlp.loop(obj, (obj__key, obj__value) =>
    {
        if( obj__key === 'bar' ) { expect(obj__value).toBe('foo'); }
        if( obj__key === 'foo' ) { expect(obj__value).toBe('bar'); }
        if( obj__key === 'baz' ) { expect(obj__value).toBe('baz'); }
    });
    var obj = {};
    hlp.loop(obj, (obj__key, obj__value) =>
    {
        expect(true).toBe(false);
    });
    hlp.loop(null, (key, value) =>
    {
        expect(true).toBe(false);
    });
    hlp.loop((() => vrbl), (vrbl__value, vrbl__key) =>
    {
        expect(true).toBe(false);
    })
});

test('last', () => {
    expect( hlp.last(['foo', 'bar', 'baz']) ).toBe('baz');
    expect( hlp.last({ foo: 'bar', bar: 'baz'}) ).toBe('baz');
    expect( hlp.last(['']) ).toBe('');
});

test('first', () =>
{
    expect( hlp.first(['foo', 'bar', 'baz']) ).toBe('foo');
    expect( hlp.first({ foo: 'bar', bar: 'baz'}) ).toBe('bar');
    expect( hlp.first(['']) ).toBe('');
});

test('random', () => {
    expect( (['foo', 'bar', 'baz'].indexOf(hlp.rand(['foo', 'bar', 'baz'])) > -1) ).toBe(true);
});

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

    expect( hlp.isJsonString('') ).toBe(false);
    expect( hlp.isJsonString('["foo","bar","baz",]') ).toBe(false);
    expect( hlp.isJsonString(null) ).toBe(false);
    expect( hlp.isJsonString('["foo","bar","baz"]') ).toBe(true);
});

test('htmlencode/decode', () =>
{
    expect( hlp.htmlEncode('&<>"`\'') ).toBe('&amp;&lt;&gt;&quot;&#96;&#x27;');
    expect( hlp.htmlDecode('&amp;&lt;&gt;&quot;&#96;&#x27;') ).toBe('&<>"`\'');
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

test('uniqueArray', () =>
{
    expect( hlp.uniqueArray( ['foo','bar','foo','baz']) ).toEqual( ['foo','bar','baz'] );
    expect( hlp.uniqueArray( ['foo','bar','baz']) ).toEqual( ['foo','bar','baz'] );
    expect( hlp.uniqueArray( ['Foo','bar','baz','foo']) ).toEqual( ['Foo','bar','baz','foo'] );
    expect( hlp.uniqueArray( ['Foo','bar','baz','Foo']) ).toEqual( ['Foo','bar','baz'] );
    expect( hlp.uniqueArray( ['foo']) ).toEqual( ['foo'] );
    expect( hlp.uniqueArray( [null,null]) ).toEqual( [null] );
    expect( hlp.uniqueArray( [null,false]) ).toEqual( [null,false] );
    expect( hlp.uniqueArray( [false,null]) ).toEqual( [false,null] );
    expect( hlp.uniqueArray( [false,false]) ).toEqual( [false] );
    expect( hlp.uniqueArray( [true]) ).toEqual( [true] );
    expect( hlp.uniqueArray( []) ).toEqual( [] );
    expect( hlp.uniqueArray( ['','']) ).toEqual( [''] );
    expect( hlp.uniqueArray( ['']) ).toEqual( [''] );
});

test('char', () =>
{
    expect( hlp.charToInt('D') ).toBe(4);
    expect( hlp.charToInt('d') ).toBe(4);
    expect( hlp.charToInt('A') ).toBe(1);
    expect( hlp.charToInt('Z') ).toBe(26);
    expect( hlp.charToInt('AA') ).toBe(27);
    expect( hlp.intToChar(4) ).toBe('D');
    expect( hlp.intToChar(1) ).toBe('A');
    expect( hlp.intToChar(26) ).toBe('Z');
    expect( hlp.intToChar(27) ).toBe('AA');
    expect( hlp.incChar('D') ).toBe('E');
    expect( hlp.incChar('Z') ).toBe('AA');
    expect( hlp.incChar('A',2) ).toBe('C');
    expect( hlp.decChar('U') ).toBe('T');
    expect( hlp.decChar('U',2) ).toBe('S');
    expect( hlp.decChar('A') ).toBe('');
});

test('range', () =>
{
    expect( hlp.range('A','Z') ).toEqual(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']);
    expect( hlp.range('C','A') ).toEqual(['C','B','A']);
    expect( hlp.range(0,10) ).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    expect( hlp.range(10,0) ).toEqual([10,9,8,7,6,5,4,3,2,1,0]);
    expect( hlp.range(0,'A') ).toBe(null);
});

test('dateToWeek', () =>
{
    expect( hlp.dateToWeek(new Date('2018-01-01')) ).toBe( 1 );
    expect( hlp.dateToWeek(new Date('2021-02-22')) ).toBe( 8 );
    expect( hlp.dateToWeek(new Date('1980-03-27')) ).toBe( 13 );    
    expect( hlp.dateToWeek() ).toBe( hlp.dateToWeek(new Date()) );    
});

test('weekToDate', () =>
{
    expect( hlp.weekToDate(42,2018) ).toEqual( new Date('2018-10-14') );  
    expect( hlp.weekToDate(17,2023) ).toEqual( new Date('2023-04-23') );  
});

test('addDays', () =>
{
    expect( hlp.addDays(new Date('2018-01-01'), 7) ).toEqual( new Date('2018-01-08') );
    expect( hlp.addDays(new Date('2018-02-22'), 658) ).toEqual( new Date('2019-12-12') );
});

test('objectsAreEqual', () =>
{
    expect( hlp.objectsAreEqual({}, {}) ).toBe( true );
    expect( hlp.objectsAreEqual({ foo: 'bar' }, { foo: 'bar' }) ).toBe( true );
    expect( hlp.objectsAreEqual({ foo: 'bar' }, { bar: 'baz' }) ).toBe( false );
    expect( hlp.objectsAreEqual({ foo: 'bar', bar: [] }, { foo: 'bar', bar: [] }) ).toBe( true );
});

test('containsObject', () =>
{
    expect( hlp.containsObject({ foo: 'bar' }, []) ).toBe( false );
    expect( hlp.containsObject({ foo: 'bar' }, [{ foo: 'bar' }, { bar: 'baz' }]) ).toBe( true );
    expect( hlp.containsObject({ foo: 'bar' }, { foo: { foo: 'bar' } }) ).toBe( true );
});

test('isNumeric', () =>
{
    expect( hlp.isNumeric(1337) ).toBe( true );
    expect( hlp.isNumeric('42') ).toBe( true );
    expect( hlp.isNumeric('a') ).toBe( false );
});

test('deepCopy', () =>
{
    expect( hlp.deepCopy({ foo: 'bar' }) ).toEqual({ foo: 'bar' });
    expect( hlp.deepCopy(['foo','bar']) ).toEqual(['foo','bar']);
    expect( hlp.deepCopy(new Date('2018-01-01')) ).toEqual(new Date('2018-01-01'));
    expect( hlp.deepCopy(new RegExp('ab+c', 'i')) ).toEqual(new RegExp('ab+c', 'i'));
});