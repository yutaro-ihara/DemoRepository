var vibrate = {};
(function() {
    var vibration = navigator.vibrate ? function(n){navigator.vibrate(n);} : navigator.mozVibrate ? function(n){navigator.mozVibrate(n)} : function(){};
    vibrate.on = function(n) {
        var array = [];
        for (var i=0;i<n;i++) {
            array.push(100*n);
            array.push(200);
        }
        vibration([100*n, 100, 100*n]);
    }
})();