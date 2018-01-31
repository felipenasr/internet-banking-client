describe('Testando Flow', function () {

    it('Visita o Gama Banking', () => {
        cy.visit('localhost:4200');
        cy.wait(600);
    })

    context('Usabilidade', () => {
        it('login, transacao, extrato, logout', () => {
            //insere no CPF
            cy.get('#cpf')
                .type('42145154809')
                .should('have.value', '421.451.548-09');
            //Insere na senha
            cy.get('#password')
                .type(102030)
                .should('have.value', '102030');
            //clica botao de login
            cy.wait(200);
            cy.get('#btn-Login').click();
            //url /dashboard
            cy.url().should('include', '/dashboard');


            cy.get('.transferencia')
                .click();
            //confere url
            cy.url().should('include', '/dashboard/transfer')
            //insere dados no form

            //input numero conta destino
            cy.get('#numContaDestino')
                .type('003002-5')
                .should('have.value', '003002-5')
            // input Valor
            cy.get('#valorTransfer')
                .type('10000')
                .should('have.value', 'R$ 100,00')
            //input senha
            cy.get('#senhaTransfer')
                .type('102030')
                .should('have.value', '102030')
            //click confirma transaçao
            cy.get('.btn')
                .contains('Avançar')
                .click();


            cy.get('#toggle-nav').click({ force: true });
            cy.get('.icon-extract')
                .wait(600)
                .click();
            cy.url().should('include', '/dashboard/extract')

            //volta pra dashboard
            cy.get('.btnVoltar').click()
            cy.url().should('include', '/dashboard')

            //selecionado botao de sair e click
            cy.get('#toggle-nav').click({ force: true });
            cy.get('.icon-exit')
                .wait(600)
                .click();
            //confere url
            cy.url().should('include', '/');
        })

    })


})

