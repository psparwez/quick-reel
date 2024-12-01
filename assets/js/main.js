"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let overlay = document.querySelector("[data-overlay]");

  // sticky header

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  //  Mobile Navbar

  const menuBtn = document.querySelector("[data-menu-icon]"),
    menuLists = document.querySelector("[data-menu-lists]"),
    lists = menuLists.querySelectorAll("li");

  function toggleMenu() {
    menuLists.classList.toggle("active");
    menuBtn.classList.toggle("active");
  }

  menuBtn.addEventListener("click", toggleMenu);
  lists.forEach((list) => list.addEventListener("click", toggleMenu));

  // Clone textimonial content

  let copyEle = document
    .querySelector(".testimonials-wrapper-slide")
    .cloneNode(true);

  document.querySelector(".testimonials-wrapper").appendChild(copyEle);

  // Pricing

  let playNameLabel = document.querySelectorAll(".plan-name label");

  playNameLabel.forEach((label) => {
    label.addEventListener("click", (e) => {
      //   let selectedPlan = e.target.dataset.plan;
      // Get the price elements
      let proPrice = document.querySelector("[data-pro-price]");
      let premiumPrice = document.querySelector("[data-premium-price]");

      // Remove 'active' class from all labels and add it to the clicked one
      playNameLabel.forEach((label) => label.classList.remove("active"));
      e.target.classList.add("active");

      // Toggle prices based on current values
      if (
        proPrice.innerHTML === "$19 <span>/month</span>" &&
        premiumPrice.innerHTML === "$49 <span>/month</span>"
      ) {
        proPrice.innerHTML = "$15 <span>/month</span>";
        premiumPrice.innerHTML = "$39 <span>/month</span>";
      } else {
        proPrice.innerHTML = "$19 <span>/month</span>";
        premiumPrice.innerHTML = "$49 <span>/month</span>";
      }
    });
  });

  // FAQ's

  let faqBoxes = document.querySelectorAll(".faq-box");

  faqBoxes.forEach((faqBox) => {
    faqBox.addEventListener("click", (e) => {
      // faqBox.classList.remove("active");
      console.log(e.target);
      e.stopPropagation();

      faqBoxes.forEach((box) => {
        box.classList.remove("active");
      });

      e.target.classList.add("active");
      faqBox.children.classList.remove("active");
    });
  });

  // login form

  let loginWrapper = document.querySelector("[ data-login-model]");
  let loginBtn = document.querySelector("[data-login-btn]");

  let closeBtn = document.querySelector("[data-close-btn]");

  function openModel() {
    loginWrapper.classList.add("open-model");
    overlay.classList.add("open-model");
    document.body.classList.add("no-scroll");
  }
  function closeModel() {
    loginWrapper.classList.remove("open-model");
    overlay.classList.remove("open-model");
    document.body.classList.remove("no-scroll");
  }

  function shakeEffects() {
    loginWrapper.classList.add("shake");
    setTimeout(() => {
      loginWrapper.classList.remove("shake");
    }, 500);
  }

  loginBtn.addEventListener("click", openModel);
  closeBtn.addEventListener("click", closeModel);
  overlay.addEventListener("click", shakeEffects);
});

// scroll reveal

ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1500,
});

ScrollReveal().reveal(".home-card-text");
ScrollReveal().reveal(".home-text .heading", { delay: 500 });
ScrollReveal().reveal(".home-text .description", { delay: 1000 });
ScrollReveal().reveal(".home-text .credit-text", { delay: 1500 });
ScrollReveal().reveal(".home-text .home-btn", { delay: 2000 });
ScrollReveal().reveal(".home-trust-images", { delay: 2500 });

ScrollReveal().reveal(".process-image", { origin: "left" });

ScrollReveal().reveal(".reveal-left", { origin: "left" });
ScrollReveal().reveal(".reveal-right", { origin: "right" });

ScrollReveal().reveal(".text-center");
ScrollReveal().reveal(".process-text");

ScrollReveal().reveal(".footer .container");

// image dragable disabled

let imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  // drag disable
  img.ondragstart = function () {
    return false;
  };
});

// Theme toggle
const toggleBtn = document.querySelector("[data-theme-toggle]");
const icon = toggleBtn.querySelector("i");

// Function to toggle theme
function toggleTheme() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.body.classList.remove("dark");
    icon.classList.replace("ri-sun-fill", "ri-moon-line"); // Change to sun icon
    localStorage.removeItem("darkMode");
  } else {
    document.body.classList.add("dark");
    icon.classList.replace("ri-moon-line", "ri-sun-fill"); // Change to moon icon
    localStorage.setItem("darkMode", "true");
  }
}

// Event listener for the toggle button
toggleBtn.addEventListener("click", toggleTheme);

// Check for saved theme preference on page load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  icon.classList.replace("ri-moon-line", "ri-sun-fill"); // Set to moon icon on load
} else {
  icon.classList.replace("ri-sun-fill", "ri-moon-line"); // Set to sun icon if not dark mode
}
