'use strict'

const $ = require('jquery')
require('popper.js')
require('bootstrap')
require('./assets/styles/index.scss')
// scripts
require('./assets/scripts/index.js')

$(document).ready(function() {
  $('#home').show()
})
