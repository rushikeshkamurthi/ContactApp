import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: { 
      backgroundColor:"rgba(0,0,0,0.6)",
       flex:1,
      justifyContent:"center",
      },

modalView:{
  height:300, 
  backgroundColor:colors.white,
  marginHorizontal:10,
  borderRadius:6,
},
header:{
flexDirection:"row",
padding:10,
alignItems:"center",
width:'100%',
justifyContent:"space-around"
},
title:{
fontWeight:"400",
  padding:10,
  fontSize:18,
},
body:{
minHeight:200,
},
footer:{

},
headerSeperator:{
  height:2,
  backgroundColor:colors.gray
}


        
});