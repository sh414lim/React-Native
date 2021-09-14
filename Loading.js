import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>Getting The fucking weather</Text>
    </View>

}

const styles=StyleSheet.create({
// CSS 컨테이너
        container:{
        flex: 1,
        justifyContent:"flex-end",
        padding: 20,
        paddingHorizontal:30,
        paddingVertical:100,
    },
    text:{
        fontSize: 30
    }

})

export default Loading;

