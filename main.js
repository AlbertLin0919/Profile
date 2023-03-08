// Show Menu
const closeBtn = document.querySelector("#nav-close");
const toggleBtn = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.add("show-menu");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.remove("show-menu");
});
//Remove Menu Button

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", linkAction));

// swiper projects
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

// email JS
const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector("#contact-name");
const contactEmail = document.querySelector("#contact-mail");
const contactContent = document.querySelector("#contact-content");
const contactMessage = document.querySelector("#contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactContent.value === ""
  ) {
    //add color on alert
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.innerHTML = "請輸入內容!!";
  } else {
    //serviceId - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_h0w2yhp",
        "template_atrskon",
        "#contact-form",
        "8w8JCe0XoIw8DgTXa"
      )
      .then(
        () => {
          contactMessage.classList.add("color-green");
          contactMessage.classList.remove("color-red");
          contactMessage.innerHTML = "已寄出!";
          alert("已經寄出囉!!請等待回覆");
          setTimeout(() => {
            contactMessage.innerHTML = "";
          }, 5000);
        },
        (error) => {
          alert("Something has Failed.... Sorry!");
        }
      );

    contactName.value = "";
    contactEmail.value = "";
    contactContent.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

// scroll section active link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// show scroll up
const scrollUp = () => {
  const scrollUp = document.querySelector("#scroll-up");

  this.scrollY >= 700
    ? (scrollUp.style.bottom = "7.5rem")
    : (scrollUp.style.bottom = "-30%");
};

window.addEventListener("scroll", scrollUp);

//Change Background Header

const scrollHeader = () => {
  const header = document.querySelector("#header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 0,
  //   reset: true, //animation repeat
});

sr.reveal(`.home__data, .projects__container, .footer__container`);
sr.reveal(`.home__info div`, { delay: 200, origin: "bottom", interval: 100 });
sr.reveal(`.skills__container`, { origin: "bottom" });
sr.reveal(`.contact__content:nth-child(1)`, {
  origin: "left",
  distance: "80px",
});
sr.reveal(`.contact__content:nth-child(2)`, {
  origin: window.innerWidth < 768 ? "left" : "right",
  distance: "80px",
});
