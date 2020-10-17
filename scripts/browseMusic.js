window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  let genre = urlParams.get('genre');
  let difficulty = urlParams.get('difficulty');
  let search = urlParams.get('search');

  querySongs(genre, difficulty, search);
}

function querySongs(genre, difficulty, search) {
  let songs = document.getElementsByClassName("song");
  for (let i = 0; i < songs.length; i++) {
    let classes = songs[i].className;

    let songName = songs[i].querySelector('.song-name').innerHTML.toLowerCase();
    let composerName = songs[i].querySelector('.composer-name').innerHTML.toLowerCase();
    composerName = composerName.substr(12, composerName.length);
    console.log(composerName);
    let formattedSearch = (search != null) ? search.toLowerCase() : null;

    if (genre != null && !classes.includes(genre)) {
      console.log(songs[i].className);
      songs[i].parentElement.style.display = "none";
    } else if (difficulty != null && !classes.includes(difficulty)) {
      console.log(songs[i].className);
      songs[i].parentElement.style.display = "none";
    } else if (search != null && !songName.includes(formattedSearch) && !composerName.includes(formattedSearch)) {
      console.log(songName);
      songs[i].parentElement.style.display = "none";
    } else {
      songs[i].parentElement.style.display = "block";
      document.getElementById('noContent').style.display = "none";
    }

    let filterTitle = "All Sheet Music";
    if (genre != null && difficulty == null && search == null) {
      filterTitle = genre.replace(/-/g, ' ');
      filterTitle = capitalize_Words(filterTitle);
    } else if (genre == null && difficulty != null && search == null) {
      filterTitle = capitalize_Words(difficulty) + " Music";
    } else if (genre == null && difficulty == null && search != null) {
      filterTitle = 'Search results: \"' + search + '\"';
    } else if (genre != null && difficulty != null) {
      filterTitle = 'Filter results:'
    }
    document.getElementById("filterTitle").innerHTML = filterTitle;
  }
}

document.getElementById("submitFilters").addEventListener("click", function(event) {
  event.preventDefault();
  applyFilters();
});


function applyFilters() {
  let genreFilter = document.getElementById("genreFilter");
  let genre = genreFilter.options[genreFilter.selectedIndex].value;
  genre = genre.replace(/ /g, '-').toLowerCase();
  console.log(genre);

  let difficultyFilter = document.getElementById("difficultyFilter");
  let difficulty = difficultyFilter.options[difficultyFilter.selectedIndex].value;
  difficulty = difficulty.toLowerCase();
  document.getElementById('noContent').style.display = "block";
  console.log(difficulty);

  querySongs(genre, difficulty);
}

function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
