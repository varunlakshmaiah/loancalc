(function(window){
    'use strict';
    function define_library(){
        var Loancalc = {};

        var toMonth = function(Obj){
            if(Obj.name === "month")
          {
            return Obj.value;
          }
          else if (Obj.name === "year") {
              return Obj.value*12;
          }

        }

        var decInterest = function(value){
          return ((value/100)/12);
        }

        Loancalc.test = function(){
            console.log("Loancalc Working");
        }

        Loancalc.principal = function(Obj){

        }

        Loancalc.emi = function(Obj){
          console.log(Obj);
            var p = Obj.principal;
            var i = decInterest(Obj.roi);
            var n = toMonth(Obj.tenure);
            var emi = 0;
                emi = (p*i*(Math.pow((1+i),n)))/(Math.pow((1+i),n)-1);
           return emi.toFixed(2);
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
