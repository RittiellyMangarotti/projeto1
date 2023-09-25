const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = [
    'radiomp3/'
    'radiomp3/Como Nossos Pais(MP3_160K).mp3',
    'radiomp3/EVIL(MP3_160K).mp3',
    'radiomp3/Foi Mal(MP3_160K).mp3',
    'radiomp3/Giant Woman (feat. Zach Callison)(MP3_160K).mp3',
    'radiomp3/Greta Van Fleet - Light My Love (Audio)(MP3_160K).mp3',
    'radiomp3/Infinity Pools(MP3_160K).mp3',
    'radiomp3/The Principal(MP3_160K).mp3',
    'radiomp3/The Technicolors - Howl (Official Music Video)(MP3_160K).mp3',
    'radiomp3/URIAS - DANGER ( OFFICIAL VISUALIZER)(MP3_160K).mp3',
    'radiomp3/Wait a Minute_(MP3_160K).mp3',
];

let currentSongIndex = 0;

function loadSong() {
    audio.src = songs[currentSongIndex];
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
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

playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

