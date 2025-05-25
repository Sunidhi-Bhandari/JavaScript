// Create a Snake Water Gun game. The Game should ask you to enter S, W, G. The computer should be able to generate random S, W, G.
// Declare winner using alert. Use confirm and prompt when required

let playAgain = true;

while (playAgain) {
  let user = prompt("Enter S for Snake, W for Water or G for Gun");

  user = user.toUpperCase();

  if (!["S", "W", "G"].includes(user)) {
    alert("Invalid Input! Please Enter S W or G");
  }

  let cpu = Math.floor(Math.random(3));
  let cpu1 = ["S", "W", "G"][cpu];
  let winner = "";

  if (cpu1 === user) {
    winner = "Draw";
  } else if (cpu1 == "S" && user == "W") {
    winner = "CPU";
  } else if (cpu1 == "S" && user == "G") {
    winner = "User";
  } else if (cpu1 == "W" && user == "S") {
    winner = "User";
  } else if (cpu1 == "W" && user == "G") {
    winner = "CPU";
  } else if (cpu1 == "G" && user == "S") {
    winner = "CPU";
  } else if (cpu1 == "G" && user == "W") {
    winner = "User";
  }

  alert(`CPU: ${cpu1} | User: ${user} \n Winner is: ${winner}`);

  playAgain = confirm("Do you want to play again?");
}
