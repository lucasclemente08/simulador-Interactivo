




let cContainer = document.getElementById("card-container");

const cursos =[
    {id:1,  producto: "JavaScript",precio:10000,images:"../images/img1.png"},
    {id:2,  producto: "HTML",precio:20000, images:"../images/img2.png"},
    {id:3,  producto: "CSS",precio:30000   ,images:"../images/img3.png"},
    {id:4,  producto: "PHP",precio:40000,images:"../images/img4.png"},
    {id:5,  producto: "Python",precio:50000,images:"../images/img5.png"},
    {id:6,  producto: "C#",precio:90000,images:"../images/img7.png"},
    {id:7,  producto: "C++",precio:70000,images:"../images/c.png"},
 ]
//crear cards de cursos
let carrito = [];
for (const curso of cursos) {

    let contenedor = document.createElement('div');
    contenedor.innerHTML = `
           <div class="card " id="lista-carrito" >
      <div class="title" <h3>: ${curso
        .producto}<h3>
     <p>Precio: ${curso
        .precio}</p></div>
      <div class="img"> <img src="${curso
        .images}" height="40px" alt="imagen"></div>
     
      <div class="btn">
      <button id="button${curso.id}" class="btn btn-primary" ">Agregar al carrito</button>
      
      </div>;
     </div>
        `
        cContainer
        .appendChild(contenedor);

 const boton = document.getElementById(`button${curso.id}`)

 boton.addEventListener('click',()=>{
    agregarAlCarrito(curso.id);
 })


}




const agregarAlCarrito = (id) => {
    const item =cursos.find(producto => producto.id === id);
    carrito.push(item);
    console.log(carrito)
}










// let cart = [];

// class Cart {

//     comprarCurso(e) {
//         e.preventDefault();
//         if (e.target.classList.contains('agregar-carrito')) {
//             const producto = e.target.parentElement.parentElement;
//             this.leerDatos(producto);
//         };
       
//     }


//     leerDatos() {
//        const infoProducto={
//               producto: producto.querySelector('h3').textContent,
//                 precio: producto.querySelector('p').textContent,
//                images: producto.querySelector('img').src,
//                cantidad: 1,
//                id:producto.querySelector('input').getAttribute('data-id')
//        }
//         this.insertarCarrito(infoProducto);
//     }

//     insertarCarrito(cursos) {
//         const carrito = document.getElementById('carrito');
        
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//             <td>${infoProducto.producto}</td>
//             <td>${infoProducto.precio}</td>
//             <td>${infoProducto.cantidad}</td>
//             <td>${infoProducto.total}</td>
//             <td>${infoProducto.id}</td>
//             <td><a href="#" class="btn btn-danger">X</a></td>
//             `;
//                 carrito.appendChild(row);   
//                 this.guardarDatosLocalStorage(producto);
//     }
 
    
//     guardarDatosLocalStorage() {

//         let productos ; 
//         producto=this.obtenerProductosLocalStorage()
//         productos.push(producto);
//         localStorage.setItem('productos', JSON.stringify(productos));
//        }

//     obtenerProductosLocalStorage() {
//         let productos;
//         if (localStorage.getItem('productos') === null) {
//             productosLS = [];
//         } else {
//             productosLS = JSON.parse(localStorage.getItem('productos'));
//         }
//         return productosLS;
//     }

// }
