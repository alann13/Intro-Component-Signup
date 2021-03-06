export const isEmailValid = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

export const isFormFieldEmpty = (inputFieldValue) => {
  return !inputFieldValue
}
