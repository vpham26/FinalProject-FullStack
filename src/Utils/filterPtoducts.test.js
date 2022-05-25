import { getFilteredProducts, getSortedProducts } from "./filterProducts";

describe("testing the array operations to filter the list of products", () => {
  test("should sort the list of products by price from high to low", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
    ];

    const sortBy = "HIGH_TO_LOW";

    //Act
    const sortedProducts = getSortedProducts(products, sortBy);

    //Assert
    expect(sortedProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
    ]);
  });

  test("should sort the list of products by price from low to high", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
    ];

    const sortBy = "LOW_TO_HIGH";

    //Act
    const sortedProducts = getSortedProducts(products, sortBy);

    //Assert
    expect(sortedProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
      },

      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
    ]);
  });

  test("should return the initial list of products since 'sortBy' is not provided", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
    ];

    //Act
    const sortedProducts = getSortedProducts(products);

    //Assert
    expect(sortedProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
    ]);
  });

  test("should return list of products that are in stock", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: false,
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: false,
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      true,
      false,
      3000,
      "",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
      },
    ]);
  });

  test("should return list of products that are in eligible for fast delivery", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
        fastDelivery: true,
      },
      {
        _id: "",
        name: "",
        price: ,
        fastDelivery: true,
      },
      {
        _id: "",
        name: "",
        price: ,
        fastDelivery: false,
      },
      {
        _id: "",
        name: "",
        price: ,
        fastDelivery: false,
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      true,
      3000,
      "",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
        fastDelivery: true,
      },
      {
        _id: "",
        name: "",
        price: ,
        fastDelivery: true,
      },
    ]);
  });

  test("should return list of crossrope branded products", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
        brand: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        brand: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        brand: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        brand: "",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      3000,
      "",
      ["Prescription"],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
        brand: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        brand: "",
      },
    ]);
  });

  test("should return list of products belonging to one category", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      3000,
      "",
      [],
      [""]
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
    ]);
  });

  test("should return list of products having a price less than the given range", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
        category: "",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      400,
      "",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
      {
        _id: "",
        name: "",
        price: ,
      },
    ]);
  });

  test("should return list of products whose name matches with the search string", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
        fastDelivery: false,
        brand: "",
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
        fastDelivery: true,
        brand: "",
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: false,
        fastDelivery: false,
        brand: "",
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: false,
        fastDelivery: true,
        brand: "",
        category: "",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      3000,
      "",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
        inStock: false,
        fastDelivery: false,
        brand: "",
        category: "",
      },
    ]);
  });

  test("should return list of products that applies all the filters", () => {
    //Arrange
    const products = [
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
        fastDelivery: false,
        brand: "",
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
        fastDelivery: true,
        brand: "",
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: false,
        fastDelivery: false,
        brand: "",
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: false,
        fastDelivery: true,
        brand: "",
        category: "",
      },
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
        fastDelivery: true,
        brand: "",
        category: "",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      true,
      true,
      500,
      "",
      [""],
      [""]
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "",
        name: "",
        price: ,
        inStock: true,
        fastDelivery: true,
        brand: "",
        category: "",
      },
    ]);
  });
});
