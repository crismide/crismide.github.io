function showContent(content) {
    // Get the content divs and buttons
    var bioContent = document.getElementById("bioContent");
    var hobbiesContent = document.getElementById("hobbiesContent");
    var bioButton = document.getElementById("bioButton");
    var hobbiesButton = document.getElementById("hobbiesButton");

    // Show and hide content based on button clicked
    if (content === 'bio') {
        bioContent.style.display = "flex";
        hobbiesContent.style.display = "none";
        bioButton.classList.add("active");
        bioButton.classList.remove("inactive");
        hobbiesButton.classList.add("inactive");
        hobbiesButton.classList.remove("active");
    } else if (content === 'hobbies') {
        bioContent.style.display = "none";
        hobbiesContent.style.display = "flex";
        hobbiesButton.classList.add("active");
        hobbiesButton.classList.remove("inactive");
        bioButton.classList.add("inactive");
        bioButton.classList.remove("active");
    }
}


function openInNewTab(url) {
    window.open(url, '_blank'); // Open URL in a new tab or window
}