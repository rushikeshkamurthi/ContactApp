import React, { useState } from "react";
import { View, Text, Button,} from 'react-native';
import { set } from "react-native-reanimated";
import CreateContactComponent from "../../components/CreateContactComponent";
import createContact from "../../context/actions/contacts/createContact";



function CreateContact({navigation}) {
  const [form , setForm] = useState({});

  const onChangeText = ({name ,value}) => {
    setForm({...form,[name] : value});
  };
  const onSubmit = () =>{
   createContact(form)(contactsDispatched);
   console.log('form : ', form );
  }
    return (
      <CreateContactComponent setForm={setForm} form={form} onSubmit={onSubmit} onChangeText={onChangeText} form = {form}/>
    );
  }

  export default CreateContact;