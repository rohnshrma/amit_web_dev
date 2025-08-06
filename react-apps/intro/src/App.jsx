import Card from "./Components/Card";
import "./App.css";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
// import { data } from "./data";

const App = () => {
  console.log("App rendered");

  return (
    <div>
      <h1>Hello React</h1>
      <h2>bye world</h2>

      <div className="main">
        {/* {data.map((item) => {
          return (
            <Card
              imgURL={item.imgURL}
              title={item.title}
              name={item.name}
              email={item.email}
            />
          );
        })} */}

        <Counter />
        <Timer />
      </div>
    </div>
  );
};

export default App;
