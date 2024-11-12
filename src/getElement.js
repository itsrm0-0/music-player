import { songs } from "./singers.js";

export const setSongData = (songIndex, elements) => {
  const song = songs[songIndex];
  elements.singerImage.src = song.img;
  elements.singerName.textContent = song.name;
  elements.songName.textContent = song.nameSong;
  elements.MusicGenre.textContent = song.MusicGenre;
  updateActiveDot(elements.navDots, songIndex);
};

export const createNavDots = (elements, onClick) => {
  songs.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("nav-dot");
    dot.addEventListener("click", () => onClick(index));
    elements.navDots.appendChild(dot);
  });
};

const updateActiveDot = (navDots, currentSongIndex) => {
  const dots = navDots.querySelectorAll(".nav-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSongIndex);
  });
};









