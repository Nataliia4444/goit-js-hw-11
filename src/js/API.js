function getImage(q, pag = 1) {
  const params = new URLSearchParams({
    key: '39036273-6668926e4f0bebacaced31faa',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    savesearch: 'true',
    page: pag,
    per_page: 40,
  });
  const URL = 'https://pixabay.com/api/';
  return fetch(`${URL}?${params}`).then(resp => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error();
    }
    return resp.json();
  });
}
export { getImage };
