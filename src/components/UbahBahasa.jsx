import React from 'react';

const UbahBahasa = () => {
  const [locale, setLocale] = React.useState('id');

  const changeToId = () => setLocale('id');
  const changeToEn = () => setLocale('en');

  return (
    <div className='wrapper'>
      {locale === 'id' ? (
        <>
          <p>Selamat pagi</p>
          <button onClick={changeToEn}>Translate</button>
        </>
      ) : (
        <>
          <p>Good Morning</p>
          <button onClick={changeToId}>Terjemahkan</button>
        </>
      )}
    </div>
  );
};

export default UbahBahasa;
