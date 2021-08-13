import Pomtodo_list from './Pomtodo_list';

const pomlist = new Pomtodo_list()


describe('Sign in', function() {

    it('To Sign in with valid credentials', function() {
        cy.visit('https://nl.tommy.com/');
        pomlist.closeOverlay();
        pomlist.closeButton();
        pomlist.signButton();
        pomlist.Email();
        pomlist.Password();
        pomlist.submitButton();
        pomlist.myAccountButton();
        pomlist.adressBook();
        pomlist.userAddress();
        pomlist.saveButton();
        pomlist.updateButton();
        pomlist.closeContent();
        
    }) 
})