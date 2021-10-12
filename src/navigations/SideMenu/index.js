import * as React from 'react';
import { View,Alert, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Container from '../../components/common/container'
import { CREATE_CONTACT, REGISTER, SETTINGS } from '../../constants/routeNames'
import logoutUser from '../../context/actions/auth/logoutUser'
import styles from './styles'
import Icon from '../../components/icon'
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
        {icon:<Icon type="FontistoIcon" name="player-settings" size={25}></Icon>,name:'Settings',onPress:()=>{
            navigation.navigate(SETTINGS);
        },},
        
        {icon:<Icon type="Ionicons" name="person-add-outline" size={25}></Icon>,name:'Create Contact',
        onPress:()=>{
            navigation.navigate(CREATE_CONTACT);
        },
    },
     
    {icon:<Icon type="MaterialIcons" name="logout" size={25}></Icon>,name:'Logout',
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
