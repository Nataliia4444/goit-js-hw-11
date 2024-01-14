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
export { createMarkup };
