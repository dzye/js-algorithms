const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;
d.next = null;

// 遍历链表
let p = a;
while (p) {
  console.log(p.val);
  p = p.next;
}

// 插入e到c d 之间
const e = { val: 'e' };
const mut = c.next;
c.next = e;
e.next = mut;

// 删除e
c.next = d