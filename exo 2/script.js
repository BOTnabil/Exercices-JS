const boxes = document.querySelectorAll(".box")

boxes.forEach((box) => {
    box.addEventListener('click', function() {
        box.classList.toggle("red")
    })
})
