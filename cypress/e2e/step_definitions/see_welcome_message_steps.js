import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";



  When("the student enters the name {string}", (name) => {
    //Buena práctica primero borrar elemento input
    cy.get('[data-cy="input-welcome-name"]').clear();

    //Escribir en el elemento input, en este caso el nombre
    cy.get('[data-cy="input-welcome-name"]').type(name);

});

When("press Send & start your exam button", () => {
    //Hacer click en el boton comenzar examen
    cy.get('[data-cy="button-start"]').click();
  }); 

  Then("the student should see the message {string}", (welcomeMessage) => {
    cy.get('[data-cy="welcome-message"]').should('contain.text', welcomeMessage);
  }); 

  When("the student does not enter any name", () => {
    
  });