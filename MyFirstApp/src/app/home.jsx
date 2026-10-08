import { Link } from 'expo-router'
import { useContext, useRef } from 'react'
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native"
import moon from '../../assets/moon.png'
import noonsun from '../../assets/noonsun.png'
import mornsun from '../../assets/suns.png'
import { ThemeContext } from '../components/sharedthemes'


const Home = () => {
    const {darkmode,setDarkmode,colors} = useContext(ThemeContext)
    const themebtn = useRef(new Animated.Value(1)).current
    const currentTime=new Date()
    const hour=currentTime.getHours()

    let greeting
    if(hour<12){
        greeting="Good Morning"
    }else if(hour<18){
        greeting="Good Afternoon"
    }else{
        greeting="Good Evening"
    }

    let currentImage 
    if(hour<12){
        currentImage=mornsun
    }else if(hour<18){
        currentImage=noonsun
    }else{
        currentImage=moon
    }

    let message
    if(hour<12){
        message="Ready for the latest updates?"
    }else if(hour<18){
        message="Mid-day news at your door step"
    }else{
        message="How about some news after a long day?"
    }



    return (
        <View style={{flex:1, backgroundColor:colors.background}}>
            <View style = {[styles.container]}>
                <Image source = {currentImage} style={styles.sunimage}/>
                <Text style={[styles.title,{color:colors.text}]}>{greeting}</Text>
                <Text style={[styles.subtitle, {fontSize:19,color:colors.text}]}>{message}</Text>
            <Card colors={colors}/>
            </View>

            <Animated.View style={{marginBottom:30,width:'35%',alignSelf:'flex-start',marginLeft:10,transform:[{scale:themebtn}]}}>
                <Pressable style = {[{backgroundColor:'rgba(110, 71, 238, 0.72)',height:37,borderRadius:6, justifyContent:'center'}]}
                    onPressIn={()=>{
                        Animated.timing(themebtn,{
                            toValue:0.95,
                            duration:100,
                            useNativeDriver:true
                        }).start()
                    }}
                    onPressOut={()=>{
                        Animated.timing(themebtn,{
                            toValue:1,
                            duration:100,
                            useNativeDriver:true
                        }).start()
                    }}
                    onPress={() => setDarkmode(!darkmode)}
                >
                    <Text style={{color:'white',textAlign:'center'}}>Toggle theme</Text>

                </Pressable>
                  
            
            </Animated.View>
        </View>
           

        
        
        
    )
}

const Card = ({colors}) => {
    const homebtn = useRef(new Animated.Value(1)).current
    return (
        <Animated.View style={{transform:[{scale:homebtn}]}}>
            <Link href="/spacex" style={styles.buttonstyle} asChild>
                <Pressable
                    onPressIn={()=>{
                        Animated.timing(homebtn,{
                            toValue:0.86,
                            duration:100,
                            useNativeDriver:true
                        }).start()
                    }}
                    onPressOut={()=>{
                        Animated.timing(homebtn,{
                            toValue:1,
                            duration:100,
                            useNativeDriver:true
                        }).start()
                    }}
                >
                    <Text style={[styles.buttontext,{color:colors.text}]}>Let's dive in</Text>
                </Pressable>
            </Link>
        </Animated.View>
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