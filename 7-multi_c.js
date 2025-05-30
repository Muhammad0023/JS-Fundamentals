const x = parseInt(process.argv[2]); // get the first user argument
if (isNaN(x)) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < x; i++) {
        console.log('C is fun');
    }
}