// Part 1: Fizz Buzz
for(let i = 1; i <= 100; i++) {
if ( i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
} else if (i % 3 === 0) {
    console.log("Fizz");

} else if (i % 5 === 0) {
    console.log("Buzz");
}else {
    console.log(i)
}

}

//Part 2: Prime Time
 function isPrime(N) {
    if (N <= 1) false; 
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) false;
    }
    return true; 
}

function NextPrime(9) {
    let nextNum =n + 1; 
    while (true) {
    if (isPrime(nextNum)) {
    console.log(nextNum); 
    break; 
}
    nextNum++; 
}
}

//Part 3: Feeling Loopy