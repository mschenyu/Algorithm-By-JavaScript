function setQuery(url, queryObj){
  let resObj = {}
  const urlQuery = url.match(/\?(\S*)\#/) && url.match(/\?(\S*)\#/)[1] || url.split('?')[1]; // 匹配出url中query部分
  console.log(urlQuery)
  if(urlQuery){
    const arr = urlQuery.split('&');
    arr.forEach(item => {
      const temp = item.split('=');
      resObj[temp[0]] = temp[1]
    })
  }
  Object.assign(resObj, queryObj)
  const resQuery = Object.keys(resObj).map(key => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(resObj[key])}`
  }).join('&')
  if(url.indexOf('#')>-1){
    return url.replace(/\?(\S*)\#/,`?${resQuery}#`)
  }else{
    return `${url.split('?')[0]}?${resQuery}`
  }
}

const res = setQuery('https://www.baidu.com?a=1#head', {a:' 2',b:2});
console.log(res)