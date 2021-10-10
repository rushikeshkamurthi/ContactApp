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

    WelcomText: {
        fontWeight: "500",
        fontSize: 22,
        margin: 20,
        textAlign: "center",
        color: colors.primary,

    },
    subtittle: {
        fontWeight: "400",
        fontSize: 18,
        marginVertical: 10,
        //textAlign:"center",
        color: colors.secondary,
    },
    form:{

        paddingTop:20,

    },
    createSection:{
        paddingTop:5,
        paddingLeft:5,
        flexDirection:'row',
    },
    infotext:{
        
    },

    linkBtn:{
        color:'blue',
    fontSize:14,
    paddingLeft:20,
    },


});