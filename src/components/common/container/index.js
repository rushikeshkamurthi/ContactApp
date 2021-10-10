import * as React from 'react';
import { View, Text,ScrollView } from "react-native";
import styles from "./styles";

// you recieve you definded styles in style var
const Container = ({ style, children }) => {

    return (
        <ScrollView >
                 {/* below styles are applied on container data recieved from  wherever  styles.wrapper in from this folder where as "style" is from  outside custom styles    */}
          {/*  sequence of css styles is important */}
            <View style={[ styles.wrapper,style ]}>

                {children}

            </View>
        </ScrollView>

    );

}
export default Container;