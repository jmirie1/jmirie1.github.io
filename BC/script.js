const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const projectId = item.querySelector('a').href;
        window.location.href = projectId;
    });
});