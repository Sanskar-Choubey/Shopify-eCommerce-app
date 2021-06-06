import { createContext, useContext, useReducer } from "react";
import faker from "faker";
const CartContext = createContext();

faker.seed(123);

const products = [
  {
    id: 1,
    name: "HRX by Hrithik Roshan",
    price: 384,
    discount: 699,
    offer: "45% OFF",
    quantity: 0,
    rating: 4,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
    type: "Printed Round Neck T-shirt"
  },
  {
    id: 2,
    name: "HERE&NOW",
    price: 374,
    discount: 749,
    offer: "50% OFF",
    quantity: 0,
    rating: 4,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",
    type: "Men printed round neck t-shirt"
  },
  {
    id: 3,
    name: "H&M",
    price: 319,
    discount: 399,
    offer: "20% OFF",
    quantity: 0,
    rating: 3,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1f5471ec-c783-4fa7-99f4-2b6f6fb251761580946317672-1.jpg",
    type: "Cotton T-shirt regular fit"
  },
  {
    id: 4,
    name: "Japani Joota",
    price: 1799,
    discount: 2999,
    offer: "40% OFF",
    quantity: 0,
    rating: 5,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10984590/2020/6/12/3a8213bd-6342-44cb-a365-7bfa2f1b3b611591945395042-Nautica-Men-Tshirts-7101591945394015-1.jpg",
    type: "Slim fit printed polo t-shirt"
  },
  {
    id: 5,
    name: "Levis",
    type: "Colorblocked Round Neck T-shirt",
    price: 949,
    discount: 1899,
    offer: "50% OFF",
    quantity: 0,
    rating: 4,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9909373/2019/8/5/51bd1125-482a-4915-89fb-7a2370f6a8031564998277396-Levis-Men-White--Red-Colourblocked-Round-Neck-T-shirt-806156-1.jpg"
  },
  {
    id: 6,
    name: "GAP",
    type: "Embroidered Round Neck Tshirt",
    price: 1331,
    discount: 1799,
    offer: "26% OFF",
    quantity: 0,
    rating: 4,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12714120/2020/11/12/f4528481-bbe7-4a90-b0e2-f36d8ed21a501605173648996-GAP-Men-Tshirts-2251605173647438-1.jpg"
  },
  {
    id: 7,
    name: "GAP",
    type: "Striped Polo Collar Tshirt",
    price: 1259,
    discount: 1799,
    offer: "30% OFF",
    quantity: 0,
    rating: 5,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11323996/2020/3/13/5ea9032c-b997-4094-ac31-e64fab4736e31584083472452-GAP-Men-Navy-Blue-Printed-Polo-Collar-T-shirt-95315840834709-1.jpg"
  },
  {
    id: 8,
    name: "Nike",
    type: "Slim DRI-FIT Running T-shirt",
    price: "1995",
    discount: "",
    offer: "",
    quantity: 0,
    rating: 3,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13132450/2020/12/9/e3d5744a-279d-44b1-a4a3-d614ef74de261607505975057-Nike-Miler-Future-FastMens-Running-Top-4661607505973754-1.jpg"
  },
  {
    id: 9,
    name: "Nike",
    type: "Printed FUTURA T-shirt",
    price: 789,
    discount: 1295,
    offer: "39% OFF",
    quantity: 0,
    rating: 5,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10139275/2019/7/15/7652965f-87d9-4cb6-88c1-b924cf8c4c041563167450709-Nike-Sportswear-151563167449044-1.jpg"
  },
  {
    id: 10,
    name: "U.S.Polo Assn.",
    type: "Solid Polo Collar T-shirt",
    price: 1049,
    discount: 1499,
    offer: "30% OFF",
    quantity: 0,
    rating: 4,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11359752/2020/6/22/405a74c9-8db8-40d1-80bb-2c45106627ca1592819083901ShirtsUSPoloAssnMenShirtsUSPoloAssnMenShirtsUSPoloAssnMenShi1.jpg"
  },
  {
    id: 11,
    name: "UCB",
    type: "Cotton Colourblocked T-shirt",
    price: 1699,
    discount: "",
    offer: "",
    quantity: 0,
    rating: 5,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13860234/2021/4/20/a4ddcf2a-ef1e-449e-a320-7a69a558d55c1618914680923AlcisMenBlackGreyColourblockedSweatshirtTopsMarksSpencerWome1.jpg"
  },
  {
    id: 12,
    name: "UCB",
    type: "Regular Fit Smart Casual Shirt",
    price: 2699,
    discount: "",
    offer: "",
    quantity: 0,
    rating: 4,
    inStock: faker.random.boolean(),
    fastDelivery: faker.random.boolean(),
    url:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12529452/2020/10/13/835f5521-7b6e-46b7-a938-7b0192b455601602590114550-United-Colors-of-Benetton-Men-Black-Regular-Fit-Solid-Smart--1.jpg"
  }
];

export const itemsInCart = [];
export const itemsInWishlist = [];

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, {
    products,
    itemsInCart,
    itemsInWishlist
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function Cart() {
  return useContext(CartContext);
}

function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "SUB":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case "REMOVE":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload.id
        )
      };

    case "REMOVEFROMWISHLIST":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (item) => item.id !== action.payload.id
        )
      };

    case "ADDTOCART":
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload]
      };

    case "ADDTOWISHLIST":
      return {
        ...state,
        itemsInWishlist: [...state.itemsInWishlist, action.payload]
      };

    default:
      console.log("you broke something check once again for the error");
  }
}
