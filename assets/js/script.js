// API KEY: c760a53e4f71cf130710e3cefa00e4d2

//  sample API call: https://api.getsongbpm.com/tempo/?api_key=c760a53e4f71cf130710e3cefa00e4d2&bpm=150
//  allowed range is 40-220 BPM
var songListEl = document.querySelector("#results-list")

var searchFormEl = document.querySelector("#search-form-section");
var bpmInputEl = document.querySelector("#search");





var getSongsByBpm = function (bpm) {

    var apiURL = "https://api.getsongbpm.com/tempo/?api_key=c760a53e4f71cf130710e3cefa00e4d2&bpm=" + bpm + "&limit=10";
    console.log(apiURL);

    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displaySong(data);
            });
        } else {
            console.log("ERROR");
        }
    })
};



// function to parse BPM API response and diplay on page
var displaySong = function (data) {

    var songArray = data.tempo;

    for (var i = 0; i < songArray.length; i++) {
        var songTitle = songArray[i].song_title;
        var artist = songArray[i].artist.name;

        var genresEl = document.createElement("div");

        var genresArray = songArray[i].artist.genres;

        if (genresArray != null) {
            for (var x = 0; x < genresArray.length; x++) {
                var genre = genresArray[x];
                console.log("GENRE", genre);
                var genreEl = document.createElement("p");
                genreEl.textContent = genre;

                genresEl.appendChild(genreEl);
            }
        }

        var songEl = document.createElement("li");

        var songTitleEl = document.createElement("h3");
        songTitleEl.textContent = songTitle;
        songTitleEl.classList = "song-title"

        var artistEl = document.createElement("div");
        artistEl.textContent = artist;
        artistEl.classList = "artist";

        songEl.appendChild(songTitleEl);
        songEl.appendChild(artistEl);
        songEl.appendChild(genresEl);

        songListEl.appendChild(songEl);

        console.log(songListEl);
    }



}

var searchSubmitHandler = function (event) {
    event.preventDefault();

    // get BPM from input value
    var bpm = bpmInputEl.value.trim();

    getSongsByBpm(bpm);

    // console.log(bpm);

}

searchFormEl.addEventListener("submit", searchSubmitHandler);

