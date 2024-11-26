import React, { FC } from 'react';
import styles from './ImageCard.module.css';
import { ImageProps, OpenModal, Photos } from '../../types';

interface ImageCardProps {
  image: Photos[];
  openModal: OpenModal;
}

const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  const small = image.urls.small;
  return (
    <div>
      <img
        className={styles.img}
        src={small}
        alt={image.alt_description}
        onClick={() =>
          openModal(
            image.urls.regular,
            image.user.first_name,
            image.user.location,
            image.user.total_likes,
            image.alt_description
          )
        }
      />
    </div>
  );
};

export default ImageCard;
