
function totalFibonacci(count: number) {
    let first = 0;
    let second = 1;
    let total;
    let fibonacci :Array<number> = [];
    for(let i = 0; i < count; i++){
        fibonacci.push(first);
        fibonacci.push(second);
        total = first + second;
        first = second;
        second = total;
    }
    console.log('fibonacci: '+ fibonacci.join(" "));
    console.log('total: ' + total);
    return total;
}

totalFibonacci(10);
