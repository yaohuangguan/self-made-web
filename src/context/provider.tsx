import React, { useReducer } from "react";
import { ContextCenter } from "./context";
import { THEME_MODE_CHANGE, LANG_CHANGE } from "./constant";

const initialState = { isNativeLang: true, isLightMode: true };

function reducer(state, action) {
  switch (action.type) {
    case THEME_MODE_CHANGE:
      return { ...state, isLightMode: !state.isLightMode };
    case LANG_CHANGE:
      return { ...state, isNativeLang: !state.isNativeLang };
    default:
      return state;
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const realValue = { state, dispatch };

  return (
    <ContextCenter.Provider value={realValue}>
      {children}
    </ContextCenter.Provider>
  );
}
