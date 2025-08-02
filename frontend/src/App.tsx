import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watermark from './components/Watermark/Watermark';
import './App.scss';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import TodoPage from './pages/TodoPage/TodoPage';

function App() {
  return (
    <div className="portfolio-site">
      <Watermark />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo-app" element={<TodoPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
