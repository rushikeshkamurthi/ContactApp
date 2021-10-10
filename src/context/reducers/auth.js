import { CLEAR_AUTH_STATE,
     LOGIN_FAIL,
     LOGIN_LOADING,
      LOGIN_SUCCESS,
      LOGOUT_USER,
      RESGISTER_FAIL, 
      RESGISTER_LOADING,
       RESGISTER_SUCCESS 
    } from "../../constants/actionTypes";

const auth=(state,{type,payload})=>{
switch(type){
    case LOGIN_LOADING:


    case RESGISTER_LOADING:
        console.log('state',state);
        return{
            ...state,
            loading:true,
        };
        case RESGISTER_SUCCESS:
        console.log('state',state);
        return{
            ...state,
            loading:false,
            data:payload,
        };

        case LOGIN_SUCCESS:
        console.log('state',state);
        return{
            ...state,
            loading:false,
            isLoggerIn:true,
            data:payload,
        };
        case LOGOUT_USER:
        console.log('state',state);
        return{
            ...state,
            loading:false,
            isLoggerIn:false,
            data:null,
        };

        case RESGISTER_FAIL:
            case LOGIN_FAIL:
        console.log('state',state);
        return{
            ...state,
            loading:false,
            error:payload,
        };
        
        case CLEAR_AUTH_STATE:
            return{
                ...state,
                loading:false,
                data:null,
                error:null,
            };

        
       default:
           return state; 

           
    }

 
};
export default auth;