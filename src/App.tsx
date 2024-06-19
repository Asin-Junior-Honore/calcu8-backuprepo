import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Exams from "./Pages/Exams/Exams";
import History from "./Pages/HistoriesAndScores/History";

function App() {
  return (
    <main>
      <div>
        <Router>
          <section className="p-4 lg:py-4 lg:px-8">
            <Navbar />
          </section>
          <section>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/history-scores" element={<History />} />
            </Routes>
          </section>
        </Router>
      </div>
    </main>
  );
}

export default App;
