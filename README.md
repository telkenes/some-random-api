# [Some Random Api](https://some-random-api.ml)
This is a JS wrapper for [some-random-api.ml](https://some-random-api.ml)


For more information about [some-random-api](https://some-random-api.ml)
Check the [docs](https://some-random-api.ml/docs)

Looking for wrappers for other languages?
Go [here](https://some-random-api.ml/wrappers) for the list of all wrappers!



### Code Examples

```javascript
const randomApi = require('some-random-api');

async function lyrics() {
    var lyrics = await randomApi.lyrics('firestone');
    console.log(lyrics);
}
lyrics();


//or use .then();
randomApi.pandaimg().then(img => {
    console.log(img);
});
```


### About
[Some-random-api](https://some-random-api.ml) was made by Telk#4038 for 
discord bot developers that would like to add animal facts, images and other things

Contact me on discord - Telk#4038


### License
Released under the [Apache 2.0](LICENSE) License
