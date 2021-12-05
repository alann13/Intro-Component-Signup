export const isEmailValid = ({ id, value }) => {
  return (
    id === 'email-address' &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  )
}

export const isFormFieldEmpty = ({ value }) => {
  return !value
}
