//normal function
function sum(a, b = 5) {
  return a + b;
}
const total = sum(2);
console.log(total);

//arrow function
const multi = (a, b = 5) => a * b;
const multiTotal = multi(2);
console.log(multiTotal);


//if value is not provided, then take this value [0]