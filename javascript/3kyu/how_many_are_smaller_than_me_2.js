/*
This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first.

Write

function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]

*/


//Answer

class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.count = 0;
    this.frequency = 1;
  }
}
class BstTree {
  constructor() {
    this.root = null;
  }
}
class Element {
  addNode(tree, data) {
    var tracker = 0;
    if (tree.root == null) {
      tree.root = new TreeNode(data);
    } else {
      var node = tree.root;
      while (node != null) {
        if (data < node.key) {
          node.count++;
          if (node.left == null) {
            node.left = new TreeNode(data);
            return tracker;
          } else {
            node = node.left;
          }
        } else if (data > node.key) {
          tracker = tracker + (node.count + node.frequency);
          if (node.right == null) {
            node.right = new TreeNode(data);
            return tracker;
          } else {
            node = node.right;
          }
        } else {
          node.frequency += 1;
          return tracker + node.count;
        }
      }
    }
    return tracker;
  }

  countElement(arr, size) {
    var tree = new BstTree();
    var auxiliary = Array(size).fill(0);
    var i = 0;
    for (i = size - 1; i >= 0; --i) {
      auxiliary[i] = this.addNode(tree, arr[i]);
    }
    let countArr = [];
    for (i = 0; i < size; ++i) {
      countArr.push(auxiliary[i]);
    }

    return countArr;
  }
}
function smaller(arr) {
  let el = new Element();
  return el.countElement(arr, arr.length);
}
