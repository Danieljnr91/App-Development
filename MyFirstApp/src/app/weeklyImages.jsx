import {StyleSheet,ScrollView,Image,View, Pressable} from 'react-native'
import WeeklyImagesPage,{ActualImages} from '../components/themedImages'
import { Link } from 'expo-router'

const ImagePage = ({}) => {
    return(
            <WeeklyImagesPage>
                <View style={{position:'absolute',alignSelf:'flex-end',margin:9,backgroundColor:'rgb(136, 24, 188)',borderRadius:15,padding:2}}>
                    <Link href="/socials" asChild>
                        <Pressable>
                            <Image source={require('../../assets/arrow.png')} style={{width:40,height:40}}/>
                        </Pressable>
                    </Link>
                </View>
                <MainDisplay />
            </WeeklyImagesPage>
    )
}

const MainDisplay = ({}) => {
    return(

            
            <ScrollView >
                <ActualImages>
                    <Image source={require('../../assets/weeklyImages/img1.jpg')} style={styles.imgstyle}/>
                    <Image source={require('../../assets/weeklyImages/img2.jpg')} style={styles.imgstyle}/>
                </ActualImages>

                <ActualImages>
                    <Image source={require('../../assets/weeklyImages/img3.jpg')} style={styles.imgstyle}/>
                    <Image source={require('../../assets/weeklyImages/img4.jpg')} style={styles.imgstyle}/>
                </ActualImages>

                <ActualImages>
                    <Image source={require('../../assets/weeklyImages/img5.jpg')} style={styles.imgstyle}/>
                    <Image source={require('../../assets/weeklyImages/img6.jpg')} style={styles.imgstyle}/>
                </ActualImages>

                <ActualImages>
                    <Image source={require('../../assets/weeklyImages/img7.jpg')} style={styles.imgstyle}/>
                    <Image source={require('../../assets/weeklyImages/img8.jpg')} style={styles.imgstyle}/>
                </ActualImages>

                <ActualImages>
                    <Image source={require('../../assets/weeklyImages/img9.jpg')} style={styles.imgstyle}/>
                    <Image source={require('../../assets/weeklyImages/img10.jpg')} style={styles.imgstyle}/>
                </ActualImages>

                <ActualImages>
                    <Image source={require('../../assets/weeklyImages/img11.jpg')} style={styles.imgstyle}/>
                    <Image source={require('../../assets/weeklyImages/img12.jpg')} style={styles.imgstyle}/>
                </ActualImages>

                <ActualImages>
                    <Image source={require('../../assets/weeklyImages/img13.jpg')} style={styles.imgstyle}/>
                    <Image source={require('../../assets/weeklyImages/img14.jpg')} style={styles.imgstyle}/>
                </ActualImages>
            </ScrollView>

        
      
    )
}

export default ImagePage

const styles = StyleSheet.create({
    imgstyle:{
        height:250,
        width:150,
        borderRadius:15,
        marginBottom:25,
    }
    
})
