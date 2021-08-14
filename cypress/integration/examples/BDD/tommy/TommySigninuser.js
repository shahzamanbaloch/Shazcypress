import Pomtodo_list from './Pomtodo_list';

const pomlist = new Pomtodo_list()

describe('Sign in', () => {

    it('TC05 Add address', () => {
        cy.visit('https://nl.tommy.com/');
        cy.clearLocalStorage()
        cy.clearCookies();
        pomlist.closeOverlay();
        pomlist.closeButton();
        pomlist.signButton();
        pomlist.Email();
        pomlist.Password();
        pomlist.submitButton();
        pomlist.myAccountButton();
        pomlist.adressBook();
        pomlist.userAddress();
        pomlist.accountPageTitle();
        pomlist.signOutIcon();

    });
});