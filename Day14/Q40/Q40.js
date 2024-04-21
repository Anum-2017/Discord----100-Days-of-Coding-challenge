"use strict";
//Q40 - Album: Create objects for music albums.
function make_album(artist, title, track) {
    let album = { artist, title, track };
    return album;
}
let album1 = make_album('Ali Zafar', 'Rockstar', 5);
let album2 = make_album('Coke Studio', 'Tajdar-e-Haram', 7);
let album3 = make_album('Rahat Fateh Ali Khan', 'Tere Mast Mast Do Nain', 10);
console.log(album1);
console.log(album2);
console.log(album3);
