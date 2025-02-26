function applyFilters() {
    // Get selected filters
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(input => input.value);
    const selectedDuration = document.querySelector('input[name="duration"]:checked')?.value;
    const selectedVideos = document.querySelector('input[name="videos"]:checked')?.value;

    // Get all course cards
    const courseCards = document.querySelectorAll('.course-card');

    // Loop through each card and check if it matches the filters
    courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const duration = parseInt(card.getAttribute('data-duration')); // Convert to number
        const videos = parseInt(card.getAttribute('data-videos')); // Convert to number

        // Check if the card matches the selected filters
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);
        const durationMatch = !selectedDuration || (
            (selectedDuration === "more than 10" && duration > 10) ||
            (selectedDuration === "10-15" && duration >= 10 && duration <= 15) ||
            (selectedDuration === "15-20" && duration >= 15 && duration <= 20)
        );
        const videosMatch = !selectedVideos || (
            (selectedVideos === "3 or more" && videos >= 3) ||
            (selectedVideos === "3-5" && videos >= 3 && videos <= 5) ||
            (selectedVideos === "5 or more" && videos >= 5)
        );

        // Show or hide the card based on filter matches
        if (categoryMatch && durationMatch && videosMatch) {
            card.style.display = 'block'; // Show the card
            card.classList.add('filtered-card'); // Add class for filtered cards
        } else {
            card.style.display = 'none'; // Hide the card
            card.classList.remove('filtered-card'); // Remove class if not filtered
        }
    });
}