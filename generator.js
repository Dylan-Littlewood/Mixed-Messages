
const test = func => {
    if(func()){
        return 'Passed';
    } else {
        return 'Failed'
    }
}

const testOne = () => {
    return true;
}

console.log('Starting Tests...');
console.log('  Test 1:', test(testOne));
