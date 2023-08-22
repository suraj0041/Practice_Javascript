const a = [1, 2, 4, 8, 4, 6, 9, 4, 7, 9]
console.log(a.map((x) => {
  return x;
}));

const Cmap = (x, func) => {
  let NewArray = []
  for (let i = 0; i < x.length; i++) {
    NewArray.push(func(x[i]))
  }
  return NewArray;
}

console.log(Cmap(a,(x) => {
  return x;
}));