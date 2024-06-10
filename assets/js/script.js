//Alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('botonAlert')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert(document.getElementById('botonAlert').getAttribute('data-bs-contenido'), document.getElementById('botonAlert').getAttribute('data-bs-tipo'))
    //cambié el mensaje y el tipo de alert con document.getElementById y getAttribute detectando mis atributos data 
  })
}

//Popover

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Toast

//agregué el id que cree botonToast
const toastTrigger = document.getElementById('botonToast')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    //ocupe el document.getElementById, getAttribute y innerText para cambiar el titulo y el contenido con data-bs
    document.getElementById('titularToast').innerText = document.getElementById('botonToast').getAttribute('data-bs-titulo')
    document.getElementById('contenidoToast').innerText = document.getElementById('botonToast').getAttribute('data-bs-contenido')
  })
}

//Offcanvas
document.getElementById('botonOffcanvas').addEventListener('click', function () {
    //use querySelector para seleccionar el div con la clase .offcanvas-header y .offcanvas-body y agregue el contenido con innerText
    //para modificar el cuerpo del offcanvas
    document.querySelector('.offcanvas-title').innerText = document.getElementById('botonOffcanvas').getAttribute('data-bs-titulo');
    document.querySelector('.offcanvas-body').innerText = document.getElementById('botonOffcanvas').getAttribute('data-bs-contenido');
});

//Formulario

//alert
document.getElementById('botonForm').addEventListener('click', function(){
  let titulo = document.getElementById('title').value;
  let descripcion = document.getElementById('content').value;
   document.getElementById('botonAlert').setAttribute('data-bs-titulo', titulo);
   document.getElementById('botonAlert').setAttribute('data-bs-contenido', descripcion);


})

//popover
document.getElementById('botonForm').addEventListener('click', function(){
  let titulo = document.getElementById('title').value;
  let descripcion = document.getElementById('content').value;
  let actualizacion = document.getElementById('botonPop');

  actualizacion.setAttribute('data-bs-content', descripcion);
  //variable que inicializa el popover (se utiliza new bootstrap para crear una nueva instancia)
  //.Popover es una clase que define el comportamiento y la apariencia del popover
  const popover = new bootstrap.Popover(actualizacion);
   
})

//toast
document.getElementById('botonForm').addEventListener('click', function(){
  let titulo = document.getElementById('title').value;
  let descripcion = document.getElementById('content').value;

  document.getElementById('botonToast').setAttribute('data-bs-titulo', titulo);
  document.getElementById('botonToast').setAttribute('data-bs-contenido', descripcion);
})

//offcanvas
document.getElementById('botonForm').addEventListener('click', function(){ 
  let titulo = document.getElementById('title').value;
  let descripcion = document.getElementById('content').value;

  document.getElementById('botonOffcanvas').setAttribute('data-bs-titulo', titulo);
  document.getElementById('botonOffcanvas').setAttribute('data-bs-contenido', descripcion);
})