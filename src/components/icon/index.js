import * as React from 'react';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const getIconFont=(type)=>{
    switch (type) {
        case 'FontAwesome5':
        return FontAwesome5
            break;
            case 'FontistoIcon':
                return FontistoIcon
                    break;
                    case 'Ionicons':
                        return Ionicons
                            break;
                            case 'MaterialIcons':
                                return MaterialIcons
                                    break;
                                    case 'Zocial':
                                        return Zocial
                                            break;
        case 'Octicons':
        return Octicons
            break;
            case 'MaterialCommunityIcons':
                return MaterialCommunityIcons
                    break;
                    case 'EvilIcons':
                        return EvilIcons
                            break;
                            case 'Entypo':
                                return Entypo
                                    break;
                                    case 'FontAwesome':
                                        return FontAwesome
                                            break;
        case 'SimpleLineIcons':
        return SimpleLineIcons
            break;
            case 'AntDesign':
                return AntDesign
                    break;
                    case 'Feather':
                        return Feather
                            break;                  
        default:
            break;
    }
}

const Icon=({type,...props})=>{
const FontICon=getIconFont(type);
return <FontICon {...props} />;
};
export default Icon;