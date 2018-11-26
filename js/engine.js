/* Variables we need for the game */
var choices = ["rock", "paper", "scissors", "lizard", "spock"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;
var play_you = '';
var play_machine = '';
var verdict = '';
var fun_verdict = '';

/* What button value is being returned on click for the human move and who wins when compared to the machine move?*/
$('button').click(function(event) {
  play_you = this.getAttribute("value");
  console.log('human' + ' played ' + play_you);
  $("#play_you").text(play_you);
  play_machine = machine_move();
  whoWins(play_you, play_machine);
  $("#verdict").text(verdict);
  $("#fun_verdict").text(funVerdict);
});

/* What move did the machine make?*/
function machine_move() {
  play_machine = choices[Math.floor(Math.random() * (1 + 4 - 0) + 0)];
  console.log('machine' + ' played ' + play_machine);
  $("#play_machine").text(play_machine);
  return play_machine;
}

function whoWins(you, machine) {
  verdict = 'lose';
  funVerdict = 'You lose! Machines will take over your world & feast on your tiny brain';
  if (you == machine) {
    verdict = 'draw';
      funVerdict = 'You are such a pair of losers. The planet is doomed!';
    } else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
    funVerdict = 'SMASHES';
  } else if ((you == "rock") && (machine == "lizard")) {
    verdict = 'win';
      funVerdict = 'CRUSHES';
  } else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
      funVerdict = 'COVERS';
  } else if ((you == "paper") && (machine == "spock")) {
    verdict = 'win';
      funVerdict = 'DISPROVES';
  } else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
      funVerdict = 'CUTS';
  } else if ((you == "scissors") && (machine == "lizard")) {
    verdict = 'win';
      funVerdict = 'DECAPITATES';
  } else if ((you == "lizard") && (machine == "paper")) {
    verdict = 'win';
      funVerdict = 'EATS';
  } else if ((you == "lizard") && (machine == "spock")) {
    verdict = 'win';
      funVerdict = 'POISONS';
  } else if ((you == "spock") && (machine == "rock")) {
    verdict = 'win';
      funVerdict = 'VAPORIZES';
  } else if ((you == "spock") && (machine == "scissors")) {
    verdict = 'win';
      funVerdict = 'SMASHES';
  }

  switch (verdict) {
    case 'win':
      won++;
      $("#game_won").text(won);
      break;
    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;
    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }
}

$("button").on("click", function() {
   $("body").scrollTop(0);
});



// Old Code
/*  if ( verdict == 'win') {
    won++;
    $("#game_won").text(won);
  } else if  ( verdict == 'lose') {
    lost++;
    $("#game_lost").text(lost);
  } else if  ( verdict == 'draw') {
    draw++;
    $("#game_draw").text(draw);
  }

  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);
}*/

/*

  /*
  $("#rock").click(function(event) {
    var play_you = 'rock';
    $("#play_you").text(play_you);
    var play_machine = computer_move();
    compare(play_you, play_machine);
  });

  $("#paper").click(function(event) {
    var play_you = 'paper';
    $("#play_you").text(play_you);
    var play_machine = computer_move();
    compare(play_you, play_machine);
  });

  $("#scissors").click(function(event) {
    var play_you = 'scissors';
    $("#play_you").text(play_you);
    var play_machine = computer_move();
    compare(play_you, play_machine);
  });*/
