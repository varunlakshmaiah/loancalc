(function(window){
    'use strict';
    function define_library(){
        var Loancalc = {};        
        Loancalc.test = function(){
            console.log("Loancalc Working");
        }

        return Loancalc;
    }

    //define globally if it doesn't already exist
    if(typeof(Loancalc) === 'undefined'){
        window.Loancalc = define_library();
    }
    else{
        console.log("Loancalc already defined.");
    }
})(window);
