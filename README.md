# is-arr [![Build Status](https://travis-ci.org/iGuntur/is-arr.svg?branch=master)](https://travis-ci.org/iGuntur/is-arr) [![npm](https://img.shields.io/npm/v/is-arr.svg?style=flat-square)](https://npmjs.com/package/is-arr) [![npm](https://img.shields.io/npm/l/is-arr.svg?style=flat-square)](#)


## Install

```
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

Returns an promise value of input

### isArr.sync(input)

Returns boolean of input

#### input

Type: `any`


## License

MIT © [Guntur](http://guntur.starmediateknik.com)
