function calcular(){
    let nota_ex = document.getElementById("nota").value;
    if(nota_ex>=0 && nota_ex<5){
        alert("Usted esta suspenso")
    }else if(nota_ex <= 10){
        alert("Usted esta aprobado")
    }else{
        alert("La nota es incorrecta")
    }
}