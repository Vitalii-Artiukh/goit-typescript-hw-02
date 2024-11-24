import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={styles.list}>
      {photos.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard photo={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
