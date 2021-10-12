import {
     GET_CONTACTS_FAIL,
      GET_CONTACTS_LOADING, 
      GET_CONTACTS_SUCCESS }
       from "../../constants/actionTypes";

const contacts=(state,{type,payload})=>{
    switch(type){
        case GET_CONTACTS_LOADING:
            return {
                ...state,
                getContacts:{
                    ...state.getContacts,
                    loading:true,
                    error:null,
                },
            };

        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                getContacts:{
                    ...state.getContacts,
                    data:payload,
                    loading:false,
                    error:null,
                },
               
            };
        case GET_CONTACTS_FAIL:
            return {
                ...state,
                getContacts:{
                    ...state.getContacts,
                    error:payload,
                    loading:false,
                    
                },
            };
     
           default:
               return state;            
        }
    };
    export default contacts;