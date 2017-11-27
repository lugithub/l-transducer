const R = require('ramda');

const mapping =
  f =>
    reducing =>
      (result, input) => reducing(result, f(input));

const filtering =
  predicate =>
    reducing =>
      (result, input) => predicate(input) ? reducing(result, input) : result;

let foo = mapping(x => x + 1)(
  filtering(x => x % 2 === 0)((xs, x) => {
    xs.push(x);
    return xs;
  })
);

let result = foo([2, 3, 4], 6)
result;

let result1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
  mapping(x => x + 1)(filtering(x => x % 2 === 0)((xs, x) => {
    xs.push(x);
    return xs;
  })),
  []
);

result1;

const xform = R.compose(
  mapping(x => x + 1),
  filtering(x => x % 2 === 0)
);

let result2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  .reduce(xform((xs, x) => {
    xs.push(x);
    return xs;
  }), []);

result2
