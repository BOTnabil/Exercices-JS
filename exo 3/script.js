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
        }
        else {
            box.textContent = "X";
            box.style.color ="red"
            boolean = true
        } 

        if (compteur == 9) {
            txt.textContent = "Partie terminée"
        } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8){
            txt.textContent = "C'est au tour de X"
        } else {
            txt.textContent = "C'est au tour de O"
        }
    },{once:true})
    
})

