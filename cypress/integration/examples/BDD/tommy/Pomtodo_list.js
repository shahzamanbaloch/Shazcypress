const locator = require('../../../../locators/tommy_signin.json');

class Pomtodo_list {

    closeOverlay(){
        cy.get(locator.overLaybutton).click();
    }

    closeButton(){
    cy.get(locator.closeButton).click();
    }

    signButton(){
        cy.get(locator.signButton).click();
    }

    Email() {
      
            this.data = data;
        cy.get(locator.emailInputField).clear();
        cy.get(locator.emailInputField).type( this.data.email);
        return this

       
        
    }

    Password() {
      
        this.data = data;
        cy.get(locator.password).clear();
        cy.get(locator.password).type(this.data.password);
        return this
   
    }


    submitButton() {
        cy.get(locator.submitButton).click();
        return this
    }

    myAccountButton(){
        cy.get(locator.myAccountIcon).invoke('show');
        cy.get(locator.myAccountmouseover).trigger('mouseover')
        cy.contains('Mijn account').click({ force: true});
        return this
    }


    adressBook(){
        cy.get(locator.adressBook).click();
        cy.get(locator.aadressBookbtn).should('be.enabled').click();
        return this
    }

    userAddress(){
        // cy.xpath('//div[@class="address-new my-account-form"]//div[1]//input[1]').clear();
        // cy.xpath('//div[@class="address-new my-account-form"]//div[1]//input[1]').type('tommy');
        // cy.xpath('//div[contains(@class,"address-new my-account-form")]//input[@id="lastName"]').clear().type('hilfiger');
       
        
        
        cy.get(locator.address).clear().type('37');
        cy.get(locator.city).clear();
      
            this.data = data;
        cy.get(locator.city).type(this.data.city);
        cy.get(locator.zipcode).clear();
        cy.get(locator.zipcode).type(this.data.zipcode);
        cy.get(locator.telephone).click();
        cy.get(locator.telephone).type(this.data.telephone);
      

        return this
    }


    saveButton(){
        cy.get(locator.saveBtn).click({ force: true});  
        return this
    }

    updateButton(){
        cy.get(locator.updateBtn).click();
        return this
    }

    closeContent(){
        cy.get(locator.closeContent).click();
        return this
    }

    
}

export default Pomtodo_list;