/**
 * leetcode 5: 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 输入: "babad" 输出: "bab" / 'aba'
 */

/**
 * 动态规划：
 * 1.状态定义：dp[i][j]表示s[i...j]是否是一个回文子串
 * 2.状态转移方程：dp[i][j] = s[i]==s[j] && dp[i+1][j-1]
 * 3.初始值：当j-1 - (i+1) < 2时，也就是子串只有1个或0个值，这时只需判断s[i]是否等于s[j]
 * 注意：由于是子串，所以要求j>i，所以只需要填表格的右上方; 填表的顺序（循环的顺序）很重要，因为要依赖左下方表格的值，所以对于i应该是从下到上开始填，或者对于j，应该是从左到右开始填；
 * 定义一张表，开一个循环填表就完事了
 */

var longestPalindrome = function(s) {
  // 特判
  let len = s.length;
  if(len < 2) return s;

  let maxLen = 1, begin = 0;
  let dp = Array.from({length: len}, () => new Array(len).fill(true));

  for(let j=1; j<len; j++){
      for(let i=0; i<j; i++){
          if(s[i]!=s[j]){
              dp[i][j] = false;
          }else{
              if(j-i<3){
                  dp[i][j] = true
              }else{
                  dp[i][j] = dp[i+1][j-1];
              }
          }

      // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
          if (dp[i][j] && j - i + 1 > maxLen) {
              maxLen = j - i + 1;
              begin = i;
          }
      }
  }
  return s.substr(begin, maxLen)
};