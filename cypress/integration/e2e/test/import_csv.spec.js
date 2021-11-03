/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {
        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()
        cy.get('.dropdown > :nth-child(2) > .colour_3').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .colour_1 > .main-action-text').click()
        cy.get('.upload').click()
    })
})
