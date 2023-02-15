import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialLoginButtons from '../../components/SocialLoginButtons/SocialLoginButtons'
import { useNavigation } from "@react-navigation/native";

const ForgotpasswordScreen = () => {
        
    const [username, setusername] = useState('');

    const navigation = useNavigation()
    //const {height} = useWindowDimensions()
    
    const onSendPressed = () => {
        navigation.navigate('NewPassword')
    }
    

    const onSignInPress = () =>{
        navigation.navigate('SignIn')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Reset Your Password</Text>
            
        <CustomInput
         placeholder="Username"
         value={username}
         setValue={setusername}
         />

        <CustomButton text="Send" onPress={onSendPressed}/>

         <CustomButton
         text="Back to Log in"
         onPress={onSignInPress}
         type="TERTIARY"
         />
        
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#051C60',
        margin: 10,
    },
    text:{
        color:'gray',
        marginVertical: 10,
    },
    link: {
        color:'#FDBO75'
    },
})

export default ForgotpasswordScreen