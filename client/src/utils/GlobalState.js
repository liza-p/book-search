import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_RESULTS,
  UPDATE_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK,
  LOADING
} from "./actions";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_RESULTS:
    // make an object with id's from the saved books
    // for converting Google Book links to database ids
    const idMap = {};
    state.books.map(book => {idMap[book.link] = book._id});
    // console.log(state.books);
    // console.log(idMap);

    const processedResults = action.results.map(book => {
      return {
        ...book,
        _id: idMap[book.link] || "" // if saved, this will be _id from database, otherwise empty string
      }
    });

    // console.log(processedResults);

    return {
      ...state,
      results: processedResults,
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