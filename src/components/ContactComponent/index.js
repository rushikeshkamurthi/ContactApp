import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal'
import MessageComponent from '../common/Message';

const ContactComponent = ({ modalVisible, data,loading, setModalVisible }) => {
    const EmptyComponent = () => {
        return (
            <View style={{ paddingHorizontal: 100, paddingVertical: 80 }}>
                <MessageComponent info message="No contacts to Show"></MessageComponent>
            </View>);
    }
   // loading=true;
    const renderItem = ({ item }) => {
        console.log('item', item);

        return (<TouchableOpacity>
            <Text>Contact 1</Text>
        </TouchableOpacity>);
    }
    return (
        <View>
            <AppModal
                modalfooter={<></>
                }
                modalBody={
                    <View><Text>Hello</Text></View>
                } title="My Profile"
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}>
            </AppModal>
                {loading && <ActivityIndicator color={colors.primary}  style={{ paddingHorizontal: 100, paddingVertical: 80 }} size='large' ></ActivityIndicator>}
            {!loading && (<FlatList renderItem={renderItem}
                data={data}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={EmptyComponent} />)}
        </View>
    )
}

export default ContactComponent
