//дэлгэц
var IuController = (function(){

var Doclib ={
    inputType : ".add__type",
    inputDesc : ".add__description",
    inputValue : ".add__value",
    addBtn : ".add__btn"

}
return{
    getValue : function(){
        return{
            type : document.querySelector(Doclib.inputType).value,
            description : document.querySelector(Doclib.inputDesc).value,
           value : document.querySelector(Doclib.inputValue).value
        };
    },
    getDomString : function(){
        return Doclib;
    }
}
})();
//санхүү
var FinanceController = (function(){

})();
//программ холбох
var AppController =(function(FinanceController,IuController){

   

    var ctrlAddItem = function(){

        

console.log(IuController.getValue())
    }
var setUpEventListener = function(){
    var Domm = IuController.getDomString();

    document.querySelector(Domm.addBtn).addEventListener('click',function(){
        ctrlAddItem();
    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode===13 || event.which===13){
        ctrlAddItem();
        }
    });
}
return {
    init : function(){
        console.log('app called')
        setUpEventListener();
    }
};
   
})(FinanceController,IuController);

AppController.init();