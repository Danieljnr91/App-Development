import { useContext, useRef } from 'react'
import { Animated, Image, Linking, Pressable, StyleSheet, Text } from "react-native"
import { ThemeContext } from '../components/sharedthemes'
import { Socialslayout } from '../components/themedImages'

const Socials = () => {
    const {colors} = useContext(ThemeContext)
    const twitterScale = useRef(new Animated.Value(1)).current
    const igScale = useRef(new Animated.Value(1)).current
    const snapscale = useRef(new Animated.Value(1)).current
    const fbScale = useRef(new Animated.Value(1)).current
    return (
        <Socialslayout>
            <Image source={require('../../assets/spacexlogo.jpg')} style={styles.xlogo}/>
            <Text style={{width:'100%',alignSelf:'flex-start',paddingLeft:5,fontSize:17,fontWeight:'480',marginBottom:30,color:colors.text}}>Reach us on...</Text>
            <Animated.View style={[styles.generalCardDimensions,
                {transform:[{scale:twitterScale}]}
            ]}
            >
               <Pressable 
                    style = {[styles.twitterCardStyle]}
                        onPressIn={()=>{
                            Animated.timing(twitterScale,{
                                toValue:0.95,
                                duration:100,
                                useNativeDriver:true,
                            }).start()
                        }}
                        onPressOut={()=>{
                            Animated.timing(twitterScale,{
                                toValue:1,
                                duration:100,
                                useNativeDriver:true,
                            }).start()
                        }}
                        onPress={()=>{
                            Linking.openURL('https://X.com/SpaceX')
                        }}
                >
                    
                    <Image source={require('../../assets/socialimages/tweetbird.png')} style={[styles.logoStyle,{top:3}]}/>
                    <Text style={styles.textStyle}>Twitter</Text>
               </Pressable>
            </Animated.View>

             <Animated.View style={[styles.generalCardDimensions,
                {transform:[{scale:igScale}]}
             ]}
            >
               <Pressable style={[styles.IGcardstyle]}
                    onPressIn={()=>{
                        Animated.timing(igScale,{
                            toValue:0.95,
                            duration:100,
                            useNativeDriver:true
                        }).start()
                    }}
                    onPressOut={()=>{
                        Animated.timing(igScale,{
                            toValue:1,
                            duration:100,
                            useNativeDriver:true,
                        }).start()
                    }}
                    onPress={()=>{
                        Linking.openURL('https://instagram.com/spacex')
                    }}
               >
                    <Image source={require('../../assets/socialimages/IG.png')} style={styles.logoStyle}/>
                    <Text style={[styles.textStyle,{left:7}]}>Instagram</Text>
               </Pressable>
            </Animated.View>

            <Animated.View style={[styles.generalCardDimensions,{transform:[{scale:snapscale}]}]}>
               <Pressable style={[styles.snapCardstyle]}
                    onPressIn = {()=>{
                        Animated.timing(snapscale,{
                            toValue:0.95,
                            duration:100,
                            useNativeDriver:true,
                        }).start()
                    }}
                    onPressOut={()=>{
                        Animated.timing(snapscale,{
                            toValue:1,
                            duration:100,
                            useNativeDriver:true,
                        }).start()
                    }}
               >
                    <Image source={require('../../assets/socialimages/snap.png')} style={[styles.logoStyle,{width:60,marginLeft:-8}]}/>
                    <Text style={[styles.textStyle,{color:'black',left:7}]}>Snapchat</Text>
               </Pressable>
            </Animated.View>

            <Animated.View style={[styles.generalCardDimensions,{transform:[{scale:fbScale}]}]}>
               <Pressable style={[styles.fbCardStyle]}
                    onPressIn={()=>{
                        Animated.timing(fbScale,{
                            toValue:0.95,
                            duration:100,
                            useNativeDriver:true,
                        }).start()
                    }}
                    onPressOut={()=>{
                        Animated.timing(fbScale,{
                            toValue:1,
                            duration:100,
                            useNativeDriver:true
                        }).start()
                    }}
               >
                    <Image source={require('../../assets/socialimages/facebook.png')} style={styles.logoStyle}/>
                    <Text style={[styles.textStyle,{left:7}]}>FaceBook</Text>
               </Pressable>
            </Animated.View>
            

        </Socialslayout>
    )
}

export default Socials

const styles = StyleSheet.create({
    generalCardDimensions:{
        height:60,
        width:'37%',
        margin:10,
    },
    //Card styles
    twitterCardStyle:{
        backgroundColor:'rgb(29,161,242)',
        padding:10,
        borderRadius:8,
        elevation:5,
        shadowOffset:{width:10,height:10},
        shadowColor:'rgb(0,0,0)',
        shadowOpacity:0.2,
        shadowRadius:0
    },

    IGcardstyle:{
        backgroundColor:'rgba(232, 16, 77, 0.91)',
        padding:10,
        borderRadius:8,
        elevation:9
    },

    snapCardstyle:{
        backgroundColor:'rgb(255,252,0)',
        padding:10,
        borderRadius:8,
        elevation:9
    },

    fbCardStyle:{
        backgroundColor:'rgb(24, 122, 251)',
        padding:10,
        borderRadius:8,
        elevation:9,
        
    },
    //Card Styles

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
    },

    xlogo:{
        height:200,
        width:'97%',
        position:'absolute',
        marginTop:30,
        overflow:'hidden',
        borderRadius:10
        
    }
})