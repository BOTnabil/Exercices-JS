const box = document.getElementById("colorpad")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    box.style.backgroundColor = getRandomColor()
}

// document.addEventListener("keypress", function(event) {
//     if (event.keyCode == 38) {
//       alert('hi.');
//     }
//   });

// display none fait
// event clicker clavier add
// activer la random color des le debut 
// cloner le display none tout en le mettant en display flex 