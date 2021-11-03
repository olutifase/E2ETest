/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {

        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()

        cy.get('.dropdown > :nth-child(3) > .colour_3').click()

        cy.get('.ng-breadcrumbs > :nth-child(1) > .colour_3').click()
        cy.get('.small-12 > :nth-child(1) > .grid-x > .font_colour_3').click()

        cy.get('.top-bar-left > .dropdown > :nth-child(1) > .parent').click()
        cy.get('.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(1) > .colour_3').click()
        cy.get('#open-create-admin > .main-action-text').click()
        cy.get('.bva-form > :nth-child(1) > .ng-untouched').type('Dreg')
        cy.get('.bva-form > :nth-child(2) > .ng-untouched').type('Royals')
        cy.get('.control-label.medium-12 > .ng-untouched').type('Dr_royals@gmail.com')
        cy.get(':nth-child(4) > .ng-untouched').type('0749057908498')
        cy.get('div.medium-12 > .control-label > .ng-untouched').type('London')

        // cy.get('.bva-form > :nth-child(2) > .ng-untouched').click()
    })
})