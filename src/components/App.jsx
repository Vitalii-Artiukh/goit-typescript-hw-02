import { useState, react, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import fetchPhotos from './API/searchAPI';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';
import styles from './App.module.css';

//////////////////////  hw-04  ////////////////////////
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [pages, setPages] = useState(1);
  const [noMorePages, setNoMorePages] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [isNameModal, setIsNameModal] = useState('');
  const [isLocationModal, setIsLocationModal] = useState('');
  const [isLikesModal, setIsLikesModal] = useState(0);
  const [descriptionModal, setDescriptionModal] = useState('');

  useEffect(() => {
    async function addPhotos() {
      try {
        setLoading(true);

        setError(false);

        const data = await fetchPhotos(searchQuery, pages);
        const gallery = data.results;
        setPhotos(prevPhoto => [...prevPhoto, ...gallery]);
        setNoMorePages(pages >= data.total_pages);
        if (gallery.length === 0 && pages === 1) {
          toast('No images for your request!', {
            position: 'top-left',
            duration: 3000,
          });
        }
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (searchQuery !== '') {
      addPhotos();
    }
  }, [pages, searchQuery]);

  useEffect(() => {
    if (pages > 1) {
      window.scrollBy({
        top: 455,
        behavior: 'smooth',
      });
    }
  }, [photos]);

  function addNextPage() {
    setPages(page => page + 1);
  }

  const defaultValue = () => {
    setSearchQuery('');
    setPhotos([]);
    setPages(1);
  };

  function openModal(
    urlModal,
    nameModal,
    locationModal,
    likesModal,
    description
  ) {
    setModalIsOpen(true);
    setLargeImageUrl(urlModal);
    setIsNameModal(nameModal);
    setIsLocationModal(locationModal);
    setIsLikesModal(likesModal);
    setDescriptionModal(description);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.wrapper}>
      <Toaster />

      <SearchBar defaultValue={defaultValue} setSearchQuery={setSearchQuery} />

      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        photos.length > 0 && (
          <ImageGallery photos={photos} openModal={openModal} />
        )
      )}
      {loading && <Loader />}
      {!noMorePages && photos.length !== 0 && (
        <LoadMoreBtn addNextPage={addNextPage} />
      )}
      <ImageModal
        largeImageUrl={largeImageUrl}
        isNameModal={isNameModal}
        isLocationModal={isLocationModal}
        isLikesModal={isLikesModal}
        descriptionModal={descriptionModal}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App;
