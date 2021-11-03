// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {
        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()
        cy.get('.no-url').click()
        cy.get('.no-url').click()
        cy.get(':nth-child(2) > .notShownRow > :nth-child(1) > .ellipsis').click()
        cy.get(':nth-child(5) > .url-button > span').click()
        cy.get('.client-link > .url-button > span').click()

        FPAssesment
        cy.get('[tabindex="0"] > .main-action-text').click()
        cy.get(':nth-child(1) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > .checked > label > span').click()
        cy.get('#FinancialPersonalityAssessment > :nth-child(2) > app-template-content > .template-content > .questions-container > app-questions > .grid-margin-x > :nth-child(5) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(4) > label').click()
        cy.get('#FinancialPersonalityAssessment > :nth-child(2) > app-template-content > .template-content > .questions-container > app-questions > .grid-margin-x > :nth-child(5) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(3) > label').click()
        cy.get('#FinancialPersonalityAssessment > :nth-child(2) > app-template-content > .template-content > .questions-container > app-questions > .grid-margin-x > :nth-child(6) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(5) > label > span').click()
        cy.get('#FinancialPersonalityAssessment > :nth-child(2) > app-template-content > .template-content > .questions-container > app-questions > .grid-margin-x > :nth-child(8) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(1) > label > span').click()
        cy.get(':nth-child(9) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(4) > label')
        cy.get(':nth-child(9) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(4) > label')
        cy.get(':nth-child(9) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(3) > label > span').click()
        cy.get(':nth-child(10) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(5) > label > span').click()
        cy.get(':nth-child(11) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(3) > label > span').click()
        cy.get(':nth-child(12) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(2) > label > span').click()
        cy.get(':nth-child(13) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(5) > label > span').click()
        cy.get(':nth-child(14) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(3) > label > span').click()
        cy.get(':nth-child(15) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(4) > label').click()
        cy.get(':nth-child(1) > app-repeatable > [style="overflow-x: auto; overflow-y: hidden;"] > .repeatable_container > .repeatable > .table_question_container > .small-12 > .table-row > [style="justify-content: center;"]').click()
        cy.get(':nth-child(1) > app-repeatable > [style="overflow-x: auto; overflow-y: hidden;"] > .repeatable_container > .repeatable > .table_question_container > .small-12 > .table-row > :nth-child(3) > app-currency > .input-group > .input-group-label').click()
        cy.get(':nth-child(16) > app-single-choice > div[style="width: 100%;"] > .answer_value_container > :nth-child(4) > label > span').click()
        cy.get(':nth-child(1) > app-repeatable > [style="overflow-x: auto; overflow-y: hidden;"] > .repeatable_container > .repeatable > .table_question_container > .small-12 > .table-row > [style="justify-content: center;"]').click()
        cy.get('#ia-cash-savings1title > .input-group-field').type('Alexander')
    })
})