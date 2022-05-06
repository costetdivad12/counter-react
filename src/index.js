import ReactDOM from "react-dom/client";
// import PrimeraApp from "./primeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CounterApp valor={200} />);
