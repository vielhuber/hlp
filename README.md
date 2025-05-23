[![build status](https://github.com/vielhuber/hlp/actions/workflows/ci.yml/badge.svg)](https://github.com/vielhuber/hlp/actions)

## motivation
tired of writing

```js
if( Object.keys(obj).length === 0 && obj.constructor === Object )
{

}
```

or

```js
if (typeof arr !== 'undefined' && arr.length > 0)
{

}
```

or

```js
for(const [obj__key, obj__value] of Object.entries(obj))
{

}
```

?


## installation

```
npm init -y
npm install hlp
```

now use it as a module:
```js
import hlp from 'hlp';
```

or embed it directly:
```html
<script src="hlp.js"></script>
```

## usage

### existence
```js
// check existence
if( hlp.x(vrbl) )
{

}

// check non-existence
if( hlp.nx(vrbl) )
{

}
```

### equality
```js
// js has a lot of pitfalls, when comparing loosely
if( '' == [] ) // true
if( '' == [''] ) // true
if( '' == 0 ) // true
if( ' ' == false ) // true
if( [0] == false ) // true
if( [0] == '0' ) // true
if( [] == false ) // true
if( [''] == false ) // true
if( 0 == false ) // true
if( 0 == [] ) // true
if( 0 == [''] ) // true
if( [0] == false ) // true
if( [0] == 0 ) // true

// also don't forget those delicacies
0 === -0 // true
NaN === NaN // false
(![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]] === 'fail' // true

// this non-strict equality is symmetric, but not transitive
a = ''; b = 0; c = [0];
a == b; // true
b == c; // true
c == a; // false

// to overcome this issue, we...

// ...use strict comparison when possible
if( vrbl === 'foo' )
{

}

// ...use loose comparison when appropriate
if( hlp.getParam('number') == 1337 )
{

}

// ...check for truthness / falsiness with these helper methods
if( hlp.true(vrbl) )
{

}

if( hlp.false(vrbl) )
{

}

// be aware, that hlp.true is not always the logic negation of hlp.false
hlp.true(null) // false
hlp.false(null) // false
```

### value
```js
// get variable if exists, otherwise ''
hlp.v( vrbl )

// get variable if exists, otherwise 'default'
hlp.v( vrbl, 'default' )

// get first variable that exists, otherwise ''
hlp.v( vrbl1, vrbl2, vrbl3 )
```

### loop
```js
// loop over arrays/objects only if possible
hlp.loop(['foo','bar','baz'], (vrbl__value) =>
{

});
hlp.loop(['foo','bar','baz'], (vrbl__value, vrbl__key) =>
{

});
hlp.loop({bar: 'foo', baz: 'bar', foo: 'baz'}, (vrbl__value, vrbl__key) =>
{

});
hlp.loop([], (vrbl__value, vrbl__key) => { }) // does nothing
hlp.loop({}, (vrbl__value, vrbl__key) => { }) // does nothing
hlp.loop(null, (vrbl__value, vrbl__key) => { }) // does nothing
```


### try

```js
// if you are unsure, if a variable is even set before checking its existence,
// simply put it inside this helper function
if( hlp.x(() => vrbl) )
if( hlp.nx(() => vrbl)  )
if( hlp.true(() => vrbl) )
if( hlp.false(() => vrbl)  )
if( hlp.v(() => vrbl) === 'foo' )
if( hlp.v(() => vrbl) == 1337 )
echo hlp.v(() => vrbl)
hlp.loop((() => vrbl), (vrbl__value, vrbl__key) => { })

```
that works because javascript only evaluates the content of the inner callback (or closure) when it is actually executed.



### helpers

there are also some other neat little helpers available:

```js
// capitalize
hlp.capitalize('foo') // Foo

// check if object
hlp.isObject({}) // true
hlp.isObject({foo: 'bar'}) // true
hlp.isObject(null) // false
hlp.isObject([]) // false (be aware: an array in js is scrictly an object, but this function returns false)

// check if array
hlp.isArray([]) // true
hlp.isArray(['foo','bar']) // true
hlp.isArray(null) // false

// check if string
hlp.isString('foo'); // true
hlp.isString(42); // false
hlp.isString(null); // false

// check if date
hlp.isDate('2018-01-01') // true
hlp.isDate('2018-02-29') // false
hlp.isDate('1700-01-01') // true
hlp.isDate(42) // false

// format date
hlp.formatDate('d.m.Y', '2018-01-01') // 01.01.2018
hlp.formatDate('Y-m-d H:i:s', new Date()) // 01.01.2018

// get week number from date
hlp.dateToWeek(new Date('2021-02-22')) // 8
hlp.dateToWeek() // hlp.dateToWeek(new Date())

// get date (of monday) from week number
hlp.weekToDate(42, 2018) // new Date('2018-10-14')
hlp.weekToDate(17, 2023) // new Date('2023-04-23')

// add days to date
hlp.addDays(new Date('2018-01-01'), 7) // new Date('2018-01-08')
hlp.addDays(new Date('2018-02-22'), 658) // new Date('2019-12-12')
hlp.addDays(new Date('2018-02-22'), 1) // new Date('2018-02-21')

// compare dates
let d1 = new Date();
let d2 = new Date();
hlp.compareDates(d1, d2) // 0
hlp.addDays(d1, -1);
hlp.compareDates(d1, d2) // -1
hlp.addDays(d1, 2);
hlp.compareDates(d1, d2) // 1
hlp.compareDates('2020-01-01', '2020-01-17 17:42:19') // -1

// format number
hlp.formatNumber(1337.427, 2, ',','.') // 1.337,43

// spaceship operator
hlp.spaceship(5,7) // -1
hlp.spaceship(9,7) // 1
hlp.spaceship(7,7) // 0
hlp.spaceship('foo','bar') // 1
hlp.spaceship('bar','foo') // -1

// check if objects are equal
hlp.objectsAreEqual({}, {}) // true
hlp.objectsAreEqual({ foo: 'bar' }, { foo: 'bar'}) // true
hlp.objectsAreEqual({ foo: 'bar' }, { bar: 'baz'}) // false

// check if object is inside an array/object
hlp.containsObject({ foo: 'bar' }, []) // false
hlp.containsObject({ foo: 'bar' }, [{ foo: 'bar' }, { bar: 'baz' }]) // true
hlp.containsObject({ foo: 'bar' }, { foo: { foo: 'bar' } }) // true

// recursively search key/value in nested object and return dotprop array
hlp.findRecursiveInObject({ foo: { id: 42 }, bar: { foo: { id: 7 } }, baz: { id1: 42, id2: 7 } }, 'id'); // ['foo', 'bar.foo']
hlp.findRecursiveInObject({ foo: { id: 42 }, bar: { foo: { id: 7 } }, baz: { id1: 42, id2: 7 } }, 'id', 42); // ['foo']
hlp.findRecursiveInObject({ foo: { id: 42 }, bar: { foo: { id: 7 } }, baz: { id1: 42, id2: 7 } }, null, 7); // ['bar.foo', 'baz']

// deep clone reference types (object/array/date/regex)
hlp.deepCopy({ foo: 'bar' })
hlp.deepCopy(['foo','bar'])
hlp.deepCopy(new Date())
hlp.deepCopy(new Date('2018-01-01'))
hlp.deepCopy(new RegExp('ab+c', 'i'))

// generate uuid/guid v4
hlp.uuid() // e86e393c-9788-857b-27c2-f80c8ca1a302
hlp.uuid() // 8b25a8f8-9525-bd73-4679-3539321db93b

// replace all occurences
hlp.replaceAll('foo bar baz', 'a', 'b') // 'foo bbr bbz'

// replace last occurence
hlp.replaceLast('foo bar baz', 'a', 'b') // 'foo bar bbz'

// replace last occurence
hlp.replaceFirst('foo bar baz', 'a', 'b') // 'foo bbr baz'

// case insensitive search
hlp.indexOfCaseInsensitive('foo', 'this is a FOO') // 10
hlp.indexOfCaseInsensitive('foo', 'this is a FOO and a foobar', 15) // 20

// count occurences in string
hlp.countAllOccurences('foo', 'this is a foo and a foobar') // 2
hlp.countAllOccurencesCaseInsensitive('FoO', 'this is a FOO and a foobar') // 2

// find all positions in string
hlp.findAllPositions('foo', 'this is a foo and a foobar') // [10,20]
hlp.findAllPositionsCaseInsensitive('FoO', 'this is a FOO and a foobar') // [10,20]

// highlight strings
hlp.highlight('that is a search string', 'is') // that <strong class="highlight">is</strong> a search string
hlp.highlight('abc def geh ijk lmn opq rst abc def geh ijk lmn opq rst', 'ijk', true, 5) // '... geh <strong class="highlight">ijk</strong> lmn ... geh <strong class="highlight">ijk</strong> lmn ...'

// remove empty elements from array
hlp.removeEmpty(['foo',null,[],'','bar']) // ['foo','bar']

// return unique array (remove duplicate values, order-safe)
hlp.uniqueArray(['foo','bar','foo','baz']) // ['foo','bar','baz']

// powerset of array (all subsets of a set)
hlp.powerset([1,2,3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// shuffle array
hlp.shuffle(['foo','bar']) // ['foo','bar']
hlp.shuffle(['foo','bar']) // ['foo','bar']
hlp.shuffle(['foo','bar']) // ['foo','bar'] (yikes)
hlp.shuffle(['foo','bar']) // ['bar','foo']

// char helpers
hlp.charToInt('D') // 4
hlp.intToChar(4) // 'D'
hlp.incChar('D') // 'E'
hlp.incChar('Z') // 'AA'
hlp.incChar('A',2) // 'C'
hlp.decChar('U') // 'T'

// slugify / sanitize string
hlp.slugify('That röcks!') // that-roecks

// range
hlp.range('A','Z') // ['A','B',...,'Z']
hlp.range(1,42) // [1,2,...,42]
hlp.range('C','A') // ['C','B','A']

// get last item of object/array
hlp.last(['foo', 'bar', 'baz']) // 'baz'
hlp.last({ foo: 'bar', bar: 'baz'}) // 'baz'

// get first item of object/array
hlp.first(['foo', 'bar', 'baz']) // 'foo'
hlp.first({ foo: 'bar', bar: 'baz'}) // 'bar'

// get random element from object/array
hlp.rand(['foo', 'bar', 'baz']) // 'bar'

// generate a random string
hlp.random_string() // edPhi34d
hlp.random_string(10) // abCa321aC6
hlp.random_string(16, 'idkfa') // idifafafifaifafk

// generate a random integer
hlp.random_int() // 42
hlp.random_int(7,42) // 17

// generate password
hlp.password_generate(
  20, // length
  ['a-z', 'A-Z', '0-9', '$!?'], // password contains at minimum one character of each value
  'lI' // exclude confusing chars
)

// proper rounding to n digits
hlp.round(1.005, 2) // 1.01
hlp.round(1.005) // 1

// check if variable is integer
hlp.isInteger('foo') // false
hlp.isInteger(42) // true
hlp.isInteger('42') // true
hlp.isInteger(4e2) // true
hlp.isInteger('4e2') // true
hlp.isInteger(' 1 ') // true
hlp.isInteger('') // false
hlp.isInteger('  ') // false
hlp.isInteger(42.1) // false
hlp.isInteger('1a') // false
hlp.isInteger('4e2a') // false
hlp.isInteger(null) // false
hlp.isInteger(undefined) // false
hlp.isInteger(NaN) // false

// check if variable is numeric
hlp.isNumeric(1337) // true
hlp.isNumeric('42') // true
hlp.isNumeric('42.7') // true
hlp.isNumeric('a') // false

// serialize/unserialize
hlp.serialize({ foo: 'bar' }); // 'a:1:{s:3:"foo";s:3:"bar";}'
hlp.unserialize('a:1:{s:3:"foo";s:3:"bar";}'); // {foo:'bar'}

// json parsing
hlp.jsonStringToObject('["foo","bar","baz"]') // ['foo','bar','baz']
hlp.jsonStringToObject('["foo","bar","baz",]') // null
hlp.jsonObjectToString(['foo','bar','baz']) // '["foo","bar","baz"]'
hlp.isJsonString('["foo","bar","baz",]') // false
hlp.isJsonString('["foo","bar","baz"]') // true

// map for objects
hlp.map({ foo: 'bar', bar: 'baz' }, (obj__key, obj__value) => obj__value += '!'); // { foo: 'bar!', bar: 'baz!' }

// fun with blobs
hlp.stringtoblob(string)
hlp.stringtoblob(string, 'image/png')
hlp.blobtostring(blob).then((string) => { })
hlp.blobtobase64(blob).then((base64) => { })
hlp.base64toblob(base64)
hlp.base64toblob(base64, 'image/png')
hlp.filetobase64(file).then((base64) => { })
hlp.blobtofile(blob)
hlp.blobtofile(blob, 'filename.png')
hlp.filetoblob(file)
hlp.base64tofile(base64)
hlp.base64tofile(base64, 'image/png')
hlp.base64tofile(base64, 'image/png', 'filename.png')
hlp.base64tostring(base64)
hlp.stringtobase64(string)
hlp.blobtourl(blob)
hlp.stringtourl(string)
hlp.base64tourl(base64)
hlp.filetourl(file)

// fix exif image orientation
hlp.fixImageOrientation(base64).then((base64) => { });
hlp.getImageOrientation(base64).then((orientation) => { });

// html entity encode/decode
hlp.htmlEncode('&<>"`\'') // &amp;&lt;&gt;&quot;&#96;&#x27;
hlp.htmlDecode('&amp;&lt;&gt;&quot;&#96;&#x27;') // &<>"`'

// line break conversion
hlp.nl2br('foo\nbar') // foo<br/>bar
hlp.br2nl('foo<br/>bar') // foo\nbar

// floating point math made easy
hlp.fmath('*', 0.1, 0.2) // 0.02
hlp.fmath('+', 0.1, 0.2) // 0.3
hlp.fmath('-', 0.1, 0.2) // -0.1
hlp.fmath('/', 0.2, 0.1) // 2
hlp.fmath('/', 0.39, 100, 12) // 0.0039 (precision of 12)

// trim helpers
hlp.trim('  foo ') // 'foo'
hlp.trim('xxfoox', 'x') // 'foo'
hlp.ltrim('  foo ') // 'foo '
hlp.ltrim('xxfoox', 'x') // 'foox'
hlp.rtrim('  foo ') // '  foo'
hlp.rtrim('xxfoox', 'x') // 'xxfoo'

// truncate long strings
hlp.truncate_string('Lorem ipsum dolor sit amet, consectetuer.', 20); // Lorem ipsum dolor ...
hlp.truncate_string('Lorem ipsum dolor sit amet, consectetuer.', 20, '…'); // Lorem ipsum dolor …

// fun with emojis
let str = 'This❤️😀👩‍⚖️ is a text full of 🧗‍♀️emojis👩🏼‍❤️‍💋‍👩🏽.';
str.match(hlp.emojiRegex()) // ['❤️', '😀', '👩‍⚖️', '🧗‍♀️', '👩🏼‍❤️‍💋‍👩🏽']
str.replaceAll(hlp.emojiRegex(), '') // This is a text full of emojis.
str.replace(hlp.emojiRegex(false), '') // This😀👩‍⚖️ is a text full of 🧗‍♀️emojis👩🏼‍❤️‍💋‍👩🏽.
hlp.emojiRegex().test(str) // true

// create lexicographically ordered string ids like in firebase
hlp.pushId() // -LDiDooGs9PyGHmghk5i
hlp.pushId() // -LDiDooGs9PyGHmghk5j

// access object properties with dotprop notation
// today it is better to use optional chaining in combination with nullish coalescing ({}?.c?.a?.a??'default')
hlp.getProp({
    a: 1,
    b: { a: 3, b: 3 },
    c: { a: { a: 7 } }
}, 'c.a.a') // 7
```

check out also the following helpers for the frontend:

```js
// cookies
hlp.cookieSet('foo', 'bar', 7)
hlp.cookieSet('foo', 'bar', 7, false) // only for current domain (no subdomains)
hlp.cookieGet('foo') // bar
hlp.cookieDelete('foo')
hlp.cookieDelete('foo', false) // only for current domain (no subdomains)
hlp.cookieExists('foo') // true|false

// localstorage (with expiration time and object support)
hlp.localStorageSet('foo', {some: 'data'}, 7)
hlp.localStorageGet('foo') // {'some': 'data'}
hlp.localStorageDelete('foo')
hlp.localStorageExists('foo') // true|false

// get parameter (example url: https://tld.com/?foo=bar&bar=baz)
hlp.getParam('foo') // foo
hlp.getParam('bar') // baz
hlp.getParam('baz') // null

// device detection helpers
hlp.getDevice() // ['phone','tablet','desktop']
hlp.isPhone()
hlp.isTablet()
hlp.isDesktop()
hlp.isMobile()
hlp.isTouch()

// os detection helpers
hlp.getOs() // ['windows','mac','linux','unknown']
hlp.isWindows()
hlp.isMac()
hlp.isLinux()

// browser detection helpers
hlp.getBrowser() // ['ie','edge','firefox','chrome','safari','opera','unknown']

// smooth scroll to position / element
hlp.scrollTo( 0, 1000 ).then(() => { console.log('done'); });
hlp.scrollTo( document.querySelector('.foo'), 1000 ).then(() => { console.log('done'); });
hlp.scrollTo( 0, 1000, document.querySelector('.bar') ).then(() => { console.log('done'); }); // scoll inside .bar
hlp.scrollTo( document.querySelector('.foo'), 1000, null, -200 ).then(() => { console.log('done'); }); // apply offset
hlp.scrollTo( document.querySelector('.foo'), 1000, null, document.querySelector('.header') ).then(() => { console.log('done'); }); // apply offset (height of dom element only if it exists and is fixed!)
hlp.scrollTo( document.querySelector('.foo'), 1000, null, [document.querySelector('.header'), -200] ).then(() => { console.log('done'); }); // you can also provide multiple values (of different type)
hlp.scrollTo( document.querySelector('.foo'), 1000, null, -200, true ).then(() => { console.log('done'); }); // only scroll up (never down)

// get top/left scroll position
hlp.scrollTop()
hlp.scrollLeft()

// get closest vertical scrollable element (including oneself)
hlp.closestScrollable( document.querySelector('.foo') )

// get offset of element (excluding margin)
hlp.offsetTop( document.querySelector('.foo') )
hlp.offsetLeft( document.querySelector('.foo') )
hlp.offsetRight( document.querySelector('.foo') )
hlp.offsetBottom( document.querySelector('.foo') )

// get offset of element (including margin)
hlp.offsetTopWithMargin( document.querySelector('.foo') )
hlp.offsetLeftWithMargin( document.querySelector('.foo') )
hlp.offsetRightWithMargin( document.querySelector('.foo') )
hlp.offsetBottomWithMargin( document.querySelector('.foo') )

// get document size
hlp.documentWidth()
hlp.documentHeight()

// get window size
hlp.windowWidth()
hlp.windowHeight()
hlp.windowWidthWithoutScrollbar()
hlp.windowHeightWithoutScrollbar()

// get width with margin
hlp.outerWidthWithMargin( document.querySelector('.foo') )
hlp.outerHeightWithMargin( document.querySelector('.foo') )

// get cursor position (without mouse events)
hlp.cursorPosition().then(pos => { console.log(pos); /* pos: { x: ..., y: ... } */ });

// polyfills for ie11
hlp.closest( document.querySelector('.children'), '.parent' )
hlp.matches( document.querySelector('.parent'), '.parent' ) // true
hlp.remove( document.querySelector('.foo') ) // also works if .foo does not exist

// dom traversal
hlp.prevAll( document.querySelector('.foo') )
hlp.prevAll( document.querySelector('.foo'), '.bar' )
hlp.nextAll( document.querySelector('.foo') )
hlp.nextAll( document.querySelector('.foo'), '.bar' )
hlp.siblings( document.querySelector('.foo') )
hlp.siblings( document.querySelector('.foo'), '.bar' )
hlp.parents( document.querySelector('.foo') )
hlp.parents( document.querySelector('.foo'), '.bar' )
hlp.prevUntil( document.querySelector('.foo'), '.bar' ) // prev until selector not including
hlp.nextUntil( document.querySelector('.foo'), '.bar' ) // next until selector not including
hlp.prev( document.querySelector('.foo') )
hlp.prev( document.querySelector('.foo'), '.bar' )
hlp.next( document.querySelector('.foo') )
hlp.next( document.querySelector('.foo'), '.bar' )

// wrap element
hlp.wrap( document.querySelector('.foo'), '<div class="wrapper"></div>' )

// wrap all text nodes with new node
hlp.wrapTextNodes( document.querySelector('.foo'), 'p' )

// html string to dom (also supports ie11 and td nodes that cannot be root nodes)
hlp.html2dom('<p>foo</p>')
hlp.html2dom('<td>bar</td>')

// get all styles of a dom element (extracted from both inline styling and external styling through stylesheets)
hlp.css( document.querySelector('.foo') )

// visually focus element on page
hlp.focus('.foo')
hlp.focus(document.querySelector('.foo'))
hlp.unfocus()

// on delegate
hlp.on('click', '.selector', (e, el) => { });
hlp.on('click', '.selector', '.scope', (e, el) => { });

// classic debounce
window.addEventListener('resize', hlp.debounce(() => { console.log('debounce at resize') }, 1000));
document.querySelector('.container').addEventListener('input', hlp.debounce((e) => { console.log('debounce at '+e.target.value); }, 1000));
let debounce = hlp.debounce((e) => { console.log('debounce at '+e.target.value); }, 1000); // conditional debounce
document.querySelector('.container').addEventListener('input', e => { debounce(e); });

// classic throttle
window.addEventListener('resize', hlp.throttle(() => { console.log('throttle at resize') }, 1000));
document.querySelector('.container').addEventListener('input', hlp.throttle((e) => { console.log('throttle at '+e.target.value); }, 1000));
let throttle = hlp.throttle((e) => { console.log('throttle at '+e.target.value); }, 1000); // conditional throttle
document.querySelector('.container').addEventListener('input', e => { throttle(e); });

// get current url
hlp.url() // https://github.com/vielhuber/hlp
hlp.urlWithHash() // https://github.com/vielhuber/hlp#foo
hlp.fullUrl() // https://github.com/vielhuber/hlp?foo=bar#foo
hlp.urlWithArgs() // https://github.com/vielhuber/hlp?foo=bar
hlp.baseUrl() // https://github.com
hlp.urlHost(); // github.com
hlp.urlHostTopLevel(); // github.com
hlp.urlPath(); // /vielhuber/hlp
hlp.urlHash(); // #foo
hlp.urlArgs(); // ?foo=bar

// get url of current running script
hlp.urlOfScript(); // https://tld.com/wp-content/themes/dummy/script.js
hlp.pathOfScript(); // https://tld.com/wp-content/themes/dummy

// set 100vh for a dom element (respecting the visibility of the address bar)
hlp.real100vh('.foo') // 100vh
hlp.real100vh('.foo', 60) // 60vh
hlp.real100vh() // sets up a css variable which can be used with e.g. calc(100 * var(--vh, 1vh)); to mimic 100vh

// remove hover states on ios to prevent double clicks (see https://stackoverflow.com/questions/47802530/a-click-in-ios-safari-triggers-a-hover-state-on-element-underneath-where-you-t);
hlp.iOsRemoveHover();

// fade in/out dom element
hlp.fadeIn( document.querySelector('.foo'), 1000 ).then(() => { console.log('done'); });
hlp.fadeOut( document.querySelector('.foo'), 1000 ).then(() => { console.log('done'); });

// check if dom element is generally visible
hlp.isVisible( document.querySelector('.foo') )
// check if dom element is visible inside viewport
hlp.isVisibleInViewport( document.querySelector('.foo') )

// wait until a dom element has a certain css property
// this is quite useful when working with async loaded stylesheets like loadCSS
// .beacon is an element below the fold populated by the stylesheet
hlp.waitUntil('.beacon').then(() => { });
hlp.waitUntil('.beacon','position').then(() => { });
hlp.waitUntil('.beacon','position','relative').then(() => { });

// wait for elements (that appear also afterwards)
hlp.waitUntilEach('.el', ($el) => { });

// wait until a variable is set or has a specific value
hlp.waitUntilVar('globalVar').then(() => { });
hlp.waitUntilVar(obj, 'objectVar').then(() => { });
hlp.waitUntilVar(obj, 'objectVar', true).then(() => { });

// run a function for every dom element, even it is added dynamically later on
hlp.runForEl('.beacon', el => { el.style.backgroundColor = 'red'; });

// automatically change height of all textareas based on content
hlp.textareaAutoHeight()
hlp.textareaAutoHeight('.special')
hlp.textareaSetHeight( document.querySelector('.special') )

// load external js file in dom with promise
hlp.loadJs('https://apis.google.com/js/api.js').then(() => { console.log('done'); });
hlp.loadJs([
    'https://www.tld.com/1.js',
    'https://www.tld.com/2.js',
    'https://www.tld.com/3.js'
]).then(() => { console.log('done'); });
hlp.loadJsSequentially([
    'https://www.tld.com/1.js',
    'https://www.tld.com/2.js',
    'https://www.tld.com/3.js'
]).then(() => { console.log('done'); });

// run event after all images are loaded inside container
// works even after dynamic changes
// runs more than once (after each change)
// run this outside of window load / document ready events
hlp.triggerAfterAllImagesLoaded('.container', '.container__image', () => {});

// proper document read/load events, that are guaranteed to be run (also if the script is embedded via async)
hlp.ready().then(() => {});
hlp.load().then(() => {});

// easy ajax requests (without the fetch api; also works in ie11)
hlp.get('https://httpbin.org/anything').then((response) => { }).catch((error) => { }) // { "method": "GET", ... }
hlp.get('/relpath').then((response) => { }).catch((error) => { }) // if a full url is omitted, the call is done on the baseurl
hlp.get('https://httpbin.org/anything', { throttle: 1000 }).then((response) => { }).catch((error) => { }) // same but with a throttle of 1 second
hlp.get('https://httpbin.org/status/404', { allow_errors: false }).then((response) => { }) // deny 404 and other status codes as a response (inside catch())
hlp.post('https://httpbin.org/anything', { data: { foo: 'bar' } }).then((response) => { }).catch((error) => { }) // { "method": "POST", "data": {"foo": "bar"}, ... }
hlp.post('https://httpbin.org/anything', { data: { foo: 'bar' }, headers: { Bar: 'baz' } }).then((response) => { }).catch((error) => { }) // { "method": "POST", "headers" = { "Bar": "baz", ... }, ... }
let formData = new FormData(); formData.append('foo', 'bar'); hlp.post('https://httpbin.org/anything', { data: formData }) // this also works with FormData

// on resize vertically/horizontally
window.addEventListener('resize', () => {}) // inaccurate, triggers too often (especially when scrolling on android/iphone)
hlp.onResizeHorizontal(() => {}) // only triggers when viewport width changes; also triggers on first run
hlp.onResizeVertical(() => {}) // only triggers when viewport height changes; also triggers on first run

// add event listener once
hlp.addEventListenerOnce(
    document.getElementById('foo'),
    'click',
    (event) => { alert('this gets called only once'); }
);
hlp.addEventListenerOnce(
    document.getElementById('foo'),
    'click',
    (event) => { if(1==1) { return false; } } // if you return false, the event listener is not removed
);

// simple animations (via css transitions)
hlp.animate(
    document.getElementById('.single'),
    'transform: translateX(0)',
    'transform: translateX(-100%)',
    'ease-in-out',
    1000
).then(() => { console.log('done'); });
hlp.animate(
    document.querySelectorAll('.multiple'),
    'opacity: 1; pointer-events:auto',
    'opacity: 0; pointer-events:none',
    'linear',
    5000
).then(() => { console.log('done'); });
```


## php implementation

there is also a php implemenation [stringhelper](https://github.com/vielhuber/stringhelper) with similiar functions available.


## appendix

### existence matrix

| | <sub>hlp.x()</sub> | <sub>hlp.true()</sub> | <sub>hlp.false()</sub> | <sub>!== null</sub> | <sub>!= null</sub> | <sub>!== false</sub> | <sub>!= false</sub> | <sub>=== true</sub> | <sub>== true</sub> | <sub>typeof !== 'undefined'</sub> | <sub>!= undefined</sub> | <sub>!== undefined</sub> | <sub>if/else</sub> | <sub>ternary</sub> | <sub>length > 0</sub> | <sub>!= ''</sub> | <sub>!== ''</sub> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| <sub>undefined</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>null</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |
| <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[]</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |
| <sub>['']</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> |
| <sub>0</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |
| <sub>1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>-1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>'0'</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>'1'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>'-1'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>''</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |
| <sub>' '</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>'null'</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>'false'</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>'true'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>'str'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[0,1]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[0]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>{}</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>un.known.property</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> |
| <sub>(()=>un.known.property)</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |

### loose comparison matrix

| <sub>==</sub> | <sub>undefined</sub> | <sub>null</sub> | <sub>false</sub> | <sub>true</sub> | <sub>[]</sub> | <sub>['']</sub> | <sub>0</sub> | <sub>1</sub> | <sub>-1</sub> | <sub>'0'</sub> | <sub>'1'</sub> | <sub>'-1'</sub> | <sub>''</sub> | <sub>' '</sub> | <sub>'null'</sub> | <sub>'false'</sub> | <sub>'true'</sub> | <sub>'str'</sub> | <sub>[0,1]</sub> | <sub>[0]</sub> | <sub>{}</sub> | <sub>un.known.property</sub> | <sub>(()=>un.known.property)</sub> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| <sub>undefined</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>null</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>[]</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>['']</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>0</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>1</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>-1</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>'0'</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>'1'</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>'-1'</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>''</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>' '</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>'null'</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>'false'</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>'true'</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>'str'</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>[0,1]</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>[0]</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>{}</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>error</sub> | <sub>false</sub>  |
| <sub>un.known.property</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub>  |
| <sub>(()=>un.known.property)</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>true</sub>  |
