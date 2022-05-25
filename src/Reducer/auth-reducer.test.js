import { userCredReducer } from "./auth-reducer";

describe("testing user authentication reducer", () => {
  test("should set the name to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_NAME",
      payload: "Peace",
    };

    const initialUserState = {
      name: "Peace",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      name: "Peace",
    });
  });

  test("should set the username to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_USERNAME",
      payload: "Peace",
    };

    const initialUserState = {
      username: "Peace",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      username: "Peace",
    });
  });

  test("should set the password to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_PASSWORD",
      payload: "secret",
    };

    const initialUserState = {
      password: "",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      password: "secret",
    });
  });

  test("should set the email to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_EMAIL",
      payload: "admin@peace.com",
    };

    const initialUserState = {
      email: "",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      email: "admin@peace.com",
    });
  });

  test("should set the state to initial value", () => {
    //Arrange
    const action = {
      type: "CLEAR",
    };

    const initialUserState = {
      username: "Peace",
      name: "Peace",
      email: "admin@peace.com",
      password: "secret",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      username: "",
      name: "",
      email: "",
      password: "",
    });
  });

  test("should not modify the state data", () => {
    //Arrange
    const action = {
      type: "DEFAULT_CASE",
    };

    const initialUserState = {
      username: "Peace",
      name: "Peace",
      email: "admin@peace.com",
      password: "secret",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
        username: "Peace",
        name: "Peace",
        email: "admin@peace.com",
        password: "secret",
      });
  });
});
