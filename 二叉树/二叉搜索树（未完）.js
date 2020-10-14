class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(key){
    const newNode = new Node(key);
    if(this.root === null){
      this.root = newNode;
    }
  }
}