import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryListTemplate } from './js/render-functions';
import { searchPhotoApi } from './js/pixabay-api';
import { showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.main-form');
const list = document.querySelector('.list-gallery');
const btnLoadMore = document.querySelector('.js-load-more');
const allert = iziToast;
const allertOptions = {
  title: '❌ Sorry',
  color: 'red',
  position: 'topRight',
};
const simplelightbox = new SimpleLightbox('.list-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let userSearchQuery = '';

const searchUserPhotoApi = async e => {
  try {
    e.preventDefault();
    showLoader();

    userSearchQuery = e.currentTarget.elements.user_search_query.value.trim();
    list.innerHTML = '';
    page = 1;
    btnLoadMore.classList.add('is-hidden');

    if (userSearchQuery === '') {
      allert.show({ ...allertOptions, message: 'Please enter a keyword' });

      hideLoader();
      form.reset();
      list.innerHTML = '';
      return;
    }

    const { data } = await searchPhotoApi(userSearchQuery, page);
    console.log(data);

    if (data.total === 0) {
      allert.show({
        ...allertOptions,
        message:
          'There are no images matching your search query. Please try again!',
      });

      hideLoader();
      form.reset();
      list.innerHTML = '';
      return;
    }

    if (data.totalHits > 1) {
      btnLoadMore.classList.remove('is-hidden');

      btnLoadMore.addEventListener('click', getLoadMoreBtn);
    }

    const galleryTemplate = data.hits
      .map(el => createGalleryListTemplate(el))
      .join('');

    list.innerHTML = galleryTemplate;
    simplelightbox;

    simplelightbox.refresh();
    form.reset();
    hideLoader();
  } catch (error) {
    allert.show({ ...allertOptions, message: error.message });
    hideLoader();
  }
};

form.addEventListener('submit', searchUserPhotoApi);

const getLoadMoreBtn = async e => {
  try {
    page++;
    showLoader();

    const { data } = await searchPhotoApi(userSearchQuery, page);
    console.log(data);

    const galleryTemplate = data.hits
      .map(el => createGalleryListTemplate(el))
      .join('');

    list.insertAdjacentHTML('beforeend', galleryTemplate);
    hideLoader();

    if (page === data.totalHits) {
      btnLoadMore.classList.add('is-hidden');

      btnLoadMore.removeEventListener('click', getLoadMoreBtn);
    }
  } catch (error) {
    allert.show({ ...allertOptions, message: error.message });
    hideLoader();
  }
};
