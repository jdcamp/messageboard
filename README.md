# message-board

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Planning

1. Configuration/dependencies
  * Bootstrap
  * SASS
  * emberfire
  * Question model: {author=>'Some Name', question=>"The question being asked", notes=>"additional information to help users answer the question" answers=>hasMany("answer")}
  * Answer model: {author=>'Some Name', answer=>"The answer to the question", question=>belongsTo=>("question")}

2. User Stories
  * As a user, I can view a list of questions.
  * As a user, I can a submit a question.
  * As a user, I can delete a question.
  * As a user, I can update a question.
  * As a user, I view a single question with the questions answers.
  * As a user, I can answer a question.
  _At the moment there is no login or unique users. Any user can delete and edit any question_

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for index
  * Template/html page for application
  * Template/html page for question


4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor
  * Delete unused code
  * update README awesome

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
