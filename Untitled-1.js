//allows the user to chose which character they want to play as
function clickCharacter(button){ 
    onEvent(button, "click", function{
        setScreen ("screen2");
    });
}


// Enhanced cooking template
function clickCook(button, videoList) {
    let currentIndex = 0; // Track the current video index
    const progressKey = "videoProgress"; // Key to save progress in localStorage

    // Load saved progress
    if (localStorage.getItem(progressKey)) {
        currentIndex = parseInt(localStorage.getItem(progressKey), 10);
    }

    onEvent(button, "click", function () {
        setScreen("screen3");
        playVideo(videoList[currentIndex]);
    });

    onEvent("forwardButton", "click", function () {
        if (currentIndex < videoList.length - 1) {
            currentIndex++;
            playVideo(videoList[currentIndex]);
            saveProgress();
        }
    });

    onEvent("replayButton", "click", function () {
        playVideo(videoList[currentIndex]);
    });

    onEvent("exitButton", "click", function () {
        saveProgress();
        setScreen("screen1"); // Return to the main screen
    });

    function playVideo(video) {
        setProperty("videoPlayer", "source", video); // Assume "videoPlayer" is the video element ID
        startVideo("videoPlayer"); // Assume startVideo is a function to play the video
    }

    function saveProgress() {
        localStorage.setItem(progressKey, currentIndex);
    }
}