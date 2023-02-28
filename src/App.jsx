import './App.css';
import UbahBahasa from './components/UbahBahasa';
import Count from './components/Count';
import UbahLatar from './components/UbahLatar';
import Todo from './components/Todo';
import SinkronDocTitle from './components/SinkronDocTitle';
import UseContextChangeLang from './components/UseContextChangeLang';
import React, { useState } from 'react';
import LocaleContext from './contexts/LocaleContext';

const App = () => {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');

  const localeValue = React.useMemo(
    () => ({
      locale,
      toggleLocale: () => {
        const newLocale = locale === 'id' ? 'en' : 'id';
        localStorage.setItem('locale', newLocale);
        setLocale(newLocale);
      },
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={localeValue}>
      <div className='app'>
        <UbahBahasa />
        <Count />
        <UbahLatar />
        <Todo />
        <SinkronDocTitle />
        <UseContextChangeLang />
      </div>
    </LocaleContext.Provider>
  );
};
export default App;
