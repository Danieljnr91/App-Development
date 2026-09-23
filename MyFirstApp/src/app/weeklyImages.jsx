import {Text,StyleSheet,View} from 'react-native'

const ImagePage = () => {
    return(
        <View style={styles.word}>
            <Text style={{fontSize:20,textAlign:'center'}} >Images of the week coming in hot tommorow</Text>
        </View>
    )
}

export default ImagePage

const styles = StyleSheet.create({
    word:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }
})
