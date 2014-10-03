'use strict'

// expose pgarray

module.exports = pgarray;

var toArray = require('to-array.js');

/**
 * Convert arrays and delimited strings to PostgreSQL array representation.
 *
 * @param {String|Array} value
 * Delimited string or array to be converted.
 *
 * @param {String} [delimiter=',']
 * String used to delimit source string (used only with string value).
 *
 * @return {String}
 * PostgreSQL array formatted string.
 */

function pgarray(value, delimiter) {
  return '{' + toArray(value, delimiter).map(clean).join(',') + '}';
}

/**
 * Ensures value is a trimmed string.
 *
 * @param {*} value
 * Value to be represented as a string literal.
 *
 * @return {String}
 * Cleaned string.
 */

function clean(value) {
  return string(value).trim();
}

/**
 * Return a literal string representation of given value.
 *
 * @param {*} value
 * Value to be represented as a string literal.
 *
 * @return {String}
 * Literal string representation of given value.
 */

function string(value) {
  return value && value.toString ? value.toString() : '';
}

