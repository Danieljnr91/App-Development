import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle:{backgroundColor: 'rgb(228, 227, 227)'},   
            

        }}>
            <Stack.Screen name='home' options={{title:'HomePage'}}/>
            <Stack.Screen name='spacex' options={{title:'For You',headerStyle:{backgroundColor:'rgb(0,0,0)'},headerTintColor:'white'}}/>
        </Stack>

        
    )
}

export default RootLayout

const styles = StyleSheet.create({})