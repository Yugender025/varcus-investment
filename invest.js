let currentIndex = 0;
const itemsToShow = 3;
const items = document.querySelectorAll(".product");
const totalItems = items.length;
const carouselTrack = document.querySelector(".varcus-products");
const maxIndex =
  Math.ceil(totalItems / itemsToShow) * itemsToShow - itemsToShow;

function updateCarousel() {
  const offset = -currentIndex * (100 / itemsToShow);
  carouselTrack.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  if (currentIndex < maxIndex) {
    currentIndex += itemsToShow;
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex -= itemsToShow;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    updateCarousel();
  }
}

// Initial update to position carousel
updateCarousel();

//form integration
document
  .getElementById("enrollmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const mobile = document.getElementById("phone");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let isValid = true;
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbymoeUDs9KVZAgF5o01ZpnOOTe5ryWT31ezCj-SUBOAKXscHhl3ZGhcO3qiyKCgd7B6/exec";
    const form = document.forms["google-sheet"];

    // Reset previous error states
    resetErrorState(firstName, "firstNameLabel");
    resetErrorState(lastName, "lastNameLabel");
    resetErrorState(mobile, "mobileLabel");
    resetErrorState(email, "emailLabel");
    resetErrorState(message, "messageLabel");

    // Check if all fields are filled
    if (!firstName.value) {
      setErrorState(firstName, "firstNameLabel");
      isValid = false;
    }
    if (!lastName.value) {
      setErrorState(lastName, "lastNameLabel");
      isValid = false;
    }
    if (!mobile.value) {
      setErrorState(mobile, "mobileLabel");
      isValid = false;
    }
    if (!email.value) {
      setErrorState(email, "emailLabel");
      isValid = false;
    }
    if (!message.value) {
      setErrorState(message, "messageLabel");
      isValid = false;
    }

    if (isValid) {
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          alert("Thanks for contacting us! We will get back to you soon.");
          form.reset(); // Reset the form after submission
        })
        .catch((error) => console.error("Error!", error.message));
    }
  });

function setErrorState(element, labelId) {
  element.classList.add("error-input");
  document.getElementById(labelId).classList.add("error-label");
}

function resetErrorState(element, labelId) {
  element.classList.remove("error-input");
  document.getElementById(labelId).classList.remove("error-label");
}

//scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Get the About Us link and the About section
  const aboutLink = document.getElementById("about-link");
  const aboutSection = document.getElementById("about");

  // Get the Buy EV link and the Buy EV section
  const buyEvLink = document.getElementById("buy-ev-link");
  const buyEvSection = document.getElementById("buy-ev");

  //invest

  const investLink = document.getElementById("invest-link");
  const investSection = document.getElementById("investing");

  const contactLink = document.getElementById("contact-link");
  const contactSection = document.getElementById("contact-form");

  // Add click event listener to the About Us link
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the About section smoothly
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  // Add click event listener to the Buy EV link
  investLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the Buy EV section smoothly
    investSection.scrollIntoView({ behavior: "smooth" });
  });
  // Add click event listener to the Buy EV link
  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the Buy EV section smoothly
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

//responive menu
const menuItems = document.querySelector(".menu-items");
const toggleButton = document.querySelector(".menu-toggle");
const closeButton = document.querySelector(".close-menu");

toggleButton.addEventListener("click", function () {
  menuItems.classList.add("open");
  toggleButton.style.display = "none"; // Hide toggle button when menu opens
  closeButton.style.display = "block"; // Show close button when menu opens
});

closeButton.addEventListener("click", function () {
  menuItems.classList.remove("open");
  toggleButton.style.display = "block"; // Show toggle button when menu closes
  closeButton.style.display = "none"; // Hide close button when menu closes
});

// Initial state: Hide close button on page load
closeButton.style.display = "none";
