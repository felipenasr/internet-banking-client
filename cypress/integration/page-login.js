describe('Testando Pagina de Login', function () {

    it('Visita o Gama Banking', () => {
        cy.visit('localhost:4200');
    })

    context('Login/Logout', () => {
        it('Faz login e logout', () => {
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

            //selecionado botao de sair e click
            cy.get('.icon-exit')
                .wait(600)
                .click();
            //confere url
            cy.url().should('include', '/');
        })
    })

    context('Dasboard', () => {
        it('Navegação extrato', () => {
            cy.visit('localhost:4200/dashboard');

            //clica no btn de transferencia
            cy.get('.extrato')
                .click();
            //confere url
            cy.url().should('include', '/dashboard/extract')
            //volta pra dashboard
            cy.get('.btnVoltar').click()
            cy.url().should('include', '/dashboard')
        })

        it('Navegação transferencias', () => {
            cy.visit('localhost:4200/dashboard');

            //clica no btn de transferencia
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
        })


        it('Navegaçao SideNav', () => {
            cy.visit('localhost:4200/dashboard');
            
            //clica side-nav, clica Transferencias, verifica url
            cy.get('#toggle-nav').click({force: true});
            cy.get('.icon-transfer').click();
            cy.url().should('include', '/dashboard/transfer')
            //clica side-nav, clica dash
            cy.get('#toggle-nav').click({force: true});
            cy.get('.icon-extract').click();
            cy.url().should('include', '/dashboard/extract')
            //clica side-nav, clica dash
            cy.get('#toggle-nav').click({force: true});
            cy.get('.icon-dash').click();
            cy.url().should('include', '/dashboard')
        })

    })


})

