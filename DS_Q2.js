//find comapre 2 array and find similer

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };
const output = { d: 10, e: 12 };

function getMatch() {
  let output = {};
  for (let Out_item in input1) {
    for (let In_item in input2) {
      if (Out_item === In_item && input1[Out_item] === input2[In_item])
        output[Out_item] = input1[Out_item];
    }
  }
  return output;
}
console.log(JSON.stringify(getMatch()));
//document.getElementById("div_result").innerHTML = JSON.stringify(getMatch());
