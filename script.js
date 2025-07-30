const songs = [
  {
    title: "Eleven",
    artist: "IVE",
    src: "Music/IVE 'ELEVEN' Lyrics (아이브 ELEVEN 가사) (Color Coded Lyrics) copy.mp3",
    cover: "Images/eleven.jpg"
  },
  {
    title: "Heya",
    artist: "IVE",
    src: "Music/IVE 아이브 '해야 (HEYA)' MV (1).mp3",
    cover: "Images/heya.jpg"
  },
   {
    title: "Love Dive",
    artist: "IVE",
    src: "Music/IVE 'LOVE DIVE' Lyrics (아이브 LOVE DIVE 가사) (Color Coded Lyrics).mp3",
    cover: "Images/lovedive.jpg"
  },
   {
    title: "Gabriela",
    artist: "Katseye",
    src: "Music/KATSEYE (캣츠아이) 'Gabriela' (Color Coded Lyrics).mp3",
    cover: "Images/Gabriela.jpg"
  },
  {
    title: "Supernova",
    artist: "Aespa",
    src: "Music/aespa 'Supernova' Lyrics (에스파 Supernova 가사) (Color Coded Lyrics).mp3",
    cover: "Images/supernova.jpg"
  },
  {
    title: "I Am",
    artist: "Ive",
    src: "Music/IVE I AM Lyrics (아이브 I AM 가사) (Color Coded Lyrics).mp3",
    cover: "Images/I am.jpg"
  },
];

let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const playBtn = document.getElementById("playBtn");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
  resetProgress();
  updatePlayIcon();
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayIcon();
}

function updatePlayIcon() {
  const playImg = playBtn.querySelector("img");
  playImg.src = audio.paused ? "Images/play button.png" : "Images/pause.png";
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
}

function setProgress(e) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

function resetProgress() {
  progress.style.width = "0%";
}

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgress);

loadSong(currentSong);
