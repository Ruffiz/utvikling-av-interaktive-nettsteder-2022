const Food = ({ food }) => {
  food = [
    { id: 1, food: "Pizza" },
    { id: 2, food: "Hamburger" },
    { id: 3, food: "Coke" },
  ];
  return (
    <ul className="list">
      {food.map((foodType) => (
        <li key={foodType.id}>{foodType.food}</li>
      ))}
    </ul>
  );
};

export default Food;
