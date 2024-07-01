Feature: Complete the exam and see the score ranking

Background:
Given the student is on the ISTQB exam page

Scenario: See the score ranking

Given the student enters the name "José Andrés"
    | questionNumber| selectedAnswer|
    |  1            |  B            |
    |  2            |  A            |
    |  3            |  A            |
    |  4            |  C            |
    |  5            |  C            |
    |  6            |  B            |
    |  7            |  A            |
    |  8            |  C            |
    |  9            |  B            |
    |  10           |  B            |
And the student presses see final score button
And the student presses see ranking button

Given the student enters the name "María Jesús"
    | questionNumber| selectedAnswer|
    |  1            |  C            |
    |  2            |  B            |
    |  3            |  C            |
    |  4            |  A            |
    |  5            |  A            |
    |  6            |  C            |
    |  7            |  B            |
    |  8            |  A            |
    |  9            |  C            |
    |  10           |  C            |
And the student presses see final score button
And the student presses see ranking button

Given the student enters the name "Alejandro"
    | questionNumber| selectedAnswer|
    |  1            |               |
    |  2            |               |
    |  3            |               |
    |  4            |               |
    |  5            |               |
    |  6            |               |
    |  7            |               |
    |  8            |               |
    |  9            |               |
    |  10           |               |
And the student presses see final score button
And the student presses see ranking button

Then a list should appear with all the students who have taken the exam
And their scores ordered from highest to lowest score
And the ranking should show:
    | username | score |
    | User1    | 20    |
    | User2    |-10    |
    | User3    | 0     |