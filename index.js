'use strict'

module.exports = pgarray;

var trim = Function.prototype.call.bind(String.prototype.trim);

function pgarray(value) {
  return "{" + value.split(",").map(trim).join(",") + "}";
}

