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

// urlModal: string,
// nameModal: string,
// locationModal: string,
// likesModal: number,
// description: string

export interface ImageProps {
  photos: Photos[];
  openModal: OpenModal;
}
