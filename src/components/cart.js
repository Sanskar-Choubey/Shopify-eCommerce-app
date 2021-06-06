import { Cart } from "./cart-context";

export function CartHeader() {
  const { state } = Cart();
  return (
    <div>
      <h4 className="cartHeader">Items in Cart</h4>
      {state.itemsInCart.length}
    </div>
  );
}

export function CartItems() {
  const { state, dispatch } = Cart();

  const getAmount = (items) => {
    return items.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    );
  };

  const EmptyCart = () => {
    return (
      <div className="emptyCartSection">
        <img
          src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
          alt=""
          height="300px"
        />
        <h3>
          Looks like your cart is empty.
          <br />
          Please add something
        </h3>
      </div>
    );
  };

  const CartItems = () => {
    return (
      <div className="cartSection">
        <div className="cartListing section1">
          {state.itemsInCart.map((item) => {
            return (
              <div
                key={item.id}
                className="productCard cartCard"
                style={{
                  border: "1px hidden grey",
                  margin: "1rem",
                  padding: "1.5rem",
                  borderRadius: "0.5rem"
                }}
              >
                <img src={item.url} alt="itemImage" />
                <h2 className="cartCardTitle">{item.name}</h2>
                <p className="productPrice">Price : {item.price} INR</p>
                <span className="cartSpan">
                  <button
                    onClick={() => dispatch({ type: "ADD", payload: item })}
                    className="btn cartBtn"
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => dispatch({ type: "SUB", payload: item })}
                    className="btn"
                  >
                    -
                  </button>
                </span>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  className="btn btn1"
                >
                  Remove from cart
                </button>
              </div>
            );
          })}
        </div>
        <div className="section2">
          <h4>Price Details</h4>
          <span className="priceSpan">
            <p>Total : </p>
            <p>{getAmount(state.itemsInCart)}INR</p>
          </span>
        </div>
      </div>
    );
  };
  return (
    <div>
      <h1 className="main-heading">Cart</h1>
      <CartHeader />
      {state.itemsInCart.length === 0 ? <EmptyCart /> : <CartItems />}
    </div>
  );
}
