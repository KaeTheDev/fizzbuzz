function fizzbuzz() {
    var arr =[];

    for(var i = 1; i <= 100; i++) {
        if(i%3==0 && i%5==0) {
        arr.push("FizzBuzz")
        console.log("FizzBuzz")
        }
        else if(i%5==0){
            arr.push("Buzz")
            console.log("Buzz")
        }
        else if(i%3==0){
            arr.push("Fizz")
            console.log("Fizz")
        }

        else {
            arr.push(i);
            console.log(i)
        }
    }
    return arr;
}

var z = fizzbuzz();
console.log(z);