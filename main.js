// UI
const form = document.getElementById('signup-form')
const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const emailInput = document.getElementById('email-address')
const passwordInput = document.getElementById('password')
const claimButton = document.getElementById('claim-btn')

const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput]

const isEmail = ({ value }) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
}

const validateForm = (event) => {
  event.preventDefault()

  let errorCount = 0

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add('input-correction')
      input.nextElementSibling.innerHTML = 'Field cannot be empty.'
      errorCount++
    } else if (input.id === 'email-address' && !isEmail(input)) {
      input.classList.add('input-correction')
      input.nextElementSibling.innerHTML =
        'Email needs to be properly formatted.'
      errorCount++
    } else {
      input.classList.remove('input-correction')
    }
  })

  if (!errorCount) {
    console.log('yay!')
  }
}

form.addEventListener('submit', validateForm)
