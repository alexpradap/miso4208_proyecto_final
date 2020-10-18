
context('Login Tests', ()=>{
    it('creates a public challenge', ()=>{
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.wait(2000);
        cy.get('#usernameInput').type('ea.gonzalezm@uniandes.edu.co').should('have.value', 'ea.gonzalezm@uniandes.edu.co');
        cy.get('#passwordInput').type('ea.gonzalezm');

        cy.get('.btn-info[type="submit"]').click();

        cy.get('.habitica-menu-dropdown').should('be.visible');   
        
        cy.visit('https://habitica.com/challenges/myChallenges');
        cy.get('.create-challenge-button').click();
        
        // Challenge Name
        cy.xpath('/html/body/div[2]/div[1]/div/div/div/div/div[1]/input').type("Nuevo Desafío para correr diariamente");
        
        // Short Name
        cy.xpath('/html/body/div[2]/div[1]/div/div/div/div/div[2]/input').type(" Ejercicios")

        // Summary
        cy.get('.form-group > .summary-textarea').type('Alguna descripción para el nuevo desafío')

        // Description
        cy.get('.form-group > .description-textarea').type('Alguna descripción para el nuevo desafío')

        // Public challenges, but we need almost 1 gem
        cy.get('select').select('Public Challenges')
    })
})