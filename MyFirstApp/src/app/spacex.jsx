import { StyleSheet, Text, View } from "react-native";

const HomePage = () => {
    return (
        <View style = {styles.container}>
            <Text>Hello</Text>
        </View>

    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

