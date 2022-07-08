// Capturo el elemento padre
var contenedor = document.getElementById("calculadora");
//creo y agrego un parrafo
var p1 = document.createElement("p");
p1.innerHTML = `Ingrese el primer número:`;
// inserto en el elemento padre 
contenedor.appendChild(p1);

//creo y agrego un input
var input1 = document.createElement("input");
input1.type = "text";
input1.id = "numero1";
// inserto en el elemento padre 
contenedor.appendChild(input1);

//creo y agrego un parrafo
var p2 = document.createElement("p");
p2.innerHTML = `Ingrese el segundo número:`;
// inserto en el elemento padre 
contenedor.appendChild(p2);
//creo y agrego un input
var input2 = document.createElement("input");
input2.type = "text";
input2.id = "numero2";
// inserto en el elemento padre 
contenedor.appendChild(input2);

//creo y agrego un boton
var botonSuma = document.createElement("button");
botonSuma.value = "Calcular";
botonSuma.id = "numero2";
botonSuma.innerHTML = "+";
// inserto en el elemento padre 
contenedor.appendChild(botonSuma);

//creo y agrego un boton
var botonResta = document.createElement("button");
botonResta.value = "Calcular";
botonResta.id = "numero2";
botonResta.innerHTML = "-";
// inserto en el elemento padre 
contenedor.appendChild(botonResta);

//creo y agrego un boton
var botonMultiplicacion = document.createElement("button");
botonMultiplicacion.value = "Calcular";
botonMultiplicacion.id = "numero2";
botonMultiplicacion.innerHTML = "x";
// inserto en el elemento padre 
contenedor.appendChild(botonMultiplicacion);

//creo y agrego un boton
var botonDivision = document.createElement("button");
botonDivision.value = "Calcular";
botonDivision.id = "numero2";
botonDivision.innerHTML = "/";
// inserto en el elemento padre 
contenedor.appendChild(botonDivision);

//creo y agrego un parrafo
var resultado = document.createElement("p");
// inserto en el elemento padre 
contenedor.appendChild(resultado);
// Creo los eventos de click de cada boton que en funcion de si los campos tienen un dato ingresado nos realizara la operacion 
botonSuma.addEventListener("click",function(){
    let suma;
    if (input1.value != "" && input2.value != "") {
        suma = parseInt(input1.value);
        suma = suma + parseInt(input2.value);
        resultado.innerHTML = `El resultado es: `+ suma;
        input1.value = "";
        input2.value = "";
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
        input1.value = "";
        input2.value = "";
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
        input1.value = "";
        input2.value = "";
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
        input1.value = "";
        input2.value = "";
    }else{
        resultado.innerHTML = `Debe completar todos los campos`;

    }
});



// document.addEventListener("load",function(e){
//     e = document.body.appendChild(input1);
// });