document.addEventListener("DOMContentLoaded", function () {
    const imagePlaceholder = document.querySelector(".image-placeholder");
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const newImage = this.getAttribute("data-image");
            imagePlaceholder.style.backgroundImage = `url(${newImage})`;
        });
    });
});
