function calcula(){
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let operador = document.getElementById("operador").value;
    if (operador=="+"){
        let resultado = valor1+valor2
        document.getElementById("respuesta").innerHTML = resultado;
    }else if(operador=="-"){
        let resultado = valor1-valor2
        document.getElementById("respuesta").innerHTML = resultado;
    }else if(operador=="*"){
        let resultado = valor1*valor2
        document.getElementById("respuesta").innerHTML = resultado;
    }else if(operador=="/"){
        let resultado = valor1/valor2
        document.getElementById("respuesta").innerHTML = resultado;
    }else{
        document.getElementById("respuesta").innerHTML = "Introduzca un operador valido(+,-,*,/)"
    }
}