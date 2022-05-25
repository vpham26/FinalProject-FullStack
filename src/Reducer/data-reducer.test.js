import { dataReducer } from "./data-reducer";

describe("testing cart modification operations on data reducer", () => {
  test("should load products already in cart once use logs in", () => {
    //Arrange
    const action = {
      type: "SET_CART",
      payload: [
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: false,
          quantity: ,
        },
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: true,
          quantity: ,
        },
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: false,
          quantity: ,
        },
      ],
    };
    const initialState = {
      itemsInCart: [],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      itemsInCart: [
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: false,
          quantity: ,
        },
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: true,
          quantity: ,
        },
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: false,
          quantity: ,
        },
      ],
    });
  });
});

test("should remove the product from wishlist if it exists and add the product to cart; should update the quantity of an existing product in cart", () => {
  //Arrange
  const action = {
    type: "ADD_TO_CART",
    payload: {
      _id: ,
      name: "",
      inStock: true,
      fastDelivery: false,
    },
  };

  const cartData = {
    itemsInWishlist: [
      {
        _id: ,
        name: ",
        inStock: true,
        fastDelivery: false,
      },
    ],
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: true,
        quantity: ,
      },
    ],
    toastMsg: "",
  };

  //Act
  let state = dataReducer(cartData, action);

  //Assert
  expect(state).toEqual({
    itemsInWishlist: [],
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: true,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
    toastMsg: '"" added to cart',
  });

  //Act
  state = dataReducer(state, action);

  //Assert
  expect(state).toEqual({
    itemsInWishlist: [],
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: true,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
    toastMsg: "Cart updated successfully!",
  });
});

test("should decrement the quantity or remove an item from cart", () => {
  //Arrange
  const action = {
    type: "DECREMENT_FROM_CART",
    payload: {
      _id: ,
      name: "",
      inStock: true,
      fastDelivery: false,
    },
  };

  let state = {
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
    toastMsg: "",
  };

  //Act
  state = dataReducer(state, action);

  //Assert
  expect(state).toEqual({
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
    toastMsg: "Cart updated successfully!",
  });

  //Act
  state = dataReducer(state, action);

  //Assert
  expect(state).toEqual({
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
    toastMsg: "Cart updated successfully!",
  });
});

test("should remove an individual item from cart", () => {
  //Arrange
  const action = {
    type: "REMOVE_FROM_CART",
    payload: {
      _id: ,
      name: "",
      inStock: true,
      fastDelivery: false,
    },
  };

  let state = {
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
    toastMsg: "",
  };

  //Act
  state = dataReducer(state, action);
  //Assert
  expect(state).toEqual({
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
    toastMsg: '" removed from cart',
  });
});

test("should remove all items in the cart", () => {
  //Arrange
  const action = {
    type: "CLEAR_CART",
  };

  let state = {
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
    ],
  };

  //Act
  state = dataReducer(state, action);

  //Assert
  expect(state).toEqual({
    itemsInCart: [],
  });
});

describe("testing wishlist operations on data reducer", () => {
  test("should load products into wishlist when user logs in", () => {
    //Arrange
    const action = {
      type: "SET_WISHLIST",
      payload: [
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: false,
        },
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: true,
        },
        {
          _id: ,
          name: "Crossrope get lean set",
          inStock: false,
          fastDelivery: false,
        },
      ],
    };

    const initialState = {
      itemsInWishlist: [],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      itemsInWishlist: [
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: false,
        },
        {
          _id: ,
          name: "",
          inStock: true,
          fastDelivery: true,
        },
        {
          _id: ,
          name: "",
          inStock: false,
          fastDelivery: false,
        },
      ],
    });
  });
});

test("should add product into wishlist & remove from cart if it exists", () => {
  //Arrange
  const action = {
    type: "ADD_TO_WISHLIST",
    payload: {
      _id: ,
      name: "",
      inStock: true,
      fastDelivery: false,
    },
  };

  let state = {
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: true,
        quantity: ,
      },
    ],
    itemsInWishlist: [
      {
        _id: ,
        name: "",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: "",
  };

  //Act
  state = dataReducer(state, action);

  //Assert
  expect(state).toEqual({
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: true,
        quantity: ,
      },
    ],
    itemsInWishlist: [
      {
        _id: ,
        name: "",
        inStock: false,
        fastDelivery: true,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
      },
    ],
    toastMsg: '"" added to wishlist',
  });
});

test("should remove product from wishlist", () => {
  //Arrange
  const action = {
    type: "REMOVE_FROM_WISHLIST",
    payload: {
      _id: ,
      name: "",
      inStock: true,
      fastDelivery: false,
    },
  };

  let state = {
    itemsInWishlist: [
      {
        _id:,
        name: "",
        inStock: true,
        fastDelivery: false,
      },
      {
        _id: ,
        name: "",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: "",
  };

  //Act
  state = dataReducer(state, action);

  //Assert
  expect(state).toEqual({
    itemsInWishlist: [
      {
        _id: ,
        name: "",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: '"" removed from wishlist',
  });
});

test("should move product into wishlist & remove from cart", () => {
  //Arrange
  const action = {
    type: "MOVE_TO_WISHLIST",
    payload: {
      _id: ,
      name: "",
      inStock: true,
      fastDelivery: false,
    },
  };

  let state = {
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
        quantity: ,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: true,
        quantity: ,
      },
    ],
    itemsInWishlist: [
      {
        _id: ,
        name: "",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: "",
  };

  //Act
  state = dataReducer(state, action);

  //Assert
  expect(state).toEqual({
    itemsInCart: [
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: true,
        quantity: ,
      },
    ],
    itemsInWishlist: [
      {
        _id: ,
        name: "",
        inStock: false,
        fastDelivery: true,
      },
      {
        _id: ,
        name: "",
        inStock: true,
        fastDelivery: false,
      },
    ],
    toastMsg: '"" moved to wishlist',
  });
});
