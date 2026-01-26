import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { RoadmapView } from './pages/RoadmapView';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap/:id" element={<RoadmapView />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
