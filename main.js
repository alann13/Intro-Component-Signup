import {
  EMPTY_FIELD_ERROR_MSG,
  INPUT_CORRECTION,
  INVALID_EMAIL_ERROR_MSG,
} from './utils/constants'
import { isEmailValid, isFormFieldEmpty } from './utils/general'
import {
  emailInput,
  firstNameInput,
  form,
  lastNameInput,
  passwordInput,
} from './utils/ui-selectors'

const handleEmptyFormField = (inputField, errorControls) => {
  inputField.classList.add(INPUT_CORRECTION)
  inputField.nextElementSibling.textContent = errorControls.emptyFieldMsg

  errorControls.count++
}

const handleInvalidEmail = (inputField, errorControls) => {
  inputField.classList.add(INPUT_CORRECTION)
  inputField.nextElementSibling.textContent = errorControls.invalidEmailMsg

  errorControls.count++
}

const validateForm = (event) => {
  event.preventDefault()

  const inputFields = [emailInput, firstNameInput, lastNameInput, passwordInput]

  let error = {
    count: 0,
    emptyFieldMsg: EMPTY_FIELD_ERROR_MSG,
    invalidEmailMsg: INVALID_EMAIL_ERROR_MSG,
  }

  inputFields.forEach((inputField) => {
    if (isFormFieldEmpty(inputField)) {
      handleEmptyFormField(inputField, error)
    } else if (isEmailValid(inputField)) {
      handleInvalidEmail(inputField, error)
    } else {
      inputField.classList.remove(INPUT_CORRECTION)
    }
  })

  if (!error.count) {
    form.reset()
  }
}

form.addEventListener('submit', validateForm)
