document.getElementById('colorButton').addEventListener('click', function() {
    // Generate random colors
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
document.getElementById('helloButton').addEventListener('click', function()
{
    alert('hello, welcome to my portfolio! :)')
})