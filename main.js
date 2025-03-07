document.getElementById('characters').addEventListener('click', function() {
  let flowers = document.createElement("img");
  flowers.src = "assets/images/flowers.png"; // Шлях до зображення квітів
  flowers.className = "flowers";
  document.querySelector(".container").appendChild(flowers);

  setTimeout(() => {
    flowers.classList.add("show");
  }, 100);
});
