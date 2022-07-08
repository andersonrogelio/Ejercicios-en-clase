var contenedor = document.getElementById("calculadora");
// contenedor.style.display="flexbox"
// contenedor.style.flexDirection ="column";
var input1 = document.createElement("input");
input1.type = "text";
input1.id = "numero1";
contenedor.appendChild(input1);
// contenedor.appendChild.innerHTML="<br></br>";

var input2 = document.createElement("input");
input2.type = "text";
input2.id = "numero2";
contenedor.appendChild(input2);

var botonSuma = document.createElement("button");
botonSuma.value = "Calcular";
botonSuma.id = "numero2";
botonSuma.innerHTML = "+";
contenedor.appendChild(botonSuma);

var botonResta = document.createElement("button");
botonResta.value = "Calcular";
botonResta.id = "numero2";
botonResta.innerHTML = "-";
contenedor.appendChild(botonResta);

var botonMultiplicacion = document.createElement("button");
botonMultiplicacion.value = "Calcular";
botonMultiplicacion.id = "numero2";
botonMultiplicacion.innerHTML = "x";
contenedor.appendChild(botonMultiplicacion);

var botonDivision = document.createElement("button");
botonDivision.value = "Calcular";
botonDivision.id = "numero2";
botonDivision.innerHTML = "/";
contenedor.appendChild(botonDivision);

var resultado = document.createElement("p");
contenedor.appendChild(resultado);

botonSuma.addEventListener("click",function(){
    let suma;
    if (input1.value != "" && input2.value != "") {
        suma = parseInt(input1.value);
        suma = suma + parseInt(input2.value);
        resultado.innerHTML = `El resultado es: `+ suma;
    }else{
        resultado.innerHTML = `Debe completar todos los campos`;

    }
});

botonResta.addEventListener("click",function(){
    let resta;
    if (input1.value != "" && input2.value != "") {
        resta = parseInt(input1.value);
        resta = resta - parseInt(input2.value);
        resultado.innerHTML = `El resultado es: `+ resta;
    }else{
        resultado.innerHTML = `Debe completar todos los campos`;

    }
});

botonMultiplicacion.addEventListener("click",function(){
    let multiplicacion;
    if (input1.value != "" && input2.value != "") {
        multiplicacion = parseInt(input1.value);
        multiplicacion = multiplicacion * parseInt(input2.value);
        resultado.innerHTML = `El resultado es: `+ multiplicacion;
    }else{
        resultado.innerHTML = `Debe completar todos los campos`;

    }
});

botonDivision.addEventListener("click",function(){
    let division;
    if (input1.value != "" && input2.value != "") {
        division = parseInt(input1.value);
        division = division / parseInt(input2.value);
        resultado.innerHTML = `El resultado es: `+ division;
    }else{
        resultado.innerHTML = `Debe completar todos los campos`;

    }
});



// document.addEventListener("load",function(e){
//     e = document.body.appendChild(input1);
// });