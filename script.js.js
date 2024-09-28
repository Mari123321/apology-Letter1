document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('apology-heading');
    const message = document.getElementById('apology-message');
    const button = document.getElementById('accept-button');
    const sadFace = document.getElementById('sad-face');

    // Animate sad face visibility
    setTimeout(() => {
        sadFace.style.opacity = 1;
    }, 500);

    // Button click event
    button.addEventListener('click', () => {
        alert("Thank you for accepting my apology!");
        button.style.backgroundColor = "#28a745";
        button.innerHTML = "Thank You! 😊";
        sadFace.style.transform = 'scale(1.2)';
        setTimeout(() => {
            sadFace.style.transform = 'scale(1)';
        }, 300);
    });
});
