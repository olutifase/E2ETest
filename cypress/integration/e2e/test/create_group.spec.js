import {create_group} from "../pages/create_group_page";

describe('OxfordRisk.loginTest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {

        create_group.enterUsername()
        create_group.enterPassword()
        create_group.clickLogin()
        create_group.clickGroups()
        create_group.clickCreateGroup()
        create_group.clickGroupsNameField()
        create_group.enterAbbreviation()
        create_group.clickGroups()

    })
})