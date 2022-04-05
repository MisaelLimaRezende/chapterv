/// <reference types= 'cypress' />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    // Arrange

    cy.login()

    cy.visit('/')
  })

  it('Cadastro de novo artigo com sucesso', () => {
    // Fluxo de criação de artigo
    // Acesso ao formulario
    articles.acessarOFormulario()

    // Preencher o formulario
    articles.preencherFormulario()

    // Submeter ao formulario
    articles.submeterFormulario()

    // Verificar se o artigo foi criado
    articles.verificarSeOArtigoFoiCriado()
  })
})
