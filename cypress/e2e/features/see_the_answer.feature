Feature: See the Answer

Scenario: Select a valid answer

Given the student is on the ISTQB exam page
When the student selects answer "B" on question "1"
And the student presses the button See Answer on question "1"
Then the student should see the answer message "Correct answer is: B" on question "1"
When the student presses the button See Score on question "1"
Then the student should see the score message "CORRECT! You have earned: 2 points" on question "1"