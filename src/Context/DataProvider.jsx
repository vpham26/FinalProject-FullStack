import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducer/data-reducer";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);


const initialArg = {
  products:[],
  itemsInCart:[],
  itemsInWishlist:[],
  addresses:[],
  toastMsg: "",
  searchValue:"",
  sortBy: null,
  inStock:false,
  fastDelivery: false,
  priceRange: 3000,
  brandFilter:[],
  categoryFilter:[]
};

export const DataProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(dataReducer,initialArg);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
