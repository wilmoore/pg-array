# pg-array

[![Build Status](http://img.shields.io/travis/wilmoore/pg-array.svg)](https://travis-ci.org/wilmoore/pg-array) [![NPM version](http://img.shields.io/npm/v/pg-array.svg)](https://www.npmjs.org/package/pg-array) [![NPM downloads](http://img.shields.io/npm/dm/pg-array.svg)](https://www.npmjs.org/package/pg-array) [![LICENSE](http://img.shields.io/npm/l/pg-array.svg)](LICENSE)

> Convert arrays and delimited strings to PostgreSQL array representation.

    $ npm install pg-array

## Examples

###### from comma delimited string

    var pgarray = require('pg-array');

    pgarray('node, ruby, rust');
    //=> '{node,ruby,rust}'

###### from arbitrary delimited string

    var pgarray = require('pg-array');

    pgarray('node; ruby; rust', ';');
    //=> '{node,ruby,rust}'

###### from array

    var pgarray = require('pg-array');

    pgarray(['node', 'ruby', 'rust']);
    //=> '{node,ruby,rust}'

## License

  [MIT](LICENSE)

