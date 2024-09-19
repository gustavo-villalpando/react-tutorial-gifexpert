import { useState } from "react";

type AddCategoryProps = {
  onNewCategory: (newCategory: string) => void;
};

function AddCategory({ onNewCategory }: AddCategoryProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChance = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSummit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSummit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleChance}
      />
    </form>
  );
}

export default AddCategory;
