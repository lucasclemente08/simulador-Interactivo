let i = 0;
let form = document.getElementById("form");
let tabla = document.getElementById("alumnos-check");

function ingresoDatos() {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document
            .getElementById("nombre")
            .value;
        const ed = document
            .getElementById("edad")
            .value;
        const eml = document
            .getElementById("email")
            .value;
        const ps = document
            .getElementById("pais")
            .value;
        const zp = document
            .getElementById("zip")
            .value;
        const usme = document
            .getElementById("username")
            .value
        const dir = document
            .getElementById("direccion")
            .value
        const mat = document
            .getElementById("materias")
            .value
        const p1 = document
            .getElementById("parcial1")
            .value;
        const p2 = document
            .getElementById("parcial2")
            .value;

        // añadirAlumno()

    });

}
// enviar al local storage

form.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1000
      })                        
    const nombre = document
        .getElementById("nombre")
        .value;
    const ed = document
        .getElementById("edad")
        .value;
    const eml = document
        .getElementById("email")
        .value;
    const ps = document
        .getElementById("pais")
        .value;
    const zp = document
        .getElementById("zip")
        .value;
    const usme = document
        .getElementById("username")
        .value
    const dir = document
        .getElementById("direccion")
        .value
    const mat = document
        .getElementById("materias")
        .value
    const p1 = document
        .getElementById("parcial1")
        .value;
    const p2 = document
        .getElementById("parcial2")
        .value;

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
    function añadirAlumno() {
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
    }

    function mostrarLocalStorage() {
        let nombre = localStorage.getItem("nombre");
        let edad = localStorage.getItem("edad");
        let email = localStorage.getItem("email");
        let pais = localStorage.getItem("pais");
        let zip = localStorage.getItem("zip");
        let username = localStorage.getItem("username");
        let direccion = localStorage.getItem("direccion");
        let materias = localStorage.getItem("materias");
        let parcial1 = localStorage.getItem("parcial1");
        let parcial2 = localStorage.getItem("parcial2");

        let promedioParcial = (
            parseInt(parcial1) + parseInt(parcial2) + parseInt(materias)
        ) / 3;
        
        let container = document.createElement("tr");
        container.innerHTML = `
    <td>${nombre}</td>
    <td>${edad}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${pais}</td>
    <td>${direccion}</td>
    <td>${parseInt(
            promedioParcial
        )}</td>
    `
        tabla.appendChild(container);
    }

    añadirAlumno();
    mostrarLocalStorage();

});

function verEstadisticas() {
    let cont = 0;
    let promedioParcial = 0;
    let acumMaterias = 0;
    let mayor = 0;
    let nomMayor = "";

    for (let i = 0; i < edad.length; i++) {

        let ed = edad[i];
        let nom = nombre[i];
        let mat = materias[i];
        let p1 = parcial1[i];
        let p2 = parcial2[i];

        cont++;

        promedioParcial = (p1 + p2) / 2;
        acumMaterias += mat;

        if (ed >= 18) {
            mayor++;
            nomMayor = nom;
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


