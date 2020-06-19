function calcula (valor1,valor2,operador) {

    var valor1 = parseInt(prompt("Introduce el primer valor"));
    var valor2 = parseInt(prompt("Introduce el segundo valor"));
    var opcion = prompt("Elije opción de calculadora \n 1. Suma \n 2.Resta \n 3.Multiplicación \n 4.División");
    var operador = 0;
      if (opcion == 1) {
        operador =  valor1 + valor2;
        alert("El valor de la suma es: "+operador);
      }else if (opcion == 2){
        operador =  valor1 - valor2;
        alert("El valor de la resta es: "+operador);
      }else if (opcion == 3){
        operador =  valor1 * valor2;
        alert("El valor de la multiplicación es: "+operador);
      }else if (opcion == 4){
        operador =  valor1 / valor2;
        alert("El valor de la división es: "+operador);
      }else { alert("La opción introducida es errónea")
      }
  }
  calcula();
