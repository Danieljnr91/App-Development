import { Link } from 'expo-router'
import { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import sun from '../../assets/suns.png'


const Home = () => {
    const [darkmode, setDarkmode] = useState(false)

    return (
        <View style={{flex:1, backgroundColor:darkmode ? 'white' : 'black'}}>
            <View style = {[styles.container, ]}>
                <Image source = {sun} style={styles.sunimage}/>
                <Text style={[styles.title,{color: darkmode ? 'black' : 'white'}]}>Good Morning</Text>
                <Text style={[styles.subtitle, {fontSize:19,color: darkmode ? 'black' : 'white'}]}>Ready for the latest updates?</Text>
            <Card />
            </View>

            <View style={{marginBottom:30,width:'35%',alignSelf:'flex-start',marginLeft:10}}>
                <Pressable style={{backgroundColor:'rgba(110, 71, 238, 0.72)',height:37,borderRadius:15, justifyContent:'center'}}
                    onPress={() => setDarkmode(!darkmode)}
                >
                    <Text style={{color:'white',textAlign:'center'}}>Toggle theme</Text>

                </Pressable>
                  
            
            </View>
        </View>
           

        
        
        
    )
}

const Card = () => {
    return (
        <View>
            <Link href="/spacex" style={styles.buttonstyle}>
                <Text style={styles.buttontext}>Let's dive in</Text>
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