import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
const App = () => {
  return (
    <>
      <Header />
      <div
        id="main"
        className="m-4 row justify-content-between align-items-start"
      >
        <Menu />
        <Cart />
      </div>
    </>
  );
};

export default App;
