import { Cart } from "./cart-context";
import "./components.css";
import { useState, useReducer } from "react";
import StarRatingComponent from "react-rating-stars-component";

export function Products() {
  const { state, dispatch } = Cart();
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [
    { showInventoryAll, showFastDeliveryOnly, sortBy },
    action
  ] = useReducer(reducerFunc, {
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    sortBy: null
  });

  function reducerFunc(state, action) {
    switch (action.type) {
      case "TOGGLE_INVENTORY":
        return (state = { ...state, showInventoryAll: !showInventoryAll });

      case "TOGGLE_DELIVERY":
        return (state = {
          ...state,
          showFastDeliveryOnly: !showFastDeliveryOnly
        });

      case "SORT":
        console.log("sorting case is running");
        return { ...state, sortBy: action.payload };

      default:
        return state;
    }
  }

  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }

    return productList;
  }

  function getFilteredData(
    productList,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return productList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const data = state.products;

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll
  });

  return (
    <div>
      <h1 className="main-heading">Products</h1>
      <div className="productPage">
        <div className="filterSection" id={showSideDrawer ? "hidden" : ""}>
          <h4>FILTERS</h4>
          <label className="labelHeading">Sort By</label>
          <label className="labelOptions">
            <input
              type="radio"
              name="sort"
              onChange={() =>
                action({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
              }
              checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            />
            Low to High
          </label>
          <label className="labelOptions">
            <input
              type="radio"
              name="sort"
              onChange={() =>
                action({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            />
            High to Low
          </label>

          <label className="labelHeading">Filter By </label>
          <label className="labelOptions">
            <input
              type="checkbox"
              onChange={() => action({ type: "TOGGEL_INVENTORY" })}
            />
            Stocks
          </label>
          <label className="labelOptions">
            <input
              type="checkbox"
              onChange={() => action({ type: "TOGGLE_DELIVERY" })}
            />
            Delivery
          </label>
        </div>

        <div className="productListing">
          {filteredData.map((item) => {
            return (
              <div
                key={item.id}
                className="productCard"
                style={{
                  border: "1px hidden white",
                  margin: "1rem",
                  padding: "1rem",
                  borderRadius: "0.5rem"
                }}
              >
                <img src={item.url} alt="item_image" />
                <h3 className="productName">{item.name}</h3>
                <h5 className="typeProduct">{item.type}</h5>
                <span>
                  <strong className="price">Rs. {item.price}</strong>
                  <s className="discountPrice">Rs. {item.discount}</s>
                  <i className="offer">({item.offer})</i>
                </span>
                <br />
                <h5>
                  <StarRatingComponent
                    name="rating"
                    starCount={5}
                    value={item.rating}
                  />
                </h5>
                {item.inStock && <div>(In stock)</div>}
                {item.fastDelivery ? (
                  <div>(Fast delivery available)</div>
                ) : (
                  <div> (minimum 3 days) </div>
                )}
                <div className="cardButton">
                  <button
                    className="btn"
                    onClick={() =>
                      dispatch({ type: "ADDTOWISHLIST", payload: item })
                    }
                  >
                    Wishlist
                  </button>
                  <button
                    className="btn"
                    onClick={() =>
                      dispatch({ type: "ADDTOCART", payload: item })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => setShowSideDrawer(!showSideDrawer)}
          className="p link-no-style pointer-event-none-L text-regular-weight filterButton"
        >
          FILTERS
        </button>
      </div>
    </div>
  );
}
