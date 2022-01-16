import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal'
import MessageComponent from '../common/Message';
import Icon from '../icon';
import styles from '../ContactComponent/styles';
import { CREATE_CONTACT } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';

const ContactComponent = ({ modalVisible, data, loading, setModalVisible }) => {
    const {navigate}= useNavigation();

    const EmptyComponent = () => {
        return (
            <View style={{ paddingHorizontal: 100, paddingVertical: 80 }}>
                <MessageComponent info message="No contacts to Show"></MessageComponent>
            </View>);
    }
    const renderItem = ({ item }) => {
        console.log('item', item);
        const { contact_picture, first_name, last_name, phone_number,country_code } = item;
        
        const navigate = ()=>{

        }
        return (<TouchableOpacity style={styles.itemContainer}>
            <View style={styles.item}> 
            <View style={{borderRadius:100}}>{/* profile photo */}{contact_picture ?
                <View >
                    <Image
                style={
                    { borderRadius:50,
                        width: 45,
                        height: 45,
                        backgroundColor: colors.danger
                    }}
                source={{ uri: contact_picture }}/>
                </View> : 
                <View style={{flexDirection:'row',
                alignItems:'center',
                borderRadius:100,
                       width: 45,
                       height: 45,
                       alignItems:'center',
                       justifyContent:'center',
                       backgroundColor: colors.gray,
                }}><Text style={{fontSize:20,opacity:0.5,}}>{first_name[0]}{last_name[0]}</Text></View>}</View>
            <View  style={{ paddingLeft:20}}>
           

                <View style={{flexDirection:'row'}}><Text style={styles.name}>{first_name} </Text><Text style={styles.name}>{last_name}</Text></View>

                <Text style={styles.phoneNumber}>{country_code} {phone_number}</Text>
            </View>
        
            
            </View>
            <Icon name="right" size={20} type="AntDesign"></Icon>
        </TouchableOpacity>);
    }
    return (
        <>
        <View style={{ backgroundColor: colors.white }}>
            <AppModal
                modalfooter={<></>
                }
                modalBody={
                    <View><Text>Hello</Text></View>
                } title="My Profile"
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}>
            </AppModal>
            {loading && <ActivityIndicator color={colors.primary} style={{ paddingHorizontal: 100, paddingVertical: 80 }} size='large' ></ActivityIndicator>}
            {!loading && (
                <View style={{ paddingVertical: 10 }}><FlatList renderItem={renderItem}
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    ListEmptyComponent={EmptyComponent}
                    ListFooterComponent={<View style={{ height: 100 }} />}
                /></View>
            )}
        </View>
            <TouchableOpacity style={styles.floatingActionButton} onPress={()=>navigate(CREATE_CONTACT)}>
            <Icon name="plus" size={22} type="Feather" color={colors.white}></Icon>
            </TouchableOpacity>
        </>    )
};
export default ContactComponent


