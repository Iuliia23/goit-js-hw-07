import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = galleryItems.map(image => `
<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image"
      src="${image.preview}" 
      alt="${image.description}"
      />
   </a>
</li>`).join('');

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
