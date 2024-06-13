import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


Given("the student visits istqb test page", () => {
    //Visitar una página web diferente a la que se esté en base url
    cy.visit("https://joseqa81.github.io/ISTQB-online-test1/")

    //Cuando está definida en cypress.config.js la baseurl 
    cy.visit("/");

});