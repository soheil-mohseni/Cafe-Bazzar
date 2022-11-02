// import BazaarMenu from "./components/bazaarmenu";
//import Bazaarbutton from "./components/ButtonAppBar";
// import Bazaarbutton from "./components/ButtonAppBar";

import Nav from "./components/navbar/Nav";
import Bankbar from "./components/slide_appbar/E-bank Apps/Bank_Slide";
import Practical from "./components/slide_appbar/Practical_Applications/Practical_Slide";
import Search2 from "./components/UI/Search2";

function App() {
  return (
    <div className="App">
      <Nav />
      <Practical />
      <Bankbar />
    </div>
  );
}

export default App;
