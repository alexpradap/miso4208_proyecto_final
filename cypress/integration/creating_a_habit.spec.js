context('Login Tests', ()=>{
    it('Creates a habit', ()=>{
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.wait(2000);
        cy.get('#usernameInput').type('ea.gonzalezm@uniandes.edu.co').should('have.value', 'ea.gonzalezm@uniandes.edu.co');
        cy.get('#passwordInput').type('ea.gonzalezm');
        cy.get('.btn-info[type="submit"]').click();
        cy.get('#create-task-btn').should('be.visible');   
        cy.get('#create-task-btn').click();
        cy.get('div.create-task-btn.diamond-btn > div.svg-icon.icon-habit').should('be.visible');
        cy.get('div.create-task-btn.diamond-btn > div.svg-icon.icon-habit').click({force: true});
        cy.get('input.form-control.input-title.task-purple-modal-text.task-purple-modal-input').type('Leer 1 hora al día', {force: true});
        cy.get('textarea.form-control.input-notes.task-purple-modal-text.task-purple-modal-input').type('Este hábito te llevará a ser mejor persona', {force: true});
        cy.get('button.btn.btn-primary.btn-footer.d-flex.align-items-center.justify-content-center').click({force: true});

        cy.get('div.tasks-column.col-lg-3.col-md-6.habit div.task-wrapper:first-child h3 > p').contains('Leer 1 hora al día');
    })
})