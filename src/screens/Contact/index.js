import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import {  Text, Button, TouchableOpacity} from 'react-native';
import Container from '../../components/common/container';


function Contact({ navigation }) {

    const {setOptions,toggleDrawer}=useNavigation();// destructing some options from useNavigation read use navigation  document
    React.useEffect(() => {// whenever this object is rendered do this
        
        setOptions({headerLeft:()=><TouchableOpacity 
        onPress={()=>{
            toggleDrawer(); // toggling drawer in click
            }}>
            <Text style={{padding:10}}>NAV</Text>
            </TouchableOpacity>})

        return () => {
            
        }
    }, [])


    return (
                    // you can specify the custome style  in below styles like {padding:20} 
            <Container style={ { } } >
            <Text>Contact Home Screen from screens folder</Text>
            

</Container>
    );
}

export default Contact;
