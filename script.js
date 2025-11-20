/* ----------------- Button Interaction ----------------- */
    "Community 1": "images/community1_beautiful.jpg",
    "Community 2": "images/community2_beautiful.jpg",
    "Community 3": "images/community3_beautiful.jpg"
const joinButton = document.querySelector("button");
joinButton.addEventListener("click", () => {
    alert("Thank you for joining our global community!");
});
/* ----------------- Floating Button Smooth Scroll ----------------- */
const floatingBtn = document.createElement("button");
floatingBtn.innerText = "Join Now";
floatingBtn.classList.add("floating-btn");
document.body.appendChild(floatingBtn);
floatingBtn.addEventListener("click", () => {
    // Scroll smoothly to join section (replace with your join section)
    const joinSection = document.querySelector("main"); 
    joinSection.scrollIntoView({ behavior: "smooth" });
});
/* ----------------- Clickable Icons ----------------- */
const icons = document.querySelectorAll(".clickable-icon");
// Create modal elements
const modal = document.createElement("div");
modal.classList.add("modal");
const modalImg = document.createElement("img");
modalImg.classList.add("modal-content");
const modalCaption = document.createElement("div");
modalCaption.classList.add("modal-caption");
const modalClose = document.createElement("span");
modalClose.classList.add("modal-close");
modalClose.innerHTML = "&times;";
modal.appendChild(modalImg);
modal.appendChild(modalCaption);
modal.appendChild(modalClose);
document.body.appendChild(modal);
// Open modal on icon click
icons.forEach(icon => {
    icon.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = icon.src;
        modalCaption.innerText = icon.alt; // Show caption from alt text
    });
});
// Close modal on X click
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});
// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
/* ----------------- Scroll Fade-In ----------------- */
const fadeElements = document.querySelectorAll(".fade-in");

function checkVisibility() {
    const windowBottom = window.innerHeight + window.scrollY;
    fadeElements.forEach(el => {
        const elementTop = el.offsetTop + el.offsetHeight / 4;
        if (windowBottom > elementTop) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
/* ----------------- Dynamic Text Contrast ----------------- */
function updateTextColor() {
    const sections = [document.querySelector("header"), document.querySelector("main"), document.querySelector("footer")];
    sections.forEach(section => {
        const darkColors = ["black", "brown"];
        let isDark = darkColors.some(color => section.style.background.includes(color));
        section.style.color = isDark ? "white" : "black";
    });
}
setInterval(updateTextColor, 2000);
// Map each icon to its beautiful image
const communityImages = {
    "Community 1": "images/community1_beautiful.jpg",
    "Community 2": "images/community2_beautiful.jpg",
    "Community 3": "images/community3_beautiful.jpg"
};
// Popup elements
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImage");
const closeBtn = document.getElementById("closePopup");
// Show image in popup when icon clicked
icons.forEach(icon => {
    icon.addEventListener("click", () => {
        const imgSrc = communityImages[icon.alt];
        if (imgSrc) {
            popupImg.src = imgSrc;
            popup.classList.add("active");
        }
    });
});
// Close popup when clicking X
closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

// Optional: close popup when clicking outside the image
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});


