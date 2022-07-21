let edad = [];
let nombre = [];
let materias = [];
let parcial1 = [];
let parcial2 = [];
let profesor=["Jorge","Juan","Pedro","Maria","Jose"];





//eliminar algun profesor
const deleteProf=(profesor)=>{
   let index = profesor.indexOf(profesor);

   if(index!=-1){
      profesor.splice(index,1);
   }
}
deleteProf("Jorge"); 

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

const estudiante1 = new estudiante("Juan", 20, 5, 10, 10);
const estudiante2 = new estudiante("Pedro", 21, 6, 9, 9);
const estudiante3 = new estudiante("Juan", 20, 5, 10, 10);







function ingresoDatos() {





   for (let i = 0; i < 2; i++) {

      ed = prompt("Ingrese su edad");
      nom = prompt("Ingrese su nombre");
      mat = prompt("Ingrese el numero de materias que cursa")
      p1 = prompt("Ingrese la nota del parcial 1");
      p2 = prompt("Ingrese la nota del parcial 2")


      edad[i] = parseInt(ed);
      nombre[i] = nom;
      materias[i] = parseInt(materias);
      parcial1[i] = parseInt(p1);
      parcial2[i] = parseInt(p2);
   }
}



function verEstadisticas() {





   let cont=0;
   let promedioParcial = 0;
   let acumMaterias = 0;
   let mayor = 0;
   let nomMayor = "";

   for (let i = 0; i < edad.length; i++) {


      let ed=edad[i];
      let nom = nombre[i];
      let mat = materias[i];
      let p1=parcial1[i];
      let p2=parcial2[i];



      cont++;

      promedioParcial = (p1 + p2) / 2;
       acumMaterias = acumMaterias + mat;

      if (ed>=18) {
         mayor++;
         nomMayor=nom;
      
      }
   }

   const _p = document.querySelector("p");
   _p.innerHTML = `
      El numero de estudiantes es: ${cont};
      El numero de estudiantes mayores de edad es: ${mayor}
      El nombre del estudiante mayor de edad es: ${nomMayor}
      El promedio de notas de los parciales es: ${promedioParcial}
      El numero de materias que cursa es: ${acumMaterias}
       `;
}





ingresoDatos();
verEstadisticas()