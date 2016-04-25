app.controller('TodoController', function(){
    
    var tc = this;
    
    tc.tasks = [];
    
    tc.addTask = function(newTask){
        tc.tasks.push(newTask);
        tc.newTask = {};
    }
    
    tc.acceptTask = function(task){
        task.accepted = true;
    }

    tc.removeTask = function(task, index){
        tc.tasks.splice(index, 1);
    }

})