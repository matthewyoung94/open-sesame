document.addEventListener("DOMContentLoaded", function () {
    const imagePlaceholder = document.querySelector(".image-placeholder");
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const newImage = this.getAttribute("data-image");

            tabs.forEach(t => t.classList.remove("active-tab"));
            this.classList.add("active-tab");

            if (newImage) {
                imagePlaceholder.style.backgroundImage = `url('${newImage}')`;
                imagePlaceholder.style.backgroundSize = "cover";
                imagePlaceholder.style.backgroundPosition = "center";
            }
        });
    });
});
