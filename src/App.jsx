import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import InstituicaoEnsino from './pages/InstituicaoEnsino';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="instituicaoensino" element={<InstituicaoEnsino />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
