# Example webdriverio and cucumber project

This project performs a range of actions on the sauce demo website. It demonstrates a very reusable page object model and includes some nice example getters to get formatted data from multiple elements.

Given that this is the first time I interacted with wdio v5, I had some good fun figuring out what the idiomatic way is to iterate over the results of a `$$` call, since methods like elementIdElement are no longer available. Things could definitely get DRY-ed up a little bit more, but given that this is built as a coding challenge for a particular job interview process, I will leave this as an exercise for the reader.

## Installation instructions

Clone this repo and perform `yarn install`. It is assumed you have an up to date version of nodejs and yarn installed.

## Running tests
You can run tests by running `yarn test`
