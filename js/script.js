var $gallery = $('#gallery1');
$gallery.masonry({
  itemSelector: '.image',
  columnWidth: 200, // adjust the column width
  gutter: 20 // adjust the gap between columns
});




const categories = document.querySelectorAll('.categories li a');
const images = document.querySelectorAll('.image');

categories.forEach((category) => {
  category.addEventListener('click', (e) => {
    e.preventDefault();
    categories.forEach((c) => c.classList.remove('active'));
    e.target.classList.add('active');
    const categoryName = e.target.getAttribute('data-category');
    filterSelection(categoryName);
  });
});

function filterSelection(c) {
  images.forEach((image) => {
    image.classList.remove('show');
    if (image.classList.contains(c)) {
      image.classList.add('show');
    }
  });
}