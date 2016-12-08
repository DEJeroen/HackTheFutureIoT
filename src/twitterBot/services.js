angular.module('twitterApp.services', []).factory('twitterService', function($q) {

    var authorizationResult = false;

    return {
        initialize: function() {
            //initialize OAuth.io with public key of the application
            OAuth.initialize('1AkR933Z6f3kRaQI6kxOueTuoLM', {
                cache: true
            });
            //try to create an authorization result when the page loads,
            // this means a returning user won't have to click the twitter button again
            authorizationResult = OAuth.create("twitter");
            console.log(authorizationResult);
        },
        isReady: function() {
            return (authorizationResult);
            console.log(authorizationResult);
        },
        connectTwitter: function() {
            var deferred = $q.defer();
            OAuth.popup("twitter", {
                cache: true
            }, function(error, result) {
                // cache means to execute the callback if the tokens are already present
                if (!error) {
                    authorizationResult = result;
                    deferred.resolve();
                } else {
                    console.log(error);
                    console.log(result);    
                    console.log("niet gelukt");

                }
            });
            return deferred.promise;
        },
        clearCache: function() {
            OAuth.clearCache('twitter');
            authorizationResult = false;
        },
        getLatestTweets: function(maxId) {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();
            var url = '/1.1/statuses/home_timeline.json';
            if (maxId) {
                url += '?max_id=' + maxId;
            }
            var promise = authorizationResult.get(url).done(function(data) {
                // https://dev.twitter.com/docs/api/1.1/get/statuses/home_timeline
                // when the data is retrieved resolve the deferred object
                deferred.resolve(data);
            }).fail(function(err) {
                deferred.reject(err);
            });
            //return the promise of the deferred object
            return deferred.promise;
        },

        postTweet: function(maxId){

            var deferred = $q.defer();
            //var url = '1.1/statuses/update.json?status=Maybe%20he%27ll%20finally%20find%20his%20keys.%20%23peterfalkadf';
            var url = '1.1/statuses/update.json?status=@craftworkz_co%20%23HumansOfInternet%20%23htf2016%20ALIEN%20DETECTED%20EVERYONE%20LOSE%20YOUR%20MINDS!'
            console.log(maxId, url);
            if (maxId) {
                url += '?max_id=' + maxId;
            }
            var promise = authorizationResult.post(url).done(function(data) {
                // https://dev.twitter.com/docs/api/1.1/get/statuses/home_timeline
                // when the data is retrieved resolve the deferred object
                deferred.resolve(data);
            }).fail(function(err) {
                deferred.reject(err);
            });

        }
    }
});