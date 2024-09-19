import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GitGrid from "./components/GitGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const handleAddCategory = (newCategory: string) => {
    setCategories([...[newCategory, ...categories]]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={handleAddCategory} />

      {categories.map((category) => (
        <GitGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
