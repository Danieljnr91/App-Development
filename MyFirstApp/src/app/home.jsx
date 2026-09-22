import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View } from "react-native"
import sun from '../../assets/suns.png'

const Home = () => {
    return (
        <View style = {styles.container}>
            <Image source = {sun} style={styles.sunimage}/>
            <Text style={styles.title}>Good Morning</Text>
            <Text style={[styles.subtitle, {fontSize:19}]}>Ready for the latest updates?</Text>
            <Card />
        </View>
        
    )
}

const Card = () => {
    return (
        <View>
            <Link href="/spacex" style={styles.buttonstyle}>
                <Text style={styles.buttontext}>Let's dive to in</Text>
            </Link>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(227, 226, 226)'
    },

    title:{
        fontSize:43,
        fontWeight: 'bold',
    },

    subtitle:{
        
        marginBottom: 15,
    },

    buttonstyle:{
        backgroundColor: 'rgb(43, 198, 198)',
        padding: 12,
        borderRadius: 9,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: {width:10, height:10},
        shadowOpacity: 0.2,
        shadowRadius:0,
        elevation:5,
        marginTop: 70,
        marginBottom:60,

    },

    buttontext:{
        fontSize: 20,
        
    },

    sunimage:{
        width: 150,
        height: 150,
    },


   
})