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

When("the student presses button see the final score", () => {
    
  cy.get('[data-cy="see-final-score"]').click();

});

Then("the final score should be displayed", () => {
    
  cy.get('[data-cy="final-score-message"]').should('be.visible');
  cy.get('[data-cy="final-score-message"]').should('contain', 'Your final score is:');
  
});

Then("the final score is {string}", () => {
    
  cy.get('[data-cy="final-score-message"]').should('contain', 'Your final score is: 5');
  
});