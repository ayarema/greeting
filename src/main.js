document.getElementById('characters').addEventListener('click', function() {
  let flowers = document.createElement("img");
  flowers.src = "src/assets/images/flowers.png"; // Шлях до зображення квітів
  flowers.className = "flowers";
  document.querySelector(".container").appendChild(flowers);

  setTimeout(() => {
    flowers.classList.add("show");
  }, 100);
});

document.addEventListener("DOMContentLoaded", function () {
  let oldAudio = document.getElementById("bgMusic");
  if (oldAudio) {
    oldAudio.remove(); // Видаляємо старий елемент
  }

  let newAudio = document.createElement("audio");
  newAudio.id = "bgMusic";
  newAudio.autoplay = true;

  let source = document.createElement("source");
  source.src = "/src/assets/music/Tom%20and%20Jerry%20-%20Is%20You%20Is%20or%20Is%20You%20Aint%20My%20Baby%20-%201946.mp3?nocache=" + new Date().getTime();
  source.type = "audio/mpeg";

  newAudio.appendChild(source);
  document.body.appendChild(newAudio);

  newAudio.play().catch(error => console.log("Автозапуск заблокований браузером"));
});

