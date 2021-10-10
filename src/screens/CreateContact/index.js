import React from "react";
import { View, Text, Button,} from 'react-native';



function CreateContact({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>CreateContact Screen</Text>
        
        <Button
        title="Home"
        onPress={() => navigation.popToTop()}
      />

      </View>
    );
  }

  export default CreateContact;