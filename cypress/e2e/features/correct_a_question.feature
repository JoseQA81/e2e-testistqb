Feature: Correction of a question with diferent answers

Scenario Outline: correct a question

Given the student is on the ISTQB exam page
When the student selects answer <selectedAnswer> on question <questionNumber>
And the student presses the button See Score on question <questionNumber>
Then the student should see the score message <expectedMessage> on question <questionNumber>

Examples:
    | questionNumber  | selectedAnswer  | expectedMessage                        |
    |  "3"            |  "A"            | "CORRECT! You have earned: 2 points"   |
    |  "3"            |  "B"            | "INCORRECT! You have earned: -1 points"|
    |  "3"            |  ""             | "Unanswered. You have earned: 0 points"|