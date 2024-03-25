
// Script para controle de vídeos
const videoFrame = document.getElementById("videoFrame");
const prevVideoBtn = document.getElementById("prevVideo");
const nextVideoBtn = document.getElementById("nextVideo");

const videoPlaylist = [
    "https://www.youtube.com/embed/videoseries?list=PLnx4ioejmfR2DPynEz42Rohan5mZeQFGd", // Video 1
    "https://www.youtube.com/embed/videoseries?list=PLnx4ioejmfR2DPynEz42Rohan5mZeQFGd", // Video 2
    // Adicione mais URLs de vídeos conforme necessário
];

let currentVideoIndex = 0;

// Função para carregar o vídeo atual
function loadVideo(index) {
    videoFrame.src = videoPlaylist[index];
}

// Carregar o primeiro vídeo ao carregar a página
loadVideo(currentVideoIndex);

// Event listeners para botões de controle de vídeo
prevVideoBtn.addEventListener("click", () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadVideo(currentVideoIndex);
    }
});

nextVideoBtn.addEventListener("click", () => {
    if (currentVideoIndex < videoPlaylist.length - 1) {
        currentVideoIndex++;
        loadVideo(currentVideoIndex);
    }
});

document.getElementById("menu").addEventListener("click", function(event) {
    var target = event.target;
    if (target.tagName === "A") {
        // Impede o comportamento padrão do link para evitar a recarga da página
        event.preventDefault();

        // Obtém o id da seção a ser navegada a partir do href do link
        var sectionId = target.getAttribute("href");

        // Obtém o elemento da seção de destino
        var section = document.querySelector(sectionId);

        // Verifica se a seção foi encontrada
        if (section) {
            // Rola a página para a seção de destino
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
});
