import {create_adviser} from "../pages/create_adviser_page";

describe('OxfordRisk.loginTest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {

        create_adviser.enterUsername()
        create_adviser.enterPassword()
        create_adviser.clickLogin()
        create_adviser.clickUser()
        create_adviser.clickAdviser()
        create_adviser.clickCreateAdviser()
        create_adviser.enterFirstName()
        create_adviser.enterLastName()
        create_adviser.enterEmail()
        create_adviser.enterPhone()
        create_adviser.enterOfficeLocation()
        create_adviser.clickCreateAdviserBtn()

    })
})