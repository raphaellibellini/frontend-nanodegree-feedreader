# Feed Reader Testing 

In this project several tests were created for a feed reader application, using **Jasmine**.


## Jasmine

Jasmine is a JavaScript test library that supports Behavior Driven Development (BDD), it is used in conjunction with Test Driven Development (TDD).

In this project I used the branch 2.2 of the Jasmine.

The tests are in the file "jasmine/spec/feedreader.js".
 
To test something with Jasmine you can use: describe, it and expect. Below you have a brief description of each of them:
-describe (string, function): name of the scope of the test
-it (string, function): test name
-expect (current): event/function call that will be tested

The following tests were performed:
-allFeeds variable has been defined and it is not empty
-Each feed has a URL defined
-Each feed has a name defined
-The menu element is hidden by default
-The menu changes visibility when the menu icon is clicked
-There is at least a single .entry element within the .feed container
-When a new feed is loaded, the content actually changes

The tests are shown at the bottom of the HTML file.

[Jasmine documentation](http://jasmine.github.io)