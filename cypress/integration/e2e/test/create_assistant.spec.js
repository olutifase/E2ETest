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
        cy.get('.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(3) > .colour_3').click()
        cy.get('#open-create-assistant > .main-action-text').click()
        cy.get('.bva-form > :nth-child(1) > .ng-pristine').type('Tanya')
        cy.get('.bva-form > :nth-child(2) > .ng-untouched').type('Latisha')
        cy.get('.bva-form > :nth-child(3) > .ng-untouched').type('Tanya_tisha@yahoo.com')
        cy.get(':nth-child(4) > .ng-untouched').type('07598302898')
        cy.get(':nth-child(9) > .control-label > .ng-untouched').type('London')
        cy.get('.notice-container > .ng-fa-icon > .svg-inline--fa').click()
        cy.get('#create_adviser > div > div.adviser-modal-content > div.adviser-modal-body.grid-x.grid-margin-x.grid-padding-x > div:nth-child(2) > ' +
               'div.cell.medium-6 > input').click()

    })
})