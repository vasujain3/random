const proposeButton = document.getElementById("propose-btn");
const runawayButton = document.getElementById("runaway-btn");
const messageDiv = document.getElementById("message");
const yesButton = document.getElementById("yes-btn");


// Show message when Propose button is clicked
proposeButton.addEventListener("click", () => {
    messageDiv.style.display = "block";
   
});

// Hide message and either show or hide Runaway button based on answer
yesButton.addEventListener("click", () => {
    messageDiv.style.display = "none";
    alert("Thankyou pookie!!, tum ho meri cutie");
});


runawayButton.addEventListener("click", () => {
    runawayButton.style.display = "inline";
    startRunaway();
    
});
function startRunaway() {
    runawayButton.addEventListener('click', () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Get random positions for the button to move to
        const randomX = Math.random() * (windowWidth - runawayButton.offsetWidth);
        const randomY = Math.random() * (windowHeight - runawayButton.offsetHeight);

        // Move the button to the new random position
        runawayButton.style.left = `${randomX}px`;
        runawayButton.style.top = `${randomY}px`;
    });
}
// Function to move the Runaway button randomly around the screen

