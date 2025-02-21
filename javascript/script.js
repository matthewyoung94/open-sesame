document.addEventListener("DOMContentLoaded", function () {
    const imageSection = document.querySelector(".image-section");
    const imagePlaceholder = imageSection.querySelector(".image-placeholder");
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const newImage = this.getAttribute("data-image");

            tabs.forEach(t => t.classList.remove("active-tab"));
            this.classList.add("active-tab");

            if (newImage && newImage.trim() !== "") {
                imagePlaceholder.style.backgroundImage = `url('${newImage}')`;
                imagePlaceholder.style.backgroundSize = "cover";
                imagePlaceholder.style.backgroundPosition = "center";
            }
        });
    });
});
