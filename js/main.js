// Objetos

class Estudiante {
   constructor(nombre, edad, materias, parcial1, parcial2) {
      this.nombre = nombre.toUpperCase();
      this.edad = parseInt(edad);
      this.materias = parseInt(materias);
      this.parcial1 =  parseInt(parcial1);
      this.parcial2 =  parseInt(parcial2);
   }
   mostrar() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Materias: ${this.materias}`);
      console.log(`Parcial 1: ${this.parcial1}`);
      console.log(`Parcial 2: ${this.parcial2}`);
   }
}


//  validacion de llenado de formulario correctamente 
(function () {
   'use strict'
 
   window.addEventListener('load', function () {
 
     var forms = document.getElementsByClassName('needs-validation')
 
    
     Array.prototype.filter.call(forms, function (form) {
       form.addEventListener('submit', function (event) {
         if (form.checkValidity() === false) {
           event.preventDefault()
           event.stopPropagation()
         }
         form.classList.add('was-validated')
       }, false)
     })
   }, false)
 }())

 //Fechas
 var DateTime = luxon.DateTime;


const now = DateTime.now().toLocaleString()

function fechas(){
    let fecha = document.getElementById("fecha");
    let dia=document.createElement("ul");
    dia.innerHTML =`<p class="dia">Hoy es ${now} ✨</p>​`;
    
    fecha.appendChild(dia)
}
fechas();

