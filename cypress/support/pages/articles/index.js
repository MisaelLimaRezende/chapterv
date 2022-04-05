const el = require('./elements').ELEMENTS

// Preencher o formulario

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)

    cy.get(el.inputDescription).type('Descriçao do artigo de testes')

    cy.get(el.inputBody).type('Corpo do texto que esta sendo criado')

    cy.get(el.inputTagField).type('Cypress')
  }

  submeterFormulario () {
    // Submeter ao formulario

    cy.get(el.buttonButton).click()
  }

  verificarSeOArtigoFoiCriado () {
    // Verificar se o artigo foi criado

    cy.contains(articleName, { timeout: 40000 }).should('be.visible')

    cy.get('h1').should('have.text', articleName)
  }
}
export default new Articles()
