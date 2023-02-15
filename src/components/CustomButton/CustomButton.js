import React from "react";
import { View, Text, Stylesheet, Pressable } from 'react-native'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return(
        <Pressable
         onPress={onPress}
         style={[styles.container,
         styles[`container_${type}`],
         bgColor ? {backgroundColor: bgColor} : {},
         ]}>
        <Text style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
            ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems:'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: 'blue',
    },

    container_SECONDARY: {
        borderColor: '#blue',
        borderWidth: 2,
    },

    container_TERTIARY: {},
    text: {
        fontWeight:'bold',
        color:'white',
    },

    text_SECONDARY: {
        color:'blue',
    },
})

export default CustomButton