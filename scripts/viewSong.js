var isPlaying = false;

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  let song = urlParams.get('song');

  loadSongInfo(song);
}

function loadSongInfo(song) {
  if (song != null) {
    document.getElementById("pdfLink").href = "images/" + song + ".pdf";
    document.getElementById("imagePreview").src = "images/" + song + ".jpg";
    document.getElementById("audioSource").src = "audio/" + song + ".mp3";
    document.getElementById("myAudio").load();
    document.getElementById("download").href = "images/" + song + ".pdf";

    for (let i = 0; i < songs.length; i++) {
      if (songs[i].class == song) {
        document.getElementById("songName").innerHTML = songs[i].name;
        if (songs[i].source != "")
          document.getElementById("source").innerHTML = "from <i>" + songs[i].source + "</i>";
        document.getElementById("difficulty").innerHTML = songs[i].difficulty + " Piano";
        document.getElementById("composerName").innerHTML = "Composed by " + songs[i].composer;
        loadSimilarSongInfo(songs[i].name);
        break;
      }
    }
  }
}

function loadSimilarSongInfo(song) {
  let endpoint = "http://ws.audioscrobbler.com";
  let apiKey = "14e2c020fce6ea8d9a2fecc25f6f7ae6";
  let url = endpoint + "/2.0/?method=track.search&track=" + song + "&api_key=" + apiKey + "&format=json&limit=3";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);


      for (let i = 0; i < 3; i++) {
        let imageLink = json.results.trackmatches.track[i].image[2]["#text"];
        document.getElementById("moreLink"+(i+1)).href = json.results.trackmatches.track[i].url;
        if (imageLink == "") {
          document.getElementById("moreImage"+(i+1)).src = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
        } else {
          document.getElementById("moreImage"+(i+1)).src = imageLink;
        }
        document.getElementById("moreTitle"+(i+1)).innerHTML = json.results.trackmatches.track[i].name;
        document.getElementById("moreArtist"+(i+1)).innerHTML = "Artist: " + json.results.trackmatches.track[i].artist;
      }
    });
}

function playSong() {
  isPlaying = !isPlaying;
  var audio = document.getElementById("myAudio");
  if (isPlaying) {
    document.getElementById("playButton").querySelector('#buttonText').innerHTML = "Pause"
    audio.play();
  } else {
    document.getElementById("playButton").querySelector('#buttonText').innerHTML = "Play Song"
    audio.pause();
  }
}

function downloadPDF() {
  document.getElementById('download').click();
}

let songs = [
  {
    "class": "Avatar__The_Last_Airbender_Medley",
    "name": "Avatar: The Last Airbender Medley",
    "difficulty": "Advanced",
    "composer": "Jeremy Zuckerman",
    "source": ""
  },
  {
    "class": "Dragonborn",
    "name": "Dragonborn",
    "difficulty": "Advanced",
    "composer": "Jeremy Soule",
    "source": "The Elder Scrolls V: Skyrim"
  },
  {
    "class": "Fantastic_Beasts_and_Where_to_Find_Them",
    "name": "Fantastic Beasts and Where to Find Them",
    "difficulty": "Intermediate",
    "composer": "James Newton Howard",
    "source": ""
  },
  {
    "class": "Harry_and_Hermione",
    "name": "Harry and Hermione",
    "difficulty": "Easy",
    "composer": "Nicholas Hooper",
    "source": "Harry Potter and the Half Blood Prince"
  },
  {
    "class": "Malfoy's_Mission",
    "name": "Malfoy's Mission",
    "difficulty": "Intermediate",
    "composer": "Nicholas Hooper",
    "source": "Harry Potter and the Half Blood Prince"
  },
  {
    "class": "Married_Life",
    "name": "Married Life",
    "difficulty": "Easy",
    "composer": "Michael Giacchino",
    "source": "Up"
  },
  {
    "class": "Obliviate",
    "name": "Obliviate",
    "difficulty": "Intermediate",
    "composer": "Alexandre Desplat",
    "source": "Harry Potter and the Deathly Hallows: Part 1"
  },
  {
    "class": "Ori_and_the_Blind_Forest",
    "name": "Ori and the Blind Forest",
    "difficulty": "Intermediate",
    "composer": "Gareth Coker",
    "source": ""
  },
  {
    "class": "Whistle_While_You_Work",
    "name": "Whistle While You Work",
    "difficulty": "Easy",
    "composer": "Frank Churchill",
    "source": "Snow White"
  },
];
