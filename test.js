var test = require('tape');
var pgarray = require('./');

var cases = [
  { name: 'from empty string', input: '', expected: '{}', delimiter: null },
  { name: 'from empty array', input: [], expected: '{}', delimiter: null },
  { name: 'from undefined', input: undefined, expected: '{}', delimiter: null },
  { name: 'from null', input: null, expected: '{}', delimiter: null },
  { name: 'from false', input: false, expected: '{}', delimiter: null },
  { name: 'from number', input: 42, expected: '{42}', delimiter: null },
  { name: 'from array', input: ['erlang', 'elixir', 'python'], delimiter: null },
  { name: 'from comma delimited string (default delimiter)', input: 'erlang,elixir,python', delimiter: null },
  { name: 'from semi-colon delimited string', input: 'erlang;elixir;python', delimiter: ';' },
  { name: 'from pipe delimited string', input: 'erlang|elixir|python', delimiter: '|' },
  { name: 'from carat delimited string', input: 'erlang^elixir^python', delimiter: '^' }
];

cases.forEach(function (testcase) {
  test(testcase.name, function (t) {
    var expected = 'expected' in testcase ? testcase.expected : '{erlang,elixir,python}';
    t.equal(expected, pgarray(testcase.input, testcase.delimiter)); t.end();
  });
});
