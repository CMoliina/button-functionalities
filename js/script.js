//INICIO BOTON ACCESIBILIDAD
function acs() {
    var x = document.getElementById("block-acs");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


//FUNCIONES QUE FUNCIONAN DAH

//INICIO ZOOM
function zup() { 
    var bodyweb = document.body; 
    bodyweb.classList.toggle("zoom-up"); 
}
function zdown() { 
    var bodyweb = document.body; 
    bodyweb.classList.toggle("zoom-down"); 
}

//INICIO CONTRASTE Y SATURACION
function contrast() { 
    var bodyweb = document.body; 
    bodyweb.classList.toggle("oscuro"); 
}
//FIN CONTRASTE Y SATURACION


//AUMENTO Y DISMINUCION DE TAMAÑO

const elementsList = document.getElementsByTagName('html');

function getElementFontSize(element){
  //getComputedStyle nos devuelve las propiedades css de cada párrafo(elemento)
  const elementFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
  return parseFloat(elementFontSize);  //Devolvemos el total de pixeles
}

function cambiarTexto(operador) {
   for(let element of elementsList) {
     //Obtener el total de pixel de cada párrafo.
     const currentSize = getElementFontSize(element);
     
     //Restar o sumar, dependiendo del operador.
     const newFontSize = (operador === '+' ? (currentSize + 1) : (currentSize - 1)) + 'px';
     //Aplicarle al parrafo actual el nuevo tamaño.
     element.style.fontSize = newFontSize
   }
}
//FIN AUMENTO Y DISMINUCION DE TAMAÑO
//////////////////////////////////


//LECTOR TEXTO//
function speak(obj) {
    $(obj).articulate('speak');
  };

//FIN LECTOR TEXTO//


//CAMBIO FUENTE PARA DISLEXIA

//FIN CAMBIO FUNETE PARA DISLEXIA

