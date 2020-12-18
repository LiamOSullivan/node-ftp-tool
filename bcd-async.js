'use strict'
const fetch = require('node-fetch')

class TimeoutError extends Error {
  constructor(message = '') {
    super(message)
    this.name = 'TimeoutError'
  }
}




