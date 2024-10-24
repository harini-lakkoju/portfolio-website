
document.getElementById('helloButton').addEventListener('click', function()
{
    alert('hello, welcome to my portfolio! :)')
})

document.getElementById('colorButton').addEventListener('click', function() {
   
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

document.addEventListener('DOMContentLoaded', () => {

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.color = '#1e1d1d'; 
        skill.style.transform = 'scale(1.2)'; 
        skill.style.transition = 'all 0.3s ease'; 
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.color = 'white';
        skill.style.transform = 'scale(1)'; 
    });
});
});
