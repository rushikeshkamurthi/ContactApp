
import React, { useState } from "react";
import { ActivityIndicator, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";



const MessageComponent = (
    { onPress,
        info,
        primary,
        danger,
        retry,
        success,
        retryFn,
        onDismis,
        message,
    }) => {
    const [userDismissed, setDismissed] = useState(false);

    const getBGColor = () => {

        if (primary)
            return colors.primary;

        if (info)
            return colors.secondary;

        if (success)
            return colors.success;

        if (danger)
            return colors.danger;
    }


    return (

<>{userDismissed?null:
        <TouchableOpacity>

            <View style={[styles.wrapper, { backgroundColor: getBGColor() }]}>
                <Text style={[{ color: colors.white }, { paddingLeft: 10 }]}> {message}</Text>
                <TouchableOpacity onPress={retryFn}>
                    {retry && typeof !onDismis === "function" && <Text style={{ paddingRight: 10 }} >Retry</Text>}
                    {typeof onDismis === "function" && <TouchableOpacity onPress={() => {
                        setDismissed(true);
                        onDismis();
                    }} style={{ paddingRight: 10 }}><Text style={[{ color: colors.white }, { paddingLeft: 10 }]}>X</Text></TouchableOpacity>}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>}

</>
    );
}

export default MessageComponent;