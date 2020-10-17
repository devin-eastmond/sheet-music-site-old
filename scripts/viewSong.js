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

    var songInfoJson = JSON.parse("http://deastmond.com/sheet-music-site/songsInfo.json");
    console.log(songInfoJson);
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
