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
       
            this.data = data;
     cy.get(locator.emailInput).clear().type(this.data.email);
        return this
      
    }

    Password() {
        cy.get(locator.passwordInput).clear().type(this.data.password);
        return this
    }
    checkboxLabel(){
        cy.get(locator.checkboxLabel).click();

    }

    primaryBtn(){

        cy.get(locator.primaryButton).click();
    }


    // Invalid 
        invalidData(){
          
                this.data = data;
            cy.get(locator.closeButton).click();
            cy.get(locator.signButton).click();
            cy.get(locator.registerButton).click();
            cy.get(locator.email).clear();
            cy.get(locator.email).type(this.data.Invalidemail);
            cy.get(locator.passwordInput).clear();
            cy.get(locator.passwordInput).type(this.data.Invalidpassword);
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
            
                this.data = data;
         cy.get(locator.closeButton).click();
        cy.get(locator.signButton).click();
        cy.get(locator.registerButton).click();
        
        cy.get(locator.email).clear();
        cy.get(locator.email).type(this.data.Duplicateemail);
        cy.get(locator.passwordInput).clear();
        cy.get(locator.passwordInput).type(this.data.Duplicatepassword);
        cy.get(locator.checkboxLabel).click();
        cy.get(locator.newsletterLabel).click();
        cy.get(locator.primaryButton).click();
        /* ==== Generated with Cypress Studio ==== */    //Oeps, er lijkt al een account met dit e-mailadres te bestaan.
        cy.get(locator.error).contains('Oeps, er lijkt al een account met dit e-mailadres te bestaan').should('exist')
  
    }

        withoutTermsandCondition(){
          
                this.data = data;
            cy.get(locator.closeButton).click();
            cy.get(locator.signButton).click();
            cy.get(locator.registerButton).click();
        
            
            cy.get(locator.email).clear();
            cy.get(locator.email).type(this.data.withoutemail);
            cy.get(locator.passwordInput).clear();
            cy.get(locator.passwordInput).type(this.data.withoutpassword);
            //cy.get('.agree-terms > [data-testid=checkbox-label]').click();
            cy.get(locator.newsletterLabel).click();
            cy.get(locator.primaryButton).click();
                //Oeps, er lijkt al een account met dit e-mailadres te bestaan.
            // cy.get('.error-text').should('exist')  //Bevestig dat je akkoord gaat met de algemene voorwaarden
      
            cy.get(locator.backdrop).click();
            cy.get(locator.error).click();
         
            cy.get(locator.modelClosebtn).click();
     
        }


    
}

export default signUp;