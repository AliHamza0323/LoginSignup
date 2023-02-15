import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/login-concept-28963227.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialLoginButtons from "../../components/SocialLoginButtons/SocialLoginButtons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions()
    const navigation = useNavigation()

    const onSignInPressed = () =>{
        //console.warn("Sign in")

        navigation.navigate('Home')
    }

    const onForgotPasswordPressed = () =>{
        //console.warn("onForgotPasswordPressed")
        navigation.navigate("ForgotPassword")
    }


    const onSignUpPress = () =>{
        //console.warn('onSignUpPress')
        navigation.navigate("SignUp")
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image 
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode='contain'
            />

        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>    
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>    
        <CustomButton text="Sign In" onPress={onSignInPressed}/>
        <CustomButton text="Forgot password" onPress={onForgotPasswordPressed} type="TERTIARY"/>
        
        <CustomButton 
          text="Forgot password" 
          onPress={onForgotPasswordPressed} 
          type="TERTIARY"/>

          <SocialLoginButtons/>

         <CustomButton
         text="Don't have an account? Create one"
         onPress={onSignUpPress}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default LoginScreen