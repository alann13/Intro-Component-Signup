export const isEmailValid = (inputFieldId, email) => {
  return (
    inputFieldId === 'email-address' &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  )
}

export const isFormFieldEmpty = (inputFieldValue) => {
  return !inputFieldValue
}
