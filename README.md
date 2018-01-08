## Install

`$ npm install ergoProxy`

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
let b = new ergoProxy(a)
b.callBacks.push(
  [
    ()=> console.log(`new callback`),
    ()=> console.log(`new callback1`),
    ()=> console.log(`new callback2`)
  ]
)

b(0)  // 0 new callback new callback1 new callback2
--------------------------------------------------------
let c = new ergoProxy(a)

c.callBacks.push(
    ()=> console.log(`new callback c`),
)

b(0)  // 0 new callbackc

```