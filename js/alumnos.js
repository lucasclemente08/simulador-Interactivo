let i = 0;
var form = document.getElementById("form");

function ingresoDatos() {    
    form.addEventListener("submit", function(e) {
       e.preventDefault();
    
       const nombre = document.getElementById("nombre").value;
       const ed = document.getElementById("edad").value;
       const eml = document.getElementById("email").value;
         const ps = document.getElementById("pais").value;
         const zp = document.getElementById("zip").value;
         const usme = document.getElementById("username").value
         const dir = document.getElementById("direccion").value
       const mat = document.getElementById("materias").value
       const p1 = document.getElementById("parcial1").value;
      const p2 = document.getElementById("parcial2").value;
    

  // añadirAlumno()
    
  });
  
 
}
// enviar al local storage

    
form.addEventListener("submit", (e)=> {
   e.preventDefault();

   const nombre = document.getElementById("nombre").value;
   const ed = document.getElementById("edad").value;
   const eml = document.getElementById("email").value;
     const ps = document.getElementById("pais").value;
     const zp = document.getElementById("zip").value;
     const usme = document.getElementById("username").value
     const dir = document.getElementById("direccion").value
   const mat = document.getElementById("materias").value
   const p1 = document.getElementById("parcial1").value;
  const p2 = document.getElementById("parcial2").value;

  //obtener valores de los inputs
nombre.value;
ed.value;
eml.value;
ps.value;
zp.value;
usme.value;
dir.value;
mat.value;
p1.value;
p2.value;

//localStorage
localStorage.setItem("nombre", nombre); 
localStorage.setItem("edad", ed);
localStorage.setItem("email", eml);
localStorage.setItem("pais", ps);
localStorage.setItem("zip", zp);
localStorage.setItem("username", usme);
localStorage.setItem("direccion", dir);
localStorage.setItem("materias", mat);
localStorage.setItem("parcial1", p1);
localStorage.setItem("parcial2", p2);



// añadirAlumno()

});







// function verEstadisticas() {
//     let cont=0;
//     let promedioParcial = 0;
//     let acumMaterias = 0;
//     let mayor = 0;
//     let nomMayor = "";
 
//     for (let i = 0; i < edad.length; i++) {
 
 
//        let ed=edad[i];
//        let nom = nombre[i];
//        let mat = materias[i];
//        let p1=parcial1[i];
//        let p2=parcial2[i];
 
 
 
//        cont++;
 
//        promedioParcial = (p1 + p2) / 2;
//         acumMaterias = acumMaterias + mat;
 
//        if (ed>=18) {
//           mayor++;
//           nomMayor=nom;
       
//        }
//     }
 
//     const _p = document.querySelector("p");
//     _p.innerHTML = `
//        El numero de estudiantes es: ${cont};
//        El numero de estudiantes mayores de edad es: ${mayor}
//        El nombre del estudiante mayor de edad es: ${nomMayor}
//        El promedio de notas de los parciales es: ${promedioParcial}
//        El numero de materias que cursa es: ${acumMaterias}
//         `;
//  }

 


// verEstadisticas()