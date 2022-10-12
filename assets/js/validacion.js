console.log('Soy validación')

/**
 * Asignamos la clase "active", cuando el input|textarea
 * este en focus
*/
const toggleClass = (el, clase) => el.classList.toggle(clase)

/**
 * Recorremos todos los inputs
*/
const inputs = [...document.querySelectorAll(".formcontacto__input")]
inputs.forEach( input => input.onfocus = event => {
	validar(event.target)
	toggleClass(event.target.parentElement, 'active')
})

/**
 * Buscamos el textarea
*/
const textarea = document.querySelector(".formcontacto__textarea")
textarea.onfocus = event => {
	validar(textarea)
	toggleClass(textarea.parentElement, 'active')
}

//Haz tú validación en javascript acá
const validar = input => {
   const typeofinput = input.dataset.tipo
   //
   if(!input.validity.valid) {
      input.parentElement.classList.remove('required')
      input.parentElement.querySelector(".input-message-error").innerHTML = ""
   } else {
      input.parentElement.classList.add('required')
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajedeError(typeofinput, input)
   }
}
const tipoDeErrores = [
   "valueMissing",
   "typeMismatch",
   "patternMismatch",
   "customError"
]
const mensajesDeError = {
   nombre: {
      valueMissing: 'El campo Nombre no puede estar vacio.'
   },
   email: {
      valueMissing: 'El campo Correo no puede estar vacio.',
      typeMismatch: 'El correo no es valido.'
   },
   asunto: {
      valueMissing: 'Este campo es opcional.'
   },
   mensaje: {
      valueMissing: 'Este campo Mensaje no puede estar vacio.',
      patternMismatch: 'El campo debe contener entre 14 a 250 caracteres.'
   }
}
const mostrarMensajedeError = (tipoDeInput, input) => {
   let mensaje = ""
   tipoDeErrores.forEach( error => {
      if(input.validity[error]) mensaje = mensajesDeError[tipoDeInput][error]
   })
   return mensaje
}

const enviar = document.querySelector(".formcontacto__botao")
enviar.onclick = enviar => {
	enviar.preventDefault();
	const form = document.querySelector(".formcontacto__form")
}