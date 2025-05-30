const arg = process.argv[2]; // get the first user argument
const num = parseInt(arg); // convert the argument to an integer
if (isNaN(num)) {
  // If the conversion fails, print an error message
  console.log('Not a number');
} else {
  // If the conversion is successful, print the integer
  console.log(`My number: ${num}`);
}