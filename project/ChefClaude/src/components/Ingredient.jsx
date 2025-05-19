import React from 'react';

export default function Ingredient({ list }) {
  const ingredientListItems = list.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <>
      {list.length > 0 && (
        <ul>
          <h3>Ingredients:</h3>
          {ingredientListItems}
        </ul>
      )}
    </>
  );
}
