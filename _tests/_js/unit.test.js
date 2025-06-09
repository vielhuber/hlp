/**
 * @jest-environment jsdom
 */

import hlp from '../../_js/script';

test('x', () => {
    expect(hlp.x(undefined)).toBe(false);
    expect(hlp.x(null)).toBe(false);
    expect(hlp.x(false)).toBe(false);
    expect(hlp.x(true)).toBe(true);
    expect(hlp.x([])).toBe(false);
    expect(hlp.x([''])).toBe(false);
    expect(hlp.x(0)).toBe(true);
    expect(hlp.x(1)).toBe(true);
    expect(hlp.x(-1)).toBe(true);
    expect(hlp.x('0')).toBe(true);
    expect(hlp.x('1')).toBe(true);
    expect(hlp.x('-1')).toBe(true);
    expect(hlp.x('')).toBe(false);
    expect(hlp.x(' ')).toBe(false);
    expect(hlp.x('null')).toBe(true);
    expect(hlp.x('false')).toBe(true);
    expect(hlp.x('true')).toBe(true);
    expect(hlp.x('str')).toBe(true);
    expect(hlp.x([0, 1])).toBe(true);
    expect(hlp.x([0])).toBe(true);
    expect(hlp.x({})).toBe(false);
    expect(hlp.x(() => un.known.property)).toBe(false);
});

test('nx', () => {
    expect(hlp.nx(undefined)).toBe(true);
    expect(hlp.nx(null)).toBe(true);
    expect(hlp.nx(false)).toBe(true);
    expect(hlp.nx(true)).toBe(false);
    expect(hlp.nx([])).toBe(true);
    expect(hlp.nx([''])).toBe(true);
    expect(hlp.nx(0)).toBe(false);
    expect(hlp.nx(1)).toBe(false);
    expect(hlp.nx(-1)).toBe(false);
    expect(hlp.nx('0')).toBe(false);
    expect(hlp.nx('1')).toBe(false);
    expect(hlp.nx('-1')).toBe(false);
    expect(hlp.nx('')).toBe(true);
    expect(hlp.nx(' ')).toBe(true);
    expect(hlp.nx('null')).toBe(false);
    expect(hlp.nx('false')).toBe(false);
    expect(hlp.nx('true')).toBe(false);
    expect(hlp.nx('str')).toBe(false);
    expect(hlp.nx([0, 1])).toBe(false);
    expect(hlp.nx([0])).toBe(false);
    expect(hlp.nx({})).toBe(true);
    expect(hlp.nx(() => un.known.property)).toBe(true);
});

test('true', () => {
    expect(hlp.true(undefined)).toBe(false);
    expect(hlp.true(null)).toBe(false);
    expect(hlp.true(false)).toBe(false);
    expect(hlp.true(true)).toBe(true);
    expect(hlp.true([])).toBe(false);
    expect(hlp.true([''])).toBe(false);
    expect(hlp.true(0)).toBe(false);
    expect(hlp.true(1)).toBe(true);
    expect(hlp.true(-1)).toBe(true);
    expect(hlp.true('0')).toBe(false);
    expect(hlp.true('1')).toBe(true);
    expect(hlp.true('-1')).toBe(true);
    expect(hlp.true('')).toBe(false);
    expect(hlp.true(' ')).toBe(false);
    expect(hlp.true('null')).toBe(false);
    expect(hlp.true('false')).toBe(false);
    expect(hlp.true('true')).toBe(true);
    expect(hlp.true('str')).toBe(true);
    expect(hlp.true([0, 1])).toBe(true);
    expect(hlp.true([0])).toBe(true);
    expect(hlp.true({})).toBe(false);
    expect(hlp.true(() => un.known.property)).toBe(false);
});

test('false', () => {
    expect(hlp.false(undefined)).toBe(false);
    expect(hlp.false(null)).toBe(false);
    expect(hlp.false(false)).toBe(true);
    expect(hlp.false(true)).toBe(false);
    expect(hlp.false([])).toBe(false);
    expect(hlp.false([''])).toBe(false);
    expect(hlp.false(0)).toBe(true);
    expect(hlp.false(1)).toBe(false);
    expect(hlp.false(-1)).toBe(false);
    expect(hlp.false('0')).toBe(true);
    expect(hlp.false('1')).toBe(false);
    expect(hlp.false('-1')).toBe(false);
    expect(hlp.false('')).toBe(false);
    expect(hlp.false(' ')).toBe(false);
    expect(hlp.false('null')).toBe(false);
    expect(hlp.false('false')).toBe(true);
    expect(hlp.false('true')).toBe(false);
    expect(hlp.false('str')).toBe(false);
    expect(hlp.false([0, 1])).toBe(false);
    expect(hlp.false([0])).toBe(false);
    expect(hlp.false({})).toBe(false);
    expect(hlp.false(() => un.known.property)).toBe(false);
});

test('v', () => {
    expect(hlp.v('foo')).toBe('foo');
    expect(hlp.v(0)).toBe(0);
    expect(hlp.v('')).toBe('');
    expect(hlp.v(null)).toBe('');
    expect(hlp.v(undefined)).toBe('');
    expect(hlp.v(' ', 'default')).toBe('default');
    expect(hlp.v('', [], 'baz')).toBe('baz');
    expect(hlp.v('', [], null)).toBe('');
    expect(hlp.v()).toBe('');
});

