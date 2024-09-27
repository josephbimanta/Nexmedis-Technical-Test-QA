class loginPage {
    elements ={
        inputEmail : () => cy.get('#Email'),
        inputPassword : () => cy.get('#Password'),
        getSpan : () => cy.get('span')
    }

    enterEmail(email)
    {
      this.elements.inputEmail().clear();
      this.elements.inputEmail().type(email);
    }

    enterPassword(password)
    {
      this.elements.inputPassword().clear();
      this.elements.inputPassword().type(password);
    }

    clickLoginButton(){
        cy.get('.button-login').click();
    }

    verifyLoginSuccessfully(){
        cy.get('.header-welcome').should('contain.text', 'Welcome');
    }

    checkContainsErrorMessage(message){
        this.elements.getSpan();
        cy.contains(message);
    }
}