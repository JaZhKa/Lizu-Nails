import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const isActive = useSelector((state) => state.isActive.value);
  return (
    <div>
      <Header />
      <main className={isActive ? "-mt-64" : "mt-0"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste
        ipsam atque eligendi veniam magnam adipisci quibusdam fuga porro sed
        cupiditate deserunt deleniti, assumenda voluptas accusamus. Vel eos
        omnis cumque repellat nihil accusamus voluptas consequuntur similique
        molestiae earum. Cupiditate consectetur molestias accusamus in cum rem!
        Dolore iure sapiente, minus beatae doloribus inventore voluptatem
        molestiae? Reiciendis esse tenetur molestiae illum voluptatibus earum
        saepe sunt porro omnis, quaerat perferendis, inventore incidunt quos sit
        veniam qui numquam, suscipit placeat! Error eos unde facilis et, non
        reiciendis praesentium pariatur consequatur aperiam earum incidunt
        veritatis quia, perspiciatis ipsa dolorum fugit cumque in ratione totam!
        Dolorum necessitatibus pariatur consequatur tempore ex atque fuga a
        recusandae vel dolores expedita ipsum, eius quas cum ullam quidem
        officiis in quia ad odit doloribus tempora quae nulla. Quam, sint omnis
        molestiae temporibus nostrum quasi dolorem! Alias iusto odit quaerat
        adipisci placeat dolor mollitia ea voluptate atque ab modi suscipit
        beatae exercitationem consectetur neque ullam quam obcaecati
        repudiandae, maxime eveniet ut incidunt distinctio officiis aspernatur.
        Autem ut, veniam ipsa distinctio libero sint hic in accusantium
        exercitationem dolores atque delectus blanditiis nobis. Quas recusandae
        quisquam expedita adipisci totam nulla! Error, quidem suscipit.
        Necessitatibus nesciunt aut aliquid doloribus illum? Eaque soluta
        cupiditate veritatis qui deleniti corrupti obcaecati fugiat, quos itaque
        accusantium aperiam totam! Consequuntur ratione minima expedita odit sit
        perferendis officiis architecto, vitae quos ea inventore delectus
        exercitationem voluptatum. Nihil, minima quas non, aut impedit quo
        aspernatur eos reprehenderit libero voluptate excepturi ad voluptates
        doloremque cum totam aliquam tempora necessitatibus sequi possimus
        laborum dolorem fuga accusantium obcaecati. Distinctio vero itaque
        repudiandae magni dolorem, ut illo voluptatibus ex, ipsam asperiores
        fugit iure assumenda est! Quos doloribus expedita, accusantium odio
        corrupti mollitia soluta dolores, ipsum molestias hic ratione optio
        beatae tempore laudantium est ducimus fugit fugiat voluptatem modi
        accusamus vero possimus eum rerum adipisci? Hic tenetur minima quo
        voluptatem amet! Eveniet vitae sapiente veritatis ratione expedita
        voluptates reiciendis optio incidunt, voluptatum soluta amet rerum illum
        nobis mollitia ullam, dolores magnam voluptate repudiandae omnis odit
        quo ipsa tenetur? Neque quod itaque iste quam nisi numquam recusandae.
        Nihil eos nostrum, iste tempora magni quaerat alias porro. Nobis
        deleniti mollitia, odit quam rem, iusto animi repellat, porro totam
        accusamus cupiditate in? Neque tempora modi sunt voluptatum maxime
        tenetur eum, esse cum sit beatae, eveniet quisquam ex eius quas quis
        iusto dignissimos atque minima qui provident quos corrupti error? Nisi
        illo expedita maxime quos, ducimus eos asperiores natus inventore qui
        iure voluptate officia aliquid veniam quo dolorem. Provident obcaecati
        nobis modi accusantium ullam voluptate sit! Saepe in eius porro, nisi
        quos quisquam quia sit minus tempora impedit quasi sunt nam nemo,
        nostrum unde enim libero molestiae itaque? Eos rerum illum minus dolorum
        eveniet eum similique, ullam necessitatibus eligendi laborum, libero
        quis optio blanditiis vel ipsum error ipsam? Veritatis soluta nam
        deleniti excepturi cumque! Quos aliquid blanditiis modi minima, quidem
        laboriosam cupiditate sunt similique temporibus aperiam repellat
      </main>
      <Footer />
    </div>
  );
}

export default App;
