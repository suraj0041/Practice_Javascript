function test() {

  const input = [2, 7, 11, 4, -2]
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    debugger;
    let arr1 = input.filter(x => x != input[i]);
    newArr.push(arr1.reduce((acc, crr) => {
      return acc += crr;
    }, 0));

  }
  console.log(newArr);
};

test();