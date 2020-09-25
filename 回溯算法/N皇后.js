/**
 * 回溯算法 深度优先搜索
 * 遍历每一行的每一列，如果当前位置不会产生攻击就记录当前位置并结束本行循环，往下一行走；如果本行没有一个位置能安放，或者已经走完所有行，就回退到上一个安放的位置，继续看此处的下一个位置能否安放，往复循环。
 * 那么，重点是怎么判断当前位置能否安放，在循环中，一行只能放一个，放下之后就立马进入下一行，所以一行中不会有重复的项，那列和对角线呢？我们使用三个数组来分别记录列和主副对角线的使用情况，当某个位置放下一个皇后之后，记录该列到列数组中，此后该列不能使用；
 * 主对角线规律：x-y=k（行-列=固定值）
 * 副对角线规律：x+y=k（行+列=固定值）
 * 所以，当某个位置放下一个皇后之后，记录当前行+列的值，和行-列的值，此后的位置如果行+列或行-列有与数组中重复的，都不可使用。
 */
var solveNQueens = function(n) {
  if(n==0) return res;

  let col = [], main = [], sub = []; // boolean[]
  let res = []; // string[]
  let path = []; //number[]
  dfs(0, path);
  return res;

  function dfs(row, path){
      // 深度优先遍历到下标为 n，表示 [0.. n - 1] 已经填完，得到了一个结果
      if(row == n){
          const board = convert2board(path);
          res.push(board);
          return;
      }

      // 针对下标为 row 的每一列，尝试是否可以放置
      for(let j=0; j<n; j++){
          if(!col[j] && !main[row-j+n-1] && !sub[row+j]){
              path.push(j);

              // 记录该位置的攻击范围
              col[j] = true;
              main[row-j+n-1] = true; //加n-1是为了防止数组索引为负数
              sub[row+j] = true;

              // 进入下一行
              dfs(row+1, path);

              // 回溯, 去掉path中最后一个值，尝试其他选项
              col[j] = false;
              main[row-j+n-1] = false; 
              sub[row+j] = false;
              path.pop();
          }
      }
  }

  // 输出一个结果
  function convert2board(path){
      let board = []; // string[]
      for(let i=0; i<path.length; i++){
          let ret = new Array(n).fill('.');
          ret[path[i]] = 'Q';
          board.push(ret.join(''))
      }
      return board;
  }
};