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
    regular: string,
    firstName: string,
    location: string,
    totalLikes: number,
    description: string
  ) => void;
}

export interface ImageProps {
  photos: Photos[];
  openModal: OpenModal;
}
