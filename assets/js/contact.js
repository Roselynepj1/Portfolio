document.addEventListener('DOMContentLoaded', () => {
  //handle errors on submit
  const firstname = document.getElementById('firstname')
  firstname.onchange= () => {
    const nameError = validateLength(firstname.value.trim(), 5)
    displayError('firstname', nameError)
  }
  const lastname = document.getElementById('lastname')
  lastname.onchange= () => {
    const nameError = validateLength(lastname.value.trim(), 5)
    displayError('lastname', nameError)
  }
  const email = document.getElementById('email')
  email.onchange = () => {
    const emailError = validateEmail(email.value.trim())
    displayError('email', emailError)
  }
  const message = document.getElementById('message')
  message.onchange = () => {
    const messageError = validateLength(message.value.trim(), 15)
    displayError('message', messageError)
  }
   
  const form = document.querySelector('#form')
  form.onsubmit = (event) => {
    event.preventDefault()

    const successMessage = document.querySelector('.success')
    //validate different fields
    const firstnameError = validateLength(firstname.value.trim(), 5)
    displayError('firstname', firstnameError)
    const lastnameError = validateLength(lastname.value.trim(), 5)
    displayError('lastname', lastnameError)
    const messageError = validateLength(message.value.trim(), 15)
    displayError('message', messageError) 
    const emailError = validateEmail(email.value.trim())
    displayError('email', emailError)

    if (!emailError && !firstnameError && !lastnameError && !messageError) {
      successMessage.style.display = 'block'
      successMessage.textContent =
        'Your message has been delivered successfully'
      form.reset()
      setTimeout(() => {
        successMessage.style.display = 'none'
      }, 3500)
    }
  }

  const displayError = (inputId, message) => {
    const targetSection = document.querySelector(`#${inputId} + .error`)
    targetSection.textContent = message
  }

  const validateLength = (value, length) => {
    if (value.length <= length - 1) {
      return `Field length should be greater than ${length} characters`
    }

    return null
  }

  const validateEmail = (emailValue) => {
    if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      return 'Please provide a valid email address'
    }
    return null
  }
})
