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

// some neat device detection helpers
hlp.isPhone()
hlp.isTablet()
hlp.isDesktop()
hlp.isMobile()
hlp.isTouch()

// smooth scrollTo element
hlp.scrollTo( document.querySelector('.foo'), 1000 )

// data structure
isObject({}) // true
isObject({foo: 'bar'}) // true
isObject(null) // false
isArray([]) // true
isArray(['foo','bar']) // true
isArray(null) // false

// load external js file in dom with promise
hlp.loadJS('https://apis.google.com/js/api.js').then(() => { console.log('done'); });
```


## php implementation

there is also a php-implemenation [stringhelper](https://github.com/vielhuber/stringhelper) with similiar functions available.


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