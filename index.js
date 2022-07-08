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
    }
    resultado.innerHTML = `Debe completar todos los campos`;
})


// contenedor.innerHTML = `<form name="calc">
// <input type="Text" name="operando1" value="0" size="12">
// <br>
// <input type="Text" name="operando2" value="0" size="12">
// <br>
// <input type="Button" name="" value=" + " onclick="calcula('+')">
// <input type="Button" name="" value=" - " onclick="calcula('-')">
// <input type="Button" name="" value=" X " onclick="calcula('*')">
// <input type="Button" name="" value=" / " onclick="calcula('/')">
// <br>
// <input type="Text" name="resultado" value="0" size="12">`;

// document.addEventListener("load",function(e){
//     e = document.body.appendChild(input1);

// });