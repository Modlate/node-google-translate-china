# Google Translate Node JS

Google Translate API client for node.js. 

## Install

```js
npm install node-google-translate-china --save
```
OR
```js
yarn add node-google-translate-china
```

## USAGE

```js
var translate = require('node-google-translate-china');

translate({
  text: 'text',
  source: 'es',
  target: 'en'
}, function(result) {
  console.log(result);
});
```
