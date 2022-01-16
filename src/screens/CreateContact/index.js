import React, { useState ,useContext } from "react";
import { View, Text, Button,} from 'react-native';
import { set } from "react-native-reanimated";
import CreateContactComponent from "../../components/CreateContactComponent";
import createContact from "../../context/actions/contacts/createContact";
import { GlobalContext } from "../../context/provider";
import { useNavigation } from '@react-navigation/core';
import {HOME_NAVIGATOR} from '../../constants/routeNames';
function CreateContact({navigation}) {
  const {navigate} = useNavigation();
  const {contactsDispatch ,contactsState:{ createContact:{loading,error,data}}} = useContext(GlobalContext);
  const [form , setForm] = useState({});
  const onChangeText = ({name ,value}) => {
    setForm({...form,[name] : value});
  };
  const onSubmit = () =>{
   createContact(form)(contactsDispatch)(()=>{
     navigate(HOME_NAVIGATOR)
   });
  }
    return (
      <CreateContactComponent 
      loading={loading}
       setForm={setForm} 
       form={form} 
       onSubmit={onSubmit}
        onChangeText={onChangeText} 
        error={error}
        />
    );
  }

  export default CreateContact;