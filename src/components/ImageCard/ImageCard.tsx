import React, { FC } from 'react';
import styles from './ImageCard.module.css';
import { ImageProps, OpenModal, Photos } from '../../types';

// interface ImageCardProps {
//   image: Photos[];
//   openModal: OpenModal;
// }

interface ImageCardProps {
  small: string;
  regular: string;
  firstName: string;
  location: string;
  totalLikes: number;
  description: string;
  openModal: OpenModal;
}

const ImageCard: FC<ImageCardProps> = ({
  small,
  regular,
  firstName,
  location,
  totalLikes,
  description,
  openModal,
}) => {
  return (
    <div>
      <img
        className={styles.img}
        src={small}
        alt={description}
        onClick={() =>
          openModal(regular, firstName, location, totalLikes, description)
        }
      />
    </div>
  );
};

export default ImageCard;
