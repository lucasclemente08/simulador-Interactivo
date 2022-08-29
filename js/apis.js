//Api de email

const btnEmail = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
   event.preventDefault();

   btnEmail.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_1ryj4hm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnEmail.value = 'Enviar';
    
      Swal.fire({
        title: 'Su email se ha enviado correctamente, pronto nos pondremos en contacto con usted... 🚀​',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff ',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../images/giphy.gif")
          right top
          no-repeat
        `
      })
    }, (err) => {
      btnEmail.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// api JsonplaceHolder



const lista= document.getElementById('lista');


const pedirUser = async() =>{
const resp = await
fetch('https://jsonplaceholder.typicode.com/users/')

const data = await resp.json()
  
data.forEach( (post) => {
  const tr =document.createElement('tr');
  tr.innerHTML=`
  <td>${post.name}</td>
  <td>${post.email}</td>
  <td>${post.username}</td>
  <td>${post.website}</td>
 <td>${post.address.city}</td>
  <td>${post.address.street}</td>
  <td>${post.address.geo.lng}</td>
  `;
  lista.appendChild(tr);

  } );

}
pedirUser()





