import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Article } from '../../servis/types';


interface ImageGalleryProps {
    articles: Article[];
    openModal: (articles: Article) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ articles, openModal }) => {

    return (
        <div className={s.container}>
            <ul className={s.list}>
                {articles.map(item => (
                    <li className={s.item} key={item.id}>
                        <ImageCard openModal={openModal} item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageGallery;