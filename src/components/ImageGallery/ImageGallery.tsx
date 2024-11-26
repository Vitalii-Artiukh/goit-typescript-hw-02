import React, { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
import { ImageProps, Photos } from '../../types';

const ImageGallery: FC<ImageProps> = ({ photos, openModal }) => {
  return (
    <ul className={styles.list}>
      {photos.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
