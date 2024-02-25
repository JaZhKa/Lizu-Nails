import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const isActive = useSelector((state) => state.isActive.value);
  return (
    <div>
      <Header />
      <main
        className={
          "min-h-[calc(100dvh_-_212px)] flex items-center justify-center" + (isActive ? " -mt-[18.7rem]" : " mt-0")
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
