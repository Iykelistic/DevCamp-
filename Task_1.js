//create a variable to hold an array of numbers
var arr = [1,2,3,4,5,6,7,8,9,10];
var even = 0;
    var odd = 0;
    //iterate through the array with a for loop
    for (let i = 0; i < arr.length; i++) {
        //use an if/else statement to test for a criteria
        if(i%2 == 0) {
            even += arr[i];
        }
        else {
            odd += arr[i];
        }
    }
    console.log(even);
    console.log(odd);
    
