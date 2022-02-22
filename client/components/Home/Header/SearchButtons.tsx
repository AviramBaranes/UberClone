import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const LeftButton = () => (
  <View style={{ marginLeft: 10 }}>
    <Ionicons name='location-sharp' size={24} />
  </View>
);

export const RightButton = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 8,
      backgroundColor: 'white',
      padding: 9,
      borderRadius: 30,
    }}
  >
    <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
    <Text>Search</Text>
  </View>
);
