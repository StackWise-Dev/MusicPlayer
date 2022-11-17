const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const imageBlock = document.querySelector(".image-block");
const image = document.querySelector(".image-block img");
const song = document.querySelector("audio");
const play = document.querySelector(".fa-play");
const prev = document.querySelector(".fa-backward");
const next = document.querySelector(".fa-forward");

let flag = false;
function playSong() {
    song.play();
    play.classList.replace("fa-play", "fa-pause");
    flag = true;
    imageBlock.classList.add("animate");
}

function pauseSong() {
    song.pause();
    play.classList.replace("fa-pause", "fa-play");
    flag = false;
    imageBlock.classList.remove("animate");
}

play.addEventListener("click", function() {
    flag ? pauseSong() : playSong();    
})

let songs = [{
        title : "Game Song 1",
        artist : "James Kemi",
        image : "image1",
        song : "song1"
    },
    {
        title : "Game Song 2",
        artist : "Miron Gist",
        image : "image2",
        song : "song2"
    },
    {
        title : "Game Song 3",
        artist : "Crimson Jang",
        image : "image3",
        song : "song3"
    }
];

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    image.src = "images/" + songs.image + ".jpg";
    song.src = "songs/" + songs.song + ".mp3";
}

let index = 0;
loadSong(songs[index]);

const nextSong = () => {
    index = (index + 1) % songs.length;
    loadSong(songs[index]);
    playSong();
}

const prevSong = () => {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(songs[index]);
    playSong();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);


