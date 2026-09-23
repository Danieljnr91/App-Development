import { useState } from "react"
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import logo from '../../assets/SpaceX-Logo.png'
import elon from '../../assets/elon1.png'
import logopic from "../../assets/rock.jpeg"
import { Link } from "expo-router"


const WorkPage = () => {
    const [darkmode, setDarkmode] = useState(false)
    return (
        <ScrollView style={[styles.container,{backgroundColor:darkmode ? 'black':'white'}]}>
            <View style={{marginTop:20,width:'35%',alignSelf:'flex-start',marginLeft:10}}>
                <Pressable style={{backgroundColor:'rgba(110, 71, 238, 0.72)',height:37,borderRadius:15,justifyContent:'center'}}
                    onPress={() => setDarkmode(!darkmode)}
                >
                    <Text style={{color:'white',textAlign:'center'}}>Toggle theme</Text>
                </Pressable>
            </View>

            <View style={{alignSelf:'flex-end',position:'absolute',top:15}}>
                <Link href="/weeklyImages" style={{backgroundColor:'rgb(201, 201, 201)',marginRight:5,padding:3,borderRadius:15}}>
                    <Image source={require('../../assets/weeklyImages/imageicon.png')} style={styles.nextPageImage}/>
                </Link>
            </View>
            
            <View style={styles.logoheader}>
                <Image source={logopic} style={styles.milky}/>
                <Image source={logo} style={styles.Ximage}/>
            </View>
              
               
            <View style={styles.header}>
                <Text style={{fontSize:25, fontWeight:'400', color:'rgb(185, 184, 184)',textAlign:'center'}}>Welcome Back</Text>
                <Text style={{color:darkmode?'white':'black',textAlign:'left', marginTop:20,marginBottom:23,fontSize:18, }}>Let's Get Started</Text>
            </View>
            
          
            
            <FYCards darkmode={darkmode}/>
        </ScrollView>

    )
}

const FYCards = ({darkmode}) => {
    return (
        <View>
            <View style={[styles.cardbackground,{backgroundColor:darkmode?'rgb(19, 19, 19)':'rgb(44, 43, 43)'}]}>
                <Image source={elon} style={styles.Imagedimensions}/>
                <Text style={styles.cardtitle}>Elon Musk made an appearance at the Met Gala and the reason is shocking</Text>
            </View>

            <View style={[styles.cardbackground,{backgroundColor:darkmode?'rgb(19, 19, 19)':'rgb(44, 43, 43)'}]}>
                <Image source={require('../../assets/hero.jpg')} style={styles.Imagedimensions}/>
                <Text style={styles.cardtitle}>Everything you need to know about today's test launch</Text>
            </View>

            <View style={[styles.cardbackground,{backgroundColor:darkmode?'rgb(19, 19, 19)':'rgb(44, 43, 43)'}]}>
                <Image source={require('../../assets/muskwars.jpg')} style={styles.Imagedimensions}/>
                <Text style={styles.cardtitle}>Musk wars with Twitter over his buy out deal</Text>
            </View>

        </View>
       
    )
}





export default WorkPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        marginTop: 50,
        marginLeft: 10,
        
    },
    

    Ximage: {
        width: 260,
        height: 260,
    },
    milky:{
        position: 'absolute',
        height:'100%',
    },
    logoheader:{
        marginTop:70,
        height:200,
        justifyContent:'center',
        alignItems:'center',
        overflow: 'hidden',
        borderRadius: 30,
    },

    cardbackground: {
        width:'90%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:18,
        marginBottom: 20,
        

    },

    Imagedimensions:{
        height:300,
        width:'93%',
        borderRadius:20,
        marginTop:12,
    },

    cardtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 25,
    width: '90%',
    marginTop: 15,
},

    nextPageImage:{
        height:43,
        width:43,
    }
})

