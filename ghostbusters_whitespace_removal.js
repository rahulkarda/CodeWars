/*
In this kata, strings represent buildings while whitespaces within those strings represent ghosts. So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!
If the building contains no ghosts, return the string: "You just wanted my autograph didn't you?"
*/

//Answer

function ghostBusters(building) {
    let spaces = 0;
    for(c of building){
        if(c === ' '){
            spaces += 1;
        }
    }
    if(spaces > 0){
      return building.split(' ').join(''); 
    }
    return "You just wanted my autograph didn't you?";
    
}