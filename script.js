console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");


let songs = [
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/6.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/7.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/8.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/9.mp3", coverPath: "covers/1.jpg"},
]
// audioElement.play();

// Handle Play/pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})