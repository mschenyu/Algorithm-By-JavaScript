/**
 * 主要有四步：
 * 1. new xhr对象
 * 2. open 初始化一个请求
 * 3. 监听stateChange事件（onreadystatechange）
 * 4. send 发送请求
 */

 /**
  * readyState状态：
  * 0	UNSENT	代理被创建，但尚未调用 open() 方法。
  * 1	OPENED	open() 方法已经被调用。
  * 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
  * 3	LOADING	下载中； responseText 属性已经包含部分数据。
  * 4	DONE	下载操作已完成。
  */
const getJsonByUrl = function(url){
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function(){
      if(xhr.readyState !== 4) return;
      if(xhr.status === 200 || xhr.status === 304){
        resolve(xhr.responseText)
      }else{
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send();
  })
  
}