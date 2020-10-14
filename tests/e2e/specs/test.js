// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should show 10', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('should show 14', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '14')
  })

  it('should show -4', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should show 0.5', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should show 33232930569601', () => {
    cy.get('#number7').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('.display').should('contain', '33232930569601')
  })  

  it('should show NaN', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'NaN')
  })


})
