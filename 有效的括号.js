// leetcode 20
var isValid = function(s) {
  if(s.length%2) return false; // 减少执行时间

  const stack = []; //用一个将左括号都压进去，右括号匹配到栈顶则弹出
  const map = {
      "(": ")",
      "[": "]",
      "{": "}"
  }
  for(const curr of s){
      if(map[curr]){
          stack.push(curr)
      }else{
          if(!stack.length) return false;
          const top = stack[stack.length-1];
          if(curr === map[top]){
              stack.pop();
          }else{
              return false;
          }
      }
  }
  return stack.length === 0;

};