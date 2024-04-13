let Dave = 0
let upgrade = 1
let doublecost
let getID = "document.getElementById"
let cost = 100

document.getElementById("doublebutton").onclick = function(){
    if (Dave > 50){
        /* not working
        upgrade = 2 * upgrade
        if (Dave > cost){
            doublecost = cost / 2
        } 
        else if (Dave > 2 * cost){
            doublecost = 2 * cost / 2
        }
        else if (Dave > 3 * cost){
            doublecost = 3 * cost / 2
        }
        else if (Dave > 5 * cost){
            doublecost = 5 * cost / 2
        }
        else if (Dave > 6 * cost){
            doublecost = 6 * cost / 2
        }
        else if (Dave > 7 * cost){
            doublecost = 7 * cost / 2
        }
        else if (Dave > 8 * cost){
            doublecost = 8 * cost / 2
        }
        else if (Dave > 9 * cost){
            doublecost = 9 * cost / 2
        }
        else if (Dave > 10 * cost){
            doublecost = 10 * cost / 2
        }
        */


        Dave = Dave - Dave / 2
        document.getElementById("number").innerHTML = Dave
    }
    else {
        document.getElementById("!").innerHTML = "You need " + -(Dave - 50)  + " more points to purchase this item."
    }
}


document.getElementById("dave").onclick = function(){
    //* this is the thing that allows the number to get +1.
    //* as x is declared above as 1, but it is a variable
    //* so that we can change it with the upgrades.
    Dave = Dave + upgrade
    document.getElementById("number").innerHTML = Dave
}


points = document.getElementById("number").value
points = Number(document.getElementById("number").value);


document.getElementById("pbutton").onclick = function(){
    document.getElementById("points").innerHTML = "You have " + Dave + " points." 
    console.log("working")
}

/*
document.getElementById("doublebutton").onclick = function(){
    if (Dave > 50){
        Dave = Dave - 50
        document.getElementById("number") = Dave
        x = 2 * x
    }
    else{
        x = 1
    }
}
*/