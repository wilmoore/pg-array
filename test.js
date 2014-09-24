var test = require('tape');
var pgarray = require('./');

var cases = [
  { name: 'from array', input: ['erlang', 'elixir', 'python'], delimiter: null },
  { name: 'from comma delimited string (default delimiter)', input: 'erlang,elixir,python', delimiter: null },
  { name: 'from semi-colon delimited string', input: 'erlang;elixir;python', delimiter: ';' },
  { name: 'from pipe delimited string', input: 'erlang|elixir|python', delimiter: '|' },
  { name: 'from carat delimited string', input: 'erlang^elixir^python', delimiter: '^' }
];

cases.forEach(function (testcase) {
  test(testcase.name, function (t) {
    t.equal('{erlang,elixir,python}', pgarray(testcase.input, testcase.delimiter)); t.end();
  });
});
