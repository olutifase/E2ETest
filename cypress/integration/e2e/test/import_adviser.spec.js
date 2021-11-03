/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {
        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()
        cy.get('.top-bar-left > .dropdown > :nth-child(1) > .parent').click()
        cy.get('.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(2) > .colour_3').click()
        cy.get('#open-create-adviser-group > .main-action-text').click()
        cy.get('[style="height: fit-content;"] > .colour_2').click()
        cy.get('.upload').click()
        cy.get('.check-box > .medium_text').click()
    })
})