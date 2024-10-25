import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import RightSide from "./RightSide";

const OurRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [cookRecipes, setCookRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handlePreparing = (item, id) => {
    const cookingRecipe = cookRecipes?.find((item) => item.recipe_id === id);

    if (cookingRecipe) {
      const recipes = cookRecipes.filter((item) => item.recipe_id !== id);
      setCookRecipes(recipes);
      const newPreparingCooking = [...cooking, cookingRecipe];
      setCooking(newPreparingCooking);

      // total time
      const totalTime = newPreparingCooking?.reduce(
        (prev, current) => prev + current?.preparing_time,
        0
      );
      setTotalTime(totalTime);

      // total calories
      const totalCalories = newPreparingCooking?.reduce(
        (prev, current) => prev + current?.calories,
        0
      );
      setTotalCalories(totalCalories);
    } else {
      return;
    }
  };

  const handleCookingRecipe = (recipe, id) => {
    const duplicateData = cookRecipes?.find((item) => item.recipe_id === id);

    if (duplicateData) {
      return;
    } else {
      const newCookRecipes = [...cookRecipes, recipe];
      setCookRecipes(newCookRecipes);
    }
  };

  return (
    <div className="md:mt-12 my-6">
      <h2 className="text-4xl font-bold text-center">Our Recipes</h2>
      <p className="text-gray-300 text-center my-6 mx-4 md:mx-0 ">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
        elementum mauris aenean neque.{" "}
      </p>
      <div className="md:grid md:grid-cols-12 gap-4 md:mx-6 my-4">
        <div className="col-span-7">
          <div className="grid md:grid-cols-2 gap-4 px-4 md:px-0 col-span-2 ">
            {recipes.slice(0, 4).map((recipe, idx) => (
              <Recipe
                key={idx}
                recipe={recipe}
                handleCookingRecipe={handleCookingRecipe}
              />
            ))}
          </div>
        </div>
        <div className="col-span-5  px-4 md:px-0">
          <RightSide
            cookRecipes={cookRecipes}
            handlePreparing={handlePreparing}
            cooking={cooking}
            totalTime={totalTime}
            totalCalories={totalCalories}
          />
        </div>
      </div>
    </div>
  );
};

export default OurRecipe;
