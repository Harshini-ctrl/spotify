// Selecting elements (DOM Manipulation)
const playButton = document.querySelector(".player-control-icon:nth-child(3)");
const progressBar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".curr-time");

// Variable
let isPlaying = false;

// Event Listener
playButton.addEventListener("click", toggleMusic);

// Function
function toggleMusic() {
    if (isPlaying) {
        playButton.style.opacity = "0.5";
        console.log("Music Paused");
    } else {
        playButton.style.opacity = "1";
        console.log("Music Playing");
    }

    isPlaying = !isPlaying;
}

// Progress Bar
progressBar.addEventListener("input", function () {
    currentTime.textContent = "00:" + progressBar.value;
});

// Hover Effect on Cards
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.backgroundColor = "#3a3a3a";
    });

    card.addEventListener("mouseleave", function() {
        card.style.backgroundColor = "#232323";
    });
});
