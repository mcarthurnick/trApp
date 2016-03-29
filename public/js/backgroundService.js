/**
 * Created by nickmac on 3/28/16.
 */
angular.module('trApp').service('BackgroundService', function() {
    var currentBackgroundClass = 'home-bg';
    return {

        setCurrentBg : function(class) {
        currentBackgroundClass = class;
        },

        getCurrentBg : function() {
            return currentBackgroundClass;
        }
    }
});