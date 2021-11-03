var faker = require('faker');
export class create_assistant_page {

    usernameField = '#username';
    passwordField = '#password';
    loginBtn = 'Login';
    user = '.top-bar-left > .dropdown > :nth-child(1) > .parent';
    assistant = '.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(3) > .colour_3';
    createAssistant = '#open-create-assistant > .main-action-text';
    firstNameField = '.bva-form > :nth-child(1) > .ng-pristine';
    lastNameField = '.bva-form > :nth-child(2) > .ng-untouched';
    emailField = '.bva-form > :nth-child(3) > .ng-untouched';
    phoneField = ':nth-child(4) > .ng-untouched';
    officeLocationField = (':nth-child(9) > .control-label > .ng-untouched');
    createAssistantBtn = ('#create_adviser > div > div.adviser-modal-content > div.adviser-modal-body.grid-x.grid-margin-x.grid-padding-x > div:nth-child(2) > ' +
                          'div.cell.medium-6 > input');


    enterUsername() {
        cy.get(this.usernameField).type('admin.olu@oxfordrisk.com')
    }
    enterPassword() {
        cy.get(this.passwordField).type('admin.olu@oxfordrisk.com')
    }

    clickLogin() {
        cy.contains(this.loginBtn).click()
    }

    clickUser() {
        cy.get(this.user).click()
    }

    clickAssistant() {
        cy.get(this.assistant).click()
    }

    clickCreateAssistant() {
        cy.get(this.createAssistant).click()
    }

    enterFirstName() {
        cy.get(this.firstNameField).type(faker.name.firstName())
    }

    enterLastName() {
        cy.get(this.lastNameField).type(faker.name.lastName())
    }

    enterEmail() {
        cy.get(this.emailField).type(faker.name.email)
    }
    enterPhone() {
        cy.get(this.phoneField).type('080033948574')
    }

    enterOfficeLocation() {
        cy.get(this.officeLocationField).type('Zurich')
    }

    clickCreateAssistantBtn() {
        cy.get(this.createAssistantBtn).click()
    }
}

