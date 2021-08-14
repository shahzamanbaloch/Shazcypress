const locator = require('../../../../locators/tommy_register.json');

class signUp {

    closeButton(){
        cy.clearCookies()
    cy.get(locator.closeButton).click();
    return this
    }
  
    signButton(){
        //cy.clearCookies()
        cy.get(locator.signButton).invoke('show');
        cy.contains('Aanmelden').click({ force: true});
        cy.get(locator.signButton).click({

        });
        return this
  
    }
    registerBtn(){
        cy.get(locator.registerButton).click();
        return this
    }

    email() {
     cy.get(locator.emailInput).click({force: true}).clear().type('shaz123@test.com');
     return this
      
    }

    Password() {
        cy.clearCookies()
        cy.get(locator.passwordInput).click().clear().type('shaz123@1');
        return this
    }
    checkboxLabel(){
        cy.get(locator.checkboxLabel).click()

    }

    primaryBtn(){
        cy.clearCookies()
        cy.get(locator.primaryButton).click()
    }

        invalidData(){
            cy.clearCookies()
             cy.get(locator.closeButton).click();
            cy.get(locator.signButton).click();
            cy.get(locator.registerButton).click();
            cy.get(locator.emailInput).click().clear();
            cy.get(locator.emailInput).type('tommy@example');
            cy.get(locator.passwordInput).clear();
            cy.get(locator.passwordInput).type('tomm1234567');
            cy.get(locator.checkboxLabel).should('exist').click();
            cy.get(locator.newsletterLabel).click();
            cy.get(locator.primaryButton).click();
            cy.get(locator.passwordValidationError).should("contain.text", "Je wachtwoord moet tussen 5 en 20 tekens lang zijn");
            cy.get(locator.emailError).should("contain.text", "Sorry, dit is geen geldig e-mailadres");
            cy.wait(4000)
            cy.get(locator.closeFormButton).click();
        
        }
        
        duplicateUser(){   
        cy.clearCookies()
        cy.get(locator.closeButton).click();
        cy.get(locator.signButton).click();
        cy.get(locator.registerButton).click();
        cy.get(locator.emailInput).clear();
        cy.get(locator.emailInput).type('tes1t@example.com');
        cy.get(locator.passwordInput).clear();
        cy.get(locator.passwordInput).type('tomm1234567');
        cy.get(locator.checkboxLabel).click();
        cy.get(locator.newsletterLabel).click();
        cy.get(locator.primaryButton).click();
        cy.get(locator.error).contains('Oeps, er lijkt al een account met dit e-mailadres te bestaan').should('exist')
  
    }
        withoutTermsandCondition(){
            cy.clearCookies()
            cy.get(locator.closeButton).click();
            cy.get(locator.signButton).click();
            cy.get(locator.registerButton).click();
            cy.get(locator.emailInput).clear();
            cy.get(locator.emailInput).type('shaz@exam');
            cy.get(locator.passwordInput).clear();
            cy.get(locator.passwordInput).type('Test1234@');
            cy.get(locator.newsletterLabel).click();
            cy.get(locator.primaryButton).click();
            cy.get(locator.error).should("include.text", "Bevestig dat je akkoord gaat met de algemene voorwaarden")
            cy.get(locator.backdrop).click();
            cy.get(locator.error).click();
            cy.get(locator.modelClosebtn).click();
     
        }

}

export default signUp;