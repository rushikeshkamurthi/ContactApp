import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: { 
        borderColor:colors.gray,
         height: 44, 
         borderRadius:10,
          borderWidth:2,
          paddingHorizontal:10,
        marginTop:10
        },

        textInput:{
         flex:1,
     //  backgroundColor:'red',
        width:'100%'

        },
        inputcontainer:{
            
            paddingBottom: 20,
            
        },
        error:{
color:colors.danger,
padding:4,
fontSize:14,

        }
});