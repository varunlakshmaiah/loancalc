(function(window){
    'use strict';
    function define_library(){
        var Loancalc = {};

        var toMonth = function(Obj){
            if(Obj.type === "month")
          {
            return Obj.value;
          }
          else if (Obj.type === "year") {
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
            var p = Obj.principal;
            var i = decInterest(Obj.roi);
            var n = toMonth(Obj.tenure);
            var emi = 0;
                emi = (p*i*(Math.pow((1+i),n)))/(Math.pow((1+i),n)-1);
           return emi.toFixed(2);
        }

        Loancalc.tenure = function(Obj){
          var p = Obj.principal;
          var i = decInterest(Obj.roi);
          var n = 0;
          var emi = Obj.emi;
          var pbyi = emi/i;
              n = (Math.log(pbyi/(pbyi-p))/Math.log(1+i));
          return Math.round(n);
        }

      Loancalc.principal = function(Obj){
        var p = 0;
        var i = decInterest(Obj.roi);
        var n = toMonth(Obj.tenure);
        var emi = Obj.emi;
        var pbyi = emi/i;
            p = pbyi*(1-(1/(Math.pow(1+i,n))));
        return p.toFixed(2);
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
