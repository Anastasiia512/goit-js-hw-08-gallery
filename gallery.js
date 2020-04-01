"use strict";
import galleryItems from "./gallery-items.js";
import { createLi } from "./markup.js";

const ulGallery = document.querySelector(".js-gallery");
const divLightbox = document.querySelector("div.lightbox");
const imgLightbox = document.querySelector("img.lightbox__image");
const divOverlay = document.querySelector("div.lightbox__content");

const gallery = galleryItems.reduce((acum, elem) => acum + createLi(elem), "");

ulGallery.insertAdjacentHTML("beforeend", gallery);

const escCloseModal = function(event) {
  if (event.code === "Escape") {
    console.dir(event.keyCode);
    divLightbox.classList.remove("is-open");
    imgLightbox.src = "";
  }
};

const openModal = function(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    divLightbox.classList.add("is-open");
    imgLightbox.src = event.target.dataset.source;
    document.addEventListener("keydown", escCloseModal);
  }
};

const closeModal = function(event) {
  if (event.target.tagName === "BUTTON" || event.target === divOverlay) {
    divLightbox.classList.remove("is-open");
    imgLightbox.src = "";
    document.removeEventListener("keydown", escCloseModal);
  }
};

ulGallery.addEventListener("click", openModal);
divLightbox.addEventListener("click", closeModal);
