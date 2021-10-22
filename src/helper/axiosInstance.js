import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import envs from '../config/env'
// import envs from "../config/env";
 let headers={};
 const axiosInstance= axios.create({
baseURL:envs.DEV_BACKEND_URL,
headers,
});
axiosInstance.interceptors.request.use(
   async (config)=>{
        const token = await AsyncStorage.getItem('token'); 
        console.log('token',token);
        if(token){
         config.headers.Authorization='Bearer '+token;
        }
        console.log('================================================================================');
        console.log('header:',config);
        return config;

    },
    (error)=>{
return Promise.reject(error)   
})

export default axiosInstance;