import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = galleryItems.map(image => `
     <li class="gallery__item">
     <a class="gallery__link" href="${image.original}">
     <img
      class="gallery__image"
      width = 372px
      heigth = 240px
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
     />
     </a>
 </li>`).join('');


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onImageClick); 

function onImageClick(event) {
    blockStandartAction(event);
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,);
    instance.show();
    galleryContainer.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}
function blockStandartAction(event) {
    event.preventDefault();
}

console.log(galleryItems);
