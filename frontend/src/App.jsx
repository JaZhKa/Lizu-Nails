import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";
import Study from "./pages/Study";
import About from "./pages/About";
import Services from "./pages/Services";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

function App() {
  const isActive = useSelector((state) => state.isActive.value);
  return (
    <div>
      <Header />
      <main
        className={
          "transition-all duration-300 ease-out flex min-h-[calc(100dvh_-_212px)] items-center justify-center" +
          (isActive ? " -mt-[18.71rem]" : " mt-0")
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/study" element={<Study />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
