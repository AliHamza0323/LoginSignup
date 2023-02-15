import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from 'react-native'
//import Logo from '../../../assets/login-concept-28963227.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialLoginButtons from '../../components/SocialLoginButtons/SocialLoginButtons'
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    //const {height} = useWindowDimensions()
    const navigation = useNavigation();

    const onRegistorPressed = () =>{
        //console.warn("onRegistorPressed")
        navigation.navigate('ConfirmEmail')
    }

    const onSignInPress = () =>{
        //console.warn('onSignInPress')
        navigation.navigate('Login')
    }

    const onTermsOfUsePressed = () =>{
        console.warn('onTermsOfUsePressed')
    }

    const onPrivacyPressed = () =>{
        console.warn('onPrivacyPressed')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <Image 
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode='contain'
            />

        <CustomInput
         placeholder="Username"
         value={username}
         setValue={setUsername}
         />

         <CustomInput
         placeholder="Email"
         value={email}
         setValue={setEmail}
         />

        <CustomInput
          placeholder="Password"
          value={password} 
          setValue={setPassword} 
          secureTextEntry
          />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat} 
          setValue={setPasswordRepeat} 
          secureTextEntry
          />

        <CustomButton text="Register" onPress={onRegistorPressed}/>

              <Text style={styles.text}>
              By registoring, you confirm that you accept our{' '}
              <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of use</Text>and{' '}
              <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
              </Text>
        
        <SocialLoginButtons/>

         <CustomButton
         text="Don't have an account? Sign in"
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

export default SignUpScreen