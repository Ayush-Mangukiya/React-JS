import {createContext, useContext} from "react";

// we can provide intial value while context is being created for the first time
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// custom hooks
export default function useTheme() {
    return useContext(ThemeContext)
} 