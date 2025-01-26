import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryListTemplate } from './js/render-functions';
import { searchPhotoApi } from './js/pixabay-api';
import { showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.main-form');
const list = document.querySelector('.list-gallery');
const allert = iziToast;
let simplelightbox;

const searchUserPhotoApi = e => {
  e.preventDefault();
  showLoader();

  const userSearchQuery =
    e.currentTarget.elements.user_search_query.value.trim();
  list.innerHTML = '';

  if (userSearchQuery === '') {
    allert.show({
      title: '❌',
      color: '#d1c542',
      position: 'topRight',
      message: 'Please enter a keyword',
    });

    form.reset();
    list.innerHTML = '';
    return;
  }

  searchPhotoApi(userSearchQuery)
    .then(data => {
      if (data.total === 0) {
        allert.show({
          title: '❌ Sorry',
          color: 'red',
          position: 'topRight',
          message:
            'There are no images matching your search query. Please try again!',
        });

        form.reset();
        list.innerHTML = '';
        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryListTemplate(el))
        .join('');

      list.innerHTML = galleryTemplate;
      simplelightbox = new SimpleLightbox('.list-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      simplelightbox.refresh();
      form.reset();
    })

    .catch(err => {
      allert.show({
        title: '❌ Sorry',
        color: 'red',
        position: 'topRight',
        message: err,
      });
    })
    .finally(() => {
      hideLoader();
    });
};

form.addEventListener('submit', searchUserPhotoApi);
