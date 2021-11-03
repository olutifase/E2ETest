import {client_details} from "../pages/client_details_page";

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('https://uat-admin.oxfordrisk.xyz/')
    })

    it('login into application', ()=> {
        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()
        cy.get('#email').click()
        cy.get().type('admin.olu@oxfordrisk.com')
    })

})
