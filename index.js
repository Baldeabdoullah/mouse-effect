// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
// const bull1 = document.querySelector(".bull1");
// const bull2 = document.querySelector(".bull2");
// const bull3 = document.querySelector(".bull3");
const mouses = document.querySelectorAll(".mouses");
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left, injecter "e")

// window.addEventListener("mousemove", (e) => {
//   bull1.style.left = e.x + "px";
//   bull1.style.top = e.y + "px";

//   bull2.style.left = e.x + "px";
//   bull2.style.top = e.y + "px";

//   bull3.style.left = e.x + "px";
//   bull3.style.top = e.y + "px";
// });

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
