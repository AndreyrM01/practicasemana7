function factorialize(num) {
    let resultado = num 
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      resultado  = resultado * i; 
    }
    return resultado;
  }
  console.log(factorialize(5));



function fibonacciRecursivo(n){
    if (n <= 1){
        return 1;
    }
    else{
        return n * fibonacciRecursivo(n-1);
    }
}
console.log(fibonacciRecursivo(5));
