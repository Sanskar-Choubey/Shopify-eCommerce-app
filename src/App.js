import "./App.css";

import { Navbar } from "./components/Navbar";
import { HomePageContent } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { CartItems } from "./components/cart";
import { WishListItems } from "./components/wishlist";

import { Footer } from "./components/footer";

export default function App() {
  return (
    <body className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePageContent} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={CartItems} />
            <Route path="/wishlist" component={WishListItems} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </body>
  );
}
