import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImg = document.querySelector('body');

function galleryItemsMake (galleryItems) { 
    
    const li = galleryItems.map(({ preview, original, description}) => { return  `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                >
            </a>
        </li>`}).join('');

        document.querySelector('div').remove();

        return `<ul class="gallery">${li}<ul/>`

}

galleryImg.childNodes[1].insertAdjacentHTML('afterend', (galleryItemsMake(galleryItems)));


const imageOpen = (e) => {
    e.preventDefault();
  
    if (e.target.tagName !== "IMG") {
      return;
    }

    const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="1082" height="721">`
    );
  
    instance.show();
  
    function onKeydown(e) {
      if (e.code === "Escape") {
        instance.close();
        window.removeEventListener("keydown", onKeydown);
      }
    }
    window.addEventListener("keydown", onKeydown);
  };

  galleryImg.childNodes[2].addEventListener('click', imageOpen);

