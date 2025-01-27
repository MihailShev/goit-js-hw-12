import axios from 'axios';

export const searchPhotoApi = (userSearchQuery, pageNumb) => {
  const urlSearchParams = {
    params: {
      page: pageNumb,
      q: userSearchQuery,
      per_page: 15,
      key: '48384527-ba0e7acd0c025abd4e882b58a',
      safesearch: true,
      orientation: 'horizontal',
      image_type: 'photo',
    },
  };

  return axios(`https://pixabay.com/api/`, urlSearchParams);
};
