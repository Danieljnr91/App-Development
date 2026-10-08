import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from './sharedthemes'

const WeeklyImagesPage = ({children}) => {
    const {colors} = useContext(ThemeContext)

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            {children}
        </View>
            
    )
}

export const ActualImages = ({children}) => {
    return(
        <View style={styles.imageRow}>
            {children}
        </View>
    )
}  

export const Socialslayout = ({children}) => {
    const {colors} = useContext(ThemeContext)

    return(
        <View style={[styles.socialPage,{backgroundColor:colors.background}]}>
            {children}
        </View>
    )
}



export default  WeeklyImagesPage

const styles = StyleSheet.create({
    imageRow:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
        top:90,
    },

    socialPage:{
        flexDirection:'row',
        flexWrap:"wrap",
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'rgb(232, 232, 232)',
    }
})
