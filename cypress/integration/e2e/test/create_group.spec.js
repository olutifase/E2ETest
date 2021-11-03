/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {
        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()
        cy.get('.dropdown > :nth-child(4) > .colour_3').click()
        cy.get('#open-create-adviser-group > .main-action-text').click()
        cy.get('.auto > :nth-child(1) > .ng-pristine').type('A12345')
        cy.get('.notice-container > .ng-fa-icon > .svg-inline--fa > path').click()
        cy.get('#create_group > div > div.adviser-modal-content > div.adviser-modal-body > ' +
               'div > div:nth-child(2) > div:nth-child(2) > input').click()
    })
})