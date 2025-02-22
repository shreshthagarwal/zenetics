// Initialize the YouTube IFrame API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoPlayer', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// When the player is ready
function onPlayerReady(event) {
    console.log('YouTube Player is ready');
}

// Track video state changes
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        console.log('Video is playing');
        updateCourseProgress(70); // Increase progress when video starts
    }
}

// Update course progress
function updateCourseProgress(progress) {
    const progressBar = document.getElementById('progress-bar');
    const courseProgress = document.getElementById('course-progress');

    progress = Math.min(progress, 100);
    progressBar.style.width = `${progress}%`;
    courseProgress.textContent = progress;
    localStorage.setItem('course1-progress', progress);
}

// Load YouTube IFrame API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



// Function to toggle the chatbox
function toggleChatbox() {
    const chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "block"; // Show chatbox
    } else {
        chatbox.style.display = "none"; // Hide chatbox
    }
}