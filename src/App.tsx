import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Exams from "./Pages/Exams/Exams";
import History from "./Pages/HistoriesAndScores/History";
import SelectedExam from "./Pages/SelectedExam/SelectedExam";
import Signup from "./Pages/authentication/Signup";
import Login from "./Pages/authentication/Login";
import ForgotPassword from "./Pages/authentication/ForgotPassword";
import VerifyOtp from "./Pages/authentication/VerifyOtp";
import Newpassword from "./Pages/authentication/Newpassword";
import StudentPerformance from "./Pages/Performance/StudentPerformance";

function App() {
  return (
    <main>
      <div>
        <Router>
          <section className="p-4 lg:py-4 lg:px-8">
            <Navbar />
            {/* write logic to display the navbar if user is authenticated or login */}
          </section>
          <section>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/history-scores" element={<History />} />
              <Route path="/selectedexam" element={<SelectedExam />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/verifyOtp" element={<VerifyOtp />} />
              <Route path="/newpassword" element={<Newpassword />} />
              <Route
                path="/studentPerformance"
                element={<StudentPerformance />}
              />
            </Routes>
          </section>
        </Router>
      </div>
    </main>
  );
}

export default App;
