import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ categoria }) => {
  const { data, loading } = useFetchGifs(categoria);

  return (
    <div>
      <h3>
        {categoria} <button className="buttonDelete">X</button>
      </h3>

      {loading && <h4>Cargando</h4>}
      <ol className="gif-container">
        {data.map((img) => {
          return <GiftGridItem key={img.id} img={img} />;
        })}
      </ol>
      <hr />
    </div>
  );
};
