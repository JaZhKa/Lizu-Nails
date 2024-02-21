import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const isActive = useSelector((state) => state.isActive.value);
  return (
    <div>
      <Header />
      <main className={"min-h-[calc(100dvh_-_212px)]" + (isActive ? " -mt-64" : " mt-0")}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste
        ipsam atque eligendi veniam magnam adipisci quibusdam fuga porro sed
        cupiditate deserunt deleniti, assumenda voluptas accusamus. Vel eos
        omnis cumque repellat nihil accusamus voluptas consequuntur similique
        molestiae earum.
      </main>
      <Footer />
    </div>
  );
}

export default App;
