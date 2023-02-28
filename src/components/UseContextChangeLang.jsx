import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function UseContextChangeLang() {
  const { locale } = React.useContext(LocaleContext);
  const { toggleLocale } = React.useContext(LocaleContext);

  return (
    <div className='wrapper'>
      <button onClick={toggleLocale}>
        {locale === 'id' ? 'English' : 'Indonesia'}
      </button>

      <h2>
        {locale === 'id'
          ? 'Apa itu fitur locale context?'
          : 'What is change lang feature?'}
      </h2>
    </div>
  );
}

export default UseContextChangeLang;
