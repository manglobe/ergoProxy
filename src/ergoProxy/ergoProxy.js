class ergoProxy {
  constructor(func) {
    this.callBacks = [];
    let callBackList= this.callBacks;
    let ParameterList = func.toString().match(/\((.*?)\)/)[1].split(',');
    let paramL = ParameterList.length;
    let midArgs = Array(paramL);
    let proxys = {
      apply: (target, ctx, args) => {
        for (let i = 0; i < args.length; i++) {
          midArgs[i] = args[i];
        }
        midArgs[paramL - 1] = () => {
          for (let i = 0; i < callBackList.length; i++) {
            callBackList[i]();
          }
        };
        target.apply({}, midArgs);
      }
    };
  
    let p = new Proxy(func, proxys);
    p.callBacks=this.callBacks
    return p;
  }
}
export default ergoProxy;
