//BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id,description,value){
        this.id= id;
        this.description=description;
        this.value = value;
    };

    var Income = function(id,description,value){
        this.id= id;
        this.description=description;
        this.value = value;
    };

    var data = {
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    }
    return {
        addItem: function(type,des,val){
            var newItem,ID;
            //Create new ID
            if(data.allItems[type].length>0){
                ID=data.allItems[type][data.allItems[type].length-1].id+1;
            }
            else{
                ID=0;
            }
           
            
            //Create new item based on income or expense type
            if(type === 'exp'){
                newItem = new Expense(ID,des,val);
            }
            else if(type === 'inc'){
                newItem = new Income(ID,des,val);
            }
            //Push it into data structure
            data.allItems[type].push(newItem);
            //Return the new element
            return newItem;
        }
    }

 
})();

//UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn'

    }
    return{
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
        },
        getDOMstrings:function(){
            return DOMstrings;
        }
    }

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){

    var setupEventListeners = function(){
        
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
    };

    
    var ctrlAddItem  = function(){
        var input, newItem;
        //1. Get the input data
        input = UICtrl.getInput();

        //2. Add the item to budget controller
        newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        //3. Add item to the UI
        
        //4. Calculate the budget
        
        //5. Display the budget on the UI
        
  };
  return {
      init:function(){
          console.log('Application has started.')
          setupEventListeners();
      }
  }
    
})(budgetController,UIController)

controller.init();