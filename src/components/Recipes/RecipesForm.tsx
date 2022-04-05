import React, { useRef, ChangeEvent, FormEvent } from "react";
import lodash from "lodash";

interface Props {
  onInputChange: (query: any) => void;
}

const RecipesForm = (props: Props) => {
  const inputQuery = useRef<HTMLInputElement>(null);

  const handleInput = lodash.debounce((e: ChangeEvent<HTMLInputElement>) => {
    searchForRecipe();
  }, 500);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForRecipe();
  };

  const searchForRecipe = () => {
    const searchQuery = inputQuery.current?.value;
    if (searchQuery) props.onInputChange(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        required
        onChange={handleInput}
        ref={inputQuery}
        type="text"
        autoFocus
        placeholder="Search Recipe..."
      />
    </form>
  );
};

export default RecipesForm;
