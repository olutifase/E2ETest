import {create_assistant_page} from "./create_assistant_page";

var faker = require('faker');
export class create_group_page {

    usernameField = '#username';
    passwordField = '#password';
    loginBtn = 'Login';
    groups = '.dropdown > :nth-child(4) > .colour_3';
    createGroup = '#open-create-adviser-group > .main-action-text';
    groupNameField = '.auto > :nth-child(1) > .ng-pristine';
    abbreviationField = ':nth-child(2) > .ng-untouched';
    createGroupNameField = '.notice-container > .ng-fa-icon > .svg-inline--fa > path';

    enterUsername() {
        cy.get(this.usernameField).type('admin.olu@oxfordrisk.com')
    }
    enterPassword() {
        cy.get(this.passwordField).type('admin.olu@oxfordrisk.com')
    }

    clickLogin() {
        cy.contains(this.loginBtn).click()
    }
    clickGroups () {
        cy.get(this.groups).click()
    }

    clickCreateGroup() {
        cy.get(this.createGroup).click()
    }

    enterGroupName() {
        cy.get(this.groupNameField).type( 'AJamal')
    }

    enterAbbreviation() {
        cy.get(this.abbreviationField).type( 'AJamal')
    }

    enterCreateGroupName() {
        cy.get(this.createGroupNameField).type( 'AJamal')
    }

    clickGroupsNameField() {

    }
}

export const create_group = new create_group_page();