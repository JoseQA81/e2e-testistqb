import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  When("the student answers questions:", (datatable) => {

    datatable.hashes().forEach(element => {
    cy.get('[data-cy="question'+element.questionNumber+'"]').select(element.selectedAnswer)
        
    });
    
});