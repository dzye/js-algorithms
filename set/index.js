// 去重
const arr = [1,1,2,2]
const arr2 = new Set(arr);
console.log(Array.from(arr2))
console.log([...arr2])

// 判断元素是否在集合中
console.log(arr2.has(5))
