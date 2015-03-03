GoalContract.com
================

Purpose
-------

The purpose of this web application is to give people motivation to meet their goals by allowing the creation of a contract that will be locked in, and requiring a separate person to validate that their goals were achieved after the deadline happens. This is also meant to be a replacement for Development Plans that people will actually use.

License
-------

Copyright &copy; 2015-, [Drew Repasky].  Licensed under [Apache License, Version 2.0].


Getting Up & Running
--------------------

This project requires that you download and install [NodeJS].

Then you will need to run the following, to install Bower, which is used to get client-side dependencies like Angular

    npm install -g bower

Then run the following to install Grunt, which is a task-runner that is used here for linting and unit testing.

    npm install -g grunt

Get the code and install any dependencies:

    git clone git@bitbucket.org:drep/goal-contract.git
    npm install
    bower install

Start the project:

    npm start

Then you can simply open a browser to http://localhost:3000



Testing
-------

Run the following to run jshint and Jasmine specs. By default, this will watch for any Javascript changes you make, and will re-run those goals.

    grunt

A unit test report can be viewed here:

    open _SpecRunner.html

A code coverage report can be viewed here:

    open ./bin/coverage/index.html


Deployment
----------

This application is deployed to [Heroku] and runs at http://www.goalcontract.com/


Styles
------

This site uses a Twitter Bootstrap theme from http://bootswatch.com/flatly/


Todo List
---------

- [ ] Database backend + persist Goal Contract



[Drew Repasky]: https://www.linkedin.com/in/drewrepasky/
[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0.html
[NodeJS]: http://nodejs.org/
[Grunt]: http://gruntjs.com/
[Bower]: http://bower.io/ 
[Heroku]: https://www.heroku.com/home
