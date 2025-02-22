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
        const duration = card.getAttribute('data-duration');
        const videos = card.getAttribute('data-videos');

        // Check if the card matches the selected filters
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);
        const durationMatch = !selectedDuration || (
            (selectedDuration === "less than 30" && duration === "less than 30") ||
            (selectedDuration === "30-60" && duration === "30-60") ||
            (selectedDuration === "greater than 60" && duration === "greater than 60")
        );
        const videosMatch = !selectedVideos || (
            (selectedVideos === "less than 5" && videos === "less than 5") ||
            (selectedVideos === "5-10" && videos === "5-10") ||
            (selectedVideos === "greater than 10" && videos === "greater than 10")
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