'use strict';
import  galleryItems  from './gallery-items.js';

const createLi = obj => {
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${obj.preview}"
    >
      <img
        class="gallery__image"
        src='${obj.original}'
        data-source='${obj.original}'
        alt='${obj.description}'
      />
    </a>
  </li>`;
  };
  const gallery = galleryItems.reduce((acum, elem) => acum + createLi(elem), '');

  const ulGallery = document.querySelector(".js-gallery");
  
  ulGallery.insertAdjacentHTML("beforeend", gallery);

  ulGallery.addEventListener('click', OpenModal);

  const divOverlay = document.querySelector('.js-lightbox');
  const liGalleryItem = document.querySelector('.gallery__item');

  function OpenModal(event) {
    divOverlay.classList.add('.is-open');
    event.target.dataset = `${galleryItems.original}`;

  }

  
  