export const createLi = elem => {
  return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${elem.preview}"
    >
      <img
        class="gallery__image"
        src='${elem.preview}'
        data-source='${elem.original}'
        alt='${elem.description}'
      />
    </a>
  </li>`;
};
