import React, { useState } from "react";
import { AddCategorias } from "./AddCategorias";
import { GiftGrid } from "./GiftGrid";

export const GifApp = () => {
  const [categorias, setCategorias] = useState([]);
  return (
    <>
      <h1>Este es el mejor buscador de Gif que podes encontrar</h1>;
      <AddCategorias setCategorias={setCategorias} categorias={categorias} />
      <h2>"Mejores Gif por categoria"</h2>
      <hr />
      <ol>
        {categorias.map((categoria) => {
          return <GiftGrid key={categoria} categoria={categoria} />;
        })}
      </ol>
    </>
  );
};
