
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import { REGISTER } from '../../constants/routeNames';
import MessageComponent from '../common/Message';
import styles from './styles';
import { useState } from 'react';
const LoginComponent = (
    {
        onSubmit,
        onChange,
        form,
        errors,
       error,
        loading,
        onDismis,
        justSignedUp,
    }
) => {
    const { navigate } = useNavigation();
    const [isSecure, setisSecure] = useState(true);
    return (
        <Container>
            <View>

                <Image source={require('../../assets/images/logo.png')} style={styles.logoStyle} />
                <Text style={styles.WelcomText} > Welcome to ContactsApp </Text>
                <Text style={styles.subtittle}>Please Login here </Text>
                
                <View style={styles.form}>
                {error?.error&&<MessageComponent
                message={error?.error}danger/>}
                {justSignedUp&&<MessageComponent 
                message="Welcome, SignUp Successfull" 
                onDismis={()=>{}}
                success/>}
                {error &&!error?.error&&<MessageComponent 
                message="Wrong Credencials" 
                onDismis={()=>{}}
                danger/>}
                    <Input label="Username"
                        placeholder="Enter user Name"
                        value={form.username||null}
                        onChangeText={ (value)=>{
                            onChange({name:'userName',value}); 
                           
                         }}
                    />
                    <Input label="Password"
                        icon={<TouchableOpacity onPress={()=>{
                            
                            setisSecure(!isSecure );

                        }}><Text >{isSecure?"SHOW":"HIDE"}</Text></TouchableOpacity>}
                        placeholder="Enter user Password"
                        iconposition="right"
                        secureTextEntry={isSecure}
                      
                        onChangeText={ (value)=>{
                            onChange({name:'password',value});     
                         }}
                    />
                    <CustomButton loading={loading}
                     onPress={onSubmit} 
                     primary
                      title="Login "
                       disabled={loading}
                        />
                    <View style={styles.createSection}><Text style={styles.infotext}>Need New Account ?</Text><TouchableOpacity onPress={() => { navigate(REGISTER) }} ><Text style={styles.linkBtn}>Register here</Text></TouchableOpacity></View>
                </View>
            </View>

        </Container>

    );

}

export default LoginComponent;