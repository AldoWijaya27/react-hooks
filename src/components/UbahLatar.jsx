import React from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const UbahLatar = () => {
  const [lamp, setLamp] = React.useState('off');

  const ubah = () => {
    setLamp((prevLamp) => {
      return prevLamp === 'off' ? 'on' : 'off';
    });
  };

  return (
    <div className='wrapper'>
      <div className={lamp} id='ubahLatar'>
        <button onClick={ubah}>
          {lamp === 'on' ? <FaLightbulb /> : <FaRegLightbulb />}
          <h3 className='judulUbah'>Ubah Latar</h3>
        </button>
      </div>
    </div>
  );
};

export default UbahLatar;
