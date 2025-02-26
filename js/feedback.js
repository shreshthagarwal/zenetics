// Sample reviews data
const reviewsData = {
    "arms-arsenal": [
        { name: "John Doe", review: "This course is perfect for beginners. Highly recommended!", course: "Arms Arsenal - Beginner Dumbbell Edition" },
        { name: "Jane Smith", review: "Great for building arm strength with proper form.", course: "Arms Arsenal - Beginner Dumbbell Edition" },
        { name: "Alex Johnson", review: "The progressive workouts are fantastic. I can already feel the difference!", course: "Arms Arsenal - Beginner Dumbbell Edition" },
        { name: "Emily Davis", review: "Short and engaging sessions that fit perfectly into my schedule.", course: "Arms Arsenal - Beginner Dumbbell Edition" },
        { name: "Michael Brown", review: "The focus on controlled movements really helped me avoid injuries.", course: "Arms Arsenal - Beginner Dumbbell Edition" }
    ],
    "core-command": [
        { name: "Bob Brown", review: "Excellent bodyweight exercises for core strength.", course: "Core Command - No Equipment Edition" },
        { name: "Charlie Davis", review: "Loved the progressive difficulty in each session.", course: "Core Command - No Equipment Edition" },
        { name: "Sophia Wilson", review: "The no-equipment approach is so convenient. Highly effective too!", course: "Core Command - No Equipment Edition" },
        { name: "Daniel Martinez", review: "My core has never been stronger. The rotational strength exercises are a game-changer.", course: "Core Command - No Equipment Edition" },
        { name: "Olivia Taylor", review: "The substitute exercises for the bar are a lifesaver. Great course!", course: "Core Command - No Equipment Edition" }
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

    if (selectedCourse === "arms-arsenal") {
        selectedCourseImage.src = "assets/course1.png";
        selectedCourseTitle.textContent = "Arms Arsenal - Beginner Dumbbell Edition";
        selectedCourseRating.textContent = "⭐️⭐️⭐️⭐️ (4.0)";
        selectedCourseDescription.textContent = "Designed specifically for teens looking to build strength in their biceps, triceps, and forearms using simple yet effective dumbbell exercises.";
    } else {
        selectedCourseImage.src = "assets/course2.png";
        selectedCourseTitle.textContent = "Core Command - No Equipment Edition";
        selectedCourseRating.textContent = "⭐️⭐️⭐️⭐️⭐️ (5.0)";
        selectedCourseDescription.textContent = "Build a strong, functional core using purely bodyweight movements. Emphasizes stability, endurance, and rotational strength.";
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
    const courseName = selectedCourse === "arms-arsenal" ? "Arms Arsenal - Beginner Dumbbell Edition" : "Core Command - No Equipment Edition";

    // Add the new review to the reviews data
    reviewsData[selectedCourse].push({ name: "You", review: reviewText, course: courseName });

    // Reload reviews to display the new one
    loadReviews();

    // Clear the textarea
    document.getElementById("review-text").value = "";
}

// Load reviews on page load
document.addEventListener("DOMContentLoaded", loadReviews);