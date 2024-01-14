document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("section").forEach(function(section) {
        section.onclick = function() {
                this.classList.toggle("active");
                this.querySelector(".arrow").toggle("active");
        };
    });
});