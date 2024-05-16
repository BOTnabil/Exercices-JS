const carre = document.querySelector(".carre");
const objectCss = window.getComputedStyle(carre);


carre.addEventListener('click', function() {
    alert("Class : carre\n" +
    "- Background Color : " + objectCss.backgroundColor + "\n" +
    "- Color : " + objectCss.color + "\n" +
    "- Height : " + objectCss.height + "\n" +
    "- Width : " + objectCss.width + "\n" +
    "- Display : " + objectCss.display + "\n" +
    "- Font : " + objectCss.fontFamily + " (" + objectCss.fontSize + ")");
}
);