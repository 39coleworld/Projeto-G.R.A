// MENU MOBILE (FECHAR E ABRIR)
const btnMobile = document.getElementById('btn-mobile');
const links = document.querySelectorAll("nav ul li a");

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  // CÓDIGO ACESSIBILIDADE:
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  }
  else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  } if (active) {
    event.currentTarget.setAttribute('menu', 'Fechar Menu');
  } else { }
}

// MENU MOBILE (FECHAR AO CLICAR NOS LINKS)
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



// SLIDES
let time = 5000,
  currentImageIndex = 0,
  images = document
    .querySelectorAll("#slider img")
max = images.length;

function nextImage() {

  images[currentImageIndex]
    .classList.remove("selected")

  currentImageIndex++

  if (currentImageIndex >= max)
    currentImageIndex = 0

  images[currentImageIndex]
    .classList.add("selected")
}

function start() {
  setInterval(() => {
    // troca de image
    nextImage()
  }, time)
}

window.addEventListener("load", start)