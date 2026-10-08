import { Link } from "expo-router"
import { useContext, useRef } from "react"
import { Animated, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import logo from '../../assets/SpaceX-Logo.png'
import elon from '../../assets/elon1.png'
import logopic from "../../assets/rock.jpeg"
import { ThemeContext } from "../components/sharedthemes"


const WorkPage = () => {
    const {darkmode,setDarkmode,colors}=useContext(ThemeContext)
    const btn = useRef(new Animated.Value(1)).current
    return (
        <ScrollView style={[styles.container,{backgroundColor:colors.background}]}>
            <View style={{marginTop:20,width:'35%',alignSelf:'flex-start',marginLeft:10}}>
                <Pressable style={({pressed}) => [{backgroundColor:'rgba(110, 71, 238, 0.72)',height:37,borderRadius:6,justifyContent:'center'},
                    pressed&&{transform:[{scale:0.95}]}
                ]}
                    onPress={() => setDarkmode(!darkmode)}
                >
                    <Text style={{color:'white',textAlign:'center'}}>Toggle theme</Text>
                </Pressable>
            </View>

            <Animated.View style={{alignSelf:'flex-end',position:'absolute',top:15,transform:[{scale:btn}]}}>
                <Link href="/weeklyImages" style={{backgroundColor:'rgb(201, 201, 201)',marginRight:5,padding:3,borderRadius:7}} asChild>
                    <Pressable
                        onPressIn={()=>{
                            Animated.timing(btn,{
                                toValue:0.84,
                                duration:100,
                                useNativeDriver:true
                            }).start()
                        }} 
                        onPressOut={()=>{
                            Animated.timing(btn,{
                                toValue:1,
                                duration:100,
                                useNativeDriver:true,
                            }).start()
                        }}
                    
                    >
                        <Image source={require('../../assets/weeklyImages/imageicon.png')} style={styles.nextPageImage}/>
                    </Pressable>   
                </Link>
            </Animated.View>
            
            <View style={styles.logoheader}>
                <Image source={logopic} style={styles.milky}/>
                <Image source={logo} style={styles.Ximage}/>
            </View>
              
               
            <View style={styles.header}>
                <Text style={{fontSize:25, fontWeight:'400', color:colors.mutedText,textAlign:'center'}}>Welcome Back</Text>
                <Text style={{color:colors.text,textAlign:'left', marginTop:20,marginBottom:23,fontSize:18, }}>Let's Get Started</Text>
            </View>
            
          
            
            <FYCards colors={colors}/>
        </ScrollView>

    )
}

const FYCards = ({colors}) => {
    return (
        <View>
            <View style={[styles.cardbackground,{backgroundColor:colors.surface}]}>
                <Image source={elon} style={styles.Imagedimensions}/>
                <Text style={[styles.cardtitle,{color:colors.text}]}>Elon Musk made an appearance at the Met Gala and the reason is shocking</Text>
            </View>

            <View style={[styles.cardbackground,{backgroundColor:colors.surface}]}>
                <Image source={require('../../assets/hero.jpg')} style={styles.Imagedimensions}/>
                <Text style={[styles.cardtitle,{color:colors.text}]}>Everything you need to know about today's test launch</Text>
            </View>

            <View style={[styles.cardbackground,{backgroundColor:colors.surface}]}>
                <Image source={require('../../assets/muskwars.jpg')} style={styles.Imagedimensions}/>
                <Text style={[styles.cardtitle,{color:colors.text}]}>Musk wars with Twitter over his buy out deal</Text>
            </View>

            <View style={[styles.cardbackground,{backgroundColor:colors.surface}]}>
                <Image source={require('../../assets/florida.jpg')} style={styles.Imagedimensions}/>
                <Text style={[styles.cardtitle,{color:colors.text}]}>SpaceX gearing up to launch StarShip from florida</Text>
            </View>

            <View style={[styles.cardbackground,{backgroundColor:colors.surface}]}>
                <Image source={require('../../assets/musktesla.jpg')} style={styles.Imagedimensions}/>
                <Text style={[styles.cardtitle,{color:colors.text}]}>Musk says he will remain Tesla CEO and plans to cut back on political spending</Text>
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
        marginTop:50,
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
