import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const themes = {
    dark: {
        background: 'black',
        surface: 'rgb(19, 19, 19)',
        text: 'white',
        mutedText: 'rgb(185, 184, 184)',
        border: 'rgb(50, 50, 50)',
        tabBar: 'rgb(19, 19, 19)',
        activeTint: 'rgb(165, 139, 255)',
        inactiveTint: 'rgb(185, 184, 184)',
    },
    light: {
        background: 'white',
        surface: 'rgb(242, 243, 247)',
        text: 'rgb(20, 20, 20)',
        mutedText: 'rgb(95, 95, 95)',
        border: 'rgb(220, 220, 220)',
        tabBar: 'white',
        activeTint: 'rgb(110, 71, 238)',
        inactiveTint: 'rgb(105, 105, 105)',
    },
}

export const ThemeProvider = ({children}) => {
    const [darkmode,setDarkmode] = useState(false)
    const colors = darkmode ? themes.dark : themes.light

    return(
        <ThemeContext.Provider value={{darkmode,setDarkmode,colors}}>
            {children}
        </ThemeContext.Provider>

    )
}