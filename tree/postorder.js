const bt = require('./bt');

// function postorder(root) {
//   if (!root) return;
//   postorder(root.left);
//   postorder(root.right);
//   console.log(root.val);
// }
function postorder(root) {
  if (!root) return;
  const stack = [root];
  const outStack = [];
  while (stack.length) {
    const item = stack.pop();
    if (item.left) {
      stack.push(item.left);
    }
    if (item.right) {
      stack.push(item.right);
    }
    outStack.push(item);
  }
  console.log(outStack);
  while (outStack.length) {
    const n = outStack.pop();
    console.log(n.val);
  }
}
postorder(bt);
