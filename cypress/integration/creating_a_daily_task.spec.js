
context('Login Tests', ()=>{
    it('creating a habit', ()=>{
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.wait(2000);
        cy.get('#usernameInput').type('ea.gonzalezm@uniandes.edu.co').should('have.value', 'ea.gonzalezm@uniandes.edu.co');
        cy.get('#passwordInput').type('ea.gonzalezm');

        cy.get('.btn-info[type="submit"]').click();

        cy.get('#create-task-btn').should('be.visible');   
        
        cy.get('#create-task-btn').click();
        
        
        cy.xpath('/html/body/div/div/div[5]/div[3]/div/div/div[1]/div[2]/div[1]/div[2]').should('be.visible');
        
        cy.xpath('/html/body/div/div/div[5]/div[3]/div/div/div[1]/div[2]/div[1]/div[2]').click();
        cy.xpath('/html/body/div[2]/div[1]/div/div/header/div/div[2]/input').type('Correr');
        cy.xpath('/html/body/div[2]/div[1]/div/div/header/div/div[3]/textarea').type('Correr un poco día a día');
        cy.xpath('/html/body/div[2]/div[1]/div/div/header/div/div[1]/div/button[2]').click();

        cy.contains('Correr un poco día a día').should('be.visible')

    })
})