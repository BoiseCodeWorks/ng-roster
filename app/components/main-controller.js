app.controller('RosterController', function(){
    
    var rc = this;
    
    rc.roster = [];
    
    
    rc.addPlayer = function(newPlayer){
        rc.roster.push(newPlayer) //Adds the new player to the team roster
        rc.newPlayer = {}; //clears the form;
    }
    
    rc.removePlayer = function(index){
        rc.roster.splice(index, 1);
    }
    
    
    
    
})

