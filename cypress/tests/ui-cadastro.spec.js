/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({

      // https://api.realworld.io/api/users

      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 200,
      fixture: 'cadastro-com-sucesso'

    }).as('postUsers')

    cy.visit('register')

    // Nome do Usuario !!
    cy.get('input[placeholder=Username]').type('Mateos')

    // Email do usuario
    cy.get('input[placeholder=Email]').type('Mateos@gmail.com')

    // Senha do Usuario
    cy.get('input[placeholder=Password]').type('123463')

    // Clicar no botão
    cy.get('button.btn-primary').click()

    // Arcessão
    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuario ja existente', () => {

    cy.intercept({

      // https://api.realworld.io/api/users

      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 422,
      fixture: 'cadastro-usuario-existente'

    }).as('postUsers')

    cy.visit('register')

    // Nome do Usuario !!
    cy.get('input[placeholder=Username]').type('Mateos')

    // Email do usuario
    cy.get('input[placeholder=Email]').type('Mateos@gmail.com')

    // Senha do Usuario
    cy.get('input[placeholder=Password]').type('123463')

    // Clicar no botão
    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('Cadastro email ja existente', () => {
      
    cy.intercept({

      // https://api.realworld.io/api/users

      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 422,
      fixture: 'cadastro-email-existente'

    }).as('postUsers')

    cy.visit('register')

    // Nome do Usuario !!
    cy.get('input[placeholder=Username]').type('Mateos')

    // Email do usuario
    cy.get('input[placeholder=Email]').type('Mateos@gmail.com')

    // Senha do Usuario
    cy.get('input[placeholder=Password]').type('123463')

    // Clicar no botão
    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
