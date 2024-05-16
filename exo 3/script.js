const boxes = document.querySelectorAll(".box")



boxes.forEach((box) => {
    box.addEventListener('click', function() {
        box.textContent = "X";
    })
})
// faire un if sur un booleen
// si true quand on clique inner html avec O
// si false avec X
// a chaque clique ca change le booleen, + change la couleur du txt