// document.querySelector("button").addEventListener("click", handleClick)

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      break;
  }
};

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);

}


// object lesson 
// function HouseKeeper(name, yearsofExperience, spokenLanguages, hasWorkPermit) {
//   this.name = name;
//   this.yearsofExperience = yearsofExperience;
//   this.spokenLanguages = spokenLanguages;
//   this.hasWorkPermit = hasWorkPermit;
//   this.clean = function () {
//     alert('cleaning in progress...');
//   }

// }

// var housekeeperLana = new HouseKeeper("Lana", 29, ["Latvian", "English"], true);
// var housekeeperBona = new HouseKeeper("Bona", 65, ["Latvian", "Russian"], true);
// var housekeeperZeta = new HouseKeeper("Zeta", 52, ["Latvian", "English"], false);

// housekeeperBona.clean();

/* callback example  */
// function anotherAddEventListener(typeOfEvent, callback) {

//   var eventThatHappened = {
//     eventType: "keypress",
//     durationOfKeypress: 2,
//     key: "p"
//   }
//   if (eventThatHappened.eventType === typeOfEvent) {
//     callback(eventThatHappened);
//   }
// }


// anotherAddEventListener("keypress", function (event) {
//   console.log(event);
// });
// document.addEventListener("keypress", function (event) {
//   console.log(event);
// })