context('Login Tests', ()=>{
    it('creates a public challenge', ()=>{
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.wait(3000);
        cy.get('#usernameInput').type('ea.gonzalezm@uniandes.edu.co').should('have.value', 'ea.gonzalezm@uniandes.edu.co');
        cy.get('#passwordInput').type('ea.gonzalezm');        
        cy.get('.btn-info[type="submit"]').click();
        cy.wait(3000);

        cy.visit('https://habitica.com/challenges/myChallenges');
        cy.wait(3000);

        // Add chalenge
        cy.get('.create-challenge-button').click({force: true});
        // Challenge Name
        cy.get('div.form input').eq(0).type("Llegar a trotar 5 kilómetros", {force: true});
        // Short Name
        cy.get('div.form input').eq(1).type("run5k", {force: true});
        // Summary
        cy.get('.form-group > .summary-textarea').type('Aumentar progresivamente la distancia de trote hasta llegar a recorrer 5km', {force: true});
        // Description
        cy.get('.form-group > .description-textarea').type('Trotar diariamente y tomar control semanal de la distancia recorrida, aumentando paulatinamente hasta conseguir un trote de 5km', {force: true});
        // Public challenges, but we need almost 1 gem
        cy.get('select.form-control').select('00000000-0000-4000-A000-000000000000', {force: true});
        // Category
        cy.get('span.category-select').click({force: true});
        cy.get('input#challenge-modal-cat-health_fitness').check({force: true});
        cy.get('div.category-box > button.btn.btn-primary').click({force: true});

        // Challenge cannot be added if user doesn't have gems
        cy.get('div.alert.alert-warning').contains('You do not have enough gems to create a Tavern challenge');
    });
});