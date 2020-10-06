context('Login Tests', ()=>{
    it('makes a succesful login attemp', ()=>{
        cy.visit('https://habitica.com/static/home');        

        cy.get('#usernameInput').type('ingeday10').should('have.value', 'ingeday10');
        cy.get('[type="email"]').type('ea.gonzalezm@uniandes.edu.co');
        cy.get('[type="password"]').each(($el)=>{          
            cy.wrap($el).type('12345678');
        })

        cy.get('[type="submit"]').click();

        cy.get('div.text.col-12 > div[data-v-283c054f]').contains('Ya existe una cuenta con esa dirección de correo electrónico.');
    })
})