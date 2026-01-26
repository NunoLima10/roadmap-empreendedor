import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { RoadmapView } from './pages/RoadmapView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/roadmap/:id" element={<Layout fullWidth><RoadmapView /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
