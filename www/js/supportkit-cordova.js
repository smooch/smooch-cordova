var SupportKit = {

    init: function(settings, success, error) {
    //Initialization on Android must be done in Application Class.
        cordova.exec(success, error, 'SupportKitCordova', 'init', [settings]);
    },

    show: function(success, error) {
        cordova.exec(success, error, "SupportKitCordova", "show", []);
    },

    showConversation: function(success, error) {
        cordova.exec(success, error, "SupportKitCordova", "showConversation", []);
    },

    setUser: function(user, success, error) {
        cordova.exec(success, error, "SupportKitCordova", "setUser", [user]);
    },

    setUserProperties: function(properties, success, error) {
        cordova.exec(success, error, "SupportKitCordova", "setUserProperties", [properties]);
    },

    track: function(eventName, success, error) {
        cordova.exec(success, error, "SupportKitCordova", "track", [eventName]);
    },

    setDefaultRecommendations: function(recommendations, success, error) {
        cordova.exec(success, error, "SupportKitCordova", "setDefaultRecommendations", [recommendations]);
    },

    setTopRecommendation: function(recommendation, success, error) {
        cordova.exec(success, error, "SupportKitCordova", "setTopRecommendation", [recommendation]);
    }

};

module.exports = SupportKit;
