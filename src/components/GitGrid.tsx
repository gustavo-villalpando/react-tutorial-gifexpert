//import { useEffect } from "react";
import GitGridItem from "./GitGridItem";
import { useTetchGits } from "../hooks/useTetchGits";

type GitGridProps = {
  category: string;
};

function GitGrid({ category }: GitGridProps) {
  const { images, isLoading } = useTetchGits(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GitGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default GitGrid;
