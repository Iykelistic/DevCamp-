//create a function to hold the prime number
function primeNumber(num) {
    // Assign variables to hold empty strings
    var prime_num1 = [],
        prime_num2 = [];
    //iterate through with a for loop for numbers with certain criterias
    for(var i = 0; i <= num; i++) {
        
        prime_num2.push(true);
    }
    
    for (var i = 2; i <= num; i++) {
        if (prime_num2[i]) {
            prime_num1.push(i);
            for (var j = 1; i * j <= num; j++) {
                prime_num2[i * j] = false;
            }
        }
    }
    return prime_num1;
        
}
console.log(primeNumber(6))
console.log(primeNumber(11))
console.log(primeNumber(23))
