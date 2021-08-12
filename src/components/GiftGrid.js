import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ categoria, handleDelete }) => {
  const { data, loading } = useFetchGifs(categoria);

  return (
    <div>
      <div className="categorias">
        <h3>{categoria}</h3>
        <button
          className="buttonDelete2"
          onClick={() => handleDelete(categoria)}
        >
          X
        </button>
      </div>
      <div>
        {loading && <h4>Cargando</h4>}
        <ol className="gif-container">
          {data.map((img) => {
            return <GiftGridItem key={img.id} img={img} />;
          })}
        </ol>
        <hr />
      </div>
    </div>
  );
};
