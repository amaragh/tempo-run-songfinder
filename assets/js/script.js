// API KEY: c760a53e4f71cf130710e3cefa00e4d2

//  sample API call: https://api.getsongbpm.com/tempo/?api_key=c760a53e4f71cf130710e3cefa00e4d2&bpm=150
//  allowed range is 40-220 BPM
var songListEl = document.querySelector("#results-list")

var searchFormEl = document.querySelector("#search-form-section");
var bpmInputEl = document.querySelector("#search");

var bpmDisplayEl = document.querySelector(".bpm-display");


var getSongsByBpm = function (bpm) {

    // getsongbpm API URL with query parameter for limit of 10 songs
    var apiURL = "https://api.getsongbpm.com/tempo/?api_key=c760a53e4f71cf130710e3cefa00e4d2&bpm=" + bpm + "&limit=10";

    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // call function to dospaly songs on homepage
                displaySong(data, bpm);
            });
        } else {
            console.log("ERROR");
        }
    })
};


// function to parse BPM API response and display on page
var displaySong = function (data, bpm) {
    // display BPM above search results
    bpmDisplayEl.textContent = "BPM: " + bpm;

    // clear existing search results to make way for new search results
    songListEl.innerHTML = "";
    var songArray = data.tempo;

    for (var i = 0; i < songArray.length; i++) {
        var songTitle = songArray[i].song_title;
        var artist = songArray[i].artist.name;

        var genresEl = document.createElement("div");
        genresEl.classList = "column is-half genres";

        var genresArray = songArray[i].artist.genres;

        if (genresArray != null) {
            for (var x = 0; x < genresArray.length; x++) {
                var genre = genresArray[x];
                var genreEl = document.createElement("p");
                genreEl.classList = "genre";
                genreEl.textContent = genre;

                genresEl.appendChild(genreEl);
            }
        }
        // create song data elements and add bulma classes
        var songEl = document.createElement("li");
        songEl.classList = "columns column is-full-mobile is-5 is-rounded song";
        songEl.setAttribute("data-bpm", bpm);

        var songInfoEl = document.createElement("div");
        songInfoEl.classList = "column is-11 is-10-mobile song-info";

        var songTitleEl = document.createElement("h3");
        songTitleEl.textContent = songTitle;
        songTitleEl.classList = "column is-full-mobile song-title";

        var songAddtlInfoEl = document.createElement("div");
        songAddtlInfoEl.classList = "columns column is-full-mobile song-addtl-info";

        var artistEl = document.createElement("div");
        artistEl.textContent = artist;
        artistEl.classList = "column is-half artist"

        var addSongBtnEl = document.createElement("div");
        addSongBtnEl.classList = "column is-1 is-2-mobile add-to-playlist"
        addSongBtnEl.innerHTML = "<button type='button'><i class='fa fa-plus'></i></button>"

        songAddtlInfoEl.appendChild(artistEl);
        songAddtlInfoEl.appendChild(genresEl);

        songInfoEl.appendChild(songTitleEl);
        songInfoEl.appendChild(songAddtlInfoEl);
        songEl.appendChild(songInfoEl);
        songEl.appendChild(addSongBtnEl);

        songListEl.appendChild(songEl);
    }

}

var searchSubmitHandler = function (event) {
    event.preventDefault();

    // get BPM from input value
    var bpm = bpmInputEl.value.trim();

    // modal to appear if no BPM value is entered before submit
    if (!bpm) {
        swal("Please enter a BPM value of 40-220");
    } else {
        getSongsByBpm(bpm);
    }

    bpmInputEl.value = "";

}

// listener event on BOPM submit form
searchFormEl.addEventListener("submit", searchSubmitHandler);

$(songListEl).on("click", "button", function (event) {
    var songData = (event.target.closest("li"));
    
    var songTitle = songData.querySelector("h3").textContent;
    var songArtist = songData.querySelector("div.artist").textContent;
    var songGenres = songData.querySelector("div.genres").textContent;
    var songBPM = document.querySelector("h2.bpm-display").textContent;

    var songDetails = {
        song: songTitle,
        artist: songArtist,
        genres: songGenres,
        bpm: songBPM
    }
    
    localStorage.setItem(songTitle, JSON.stringify(songDetails));
});