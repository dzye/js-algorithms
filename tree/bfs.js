const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        },
      ],
    },
  ],
};
const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    let out = q.shift();
    console.log(out.val);
    out.children.forEach((item) => {
      q.push(item);
    });
  }
};
bfs(tree);
