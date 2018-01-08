## Install

`$ npm install ergoProxy`

## for what
 
  ### ergoProxy is a way for change a function's callBack in different place
  
## how to use 
 
`new ergoProxy (functionName)`

## api 
| key   | Description                                | Default |
|-------|----------------------------|-------------------|
|callBacks | return target Function's callBack List,you can use all the javascript api to rewrite this list for change the callBack functions |  [] |
---------------------------------------------------------
 
## example
```
let a = (ele, callback) => {
  setTimeout(
    ()=>{
      console.log(ele)
      callback&&callback()
    },
    2000
  )
}
let b = new ergoProxy(a);

b(0);
b.callBacks.push(
  ()=> console.log(`new callback1`),
)
b.callBacks.push(
  ()=> console.log(`new callback2`),
)

 // 0 new callback1 new callback2
--------------------------------------------------
b(0) 
b.callBacks.splice(0,1)

 // 0 new callback2

```