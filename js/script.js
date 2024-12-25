const colores = ["null",
    "#FFD700", 
    "#FFFFFF", "#FFFFFF", 
    "#00FF00", "#00FF00", "#00FF00", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#1E90FF", "#1E90FF", "#1E90FF", "#1E90FF", "#1E90FF", 
    "#FFD700", "#FFD700", "#FFD700", "#FFD700", "#FFD700", "#FFD700",
    "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF",
    "#00FF00", "#00FF00", "#00FF00","#00FF00", "#00FF00", "#00FF00","#00FF00", "#00FF00", 
];

const tiempo = ["null",
    ".2s",
    ".3s", ".3s",
    ".4s", ".4s", ".4s",
    ".5s", ".5s", ".5s", ".5s",
    ".6s", ".6s", ".6s", ".6s", ".6s",
    ".7s", ".7s", ".7s", ".7s", ".7s", ".7s",
    ".8s", ".8s", ".8s", ".8s", ".8s", ".8s", ".8s",
    ".9s", ".9s", ".9s", ".9s", ".9s", ".9s", ".9s", ".9s"];


for (let i = 1; i <= 36; i++) {

    let foco = ".a" + i;
    let a = document.querySelector(foco);
    a.style.setProperty("animation-delay", tiempo[i]);

    a.style.setProperty("--color", colores[i]);
    a.style.setProperty("background", "var(--color)");

}

btn = document.getElementById("container")
const musica = new Audio("./audio/audio.mp3");
let llave = 1;

btn.addEventListener("click", (e) => {
    if (llave == 1) {
        musica.play();
        llave = 0;
        btn.classList.add("bx-pause")
        btn.classList.remove("bx-play")
    } else {
        musica.pause();
        llave = 1;
        btn.classList.remove("bx-pause")
        btn.classList.add("bx-play")
    }
});
