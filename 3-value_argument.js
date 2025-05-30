const arg = process.argv[2]; // get the first user argument 
if (arg === undefined) {
  // No argument passed
  console.log('No argument');
} else {
  // Print the first argument
  console.log(arg);
}