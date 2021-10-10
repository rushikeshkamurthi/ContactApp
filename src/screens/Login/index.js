import { useRoute } from '@react-navigation/core';
import * as React from 'react';

import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import { GlobalContext } from '../../context/provider';


const Login=()=>{
const {params}= useRoute();
const [form,setform] = React.useState({});
const [justSignedUp, setjustSignedUp] = React.useState(false);
 const {authDispatch,authState:{error,loading,data}
} = React.useContext(GlobalContext);
React.useEffect(() => {
  if(params?.data)
  {
    console.log('params:',params);
    console.log("login succesfull");
    setform({...form,userName:params.data.username})
  }
  }, [params]); 
 const onSubmit =() => {
  if(form.userName && form.password){
    // call some actions 
    console.log("LOGINE CLOCKE");
    loginUser(form)(authDispatch);
  }else {
    console.log("enter username and password");
  }
 }

 const onChange=({name,value})=>{
  // when text changes in the login 
  //form it will make kay value pair in the
  //[name]=value
  console.log('form data',form);
  setform({...form,[name]:value});
  //this is for first time login
  justSignedUp=false;
 };

return (  

<LoginComponent

     onSubmit={onSubmit}
        onChange={onChange} 
        form={form}
        params={params}
         loading={loading}
         error={error}
justSignedUp={justSignedUp}
/>

    );
  }

  export default Login;