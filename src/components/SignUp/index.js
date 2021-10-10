
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import { LOGIN } from '../../constants/routeNames';
import MessageComponent from '../common/Message';
import styles from './styles';
const SighUpComponent = ({
        onSubmit,
        onChange,
        form,
        errors,
       error,
        loading,
    }
) => {
    const { navigate } = useNavigation();
    const [secureText, setsecureText] = React.useState(true);
    return (
        <Container>
            <View>

                <Image source={require('../../assets/images/logo.png')} style={styles.logoStyle} />
                <Text style={styles.WelcomText} > Welcome to ContactsApp </Text>
                <Text style={styles.subtittle}>Get a free account </Text>
                <View style={styles.form}>
                {error?.error&&<MessageComponent 
                onDismis={()=>{}}
                message={error.error} info/>}
                <Input label="Username"
                        placeholder="Enter userName"
                        error={errors.userName  || error?.username?.[0]}
                        onChangeText={ (value)=>{
                            onChange({name:'userName',value});     
                         }}
                         
                    />
                    <Input label="First Name"
                        placeholder="Enter First Name"
                             onChangeText={ (value)=>{
                           onChange({name:'firstName',value});     
                        }}
                        error={errors.firstName || error?.first_name?.[0]}

                    /> 
                     <Input label="Last Name"
                        placeholder="Enter Last Name"

                        
                        onChangeText={ (value)=>{
                            onChange({name:'lastName',value});     
                         }}
                         error={errors.lastName || error?.last_name?.[0] }

                    />
                    
                     <Input label="Email"
                        placeholder="Enter email"

                        
                        onChangeText={ (value)=>{
                            onChange({name:'email',value});     
                         }}
                         error={errors.email || error?.email?.[0]}


                    />

                    <Input label="Password"
                        icon={<TouchableOpacity
                        onPress={()=>{

                            setsecureText(!secureText);
                        }}
                        ><Text>{secureText?"SHOW":"HIDE"}</Text></TouchableOpacity>}
                        placeholder="Set New password"
                        iconposition="right"
                        secureTextEntry={secureText}

                        
                        onChangeText={ (value)=>{
                            onChange({name:'password',value});     
                         }}
                         error={errors.password || error?.password?.[0]}

                    />
                    <CustomButton loading={loading}
                     disabled={loading}

                    
                    onPress={onSubmit} primary title="Submit"  />
                    <View style={styles.createSection}><Text style={styles.infotext}>Already Have account ?</Text><TouchableOpacity onPress={() => { navigate(LOGIN) }} ><Text style={styles.linkBtn}>Login Here</Text></TouchableOpacity></View>
                </View>
            </View>

        </Container>

    );

}

export default SighUpComponent;