//rotate the array item 2 or n places left/right

const input1 = [1, 2, 3, 4, 5];
const outputL = [3, 4, 5, 1, 2];
const outputR = [4, 5, 1, 2, 3];
const n = 2;
function rotateLeft(input, nPlace) {
  let output = [];
  if (nPlace >= input.length) nPlace = nPlace - input.length;

  output = input.splice(nPlace, input.length);
  output = [...output, ...input];
  return output;
}
function rotateRight(input, nPlace) {
  let output = [];
  if (nPlace >= input.length) nPlace = nPlace - input.length;

  output = input.splice(input.length - nPlace, input.length);
  //console.log(input);
  output = [...output, ...input];
  return output;
}
console.log(`${JSON.stringify(input1)}, ${n}`);

console.log(`<== ${JSON.stringify(rotateLeft([...input1], n))}`);
console.log(`==> ${JSON.stringify(rotateRight([...input1], n))}`);
