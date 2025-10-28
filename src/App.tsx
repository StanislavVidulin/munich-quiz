import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
         <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
