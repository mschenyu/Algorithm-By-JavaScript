function getLuckth(n){
  let res = 0;
  dfs(n, n);
  return res;

  function dfs(n, sum){
    if(!(sum%5)) {
      res = sum/5;
      return
    } 

    if(sum > 5){
      if(n<5) {
        dfs(n, sum+(n-1))
      }else{
        dfs(n-1, sum+(n-1))
      }
    }else{
      while(sum < 5){
        sum += n;
      }
      dfs(n, sum)
    }
  }
}

console.log(getLuckth(4))