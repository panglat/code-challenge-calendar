# code-challenge-calendar

The goal of this exercise is to create a demo reminder application using React

## Demo

This a link to a demo of this app: [Calendar App](https://panglat.github.io/code-challenge-calendar/).

## How to install the app

Once the repository is cloned, it is needed to install the dependencies in the local node_modules folder:

`npm install`

## How to run the app

The following command starts the app:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run tests

The following command launches the test runner in the interactive watch mode.

`npm test`

## Calendar page

![Calendar](docs/images/01.png 'Calendar')
This page shows a calendar with the current month. The user can go to the previous month clicking the top left arrow or to the next month clicking the top right arrow.

## Create a new reminder

The user clicks the day where they want to create a reminder, and a modal is displayed.
![ReminderModal](docs/images/02.png 'Reminder modal')

Once the user fills the modal, they save the reminder clicking the Save button.
![ReminderModal](docs/images/03.png 'Reminder modal')

The user checks the current weather in the city clicking the Weather button.
The user can change the color using the color picker.
![ReminderModal](docs/images/04.png 'Reminder modal')
![Calendar](docs/images/05.png 'Calendar')

The user creates the reminder clicking the Save button or they can skip the reminder creation clicking the Cancel button.
![Calendar](docs/images/06.png 'Calendar')

## Update an existing reminder

The user can update an existing reminder clicking it in the calendar.
![ReminderModal](docs/images/07.png 'Reminder modal')
The user updates an existing reminder clicking the Save button or they can skip it by clicking the Cancel button.

## Delete an existing reminder

The user can delete an existing reminder clicking it in the calendar and once the modal appears, pressing the Delete button in the modal.
![ReminderModal](docs/images/07.png 'Reminder modal')

## Delete all existing reminders

The user can delete all existing reminders clicking Delete All Reminders link at the top of the page, below the Header.
![Calendar](docs/images/10.png 'Calendar')
