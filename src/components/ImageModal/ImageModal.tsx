import React from 'react';
import Modal from 'react-modal';
import s from "./ImageModal.module.css";
import { Article } from '../../servis/types';



interface ImageModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    article: Article;
}

const ImageModal: React.FC<ImageModalProps> = ({ modalIsOpen, closeModal, article }) => {
    Modal.setAppElement('#root');

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
        },
        content: {
            padding: '0',
            border: 'none',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div className={s.container}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={s.div}>
                    <img className={s.img} src={article.urls.regular} alt={article.alt_description} />
                </div>
            </Modal>
        </div>
    );
};

export default ImageModal;