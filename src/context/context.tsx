import { createContext } from "react";

const initialState = { language: "cn", mode: "light" };

export const ContextCenter = createContext(initialState);
