import React from 'react'
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';
import Icon from '../../../components/icon'

const AppModal = ({ modalVisible, title, modalfooter, modalBody, setModalVisible }) => {
    return (
        <Modal transparent visible={modalVisible} style={{ backgroundColor: colors.primary }}>
            <TouchableOpacity style={styles.wrapper}
                onPress={() => {
                    setModalVisible(false);
                }}>
                <View style={styles.modalView}>
                    <ScrollView >
                        <View style={styles.header}>
                            <Icon size={21} type="MaterialIcons" name="close" />{title && <Text style={styles.title} >{title || "ContactApp"}</Text>}
                            <View /><View /><View /><View /><View />
                        </View>
                        <View style={styles.headerSeperator}></View>
                        <View style={styles.body}>
                            {modalBody}
                        </View>
                        <View style={styles.footer}>
                            {modalfooter}
                            {!modalfooter && <View><Text>this is visible becouse didnt provided any footer</Text></View>}
                        </View>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
export default AppModal;
