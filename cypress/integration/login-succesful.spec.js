context('Login Tests', ()=>{
    it('makes a succesful login attemp', ()=>{
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();

        cy.get('#usernameInput').type('ea.gonzalezm@uniandes.edu.co').should('have.value', 'ea.gonzalezm@uniandes.edu.co');
        cy.get('#passwordInput').type('ea.gonzalezm');

        cy.get('.btn-info[type="submit"]').click();

        cy.get('.habitica-menu-dropdown').should('be.visible');        
    })
})