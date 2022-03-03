import React, { useState, useEffect } from 'react';
import { getHoroscope } from '../services/api';

export const Horoscope = ({ sign, timeframe }) => {
  const [horoscope, setHoroscope] = useState([]);

  useEffect(() => {
    getHoroscope(sign, timeframe).then(setHoroscope);
  }, [sign, timeframe]);

  return (
    <div>
      <h2 className='horoscope'>
        <span className='main'>{timeframe}</span> your horoscope for<span className="main"> {sign}</span> is...
      </h2>
      <p>{horoscope}</p>
    </div>
  );
};