// import BazaarMenu from "./components/bazaarmenu";
//import Bazaarbutton from "./components/ButtonAppBar";
// import Bazaarbutton from "./components/ButtonAppBar";

import Collections from "./components/home/colllections/Collections";
import Nav from "./components/UI/navbar/Nav";
import Slide_Show from "./components/home/slideshow/Slideshow";
import Practical from "./components/home/slide_appbar/Practical_Applications/Practical_Slide";
import Chart from "./components/survey/Chart";
import Application from "./components/Application";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Practical />
      <Slide_Show/>
      <Collections/> */}
      {/* <Chart/> */}
      <Application/>
    </div>
  );
}

export default App;
