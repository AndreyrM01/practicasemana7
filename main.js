//1
let j = prompt("Ingrese un numero: ");
    if (j % 2 === 0) {
        console.log("par");
    }  else if(j % 2 === 1){
        console.log("impar")
    }

    if(j % 3 ===0) {
        console.log("divisible entre tres");
    } else if ( j % 5 === 0 ) {
        console.log("divisible entre cinco");
    }
    console.log(j);

    // ejercicio 2
     let entrada = prompt('Ingrese un numero: ');
      let suma = 0;
        for (let i = 1; i <= entrada; i++) {
          suma = suma + i;
      }
console.log(suma)

    //3
    while(true){
      function reverseString(str) {
          let nuevoString = "";
          for (let i = str.length - 1; i >= 0; i--) {
              newString += str[i];
          }
          return nuevoString;
      }
        break;
      }
      const string = prompt('Ingrese un string: ');
      const result = reverseString(string);
      console.log(result);


      // ejercicio 4
      let quejodidoejercicio = {
        a: 'i', e: 'i', i:'i', o: 'i', u: 'i',
        A: 'I', E: 'I', I:'I', O: 'I', U: 'I'
      }
      
      let cambiaForma = (string) => {
        return string.replace(/[aeiou]/gi, match => quejodidoejercicio[match])
      }
      console.log(cambiaForma('tic tac'));
    //ejercio 5
      function orden_alfabeto(str){
       return str.slit('').sort().join('');
    }
    console.log(orden_alfabeto("perro"));