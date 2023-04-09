// Define game recommendations for each hobby
var games = {
    "Sports": ["FIFA", "NBA 2K", "Madden NFL", "F1 2021", "PGA Tour 2K21"],
    "Action": ["Grand Theft Auto V", "Call of Duty: Black Ops Cold War", "Resident Evil Village", "Far Cry 6", "Assassin's Creed Valhalla"],
    "Puzzle": ["Tetris Effect: Connected", "Portal 2", "The Witness", "Sokoban", "The Room Four"],
    "Strategy": ["Civilization VI", "Total War: Three Kingdoms", "Age of Empires IV", "Company of Heroes 2", "Europa Universalis IV"],
    "Racing": ["Forza Horizon 5", "Project Cars 3", "Dirt 5", "Assetto Corsa Competizione", "Need for Speed: Heat"],
    "Adventure": ["The Legend of Zelda: Breath of the Wild", "Uncharted 4: A Thief's End", "Death Stranding", "Red Dead Redemption 2", "Horizon Zero Dawn"],
    "Social": ["Among Us", "Fall Guys: Ultimate Knockout", "Phasmophobia", "Jackbox Party Pack 8", "Overcooked! 2"],
    "Horror": ["Silent Hill 2", "Dead Space 2", "Until Dawn", "Outlast", "Amnesia: Rebirth"]
  };
  
  // Add click event listener to each hobby
  var hobbies = document.querySelectorAll("li");
  for (var i = 0; i < hobbies.length; i++) {
    hobbies[i].addEventListener("click", function() {
      var hobby = this.textContent;
      var gameList = games[hobby];
      var gameStr = "";
      for (var j = 0; j < gameList.length; j++) {
        gameStr += gameList[j] + "\n";
      }
      alert("Here are some game recommendations for " + hobby + ":\n\n" + gameStr);
    });
  }
  