document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username && password) {
        window.location.href = "home.html";
    } else {
        alert("Please enter valid credentials!");
    }
});

// Highlight Active Tab
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const tabs = {
        "index.html": "nav-login",
        "home.html": "nav-home",
        "active-courses.html": "nav-courses",
        "feedback.html": "nav-reviews"
    };

    if (tabs[currentPage]) {
        document.getElementById(tabs[currentPage]).classList.add("active");
    }
});

// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
