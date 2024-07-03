Feature: Complete exam and view final answers

Scenario: Answer multiple questions

Given the student is on the ISTQB exam page
When the student answers questions:
    | questionNumber| selectedAnswer|
    |  1            |  B            |
    |  2            |  A            |
    |  3            |               |
    |  4            |  C            |
    |  5            |  B            |
    |  6            |  A            |
    |  7            |               |
    |  8            |  B            |
    |  9            |  B            |
    |  10           |               |
And the student presses button see the final score
Then the final score should be displayed
Then the final score is "5"