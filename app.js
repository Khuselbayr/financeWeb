//дэлгэц
var IuController = (function(){

})();
//санхүү
var FinanceController = (function(){

})();
//программ холбох
var AppController =(function(FinanceController,IuController){

    var ctrlAddItem = function(){
console.log('print');
    }

    document.querySelector(".add__btn").addEventListener('click',function(){
        ctrlAddItem();
    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode===13 || event.which===13){
        ctrlAddItem();
        }
    });
   
})(FinanceController,IuController);