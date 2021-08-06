import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategorias = ({ setCategorias, categorias }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const compara = categorias.find((cat) => cat === text);
    if (text === "") {
      alert("ESCRIBA UNA CATEGORIA");
    } else if (compara === text) {
      alert("ESA CATEGORIA YA EXISTE");
    } else {
      setCategorias([text, ...categorias]);
      setText("");

      // setCategorias((cat =>[...cat, text]));
      // setText("");
    }
  };

  const handleDelete = () => {
    var filtrados = categorias.filter((c) => c !== text);
    setCategorias(filtrados);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Ingrese Categoria"
          onChange={handleChange}
          value={text}
        />
      </form>
      <button onClick={handleDelete}>Borrar Categoria</button>
    </>
  );
};

AddCategorias.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
