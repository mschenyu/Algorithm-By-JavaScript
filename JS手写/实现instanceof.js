// instanceof主要的实现原理就是验证右边变量的prototype是否在左边变量的原型链上，因此，instanceof在查找的过程中会遍历左边变量的原型链，直到找到右边变量的prototype，如果查找失败，则返回false

function new_instanceof(leftValue, rightValue){
  const rightPrototype = rightValue.prototype;
  leftValue = leftValue.__proto__;
  while(true){
    if(leftValue === null){ // 终点Object.prototype.__proto__是null
      return false;
    }
    if(leftValue === rightPrototype){
      return true;
    }
    leftValue = leftValue.__proto__;
  }
}

console.log(new_instanceof(Function,Object))