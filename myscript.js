const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const titleBox = document.querySelector('.titleBox');
const footer = document.querySelector('footer');
const frontContent = document.getElementById('front-content');
const backContent = document.getElementById('back-content');


modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    titleBox.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
});

//so the card doesn't flip
document.querySelectorAll('.icon-btn').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the click from bubbling up to the card
    });
});

titleBox.addEventListener('click', () => {
    titleBox.classList.remove('flip-in-ver-left');
    titleBox.classList.remove('flip-in-ver-right');

    if (frontContent.style.display == "none") {
        titleBox.classList.add('flip-in-ver-left');
        frontContent.style.display = "flex";
        backContent.style.display = "none";

    } else {
        titleBox.classList.add('flip-in-ver-right');
        frontContent.style.display = "none";
        backContent.style.display = "flex";
    }
})