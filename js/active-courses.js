// Function to update course progress
function updateCourseProgress(courseId, progress, videosCompleted, totalVideos) {
    const progressElement = document.getElementById(`${courseId}-progress`);
    const progressBarElement = document.getElementById(`${courseId}-progress-bar`);
    const videosElement = document.getElementById(`${courseId}-videos`);

    if (progressElement && progressBarElement && videosElement) {
        progressElement.textContent = progress;
        progressBarElement.style.width = `${progress}%`;
        videosElement.textContent = `${videosCompleted}/${totalVideos}`;
    }
}

// Load progress from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const course1Progress = localStorage.getItem("course1-progress") || 57;
    const course1Videos = localStorage.getItem("course1-videos") || 3;
    updateCourseProgress("course1", course1Progress, course1Videos, 6);

    const course2Progress = localStorage.getItem("course2-progress") || 75;
    const course2Videos = localStorage.getItem("course2-videos") || 5;
    updateCourseProgress("course2", course2Progress, course2Videos, 8);
});