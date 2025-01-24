import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Stolas' ]);
  
  const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory))
      return;

    setCategories([ newCategory, ...categories ]);
  };

  const onEliminateCategory = (category) => {
    const newCategories = categories.filter(cat => cat !== category);
    setCategories(newCategories);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ onNewCategory }
      />

      {
        categories.map(category => (
          <GifGrid
            key={ category }
            category={ category }
            onEliminate={ () => onEliminateCategory(category) }
          />
        ))
      }
    </>
  )
}