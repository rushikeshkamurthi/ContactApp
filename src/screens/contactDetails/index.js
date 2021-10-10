
import React from "react";
import { View, Text, Button,} from 'react-native';


function contactDetails({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Contact details</Text>
        <Button
      title="Go to create new contact "
      onPress={() => navigation.navigate('CreateContact')}
    />
      </View>
    );
  }
  export default contactDetails;