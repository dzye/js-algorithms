const obj = {};
const func = () => {};
const arr = [];

const instanaceOf = (a, b) => {
  let p = a;
  while (p) {
    if (p === b.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};

var foo = {},
  F = function () {};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);
