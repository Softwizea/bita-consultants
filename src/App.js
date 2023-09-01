import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import Homepage from "./pages/Home/Homepage";
import Contactus from "./pages/Contactus/Contactus";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Blogs/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
          {/* <Route path="/contactus" element={<Contactus />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
