import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@pages/header/Header";
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Services from "@pages/services/Services";
import Footer from "@pages/footer/Footer";
import Auth from "@pages/auth/Auth";
import PageNotFound from "@pages/pageNotFound/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
