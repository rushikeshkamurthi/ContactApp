import { CLEAR_AUTH_STATE,RESGISTER_FAIL, RESGISTER_LOADING, RESGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosInstance";
export const clearAuthState = () =>(dispatch)=>{dispatch({
type:CLEAR_AUTH_STATE,
});
}
export default({
        email,
        password,
        userName:username,
     firstName:first_name,
     lastName:last_name,
    })=>dispatch=>onSuccess=> {
            dispatch({
                type: RESGISTER_LOADING,
            });
        axiosInstance.post('auth/register',{
            email,
        password,
        username,
     first_name,
     last_name,
        }).then((res)=>{dispatch({
            type: RESGISTER_SUCCESS,
            payload:res.data,
        });
        onSuccess(res.data);
    }).catch((err)=>{dispatch({
        type: RESGISTER_FAIL,
        payload:err.response?err.response.data:{error:"something wrong may be network issue"},
    });});
    };


