
let profesor=["Jorge","Juan","Pedro","Maria","Jose"];
//eliminar algun profesor
const deleteProf=(profesor)=>{
   let index = profesor.indexOf(profesor);

   if(index!=-1){
      profesor.slice(index,1);
   }
}


// Objetos

class estudiante {
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
   promedioParcial() {
      return (this.parcial1 + this.parcial2) / 2;
   }
  contarMaterias() {
      return this.materias;
   }
   desaprobados() {
      if (this.promedioParcial() < 6) {
         return "desaprobado";
      } else {
         return "aprobado";
      }
   }
   promocionados() {
      if (this.promedioParcial() >= 7.5) {
         return "promocionado";
      } 
   }
}










//Ventas de cursos de la universidad 
// quiero añadir un parte de ventas de cursos para poder tener un poco mas de juego con el codigo

 
(function () {
   'use strict'
 
   window.addEventListener('load', function () {
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     var forms = document.getElementsByClassName('needs-validation')
 
     // Loop over them and prevent submission
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