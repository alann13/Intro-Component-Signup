// UI SELECTORS
const form = document.getElementById('signup-form')
const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const emailInput = document.getElementById('email-address')
const passwordInput = document.getElementById('password')
const claimButton = document.getElementById('claim-btn')

// UTILS
const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput]

// LOGIC
const isEmailValid = ({ id, value }) => {
  return (
    id === 'email-address' &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  )
}

const isFormFieldEmpty = ({ value }) => {
  return !value
}

const handleEmptyFormField = (inputField, errorControls) => {
  inputField.classList.add('input-correction')
  inputField.nextElementSibling.textContent = errorControls.emptyFieldMsg

  errorControls.count++
}

const handleInvalidEmail = (inputField, errorControls) => {
  inputField.classList.add('input-correction')
  inputField.nextElementSibling.textContent = errorControls.invalidEmailMsg

  errorControls.count++
}

const validateForm = (event) => {
  event.preventDefault()

  let error = {
    count: 0,
    emptyFieldMsg: 'Field cannot be empty.',
    invalidEmailMsg: 'Email needs to be properly formatted.',
  }

  inputs.forEach((input) => {
    if (isFormFieldEmpty(input)) {
      handleEmptyFormField(input, error)
    } else if (isEmailValid(input)) {
      handleInvalidEmail(input, error)
    } else {
      input.classList.remove('input-correction')
    }
  })

  if (!error.count) {
    form.reset()
  }
}

form.addEventListener('submit', validateForm)
