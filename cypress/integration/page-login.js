describe('Testando Flow', function () {

    it('Visita o Gama Banking', () => {
        cy.visit('localhost:4200');
        cy.wait(600);
    })

    it('Usabilidade', () => {

        //insere no CPF
        cy.get('#cpf')
            .type('43290754820')
            .should('have.value', '432.907.548-20');
        //Insere na senha
        cy.get('#password')
            .type(102030)
            .should('have.value', '102030');
        //clica botao de login
        cy.wait(500);
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
            .should('have.value', '003002-5');
        cy.wait(200);
        // input Valor
        cy.get('#valorTransfer')
            .type('10000')
            .should('have.value', 'R$ 100,00');
        cy.wait(200);
        //input senha
        cy.get('#senhaTransfer')
            .type('102030')
            .should('have.value', '102030');
        cy.wait(500);
        //click confirma transaçao
        cy.get('.btn')
            .contains('Confirmar')
            .wait(500)
            .click();
        cy.url().should('include', '/dashboard/receipt')


        //clica na sidebar
        cy.get('#toggle-nav').click({ force: true });
        cy.wait(4000);
        cy.get('.icon-extract')
            .wait(600)
            .click();
        cy.wait(4000);
        cy.url().should('include', '/dashboard/extract')

        //volta pra dashboard
        cy.get('#toggle-nav').click({ force: true });
        cy.get('.icon-dash')
            .wait(600)
            .click();
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

