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

const cursos =[
   {id:1,  producto: "JavaScript",precio:10000},
   {id:2,  producto: "HTML",precio:20000},
   {id:3,  producto: "CSS",precio:30000},
   {id:4,  producto: "PHP",precio:40000},
   {id:5,  producto: "Python",precio:50000},
   {id:6,  producto: "C#",precio:90000},
   {id:7,  producto: "C++",precio:70000},
]

const listaProductos = cursos.map(function(e){
return `[${e.producto};${e.precio};${e.id}]`;
})

document.write(listaProductos)

const cardCursos = document.getElementsByClassName("card") 
cardCursos.innerHTML = `lista de productos: ${listaProductos}`;	