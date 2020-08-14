import React, { createContext, useReducer, useContext } from "react";
import {
  LOADING,
  UPDATE_RESULTS,
  UPDATE_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK
} from "./actions";