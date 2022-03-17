import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseCard />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructors/:id" element={<InstructorDetails />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
