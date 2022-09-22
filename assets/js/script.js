// API KEY: c760a53e4f71cf130710e3cefa00e4d2

//  sample API call: https://api.getsongbpm.com/tempo/?api_key=c760a53e4f71cf130710e3cefa00e4d2&bpm=150


var getSongsByBpm = function (bpm) {

    var apiURL = "https://api.getsongbpm.com/tempo/?api_key=c760a53e4f71cf130710e3cefa00e4d2&bpm=" + bpm + "&limit=10";
    console.log(apiURL);

    fetch(apiURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
                console.log(data);
            });
        } else {
            console.log("ERROR");
        }
    })
};

getSongsByBpm(150);