console.log("Welcome to Spotify");

// Inititalize the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    {songName: "Salam-E-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-E-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-E-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-E-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-E-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
]

// audioElement.play();

// Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})
// Listen to events

myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
}
)

// document.addEventListener('time')