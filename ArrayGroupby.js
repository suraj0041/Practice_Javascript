const a = ["s","u","r","a","j","h","a","r","i","n","i"]

  let newArray = [];
  let start = 0;
  function iden(arr) {
      if (start == arr.length) return;

      if (newArray[arr[start]] == null) {
          newArray[arr[start]] = 1;
      } else
          newArray[arr[start]] = newArray[arr[start]]+1;
      
      start++;
      iden(arr)
  }

  
//using reduce
const count=(a)=>{
  return a.reduce((acc,x)=>({
    ...acc,
    [x]:acc[x]? acc[x]+1:1
  }),{});
}

iden(a);
// console.log(newArray);
console.log(count(a));