//Factory_Function : Example
function Factory_Function(name) {
    return {
      name: name,
      display() {
        console.log(`Hi! --, ${this.name}`)
      }
    }
  }
  
  var a = Factory_Function("suraj")
  a.display()// Hi!, suraj
  a.display=function(){
    console.log(`bye ${this.name}`)
  }
  a.display()// bye!, suraj
  
  var b = Factory_Function('Harini')
  console.log(b.display)
  //----------------------------------------------------------------------------------------------------
  // construction function : Example
  const Construction_Function=(name)=>{
    this.name=name
    this.display=()=>{
      return `Hi!, ${this.name}`;
    }
  }
  
  const sam=new Construction_Function('sam');
  console.log(sam);//Hi!, same
  
  const ebn=new Construction_Function('ben');
  console.log(ben);//Hi!, ben