import React from "react";
import "../style/productDetail.css";

const ProductDetail = ({product}) => {
    const {nombre, descripcion, precio,sku, cantidadDisponible } = product;
 
return(
    <div className= "product-detail">
      <h1>PRODUCTO</h1>
      <p>Nombre: {nombre}</p> 
      <p>Descripción:{descripcion}</p>
      <p>Precio: ${precio}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad disponible:  {cantidadDisponible}</p> 
    </div>
);
};

export default ProductDetail