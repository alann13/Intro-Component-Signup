import { isEmailValid, isFormFieldEmpty } from '../../utils/general.js'

test('email validations', () => {
  expect(isEmailValid('ahah@example.com')).toBe(true)
  expect(isEmailValid('ahah.example.com')).toBe(false)
})

test('form fields', () => {
  expect(isFormFieldEmpty('')).toBe(true)
  expect(isFormFieldEmpty('lolol')).toBe(false)
})
