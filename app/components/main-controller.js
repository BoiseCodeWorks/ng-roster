app.controller('MainController', function(){
    
    var mc = this;
    
    mc.roster = [];
    
    
    mc.addPlayer = function(newPlayer){
        mc.roster.push(newPlayer) //Adds the new player to the team roster
        mc.newPlayer = {}; //clears the form;
    }
    
    mc.removePlayer = function(index){
        mc.roster.splice(index, 1);
    }
    
    
    
    
})

