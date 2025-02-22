// Sample reviews data
const reviewsData = {
    "beginner-weights": [
        { name: "John Doe", review: "This course changed my life! Highly recommended.", course: "Beginner Weights" },
        { name: "Jane Smith", review: "Amazing content and great instructors.", course: "Beginner Weights" },
        { name: "Alice Johnson", review: "Very well-structured and easy to follow.", course: "Beginner Weights" }
    ],
    "advanced-calisthenics": [
        { name: "Bob Brown", review: "Great for beginners and advanced learners alike.", course: "Advanced Calisthenics" },
        { name: "Charlie Davis", review: "The best fitness course I've ever taken.", course: "Advanced Calisthenics" },
        { name: "Eve Wilson", review: "Highly engaging and informative.", course: "Advanced Calisthenics" }
    ]
};

// Function to load reviews based on selected course
function loadReviews() {
    const courseSelect = document.getElementById("course-select");
    const selectedCourse = courseSelect.value;
    const reviewCardsContainer = document.getElementById("review-cards");

    // Clear existing reviews
    reviewCardsContainer.innerHTML = "";

    // Load new reviews
    reviewsData[selectedCourse].forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.className = "review-card";
        reviewCard.innerHTML = `
            <img src="assets/profile.png" alt="${review.name}" class="review-profile">
            <h3>${review.name}</h3>
            <p><strong>Course:</strong> ${review.course}</p>
            <p>"${review.review}"</p>
        `;
        reviewCardsContainer.appendChild(reviewCard);
    });

    // Update selected course details
    const selectedCourseImage = document.getElementById("selected-course-image");
    const selectedCourseTitle = document.getElementById("selected-course-title");
    const selectedCourseRating = document.getElementById("selected-course-rating");
    const selectedCourseDescription = document.getElementById("selected-course-description");

    if (selectedCourse === "beginner-weights") {
        selectedCourseImage.src = "assets/course1.png";
        selectedCourseTitle.textContent = "Beginner Weights";
        selectedCourseRating.textContent = "⭐️⭐️⭐️⭐️ (4.0)";
        selectedCourseDescription.textContent = "Learn the basics of weight training, including proper form, safety, and effective exercises to build strength.";
    } else {
        selectedCourseImage.src = "assets/course2.png";
        selectedCourseTitle.textContent = "Advanced Calisthenics";
        selectedCourseRating.textContent = "⭐️⭐️⭐️⭐️⭐️ (5.0)";
        selectedCourseDescription.textContent = "Push your limits with advanced bodyweight exercises. Learn handstands, muscle-ups, and more to elevate your fitness game.";
    }
}

// Function to submit a review
function submitReview() {
    const reviewText = document.getElementById("review-text").value;
    if (reviewText.trim() === "") {
        alert("Please write a review before submitting.");
        return;
    }

    const courseSelect = document.getElementById("course-select");
    const selectedCourse = courseSelect.value;

    // Get the course name based on the selected course
    const courseName = selectedCourse === "beginner-weights" ? "Beginner Weights" : "Advanced Calisthenics";

    // Add the new review to the reviews data
    reviewsData[selectedCourse].push({ name: "You", review: reviewText, course: courseName });

    // Reload reviews to display the new one
    loadReviews();

    // Clear the textarea
    document.getElementById("review-text").value = "";
}

// Load reviews on page load
document.addEventListener("DOMContentLoaded", loadReviews);