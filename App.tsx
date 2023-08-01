// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   FlatList,
//   ScrollView,
//   Image,
// } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Contact from './Contact';

// interface ContactData {
//   id: string;
//   name: string;
//   number: string;
// }

// const App: React.FC = () => {
//   const [inputData, setInputData] = useState({name: '', number: ''});
//   const [contacts, setContacts] = useState<ContactData[]>([]);
//   // const [currentValue, setCurrentValue] = useState({
//   //   label: '',
//   //   value: '',
//   // });
//   const [currentValue, setCurrentValue] = useState();
//   const [open, setOpen] = useState(false);

//   const addContact = () => {
//     if (inputData.name) {
//       const newContact: ContactData = {
//         id: Date.now().toString(),
//         name: inputData.name,
//         number: inputData.number,
//       };
//       setContacts(prevContacts => [...prevContacts, newContact]);
//       setInputData({name: '', number: ''});
//     }
//   };

//   const deleteContact = (id: string) => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id),
//     );
//   };

//   const contactItems = contacts.map(contact => ({
//     label: contact.name,
//     value: contact.number,
//     //TRIED TO ADD THE ICON AS A ELEMENT.

//     // icon: (
//     //   <Image
//     //     source={require('./assets/red-delete.png')}
//     //     style={styles.iconStyle}
//     //   />
//     // ),
//   }));

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contacts App</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter name"
//         placeholderTextColor={'#000'}
//         value={inputData.name}
//         onChangeText={text =>
//           setInputData(prevData => ({...prevData, name: text}))
//         }
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter number"
//         placeholderTextColor={'#000'}
//         value={inputData.number}
//         onChangeText={num =>
//           setInputData(prevData => ({...prevData, number: num}))
//         }
//       />
//       <Button title="Add Contact" onPress={addContact} />

//       {/* Tested the functionality of list */}

//       {/* <FlatList
//         style={{padding: 20}}
//         data={contacts}
//         renderItem={({item}) => (
//           <View>
//             <Text> {item.name} </Text>
//             <Text> {item.number} </Text>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//       /> */}
//       {/* <Button
//         title="click"
//         onPress={() => {
//           console.log(contactItems);
//         }}
//       /> */}

//       <ScrollView style={{marginTop: 50}}>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             fontSize: 30,
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: 20,
//           }}>
//           Contacts List
//         </Text>
//         {contacts.map(contact => (
//           <Contact
//             key={contact.id}
//             contact={contact}
//             onDelete={deleteContact}
//           />
//         ))}
//       </ScrollView>

//       <DropDownPicker
//         items={contactItems}
//         open={open}
//         setOpen={() => {
//           setOpen(!open);
//         }}
//         setItems={() => {
//           contactItems;
//         }}
//         value={currentValue}
//         //ICON IS NOT RENDERING IN THE LIST.

//         // icon={() => (
//         //   <Image
//         //     source={require('./assets/red-delete.png')}
//         //     style={styles.iconStyle}
//         //   />
//         // )}

//         setValue={val => {
//           setCurrentValue(val);
//         }}
//         onChangeSearchText={val => val}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#415A77',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#FFF',
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//     borderColor: 'gray',
//     borderWidth: 1,
//     color: '#000',
//     backgroundColor: '#FFF',
//   },
//   dropdownContainer: {
//     height: 50,
//     marginTop: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 4,
//   },
//   dropdownStyle: {
//     backgroundColor: '#fafafa',
//   },
//   labelStyle: {
//     fontSize: 16,
//     textAlign: 'left',
//     color: '#000',
//   },
//   dropdown: {
//     backgroundColor: '#fafafa',
//     marginTop: -2,
//   },
//   iconStyle: {width: 20, height: 20, margin: 19},
// });

// export default App;

import {View, Text} from 'react-native';
import React from 'react';
import Contacts from './components/Contacts';

const App = () => {
  return <Contacts />;
};

export default App;
