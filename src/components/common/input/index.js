
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";



const Input = ( {placeholder,
    secureTextEntry,
    style,
     onChangeText, 
     icon, 
     iconposition, 
     text,
      label,
      error 
    }) => {

  const[focused,setFocused]= useState(false);
    const getFlexDirections =()=>{
    if(icon && iconposition){

        if(iconposition=="left"){
            return "row";
        }else  if(iconposition==="right"){
            return "row-reverse";   
        }
    }
   };


   const getBordeColor =()=>{
    if(error){
        return colors.danger;
    }else  if(focused)
    return colors.primary;
   else return colors.gray;

   

   };

    return (
        <View  style={   [styles.inputcontainer]}>
            {label && <Text> {label} </Text>}
            <View style={[styles.wrapper ,
                {alignItems : icon? 'center' : 'baseline' } 
                ,{borderColor:getBordeColor()},
                {flexDirection:getFlexDirections()}  ]  } >
               <View>{icon&&icon}</View>
                <TextInput
                placeholder={placeholder}
                
                    style={ [styles.textInput]}
                    onChangeText={onChangeText}
                    value={text}
                    secureTextEntry={secureTextEntry}
                    onFocus={()=>  {setFocused(true);}}
                    onBlur={()=>   {setFocused(false);} }
                />
        
           
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

export default Input;