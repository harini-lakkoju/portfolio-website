
document.getElementById('helloButton').addEventListener('click', function()
{
    alert('hello, welcome to my portfolio! :)')
})

document.getElementById('colorButton').addEventListener('click', function() {
    // Generate random colors
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
// Select all skill items
const skillItems = document.querySelectorAll('.skill-item');

// Add hover effects using mouseenter and mouseleave events
skillItems.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.color = '#1e1d1d'; // Change text color to Tomato on hover
        skill.style.transform = 'scale(1.2)'; // Slightly enlarge the text
        skill.style.transition = 'all 0.3s ease'; // Smooth transition
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.color = 'white'; // Revert to original color
        skill.style.transform = 'scale(1)'; // Reset size
    });
});
});
