//Barra de navegacion al deslizar
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Boton de modo oscuro
const themeBtn = document.querySelector(".theme-btn");
const imgB = document.querySelector(".img-elementb");
const imgW = document.querySelector(".img-elementw");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");
  imgB.classList.toggle("active");
  imgW.classList.toggle("active");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
  if (savedIcon == "sun") {
    console.log(savedIcon);
    imgB.classList.add("active");
  } else {
    imgW.classList.add("active");
  }
} else {
  imgW.classList.add("active");
}

// Seccion del portafolio
const portfolioModels = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModel = function (modalClick) {
  portfolioModels[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModel(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtns) => {
  portfolioCloseBtns.addEventListener("click", () => {
    portfolioModels.forEach((portfolioModelsView) => {
      portfolioModelsView.classList.remove("active");
    });
  });
});

// Activar el menu de navegacion al scrollear
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});
// Barra de menu tipo hamburguesa
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-box");
const navCloseBtn = document.querySelector(".nav-close-btn");
const navItems = document.querySelectorAll(".nav-items a");

toggle.addEventListener("click", () => {
  navMenu.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

//Boton para ir hasta arriba
const scrollTopBtn = document.querySelector(".scrollTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});
scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Agregar los iconos correspondientes al texto en portafolio
var htmlIcon = "icon fa-brands fa-html5";
var cssIcon = "icon fa-brands fa-css3-alt";
var jsIcon = "icon fa-brands fa-js";
var djangoIcon = "icon fa-brands fa-python";
var pythonIcon = "icon fa-brands fa-python";
var psqlIcon = "icon fa-solid fa-database";

function addClassIcon(tag, iconName) {
  arregloIcon = iconName.split(" ");
  for (var i = 0; i < arregloIcon.length; i++) {
    console.log(arregloIcon[i]);
    tag.classList.add(arregloIcon[i]);
  }
}

function funcIcon(tag, text) {
  if (text == "html") {
    addClassIcon(tag, htmlIcon);
  } else if (text == "css") {
    addClassIcon(tag, cssIcon);
  } else if (text == "javascript") {
    addClassIcon(tag, jsIcon);
  } else if (text == "django") {
    addClassIcon(tag, djangoIcon);
  } else if (text == "psql") {
    addClassIcon(tag, psqlIcon);
  }
}

for (var j = 0; j < 3; j++) {
  //Recorrer por cada proyecto
  var arreglo = document
    .getElementById("herramientas" + j)
    .textContent.split(",");

  var elemento = document.getElementById(j);

  for (var k = 0; k < arreglo.length; k++) {
    //recorrer cada elemento del proyecto
    var tag = document.createElement("i");
    funcIcon(tag, arreglo[k]);
    elemento.appendChild(tag);
  }
}
