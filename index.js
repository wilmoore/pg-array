'use strict'

module.exports = pgarray;

function pgarray(value, delimiter) {
  return '{' + toArray(value, delimiter).map(trim).join(',') + '}';
}

function toArray(value, delimiter) {
  return Array.isArray(value) ? value : value.split(delimiter || ',');
}

function trim(value) {
  return String(value).replace(/(^\s*|\s*$)/g, '');
}