test('loop', () => {
    var arr = ['foo', 'bar', 'baz'];
    hlp.loop(arr, (arr__value) => {
        expect(['foo', 'bar', 'baz'].includes(arr__value)).toBe(true);
    });
    hlp.loop(arr, (arr__key, arr__value) => {
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
    hlp.loop(arr, (arr__key, arr__value) => {
        expect(true).toBe(false);
    });
    var obj = { bar: 'foo', foo: 'bar', baz: 'baz' };
    hlp.loop(obj, (obj__key, obj__value) => {
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
    hlp.loop(obj, (obj__key, obj__value) => {
        expect(true).toBe(false);
    });
    hlp.loop(null, (key, value) => {
        expect(true).toBe(false);
    });
    hlp.loop(
        () => vrbl,
        (vrbl__value, vrbl__key) => {
            expect(true).toBe(false);
        }
    );
});

test('map', () => {
    expect(hlp.map({ foo: 'bar', bar: 'baz' }, (obj__key, obj__value) => (obj__value += '!'))).toEqual({
        foo: 'bar!',
        bar: 'baz!',
    });
    expect(hlp.map(['foo', 'bar'], (obj__key, obj__value) => (obj__value += '!'))).toEqual({
        0: 'foo!',
        1: 'bar!',
    });
});

test('last', () => {
    expect(hlp.last(['foo', 'bar', 'baz'])).toBe('baz');
    expect(hlp.last({ foo: 'bar', bar: 'baz' })).toBe('baz');
    expect(hlp.last([''])).toBe('');
});

test('first', () => {
    expect(hlp.first(['foo', 'bar', 'baz'])).toBe('foo');
    expect(hlp.first({ foo: 'bar', bar: 'baz' })).toBe('bar');
    expect(hlp.first([''])).toBe('');
});

test('round', () => {
    expect(hlp.round(1.005, 2)).toBe(1.01);
    expect(hlp.round(1.005)).toBe(1);
    expect(hlp.round(1)).toBe(1);
    expect(hlp.round(1, 2)).toBe(1);
    expect(hlp.round(1.337, 2)).toBe(1.34);
});

test('random', () => {
    expect(['foo', 'bar', 'baz'].indexOf(hlp.rand(['foo', 'bar', 'baz'])) > -1).toBe(true);
    expect(hlp.random_string().length).toBe(8);
    expect(hlp.random_string(10).length).toBe(10);
    expect(hlp.random_string(16, 'idkfa').length).toBe(16);
    expect(hlp.random_int(1, 1)).toBe(1);
    expect(hlp.random_int(42, 42)).toBe(42);
    expect(hlp.random_int(42, 42)).toBe(42);
    expect(hlp.isInteger(hlp.random_int())).toBe(true);
    expect(hlp.isInteger(hlp.random_int(42))).toBe(true);
    expect(hlp.isInteger(hlp.random_int(7, 42))).toBe(true);
});

test('password_generate', () => {
    expect(hlp.password_generate(20, ['a-z', 'A-Z', '0-9', '$!?'], 'lI').length).toBe(20);
    expect(hlp.password_generate(7, ['a-z', 'A-Z', '0-9', '$!?'], 'lI').length).toBe(7);
    expect(hlp.password_generate().length).toBe(20);
    expect(hlp.password_generate(3, ['a-z', 'A-Z', '0-9', '$!?'], null)).toBe(null);
    expect(hlp.password_generate(3, null)).toBe(null);
    expect(hlp.password_generate(20, ['a-z', 'A-Z', '0-9', '$!?'], 'lI').match(/[a-z]/) !== null).toBe(true);
    expect(hlp.password_generate(20, ['a-z', 'A-Z', '0-9', '$!?'], 'lI').match(/[A-Z]/) !== null).toBe(true);
    expect(hlp.password_generate(20, ['a-z', 'A-Z', '0-9', '$!?'], 'lI').match(/[0-9]/) !== null).toBe(true);
    expect(hlp.password_generate(20, ['a-z', 'A-Z', '0-9', '$!?'], 'lI').match(/[\$|\!|\?]/) !== null).toBe(true);
    expect(hlp.password_generate(20, ['a-z', 'A-Z', '0-9', '$!?'], 'lI').match(/[l|I]/) !== null).toBe(false);
});

test('isInteger', () => {
    expect(hlp.isInteger('foo')).toBe(false);
    expect(hlp.isInteger(42)).toBe(true);
    expect(hlp.isInteger('42')).toBe(true);
    expect(hlp.isInteger(4e2)).toBe(true);
    expect(hlp.isInteger('4e2')).toBe(true);
    expect(hlp.isInteger(' 1 ')).toBe(true);
    expect(hlp.isInteger('')).toBe(false);
    expect(hlp.isInteger('  ')).toBe(false);
    expect(hlp.isInteger(42.1)).toBe(false);
    expect(hlp.isInteger('1a')).toBe(false);
    expect(hlp.isInteger('4e2a')).toBe(false);
    expect(hlp.isInteger(null)).toBe(false);
    expect(hlp.isInteger(undefined)).toBe(false);
    expect(hlp.isInteger(NaN)).toBe(false);
});

test('isNumeric', () => {
    expect(hlp.isNumeric(1337)).toBe(true);
    expect(hlp.isNumeric('42')).toBe(true);
    expect(hlp.isNumeric('42.7')).toBe(true);
    expect(hlp.isNumeric('a')).toBe(false);
});

test('capitalize', () => {
    expect(hlp.capitalize('string')).toBe('String');
    expect(hlp.capitalize('')).toBe('');
    expect(hlp.capitalize('STRINGß')).toBe('STRINGß');
    expect(hlp.capitalize(null)).toBe(null);
});

test('cookies', () => {
    hlp.cookieSet('foo', 'bar');
    expect(hlp.cookieGet('foo')).toBe('bar');
    expect(hlp.cookieExists('foo')).toBe(true);
    expect(hlp.cookieExists('bar')).toBe(false);
    hlp.cookieDelete('foo');
    expect(hlp.cookieExists('foo')).toBe(false);
});

test('localstorage', async () => {
    hlp.localStorageSet('foo', { some: 'data' }, 7);
    expect(hlp.localStorageGet('foo')).toEqual({ some: 'data' });
    expect(hlp.localStorageExists('foo')).toBe(true);
    hlp.localStorageDelete('foo');
    expect(hlp.localStorageExists('foo')).toBe(false);

    hlp.localStorageSet('bar', { some: 'data' }, 1 / (24 * 60 * 60));
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
    expect(hlp.localStorageExists('bar')).toBe(true);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    expect(hlp.localStorageExists('bar')).toBe(false);
});

test('getParam', () => {
    expect(hlp.getParam('foo')).toBe('bar');
    expect(hlp.getParam('bar')).toBe('baz');
    expect(hlp.getParam('baz')).toBe(null);
});

test('device', () => {
    expect(hlp.isPhone()).toBe(false);
    expect(hlp.isTablet()).toBe(false);
    expect(hlp.isDesktop()).toBe(true);
    expect(hlp.isMobile()).toBe(false);
    expect(hlp.isTouch()).toBe(false);
});

test('isObject', () => {
    expect(hlp.isObject({})).toBe(true);
    expect(hlp.isObject('')).toBe(false);
    expect(hlp.isObject(null)).toBe(false);
    expect(hlp.isObject(true)).toBe(false);
    expect(hlp.isObject(false)).toBe(false);
    expect(hlp.isObject([])).toBe(false);
    expect(hlp.isObject()).toBe(false);
    expect(hlp.isObject(1)).toBe(false);
    expect(hlp.isObject(0)).toBe(false);
    expect(hlp.isObject('str')).toBe(false);
    expect(hlp.isObject(new Date())).toBe(false);
    expect(hlp.isObject({ foo: 'bar' })).toBe(true);
    expect(hlp.isObject({ foo: 'bar' })).toBe(true);
    expect(hlp.isObject(['foo', 'bar'])).toBe(false);
});

test('isArray', () => {
    expect(hlp.isArray({})).toBe(false);
    expect(hlp.isArray('')).toBe(false);
    expect(hlp.isArray(null)).toBe(false);
    expect(hlp.isArray(true)).toBe(false);
    expect(hlp.isArray(false)).toBe(false);
    expect(hlp.isArray([])).toBe(true);
    expect(hlp.isArray()).toBe(false);
    expect(hlp.isArray(1)).toBe(false);
    expect(hlp.isArray(0)).toBe(false);
    expect(hlp.isArray('str')).toBe(false);
    expect(hlp.isArray(new Date())).toBe(false);
    expect(hlp.isArray({ foo: 'bar' })).toBe(false);
    expect(hlp.isArray({ foo: 'bar' })).toBe(false);
    expect(hlp.isArray(['foo', 'bar'])).toBe(true);
});

test('isString', () => {
    expect(hlp.isString('foo')).toBe(true);
    expect(hlp.isString(42)).toBe(false);
    expect(hlp.isString(null)).toBe(false);
    expect(hlp.isString(true)).toBe(false);
    expect(hlp.isString(false)).toBe(false);
    expect(hlp.isString('')).toBe(true);
});

test('formatDate', () => {
    expect(hlp.formatDate('d.m.Y', '2018-01-01')).toBe('01.01.2018');
    expect(hlp.formatDate('d.m.Y H:i:s', '2018-01-01')).toBe('01.01.2018 00:00:00');
    expect(hlp.formatDate('d.m.Y H:i:s', new Date('2018-01-01 13:13:13'))).toBe('01.01.2018 13:13:13');
    expect(hlp.formatDate('d.m.Y H:i:s', '2005-04-15T22:00:00.000000Z')).toBe('15.04.2005 22:00:00');
    expect(hlp.formatDate('d.m.Y', null)).toBe(hlp.formatDate('d.m.Y', new Date()));
    expect(hlp.formatDate('d.m.Y', true)).toBe(hlp.formatDate('d.m.Y', new Date()));
    expect(hlp.formatDate('d.m.Y', false)).toBe(hlp.formatDate('d.m.Y', new Date()));
    expect(hlp.formatDate('d.m.Y', '')).toBe(hlp.formatDate('d.m.Y', new Date()));
});

test('formatNumber', () => {
    expect(hlp.formatNumber(1337.427, 2, ',', '.')).toBe('1.337,43');
    expect(hlp.formatNumber(1337.427)).toBe('1,337');
    expect(hlp.formatNumber('1337.427')).toBe('1,337');
    expect(hlp.formatNumber(null)).toBe('0');
    expect(hlp.formatNumber(false)).toBe('0');
    expect(hlp.formatNumber(true)).toBe('0');
    expect(hlp.formatNumber('')).toBe('0');
    expect(hlp.formatNumber(42)).toBe('42');
    expect(hlp.formatNumber(42, 2)).toBe('42.00');
    expect(hlp.formatNumber('42')).toBe('42');
    expect(hlp.formatNumber('42', 2)).toBe('42.00');
    expect(hlp.formatNumber(13371337.427, 2, ',', '.')).toBe('13.371.337,43');
});

test('isDate', () => {
    expect(hlp.isDate('2018-01-01')).toBe(true);
    expect(hlp.isDate('2018-02-29')).toBe(false);
    expect(hlp.isDate('1700-01-01')).toBe(true);
    expect(hlp.isDate(42)).toBe(false);
    expect(hlp.isDate(false)).toBe(false);
    expect(hlp.isDate(true)).toBe(false);
    expect(hlp.isDate('')).toBe(false);
    expect(hlp.isDate(new Date())).toBe(true);
    expect(hlp.isDate(new Date('2018-01-01'))).toBe(true);
    expect(hlp.isDate(new Date('2018-02-29'))).toBe(true);
    expect(hlp.isDate('&nbsp; 1')).toBe(false);
});

test('uuid', () => {
    expect(hlp.uuid().split('-').length).toBe(5);
    expect(hlp.uuid().split('-').join('').length).toBe(32);
    expect(hlp.uuid().length).toBe(36);
    expect(hlp.uuid().substring(0, 8).indexOf('-')).toBe(-1);
    expect(hlp.uuid().substring(9, 13).indexOf('-')).toBe(-1);
    expect(hlp.uuid().substring(14, 18).indexOf('-')).toBe(-1);
    expect(hlp.uuid().substring(19, 23).indexOf('-')).toBe(-1);
    expect(hlp.uuid().substring(24, 32).indexOf('-')).toBe(-1);
});

test('replaceAll', () => {
    expect(hlp.replaceAll('foo bar baz', 'a', 'b')).toBe('foo bbr bbz');
    expect(hlp.replaceAll('foo bar baz', '', 'b')).toBe('fbobob bbbabrb bbbabz');
    expect(hlp.replaceAll('foo bar baz', ' ', '')).toBe('foobarbaz');
    expect(hlp.replaceAll('', 'a', 'b')).toBe('');
});

test('replaceLast', () => {
    expect(hlp.replaceLast('foo bar baz', 'a', 'b')).toBe('foo bar bbz');
    expect(hlp.replaceLast('foo bar baz', ' ', 'b')).toBe('foo barbbaz');
    expect(hlp.replaceLast('', 'a', 'b')).toBe('');
});

test('replaceFirst', () => {
    expect(hlp.replaceFirst('foo bar baz', 'a', 'b')).toBe('foo bbr baz');
    expect(hlp.replaceFirst('foo bar baz', ' ', 'b')).toBe('foobbar baz');
    expect(hlp.replaceFirst('', 'a', 'b')).toBe('');
});

test('indexOfCaseInsensitive', () => {
    expect(hlp.indexOfCaseInsensitive('FOO', 'this is a foO and a foobar')).toEqual(10);
    expect(hlp.indexOfCaseInsensitive('FOO', 'this is a foO and a foobar', 15)).toEqual(20);
});

test('countAllOccurences', () => {
    expect(hlp.countAllOccurences('foo', 'this is a foo and a foobar')).toEqual(2);
    expect(hlp.countAllOccurences('foo', 'this is a')).toEqual(0);
    expect(hlp.countAllOccurences(' ', 'this is a')).toEqual(2);
    expect(hlp.countAllOccurences('foofoo', 'foofoofoo')).toEqual(1);
    expect(hlp.countAllOccurences('is', 'isisisisisis')).toEqual(6);
    expect(hlp.countAllOccurences('IS', 'isisisisisis')).toEqual(0);
});

test('countAllOccurencesCaseInsensitive', () => {
    expect(hlp.countAllOccurencesCaseInsensitive('FOO', 'this is a foO and a foobar')).toEqual(2);
    expect(hlp.countAllOccurencesCaseInsensitive('foo', 'this is a')).toEqual(0);
    expect(hlp.countAllOccurencesCaseInsensitive(' ', 'this is a')).toEqual(2);
    expect(hlp.countAllOccurencesCaseInsensitive('foofoo', 'FOOFOOFOO')).toEqual(1);
    expect(hlp.countAllOccurencesCaseInsensitive('IS', 'isisisisisis')).toEqual(6);
});

test('findAllPositions', () => {
    expect(hlp.findAllPositions('foo', 'this is a foo and a foobar')).toEqual([10, 20]);
    expect(hlp.findAllPositions('foo', 'this is a')).toEqual([]);
    expect(hlp.findAllPositions(' ', 'this is a')).toEqual([4, 7]);
});

test('findAllPositionsCaseInsensitive', () => {
    expect(hlp.findAllPositionsCaseInsensitive('FOO', 'this is a foO and a foobar')).toEqual([10, 20]);
    expect(hlp.findAllPositionsCaseInsensitive('foo', 'this is a')).toEqual([]);
    expect(hlp.findAllPositionsCaseInsensitive(' ', 'this is a')).toEqual([4, 7]);
});

test('highlight', () => {
    expect(hlp.highlight('that is a search string', 'is')).toEqual(
        'that <strong class="highlight">is</strong> a search string'
    );
    expect(hlp.highlight('that is a search isstring', 'is')).toEqual(
        'that <strong class="highlight">is</strong> a search <strong class="highlight">is</strong>string'
    );
    expect(hlp.highlight('that is a search isstring', '')).toEqual('that is a search isstring');
    expect(hlp.highlight('Maßbierkrug', 'bier')).toEqual('Maß<strong class="highlight">bier</strong>krug');
    expect(hlp.highlight('', '')).toEqual('');
    expect(hlp.highlight(null, '')).toEqual(null);
    expect(hlp.highlight(null, null)).toEqual(null);
    expect(
        hlp.highlight(
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.',
            'lorem'
        )
    ).toEqual(
        '<strong class="highlight">Lorem</strong> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <strong class="highlight">Lorem</strong> ipsum dolor sit amet. <strong class="highlight">Lorem</strong> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <strong class="highlight">lorem</strong> ipsum dolor sit amet.'
    );
    expect(hlp.highlight('abc def geh ijk lmn opq rst abc def geh ijk lmn opq rst', 'ijk', true, 5)).toEqual(
        '... geh <strong class="highlight">ijk</strong> lmn ... geh <strong class="highlight">ijk</strong> lmn ...'
    );
    expect(
        hlp.highlight(
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.',
            'elitr',
            true,
            20
        )
    ).toEqual(
        '... sadipscing <strong class="highlight">elitr</strong>, sed diam nonumy eirmod ... sadipscing <strong class="highlight">elitr</strong>, sed diam nonumy eirmod ...'
    );
});

test('json', () => {
    expect(hlp.jsonStringToObject(hlp.jsonObjectToString(['foo', 'bar', 'baz']))).toEqual(['foo', 'bar', 'baz']);
    expect(hlp.jsonStringToObject(null)).toBe(null);
    expect(hlp.jsonStringToObject(false)).toBe(null);
    expect(hlp.jsonStringToObject(true)).toBe(null);
    expect(hlp.jsonStringToObject('')).toBe(null);
    expect(hlp.jsonStringToObject('["foo","bar","baz",]')).toBe(null);
    expect(hlp.jsonObjectToString(hlp.jsonStringToObject('["foo","bar","baz"]'))).toEqual('["foo","bar","baz"]');
    expect(hlp.jsonObjectToString(null)).toBe('null');
    expect(hlp.jsonObjectToString(false)).toBe('false');
    expect(hlp.jsonObjectToString(true)).toBe('true');
    expect(hlp.jsonObjectToString('')).toBe('""');

    expect(hlp.isJsonString('')).toBe(false);
    expect(hlp.isJsonString('["foo","bar","baz",]')).toBe(false);
    expect(hlp.isJsonString(null)).toBe(false);
    expect(hlp.isJsonString('["foo","bar","baz"]')).toBe(true);
});

test('htmlencode/decode', () => {
    expect(hlp.htmlEncode('&<>"`\'')).toBe('&amp;&lt;&gt;&quot;&#96;&#x27;');
    expect(hlp.htmlDecode('&amp;&lt;&gt;&quot;&#96;&#x27;')).toBe('&<>"`\'');
});

test('nl2br', () => {
    expect(hlp.nl2br('foo\nbar')).toBe('foo<br/>bar');
    expect(hlp.nl2br('foo')).toBe('foo');
    expect(hlp.nl2br('')).toBe('');
    expect(hlp.nl2br(null)).toBe('');
});

test('br2nl', () => {
    expect(hlp.br2nl('foo<br/>bar')).toBe('foo\nbar');
    expect(hlp.br2nl('foo')).toBe('foo');
    expect(hlp.br2nl('')).toBe('');
    expect(hlp.br2nl(null)).toBe('');
});

test('get/post', async () => {
    let response;
    response = await hlp.get('http://httpbin.org/anything');
    expect(response.method).toBe('GET');
    response = await hlp.post('http://httpbin.org/anything', { data: { foo: 'bar', bar: 'baz' } });
    expect(response.method).toBe('POST');
    expect(response.data).toBe(hlp.jsonObjectToString({ foo: 'bar', bar: 'baz' }));
    response = await hlp.post('http://httpbin.org/anything', {
        data: { foo: 'bar', bar: 'baz' },
        headers: { Bar: 'baz' },
    });
    expect(response.method).toBe('POST');
    expect(response.data).toBe(hlp.jsonObjectToString({ foo: 'bar', bar: 'baz' }));
    expect(response.headers.Bar).toBe('baz');
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    await hlp
        .get('https://httpbin.org/status/404', { throttle: 0, allow_errors: false })
        .then(() => {
            expect(true).toBe(false);
        })
        .catch(() => {
            expect(true).toBe(true);
        });
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    await hlp
        .get('https://httpbin.org/status/404', { throttle: 0, allow_errors: true })
        .then(() => {
            expect(true).toBe(true);
        })
        .catch(() => {
            expect(true).toBe(false);
        });
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    await hlp
        .get('https://httpbin.org/status/404', { throttle: 0 })
        .then(() => {
            expect(true).toBe(true);
        })
        .catch(() => {
            expect(true).toBe(false);
        });
});

test('removeEmpty', () => {
    expect(hlp.removeEmpty(['foo', null, [], '', 'bar'])).toEqual(['foo', 'bar']);
    expect(hlp.removeEmpty(['foo', 'foo', {}])).toEqual(['foo', 'foo']);
    expect(hlp.removeEmpty([0, 'Foo', 'foo', {}])).toEqual([0, 'Foo', 'foo']);
    expect(hlp.removeEmpty([])).toEqual([]);
    expect(hlp.removeEmpty(null)).toEqual(null);
    expect(hlp.removeEmpty(true)).toEqual(true);
    expect(hlp.removeEmpty(false)).toEqual(false);
    expect(hlp.removeEmpty('')).toEqual('');
    expect(hlp.removeEmpty(0)).toEqual(0);
    expect(hlp.removeEmpty(1)).toEqual(1);
});

test('uniqueArray', () => {
    expect(hlp.uniqueArray(['foo', 'bar', 'foo', 'baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(hlp.uniqueArray(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(hlp.uniqueArray(['Foo', 'bar', 'baz', 'foo'])).toEqual(['Foo', 'bar', 'baz', 'foo']);
    expect(hlp.uniqueArray(['Foo', 'bar', 'baz', 'Foo'])).toEqual(['Foo', 'bar', 'baz']);
    expect(hlp.uniqueArray(['foo'])).toEqual(['foo']);
    expect(hlp.uniqueArray([null, null])).toEqual([null]);
    expect(hlp.uniqueArray([null, false])).toEqual([null, false]);
    expect(hlp.uniqueArray([false, null])).toEqual([false, null]);
    expect(hlp.uniqueArray([false, false])).toEqual([false]);
    expect(hlp.uniqueArray([true])).toEqual([true]);
    expect(hlp.uniqueArray([])).toEqual([]);
    expect(hlp.uniqueArray(['', ''])).toEqual(['']);
    expect(hlp.uniqueArray([''])).toEqual(['']);
});

test('powerset', () => {
    expect(hlp.powerset([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
    expect(hlp.powerset([1])).toEqual([[], [1]]);
    expect(hlp.powerset([])).toEqual([[]]);
    expect(hlp.powerset('')).toEqual('');
    expect(hlp.powerset(true)).toEqual(true);
    expect(hlp.powerset(false)).toEqual(false);
});

test('char', () => {
    expect(hlp.charToInt('D')).toBe(4);
    expect(hlp.charToInt('d')).toBe(4);
    expect(hlp.charToInt('A')).toBe(1);
    expect(hlp.charToInt('Z')).toBe(26);
    expect(hlp.charToInt('AA')).toBe(27);
    expect(hlp.intToChar(4)).toBe('D');
    expect(hlp.intToChar(1)).toBe('A');
    expect(hlp.intToChar(26)).toBe('Z');
    expect(hlp.intToChar(27)).toBe('AA');
    expect(hlp.incChar('D')).toBe('E');
    expect(hlp.incChar('Z')).toBe('AA');
    expect(hlp.incChar('A', 2)).toBe('C');
    expect(hlp.decChar('U')).toBe('T');
    expect(hlp.decChar('U', 2)).toBe('S');
    expect(hlp.decChar('A')).toBe('');
});

test('slugify', () => {
    expect(hlp.slugify('that röcks!')).toBe('that-roecks');
    expect(hlp.slugify('')).toBe('');
    expect(hlp.slugify('foo        bar')).toBe('foo-bar');
    expect(hlp.slugify('äöüßÄÖÜ')).toBe('aeoeuessaeoeue');
});

test('range', () => {
    expect(hlp.range('A', 'Z')).toEqual([
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ]);
    expect(hlp.range('C', 'A')).toEqual(['C', 'B', 'A']);
    expect(hlp.range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(hlp.range(10, 0)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    expect(hlp.range(0, 'A')).toBe(null);
});

test('dateToWeek', () => {
    expect(hlp.dateToWeek(new Date('2018-01-01'))).toBe(1);
    expect(hlp.dateToWeek(new Date('2021-02-22'))).toBe(8);
    expect(hlp.dateToWeek(new Date('1980-03-27'))).toBe(13);
    expect(hlp.dateToWeek()).toBe(hlp.dateToWeek(new Date()));
});

test('weekToDate', () => {
    expect(hlp.compareDates(hlp.weekToDate(42, 2018), new Date('2018-10-15'))).toBe(0);
    expect(hlp.compareDates(hlp.weekToDate(17, 2023), new Date('2023-04-24'))).toBe(0);
});

test('addDays', () => {
    expect(hlp.addDays(new Date('2018-01-01'), 7)).toEqual(new Date('2018-01-08'));
    expect(hlp.addDays(new Date('2018-02-22'), 658)).toEqual(new Date('2019-12-12'));
    expect(hlp.addDays(new Date('2018-02-22'), -1)).toEqual(new Date('2018-02-21'));
});

test('diffInMonths', () => {
    expect(Math.round(hlp.diffInMonths(new Date('2025-02-01'), new Date('2025-03-18')) * 1000) / 1000).toEqual(1.548);
    expect(Math.round(hlp.diffInMonths('2025-02-01', '2025-03-18') * 1000) / 1000).toEqual(1.548);
    expect(Math.round(hlp.diffInMonths(null, null) * 1000) / 1000).toEqual(0);
    expect(Math.round(hlp.diffInMonths(true, false) * 1000) / 1000).toEqual(0);
});

test('compareDates', () => {
    let d1 = new Date();
    let d2 = new Date();
    expect(hlp.compareDates(d1, d2)).toEqual(0);
    d1 = hlp.addDays(d1, -1);
    expect(hlp.compareDates(d1, d2)).toEqual(-1);
    d1 = hlp.addDays(d1, 2);
    expect(hlp.compareDates('2020-01-01', '2020-01-01')).toEqual(0);
    expect(hlp.compareDates('2020-01-02', '2020-01-01')).toEqual(1);
    expect(hlp.compareDates('2020-01-01', '2020-01-02')).toEqual(-1);
    expect(hlp.compareDates('2020-01-01 00:00:00', '2020-01-01 00:00:00')).toEqual(0);
    expect(hlp.compareDates('2020-01-01 00:00:00', '2020-01-01 01:00:00')).toEqual(0);
    expect(hlp.compareDates('2020-01-02 00:00:00', '2020-01-01 01:00:00')).toEqual(1);
    expect(hlp.compareDates('2020-01-01T00:00:00', '2020-01-01T00:00:00')).toEqual(0);
    expect(hlp.compareDates('2020-01-05T03:00:00', '2020-01-06T01:00:00')).toEqual(-1);
    expect(hlp.compareDates('2020-01-02T00:00:00', '2020-01-01T01:00:00')).toEqual(1);
    expect(hlp.compareDates('2020-01-01', '2020-01-17 17:42:19')).toEqual(-1);
});

test('spaceship', () => {
    expect(hlp.spaceship(5, 7)).toEqual(-1);
    expect(hlp.spaceship(9, 7)).toEqual(1);
    expect(hlp.spaceship(7, 7)).toEqual(0);
    expect(hlp.spaceship('foo', 'bar')).toEqual(1);
    expect(hlp.spaceship('bar', 'foo')).toEqual(-1);
    expect(hlp.spaceship('2011-01-01', '2010-05-05')).toEqual(1);
});

test('objectsAreEqual', () => {
    expect(hlp.objectsAreEqual({}, {})).toBe(true);
    expect(hlp.objectsAreEqual({ foo: 'bar' }, { foo: 'bar' })).toBe(true);
    expect(hlp.objectsAreEqual({ foo: 'bar' }, { bar: 'baz' })).toBe(false);
    expect(hlp.objectsAreEqual({ foo: 'bar', bar: [] }, { foo: 'bar', bar: [] })).toBe(true);
});

test('containsObject', () => {
    expect(hlp.containsObject({ foo: 'bar' }, [])).toBe(false);
    expect(hlp.containsObject({ foo: 'bar' }, [{ foo: 'bar' }, { bar: 'baz' }])).toBe(true);
    expect(hlp.containsObject({ foo: 'bar' }, { foo: { foo: 'bar' } })).toBe(true);
});

test('deepCopy', () => {
    expect(hlp.deepCopy({ foo: 'bar' })).toEqual({ foo: 'bar' });
    expect(hlp.deepCopy(['foo', 'bar'])).toEqual(['foo', 'bar']);
    expect(hlp.deepCopy(new Date('2018-01-01'))).toEqual(new Date('2018-01-01'));
    expect(hlp.deepCopy(new RegExp('ab+c', 'i'))).toEqual(new RegExp('ab+c', 'i'));
});

test('fmath', () => {
    expect(hlp.fmath('*', 0.1, 0.2)).toEqual(0.02);
    expect(hlp.fmath('+', 0.1, 0.2)).toEqual(0.3);
    expect(hlp.fmath('-', 0.1, 0.2)).toEqual(-0.1);
    expect(hlp.fmath('/', 0.2, 0.1)).toEqual(2);
    expect(hlp.fmath('/', 0.39, 100, 12)).toEqual(0.0039);
});

test('trim', () => {
    expect(hlp.trim('  foo ')).toEqual('foo');
    expect(hlp.trim('xxfoox', 'x')).toEqual('foo');
    expect(hlp.ltrim('  foo ')).toEqual('foo ');
    expect(hlp.ltrim('xxfoox', 'x')).toEqual('foox');
    expect(hlp.rtrim('  foo ')).toEqual('  foo');
    expect(hlp.rtrim('  foo                   ')).toEqual('  foo');
    expect(hlp.rtrim('xxfoox', 'x')).toEqual('xxfoo');
});

test('truncate_string', () => {
    expect(hlp.truncate_string('foo', 50)).toEqual('foo');
    expect(hlp.truncate_string('', 50)).toEqual('');
    expect(hlp.truncate_string([], 50)).toEqual([]);
    expect(hlp.truncate_string(null, 50)).toEqual(null);
    expect(hlp.truncate_string(false, 50)).toEqual(false);
    expect(hlp.truncate_string(true, 50)).toEqual(true);
    expect(hlp.truncate_string('aaaaaaaaa '.repeat(5), 50)).toEqual('aaaaaaaaa '.repeat(5));
    expect(hlp.truncate_string('aaaaaaaaaa'.repeat(5) + 'a', 50)).toEqual('aaaaaaaaaa'.repeat(5) + ' ...');
    expect(hlp.truncate_string('aaaaaaaaa '.repeat(5) + 'a', 50)).toEqual('aaaaaaaaa '.repeat(5) + '...');
    expect(hlp.truncate_string('aaaaaaaaa '.repeat(5) + 'a', 49)).toEqual('aaaaaaaaa '.repeat(5) + '...');
    expect(hlp.truncate_string('aaaaaaaaa '.repeat(5) + 'a', 50, '…')).toEqual('aaaaaaaaa '.repeat(5) + '…');
    expect(hlp.truncate_string('aaaaaaaaa '.repeat(5) + 'a', 49, '…')).toEqual('aaaaaaaaa '.repeat(5) + '…');
    expect(hlp.truncate_string('aaaaaaaaaa'.repeat(5) + 'a', 50, '…')).toEqual('aaaaaaaaaa'.repeat(5) + ' …');
    expect(hlp.truncate_string('aaaaaaaaaa '.repeat(5), 53, '…')).toEqual('aaaaaaaaaa '.repeat(4) + '…');
    expect(hlp.truncate_string('Lorem ipsum dolor sit amet, consectetuer.', 20)).toEqual('Lorem ipsum dolor ...');
    expect(hlp.truncate_string('   foo   ', 9)).toEqual('   foo   ');
    expect(hlp.truncate_string('    foo    ', 9)).toEqual('    foo ...');
    expect(hlp.truncate_string('Lorem ipsum dolor sit amet', 12)).toEqual('Lorem ipsum ...');
    expect(hlp.truncate_string('Lorem ipsum dolor sit amet', 11)).toEqual('Lorem ipsum ...');
    expect(hlp.truncate_string('Lorem ipsum dolor sit amet', 10)).toEqual('Lorem ...');
});

test('emojiRegex', () => {
    let str = 'This❤️😀👩‍⚖️ is a text full of 🧗‍♀️emojis👩🏼‍❤️‍💋‍👩🏽.';
    expect(str.match(hlp.emojiRegex())).toEqual(['❤️', '😀', '👩‍⚖️', '🧗‍♀️', '👩🏼‍❤️‍💋‍👩🏽']);
    // node14 support; we use replace with "g" instead of replaceAll
    expect(str.replace(hlp.emojiRegex(true), '')).toEqual('This is a text full of emojis.');
    expect(str.replace(hlp.emojiRegex(false), '')).toEqual('This😀👩‍⚖️ is a text full of 🧗‍♀️emojis👩🏼‍❤️‍💋‍👩🏽.');
    expect('false2'.replace(hlp.emojiRegex(false), '')).toEqual('false2');
    expect(hlp.emojiRegex().test(str)).toEqual(true);
    expect(hlp.emojiSplit(str)).toEqual([
        'T',
        'h',
        'i',
        's',
        '❤️',
        '😀',
        '👩‍⚖️',
        ' ',
        'i',
        's',
        ' ',
        'a',
        ' ',
        't',
        'e',
        'x',
        't',
        ' ',
        'f',
        'u',
        'l',
        'l',
        ' ',
        'o',
        'f',
        ' ',
        '🧗‍♀️',
        'e',
        'm',
        'o',
        'j',
        'i',
        's',
        '👩🏼‍❤️‍💋‍👩🏽',
        '.',
    ]);
    expect(hlp.emojiSplit('foo ')).toEqual(['f', 'o', 'o', ' ']);
    expect(hlp.emojiSplit('')).toEqual([]);
    expect(hlp.emojiSplit('  ')).toEqual([' ', ' ']);
    expect(hlp.emojiSplit(null)).toEqual(null);
    expect(hlp.emojiSplit(false)).toEqual(false);
    expect(hlp.emojiSplit(true)).toEqual(true);
    expect(hlp.emojiSplit([])).toEqual([]);
});

test('serialize', () => {
    expect(hlp.serialize({ foo: 'bar' })).toEqual('a:1:{s:3:"foo";s:3:"bar";}');
    expect(hlp.serialize(null)).toEqual('N;');
    expect(hlp.serialize('')).toEqual('s:0:"";');
    expect(hlp.serialize('foo')).toEqual('s:3:"foo";');
    expect(hlp.serialize(true)).toEqual('b:1;');
    expect(hlp.serialize(false)).toEqual('b:0;');

    expect(hlp.unserialize('a:1:{s:3:"foo";s:3:"bar";}')).toEqual({ foo: 'bar' });
    expect(hlp.unserialize('N;')).toEqual(null);
    expect(hlp.unserialize('s:0:"";')).toEqual('');
    expect(hlp.unserialize('s:3:"foo";')).toEqual('foo');
    expect(hlp.unserialize('b:1;')).toEqual(true);
    expect(hlp.unserialize('b:0;')).toEqual(false);
});

test('pushId', () => {
    expect(hlp.pushId().length > 3).toEqual(true);
    expect(hlp.pushId().length > 3).toEqual(true);
});

test('getProp', () => {
    expect(hlp.getProp({ a: 1, b: { a: 3, b: 3 }, c: { a: { a: 7 } } }, 'a')).toEqual(1);
    expect(hlp.getProp({ a: 1, b: { a: 3, b: 3 }, c: { a: { a: 7 } } }, 'b.a')).toEqual(3);
    expect(hlp.getProp({ a: 1, b: { a: 3, b: 3 }, c: { a: { a: 7 } } }, 'b.b')).toEqual(3);
    expect(hlp.getProp({ a: 1, b: { a: 3, b: 3 }, c: { a: { a: 7 } } }, 'b')).toEqual({
        a: 3,
        b: 3,
    });
    expect(hlp.getProp({ a: 1, b: { a: 3, b: 3 }, c: { a: { a: 7 } } }, 'c.a.a')).toEqual(7);
    expect(hlp.getProp({ a: 1, b: { a: 3, b: 3 }, c: { a: { a: 7 } } }, 'd.e.f')).toEqual(undefined);
});

test('blobs', async () => {
    let string, blob, base64, response;

    string = await hlp.get('http://httpbin.org/image/png');

    blob = hlp.stringtoblob(string);
    response = await hlp.blobtostring(blob);
    expect(response).toEqual(string);

    blob = hlp.stringtoblob(string, 'image/png');
    response = await hlp.blobtostring(blob);
    expect(response).toEqual(string);

    blob = hlp.stringtoblob(string);
    response = await hlp.blobtobase64(blob);
    response = hlp.base64toblob(response);
    expect(response).toEqual(blob);

    blob = hlp.stringtoblob(string, 'image/png');
    response = await hlp.blobtobase64(blob);
    response = hlp.base64toblob(response, 'image/png');
    expect(response).toEqual(blob);

    blob = hlp.stringtoblob(string);
    response = hlp.blobtofile(blob);
    response = hlp.filetoblob(response);
    expect(response).toEqual(blob);

    blob = hlp.stringtoblob(string);
    response = await hlp.blobtobase64(blob);
    response = hlp.base64tofile(response);
    response = hlp.filetoblob(response);
    expect(response).toEqual(blob);

    blob = hlp.stringtoblob(string);
    response = await hlp.blobtobase64(blob);
    response = hlp.base64tofile(response, 'image/png');
    response = hlp.filetoblob(response);
    expect(response).toEqual(blob);

    expect(hlp.base64tostring(hlp.stringtobase64('foo'))).toEqual('foo');
});

test('fixImageOrientation', async () => {
    let base64 =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABQAAAAAAAAD/2wBDAAYFBAQFBgYFBgYKCAYHBwoJCQoKEBQXEAwPDhQdGhYWFBcYGBYcIxsaHyUmIyAsIBYZKSopJy0wLR8lMCgpKCj/wAALCAAwAFABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APlSiiiiiiiiiiiiiiiiiiiiiv1Uor8q6K/VSiiivyror9VKK/Kuiv1Uooor8q6K/VSiiiiiiivyror9VKKKKKKKK//Z';
    let orientation = await hlp.getImageOrientation(base64);
    expect(orientation).toEqual(5);
});

test('shuffle', () => {
    expect(hlp.shuffle([])).toEqual([]);
    expect(hlp.shuffle(['foo'])).toEqual(['foo']);
    for (let i = 0; i < 50; i++) {
        let shuffle = hlp.shuffle(['foo', 'bar']);
        expect(shuffle.toString() == ['foo', 'bar'].toString() || shuffle.toString() == ['bar', 'foo'].toString()).toBe(
            true
        );
    }
});

test('waitUntilVar', async () => {
    let foo = {};
    setTimeout(() => {
        window.glob = 'baz';
        foo.bar = 'baz';
    }, 1000);
    await hlp.waitUntilVar('glob');
    await hlp.waitUntilVar(foo, 'bar');
    expect(glob).toBe('baz');
    expect(foo.bar).toBe('baz');
});

test('findRecursiveInObject', () => {
    expect(
        hlp.findRecursiveInObject({ foo: { id: 42 }, bar: { foo: { id: 7 } }, baz: { id1: 42, id2: 7 } }, 'id')
    ).toEqual(['foo', 'bar.foo']);
    expect(
        hlp.findRecursiveInObject({ foo: { id: 42 }, bar: { foo: { id: 7 } }, baz: { id1: 42, id2: 7 } }, 'id', 42)
    ).toEqual(['foo']);
    expect(
        hlp.findRecursiveInObject({ foo: { id: 42 }, bar: { foo: { id: 7 } }, baz: { id1: 42, id2: 7 } }, null, 7)
    ).toEqual(['bar.foo', 'baz']);
});
