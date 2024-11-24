import React from 'react';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
// const clientId: string = 'L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ';

//  client_id=L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ

interface axiosParams {
  params: {
    page: number;
    per_page: number;
    query: string;
    orientation: string;
    client_id: string;
  };
}

async function fetchPhotos<T>(searchRequest: string, page: number): Promise<T> {
  const axiosOptions: axiosParams = {
    params: {
      page: page,
      per_page: 12,
      query: searchRequest,
      orientation: 'landscape',
      client_id: 'L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ',
    },
  };

  const response: AxiosResponse<T> = await axios.get<T>(
    '/search/photos',
    axiosOptions
  );
  return response.data;
}

export default fetchPhotos;
