import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


When('the student presses see final score button', () => {
  cy.get('[data-cy="see-final-score"]').click(); 
});

When("the student presses see ranking button", () => {
    cy.get('[data-cy="see-ranking-result"]').click();
  });

  Then("a list should appear with all the students who have taken the exam", () => {
    cy.get('[data-cy="ranking-result-message"]').should('be.visible');
  });

  Then("their scores ordered from highest to lowest score", () => {
  });

  Then("the ranking should show:", (datatable) => {

    datatable.hashes().forEach(element => {
    cy.get('[data-cy="question'+element.questionNumber+'"]').select(element.selectedAnswer)
        
    });
    
});