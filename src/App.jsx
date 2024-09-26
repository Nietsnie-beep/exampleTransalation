import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';  // Importa la configuración de i18n
import './App.css';  // Importa el archivo CSS para el diseño

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);  // Cambia el idioma de la aplicación
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('greeting')}</h1>  {/* Traducción del saludo */}
        <div className="buttons">
          <button className="lang-button" onClick={() => changeLanguage('esMX')}>Español México</button>
          <button className="lang-button" onClick={() => changeLanguage('esCL')}>Español Chile</button>
          <button className="lang-button" onClick={() => changeLanguage('en')}>English</button>
        </div>
        <p className="credits">This app was created by nietsnieDeveloper using i18n for internationalization.</p>
      </header>
    </div>
  );
}

export default App;
