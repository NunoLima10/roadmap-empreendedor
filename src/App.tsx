import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { RoadmapView } from "./pages/RoadmapView";
import { Editor } from "./pages/Editor";
import { About } from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/roadmap/:id"
          element={
            <Layout fullWidth>
              <RoadmapView />
            </Layout>
          }
        />
        <Route
          path="/editor"
          element={
            <Layout fullWidth>
              <Editor />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
