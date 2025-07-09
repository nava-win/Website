/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/* ==================== DYNAMIC BACKGROUND CANVAS ==================== */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce from edges
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Responsive resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});


const modalData = {
  project1: {
    title: "Hand Gesture VolumeControl",
    description: "Control computer volume in real-time using hand gestures detected by the distance between thumb and index finger. This project utilizes computer vision to create an intuitive interface for volume control.",
    tools: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    media: ["./packages/images/portofolio1.jpg", "./packages/images/Screen Recording 2025-05-22 094301.mp4"]
  },
  project2: {
    title: "Autonomous Robot",
    description: "An autonomous robot built with Arduino that moves forward and avoids obstacles using an ultrasonic sensor and DC motors. The robot implements real-time obstacle detection and navigation algorithms.",
    tools: ["Arduino", "C++", "Ultrasonic Sensor", "DC Motors"],
    media: ["./packages/images/portofolio2.jpg"]
  },
  project3: {
    title: "Web-Based Image Processing",
    description: "A web-based tool for image manipulation, analysis, and enhancement using Python and web technologies. Features include image filtering, transformation, and real-time processing capabilities.",
    tools: ["Python", "Flask", "OpenCV", "JavaScript", "HTML/CSS"],
    media: ["./packages/images/portofolio3.jpg"]
  },
  project4: {
    title: "Medisense A Webcam-Integrated AI Chatbot",
    description: "Medisense AI Chatbot is a web-based medical assistant equipped with image and webcam upload features to detect physical conditions—especially skin-related issues—using a trained AI model. It delivers instant answers to medical questions and provides predictive first-aid analysis based on detected symptoms, helping users access early care anytime, anywhere. This solution also aids hospitals by streamlining triage and improving resource management through early diagnosis insights.",
    tools: ["Python", "Numpy","pandas" , "TensorFlow", "Scikit-Learn","html","css","JavaScript","Flask"],
    media: ["./packages/images/medisense1.jpg"]
  },
  project5: {
    title: "Portfolio Website",
    description: "My Portfolio website that displays my work and an explanation of myself is made using HTML, CSS, JavaScript, React which displays Header, Home, About, Portfolio etc., which hopefully can collaborate together later.",
    tools: ["Html", "CSS", "JavaScript", "React"],
    media: ["./packages/images/portofolioweb.jpg"]
  },
  project6: {
    title: "Creditcart Fraud Detection",
    description: "This project aims to develop an AI-powered system to detect financial fraud in digital transactions. Traditional methods often miss complex fraud patterns or create too many false alarms. Our solution uses machine learning (Random Forest, Isolation Forest, and Autoencoders) to identify suspicious behavior with better accuracy and fewer false positives. We also applied SMOTE-Tomek for balanced data and built an interactive dashboard using Flask and JavaScript for real-time predictions and visual insights. While the Random Forest model gave the best accuracy, other models supported feature extraction. The goal is to create a smart, flexible, and user-friendly system that can be improved over time for real-world use",
    tools: ["Python", "Flask-CORS", "Scikit-learn", "TensorFlow", "SMOTE-Tomek", "Numpy & Pandas", "Joblib & OS", "HTML, CSS", "JavaScript", "Chart.js (via npm)"],
    media: ["./packages/images/creditcart-fraud-detection.jpg"]
  }
};

const portfolioModal = document.querySelector('.portfolio__modal');
const modalTitle = document.querySelector('.portfolio__modal-title');
const modalDescription = document.querySelector('.portfolio__modal-description');
const modalTools = document.querySelector('.portfolio__modal-tools');
const modalImages = document.querySelector('.portfolio__modal-images');
const modalClose = document.querySelector('.portfolio__modal-close');
const detailButtons = document.querySelectorAll('.portfolio__details-btn');

detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.dataset.project;
    const project = modalData[projectId];

    // Update modal content
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    // Update tools
    modalTools.innerHTML = '';
    project.tools.forEach(tool => {
      const li = document.createElement('li');
      li.textContent = tool;
      modalTools.appendChild(li);
    });

    // Update media
    modalImages.innerHTML = '';
    project.media.forEach((media, index) => {
      const isVideo = /\.(mp4|webm|ogg)$/i.test(media);
      const mediaElement = document.createElement(isVideo ? 'video' : 'img');
      mediaElement.src = media;
      mediaElement.className = isVideo ? 'portfolio__modal-video' : 'portfolio__modal-img';
      mediaElement.alt = `${project.title} ${isVideo ? 'Video' : 'Image'} ${index + 1}`;
      if (isVideo) {
        mediaElement.controls = true;
        mediaElement.autoplay = true;
        mediaElement.muted = true;
        mediaElement.loop = true;
      }
      modalImages.appendChild(mediaElement);
    });

    portfolioModal.classList.add('active-modal');
  });
});

modalClose.addEventListener('click', () => {
  portfolioModal.classList.remove('active-modal');
});

portfolioModal.addEventListener('click', (e) => {
  if (e.target === portfolioModal) {
    portfolioModal.classList.remove('active-modal');
  }
});