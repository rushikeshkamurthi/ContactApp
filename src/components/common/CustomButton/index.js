
import React, { useState } from "react";
import { ActivityIndicator, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";



const CustomButton = ( {onPress, title,primary,secondary,danger,loading, disabled}) => {
  
    const getBGColor =()=>{
        if(disabled)
        return colors.gray;
        if(primary)
         return colors.primary;
         if(secondary)
         return colors.secondary;
         if(danger)
         return colors.danger;
    }

 
    return (
        <TouchableOpacity   
        onPress ={onPress}
         disabled={disabled}
          style={[styles.wrapper,{backgroundColor:getBGColor()} ,]}
          
          > 
            <View style={styles.loadings}> 
            <View>{loading&&<ActivityIndicator/> }</View >

        {title&&<Text  style={  [{fontSize:18} ,{color : disabled? 'black':colors.white} ,{paddingLeft:loading?10:0}]}> {title}</Text>}
                
        </View>
  
        </TouchableOpacity >
    );
}

export default CustomButton;