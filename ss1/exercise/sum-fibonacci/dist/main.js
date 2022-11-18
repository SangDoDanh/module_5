function totalFibonacci(count) {
    let first = 0;
    let second = 1;
    let total;
    let fibonacci = [];
    for (let i = 0; i < count; i++) {
        fibonacci.push(first);
        fibonacci.push(second);
        total = first + second;
        first = second;
        second = total;
    }
    console.log('fibonacci: ' + fibonacci.join(" "));
    console.log('total: ' + total);
}
totalFibonacci(10);
//# sourceMappingURL=main.js.map