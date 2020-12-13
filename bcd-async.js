'use strict'
const fetch = require('node-fetch')

class TimeoutError extends Error {
  constructor(message = '') {
    super(message)
    this.name = 'TimeoutError'
  }
}

exports.fetchJsonAsyncTimeout = async function (url, duration = 30000) {
  try {
    if (url != null) {
      const res = await Promise.race([fetch(url), new Promise((resolve, reject) => setTimeout(() => reject(new TimeoutError(`Timeout waiting for <b>${url}</b> to respond to our request for data`)), duration)
      )])
      const json = await res.json()
      return json
    } else {
      console.log(`Error trying to fetch invalid url. url is ${url}`)
    }
  } catch (e) {
    console.log(`Error trying to fetch ${url}`)
    return e
  }
}



