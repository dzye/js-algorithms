const bt = require('./bt');

// function preorder(root) {
//   if (!root) return;
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// }

function preorder(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length != 0) {
    const item = stack.pop();
    console.log(item.val);
    if (item.right) {
      stack.push(item.right);
    }
    if (item.left) {
      stack.push(item.left);
    }
  }
}
preorder(bt);
