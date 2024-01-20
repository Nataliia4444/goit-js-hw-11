import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

// REFS
const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  searchBtn: document.querySelector('.search-submit '),
  loader: document.querySelector('.loader'),
};

let page = 0;
let query = '';

refs.loader.style.display = 'none';

// SUBMIT FORM
refs.form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();
  refs.loader.style.display = 'block';
  query = e.currentTarget.searchQuery.value;
  page = 1;

  // API PIXABAY
  getImage(query, page)
    .then(data => {
      if (data.total === 0) {
        page = 0;
        refs.searchBtn.disabled = true;
        refs.loader.style.display = 'none';
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      //   ADD MARKUP
      refs.loader.style.display = 'none';
      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

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
      refs.loader.style.display = 'none';
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

// MARKUP CARD
function createMarkup(date) {
  return date
    .map(
      ({
        downloads,
        likes,
        webformatURL,
        largeImageURL,
        tags,
        views,
        comments,
      }) => `
        <div class="product-card main">
        <div class="main">
        <a href="${largeImageURL}" >
        <img src=${webformatURL} alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes: ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${downloads}</b>
          </p>
        </div></div>
       
        </div>
         `
    )
    .join('');
}

// API
function getImage(q, pag = 1) {
  const params = new URLSearchParams({
    key: '39036273-6668926e4f0bebacaced31faa',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    savesearch: 'true',
    page: pag,
    per_page: 20,
  });
  const URL = 'https://pixabay.com/api/';
  return fetch(`${URL}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error();
    }
    return resp.json();
  });
}
