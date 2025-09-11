import { createRoot } from "react-dom/client";
import { CartProvider } from "./CartContext.jsx";
import CartContext from "./CartContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
