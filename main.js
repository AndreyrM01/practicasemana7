let numeroArray = [];
for (i = 0; i < 5; i++) {
  let number = parseFloat(prompt("ingrese un numero: "));
  if(numeroArray === ""){
      alert('El valor no esta permitido')
      break;
  } else {
    numeroArray.push(parseInt(number));
  }
}

function minMax (numeroArray){
  let low = 0;
  let high = 0;
  low = numeroArray[0];
  for (let j = 0; i < numeroArray.length; j++){
    if (low > numeroArray[j]){
      low = numeroArray[j];
    };
  
    if (high < valores[j]){
      high = valores[j];
    };
  };

  console.log("El de menor valor es: " + low);
  console.log("El de mayor valor es: " + high);
};

function promedio() {
  let sum = 0;
  for (i = 0; i < numeroArray.length; i++) {
    sum += numeroArray[i];
  }

  return sum / numeroArray.length;
}

function med() {
  if (numeroArray.length % 2 === 0) {
    let med1 = Math.floor(numeroArray.length / 2);

    return ((numeroArray[med1 - 1] + numeroArray[med1]) / 2).toFixed(2);
  } else {
    let med2 = Math.floor((numeroArray.length + 1) / 2);

    return numeroArray[med2 - 1].toFixed(2);
  }
}
console.log("promedio is: " + promedio());
console.log("mediana is: " + med());