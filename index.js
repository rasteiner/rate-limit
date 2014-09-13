module.exports = function(fn) {
    var lastCall = 0;
    var interval = 0;

    var executioner = function() {
        var now = Date.now();
        if(now - lastCall > interval) {
            lastCall = now;
            fn.apply(this, arguments);
        }
    };

    executioner.limit = function(ms) {
        interval = ms;
        return executioner;
    };

    return executioner;
};
