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