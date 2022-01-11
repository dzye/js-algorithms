let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('string');
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add(o);
mySet.add({ a: 1, b: 2 });
mySet.has(1); //true
mySet.has('string');
mySet.has(o);
mySet.has({ a: 1, b: 2 });
mySet.delete(5);
// for(let item of mySet) console.log(item)
// for(let item of mySet.keys()) console.log(item)
// for(let item of mySet.values()) console.log(item)
// for(let [key,value] of mySet.entries()) console.log(key,value)
console.log([...mySet]);
console.log(Array.from(mySet));
const mySet2 = new Set([1,2,3,4])
console.log([...mySet].filter(item=>!mySet2.has(item)))