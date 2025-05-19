// Main.jsx
import { useState } from 'react';
import { getRecipeFromHuggingFace } from './ai.js'; // Import the function from ai.js
import Ingredient from './Ingredient.jsx';
import Recipe from './Recipe.jsx';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipee, setRecipe] = useState('');
  const [loadingRecipe, setLoadingRecipe] = useState(false);

  async function getRecipe() {
    setLoadingRecipe(true);
    const recipeMarkdown = await getRecipeFromHuggingFace(ingredients);
    setRecipe(recipeMarkdown);
    setLoadingRecipe(false);
  }

  function handleIngredientSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('Ingredient');
    if (newIngredient && !ingredients.includes(newIngredient.trim())) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient.trim()]);
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleIngredientSubmit}>
        <input
          type="text"
          aria-label="eg Rice"
          placeholder="Enter Ingredient"
          className="input-ingredient"
          name="Ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      <section>
        <Ingredient
          list={ingredients}
        />
        {ingredients.length >= 2 ? ( // Changed to 2 for easier testing, adjust as needed
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={getRecipe} disabled={loadingRecipe}>
              {loadingRecipe ? 'Generating...' : 'Get a recipe'}
            </button>
          </div>
        ) : (
          ingredients.length < 0 && <p>Add at least 2 more ingredients to generate a recipe.</p>
        )}
        {recipee && (
          <Recipe
            generated={recipee}
          />
        )}
      </section>
    </>
  );
}
