//Realizar un objeto que tengo 5 propiedades y tres metodos que modifiquen propiedades internas
const equipodeFut = {
  portero : 'TerStegen',
  numerodeEquipacion : 1,
  defensa : 'Araujo',
  botines : 'Adidas',
  medio : 'Pedri',
  cambios: function(){
    return 'titular ${this.portero}'
  },
  otroDefensa: function(defensa){
    this.defensa = defensa;
  },
  borrar: function(botines){
    delete this[campo]
  }
};

console.log(cambios);
console.log(auto.defensa);
auto.otroDefensa('Kounde');
console.log(auto.defensa);
equipodeFut.borrar('botines');
console.log(equipodeFut);