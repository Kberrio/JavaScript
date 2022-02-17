function one(call_two) {
  call_two();
	console.log('Step 1 complete. Please call Step 2');
}

function two() {
	console.log('Step 2');
}

one(two);
//a callback is a function calling another function
//updates 2


