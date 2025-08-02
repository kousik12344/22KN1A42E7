import { useParams, Navigate } from 'react-router-dom';

const RedirectHandler = () => {
  const { code } = useParams();
  const data = JSON.parse(localStorage.getItem('shortened') || '{}');
  const entry = data[code];

  if (!entry || Date.now() > entry.expiry) {
    return <div>Link expired or not found.</div>;
  }

  const clicks = JSON.parse(localStorage.getItem('clicks') || '{}');
  clicks[code] = clicks[code] || [];
  clicks[code].push({ time: Date.now(), referrer: document.referrer });
  localStorage.setItem('clicks', JSON.stringify(clicks));

  return <Navigate to={entry.url} />;
};

export default RedirectHandler;
