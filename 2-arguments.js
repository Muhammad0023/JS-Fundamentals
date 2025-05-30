// Get the number of arguments passed by the user
const argsCount = process.argv.length - 2; // Subtract 2 for 'node' and script name

// Check the number of arguments and print the correct message
if (argsCount === 0) {
  // No arguments passed
  console.log('No argument');
} else if (argsCount === 1) {
  // One argument passed
  console.log('Argument found');
} else {
  // More than one argument passed
  console.log('Arguments found');
}