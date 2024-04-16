/* let Dave = 0
let upgrade = 1
let doublecost
let getID = "document.getElementById"
let cost = 100

document.getElementById("doublebutton").onclick = function(){
    if (Dave > 50){
        upgrade = 2 * upgrade
        Dave = (Dave - Dave / 2)
        document.getElementById("number").innerHTML = Dave
    }
    else {
        document.getElementById("!").innerHTML = "You need " + -(Dave - 50)  + " more points to unlock this item."
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