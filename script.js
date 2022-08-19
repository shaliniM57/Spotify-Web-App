console.log("Welcome to ShaaNeelu Spotify");

// Iitialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let cgif = document.getElementById('cgif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Maiyyaa-Mainu", filePath: "songs/1.mp3", coverPath: "Spotify Web App\maiyya Mainu.jpg" },
    { songName: "Rataan Lambiyaan", filePath: "songs/2.mp3", coverPath: "Spotify Web App\Raatan-Lambiyan.jpg" },
    { songName: "Saari ki Saari", filePath: "songs/3.mp3", coverPath: "Spotify Web App\Saari-ki-Saari_Darshan.jpg" },
    { songName: "Baarish Lete Aana", filePath: "songs/4.mp3", coverPath: "Spotify Web App\Baarish-Lete-Aana.jpg" },
    { songName: "Nit Nit", filePath: "songs/5.mp3", coverPath: "Spotify Web App\Nit-Nit-Song icon.jpg" },
    { songName: "Choti Choti Gal", filePath: "songs/6.mp3", coverPath: "Spotify Web App\choti choti gal.jpg" },
    { songName: "Phir Miloge Na", filePath: "songs/7.mp3", coverPath: "Spotify Web App\Phir miloge na icon.jpg" }

]

/*songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0] = songs[i].coverPath;
    element.getElementsByClassName("songName")[1].innerText = songs[i].songName;
})*/

// audioElement.play()

// Handle Play-Pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        cgif.style.opacity = 1;// Wo gif dikhna shuru ho jaega
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;   // Matlab wo gif dikhna ab band ho jaega
        cgif.style.opacity = 0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', () => {
    //Update seekbar
    
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    /*myProgressBar.value = progress;*/
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// Listen to event
// Matlab time update ke liye ham kya kya krenge


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        console.log(songs[songIndex].songName);
        gif.style.opacity = 1;
        cgif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
