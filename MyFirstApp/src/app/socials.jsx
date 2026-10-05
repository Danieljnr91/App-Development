import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Socialslayout } from "../components/themedImages"

const Socials = ({}) => {
    return (
        <Socialslayout>
            <View style={styles.imgDimensions}>
               <Pressable style={styles.twitterCardStyle}>
                    <Image source={require('../../assets/socialimages/tweetbird.png')} style={styles.logoStyle}/>
                    <Text style={styles.textStyle}>Twitter</Text>
               </Pressable>
            </View>

             <View style={styles.imgDimensions}>
               <Pressable style={styles.twitterCardStyle}>
                    <Image source={require('../../assets/socialimages/tweetbird.png')} style={styles.logoStyle}/>
                    <Text style={styles.textStyle}>Instagram</Text>
               </Pressable>
            </View>
            

        </Socialslayout>
    )
}

export default Socials

const styles = StyleSheet.create({
    imgDimensions:{
        height:100,
        width:'37%',
        margin:20,
    },

    twitterCardStyle:{
        backgroundColor:'rgb(29,161,242)',
        padding:10,
        borderRadius:5,
    },

    logoStyle:{
        height:40,
        width:40,
        alignSelf:'flex-start',
        position:'absolute',
        top:1,
    },

    textStyle:{
        color:'white',
        textAlign:'center',
        fontSize:17,
        paddingLeft:6
    }
})