const fetch = require('node-fetch')
var apis = {
    //memes
    meme: function () {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/meme`)
          response = await response.json()
          resolve(response.url)
      })
    },
    textmeme: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/meme`)
          response = await response.json()
          resolve(response.text)
      })
    },
    devmeme: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/meme`)
          response = await response.json()
          resolve(response.dev)
      })
    },
    //facts
    dogfact: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/dogfact`)
          response = await response.json()
          resolve(response.fact)
      })
    },
    catfact: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/catfact`)
          response = await response.json()
          resolve(response.fact)
      })
    },
    pandafact: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/pandafact`)
          response = await response.json()
          resolve(response.fact)
      })
    },
    foxfact: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/foxfact`)
          response = await response.json()
          resolve(response.fact)
      })
    },

    //imgs
    dogimg: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/dogimg`)
          response = await response.json()
          resolve(response.link)
      })
    },
    catimg: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/catimg`)
          response = await response.json()
          resolve(response.link)
      })
    },
    pandaimg: async function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/pandaimg`)
          response = await response.json()
          resolve(response.link)
      })
    },
    redpandaimg: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/pandaimg`)
          response = await response.json()
          resolve(response.link)
      })
    },
    foximg: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/foximg`)
          response = await response.json()
          resolve(response.link)
      })
    },
    birbimg: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/birbimg`)
          response = await response.json()
          resolve(response.link)
      })
    },
    pikachuimg: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/pikachuimg`)
          response = await response.json()
          resolve(response.link)
      })
    },

    //others
    chat: function(message) {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/chatbot?message=${message}`)
        response = await response.json()
        resolve(response.response)
      })
    },
    mc: function(user) {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/mc?username=${user}`)
        response = await response.json()
        resolve(response)
      })
    },
    bottoken: function() {
      return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/bottoken`)
        response = await response.json()
        resolve(response.token)
      })
    },
    lyrics: function (title) {
       return new Promise(async function(resolve, reject) {
        fetch(`https://some-random-api.ml/lyrics/?title=${title}`).then(response => {
          resolve(response.json())
        })
      })
   },


}


module.exports = apis;

