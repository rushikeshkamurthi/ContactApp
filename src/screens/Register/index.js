
import React, { useContext } from 'react';
import SighUpComponent from '../../components/SignUp';
import { useState } from 'react';
import   register from '../../context/actions/auth/register';
import { GlobalContext,authState } from '../../context/provider';
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';
import { clearAuthState } from '../../context/actions/auth/register';
const Register =()=> {
// this will set initial state of form and error to empty{}
const [form,setform] = useState({});
const [errors,seterror] = useState({});
const {navigate}= useNavigation();
const {authDispatch,authState:{error,loading,data}} = useContext(GlobalContext);

// React.useEffect(()=>{
// if(data){
    
// }     

// },[data]);

useFocusEffect(
    React.useCallback(() => {
      
        return ()=>{ // cleanup function

            if(data||error){// add (data|| error)

                clearAuthState()(authDispatch);
              }

        };

    }, [data,error])
  );

// now lets create function that will be called every time make come changes in form
const onChange=({name,value})=>{
// set values
setform({...form,[name]:value});

if(value!==''){
    if(name==='password' && value.length<8)
    {
        seterror((prev)=> { return { ...prev,[name]:'Password must be greater than 8 length *'}}      );
    }   
    else
    seterror((prev)=> { return { ...prev,[name]:null}});
}
else{
    seterror((prev)=> { return { ...prev,[name]:'This field is required*'}}      );
}
};

const onSubmit = () => {
    // validations
   console.log("hiii form ",form)
        if(!form.userName ){
            seterror((prev)=> { return { ...prev, userName:'User Name Required '}}      );
        }
        if(!form.firstName){
            seterror((prev)=> { return { ...prev, firstName:'First Name Required '}}      );
        }
        if(!form.lastName){
            seterror((prev)=> { return { ...prev, lastName:'Last Name Required '}}      );
        }
        if(!form.email){
            seterror((prev)=> { return { ...prev, email:'Email Required '}}      );
        }
        if(!form.password){
            seterror((prev)=> { return { ...prev, password:'Password Required '}}      );
        }
       
        if( Object.values(form).length===5 &&
         Object.values(form).every(item=>item.trim().length>0) &&
         Object.values(errors).every(item=>!item)
          ){
                console.log('11111');
           register(form)(authDispatch)((response)=>{

            navigate(LOGIN,{data:response});
           });
        }
};
    return (
        <SighUpComponent 
        onSubmit={onSubmit}
        onChange={onChange} 
        form={form}
         errors={errors}
         loading={loading}
         error={error}
         
          />
    );
}

export default Register;