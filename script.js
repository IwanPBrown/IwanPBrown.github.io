const backdrop = document.getElementById("backdrop");

function openVideo(num) {
  const box = document.getElementById("videoBox" + num);
    box.classList.add("fullscreen");
    backdrop.classList.add("show");

backdrop.onclick = () => {
    box.classList.remove("fullscreen");
    backdrop.classList.remove("show");
};
}; 

function switchView(hideId, showId) {
  document.getElementById(hideId).style.display = "none";
  document.getElementById(showId).style.display = "flex";
}