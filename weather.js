import React from "react";
import {StyleSheet} from "react-native"
import PropTypes from "prop-types";

//weather 는 stateless 컴포넌트
//Text는 temperature

export default function Weather({temp}){
    return <View styles={styles.container}><Text>{temp}</Text></View>
}

Weather.propTypes={
temp: PropTypes.number.isRequired
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})