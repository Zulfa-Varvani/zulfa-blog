import { useRef, useState } from 'react';
import '../constants/recipe.css';
import { Button } from '@mui/material';
import { Print } from '@mui/icons-material';

const Recipe = (props: { title: string; description : string;imageUrl:string; ingredients: string[]; steps:string[], source?: string }) => {
  const [expanded, setExpanded] = useState(false);
  const recipeRef = useRef<HTMLDivElement>(null);
  const { title, description, imageUrl, ingredients, steps, source} = props;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderIngredients = (ingredientsList: string[]) => {
    return (
      <ul>
          {ingredientsList.map((item, index) => {
              if (item.startsWith("- ")) {
                  return (
                    <ul>
                    <li key={index}>{item.substring(2)}</li>
                    </ul>
                  );
              } else {
                  return (
                      <li key={index}>
                          {item}
                      </li>
                  );
              }
          })}
      </ul>
    );
  };

  const renderSteps = (stepsList: string[]) => {
    return (
      <ol>
          {stepsList.map((step, index) => {
              if (step.startsWith("- ")) {
                  return (
                    <ul>
                    <li key={index}>{step.substring(2)}</li>
                    </ul>
                  );
              } else {
                  return (
                      <li key={index}>
                          {step}
                      </li>
                  );
              }
          })}
      </ol>
    );
  };

  const handlePrint = () => {
    if (recipeRef.current) {
      const content = recipeRef.current.innerHTML;
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${title}</title>
              <link rel="stylesheet" href="../constants/recipe.css">
            </head>
            <body>
              ${content}
              <script>
                window.onload = function() {
                  window.print();
                  window.close();
                }
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  return (
    <div className="recipe-container" >
      <div className="header">
        <div className="recipe-title">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="recipe-image-container">
          <img src={imageUrl} alt={title} className="recipe-image" />
          {source && <p className="image-source">Source: {source}</p>}
        </div>
      </div>
      {expanded && (
          <div className="details" ref={recipeRef}>
              <h3>Ingredients</h3>
              {renderIngredients(ingredients)}
              <h3>Steps</h3>
              {renderSteps(steps)}
          </div>
      )}
      <div className="buttons">
        <Button variant="contained" onClick={toggleExpanded} color='secondary'>{expanded ? 'Collapse Recipe' : 'Read More'}</Button>
        <Button variant="outlined" startIcon={<Print/>} color='secondary' onClick={handlePrint} disabled={!expanded}>Print Recipe</Button>
      </div>
    </div>
  );
};

export default Recipe;