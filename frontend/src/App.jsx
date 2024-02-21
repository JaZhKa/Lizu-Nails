import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Button from "./components/elements/Button";

function App() {
  const isActive = useSelector((state) => state.isActive.value);
  return (
    <div>
      <Header />
      <main
        className={
          "min-h-[calc(100dvh_-_212px)]" + (isActive ? " -mt-64" : " mt-0")
        }
      >
        <Routes>
          <Route path="/" element={<Button />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
