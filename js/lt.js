let i = 0;
let form = document.getElementById("form");
let tabla = document.getElementById("alumnos-check");


function mostrarLocalStorage() {
    let nomLT = localStorage.getItem(("nombre"));
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
<td>${nomLT}</td>
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
mostrarLocalStorage()