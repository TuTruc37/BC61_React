import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import DemoBootstrap from "./demoBootstrap/DemoBootstrap";
import Ex_Binding from "./Ex_Binding/Ex_Binding";
import Ex_Event from "./Ex_Event/Ex_Event";
import Ex_DemoState from "./Ex_DemoState/Ex_DemoState";
import Ex_ShoeShop from "./Ex_ShoeShop/Ex_ShoeShop";
import Ex_Redux from "./Ex_Redux/Ex_Redux";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Header />
      <div style={{ display: "flex", height: "50vh" }}>
        <Navigation />
        <Content />
      </div>
      <Footer /> */}
      {/* <DemoBootstrap /> */}
      {/* <Ex_Binding /> */}
      {/* <Ex_Event /> */}
      {/* <Ex_DemoState /> */}
      {/* <Ex_ShoeShop /> */}
      {/* <Ex_Redux /> */}
      <Routes>
        <Route path="/redux" element={<Ex_Redux />} />
      </Routes>
    </>
  );
}

export default App;
