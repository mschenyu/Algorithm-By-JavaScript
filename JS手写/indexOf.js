/**
 * 实现 indexOf 
 * 输入 abcdef,cd 输出 2 ，如果没找到返回-1
 */

/**
 * 方法一：每次截取item数量相同的子串与item对比
 */
 function indexOf(str, item){
   const strLen = str.length;
   const itemLen = item.length;

   for(let i=0; i<strLen - itemLen; i++){
     if(str.substr(i, itemLen) === item){
       return i;
     }
   }
   return -1;
 }

/**
 * 方法二：字母一一对比
 */
function indexOf(str, item) {
  const strLen = str.length, itemLen = item.length;
  loop:
  for(let i=0; i<strLen; i++){
    if(str[i] === item[0]){
      for(let j=1; j<itemLen; j++){
        if(str[i+j] != item[j]){  // 跳出内层循环 继续外层循环 （不会返回i）
          continue loop;
        }
      }
      return i;
    }
  }
  return -1;
}

/**
 * 方法三：正则匹配
 */
function indexOf(str, item){
  const reg = new RegExp(item, 'gi');
  const res = reg.exec(str);
  return res ? res.index : -1;
}

 console.log(indexOf('acbcdefcd', 'cd'))