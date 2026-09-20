import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View } from "react-native"
import sun from '../../assets/suns.png'

const Home = () => {
    return (
        <View style = {styles.container}>
            <Image source = {sun} style={styles.logo}/>
            <Text style={styles.title}>Good Morning</Text>
            <Text style={styles.subtitle}>Ready to work?</Text>
            <Card />
        </View>
        
    )
}

const Card = () => {
    return (
        <View>
            <Link href="/spacex" style={styles.buttonstyle}>
                <Text style={styles.buttontext}>Let's get to work</Text>
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
        fontSize:40,
        fontWeight: 'bold',
    },

    subtitle:{
        fontSize: 30,
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

    },

    buttontext:{
        fontSize: 20,
        
    },

    logo:{
        width: 150,
        height: 150,
    },


   
})