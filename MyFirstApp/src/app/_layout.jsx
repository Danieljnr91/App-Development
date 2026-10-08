import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../components/sharedthemes'


const TabsLayout = () => {
    return (
        <ThemeProvider>
            <ThemedTabs />
        </ThemeProvider>
    )
}

const ThemedTabs = () => {
    const {darkmode,colors} = useContext(ThemeContext)

    return (
        <>
            <StatusBar style={darkmode ? 'light' : 'light'} />
            <Tabs screenOptions={{
                headerStyle:{backgroundColor:colors.background},
                headerTintColor:colors.text,
                tabBarStyle:{backgroundColor:colors.tabBar,borderTopColor:colors.border},
                tabBarActiveTintColor:colors.activeTint,
                tabBarInactiveTintColor:colors.inactiveTint,

            }}>
                <Tabs.Screen name="home" options={{title:"HomePage",
                    tabBarIcon:({color,size})=>(
                        <Ionicons name="home" size={size} color={color}/>
                    )
                }}/>
                <Tabs.Screen name="spacex" options={{title:"For you",
                    tabBarIcon:({color,size}) => (
                        <Ionicons name="sparkles" size={size} color={color}/>
                    )
                }}/>
                <Tabs.Screen name="weeklyImages" options={{title:"Images of the week",
                    tabBarIcon:({color,size}) =>(
                        <Ionicons name="images" size={size} color={color}/>
                    )
                }}/>
                <Tabs.Screen name="socials" options={{title:"Our Socials",
                    tabBarIcon:({color,size})=>(
                        <Ionicons name="people" size={size} color={color}/>
                    )
                }}/>
            </Tabs>
        </>
    )
}

export default TabsLayout