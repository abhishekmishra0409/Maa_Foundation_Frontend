import React from 'react';

const Hcomp = ({ title, subtitle }) => {
  return (
    <div className="hover-overlay">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">{title}</h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">{subtitle}</p>
    </div>
  );
};

export default Hcomp;