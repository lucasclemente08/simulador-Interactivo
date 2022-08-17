let cContainer = document.getElementById("card-container");
let cartCheck = document.getElementById("card-check");
let btnDelete = document.getElementById("delete");
let imgCart = document.getElementById("img-cartCheck");
let btnVaciar = document.getElementById("empty-cart");
const cursos = [
    {
        id: 1,
        producto: "JavaScript",
        precio: 10000,
        images: "../images/img1.png"
    }, {
        id: 2,
        producto: "HTML",
        precio: 20000,
        images: "../images/img2.png"
    }, {
        id: 3,
        producto: "CSS",
        precio: 30000,
        images: "../images/img3.png"
    }, {
        id: 4,
        producto: "PHP",
        precio: 40000,
        images: "../images/img4.png"
    }, {
        id: 5,
        producto: "Python",
        precio: 50000,
        images: "../images/img5.png"
    }, {
        id: 6,
        producto: "C#",
        precio: 90000,
        images: "../images/img7.png"
    }, {
        id: 7,
        producto: "C++",
        precio: 70000,
        images: "../images/c.png"
    }
]
//crear cards de cursos
let carrito = [];
for (const curso of cursos) {

    let contenedor = document.createElement('div');
    contenedor.innerHTML = `
           <div class="card " id="lista-carrito" >
      <div class="title" <h3> ${curso.producto}<h3>
     <p class="card-text">Precio: ${curso.precio} $</p>
     </div>
      <div class="img"> <img src="${curso.images}" height="40px" alt="imagen">
      </div>
      <div class="btn">
      <button id="button${curso.id}" class="btn btn-primary" ">Agregar al carrito</button>
      </div>
     </div>
        `
        cContainer.appendChild(contenedor);

    const boton = document.getElementById(`button${curso.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(curso.id);
        agregarAlLocalStorage(carrito);
        mostrarEnTabla();
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1000
      })
    })


    const agregarAlCarrito = (id) => {
        const item = cursos.find(producto => producto.id === id);
        carrito.push(item);

    }

}

const agregarAlLocalStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarEnCarritoJSON() {
    return JSON.parse(localStorage.getItem('carrito'));
}

function mostrarEnTabla() {
    cartCheck.innerHTML="";
    for (i = 0; i < carrito.length; i++) {
        let contador = 0;
        let container = document.createElement('tr');
        container.innerHTML = `
      
   <td> ${carrito[i].producto}</td>
   <td>1</td>
   <td>${carrito[i].precio} $</td>
   
   <td><img src="${carrito[i].images}" data-set="${carrito[i].id}"  id="img-cartCheck"height="40px" alt="imagen"></td>
   <td><a id="delete" class="btn btn-danger">X</a> </td>
 
   `

        contador += carrito[i].precio;



        cartCheck.appendChild(container);

        btnVaciar.addEventListener('click', () => {
            container.remove();
             localStorage.clear();
             Swal.fire({
                title: '¿Está seguro?',
                text: "¡No sera capaz de revertirlo más tarde!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, ¡Eliminarlo!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Eliminado!',
                    'Se elimino correctamente',
                    'success'
                  )
                }
              })
         });
    };

    

}
let subTotal = document.getElementById("sub-total");
let sTotal = document.getElementById('sTotal');

// function calcularTotal() {

// }
// function eliminarProduto() {
    
//}

//FECHAS Y 

var DateTime = luxon.DateTime;


const now = DateTime.now().toLocaleString()

 console.log(now);
function fechas(){
    let fecha = document.getElementById("fecha");
    let dia=document.createElement("p");
    dia.innerHTML =`Hoy es ${now} ✨​`;
    
    fecha.appendChild(dia)
}
fechas();