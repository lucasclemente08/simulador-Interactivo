let edad = [];
let nombre = [];
let materias = [];
let parcial1 = [];
let parcial2 = [];
let profesor=["Jorge","Juan","Pedro","Maria","Jose"];
let i = 0;


//eliminar algun profesor
const deleteProf=(profesor)=>{
   let index = profesor.indexOf(profesor);

   if(index!=-1){
      profesor.slice(index,1);
   }
}
  console.log;

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






function ingresoDatos() {

     const nom = document.getElementById("nombre");
       const ed = document.getElementById("edad");
       const mat = document.getElementById("materias");
       const p1 = document.getElementById("parcial1");
      const p2 = document.getElementById("parcial2");


      edad[i] = ed.value;
      nombre[i]= nom.value;
      materias[i] = parseInt(mat.value);
      parcial1[i]= parseInt(p1.value); 
     parcial2[i]=  parseInt(p2.value);
      i++;
       
      ed.value="";
      nom.value="";
      mat.value="";
      p1.value="";
      p2.value="";

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





// ingresoDatos();
// verEstadisticas()


//Ventas de cursos de la universidad 
// quiero añadir un parte de ventas de cursos para poder tener un poco mas de juego con el codigo

const iva= 0.21;


class alumnos {
   constructor(nombre, curso, precio) {
      this.nombre = nombre.toUpperCase();
      this.curso = curso.toUpperCase();
      this.precio = parseInt(precio);
   }

   iva() {
      return this.precio * iva;

   }
  
}



