import {client_details} from "../pages/client_details_page";

describe('OxfordRisk.loginTest',() =>{
    beforeEach(() =>{
        cy.visit('/login')
    })

    it('login into application', ()=> {
        client_details.enterUsername()
        client_details.enterPassword()
        client_details.clickLogin()
        client_details.clickClient()
        client_details.clickCreateClient()
        client_details.enterTitle()
        client_details.enterFirstName()
        client_details.enterLastName()
        client_details.enterEmail()
        client_details.enterTestClient()
        client_details.enterAnotherClient()
        client_details.clickNoticeContainer()
        client_details.clickCreateClientBtn()
       })
 })
