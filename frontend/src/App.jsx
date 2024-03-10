import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";

function App() {
  const isActive = useSelector((state) => state.isActive.value);
  return (
    <div>
      <Header />
      <main
        className={
          "flex min-h-[calc(100dvh_-_212px)] items-center justify-center" +
          (isActive ? " -mt-[18.7rem]" : " mt-0")
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
