import {create_admin} from "../pages/create_admin_page";

describe('OxfordRisk.loginTest',() =>{
    beforeEach(() =>{

        cy.visit('/login')
    })
    it('login into application', ()=> {

        create_admin.enterUsername()
        create_admin.enterPassword()
        create_admin.clickLogin()
        create_admin.clickUser()
        create_admin.clickAdmin()
        create_admin.clickCreateAdmin()
        create_admin.enterFirstName()
        create_admin.enterLastName()
        create_admin.enterEmail()
        create_admin.enterPhone()
        create_admin.enterOfficeLocation()
        create_admin.clickCreateAdminBtn()
    })
})
