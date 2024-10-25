import PropTypes from "prop-types";

const RightSide = ({
  cookRecipes,
  handlePreparing,
  cooking,
  totalCalories,
  totalTime,
}) => {
  return (
    <div>
      <h2 className="text-center text-xl my-2 mt-6 md:mt-0">
        Want to cook: {cookRecipes.length}
      </h2>
      <hr className="w-2/3 mx-auto my-3" />
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </thead>
          {/* <tbody> */}
          {cookRecipes?.map((item, idx) => (
            <tbody key={idx}>
              <tr>
                <th>{idx + 1}</th>
                <td>{item?.recipe_name}</td>
                <td>{item?.preparing_time}</td>
                <td>{item?.calories}</td>
                <td>
                  <button
                    onClick={() => handlePreparing(item, item.recipe_id)}
                    className="bg-[#0BE58A] py-[10px] px-3 rounded-full w-full text-white"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
          {/* </tbody> */}
        </table>
      </div>

      {/* currently cooking  */}
      <h2 className="text-center text-xl my-2 mt-6 ">
        Currently Cooking: {cooking.length}
      </h2>
      <hr className="w-2/3 mx-auto my-3" />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </thead>
          {cooking?.map((item, idx) => (
            <tbody key={idx}>
              <tr>
                <th>{idx + 1}</th>
                <td>{item?.recipe_name}</td>
                <td>{item?.preparing_time}</td>
                <td>{item?.calories}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="flex  items-center justify-end gap-6 mr-8">
        <p>Total Time = {totalTime}</p>
        <p>Total Calories = {totalCalories}</p>
      </div>
    </div>
  );
};

RightSide.propTypes = {
  cookRecipes: PropTypes.array,
  cooking: PropTypes.array,
  handlePreparing: PropTypes.func,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default RightSide;
