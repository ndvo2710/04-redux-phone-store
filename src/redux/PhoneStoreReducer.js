const initialState = {
  cart: [
    {
      id: 1,
      name: "VinSmart Live",
      quantity: 3,
      price: 5700000,
      img: "./img/vsphone.jpg"
    }
  ]
};

const phoneStoreReducer = (state = initialState, action) => {
  return { ...state };
};

export default phoneStoreReducer;
