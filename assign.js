// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3  3  3 = 27
// pow(1, 100) = 1  1  ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

function pow(x,n){
    let result =x;
    for(i=1;i<n; i++){
        result *= x;
    }
    return result;
}

let x =prompt("input value for x",);
let n = prompt("input value for n");

if (n < 1){
    alert (`power ${n} is not supported`)
}
else{
    alert(`answer is ${pow(x,n)}`)
}