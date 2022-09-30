var playlist = document.querySelector("ul#play-list");
var song = document.querySelectorAll(".song");


var addTracks = $(document).ready(function() {
        var songs = {};
        for (var i = 0; i<localStorage.length; i++) {
            songs[i] = localStorage.getItem(localStorage.key(i))  

            var songEl = document.createElement("li");
            songEl.classList = "columns song";
            songEl.id = i; 
            playlist.appendChild(songEl);

            var songTitle = (JSON.parse(songs[i]).song);
            var songArtist = (JSON.parse(songs[i]).artist);
            var songGenre = (JSON.parse(songs[i]).genres);
            var songBPM = (JSON.parse(songs[i]).bpm);

            var song = document.getElementsByClassName(".song");

            var songInfoEl = document.createElement("div");
            songInfoEl.classList = "column columns is-full song-info";
            songEl.appendChild(songInfoEl);

            var songTitleArt = document.createElement("div");
            songTitleArt.classList = "column columns is-4 song-name-art"
            songInfoEl.appendChild(songTitleArt);

            var songTitleEl = document.createElement("div");
            songTitleEl.textContent = songTitle;
            songTitleEl.classList = "column is-full song-title";
            songTitleArt.appendChild(songTitleEl);

            var artistEl = document.createElement("div");
            artistEl.textContent = songArtist;
            artistEl.classList = "column is-full artist"
            songTitleArt.appendChild(artistEl);

            var genreEl = document.createElement("div");
            genreEl.textContent = songGenre;
            genreEl.classList = "column is-2 genre";
            songInfoEl.appendChild(genreEl);

            var bpmEl = document.createElement("div");
            bpmEl.textContent = songBPM;
            bpmEl.classList = "column is-2 genre";
            songInfoEl.appendChild(bpmEl);

            var deleteEl = document.createElement("button");
            deleteEl.textContent = "Delete song"
            deleteEl.classList = "btn column is-2 bg-danger"
            songInfoEl.appendChild(deleteEl);

        }

        $(playlist).on("click", "button", function (event) {
            var songData = (event.target.closest("li"));
            var songTitle = document.querySelector(".song-title");
            var songName = songTitle.textContent;
            $(this).closest("li").remove();
            
            localStorage.removeItem(songName)
        });
});
