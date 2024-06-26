import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

When("the student selects answer {string} on question {string}", (selectedAnswer,questionNumber) => {
    
    cy.get('[data-cy="question'+questionNumber+'"]').select(selectedAnswer);
  
});

When("the student presses the button See Answer on question {string}", (questionNumber) => {
    
    cy.get('[data-cy="show-answer-q'+questionNumber+'"]').click();
    
});

Then("the student should see the answer message {string} on question {string}", (expectedMessage,questionNumber) => {
    
    cy.get('[data-cy="answer-message'+questionNumber+'"]').should('have.text',expectedMessage);
    
});

When("the student presses the button See Score on question {string}", (questionNumber) => {
    
    cy.get('[data-cy="see-score-q'+questionNumber+'"]').click();
    
});

Then("the student should see the score message {string} on question {string}", (expectedMessage,questionNumber) => {
    
    cy.get('[data-cy="score-message'+questionNumber+'"]').should('have.text',expectedMessage);
    
});