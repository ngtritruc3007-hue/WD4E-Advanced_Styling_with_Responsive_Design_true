
function highlightImage(event) {
    const image = event.currentTarget;
    console.log("Image highlighted:", image.alt);
    image.style.border = "4px solid orange";
}

function removeHighlight(event) {
    const image = event.currentTarget;
    console.log("Image highlight removed:", image.alt);
    image.style.border = "";
}

function addTabFocus() {
    console.log("Page loaded. Adding keyboard focus.");

    const images = document.querySelectorAll(".grid img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("mouseover", highlightImage);
        images[i].addEventListener("mouseleave", removeHighlight);

        images[i].addEventListener("focus", highlightImage);
        images[i].addEventListener("blur", removeHighlight);
    }

    console.log("Keyboard focus added to", images.length, "images.");
}

window.addEventListener("load", addTabFocus);
