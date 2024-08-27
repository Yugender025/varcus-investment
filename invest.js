let currentIndex = 0;
const totalItems = 6;
let itemsToShow = 3; // Default value for desktop
let maxIndex = Math.ceil(totalItems / itemsToShow) - 1;

function updateItemsToShow() {
  if (window.innerWidth <= 480) {
    itemsToShow = 1; // Show 1 item at a time on small screens
  } else if (window.innerWidth <= 768) {
    itemsToShow = 2; // Show 2 items at a time on medium screens
  } else {
    itemsToShow = 3; // Show 3 items at a time on larger screens
  }
  maxIndex = Math.ceil(totalItems / itemsToShow) - 1;
  updateCarousel(); // Recalculate and update the carousel
}

function updateCarousel() {
  const offset = -currentIndex * (100 / itemsToShow);
  document.querySelector(
    ".varcus-products"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Attach event listeners
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);
window.addEventListener("resize", updateItemsToShow);

// Initial update
updateItemsToShow();

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
      "https://script.google.com/macros/s/AKfycbxP_ztnbnsFaDRUK_matsTjPC5v9Tzz9W0xtb0GjnsjDw9xTS3r_cTZZ-_uSG0NyYrF-A/exec";
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
  const getStartedbtn = document.getElementById("get-started-link");

  getStartedbtn.addEventListener("click", function (event) {
    event.preventDefault();
    investSection.scrollIntoView({ behavior: "smooth" });
  });

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
