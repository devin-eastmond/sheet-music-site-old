document.getElementById("submitSearch").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("searchInput").value;
  let url = "browseMusic.html?search=" + value;
  window.location.href = url;
});
