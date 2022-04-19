# Readme.md

# Before the interview begins

Fork this repository and clone it to your environment of choice.

## The Problem

Based on the premise of the order matching algorithm we worked on in the interview starter, we want to build an order form that customers can use to view the available carbon removals, select how many they'd like to purchase, and then submit a request for a purchase to the server, which will then update the front-end based on the result from the server.

### Part 1

Given the result from a query to the server, render a list of the available supply of carbon removals.

### Part 2

Create a form with an input for customers to select how many tonnes of carbon removals they want to purchase, and a button to submit the request.

### Part 3

After the customer has submitted their order, update the list of available supply based on the response from the server.

### Extension 1

Extract the front-end interfaces you've built into components.

### Extension 2

Use the Context API to keep track of the list of available supply.

### Extension 3

Modify the graphql to query additional data about the location of a carbon removal from the server, and allow customers to filter their view of available supply based on location.

### Extension 4

Modify the submit handler to include the desired location for carbon removals, and then update the back-end code to filter the supply based on the chosen location.

### Extension 5

Write some tests for your front-end code.
