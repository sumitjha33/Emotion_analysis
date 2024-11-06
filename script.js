// Function to map emotion to emoji
function getEmoji(emotion) {
    const emojiMap = {
        "sadness": "😢",  // Sadness
        "joy": "😊",      // Joy
        "love": "😍",     // Love
        "anger": "😡",    // Anger
        "fear": "😨",     // Fear
        "surprise": "😲"  // Surprise
    };
    return emojiMap[emotion];
}

// Function to submit the comment and display the emoji
function submitComment() {
    const comment = document.getElementById("comment").value;

    // Show the loader
    const emojiSlide = document.getElementById("emoji-slide");
    emojiSlide.innerText = "Loading...";

    // Send data to backend
    fetch("https://emotion-analysis-backend.onrender.com/classify_emotion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: comment })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Assuming `data` contains the emotion string like "joy", "sadness", etc.
        const emotion = data.emotion; // Adjust this if your API returns a different key
        const emoji = getEmoji(emotion);

        // Display the emoji
        emojiSlide.innerText = emoji;
    })
    .catch(error => {
        console.error("Error:", error);
        emojiSlide.innerText = "Error!";
    });
}

