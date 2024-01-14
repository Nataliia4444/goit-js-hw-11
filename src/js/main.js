import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './markup';
import { getImage } from './API';
import { refs } from './refs';

let page = 0;
let query = '';

// SUBMIT FORM
refs.form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();

  query = e.target.elements.searchQuery.value;
  page = 1;

  // API PIXABAY
  getImage(query, page)
    .then(data => {
      if (data.total === 0) {
        page = 0;
        refs.searchBtn.disabled = true;
        refs.loadMore.classList.replace('show-load-more', 'hidden');

        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      //   ADD MARKUP
      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      refs.loadMore.classList.replace('hidden', 'show-load-more');

      // SIMPLELIGHTBOX
      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDeloy: 250,
      });
      lightbox.on('show.simplelightbox', function (e) {
        e.preventDefault();
      });
    })

    .catch(() => {
      refs.loadMore.classList.replace('show-load-more', 'hidden');
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      refs.form.reset();
      refs.searchBtn.disabled = false;
    });

  refs.gallery.innerHTML = '';
}

// LOAD MORE
refs.loadMore.addEventListener('click', handleOnLoadMore);
function handleOnLoadMore() {
  page += 1;
  getImage(query, page)
    .then(data => {
      if (data.totalHits < page) {
        refs.loadMore.classList.replace('show-load-more', 'hidden');
        iziToast.warning({
          message: 'Sorry, the images have run out',
        });
      }
      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    })
    .catch(() => {
      refs.loadMore.classList.replace('show-load-more', 'hidden');
      iziToast.warning({
        message: 'Sorry, the images have run out',
      });
    })
    .finally(() => {});
}
