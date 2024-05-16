const boxes = document.querySelectorAll(".box")
const txt = document.getElementById("txt")
let boolean = false
let compteur = 0

boxes.forEach((box) => {
    box.addEventListener('click', function() {

        compteur++

        if (boolean == true){
            box.textContent = "O"
            box.style.color ="green"
            boolean = false
            txt.textContent = "C'est au tour de X"
        }
        else {
            box.textContent = "X";
            box.style.color ="red"
            boolean = true
            txt.textContent = "C'est au tour de O"
        } 

        if (compteur == 9) {
            txt.textContent = "Partie terminée"
        }
    },{once:true})
    
})

