import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about-us" element={<About></About>}></Route>
        <Route path="/contact-us" element={<Contact></Contact>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
