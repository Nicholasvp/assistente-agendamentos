const videoCards = document.querySelectorAll('.video-card');
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.modal .close');

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoUrl = card.getAttribute('data-video').replace('shorts/', 'embed/');
        modalVideo.src = videoUrl;
        modal.style.display = 'block';
    });
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
    modalVideo.src = '';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        modalVideo.src = '';
    }
};
k