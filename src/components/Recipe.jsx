import PropTypes from "prop-types";

const Recipe = ({ recipe, handleCookingRecipe }) => {
  // console.log(recipe);

  const {
    calories,
    ingredients,
    preparing_time,
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
  } = recipe;

  return (
    // <div className="mb-12 mx-auto border rounded-lg">
    //   <div className="p-6 space-y-4 ">
    //     <img src={recipe_image} alt="" />
    //     <h3 className="text-xl font-semibold">{recipe_name}</h3>
    //     <p className="text-gray-500">{short_description}</p>
    //     <hr className="" />
    //     <h3 className="text-xl font-semibold">
    //       Ingredients: {recipe?.ingredients?.length}
    //     </h3>
    //     <div>
    //       {ingredients?.slice(0, 3).map((item, index) => (
    //         <li className="text-gray-500" key={index}>
    //           {item}
    //         </li>
    //       ))}
    //     </div>
    //     <hr />
    //     <div className="flex  items-center justify-start gap-4">
    //       <p className="text-xl">{preparing_time}</p>
    //       <p className="text-xl">{calories}</p>
    //     </div>
    //     <button className="bg-[#0BE58A] py-3 px-4 rounded-full ">
    //       Want to Cook
    //     </button>
    //   </div>
    // </div>
    <div className="mb-2 md:mx-auto  border rounded-lg flex flex-col ">
      <div className="p-6 space-y-4 flex-1 ">
        <img src={recipe_image} alt="" />
        <h3 className="text-xl font-semibold">{recipe_name}</h3>
        <p className="text-gray-500">{short_description}</p>
        <hr className="" />
        <h3 className="text-xl font-semibold">
          Ingredients: {recipe?.ingredients?.length}
        </h3>
        <div>
          {ingredients?.slice(0, 3).map((item, index) => (
            <li className="text-gray-500" key={index}>
              {item}
            </li>
          ))}
        </div>
        <hr />
        <div className="flex items-center justify-start gap-4">
          <p className="text-xl">{preparing_time} min</p>
          <p className="text-xl">{calories} Calories</p>
        </div>
      </div>

      {/* Button at the Bottom */}
      <div className="p-4">
        <button
          onClick={() => handleCookingRecipe(recipe, recipe_id)}
          className="bg-[#0BE58A] py-3 px-4 rounded-full w-full text-white"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleCookingRecipe: PropTypes.func,
};

export default Recipe;
