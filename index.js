var snekfetch = require('snekfetch');
var apis = {
   async meme(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/meme`)
          callback(null, response.body.url)
   },
   async devmeme(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/devmeme`)
       callback(null, response.body.url)
   }, 
   //animal images & facts
   async pandafact(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/pandafact`)
       callback(null, response.body.fact)
   },
   async dogfact(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/dogfact`)
       callback(null, response.body.fact)
   },
   async catfact(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/catfact`)
       callback(null, response.body.fact)
   },
   async foxfact(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/foxfact`)
       callback(null, response.body.fact)
   },
   async pandaimg(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/pandaimg`)
       callback(null, response.body.link)
   },
   async foximg(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/foximg`)
       callback(null, response.body.link)
   },
   async pikachuimg(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/pikachuimg`)
       callback(null, response.body.link)
   },
   //others
   async bottoken(callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/bottoken`)
       callback(null, response.text)
   },
   async lyrics(title, callback) {
       const response = await snekfetch.get(`https://some-random-api.ml/lyrics/?title=${title}`)
       callback(null, response.body.lyrics)
   },

};

module.exports = apis;

