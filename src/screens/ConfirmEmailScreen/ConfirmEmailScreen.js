import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from 'react-native'
//import Logo from '../../../assets/login-concept-28963227.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialLoginButtons from '../../components/SocialLoginButtons/SocialLoginButtons'
import { useNavigation } from "@react-navigation/native";


const ConfirmEmailScreen = () => {
        
    const [code, setCode] = useState('');

    //const {height} = useWindowDimensions()
    const navigation = useNavigation()

    const onConfirmPressed = () =>{
        //console.warn("onConfirmPressed")
        navigation.navigate('Home')
    }

    const onSignInPress = () =>{
        navigation.navigate('SignIn')
    }

    const onResendPress = () =>{
        console.warn('onResendPress')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Confirm Your Email</Text>
            
        <CustomInput
         placeholder="Enter your confirmation Code"
         value={code}
         setValue={setCode}
         />

        <CustomButton text="Confirm" onPress={onConfirmPressed}/>
        
        <CustomButton
         text="Resend code"
         onPress={onResendPress}
         type="SECONDARY"
         />

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

export default ConfirmEmailScreen