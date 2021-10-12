import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Text, Button, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ContactComponent from '../../components/ContactComponent';
import {GlobalContext} from '../../context/provider';
import getContacts from '../../context/actions/contacts/getContacts';
function Contact({ navigation }) {
    const [modalVisible,setModalVisible]= React.useState(false);
    const { setOptions, toggleDrawer } = useNavigation();// destructing some options from useNavigation read use navigation  document
    const {
        contactsDispatch,
        contactsState:{getContacts:{data,loading}
    }}= React.useContext(GlobalContext);

    React.useEffect(() => {
        getContacts()(contactsDispatch);
       
    },[]);


   React.useEffect(() => {// whenever this object is rendered do this
        setOptions({
            headerLeft: () => <TouchableOpacity
                onPress={() => {
                    toggleDrawer(); // toggling drawer in click
                }}>

                <MaterialIcon name="menu" style={{ padding: 10 }} size={25} ></MaterialIcon>
            </TouchableOpacity>
        })
       
    }, []);



    return (
       <ContactComponent 
       modalVisible={modalVisible}
        setModalVisible={setModalVisible}
       data={data}
        loading={loading}
    
        > 
       </ContactComponent>
    );
}

export default Contact;
