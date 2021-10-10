
import * as React from 'react';
import { View,Image, Text } from 'react-native';
import Container from '../container';
import styles from './styles';
const FlashScreenComponent = ({
    }
) => {
    return (
        <Container>
            <View>

            <Image source={require('../../../assets/images/logo.png')} style={styles.logoStyle} />
                <Text style={styles.WelcomText} > Welcome </Text>
            </View>

        </Container>

    );

}

export default FlashScreenComponent;