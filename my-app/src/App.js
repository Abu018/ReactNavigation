import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { Copy } from "./Copy/Copy";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Main></Main>
      <Footer />
      <Copy />
    </div>
  );
}

export default App;
