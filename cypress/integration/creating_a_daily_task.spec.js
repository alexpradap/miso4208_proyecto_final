context('Login Tests', ()=>{
    it('Creates a task', ()=>{
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.wait(2000);
        cy.get('#usernameInput').type('ea.gonzalezm@uniandes.edu.co').should('have.value', 'ea.gonzalezm@uniandes.edu.co');
        cy.get('#passwordInput').type('ea.gonzalezm');
        cy.get('.btn-info[type="submit"]').click();
        cy.get('#create-task-btn').should('be.visible');   
        cy.get('#create-task-btn').click();
        cy.get('div.create-task-btn.diamond-btn > div.svg-icon.icon-todo').should('be.visible');
        cy.get('div.create-task-btn.diamond-btn > div.svg-icon.icon-todo').click({force: true});
        cy.get('input.form-control.input-title.task-purple-modal-text.task-purple-modal-input').type('Regar las plantas', {force: true});
        cy.get('textarea.form-control.input-notes.task-purple-modal-text.task-purple-modal-input').type('Procura cuidar tu entorno', {force: true});
        cy.get('button.btn.btn-primary.btn-footer.d-flex.align-items-center.justify-content-center').click({force: true});

        cy.get('div.tasks-column.col-lg-3.col-md-6.todo div.task-wrapper:first-child h3 > p').contains('Regar las plantas');
    })
})