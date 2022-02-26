var x;
x = 1;

function setup() {
  console.log(`The value of x is ${x}`); //undefined
  var x = 100;
  console.log(`The value of x is ${x}`); //100
}
setup();
console.log(`The value of x outside of the function is ${x}`); //1

x = 5; 

console.log(`The value of x outside of the function is ${x}`);//5
