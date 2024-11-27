import React, { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
// import { ImageProps, Photos } from '../../types';

export interface Photos {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    first_name: string;
    location: string;
    total_likes: number;
  };
}

export interface OpenModal {
  openModal: (
    urlModal: string,
    nameModal: string,
    locationModal: string,
    likesModal: number,
    description: string
  ) => void;
}

export interface ImageProps {
  photos: Photos[];
  openModal: OpenModal;
}

// type Image = {
//   id: string;
//   urls: { small: string; regular: string };
//   alt_description: string;
// };

// type ImageGalleryProps = {
//   images: Image[];
//   onModalOpen: (regular: string, altDescription: string) => void;
// };

const ImageGallery: FC<ImageProps> = ({ photos, openModal }) => {
  return (
    <ul className={styles.list}>
      {photos.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard
            small={image.urls.small}
            regular={image.urls.regular}
            firstName={image.user.first_name}
            location={image.user.location}
            totalLikes={image.user.total_likes}
            description={image.alt_description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
