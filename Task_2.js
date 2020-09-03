//create a function to test for prime numbers
function testPrime(n) {
    //using the if, else if, else statement for test
    if(n==1) {
        return false;
    }
    else if(n==2) {
        return true;
    }
    else {
        for(let x = 2; x < n; x++) {
            if(n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(testPrime(15));
