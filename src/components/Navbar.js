import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import Heart from "../resources/icons/heart.png";
import ShoppingBag from "../resources/icons/shopping-bag.png";
import UserAvatar from "../resources/icons/user.png";
import { Link } from "react-router-dom";

export function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div>
          <h4 className="Logo" style={{ margin: "0.5rem" }}>
            Shopify
          </h4>
        </div>

        <div className="links" id={showLinks ? "hidden" : ""}>
          {/* <a href="/Men">Men</a>
          <a href="/products">Women</a>
          <a href="/aboutUs">Kids</a> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <li onClick={() => setShowLinks(!showLinks)}>Home</li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li onClick={() => setShowLinks(!showLinks)}>Products</li>
          </Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>

      <div className="rightSide">
        <input type="text" placeholder="Search for products.." />
        <button>
          <SearchIcon />
        </button>

        <span>
          <Link
            to="/wishlist"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img className="icons" src={Heart} alt="navLinkIcon" />
            <h6 className="iconDesc">Wishlist</h6>
          </Link>
        </span>

        <span>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <img className="icons" src={ShoppingBag} alt="navLinkIcon" />
            <h6 className="iconDesc">Bag</h6>
          </Link>
        </span>

        <span>
          <img className="icons" src={UserAvatar} alt="navLinkIcon" />
          <h6 className="iconDesc">Profile</h6>
        </span>
      </div>

      {/* <div className="extremeRightSide">
        <span>
          <img className="icons" src={Heart} alt="" />
          <h6 className="iconDesc">Wishlist</h6>
        </span>

        <span>
          <img className="icons" src={ShoppingBag} alt="" />
          <h6>Bag</h6>
        </span>

        <span>
          <img className="icons" src={UserAvatar} alt="" />
          <h6>Profile</h6>
        </span>
      </div> */}
    </div>
  );
}
