# Some Random Api
This is a js wrapper for some-random-api.ml
for more information about some-random-api
check the [docs](https://some-random-api.ml/docs)

Looking for wrappers for other languages?
click [here](https://some-random-api.ml/wrappers) for the list of all wrappers!

### code example
```javascript
var api = require('some-random-api');

async function lyrics() {
var lyrics = await api.lyrics('firestone')
console.log(lyrics)
}

lyrics()

//or use .then()
api.pandaimg().then(img => {
    console.log(img)
})

```

### about some random api
some random api was made by Telk#7197 for 
discord bot makers that likes to add animal facts, images and other things
contant me on discord - Telk#7197

### License
Released under the [Apache 2.0](LICENSE) License
