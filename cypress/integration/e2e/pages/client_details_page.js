var faker = require('faker');
export class client_details_page {

    usernameField = '#username';
    passwordField = '#password';
    loginBtn = 'Login';
    client = '.dropdown > :nth-child(2) > .colour_3';
    createClient = '#open-create-client > .main-action-text';
    titleField  = '.medium-2 > .cell';
    firstnameField = '.bva-form > :nth-child(2) > .ng-pristine';
    lastNameField = ':nth-child(3) > .ng-untouched';
    referencerOrIDField = ':nth-child(5) > .ng-pristine';
    genderField = ':nth-child(6) > .cell';
    entityField = '#entity_name'
    dobField = '.mat-datepicker-input';
    emailField = ':nth-child(7) > .ng-untouched';
    testClientField = ':nth-child(14) > .ng-untouched';
    anotherClientField = ':nth-child(15) > .ng-pristine';
    noticeContainer = '.notice-container > .ng-fa-icon > .svg-inline--fa > path';
    createClientBtn = '#create_client > div > div.adviser-modal-content > div.adviser-modal-body.grid-y.grid-padding-y > div > div';



    enterUsername (){
        cy.get(this.usernameField).type('admin.olu@oxfordrisk.com')
    }

    enterPassword (){
        cy.get(this.passwordField).type('admin.olu@oxfordrisk.com')
    }

    clickLogin (){
        cy.contains(this.loginBtn).click()
    }

    clickClient (){
        cy.get(this.client).click()
    }

    clickCreateClient() {
        cy.get(this.createClient).click()
    }

    enterTitle () {
        cy.get(this.titleField).type('Mr')
    }

    enterFirstName () {
        cy.get(this.firstnameField).type(faker.name.firstName())
    }

    enterLastName (){
        cy.get(this.lastNameField).type(faker.name.lastName())
    }

    enterReferenceOrID (){
         cy.get(this.referencerOrIDField).type('1825-JSNL012345678')
        //cy.get(this.referencerOrIDField).type(faker.name.referencerOrIDField)
    }
    enterGender (){
           cy.get(this.genderField).type('Male')
         //cy.get(this.genderField).type(faker.name.gender)
    }

    enterEntity (){
        cy.get(this.entityField).type('KGP')
    }

    enterDob (){
        cy.get(this.dobField).type('12/09/1989')
        //cy.get(this.dobField).type(faker.name.dob)
    }

    enterEmail (){
         cy.get(this.emailField).type('ElizarCarp@gmail.com')
        //cy.get(this.emailField).type(faker.name.email)


    }

    enterTestClient () {
        cy.get(this.testClientField).type('PCI')
    }

    enterAnotherClient (){
        cy.get(this.anotherClientField).type('Test_Passed')
    }

    clickNoticeContainer (){
        cy.get(this.noticeContainer).click()
    }

    clickCreateClientBtn (){
        cy.get(this.createClientBtn).click()
    }

}


export const client_details = new client_details_page();