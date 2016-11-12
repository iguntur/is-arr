# is-arr [![Build Status](https://travis-ci.org/iguntur/is-arr.svg?branch=master)](https://travis-ci.org/iguntur/is-arr)

> Check if a value is an array [`Polyfill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill)


## Install

``` bash
$ npm install --save is-arr
```


## Usage

**async**

```js
const isArr = require('is-arr');

isArr(['albums']).then(val => {
    console.log(val);
});
//=> true
```

**sync**

```js
const isArr = require('is-arr');

isArr.sync({"albums": "untitled"});
//=> false
```


## API

### isArr(input)

Returns a promise value of an input

### isArr.sync(input)

Returns a boolean value of an input

#### input

Type: `any`


## License

MIT © [Guntur Poetra](http://guntur.starmediateknik.com)
