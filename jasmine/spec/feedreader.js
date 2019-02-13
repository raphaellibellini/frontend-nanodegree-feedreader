/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* This test to make sure that the allFeeds variable 
         * has been defined and that it is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', function() {
            for(const feed of allFeeds) {
                let feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
            }
        });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
            for(const feed of allFeeds) {
                let feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function() {
        /* In this test I get the 'body' and check 
         * if it has the 'menu-hidden' class
         * responsible for hiding the menu. 
         * This test check if the menu is hidden by default.
         */
        it('menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* I detect when the '.menu-icon-link' is first clicked, 
          * which is when I hope it does not have the 'menu-hidden' class. 
          * Already in the second click, the expected is that it has the class 'menu-hidden'. 
          * In this test it will be checked if the menu visibility changes 
          * when '.menu-icon-link' is clicked.
          */
        it('menu changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

        

    describe('Initial Entries', function() {
        /* loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* This test check if there is at least
         * a single .entry element within the .feed container 
         * when the loadFeed function is called and completes its work.  
         * Therefore, I used the selector '.feed .entry' to select the elements.  
         * This type of selection uses the descending selector technique.
         * To check if there is at least one '.feed .entry' element, 
         * I checked that the size of the '.feed .entry' is greater than 0.
         */
        it('there is at least one .entry element in the .feed container', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    })
        

    describe('New Feed Selection', function() {
        let feed;
        let newFeed;

        // Load the two feed that will be compared
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        /* This test checks if feed content changes
         * when a new feed loads.
         */
        it('the content actually changes', function (done) {
            expect(feed).not.toEqual(newFeed);
            done();
        });
    });
}());
