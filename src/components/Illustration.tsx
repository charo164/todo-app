import React from 'react';
import { IllustrationCType } from '../types';

const Illustration: React.FC<IllustrationCType> = ({ text, img, show }) => {
  return (
    show && (
      <div className="fadeIn flex flex-col justify-center items-center w-full py-6">
        <div>
          <img src={img} alt="" className="w-52 h-52" />
        </div>
        <h2 className="text-gray-700 text-lg font-semibold mt-5">{text}</h2>
      </div>
    )
  );
};

export default Illustration;
