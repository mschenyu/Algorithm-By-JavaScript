function sleep(time){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

async function main(){
  console.log(1)
  await sleep(3000)
  console.log(2) // 相当于在then里调用
}

main()
