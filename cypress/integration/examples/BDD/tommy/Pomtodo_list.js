const locator = require('../../../../locators/tommy_signin.json');

class Pomtodo_list {

    closeOverlay() {
        cy.get(locator.overLaybutton).click();
        return this
    }

    closeButton() {
        cy.get(locator.closeButton).click();
        return this
    }

    signButton() {
        cy.get(locator.signButton,{ timeout: 4000 }).click({force: true});
        return this
    }

    Email() {
        cy.get(locator.emailInputField).clear();
        cy.get(locator.emailInputField).type('skrb00@outlook.com');
        return this
    }

    Password() {
        cy.get(locator.password).clear();
        cy.get(locator.password).type('Shahzaman@1');
        return this
    }

    submitButton() {
        cy.get(locator.submitButton,{ timeout: 4000 }).click({force: true});
        return this
    }
    myAccountButton() {
        cy.get(locator.myAccountIcon).invoke('show');
        cy.get(locator.myAccountmouseover).trigger('mouseover')
        cy.contains('Mijn account', { timeout: 4000 }).click({force: true});
        return this
    }

    adressBook() {
        cy.get(locator.adressBook).click();
        return this
   }
    addAressbtn() {
        cy.get(locator.addAressbtn).click();
        return this
    }

    signOutIcon() {
        cy.get(locator.myAccountIcon).invoke('show');
        cy.get(locator.myAccountmouseover).trigger('mouseover')
        cy.contains('Mijn account',{ timeout: 4000 }).click({force: true});
        cy.get(locator.signOutButton).invoke('show');
        cy.contains('Afmelden').click({force: true});
       return this
    }
    // niewAdresButton() {
    //     cy.get(locator.niewAdresButton).invoke('show');
    //     cy.contains('NIEUW ADRES').click({force: true});
    //    return this
    // }
    userAddress() {
        cy.get(locator.addAddressButton,{ timeout: 4000 }).click({force: true});
        cy.get(locator.firstname).should('exist').dblclick().type('Shaz');
        cy.get(locator.lastname,{ timeout: 4000 }).should('exist').clear().dblclick().type('Baloch');
        cy.get(locator.address).clear().type('London');
        cy.get(locator.houseNumber).clear().type('37');
        cy.get(locator.city).clear().type('Rotterdam');
        cy.get(locator.zipcode).clear().type('3067 RD');
        cy.get(locator.telephone).clear().type('876543210');
        cy.get(locator.countryName,{ timeout: 4000 }).should('exist').select('NL');
        cy.get(locator.saveBtn,{ timeout: 4000 }).should('exist').click({force: true})
        cy.get(locator.saveBtn).should('not.exist');
        cy.get(locator.updateBtn).should('exist').click();
        cy.get(locator.updateBtn).should('not.exist');
        cy.get(locator.deleteButton).should('exist').click();
        cy.get(locator.deleteButton).should('not.exist');
        return this
    }
    accountPageTitle() {
        cy.get(locator.accountPageTitle).click();
        return this
    }

}

export default Pomtodo_list;