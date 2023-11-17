import React from "react";
import ProductDetail from "./components/productDetail/productDetail";

const productData ={
  nombre: "Zapatillas Adida",
  descripcion:"Talle 37-38-39-4, de color rojo, negra y blanco",
  precio: 250000,
  sku: "ABC123",
  cantidadDisponible: 40,
}
function App() {
  return (
    <div className="App">
      <ProductDetail product={productData}/>
    </div>
  );
}

export default App;
