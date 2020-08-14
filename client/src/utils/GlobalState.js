import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_RESULTS,
  UPDATE_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK
} from "./actions";

const BookContext = createContext();
const { Provider } = BookProvider;

const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_RESULTS:
    return state;

  case UPDATE_BOOKS:
    return state;

  case ADD_BOOK:
    return state;

  case REMOVE_POST:
    return state;

  default:
    return state;
  }
}

const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    results: [], // search results from Google Books
    books: [], // favorites saved to MongoDB
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };