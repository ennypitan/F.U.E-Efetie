//AOS Animation

AOS.init({
  duration: 2000,
  once: true,
});
// Dialog Pop-up
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("close", "::backdrop");
const openButton = document.getElementById("primary-btn");

openButton.addEventListener("click", () => {
  console.log("clicked");
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
// Close dialog on backdrop click
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
// links scroll
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
          blockTo: "start",
        });
        // Remove active class from all links
        links.forEach((link) => {
          link.classList.remove("active");
        });

        // Add active class to the clicked link
        this.classList.add("active");
        e.target.classList.add("active");
      }
    });
  });
});

// Lawyers Tab
const tabContainer = document.querySelector(".lawyers-container");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const miniPic = document.querySelectorAll(".mini-profile-pic");

tabContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(e.target);
  if (id) {
    // remove selected from other buttons
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other pages
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Google Map
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map-contact"), {
    center: { lat: 6.5977682, lng: 3.3520884 },
    zoom: 17,
  });
  new google.maps.Marker({
    position: { lat: 6.5977682, lng: 3.3520884 },
    map: map,
    label: "FUE",
    title: "FUE EFETIE & CO.",
    draggleable: false,
    animation: google.maps.Animation.DROP,
  });
}

initMap();

//  JavaScript to add the loader after a delay

// window.addEventListener("load", function () {
//   // Create and append the loader div
//   var loader = document.createElement("div");
//   loader.className = "loader";
//   loader.innerHTML = ` <div class="spinner"></div><div class="logo" aria-label="logo">
//             <img src="images/primary-logo.png" alt="" />
//           </div>`;
//   document.body.appendChild(loader);

//   // Optional: Hide the loader after a certain time (e.g., 5 seconds)
//   setTimeout(function () {
//     loader.style.display = "none";
//   }, 3000); // Adjust the time as needed
//   // 3 seconds delay
// });
