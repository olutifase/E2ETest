/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {
        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()
        cy.get('.top-bar-right > .dropdown > :nth-child(1) > .parent').click()
        cy.get('.top-bar-right > .dropdown > :nth-child(1) > .menu > :nth-child(1) > .colour_3').click()
        cy.get('.bva-form > :nth-child(2) > .ng-untouched').type('Olu')
        cy.get(':nth-child(3) > .ng-untouched').type('Tifase')
        cy.get(':nth-child(5) > .ng-untouched').type('07597462398')
    //  cy.get(':nth-child(7) > .control-label > .ng-untouched').type('pseudocode1')
    //  cy.get(':nth-child(8) > .control-label > .ng-untouched').type('pseudocode1')
    })
})












