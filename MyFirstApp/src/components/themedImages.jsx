import { StyleSheet, View } from 'react-native'

const WeeklyImagesPage = ({children}) => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
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
    return(
        <View style={styles.socialPage}>
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
    }
})
