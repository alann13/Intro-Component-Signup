import { isEmailValid, isFormFieldEmpty } from '../../utils/general.js'

test('email validations', () => {
  expect(isEmailValid('email-address', 'ahah@example.com')).toBe(true)
  expect(isEmailValid('email-address', 'ahah.example.com')).toBe(false)
  expect(isEmailValid('bad-id', 'ahah.example.com')).toBe(false)
  expect(isEmailValid('bad-id', 'ahah@example.com')).toBe(false)
})

test('form fields', () => {
  expect(isFormFieldEmpty('')).toBe(true)
  expect(isFormFieldEmpty('lolol')).toBe(true)
})
