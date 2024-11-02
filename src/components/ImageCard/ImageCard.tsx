import React from "react";
import { Article } from "../../servis/types";
import s from "./ImageCard.module.css"

interface ImageCardProps {
    item: Article;
    openModal: (item: Article) => void;
}



const ImageCard: React.FC<ImageCardProps> = ({item, openModal}) => {
  return (
      <div>
          <img className={s.img} onClick={() => openModal(item)} src={item.urls.small} alt={item.alt_description} />
    </div>
  )
}

export default ImageCard