import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './markup';
import { getImage } from './API';
import { refs } from './refs';

let page = 0;
let query = '';

refs.form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();

  query = e.target.elements.searchQuery.value;
  page = 1;
  getImage(query, page)
    .then(data => {
      if (data.total === 0) {
        page = 0;
        refs.searchBtn.disabled = true;

        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      // refs.loadMore.hidden = true;
      // refs.loadMore.hidden = false;
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
      // refs.loadMore.hidden = true;
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

// !import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { createMarkup } from './markup';
// import { getImage } from './API';
// import { refs } from './refs';
// let lightbox = '';
// let page = 0;
// let query = '';

// refs.loader.style.display = 'none';

// // SUBMIT FORM
// refs.form.addEventListener('submit', handleFormSubmit);
// function handleFormSubmit(e) {
//   e.preventDefault();
//   refs.loader.style.display = 'block';
//   query = e.currentTarget.searchQuery.value;
//   page = 1;

//   // API PIXABAY
//   getImage(query, page)
//     .then(data => {
//       if (data.total === 0) {
//         page = 0;
//         refs.searchBtn.disabled = true;
//         refs.loader.style.display = 'none';
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//         return;
//       }

//       //   ADD MARKUP
//       refs.loader.style.display = 'none';
//       refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

//       // SIMPLELIGHTBOX
//       lightbox = new SimpleLightbox('.gallery a', {
//         captions: true,
//         captionsData: 'alt',
//         captionPosition: 'bottom',
//         captionDeloy: 250,
//       });

//       lightbox.on('show.simplelightbox', function (e) {
//         e.preventDefault();
//       });
//       // lightbox.refresh = function () {
//       //   e.preventDefault();
//       //   lightbox.destroy();
//       // };
//     })

//     .catch(() => {
//       refs.loader.style.display = 'none';
//       iziToast.error({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//       });
//     })
//     .finally(() => {
//       refs.form.reset();
//       refs.searchBtn.disabled = false;
//     });

//   refs.gallery.innerHTML = '';
// }
