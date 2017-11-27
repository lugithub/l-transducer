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
console.log(result);
