import { songs } from "./singers.js";
import { setSongData, createNavDots } from "./getElement.js";

const elements = {
  singerImage: document.getElementById("singer-image"),
  singerName: document.getElementById("singer-name"),
  songName: document.getElementById("song-name"),
  navDots: document.getElementById("nav-dots"),
  MusicGenre: document.getElementById("Music-genre"),
};

let currentSongIndex = 0;

const setNewSong = (index) => {
  currentSongIndex = index;
  setSongData(currentSongIndex, elements);
};

document.addEventListener("DOMContentLoaded", () => {
  createNavDots(elements, setNewSong);
  setSongData(currentSongIndex, elements);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  setSongData(currentSongIndex, elements);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  setSongData(currentSongIndex, elements);
});



