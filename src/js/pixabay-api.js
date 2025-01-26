export const searchPhotoApi = userSearchQuery => {
  const urlSearchParams = new URLSearchParams({
    key: '48384527-ba0e7acd0c025abd4e882b58a',
    q: userSearchQuery,
    safesearch: true,
    orientation: 'horizontal',
    image_type: 'photo',
  });

  return fetch(`https://pixabay.com/api/?${urlSearchParams}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
};
