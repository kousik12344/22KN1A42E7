import { useState } from 'react';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';

const App = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (newUrls) => {
    const existing = JSON.parse(localStorage.getItem('shortened') || '{}');
    const updated = { ...existing };

    newUrls.forEach(({ url, finalCode, expiry }) => {
      updated[finalCode] = { url, expiry };
    });

    localStorage.setItem('shortened', JSON.stringify(updated));
    setUrls(newUrls);
  };

  return (
    <>
      <UrlForm onShorten={handleShorten} />
      <UrlList urls={urls} />
    </>
  );
};

export default App;
