//find second largest number
//Sorting
//sort((a, b) => b - a) - Desending
//sort((a, b) => a - b) - Asecending

const input1 = [1, 3, 3, 5, 8, 3];
const output = 5;
function secondlargest(input1) {
  let output = [];
  // with set
  let arr1 = [...new Set(input1)].sort((a, b) => a - b);
  output = arr1[arr1.length - 2];

  // without set
  let arr = input1.sort((a, b) => a - b);
  let b = arr.reduce((acc, crr) => {
    if (!acc.includes(crr)) {
      acc.push(crr);
    }
    return acc;
  }, []);
  output = b[b.length - 2];
  return output;
}
console.log(JSON.stringify(secondlargest(input1)));
