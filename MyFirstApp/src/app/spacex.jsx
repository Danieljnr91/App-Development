import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import logo from '../../assets/SpaceX-Logo.png'
import elon from '../../assets/elon1.png'
import logopic from "../../assets/rock.jpeg"


const WorkPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoheader}>
                <Image source={logopic} style={styles.milky}/>
                <Image source={logo} style={styles.Ximage}/>
            </View>
              
               
            <View style={styles.header}>
                <Text style={{fontSize:25, fontWeight:'400', color:'rgb(185, 184, 184)',textAlign:'center'}}>Welcome Back</Text>
                <Text style={{color:'white',textAlign:'left', marginTop:20,marginBottom:23,fontSize:18, }}>Let's Get Started</Text>
            </View>
            
            <FYCards />
        </ScrollView>

    )
}

const FYCards = () => {
    return (
        <View>
            <View style={styles.cardbackground}>
                <Image source={elon} style={styles.Imagedimensions}/>
                <Text style={styles.cardtitle}>Elon Musk made an appearance at the Met Gala and the reason is shocking</Text>
            </View>

            <View style={styles.cardbackground}>
                <Image source={require('../../assets/hero.jpg')} style={styles.Imagedimensions}/>
                <Text style={styles.cardtitle}>Everything you need to know about today's test launch</Text>
            </View>

            <View style={styles.cardbackground}>
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
        backgroundColor: 'rgb(13, 13, 13)',
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
        backgroundColor: 'rgb(44, 43, 43)',
        width:'90%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:18,
        marginBottom: 20,
        boxShadow: '5px 5px rgb(29, 28, 28)'
        

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
})

