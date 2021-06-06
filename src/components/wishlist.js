import { Cart } from "./cart-context";

export function WishListItems() {
  const { state, dispatch } = Cart();

  function EmptyWishList() {
    return (
      <div>
        <h2>Your wishlist is empty</h2>
      </div>
    );
  }

  function WishlistItems() {
    return (
      <div>
        <p className="cartHeader">
          Items in wishlist : {state.itemsInWishlist.length}{" "}
        </p>
        <div className="productListing wishListing">
          {state.itemsInWishlist.map((item) => {
            return (
              <div
                className="productCard"
                style={{
                  border: "1px hidden white",
                  margin: "1rem",
                  padding: "1rem",
                  borderRadius: "0.5rem"
                }}
              >
                <img src={item.url} alt="" />
                <h3 className="productName">{item.name}</h3>
                <h5 className="typeProduct">{item.type}</h5>
                <span>
                  <strong className="price">Rs. {item.price}</strong>
                  <s className="discountPrice">Rs. {item.discount}</s>
                  <i className="offer">({item.offer})</i>
                </span>
                <button
                  className="btn"
                  onClick={() => dispatch({ type: "ADDTOCART", payload: item })}
                >
                  Add to cart
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVEFROMWISHLIST", payload: item })
                  }
                  className="btn btn1"
                >
                  Remove from wishlist
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="main-heading">Wishlist</h2>
      {state.itemsInWishlist.length === 0 ? (
        <EmptyWishList />
      ) : (
        <WishlistItems />
      )}
    </div>
  );
}
