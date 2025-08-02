import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import RedirectHandler from './components/RedirectHandler';
import StatsPage from './components/StatsPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:code" element={<RedirectHandler />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
