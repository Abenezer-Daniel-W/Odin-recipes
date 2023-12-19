function computer_choice(){
    return choices[Math.floor(Math.random()*3)]
}

function playround(user_choice){
    let comp_choice = computer_choice();
    console.log(comp_choice);
    console.log(user_choice)
    if (user_choice == computer_choice){
        score_tracker("draw");
    }
    else if (user_choice == "rock" && comp_choice == "paper"){
        comp_score +=1;
        score_tracker("comp win");
    }
    else if (user_choice == "paper" && comp_choice == "scissors"){
        comp_score +=1;
        score_tracker("comp win");
    }
    else if (user_choice == "scissors" && comp_choice == "rock"){
        comp_score +=1;
        score_tracker("comp win");
    }
    else if (user_choice == "rock" && comp_choice == "scissors"){
        usr_score +=1;
        score_tracker("user win");
    }
    else if (user_choice == "paper" && comp_choice == "rock"){
        usr_score +=1;
        score_tracker("user win");
    }
    else if (user_choice == "scissors" && comp_choice == "paper"){
        usr_score +=1;
        score_tracker("user win");
    }
}
function score_tracker(result){
    let temp = "";
    if (result == "user win"){
        display_usr_score.textContent = "user score: " + usr_score.toString();
    }
    else if( result == "comp win"){
        display_comp_score.textContent = "computer score: " +comp_score.toString();
        // display.textContent = "";
    }
    else if (result == "draw"){
        display.textContent = "it was a draw go again";
    }

}

function test(name){
    alert("hey "+ name)
}


let usr_score = 0;
let comp_score = 0;
let choices = ["rock", "paper", "scissors"];

const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissors");
const display_usr_score = document.querySelector("#user_scr");
const display_comp_score = document.querySelector("#comp_scr");
// const display= document.querySelector(".score");

btn_rock.addEventListener("click", () => playround("rock"));
btn_paper.addEventListener("click", () => playround("paper"));
btn_scissors.addEventListener("click", () => playround("scissors"));





