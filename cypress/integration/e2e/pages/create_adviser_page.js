var faker = require('faker');
export class create_adviser_page {

    usernameField = '#username';
    passwordField = '#password';
    loginBtn = 'Login';
    user = '.top-bar-left > .dropdown > :nth-child(1) > .parent';
    adviser = '.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(2) > .colour_3';
    createAdviser = '#open-create-adviser > .main-action-text';
    firstNameField = '.bva-form > :nth-child(1) > .ng-untouched';
    lastNameField = '.bva-form > :nth-child(2) > .ng-untouched';
    emailField = ':nth-child(3) > .ng-untouched';
    phoneField = ':nth-child(4) > .ng-untouched';
    officeLocationField = (':nth-child(9) > .control-label > .ng-untouched');
    createAdviserBtn = ('#create_adviser > div > div.adviser-modal-content > div.adviser-modal-body.grid-x.grid-margin-x.' +
                        'grid-padding-x > div:nth-child(2) > div.cell.medium-6 > input');


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

    clickAdviser() {
        cy.get(this.adviser).click()
    }

    clickCreateAdviser() {
        cy.get(this.createAdviser).click()
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
        cy.get(this.phoneField).type('080075948574')
    }

    enterOfficeLocation() {
        cy.get(this.officeLocationField).type('Zurich')
    }

    clickCreateAdminBtn() {
        cy.get(this.createAdviserBtn).click()
    }
}