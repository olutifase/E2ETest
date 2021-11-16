import {create_assistant} from "../pages/create_assistant_page";

describe('OxfordRisk.loginTest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {

        create_assistant.enterUsername()
        create_assistant.enterPassword()
        create_assistant.clickLogin()
        create_assistant.clickUser()
        create_assistant.clickAssistant()
        create_assistant.clickCreateAssistant()
        create_assistant.enterFirstName()
        create_assistant.enterLastName()
        create_assistant.enterEmail()
        create_assistant.enterPhone()
        create_assistant.enterOfficeLocation()
        create_assistant.clickCreateAssistantBtn()

    })
})