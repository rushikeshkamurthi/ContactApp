import React from 'react'
import { View,
    Alert, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Container from '../../components/common/container'
import { CREATE_CONTACT, REGISTER, SETTINGS } from '../../constants/routeNames'
import logoutUser from '../../context/actions/auth/logoutUser'
import styles from './styles'

const SideMenu = ({navigation,authDispatch}) => {

    const handleLogout=()=>{
        navigation.toggleDrawer();
        Alert.alert("Logout !"," are you sure you want to logout",[
        {
            text:"Cancel",
            onPress:()=>{},
        },
        {
            text:"OK",
            onPress:()=>{
                logoutUser()(authDispatch);
            },
        },
    ]);
    };
    const menuItems=[
        {icon:<Text>T</Text>,name:'Settings',onPress:()=>{
            navigation.navigate(SETTINGS);
        },},
        
        {icon:<Text>T</Text>,name:'Create Contact',
        onPress:()=>{
            navigation.navigate(CREATE_CONTACT);
        },
    },
     
    {icon:<Text>T</Text>,name:'Logout',
    onPress:handleLogout, 
   
},

    ];
    return (
        <SafeAreaView>
    <Container>
    <Image source={require('../../assets/images/logo.png')}style={styles.logoStyle}/>

        <View>
{menuItems.map(({name,icon,onPress})=>(<TouchableOpacity onPress={onPress}
 style={[styles.item]}
 key={name}>{icon}<Text style={styles.itemText} >{name}</Text></TouchableOpacity>))}

        </View>
    </Container>
  </SafeAreaView>
    )
}

export default SideMenu;
