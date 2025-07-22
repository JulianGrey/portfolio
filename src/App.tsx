import './App.scss';

import Layout from './layouts/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="portfolio-site">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
