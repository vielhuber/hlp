## installation

```
yarn init -y && yarn add hlp
```

now embed it directly:
```html
<script src="hlp.min.js"></script> 
```

or use it as a module:
```js
import hlp from 'hlp';
```


## usage

```js
// capitalize
hlp.capitalize('foo') // Foo

// cookies
hlp.cookieSet('foo', 'bar', 7);
hlp.cookieGet('foo') // bar
hlp.cookieDelete('foo')
hlp.cookieExists('foo') // false

// get parameter (example url: https://tld.com/?foo=bar&bar=baz)
hlp.getParam('foo') // foo
hlp.getParam('bar') // baz
hlp.getParam('baz') // null

// device detection helpers
hlp.isPhone()
hlp.isTablet()
hlp.isDesktop()
hlp.isMobile()
hlp.isTouch()

// smooth scroll to element
hlp.scrollTo( document.querySelector('.foo'), 1000 )

// check if object
hlp.isObject({}) // true
hlp.isObject({foo: 'bar'}) // true
hlp.isObject(null) // false

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

// create guid
hlp.guid() // e86e393c-9788-857b-27c2-f80c8ca1a302
hlp.guid() // 8b25a8f8-9525-bd73-4679-3539321db93b

// replace all occurences
hlp.replaceAll('foo bar baz', 'a', 'b') // 'foo bbr bbz'

// load external js file in dom with promise
hlp.loadJS('https://apis.google.com/js/api.js').then(() => { console.log('done'); });

// json parsing
hlp.jsonStringToObject('["foo","bar","baz"]') // ['foo','bar','baz']
hlp.jsonStringToObject('["foo","bar","baz",]') // null
hlp.jsonObjectToString(['foo','bar','baz']) // '["foo","bar","baz"]'

// easy ajax requests
hlp.get('https://httpbin.org/anything', (data) => { }, (error) => { }) // { "method": "GET", ... }
hlp.get('https://httpbin.org/anything', (data) => { }, (error) => { }, 1000) // same but with a throttle of 1 second
hlp.post('https://httpbin.org/anything', ['foo' => 'bar'], (data) => { }, (error) => { }) // { "method": "POST", "data": {"foo": "bar"}, ... }
hlp.post('https://httpbin.org/anything', ['foo' => 'bar'], (data) => { }, (error) => { }, ['Bar' => 'baz']) // { "method": "POST", "headers" = { "Bar": "baz", ... }, ... }
hlp.getWithPromise('https://httpbin.org/anything').then((data) => { }).catch((error) => { }); // same but with promise
hlp.postWithPromise('https://httpbin.org/anything', ['foo' => 'bar']).then((data) => { }) // same but with promise

// on resize vertically/horizontally
window.addEventListener('resize', () => {}) // inaccurate, triggers too often (especially when scrolling on android/iphone)
hlp.onResizeHorizontal(() => {}) // only triggers when viewport width changes
hlp.onResizeVertical(() => {}) // only triggers when viewport height changes

// return unique array (remove duplicate values, order-safe)
hlp.uniqueArray(['foo','bar','foo','baz']) // ['foo','bar','baz']

// char helpers
hlp.charToInt('D') // 4
hlp.intToChar(4) // 'D'
hlp.incChar('D') // 'E'
hlp.incChar('Z') // 'AA'
hlp.incChar('A',2) // 'C'
hlp.decChar('U') // 'T'

// range
hlp.range('A','Z') // ['A','B',...,'Z']
hlp.range(1,42) // [1,2,...,42]
hlp.range('C','A') // ['C','B','A']
```


## php implementation

there is also a php-implemenation of hlp called [stringhelper](https://github.com/vielhuber/stringhelper) with similiar functions available.


## overview of __x

| | <sub>!== null</sub> | <sub>!= null</sub> | <sub>!== false</sub> | <sub>!= false</sub> | <sub>=== true</sub> | <sub>== true</sub> | <sub>typeof input !== 'undefined'</sub> | <sub>if/else</sub> | <sub>ternary</sub> | <sub>length > 0</sub> | <sub>!= ''</sub> | <sub>!== ''</sub> | <sub>!!</sub> | <sub>Boolean()</sub> | <sub>__x</sub> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| <sub>null</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>type error</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |
| <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |
| <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>['']</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>0</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |
| <sub>1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>-1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>''</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |
| <sub>' '</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>str</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[0,1]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[0]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>{}</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>undefined</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>type error</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |