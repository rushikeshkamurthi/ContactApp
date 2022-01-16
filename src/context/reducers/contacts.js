import {
    CREATE_CONTACT_FAIL,
    CREATE_CONTACT_LOADING,
     CREATE_CONTACT_SUCCESS,
     GET_CONTACTS_FAIL,
      GET_CONTACTS_LOADING, 
      GET_CONTACTS_SUCCESS }
       from "../../constants/actionTypes";

const contacts=(state,{type,payload})=>{
    switch(type){


        case CREATE_CONTACT_LOADING:
            return {
                ...state,
                createContact:{
                    ...state.createContact,
                    loading:true,
                    error:null,
                },
            };
            case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                createContact:{
                    ...state.createContact,
                    loading:false,
                    error:null,
                    data: payload,
                },
                getContacts:{
                    ...state.getContacts,
                    data:[payload,...state.getContacts.data],
                    loading:false,
                    error:null,
                },
            };
            case CREATE_CONTACT_FAIL:
                return {
                    ...state,
                    createContact:{
                        ...state.createContact,
                        loading:false,
                        error:payload,
                        
                    },
                };
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