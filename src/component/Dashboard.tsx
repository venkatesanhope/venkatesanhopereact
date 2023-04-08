import { useState } from "react";

const Dashboard = () => {
    
  const [age, setAge] = useState(25);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const decrementAge = () => {
    setAge(age - 1);
  };

  return (
    <div className="App">
      {age}
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={decrementAge}>Decrement Age</button>
    </div>
  );
};

export default Dashboard;