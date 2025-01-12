import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import Iphone from "./components/Iphone";
import Watch from "./components/Watch";
import Vision from "./components/Vision";
import AirPods from "./components/AirPods";
import TV from "./components/TV";
import Entertainment from "./components/Entertainment";
import Accessories from "./components/Accessories";
import Support from "./components/Support";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/airpods" element={<AirPods />} />
          <Route path="/TV&Home" element={<TV />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      
    </>
  );
}

export default App;
