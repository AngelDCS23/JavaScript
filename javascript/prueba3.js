function abrir(){
    let ventana = open();
    ventana.document.write("Estoy escribiendo en la nueva ventana<br>");
    ventana.document.write("Segunda linea")
}

function abrirParametros(){
    let ventana = open ('','', 'width=400,heigth=250,menubar=yes');
    ventana.document.write("Esto es lo primero que aparece canio<br>");
}

function mostrarAlerta(){
    alert("Esta ventana de alerta ya la utilizamos antes en verdad");
}

function confirmar(){
    let respuesta = confirm("Presione alguno de los dos botones");
    if (respuesta == true)
        alert("Presionó aceptar, que listo eres");
    else
        alert("Presionó cancelar monstruo");
    }

function cargarCadena(){
    let cad = prompt("Indica tu nombre");
    alert("tu nombre es " + cad);
}

function saludar(){
    alert("Hola, mundo");
}