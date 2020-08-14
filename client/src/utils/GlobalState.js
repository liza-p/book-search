import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_RESULTS,
  UPDATE_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK,
  LOADING
} from "./actions";

const BookContext = createContext();
const { Provider } = BookProvider;

const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_RESULTS:
    return {
      ...state,
      results: [...action.results],
      loading: false
    };

  case UPDATE_BOOKS:
    return {
      ...state,
      books: [...action.books],
      loading: false
    };

  case ADD_BOOK:
    return {
      ...state,
      books: [action.book, ...state.books],
      loading: false
    };

  case REMOVE_BOOK:
    return {
      ...state,
      books: state.books.filter(book => {
        return book._id !== action._id;
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
}

const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    results: [], // search results from Google Books
    books: [], // favorites saved to MongoDB
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };