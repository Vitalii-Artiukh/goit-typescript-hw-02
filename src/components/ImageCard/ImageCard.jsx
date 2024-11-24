import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ photo, openModal }) => {
  return (
    <div>
      <img className={styles.img}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() =>
          openModal(
            photo.urls.regular,
            photo.user.first_name,
            photo.user.location,
            photo.user.total_likes,
            photo.alt_description
          )
        }
      />
    </div>
  );
};

export default ImageCard;
