Feature: Welcome the student

Scenario: Enter a name with less than 11 characters

Given the student is on the ISTQB exam page
When the student enters the name "José Andrés"
And press Send & start your exam button
Then the student should see the message "Welcome José Andrés to your ISTQB exam, good luck!"

Scenario: Enter a name longer than 11 characters

Given the student is on the ISTQB exam page
When the student enters the name "María Antonia"
And press Send & start your exam button
Then the student should see the message "Welcome María Anton to your ISTQB exam, good luck!"

Scenario: Enter an empty name

Given the student is on the ISTQB exam page
When the student does not enter any name
And press Send & start your exam button
Then the student should see the message "The name cannot be empty"