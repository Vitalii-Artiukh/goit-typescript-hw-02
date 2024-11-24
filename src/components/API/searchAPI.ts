import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
const clientId = 'L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ';

//  client_id=L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ

const fetchPhotos = async (searchRequest, page) => {
  const axiosOptions = {
    params: {
      page: page,
      per_page: 12,
      query: searchRequest,
      orientation: 'landscape',
      client_id: clientId,
    },
  };

  const response = await axios.get('/search/photos', axiosOptions);
  return response.data;
};

export default fetchPhotos;
