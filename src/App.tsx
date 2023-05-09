import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;
  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <h1>hello</h1>
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );
}

export default App;
