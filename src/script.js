function generateLyrics(event) {
    event.preventDefault();

new Typewriter("#lyrics", {
    strings: ["You've got to get up every morning, with a smile on your face and show the world, all the love in your heart."],
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

let lyricFormElement = document.querySelector("#lyric-generator");
lyricFormElement.addEventListener("submit", generateLyrics);

