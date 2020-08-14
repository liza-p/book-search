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
    return {
      ...state,
      results: [...action.results]
    };

  case UPDATE_BOOKS:
    return {
      ...state,
      books: [...action.books]
    };

  case ADD_BOOK:
    return {
      ...state,
      books: [action.book, ...state.books]
    };

  case REMOVE_BOOK:
    return {
      ...state,
      books: state.books.filter(book => {
        return book._id !== action._id;
      })
    };

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