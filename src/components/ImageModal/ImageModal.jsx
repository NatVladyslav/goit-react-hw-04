import ReactModal from 'react-modal';
import { SlLike } from 'react-icons/sl';
import css from './ImageModal.module.css';

const ImageModal = ({ modal, modalClose, selectedImage }) => {
  const { urls, alt_description, likes } = selectedImage;

  return (
    <ReactModal
      isOpen={modal}
      onRequestClose={modalClose}
      overlayClassName={css.modalBack}
      className={css.modal}
      ariaHideApp={false}
    >
      <img src={urls.regular} alt={alt_description} />
      <div className={css.text}>
        <p>
          <SlLike className={css.icon} size={24} />
          {likes}
        </p>
        <p>{alt_description}</p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;