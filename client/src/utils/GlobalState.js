import React, { createContext, useReducer, useContext } from "react";
import { LOGIN, LOGOUT, LOADING, SIGNUP } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
        user: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP:
      return {
        ...state,
        signup: true,
      };
    
    default:
      return state;
  }
};

const defaultState = {
  auth: false,
  user: null,
  signup: false
};

const StoreProvider = ({ value = defaultState, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
