import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/input';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal'

const CreateContactComponent = ({
    onChangeText, 
    error, 
    loading,
     onSubmit,
     setForm,
     form }) => {
         console.log('error',error);
    return (
        <View style= { styles.container}>
            <Container>
                <TouchableOpacity>
                <Image source={require('../../assets/images/blank_profile.png')} 
                 style={{height: 150,
                  width:150,
                  alignSelf:'center',
                  borderRadius:100 
                  }} />
                   <Text style={styles.chooseImage}>Choose Image</Text></TouchableOpacity>
            <Input label= "First Name" 
            error={error?.first_name?.[0]} 
            placeholder= " Enter First Name" 
            onChangeText = {(value)=> {
                onChangeText({name:'firstName' ,value:value})
            }}  >
            </Input>
            <Input label= "Last Name"
             placeholder= " Enter Last Name" 
             error={error?.last_name?.[0]} 
            onChangeText = {(value)=> {
                onChangeText({name:'lastName' ,value:value})
            }}
            ></Input>

            <Input icon={<CountryPicker
        
          
          withFilter
          withFlag
          countryCode={form.countryCode || undefined}
          withCountryNameButton
          withAlphaFilter
          withCallingCode
          withCallingCodeButton 
          withEmoji
          onSelect = {(v)=>{ 
              const phoneCode =v.callingCode[0];
              const CCode= v.cca2;
              setForm({...form, phoneCode,countryCode:CCode});
          }}
            />
        }
        style={{paddingLeft:10}}
        iconposition="left" 
         label= "Phone Number"
          placeholder= " Enter Phone Number" 
          error={error?.phone_number?.[0]} 
         onChangeText = {(value)=> {
            onChangeText({name:'phoneNumber' ,value:value})
        }}
         ></Input>
            <CustomButton 
             loading={loading} 
             disabled={loading}
              onPress={onSubmit} 
              primary title="Submit"
                />
            </Container>
        </View>
    )
}

export default CreateContactComponent;
