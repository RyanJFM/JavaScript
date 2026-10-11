document.addEventListener("DOMContentLoaded", function() {
    const newHeading = document.createElement("h1");
    console.log(newHeading);
    const newHeadingText = document.createTextNode("New heading");
    newHeading.appendChild(newHeadingText);
    const container = document.querySelector(".container");
    container.appendChild(newHeading);
});