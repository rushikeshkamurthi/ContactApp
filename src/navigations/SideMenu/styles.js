import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    logoStyle: {
        //borderColor:colors.primary,
        height: 170,
        width: 170,
        alignSelf: "center",
        marginTop: 30,
    },

    item:{
flexDirection:'row',
justifyContent:'center',  
paddingVertical:10,
alignItems:"center",
    },
    itemStyle:{

    },
    itemText:{
fontSize:22,
      paddingLeft:20,  
    }
});