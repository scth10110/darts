var players_ready = null;
var score_player1=501;
var score_player2=501;
var players_turn =true;


function sayHello(){
    alert("Hello There");
}

function submit_btn(){
    var name_p1 = document.getElementById("p1_input").value;
    var name_p2 = document.getElementById("p2_input").value;
    // alert(name_p2 + " : " + name_p1);

    if(name_p1 == "" || name_p2 == ""){
        alert(name_p1 + name_p2 + "missing name");
    }
    else{
        players_ready=true;
        document.getElementById("p1_name").append(name_p1);
        document.getElementById("p2_name").append(name_p2);
        document.getElementById("p1_score").append(score_player1);
        document.getElementById("p2_score").append(score_player2);
        clear_inputs();
    }
}


function clear_inputs(){
    document.getElementById("p1_input").value="";
    document.getElementById("p2_input").value="";
}

function darts(){
    if (players_turn==true) {
        var scorep1=document.getElementById("p1_score").value;
        var getinputfield = getinputfield1();
        var output =  getScore1() - getinputfield1();
        document.getElementById("p1_score").innerHTML = output;
    } else {
        alert("Player2");
    }
}


function getinputfield1(){
    var inputfield1 = document.getElementById("p1_input").value;
    var output = parseInt(inputfield1);
    return output;

}


function getinputfield2(){
    var inputfield2 = document.getElementById("p2_input").value;
    var output = parseInt(inputfield2);
    return output;
}


function getScore1(){
    var score1 = document.getElementById("p1_score").value;
    var output = parseInt(score1);
    return output;   
}


function getScore2(){
    var score2 = document.getElementById("p2_score").value;
    var output = parseInt(score2);
    return output;   
}