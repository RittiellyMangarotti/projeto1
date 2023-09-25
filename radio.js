const audio = document.getElementById('audio');

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = [
    'musicas/musica 1.mp3',
    'musicas/musica 2.mp3',
    'musicas/musica 3.mp3',
    'musicas/musica 4.mp3',
    'musicas/musica 5.mp3',
    'musicas/musica 6.mp3',
    'musicas/musica 7.mp3',
    'musicas/musica 8.mp3',
    'musicas/musica 9.mp3',
    'musicas/musica 10.mp3'
    
    
];

let currentSongIndex = 0;

function loadSong() {
    audio.src = songs[currentSongIndex];
}


function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audio.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
}

loadSong();


nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

