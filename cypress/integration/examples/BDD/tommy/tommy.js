import signUp from './signUp';

const signUpPage = new signUp()


describe('Sign in', function() {

    it('TC01 Create new account with valid data', function() {
        cy.visit('https://nl.tommy.com/');
        signUpPage.closeButton();
        signUpPage.signButton();
        signUpPage.registerBtn();
        signUpPage.email();
        signUpPage.Password();
        signUpPage.checkboxLabel();
        signUpPage.primaryBtn();

    })
    it('TC02 Create new account with invalid data-negative scenario', function() {
        cy.visit('https://nl.tommy.com/');
        signUpPage.invalidData();
        
    })
    it('TC03 Create new account with existing email-negative scenario', function() {
        cy.visit('https://nl.tommy.com/');
        signUpPage.duplicateUser();
        
    })

    it('TC04 Create new account without accepting terms and conditions-negative scenario', function() {
        cy.visit('https://nl.tommy.com/');
        signUpPage.withoutTermsandCondition();
        
    }) 
})