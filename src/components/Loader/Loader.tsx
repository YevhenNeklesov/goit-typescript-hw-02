import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import s from "./Loader.module.css";



const Loader: React.FC = () => {
    return (
        <div className={s.div}>
            <RotatingLines
                visible={true}
                width='35'
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </div>
    );
};

export default Loader;