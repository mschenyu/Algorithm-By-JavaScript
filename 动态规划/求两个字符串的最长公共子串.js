// 如果存在最长公共子串则返回最长子串长度，否则返回0
// 思路：1.把两个字符串分别以行和列组成一个二维矩阵 2.比较二位矩阵中每个点对应的行列字符是否相等，相等的话设置其值item[i][j]=1 +item[i-1][j-1]，最后返回最长对角线上的最大值

// 最长连续公共子串
function getLCSLength(str1, str2){
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  // const temp = [[]];
  const temp = new Array(arr1.length).fill(0);
  for(let i=0; i<temp.length; i++){
    temp[i] = new Array(arr2.length).fill(0)
  }
  let maxLen = 0;
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if(arr1[i] === arr2[j]){
        if(i>0 && j>0){
          temp[i][j] = temp[i-1][j-1] + 1;
        }else{
          temp[i][j] = 1;
        }
        if(temp[i][j]>maxLen){
          maxLen = temp[i][j];
        }
      }else{
        temp[i][j] = 0;
      }
    }
  }
  return maxLen;
}

console.log(getLCSLength('acbcbcef', 'abcbced'))

// 最长不连续公共子串 如 "abcde" "ace" => 3
var longestCommonSubsequence = function(text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let dp = Array.from(new Array(n+1),() => new Array(m+1).fill(0));
  for(let i = 1;i <= n;i++){
      for(let j = 1;j <= m;j++){
          if(text1[i-1] == text2[j-1]){
              dp[i][j] = dp[i-1][j-1] + 1;
          }else{
              dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j]);
          }
      }
  }
  return dp[n][m];
};