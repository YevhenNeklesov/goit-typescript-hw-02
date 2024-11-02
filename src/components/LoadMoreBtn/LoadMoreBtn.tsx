import React from 'react';
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  load: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ load }) => {
    return (
        <div className={s.container}>
            <button className={s.btn} onClick={load}>Load more</button>
        </div>
    );
};

export default LoadMoreBtn;