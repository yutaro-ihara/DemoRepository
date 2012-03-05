var vibrate = {};
(function() {
    //var vibration = navigator.vibrate || navigator.mozVibrate || function(){};
    vibrate.on = function(n) {
        var array = [];
        for (var i=0;i<n;i++) {
            array.push(100*n);
            array.push(200);
        }
        navigator.mozVibrate(array);
        //vibration([100*n, 100, 100*n]);
    }
})();