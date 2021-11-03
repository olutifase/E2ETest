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
        cy.wait(4000)
        cy.get('#open-create-client > .main-action-text').click()
        cy.get('.medium-2 > .cell').type('Mr')
        cy.get('.bva-form > :nth-child(2) > .ng-pristine').type('Elizar')
        cy.get(':nth-child(3) > .ng-untouched').type('Carpenter')
        cy.get(':nth-child(5) > .ng-pristine').type('1825-SNL3')
        cy.get(':nth-child(6) > .cell').type('M')
        cy.get('#entity_name').type('KGP')
        cy.get('.mat-datepicker-input').type('12/09/1989')
        cy.get(':nth-child(7) > .ng-untouched').type('ElizarCarp@gmail.com')
        cy.get(':nth-child(13) > .ng-untouched').type('Abc_E')
        cy.get(':nth-child(14) > .ng-untouched').type('PCI')
        cy.get(':nth-child(15) > .ng-pristine').type('Test_Passed')


        cy.get('medium-6 small-12 colour_3 cta-button').click()




    })
})


/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('https://testing.oxfordrisk.xyz/login')
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


/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('https://testing.oxfordrisk.xyz/login')
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

/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('https://testing.oxfordrisk.xyz/login')
    })
    it('login into application', ()=> {

        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()


        cy.get('.dropdown > :nth-child(4) > .colour_3').click()
        cy.wait(4000)
        cy.get('#open-create-adviser-group > .main-action-text').click()
        cy.get('.auto > :nth-child(1) > .ng-pristine')

        cy.get('.auto > :nth-child(1) > .ng-pristine')
        cy.get('.auto > :nth-child(1) > .ng-pristine').type('Cprt1234')
    })
})

/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('https://testing.oxfordrisk.xyz/login')
    })
    it('login into application', ()=> {

        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()


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

/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('https://testing.oxfordrisk.xyz/login')
    })
    it('login into application', ()=> {

        cy.get('#username').type('admin.olu@oxfordrisk.com')
        cy.get('#password').type('admin.olu@oxfordrisk.com')
        cy.contains('Login').click()


        cy.get('.top-bar-left > .dropdown > :nth-child(1) > .parent').click()

        cy.get('.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(2) > .colour_3').click()
        cy.get('#open-create-adviser > .main-action-text').click()
        cy.get('.bva-form > :nth-child(1) > .ng-untouched').type('James')
        cy.get('.bva-form > :nth-child(2) > .ng-untouched').type('Dickson')
        cy.get(':nth-child(3) > .ng-untouched').type('Jamie_dick')
        cy.get(':nth-child(4) > .ng-untouched').type('08075948574')
        cy.get(':nth-child(5) > .ng-untouched').type('active')
        cy.get('.c-btn').type('1')
        cy.get(':nth-child(9) > .control-label > .ng-untouched').type('Switzerland')

    })
})

/// <reference types="cypress" />

describe('Oxford.logintest',() =>{
    beforeEach(() =>{

        cy.visit('https://testing.oxfordrisk.xyz/login')
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

        /// <reference types="cypress" />

        describe('Oxford.logintest',() =>{
            beforeEach(() =>{

                cy.visit('https://testing.oxfordrisk.xyz/login')
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

/// <reference types="cypress" />
        describe('Oxford.logintest',() =>{
            beforeEach(() =>{

                cy.visit('https://testing.oxfordrisk.xyz/login')
            })
                it('login into application', ()=> {
                  cy.get('#username').type('admin.olu@oxfordrisk.com')
                  cy.get('#password').type('admin.olu@oxfordrisk.com')
                  cy.contains('Login').click()
                  cy.get('.top-bar-left > .dropdown > :nth-child(1) > .parent').click()
                  cy.get('.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(2) > .colour_3').click()
                  cy.get(':nth-child(3) > .colour_1 > .main-action-text').click()
                  cy.get('#startDate').click()
            })
        })
    })
})