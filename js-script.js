document.addEventListener("DOMContentLoaded", function(){
    
    const imagenes =[
      "img/Dibujo.jpg",
      "img/china.jpg",
      "img/ilustración.jpg"
    
    
    ];
    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("ImagenPrincipal");
    const btnanterior = document.getElementById("btnAnterior");
    const btnsiguiente = document.getElementById("btnSiguiente");

    function mostrarImagen(indice){
      imagenPrincipal.src = imagenes[indice];
    }

    btnsiguiente.addEventListener("click", function(){
     indiceActual++;
     if(indiceActual >= imagenes.length) indiceActual = 0;
     mostrarImagen(indiceActual);
    });

    btnanterior.addEventListener("click", function(){
     indiceActual--;
     if(indiceActual < 0) indiceActual = imagenes.length -1;
     mostrarImagen(indiceActual);
    });

    mostrarImagen(indiceActual);
});

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Formulario enviado");
      })
    });
  });