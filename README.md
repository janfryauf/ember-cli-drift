# Ember-cli-drift
[![Build Status](https://travis-ci.org/FreddieV4/ember-cli-drift.svg?branch=master)](https://travis-ci.org/FreddieV4/ember-cli-drift)

This addon was made to be able to use the [Drift](https://www.drift.com/) messaging app within Ember.js applications.

## Installation

* `ember install ember-cli-drift`

## Usage

You'll need to set up a Drift account first. Once you've done that, you'll be taken to a page that allows you to copy and paste Javascript code into the `<head>` of your app. Rather than doing that, you'll need to grab the token from the bottom 1 or 2 lines, and use that as your `DRIFT_TOKEN` environment variable. If you load the environment variable correctly, i.e. add it to `config vars` in a Heroku deployment app, then you should be able to run the app with Drift.

* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Collaborators

[Alex LaFroscia](https://github.com/alexlafroscia)