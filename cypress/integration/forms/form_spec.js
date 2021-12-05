describe('Form UI', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays form correctly', () => {
    cy.get('form').should('have.id', 'signup-form')
    cy.get('#signup-form fieldset').should('have.length', 4)
    cy.get('#signup-form button').invoke('attr', 'type').should('eq', 'submit')
    cy.get('#signup-form button').should('have.text', 'Claim your free trial')
    cy.get('.error-field').should('have.css', 'display', 'none')
  })
})
