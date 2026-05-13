function toggleMusica() {
  const musica = document.getElementById("musica");
  const btn = document.querySelector(".play-btn");

  if (musica.paused) {
    musica.play();
    btn.innerHTML = "⏸";
  } else {
    musica.pause();
    btn.innerHTML = "▶";
  }
}