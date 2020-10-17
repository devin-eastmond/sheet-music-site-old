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
        console.log(songs[i]);
        document.getElementById("songName").innerHTML = songs[i].name;
        if (songs[i].source != "")
          document.getElementById("source").innerHTML = "from <i>" + songs[i].source + "</i>";
        document.getElementById("difficulty").innerHTML = songs[i].difficulty + " Piano";
        document.getElementById("composerName").innerHTML = "Composed by " + songs[i].composer;
        break;
      }
    }
  }
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
    "name": "Harry &amp; Hermione",
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
