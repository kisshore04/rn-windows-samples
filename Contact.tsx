import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface ContactProps {
  contact: {
    id: string;
    name: string;
    number: string;
  };
  onDelete: (id: string) => void;
}

const Contact: React.FC<ContactProps> = ({contact, onDelete}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.contactText}>{contact.name}</Text>
        <Text style={styles.contactNumber}>{contact.number}</Text>
      </View>
      {/* <TouchableOpacity>
        <Image
          source={require('./assets/write.png')}
          style={{width: 25, height: 25, marginLeft: 50}}
        />
      </TouchableOpacity> */}
      <View style={{flexDirection: 'row', marginRight: 90}}>
        {/* <FontAwesomeIcon name="trash" size={24} color="red" /> */}
        <TouchableOpacity>
          <Image
            source={require('./assets/write.png')}
            style={{width: 25, height: 25, marginRight: 70}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(contact.id)}>
          <Image
            source={require('./assets/red-delete.png')}
            style={{width: 25, height: 25, marginLeft: 50}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  contactNumber: {
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default Contact;
