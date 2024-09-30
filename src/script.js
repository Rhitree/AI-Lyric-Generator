function displayLyrics(response) {
    new Typewriter("#lyrics", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
});
}

function generateLyrics(event) {
    event.preventDefault();

let instructionsInput = document.querySelector(`#user-instructions`);
let apiKey = `b3a37c1584b0oatf80a196c74f3071cb`;
let prompt = `You are a talented pop song writer. Your mission is to generate a song with 2 verses, each with 4 lines, and a 4 line chorus in basic HTML. Separate each line with a </br> and separate the verses and chorus with </br> </br>.  Make sure to follow the user instructions. Do not include a title to the song. Sign the song with 'SheCodes AI' inside a <strong> element at the end of the song and NOT at the beginning`;
let context = `User instructions: Generate an English pop song about ${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let lyricsElement = document.querySelector("#lyrics");
lyricsElement.classList.remove(`hidden`);
lyricsElement.innerHTML = `<div class="generating">⏳ Generating a song about ${instructionsInput.value}</div>`;

axios.get(apiUrl).then(displayLyrics);
}

let lyricFormElement = document.querySelector("#lyric-generator");
lyricFormElement.addEventListener("submit", generateLyrics);