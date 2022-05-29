
function calculoImc() {
    let altura = parseInt(prompt("Ingrese su altura en cm. Ej: 180"))/100;
    let peso = parseInt(prompt("Ingrese su peso en kg. Ej: 70"));
    let imc = (peso/(altura*altura)).toFixed(1);

    if (imc <= 18.4) {
        alert ("Hola, su IMC es " + imc + " y su índice está por debajo del peso recomendado.");
    } else if(imc >= 18.5 && imc <= 24.9){
        alert ("Hola, su IMC es " + imc + " y su índice se encuentra en el peso recomendado.");
    } else if(imc >= 25 && imc <= 29.9){
        alert ("Hola, su IMC es " + imc + " y su índice está por encima del peso recomendado.");
    } else if(imc >= 30){
        alert ("Hola, su IMC es " + imc + " y su índice se encuentra muy por encima del peso recomendado, denominandose obesidad.");
    }else if(isNaN(imc)){
        alert ("Por favor completa todos los campos de forma correcta.");
    }
}
calculoImc()


