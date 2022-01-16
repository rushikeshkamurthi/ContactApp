import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    
    item:{
       flexDirection:'row',
        paddingVertical:8,
        paddingHorizontal:10,
        alignItems:'center',
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        alignItems:"center",

    },
    name:{
        flexDirection:'row',
        paddingLeft:10,
    },
    name:{
fontSize:18,
fontWeight:"400",
    },
    phoneNumber:{
paddingVertical:5,
opacity:0.6,
    },
floatingActionButton : {
    backgroundColor:'red',
    width:55,
    height:55,
    position:'absolute',
    bottom: 45,
    right: 10,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:'center',
},
});