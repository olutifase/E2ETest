var faker = require('faker');
export class create_admin_page {

    usernameField = '#username';
    passwordField = '#password';
    loginBtn = 'Login';
    user = '.top-bar-left > .dropdown > :nth-child(1) > .parent';
    admin = '.top-bar-left > .dropdown > :nth-child(1) > .menu > :nth-child(1) > .colour_3';
    createAdmin = '#open-create-admin > .main-action-text';
    firstNameField = '.bva-form > :nth-child(1) > .ng-untouched';
    lastNameField = '.bva-form > :nth-child(2) > .ng-untouched';
    emailField = '.control-label.medium-12 > .ng-untouched';
    phoneField = ':nth-child(4) > .ng-untouched';
    officeLocationField = 'div.medium-12 > .control-label > .ng-untouched';
    createAdminBtn = '#create_admin > div > div.adviser-modal-content > div.adviser-modal-body.grid-x.grid-margin-x.grid-padding-x > div:nth-child(2) > div.cell.small-6.uppercase > div';


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

    clickAdmin() {
        cy.get(this.admin).click()
    }

    clickCreateAdmin() {
        cy.get(this.createAdmin).click()
    }

    enterFirstName() {
        cy.get(this.firstNameField).type(faker.name.firstName())
    }

    enterLastName() {
        cy.get(this.lastNameField).type(faker.name.lastName())
    }

    enterEmail() {
        // cy.get(this.emailField).type(faker.name.email)
        cy.get(this.emailField).type('Dr_royals@gmail.com')
    }

    enterPhone() {
        cy.get(this.phoneField).type('0749057908498')
    }

    enterOfficeLocation() {
        cy.get(this.officeLocationField).type('London')
    }

    clickCreateAdminBtn() {
        cy.get(this.createAdminBtn).click()
    }

}

export const create_admin = new create_admin_page();