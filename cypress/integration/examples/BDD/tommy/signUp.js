const locator = require('../../../../locators/tommy_register.json');

class signUp {

    closeButton(){
    cy.get(locator.closeButton).click();
    return this
    }

    signButton(){
        cy.get(locator.signButton).click();
        return this
    }
    registerBtn(){
        cy.get(locator.registerButton).click();
        return this
    }

    email() {
       
     cy.get(locator.emailInput).clear().type('shaz123@test.com');
        return this
      
    }

    Password() {
        cy.get(locator.passwordInput).clear().type('shaz123@1');
        return this
    }
    checkboxLabel(){
        cy.get(locator.checkboxLabel).click();

    }

    primaryBtn(){

        cy.get(locator.primaryButton).click();
    }

        invalidData(){
          
            cy.get(locator.closeButton).click();
            cy.get(locator.signButton).click();
            cy.get(locator.registerButton).click();
            cy.get(locator.email).clear();
            cy.get(locator.email).type('tommy@example');
            cy.get(locator.passwordInput).clear();
            cy.get(locator.passwordInput).type('shaz');
            cy.get(locator.checkboxLabel).click();
            cy.get(locator.checkbox).check();
            cy.get(locator.newsletterLabel).click();
            cy.get(locator.newsletter).check();
            cy.get(locator.primaryButton).click();
            cy.get(locator.primaryButton).click();
            cy.get(locator.backdrop).click();
            cy.get(locator.backdrop).click();
            cy.get(locator.primaryButton).click();

        }
        
        duplicateUser(){   
         cy.get(locator.closeButton).click();
        cy.get(locator.signButton).click();
        cy.get(locator.registerButton).click();
        cy.get(locator.email).clear();
        cy.get(locator.email).type('tes1t@example.com');
        cy.get(locator.passwordInput).clear();
        cy.get(locator.passwordInput).type('tomm1234567');
        cy.get(locator.checkboxLabel).click();
        cy.get(locator.newsletterLabel).click();
        cy.get(locator.primaryButton).click();
        cy.get(locator.error).contains('Oeps, er lijkt al een account met dit e-mailadres te bestaan').should('exist')
  
    }
        withoutTermsandCondition(){
          
            cy.get(locator.closeButton).click();
            cy.get(locator.signButton).click();
            cy.get(locator.registerButton).click();
            cy.get(locator.email).clear();
            cy.get(locator.email).type('shaz@exam');
            cy.get(locator.passwordInput).clear();
            cy.get(locator.passwordInput).type('Test1234@');
            //cy.get('.agree-terms > [data-testid=checkbox-label]').click();
            cy.get(locator.newsletterLabel).click();
            cy.get(locator.primaryButton).click();
                //Oeps, er lijkt al een account met dit e-mailadres te bestaan.
             cy.get(locator.error).should("include.text", "Bevestig dat je akkoord gaat met de algemene voorwaarden")
      
            cy.get(locator.backdrop).click();
            cy.get(locator.error).click();
            cy.get(locator.modelClosebtn).click();
     
        }


    
}

export default signUp;